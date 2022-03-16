var app = new Vue({

	el: '#snippet',

	// Test data
	data: {
		snippet: {},
		relatedSnippets: [],
		editor: null,
		comment: null,
		realLanguageCode: null,

		infoModalType: null,
		infoModalItem: null,
		infoModalDescription: null,
	},

	mounted: function () {
		let v = this;

		v.getSnippet(snippetId);
		v.getRelated(snippetId);

		setTimeout(function () {
			var textarea_editor = document.getElementById("textarea_editor");
			textarea_editor.value = v.snippet.code;

			v.editor = CodeMirror.fromTextArea(textarea_editor, {
				tabSize: 4,
				mode: v.realLanguageCode,
				theme: '3024-night',
				lineNumbers: true,
				styleActiveSelected: true,
				styleActiveLine: true,
				indentWithTabs: true,
				matchBrackets: true,
				highlightMatches: true,
				readOnly: true,
			});
			v.editor.setSize("100%", "100%");
		}, 3000);

	},

	methods: {

		getSnippet: async function (id) {
			let v = this;

			$.ajax({
				url: document.location.origin + "/codebase/getCodeblocks",
				contentType: "application/json; charset=utf-8",
				data: JSON.stringify({
					"filter": {
						"id": id.toString()
					}
				}),
				type: "POST",
				success: function (data) {
					v.snippet = data.codeblocks[0];
					v.snippet.creationDate = moment(v.snippet.creationDate).format("MM/DD/YYYY");
					_.forEach(v.snippet.comments, (s) => {
						s.creationDate = moment(s.creationDate).format("MM/DD/YYYY");
					});
					if (v.snippet.language === "c" || v.snippet.language === "c#" || v.snippet.language === "c++") {
						v.realLanguageCode = "clike";
					}
					else {
						v.realLanguageCode = v.snippet.language
					}
				},
				error: function (error) {
					console.log(error);
				}
			});
		},

		getRelated: async function (id) {
			let v = this;

			$.ajax({
				url: document.location.origin + "/codebase/getCodeblocks",
				contentType: "application/json; charset=utf-8",
				data: {
					filter: {
						id: ""
					}
				},
				type: "POST",
				success: function (data) {
					v.relatedSnippets = data.codeblocks;
				},
				error: function (error) {
					console.log(error);
				}
			});
		},

		tagDetails: function (tag) {
			let v = this;

			v.infoModalType = "Tag";
			v.infoModalItem = tag.tag;
			v.infoModalDescription = "temp";

			$('#info-modal').modal('show');
		},

		upvote: function (snippet) {
			let v = this;

			$.ajax({
				url: document.location.origin + "/codebase/" + snippet.id + "/upVote",
				type: "POST",
				success: function (data) {
					v.snippet.voteCount = v.snippet.voteCount + 1;
				},
				error: function (error) {
				}
			});
		},

		downvote: function (snippet) {
			let v = this;

			$.ajax({
				url: document.location.origin + "/codebase/" + snippet.id + "/downVote",
				type: "POST",
				success: function (data) {
					v.snippet.voteCount = v.snippet.voteCount - 1;
				},
				error: function (error) {
				}
			});
		},

		postComment: function () {
			let v = this;

			$.ajax({
				url: document.location.origin + "/codebase/" + snippetId + "/createComment",
				contentType: "application/json; charset=utf-8",
				data: JSON.stringify({
					"comment": v.comment
				}),
				type: "POST",
				success: function (data) {
					v.getSnippet(snippetId);
					v.comment = "";
				},
				error: function (error) {
					console.log(error);
				}
			});
		},

		copy: function () {
			let v = this;

			navigator.clipboard.writeText(v.snippet.code);
		},

		openEditor: function () {
			let v = this;

			window.open(document.location.origin + "/c/Sandbox?id=" + snippetId, "_blank")
        },

	}

})