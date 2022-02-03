var infoModal = Vue.component('info-modal', {

    props: {
        type: String,
        item: String,
        description: String,
    },

    template: `<div id="infoModal" class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="container-lg mr-2 ml-2">
                        <div class="modal-header">
                            <h5 class="modal-title">{{ type }} Description: {{ item }}</h5>
                        </div>
                        <div class="modal-body">
                            <p>{{ description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
});