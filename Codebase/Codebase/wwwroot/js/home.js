var app = new Vue({

    el: '#home',

    // Test data
    data: {
        tags: [],
        languages: [],
        snippets: [],
        trendingSnippets: [],

        tagFilters: [],
        languageFilters: [],
        sortBy: 1,
        searchTerm: "",

        infoModalType: null,
        infoModalItem: null,
        infoModalDescription: null,

        filterModalType: null,
        filterModalData: null,
        filterModalSelected: null,
    },

    mounted: function () {
        let v = this;

        v.searchTerm = search;

        v.getTags();
        v.getLangauges();
        v.getSnippets(v.searchTerm);
        v.getTrending();
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
                { id: 1,  description: "This is a test to see how things look and it is interesting!", tag: "Sorting" },
                { id: 2,  description: "This is a test to see how things look and it is interesting!", tag: "Parallel" },
                { id: 3,  description: "This is a test to see how things look and it is interesting!", tag: "Help" },
                { id: 4,  description: "This is a test to see how things look and it is interesting!", tag: "CUDA" },
                { id: 5,  description: "This is a test to see how things look and it is interesting!", tag: "DB" },
                { id: 6,  description: "This is a test to see how things look and it is interesting!", tag: "Problem" },
                { id: 7,  description: "This is a test to see how things look and it is interesting!", tag: "NP-Complete" },
                { id: 8,  description: "This is a test to see how things look and it is interesting!", tag: "HTTP" },
                { id: 9,  description: "This is a test to see how things look and it is interesting!", tag: "Python3" },
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
                { id: 1,  description: "This is a test to see what a language description would look like!", language: "Python" },
                { id: 2,  description: "This is a test to see what a language description would look like!", language: "Java" },
                { id: 3,  description: "This is a test to see what a language description would look like!", language: "JavaScript" },
                { id: 4,  description: "This is a test to see what a language description would look like!", language: "C#" },
                { id: 5,  description: "This is a test to see what a language description would look like!", language: "C / C++" },
                { id: 6,  description: "This is a test to see what a language description would look like!", language: "PHP" },
                { id: 7,  description: "This is a test to see what a language description would look like!", language: "R" },
                { id: 8,  description: "This is a test to see what a language description would look like!", language: "Swift" },
                { id: 9,  description: "This is a test to see what a language description would look like!", language: "Objective" },
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

        getSnippets: async function(search) {
            let v = this;

            //$.ajax({
            //    url: /*API ENDPOINT*/,
            //    data: search,
            //    type: "GET",
            //    success: function (data) {
            //        v.tags = data
            //    },
            //    error: function (error) {
            //        console.log(error);
            //    }
            //});

            v.snippets = [
                { id: 1, userID: 1, username: "Username1", creationDate: "2021-12-08", tags: [{id: 1, tag: "Tag1"}], language: {id: 1, language: "Python"}, title: "Random Python Script", upvotes: 1000, downvotes: 20 },
                { id: 2, userID: 1, username: "Username1", creationDate: "2021-12-09", tags: [{id: 1, tag: "Tag1"}], language: {id: 1, language: "Python"}, title: "Random Python Script", upvotes: 1000, downvotes: 21 },
                { id: 3, userID: 1, username: "Username1", creationDate: "2021-12-10", tags: [{id: 1, tag: "Tag1"}], language: {id: 1, language: "Python"}, title: "Random Python Script", upvotes: 1000, downvotes: 22 },
                { id: 4, userID: 1, username: "Username1", creationDate: "2021-12-11", tags: [{id: 1, tag: "Tag1"}], language: {id: 1, language: "Python"}, title: "Random Python Script", upvotes: 1000, downvotes: 24 },
                { id: 5, userID: 1, username: "Username1", creationDate: "2021-12-12", tags: [{id: 1, tag: "Tag1"}], language: {id: 1, language: "Python"}, title: "Random Python Script", upvotes: 1000, downvotes: 26 },
                { id: 6, userID: 1, username: "Username1", creationDate: "2021-12-13", tags: [{id: 1, tag: "Tag1"}], language: {id: 1, language: "Java"}, title: "Random Java Script", upvotes: 1000, downvotes: 22 },
                { id: 7, userID: 1, username: "Username1", creationDate: "2021-12-14", tags: [{id: 1, tag: "Tag1"}], language: {id: 1, language: "Java"}, title: "Random Java Script", upvotes: 1000, downvotes: 45 },
                { id: 8, userID: 1, username: "Username1", creationDate: "2021-12-15", tags: [{id: 1, tag: "Tag1"}], language: {id: 1, language: "Java"}, title: "Random Java Script", upvotes: 1000, downvotes: 92 },
                { id: 9, userID: 1, username: "Username1", creationDate: "2021-12-16", tags: [{id: 1, tag: "Tag1"}], language: {id: 1, language: "Java"}, title: "Random Java Script", upvotes: 1000, downvotes: 56 },
                { id: 10, userID: 1, username: "Username1", creationDate: "2021-12-17", tags: [{id: 1, tag: "Tag1"}], language: {id: 1, language: "Java"}, title: "Random Java Script", upvotes: 1000, downvotes: 78 },
                { id: 11, userID: 1, username: "Username1", creationDate: "2021-12-18", tags: [{id: 1, tag: "Tag1"}], language: {id: 1, language: "Java"}, title: "Random Java Script", upvotes: 1000, downvotes: 78 },
                { id: 12, userID: 1, username: "Username1", creationDate: "2021-12-19", tags: [{id: 1, tag: "Tag1"}], language: {id: 1, language: "Java"}, title: "Random Java Script", upvotes: 1000, downvotes: 46 },
                { id: 13, userID: 1, username: "Username1", creationDate: "2021-12-20", tags: [{id: 1, tag: "Tag1"}], language: {id: 1, language: "C++"}, title: "Random C++ Script", upvotes: 1000, downvotes: 74 },
                { id: 14, userID: 1, username: "Username1", creationDate: "2021-12-21", tags: [{id: 1, tag: "Tag1"}], language: {id: 1, language: "C++"}, title: "Random C++ Script", upvotes: 1000, downvotes: 89 },
                { id: 15, userID: 1, username: "Username1", creationDate: "2021-12-21", tags: [{id: 1, tag: "Tag1"}], language: {id: 1, language: "C++"}, title: "Random C++ Script", upvotes: 1000, downvotes: 27 },
                { id: 16, userID: 1, username: "Username1", creationDate: "2021-12-21", tags: [{id: 1, tag: "Tag1"}], language: {id: 1, language: "C++"}, title: "Random C++ Script", upvotes: 1000, downvotes: 32 },
                { id: 17, userID: 1, username: "Username1", creationDate: "2021-12-23", tags: [{id: 1, tag: "Tag1"}], language: {id: 1, language: "C++"}, title: "Random C++ Script", upvotes: 1000, downvotes: 76 },
                { id: 18, userID: 1, username: "Username1", creationDate: "2021-12-25", tags: [{id: 1, tag: "Tag1"}], language: {id: 1, language: "C++"}, title: "Random C++ Script", upvotes: 1000, downvotes: 67 }
            ];
        },

        getTrending: async function () {
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

            v.trendingSnippets = [
                { id: 1, title: "Random Python Script", upvotes: 1000, downvotes: 20 },
                { id: 2, title: "Random Python Script", upvotes: 1000, downvotes: 21 },
                { id: 3, title: "Random Python Script", upvotes: 1000, downvotes: 22 },
                { id: 4, title: "Random Python Script", upvotes: 1000, downvotes: 24 },
                { id: 5, title: "Random Python Script", upvotes: 1000, downvotes: 26 },
                { id: 6, title: "Random Java Script", upvotes: 1000, downvotes: 22 },
                { id: 8, title: "Random Java Script", upvotes: 1000, downvotes: 45 },
                { id: 9, title: "Random Java Script", upvotes: 1000, downvotes: 92 },
                { id: 10, title: "Random Java Script", upvotes: 1000, downvotes: 56 },
                { id: 11, title: "Random Java Script", upvotes: 1000, downvotes: 78 },
                { id: 12, title: "Random Java Script", upvotes: 1000, downvotes: 78 },
                { id: 13, title: "Random Java Script", upvotes: 1000, downvotes: 46 },
            ];
        },

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

            v.filterModalType = "Tag";
            v.filterModalData = v.tags;
            v.filterModalSelected = v.tagFilters;

            $('#filter-modal').modal('show');
        },

        tagDetails: function (tag) {
            let v = this;

            v.infoModalType = "Tag";
            v.infoModalItem = tag.tag;
            v.infoModalDescription = "temp";

            $('#info-modal').modal('show');
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

            v.filterModalType = "Language";
            v.filterModalData = v.languages;
            v.filterModalSelected = v.languageFilters;

            $('#filter-modal').modal('show');
        },

        languageDetails: function (lang) {
            let v = this;

            v.infoModalType = "Language";
            v.infoModalItem = lang.language;
            v.infoModalDescription = "temp";

            $('#info-modal').modal('show');
        },

        editFromModal: function (type, action, id) {
            let v = this;

            if (type === "Tag") {
                if (action === "added") {
                    document.getElementById("tag-checkbox-" + id).checked = true;
                    v.tagFilters.push(id);
                    
                } else {
                    document.getElementById("tag-checkbox-" + id).checked = false;
                    v.tagFilters.splice(v.tagFilters.indexOf(id), 1);
                }
            } else {
                if (action === "added") {
                    document.getElementById("language-checkbox-" + id).checked = true;
                    v.languageFilters.push(id);
                } else {
                    document.getElementById("language-checkbox-" + id).checked = false;
                    v.languageFilters.splice(v.tagFilters.indexOf(id), 1);
                }
            }
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