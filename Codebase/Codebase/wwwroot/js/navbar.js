var app = new Vue({

    el: '#navbar',

    data:{
        searchTerm: null
    },

    methods: {
        search: function () {
            let v = this;

            if (v.searchTerm) {
                window.location = '/c/Home?search=' + v.searchTerm;
            }
        }
    }

})