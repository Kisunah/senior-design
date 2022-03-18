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

			var lang = null;
			if (v.snippet.language === "c" || v.snippet.language === "c#" || v.snippet.language === "c++") {
				lang = "clike";
			}
			else {
				lang = v.snippet.language;
			}

			v.editor = CodeMirror.fromTextArea(textarea_editor, {
				tabSize: 4,
				mode: lang,
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

			var langcode = null;
			var versionindex = null;

			if (v.snippet.language === "c") {
				langcode = "c";
				versionindex = "5";
			} else if (v.snippet.language === "c++") {
				langcode = "cpp17";
				versionindex = "1";
			} else if(v.snippet.language === "php") {
				langcode = "php";
				versionindex = "4";
			} else if (v.snippet.language === "perl") {
				langcode = "perl";
				versionindex = "4";
			} else if (v.snippet.language === "python") {
				langcode = "python3";
				versionindex = "4";
			} else if (v.snippet.language === "ruby") {
				langcode = "ruby";
				versionindex = "4";
			} else if (v.snippet.language === "go") {
				langcode = "go";
				versionindex = "4";
			} else if (v.snippet.language === "c#") {
				langcode = "csharp";
				versionindex = "4";
			} else if (v.snippet.language === "r") {
				langcode = "r";
				versionindex = "4";
			} else {
				langcode = "clojure";
				versionindex = "3";
			}

			$.ajax({
				url: "https://api.jdoodle.com/v1/execute",
				contentType: "application/json; charset=utf-8",
				type: "json",
				data: {
					clientId: "a7c32c59a02db14c68f27b026c75e6b6",
					clientSecret: "fac2276dcb1d21eb57450fee25566108916fc6611e9e21ab1fc10509f84a2da6",
					script: v.editor.getValue(),
					language: langcode,
					versionIndex: versionindex
				},
				type: "POST",
				success: function (data) {
					v.output.setValue(data.output)
				},
				error: function (error) {
					v.output.setValue(error.error);
				}
			});
        },

	}

})