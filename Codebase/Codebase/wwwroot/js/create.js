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

    },

    watch: {

        language: function (val) {
            let v = this;

            v.editor.setOption("mode", val);
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

            v.tags = [
                { id: 1, description: "This is a test to see how things look and it is interesting!", tag: "Sorting" },
                { id: 2, description: "This is a test to see how things look and it is interesting!", tag: "Parallel" },
                { id: 3, description: "This is a test to see how things look and it is interesting!", tag: "Help" },
                { id: 4, description: "This is a test to see how things look and it is interesting!", tag: "CUDA" },
                { id: 5, description: "This is a test to see how things look and it is interesting!", tag: "DB" },
                { id: 6, description: "This is a test to see how things look and it is interesting!", tag: "Problem" },
                { id: 7, description: "This is a test to see how things look and it is interesting!", tag: "NP-Complete" },
                { id: 8, description: "This is a test to see how things look and it is interesting!", tag: "HTTP" },
                { id: 9, description: "This is a test to see how things look and it is interesting!", tag: "Python3" },
                { id: 10, description: "This is a test to see how things look and it is interesting!", tag: "Python2.7" },
                { id: 11, description: "This is a test to see how things look and it is interesting!", tag: "G++" },
                { id: 12, description: "This is a test to see how things look and it is interesting!", tag: "Compiler Error" },
                { id: 13, description: "This is a test to see how things look and it is interesting!", tag: "SQL" },
                { id: 14, description: "This is a test to see how things look and it is interesting!", tag: "Select" },
                { id: 15, description: "This is a test to see how things look and it is interesting!", tag: "CRUD" },
                { id: 16, description: "This is a test to see how things look and it is interesting!", tag: "CRUD1" },
                { id: 17, description: "This is a test to see how things look and it is interesting!", tag: "CRUD2" },
                { id: 18, description: "This is a test to see how things look and it is interesting!", tag: "CRUD3" },
                { id: 19, description: "This is a test to see how things look and it is interesting!", tag: "CRUD4" },
                { id: 20, description: "This is a test to see how things look and it is interesting!", tag: "CRUD5" },
                { id: 21, description: "This is a test to see how things look and it is interesting!", tag: "CRUD6" },
                { id: 22, description: "This is a test to see how things look and it is interesting!", tag: "CRUD7" },
                { id: 23, description: "This is a test to see how things look and it is interesting!", tag: "CRUD8" },
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

            v.languages = [
                { id: 1, description: "This is a test to see what a language description would look like!", language: "Python" },
                { id: 2, description: "This is a test to see what a language description would look like!", language: "cmake" },
                { id: 3, description: "This is a test to see what a language description would look like!", language: "JavaScript" },
                { id: 4, description: "This is a test to see what a language description would look like!", language: "C, C++, C#" },
                { id: 5, description: "This is a test to see what a language description would look like!", language: "c / c++" },
                { id: 6, description: "This is a test to see what a language description would look like!", language: "PHP" },
                { id: 7, description: "This is a test to see what a language description would look like!", language: "R" },
                { id: 8, description: "This is a test to see what a language description would look like!", language: "Swift" },
                { id: 9, description: "This is a test to see what a language description would look like!", language: "Objective" },
                { id: 10, description: "This is a test to see what a language description would look like!", language: "Matlab" },
                { id: 11, description: "This is a test to see what a language description would look like!", language: "TypeScript" },
                { id: 12, description: "This is a test to see what a language description would look like!", language: "Go" },
                { id: 13, description: "This is a test to see what a language description would look like!", language: "Kotlin" },
                { id: 14, description: "This is a test to see what a language description would look like!", language: "VBA" },
                { id: 15, description: "This is a test to see what a language description would look like!", language: "Rust" },
                { id: 16, description: "This is a test to see what a language description would look like!", language: "Ruby" },
                { id: 17, description: "This is a test to see what a language description would look like!", language: "Ada" },
                { id: 18, description: "This is a test to see what a language description would look like!", language: "Scala" },
                { id: 19, description: "This is a test to see what a language description would look like!", language: "Dart" },
                { id: 20, description: "This is a test to see what a language description would look like!", language: "Abap" },
                { id: 21, description: "This is a test to see what a language description would look like!", language: "Visual Basic" },
                { id: 22, description: "This is a test to see what a language description would look like!", language: "Groovy" },
                { id: 23, description: "This is a test to see what a language description would look like!", language: "Lua" },
                { id: 24, description: "This is a test to see what a language description would look like!", language: "Julia" },
                { id: 25, description: "This is a test to see what a language description would look like!", language: "Perl" },
                { id: 26, description: "This is a test to see what a language description would look like!", language: "Haskell" },
                { id: 27, description: "This is a test to see what a language description would look like!", language: "Cobol" }
            ];
        },

        tagDetails: function () {
            let v = this;

            alert("Tag info...");
        },

        addTag: function () {
            let v = this;

            
        },

    }

})

