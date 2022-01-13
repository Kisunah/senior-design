var app = new Vue({

    el: '#snippet',

    // Test data
    data: {
        tags: [
            { id: 1, creationDate: "2021-12-08", tag: "Sorting" },
            { id: 2, creationDate: "2021-12-08", tag: "Parallel" },
            { id: 3, creationDate: "2021-12-08", tag: "Help" },
            { id: 4, creationDate: "2021-12-08", tag: "CUDA" },
            { id: 5, creationDate: "2021-12-08", tag: "DB" }
        ],
        language: 
            { id: 1, language: "Python" }
        ,
        snippet: 
            { id: 1, userID: 1, username: "ProgrammerNumber1", creationDate: "2021-12-08", languageID: 1, language: "Python", tags: [{ id: 1, tag: "Sorting" }, { id: 8, tag: "HTTP" }, { id: 2, tag: "Parallel" }], title: "Bubble Sort", description: "This is a completely random bit of code for which i have done nothing and have no ambition", upvotes: 10, downvotes: 1230, code: '# Python program for implementation of Bubble Sort\n \ndef bubbleSort(arr):\n\tn = len(arr)\n \n\t# Traverse through all array elements\n\tfor i in range(n-1):\n\t# range(n) also work but outer loop will\n\t# repeat one time more than needed.\n \n\t\t# Last i elements are already in place\n\t\tfor j in range(0, n-i-1):\n \n\t\t\t# traverse the array from 0 to n-i-1\n\t\t\t# Swap if the element found is greater\n\t\t\t# than the next element\n\t\t\tif arr[j] > arr[j + 1] :\n\t\t\t\tarr[j], arr[j + 1] = arr[j + 1], arr[j]\n \n# Driver code to test above\narr = [64, 34, 25, 12, 22, 11, 90]\n \nbubbleSort(arr)\n \nprint ("Sorted array is: ")\nfor i in range(len(arr)):\n\tprint (" % d" % arr[i])' }
        ,
        relatedSnippets: [
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
        ],

        tagFilters: [],
        languageFilters: [],
        sortBy: 1
    },

    computed: {



    },

    methods: {

        navigateToSnippet: function (snippet) {
            let v = this;

            alert("Go to Snippet: " + snippet.id);
        },

        upvote: function (snippet) {
            let v = this;

            alert("Upvote: " + snippet.id);
        },

        downvote: function (snippet) {
            let v = this;

            alert("Downvote: " + snippet.id);
        },

        gotoUser: function (snippet) {
            let v = this;

            alert("Go to User: " + snippet.username);
        }

    }

})

