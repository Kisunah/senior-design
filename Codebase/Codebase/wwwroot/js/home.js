var app = new Vue({

    el: '#home',

    // Test data
    data: {
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
        snippets: [
            { id: 1, userID: 1,  username: "ProgrammerNumber1", creationDate: "2021-12-08", languageID: 1, language: "Python",     tags: [], title: "Title 1",  upvotes: 10, downvotes: 1230},
            { id: 2, userID: 1,  username: "ProgrammerNumber1", creationDate: "2021-12-09", languageID: 2, language: "Java",       tags: [{id: 1, tag:"Sorting"}, {id: 8, tag:"HTTP"}, {id: 2, tag:"Parallel"}], title: "Title 2",  upvotes: 100, downvotes: 150},
            { id: 3, userID: 1,  username: "ProgrammerNumber1", creationDate: "2021-12-10", languageID: 1, language: "Python",     tags: [{id: 2, tag:"Parallel"}], title: "Title 3",  upvotes: 1000, downvotes: 45},
            { id: 4, userID: 1,  username: "ProgrammerNumber1", creationDate: "2021-12-11", languageID: 3, language: "JavaScript", tags: [{id: 3, tag:"Help"}], title: "Title 4",  upvotes: 1000000, downvotes: 9789},
            { id: 5, userID: 1,  username: "ProgrammerNumber1", creationDate: "2021-12-12", languageID: 1, language: "Python",     tags: [{id: 4, tag:"CUDA"}, {id: 15, tag:"CRUD"}], title: "Title 5",  upvotes: 100, downvotes: 7815},
            { id: 6, userID: 2,  username: "Student1",          creationDate: "2021-11-20", languageID: 2, language: "Java",       tags: [{id: 5, tag:"DB"}, {id: 1, tag:"Sorting"}], title: "Title 6",  upvotes: 10000, downvotes: 45},
            { id: 7, userID: 2,  username: "Student1",          creationDate: "2021-11-16", languageID: 3, language: "JavaScript", tags: [{id: 6, tag:"Problem"}, { id: 1, tag: "Sorting" }, { id: 8, tag: "HTTP" }, { id: 2, tag: "Parallel" }], title: "Title 7",  upvotes: 10000, downvotes: 498},
            { id: 8, userID: 2,  username: "Student1",          creationDate: "2021-11-14", languageID: 2, language: "Java",       tags: [{id: 7, tag:"NP-Complete"}, {id: 6, tag:"Problem"}, { id: 1, tag: "Sorting" }, { id: 8, tag: "HTTP" }, { id: 2, tag: "Parallel" }], title: "Title 8",  upvotes: 100, downvotes: 78},
            { id: 9, userID: 2,  username: "Student1",          creationDate: "2021-08-08", languageID: 1, language: "Python",     tags: [], title: "Title 9",  upvotes: 10, downvotes: 126},
            { id: 10, userID: 2, username: "Student1",          creationDate: "2021-07-08", languageID: 3, language: "JavaScript", tags: [{id: 8, tag:"HTTP"}], title: "Title 10", upvotes: 1, downvotes: 7851},
            { id: 11, userID: 2, username: "Student1",          creationDate: "2021-06-08", languageID: 3, language: "JavaScript", tags: [{id: 9, tag:"Python3"}, {id: 6, tag:"Problem"}, { id: 1, tag: "Sorting" }, { id: 8, tag: "HTTP" }, { id: 2, tag: "Parallel" }], title: "Title 11", upvotes: 100, downvotes: 781},
            { id: 12, userID: 2, username: "Student1",          creationDate: "2021-05-08", languageID: 3, language: "JavaScript", tags: [{id: 10, tag:"Python2.7"}, {id: 1, tag:"Sorting"}], title: "Title 12", upvotes: 10000, downvotes: 7841},
            { id: 13, userID: 2, username: "Student1",          creationDate: "2021-04-08", languageID: 3, language: "JavaScript", tags: [{id: 11, tag:"G++"}], title: "Title 13", upvotes: 10, downvotes: 78},
            { id: 14, userID: 3, username: "RegularDude1",      creationDate: "2021-04-15", languageID: 1, language: "Python",     tags: [{id: 12, tag:"Compiler Error"}], title: "Title 14", upvotes: 10, downvotes: 0},
            { id: 15, userID: 3, username: "RegularDude1",      creationDate: "2021-05-15", languageID: 1, language: "Python",     tags: [{id: 13, tag:"SQL"}, {id: 15, tag:"CRUD"}], title: "Title 15", upvotes: 10, downvotes: 7849},
            { id: 16, userID: 3, username: "RegularDude1",      creationDate: "2021-06-15", languageID: 1, language: "Python",     tags: [{id: 14, tag:"Select"}, { id: 15, tag: "CRUD"}, { id: 9, tag: "Python3" }, { id: 6, tag: "Problem" }, { id: 1, tag: "Sorting" }, { id: 8, tag: "HTTP" }, { id: 2, tag: "Parallel" }], title: "Title 16", upvotes: 1, downvotes: 78},
            { id: 17, userID: 3, username: "RegularDude1",      creationDate: "2021-07-15", languageID: 2, language: "Java",       tags: [], title: "Title 17", upvotes: 1, downvotes:950},
            { id: 18, userID: 3, username: "RegularDude1",      creationDate: "2021-08-15", languageID: 3, language: "JavaScript", tags: [{id: 15, tag:"CRUD"}, {id: 9, tag:"Python3"}, {id: 6, tag:"Problem"}, { id: 8, tag: "HTTP" }, { id: 2, tag: "Parallel" }, {id: 1, tag:"Sorting"}], title: "Title 18", upvotes: 10, downvotes: 0},
            { id: 19, userID: 3, username: "RegularDude1",      creationDate: "2021-09-15", languageID: 3, language: "JavaScript", tags: [], title: "Title 19", upvotes: 1, downvotes: 1},
            { id: 20, userID: 3, username: "RegularDude1",      creationDate: "2021-10-15", languageID: 3, language: "JavaScript", tags: [], title: "Title 20", upvotes: 100000, downvotes: 77770},
        ],
        topTenSnippets: [
            { id: 1, userID: 1, username: "ProgrammerNumber1", creationDate: "2021-12-08", languageID: 1, language: "Python", title: "Title 1101010 1001010101 010010", description: "This is a completely random bit of code for which i have done nothing and have no ambition", upvotes: 10, downvotes: 1230 },
            { id: 2, userID: 1, username: "ProgrammerNumber1", creationDate: "2021-12-09", languageID: 2, language: "Java", title: "Title 2", description: "adfkjgnsk;jdfngb;djafbvp;ijadfpviadbfipgbaidfbsdf", upvotes: 100, downvotes: 150 },
            { id: 3, userID: 1, username: "ProgrammerNumber1", creationDate: "2021-12-10", languageID: 1, language: "Python", title: "Title 3", description: "dghmfhj,fghjdghjfghsfgh", upvotes: 1000, downvotes: 45 },
            { id: 4, userID: 1, username: "ProgrammerNumber1", creationDate: "2021-12-11", languageID: 3, language: "JavaScript", title: "Title 404 040404 040404 004", description: "sghsfghsfjhpisjgn;skdjfgbpisdhfbgvpiadbfgpiuerhbgpiuehrpgweriughpweiruge", upvotes: 10000, downvotes: 9789 },
            { id: 5, userID: 1, username: "ProgrammerNumber1", creationDate: "2021-12-12", languageID: 1, language: "Python", title: "Title 5", description: "dfghjkdfghjsdfghjertyu", upvotes: 100, downvotes: 7815 },
            { id: 6, userID: 2, username: "Student1", creationDate: "2021-11-08", languageID: 2, language: "Java", title: "Title 6", description: "shtrrrrrrrrrrrrrrrrrrrrrr", upvotes: 10000, downvotes: 45 },
            { id: 7, userID: 2, username: "Student1", creationDate: "2021-10-08", languageID: 3, language: "JavaScript", title: "Title 74444 444444", description: "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh", upvotes: 10000, downvotes: 498 },
            { id: 8, userID: 2, username: "Student1", creationDate: "2021-09-08", languageID: 2, language: "Java", title: "Title 86666 6666", description: "tttttttttttttttt", upvotes: 100, downvotes: 78 },
            { id: 9, userID: 2, username: "Student1", creationDate: "2021-08-08", languageID: 1, language: "Python", title: "Title 9", description: "ttttttttttttttttttt t t t t t t t t t t t t t t t t t ", upvotes: 10, downvotes: 126 },
            { id: 10, userID: 2, username: "Student1", creationDate: "2021-07-08", languageID: 3, language: "JavaScript", title: "Title 10", description: "", upvotes: 1, downvotes: 7851 }
        ],

        tagFilters: [],
        languageFilters: [],
        sortBy: 1
    },

    mounted: function () {
        let v = this;

        if (searchTerm) {
            alert(searchTerm);
        }
    },

    computed: {

        filteredSnippets: function () {
            let v = this;

            results = v.snippets;

            if (v.tagFilters.length != 0) {
                results = _.filter(results, (s) => {
                    if (_.filter(s.tags, (t) => {
                        if (v.tagFilters.includes(t.id)) {
                            return t;
                        }
                    }).length > 0) {
                        return s;
                    }
                })
            }

            if (v.languageFilters.length != 0) {
                results = _.filter(results, (s) => {
                    if (v.languageFilters.includes(s.languageID)) {
                        return s;
                    }
                });
            }

            if (v.sortBy === 1) {
                results = _.orderBy(results, (s) => { return s.upvotes / (s.upvotes + s.downvotes);}, 'desc');
            }
            else if (v.sortBy === 2) {
                results = _.orderBy(results, (s) => { return s.upvotes + s.downvotes; }, 'desc');
            }
            else if (v.sortBy === 3) {
                results = _.orderBy(results, (s) => { return Math.abs((s.upvotes / (s.upvotes + s.downvotes)) - .5); }, 'asc');
            }
            else if (v.sortBy === 4 || v.sortBy === 5) {
                results = _.orderBy(results, (s) => { return s.upvotes; }, 'desc');
            }

            if (v.sortBy === 4 || v.sortBy === 5) {
                results = _.filter(results, (s) => {
                    if (v.sortBy === 4 && moment(s.creationDate) >= moment().subtract(7, 'days')) {
                        return s;
                    }
                    else if (v.sortBy === 5 && moment(s.creationDate) >= moment().subtract(30, 'days')) {
                        return s;
                    }
                });
            }

            return results;
        }

    },

    methods: {

        addTagFilter: function (tag) {
            let v = this;

            if (v.tagFilters.includes(tag.id)) {
                v.tagFilters.splice(v.tagFilters.indexOf(tag.id), 1);
            }
            else {
                v.tagFilters.push(tag.id);
            }
        },

        tagsDetails: function () {
            let v = this;

            alert("Tags info...");
        },

        tagDetails: function () {
            let v = this;

            alert("Tag info...");
        },

        addLanguageFilter: function (language) {
            let v = this;

            if (v.languageFilters.includes(language.id)) {
                v.languageFilters.splice(v.languageFilters.indexOf(language.id), 1);
            }
            else {
                v.languageFilters.push(language.id);
            }
        },

        languagesDetails: function () {
            let v = this;

            alert("Langauages info...");
        },

        languageDetails: function (id) {
            let v = this;

            alert("Langauage info...");
        },

        sortSnippets: function (id) {
            let v = this;

            v.sortBy = id;
        },

        upvote: function (snippet) {
            let v = this;

            alert("Upvote: " + snippet.id);
        },

        downvote: function (snippet) {
            let v = this;

            alert("Downvote: " + snippet.id);
        },

    }

})

