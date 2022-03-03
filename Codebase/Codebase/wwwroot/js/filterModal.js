var filterModal = Vue.component('filter-modal', {

	props: {
		type: String,
		data: Array,
		selected: Array
	},

	data: function () {
		return {
			search: "",
		}
	},

	computed: {

		items: function () {
			let v = this;

			_.forEach(v.data, function (d) {
				if (v.selected.includes(d)) {
					d.checked = true;
				} else {
					d.checked = false;
				}
			});

			if (v.search === "") {
				return v.data;
			}

			if (v.type === "Tag") {
				return _.filter(v.data, function (d) {
					if (d.tag.includes(v.search)) {
						return d;
					}
				});
			} else {
				return _.filter(v.data, function (d) {
					if (d.language.includes(v.search)) {
						return d;
					}
				});
			}
		}

	},

	methods: {

		editItem: function (item) {
			let v = this;

			_.forEach(v.data, function (d) {
				if (item === d) {
					if (d.checked === true) {
						d.checked = false;
						v.$emit('clicked', v.type, 'removed', item);
					} else {
						d.checked = true;
						v.$emit('clicked', v.type, 'added', item);
					}
				}
			});
		},

	},

	template: `<div id="filterModal" class="modal bd-example-modal-lg" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="container-lg mr-2 ml-2">
                        <div class="modal-header">
                            <h5 class="modal-title">{{ type }} Filtering & Info</h5>
                        </div>
                        <div class="model-body">
                            <div class="row mt-3">
                                <div class="col-12">
                                    <div class="input-group">
                                        <input type="text" class="form-control" v-model="search" placeholder="Search"></input>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-12">
                                    <div class="card mb-2" v-for="item in items" style="width: 32%; float: left;margin-left: 1vh;">
                                        <div class="card-body">
                                            <h6 class="card-title" v-if="type === 'Tag'">{{ item }}</h6>
                                            <h6 class="card-title" v-else>{{ item }}</h6>
                                            <p class="card-text">No implimentation yet</p>
                                            <input type="checkbox"  v-if="item.checked === true" @click="editItem(item)" style="float: right;" checked>
                                            <input type="checkbox"  v-else style="float: right;" @click="editItem(item)">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
});