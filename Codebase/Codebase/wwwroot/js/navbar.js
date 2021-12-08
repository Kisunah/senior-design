var app = new Vue({

    el: '#navbar',

    data:{
        searchTerm: null
    },

    methods: {
        search: function () {
            let v = this;

            alert("Search " + v.searchTerm);
        }
    }

})