var app = new Vue({

	el: '#create',

	// Test data
	data: {
		tags: [],
		languages: [],
		editor: null,

		selectedTags: [],
		isPublic: "true",
		title: null,
		language: null,
		description: "",

		filterModalType: null,
		filterModalData: null,
		filterModalSelected: null,
	},

	watch: {

		language: function (val) {
			let v = this;

			if (val === "c" || val === "c#" || val === "c++") {
				v.editor.setOption("mode", "clike");
			}
			else {
				v.editor.setOption("mode", val);
            }
			
		}

	},

	mounted: function () {
		let v = this;

		v.getTags();
		v.getLangauges();

		var textarea_editor = document.getElementById("textarea_editor");
		textarea_editor.value = "";

		v.editor = CodeMirror.fromTextArea(textarea_editor, {
			tabSize: 4,
			mode: 'text',
			theme: 'xq-light',
			lineNumbers: true,
			styleActiveSelected: true,
			styleActiveLine: true,
			indentWithTabs: true,
			matchBrackets: true,
			highlightMatches: true,
			readOnly: false,
		});

		v.editor.setSize("100%", "100%");
	},

	methods: {

		getTags: async function () {
			let v = this;

			$.ajax({
				url: document.location.origin + "/codebase/getTags",
				type: "POST",
				success: function (data) {
					v.tags = data
				},
				error: function (error) {
					console.log(error);
				}
			});
		},

		getLangauges: async function () {
			let v = this;

			$.ajax({
				url: document.location.origin + "/codebase/getLanguages",
				type: "POST",
				success: function (data) {
					v.languages = data
				},
				error: function (error) {
					console.log(error);
				}
			});
		},

		addTags: function () {
			let v = this;

			v.filterModalType = "Tag";
			v.filterModalData = v.tags;
			v.filterModalSelected = v.selectedTags.map(function (t) {
				return t;
			});

			$('#filter-modal').modal('show');
		},

		editFromModal: function (type, action, id) {
			let v = this;

			_.forEach(v.tags, function (t) {
				if (t === id) {
					if (action === "added") {
						if (!v.selectedTags.includes(t)) {
							v.selectedTags.push(t);
                        }
					} else {
						v.selectedTags = _.filter(v.selectedTags, function (t) {
							if (t !== id) {
								return t;
							}
						});
					}
				}
			});
		},

		saveSnippet: function () {
			let v = this;

			$.ajax({
				url: document.location.origin + "/codebase/createCodeblock",
				contentType: "application/json; charset=utf-8",
			    type: "POST",
			    data: JSON.stringify({
			        "userId": v.userID,
			        "title": v.title,
			        "isPublic": v.isPublic === "true" ? true : false,
			        "language": v.language,
			        "description": v.description,
			        "tags": v.selectedTags,
			        "code": v.editor.getValue()
			    }),
			    success: function () {
			        v.returnHome();
			    },
			    error: function (error) {
			        console.log(error);
			    }
			});
		},

		returnHome: function () {
			let v = this;

			window.location = '/c/Home';
		}

	}

})