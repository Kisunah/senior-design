var app = new Vue({

	el: '#sandbox',

	// Test data
	data: {
		snippet: {},
		editor: null,
		output: null,
		realLanguageCode: null,
	},

	computed: {

		compilable: function () {
			let v = this;

			var languages = ["c","c++","php","perl","python","ruby","go","c#","r","clojure"]

			if (languages.includes(v.snippet.language)) {
				return true;
			}
			else {
				return false;
            }
		}

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

			var textarea_output = document.getElementById("textarea_output");
			textarea_output.value ="output...";

			v.output = CodeMirror.fromTextArea(textarea_output, {
				tabSize: 4,
				mode: 'text',
				theme: 'xq-light',
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

		compile: async function () {
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
				url: document.location.origin + "/codebase/compileCodeblock",
				contentType: "application/json; charset=utf-8",
				data: JSON.stringify({
					code: v.editor.getValue(),
					language: langcode,
					versionIndex: versionindex
				}),
				type: "POST",
				success: function (data) {
					var jsonObject = JSON.parse(data);
					v.output.getDoc().setValue(jsonObject.output);
				},
				error: function (error) {
				}
			});
        },

	}

})