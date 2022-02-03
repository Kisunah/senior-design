var app = new Vue({

	el: '#create',

	// Test data
	data: {
		tags: [],
		languages: [],
		editor: null,

		selectedTags: [],
		isPrivate: true,
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

			v.editor.setOption("mode", val.language);
		}

	},

	computed: {


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
			theme: '3024-night',
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

			//$.ajax({
			//    url: /*API ENDPOINT*/,
			//    type: "GET",
			//    success: function (data) {
			//        v.tags = data
			//    },
			//    error: function (error) {
			//        console.log(error);
			//    }
			//});

			v.tags = [{
				id: 1,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag1"
			},
			{
				id: 2,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag2"
			},
			{
				id: 3,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag3"
			},
			{
				id: 4,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag4"
			},
			{
				id: 5,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag5"
			},
			{
				id: 6,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag6"
			},
			{
				id: 7,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag7"
			},
			{
				id: 8,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag8"
			},
			{
				id: 9,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag9"
			},
			{
				id: 10,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag10"
			},
			{
				id: 11,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag11"
			},
			{
				id: 12,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag12"
			},
			{
				id: 13,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag13"
			},
			{
				id: 14,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag14"
			},
			{
				id: 15,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag15"
			},
			{
				id: 16,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag16"
			},
			{
				id: 17,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag17"
			},
			{
				id: 18,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag18"
			},
			{
				id: 19,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag19"
			},
			{
				id: 20,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag20"
			},
			{
				id: 21,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag21"
			},
			{
				id: 22,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag22"
			},
			];
		},

		getLangauges: async function () {
			let v = this;

			//$.ajax({
			//    url: /*API ENDPOINT*/,
			//    type: "GET",
			//    success: function (data) {
			//        v.tags = data
			//    },
			//    error: function (error) {
			//        console.log(error);
			//    }
			//});

			v.languages = [{
				id: 1,
				description: "This is a test to see what a language description would look like!",
				language: "asciiarmor"
			},
			{
				id: 2,
				description: "This is a test to see what a language description would look like!",
				language: "clike"
			},
			{
				id: 3,
				description: "This is a test to see what a language description would look like!",
				language: "clojure"
			},
			{
				id: 4,
				description: "This is a test to see what a language description would look like!",
				language: "cmake"
			},
			{
				id: 5,
				description: "This is a test to see what a language description would look like!",
				language: "css"
			},
			{
				id: 7,
				description: "This is a test to see what a language description would look like!",
				language: "go"
			},
			{
				id: 8,
				description: "This is a test to see what a language description would look like!",
				language: "haskell"
			},
			{
				id: 9,
				description: "This is a test to see what a language description would look like!",
				language: "htmlembedded"
			},
			{
				id: 10,
				description: "This is a test to see what a language description would look like!",
				language: "javascript"
			},
			{
				id: 12,
				description: "This is a test to see what a language description would look like!",
				language: "markdown"
			},
			{
				id: 13,
				description: "This is a test to see what a language description would look like!",
				language: "mathematica"
			},
			{
				id: 14,
				description: "This is a test to see what a language description would look like!",
				language: "pascal"
			},
			{
				id: 15,
				description: "This is a test to see what a language description would look like!",
				language: "perl"
			},
			{
				id: 16,
				description: "This is a test to see what a language description would look like!",
				language: "php"
			},
			{
				id: 17,
				description: "This is a test to see what a language description would look like!",
				language: "powershell"
			},
			{
				id: 18,
				description: "This is a test to see what a language description would look like!",
				language: "properties"
			},
			{
				id: 19,
				description: "This is a test to see what a language description would look like!",
				language: "python"
			},
			{
				id: 20,
				description: "This is a test to see what a language description would look like!",
				language: "q"
			},
			{
				id: 21,
				description: "This is a test to see what a language description would look like!",
				language: "r"
			},
			{
				id: 22,
				description: "This is a test to see what a language description would look like!",
				language: "ruby"
			},
			{
				id: 24,
				description: "This is a test to see what a language description would look like!",
				language: "sas"
			},
			{
				id: 25,
				description: "This is a test to see what a language description would look like!",
				language: "sass"
			},
			{
				id: 26,
				description: "This is a test to see what a language description would look like!",
				language: "scheme"
			},
			{
				id: 27,
				description: "This is a test to see what a language description would look like!",
				language: "shell"
			},
			{
				id: 28,
				description: "This is a test to see what a language description would look like!",
				language: "spreadsheet"
			},
			{
				id: 29,
				description: "This is a test to see what a language description would look like!",
				language: "sql"
			},
			{
				id: 30,
				description: "This is a test to see what a language description would look like!",
				language: "swift"
			},
			{
				id: 31,
				description: "This is a test to see what a language description would look like!",
				language: "vb"
			},
			{
				id: 32,
				description: "This is a test to see what a language description would look like!",
				language: "yaml"
			}
			];
		},

		addTags: function () {
			let v = this;

			v.filterModalType = "Tag";
			v.filterModalData = v.tags;
			v.filterModalSelected = v.selectedTags.map(function (t) {
				return t.id;
			});

			$('#filter-modal').modal('show');
		},

		editFromModal: function (type, action, id) {
			let v = this;

			_.forEach(v.tags, function (t) {
				if (t.id === id) {
					if (action === "added") {
						v.selectedTags.push(t);
					} else {
						v.selectedTags = _.filter(v.selectedTags, function (t) {
							if (t.id !== id) {
								return t;
							}
						});
					}
				}
			});
		},

		saveSnippet: function () {
			let v = this;

			//$.ajax({
			//    url: /*API ENDPOINT*/,
			//    type: "POST",
			//    data: {
			//        "UserID": v.userID,
			//        "Title": v.title,
			//        "IsPrivate": v.isPrivate === "true" ? true : false,
			//        "LangaugeID": v.language.id,
			//        "Dexcription": v.description,
			//        "TagIDs": v.selectedTags.map(function (t) { return t.id;}),
			//        "Code": v.editor.getValue()
			//    },
			//    success: function () {
			//        v.returnHome();
			//    },
			//    error: function (error) {
			//        console.log(error);
			//    }
			//});
		},

		returnHome: function () {
			let v = this;

			window.location = '/c/Home';
		}

	}

})