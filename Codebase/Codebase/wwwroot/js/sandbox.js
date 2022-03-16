var app = new Vue({

	el: '#sandbox',

	// Test data
	data: {
		snippet: {},
		editor: null,
		output: null,
		realLanguageCode: null,
	},

	mounted: function () {
		let v = this;

		v.getSnippet(snippetId);

		setTimeout(function () {
			var textarea_editor = document.getElementById("textarea_editor");
			textarea_editor.value = v.snippet.code;

			v.editor = CodeMirror.fromTextArea(textarea_editor, {
				tabSize: 4,
				mode: v.snippet.language,
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

			var textarea_output = document.getElementById("textarea_output");

			v.output = CodeMirror.fromTextArea(textarea_output, {
				tabSize: 4,
				mode: 'shell',
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

		copy: function () {
			let v = this;

			navigator.clipboard.writeText(v.editor.getValue());
		},

		compile: function () {
			let v = this;


        },

	}

})