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
            { id: 1, language: "python" }
        ,
        snippet: 
            { id: 1, userID: 1, username: "ProgrammerNumber1", creationDate: "2021-12-08", languageID: 1, language: "python", tags: [{ id: 1, tag: "Sorting" }, { id: 8, tag: "HTTP" }, { id: 2, tag: "Parallel" }], title: "Bubble Sort", description: "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.\nExample: \nFirst Pass: \n( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1. \n( 1 5 4 2 8 ) –>  ( 1 4 5 2 8 ), Swap since 5 > 4 \n( 1 4 5 2 8 ) –>  ( 1 4 2 5 8 ), Swap since 5 > 2 \n( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does not swap them.\nSecond Pass: \n( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ) \n( 1 4 2 5 8 ) –> ( 1 2 4 5 8 ), Swap since 4 > 2 \n( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) \n( 1 2 4 5 8 ) –>  ( 1 2 4 5 8 ) \nNow, the array is already sorted, but our algorithm does not know if it is completed. The algorithm needs one whole pass without any swap to know it is sorted.\nThird Pass: \n( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) \n( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) \n( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) \n( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) ", upvotes: 10, downvotes: 1230, code: '# Python program for implementation of Bubble Sort\n \ndef bubbleSort(arr):\n\tn = len(arr)\n\n\t# Traverse through all array elements\n\tfor i in range(n-1):\n\t# range(n) also work but outer loop will\n\t# repeat one time more than needed.\n\n\t\t# Last i elements are already in place\n\t\tfor j in range(0, n-i-1):\n\n\t\t\t# traverse the array from 0 to n-i-1\n\t\t\t# Swap if the element found is greater\n\t\t\t# than the next element\n\t\t\tif arr[j] > arr[j + 1] :\n\t\t\t\tarr[j], arr[j + 1] = arr[j + 1], arr[j]\n\n# Driver code to test above\narr = [64, 34, 25, 12, 22, 11, 90]\n \nbubbleSort(arr)\n \nprint ("Sorted array is: ")\nfor i in range(len(arr)):\n\tprint (" % d" % arr[i])' }
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
        comments: [
            { id: 1, userID: 1, username: "Darth Sidious", creationDate: "2022-01-01", comment: "Did you ever hear the tragedy of Darth Plagueis The Wise?", replies: [{ id: 1, userID: 1, username: "Darth Sidious", creationDate: "2022-01-01", comment: "I thought not. It’s not a story the Jedi would tell you. It’s a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. ", replies: [] }, { id: 1, userID: 1, username: "Darth Sidious", creationDate: "2022-01-01", comment: "He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself.", replies: [] }]},
            {
                id: 1,
                userID: 1,
                username: "Obi-wan Kenobi",
                creationDate: "2022-01-01",
                comment: "You have allowed this Dark Lord to twist your mind until now . . . until now you have become the very thing you swore to destroy.They circle each other until OBI- WAN is near PADME.He places his hand on her.",
                replies: [
                    { id: 1, userID: 1, username: "Anakin Skywalker", creationDate: "2022-01-01", comment: "Don't lecture me, Obi-Wan. I see through the lies of the Jedi. I do not fear the dark side as you do. I have brought peace, justice, freedom, and security to my new Empire.", replies: [] },
                    { id: 1, userID: 1, username: "Obi-wan Kenobi", creationDate: "2022-01-01", comment: "Your new Empire?", replies: [] },
                    { id: 1, userID: 1, username: "Anakin Skywalker", creationDate: "2022-01-01", comment: "Don't make me kill you.", replies: [] },
                    { id: 1, userID: 1, username: "Obi-wan Kenobi", creationDate: "2022-01-01", comment: "Anakin, my allegiance is to the Republic ... to democracy.", replies: [] },
                    { id: 1, userID: 1, username: "Anakin Skywalker", creationDate: "2022-01-01", comment: "If you're not with me, you're my enemy.", replies: [] },
                    { id: 1, userID: 1, username: "Obi-wan Kenobi", creationDate: "2022-01-01", comment: "Only a Sith Lord deals in absolutes. I will do what I must.", replies: [] },
                    { id: 1, userID: 1, username: "Anakin Skywalker", creationDate: "2022-01-01", comment: "You will try.", replies: [] }
                ]
            },
            { id: 1, userID: 1, username: "Yoda", creationDate: "2022-01-01", comment: "I hear a new apprentice, you have. Emperor, or should I call you Darth Sidious.", replies: [{ id: 1, userID: 1, username: "Darth Sidious", creationDate: "2022-01-01", comment: "Master Yoda, you survived.", replies: [] },{ id: 1, userID: 1, username: "Darth Sidious", creationDate: "2022-01-01", comment: "The Dark Lord raises his arms, and LIGHTNING BOLTS shoot out, surrounding YODA.YODA is picked up and thrown across the room, hitting the wall and sliding down in a crumpled heap.DARTH SIDIOUS chuckles.", replies: [] }] },
        ],
        tagFilters: [],
        languageFilters: [],
        sortBy: 1
    },

    computed: {



    },

    mounted: function() {
        let v = this;

        var textarea_editor = document.getElementById("textarea_editor");

        textarea_editor.value = v.snippet.code;

        v.editor = CodeMirror.fromTextArea(textarea_editor, {
            tabSize: 4,
            mode: v.language.language,
            theme: '3024-night',
            lineNumbers: true,
            styleActiveSelected: true,
            styleActiveLine: true,
            indentWithTabs: true,
            matchBrackets: true,
            highlightMatches: true,
            readOnly: true,
        });

        alert(snippetId);
    },

    methods: {

        tagDetails: function () {
            let v = this;

            alert("Tag info...");
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

