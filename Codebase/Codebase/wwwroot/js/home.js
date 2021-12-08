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
            { id: 1, userID: 1, username: "ProgrammerNumber1", creationDate: "2021-12-08", languageID: 1, language: "Python", title: "Title 1", description: "This is a completely random bit of code for which i have done nothing and have no ambition", upvotes: 10, downvotes: 1230},
            { id: 2, userID: 1, username: "ProgrammerNumber1", creationDate: "2021-12-09", languageID: 2, language: "Java", title: "Title 2", description: "adfkjgnsk;jdfngb;djafbvp;ijadfpviadbfipgbaidfbsdf", upvotes: 100, downvotes: 150},
            { id: 3, userID: 1, username: "ProgrammerNumber1", creationDate: "2021-12-10", languageID: 1, language: "Python", title: "Title 3", description: "dghmfhj,fghjdghjfghsfgh", upvotes: 1000, downvotes: 45},
            { id: 4, userID: 1, username: "ProgrammerNumber1", creationDate: "2021-12-11", languageID: 3, language: "JavaScript", title: "Title 4", description: "sghsfghsfjhpisjgn;skdjfgbpisdhfbgvpiadbfgpiuerhbgpiuehrpgweriughpweiruge", upvotes: 1000000, downvotes: 9789},
            { id: 5, userID: 1, username: "ProgrammerNumber1", creationDate: "2021-12-12", languageID: 1, language: "Python", title: "Title 5", description: "dfghjkdfghjsdfghjertyu", upvotes: 100, downvotes: 7815},
            { id: 6, userID: 2, username: "Student1", creationDate: "2021-11-08", languageID: 2, language: "Java", title: "Title 6", description: "shtrrrrrrrrrrrrrrrrrrrrrr", upvotes: 10000, downvotes: 45},
            { id: 7, userID: 2, username: "Student1", creationDate: "2021-10-08", languageID: 3, language: "JavaScript", title: "Title 7", description: "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh", upvotes: 10000, downvotes: 498},
            { id: 8, userID: 2, username: "Student1", creationDate: "2021-09-08", languageID: 2, language: "Java", title: "Title 8", description: "tttttttttttttttt", upvotes: 100, downvotes: 78},
            { id: 9, userID: 2, username: "Student1", creationDate: "2021-08-08", languageID: 1, language: "Python", title: "Title 9", description: "ttttttttttttttttttt t t t t t t t t t t t t t t t t t ", upvotes: 10, downvotes: 126},
            { id: 10, userID: 2, username: "Student1", creationDate: "2021-07-08", languageID: 3, language: "JavaScript", title: "Title 10", description: "", upvotes: 1, downvotes: 7851},
            { id: 11, userID: 2, username: "Student1", creationDate: "2021-06-08", languageID: 3, language: "JavaScript", title: "Title 11", description: "afvjnapjfvpiabvpuaebv adf f p fp fhwrg wojf onjwfv ", upvotes: 100, downvotes: 781},
            { id: 12, userID: 2, username: "Student1", creationDate: "2021-05-08", languageID: 3, language: "JavaScript", title: "Title 12", description: "qf pkqpf d qd jqdn fjnd jpwdpf hpwdf jpdf ", upvotes: 10000, downvotes: 7841},
            { id: 13, userID: 2, username: "Student1", creationDate: "2021-04-08", languageID: 3, language: "JavaScript", title: "Title 13", description: " ohwgfiygwfhwhg uowf ouwo ouwh fpwf v", upvotes: 10, downvotes: 78},
            { id: 14, userID: 3, username: "RegularDude1", creationDate: "2021-04-15", languageID: 1, language: "Python", title: "Title 14", description: "r", upvotes: 10, downvotes: 0},
            { id: 15, userID: 3, username: "RegularDude1", creationDate: "2021-05-15", languageID: 1, language: "Python", title: "Title 15", description: "hththththththththththththth", upvotes: 10, downvotes: 7849},
            { id: 16, userID: 3, username: "RegularDude1", creationDate: "2021-06-15", languageID: 1, language: "Python", title: "Title 16", description: "ijdfvnpadijfnvpiajdnfvpinfpijvqpifjbqe", upvotes: 1, downvotes: 78},
            { id: 17, userID: 3, username: "RegularDude1", creationDate: "2021-07-15", languageID: 2, language: "Java", title: "Title 17", description: "sofdbnpisdjfnbpijdafnvpifn nfv pifvw pwfnv pwfv jonwf vjonwfv jnwf vjnwfv ojnwf vo jwvojn wfovjn wfjonv jfwnv jnwfv jonwf vjnf v nwfjvn wfj ", upvotes: 1, downvotes:950},
            { id: 18, userID: 3, username: "RegularDude1", creationDate: "2021-08-15", languageID: 3, language: "JavaScript", title: "Title 18", description: "n wdfn ohfw ojnfv efwp fpwnv p pwf pkn kmwv pnwfv jnfv ojnfv nfv nfwv ofnv e", upvotes: 10, downvotes: 0},
            { id: 19, userID: 3, username: "RegularDude1", creationDate: "2021-09-15", languageID: 3, language: "JavaScript", title: "Title 19", description: "k fvpn pnfv pnwf wf pfjk pkefv pknef vpkjefpkefvpkjefp ekfpng ", upvotes: 1, downvotes: 1},
            { id: 20, userID: 3, username: "RegularDude1", creationDate: "2021-10-15", languageID: 3, language: "JavaScript", title: "Title 20", description: "nw ojnwfv w f nwfn wfnv pnfwv pnwfv pnfv nef vjnefvjn efjvn efjvn", upvotes: 100000, downvotes: 77770},
        ],
        topTenSnippets: [
            { id: 1, userID: 1, username: "ProgrammerNumber1", creationDate: "2021-12-08", languageID: 1, language: "Python", title: "Title 1", description: "This is a completely random bit of code for which i have done nothing and have no ambition", upvotes: 10, downvotes: 1230 },
            { id: 2, userID: 1, username: "ProgrammerNumber1", creationDate: "2021-12-09", languageID: 2, language: "Java", title: "Title 2", description: "adfkjgnsk;jdfngb;djafbvp;ijadfpviadbfipgbaidfbsdf", upvotes: 100, downvotes: 150 },
            { id: 3, userID: 1, username: "ProgrammerNumber1", creationDate: "2021-12-10", languageID: 1, language: "Python", title: "Title 3", description: "dghmfhj,fghjdghjfghsfgh", upvotes: 1000, downvotes: 45 },
            { id: 4, userID: 1, username: "ProgrammerNumber1", creationDate: "2021-12-11", languageID: 3, language: "JavaScript", title: "Title 4", description: "sghsfghsfjhpisjgn;skdjfgbpisdhfbgvpiadbfgpiuerhbgpiuehrpgweriughpweiruge", upvotes: 1000000, downvotes: 9789 },
            { id: 5, userID: 1, username: "ProgrammerNumber1", creationDate: "2021-12-12", languageID: 1, language: "Python", title: "Title 5", description: "dfghjkdfghjsdfghjertyu", upvotes: 100, downvotes: 7815 },
            { id: 6, userID: 2, username: "Student1", creationDate: "2021-11-08", languageID: 2, language: "Java", title: "Title 6", description: "shtrrrrrrrrrrrrrrrrrrrrrr", upvotes: 10000, downvotes: 45 },
            { id: 7, userID: 2, username: "Student1", creationDate: "2021-10-08", languageID: 3, language: "JavaScript", title: "Title 7", description: "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh", upvotes: 10000, downvotes: 498 },
            { id: 8, userID: 2, username: "Student1", creationDate: "2021-09-08", languageID: 2, language: "Java", title: "Title 8", description: "tttttttttttttttt", upvotes: 100, downvotes: 78 },
            { id: 9, userID: 2, username: "Student1", creationDate: "2021-08-08", languageID: 1, language: "Python", title: "Title 9", description: "ttttttttttttttttttt t t t t t t t t t t t t t t t t t ", upvotes: 10, downvotes: 126 },
            { id: 10, userID: 2, username: "Student1", creationDate: "2021-07-08", languageID: 3, language: "JavaScript", title: "Title 10", description: "", upvotes: 1, downvotes: 7851 }
        ]
    },

    methods: {

        navigateToSnippet: function (snippet) {
            let v = this;

            console.log(snippet);
        }

    }

})

