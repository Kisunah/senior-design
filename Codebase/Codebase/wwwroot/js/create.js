var app = new Vue({

    el: '#create',

    // Test data
    data: {
        selectedTags: [],
        tags: [
            { id: 1, creationDate: "2021-12-08", tag: "Sorting" },
            { id: 2, creationDate: "2021-12-08", tag: "Parallel" },
            { id: 3, creationDate: "2021-12-08", tag: "Help" },
            { id: 4, creationDate: "2021-12-08", tag: "CUDA" },
            { id: 5, creationDate: "2021-12-08", tag: "DB" },
            { id: 6, creationDate: "2021-12-08", tag: "Problem" },
            { id: 7, creationDate: "2021-12-08", tag: "NP-Complete" },
            { id: 8, creationDate: "2021-12-08", tag: "HTTP" },
            { id: 9, creationDate: "2021-12-08", tag: "Python3" },
            { id: 10, creationDate: "2021-12-08", tag: "Python2.7" },
            { id: 11, creationDate: "2021-12-08", tag: "G++" },
            { id: 12, creationDate: "2021-12-08", tag: "Compiler Error" },
            { id: 13, creationDate: "2021-12-08", tag: "SQL" },
            { id: 14, creationDate: "2021-12-08", tag: "Select" },
            { id: 15, creationDate: "2021-12-08", tag: "CRUD" }
        ],
        languages: [
            { id: 1, language: "Python" },
            { id: 2, language: "Java" },
            { id: 3, language: "JavaScript" },
            { id: 4, language: "C#" },
            { id: 5, language: "C / C++" },
            { id: 6, language: "PHP" },
            { id: 7, language: "R" },
            { id: 8, language: "Swift" },
            { id: 9, language: "Objective" },
            { id: 10, language: "Matlab" },
            { id: 11, language: "TypeScript" },
            { id: 12, language: "Go" },
            { id: 13, language: "Kotlin" },
            { id: 14, language: "VBA" },
            { id: 15, language: "Rust" },
            { id: 16, language: "Ruby" },
            { id: 17, language: "Ada" },
            { id: 18, language: "Scala" },
            { id: 19, language: "Dart" },
            { id: 20, language: "Abap" },
            { id: 21, language: "Visual Basic" },
            { id: 22, language: "Groovy" },
            { id: 23, language: "Lua" },
            { id: 24, language: "Julia" },
            { id: 25, language: "Perl" },
            { id: 26, language: "Haskell" },
            { id: 27, language: "Cobol" }
        ],
    },

    computed: {



    },

    mounted: function () {
        let v = this;

        var textarea_editor = document.getElementById("textarea_editor");

        textarea_editor.value = "";

        v.editor = CodeMirror.fromTextArea(textarea_editor, {
            tabSize: 4,
            mode: 'python',
            theme: '3024-night',
            lineNumbers: true,
            styleActiveSelected: true,
            styleActiveLine: true,
            indentWithTabs: true,
            matchBrackets: true,
            highlightMatches: true,
            readOnly: false,
        });

        alert(snippetId);
    },

    methods: {

        tagDetails: function () {
            let v = this;

            alert("Tag info...");
        },

        addTag: function () {
            let v = this;

            
        },

    }

})

