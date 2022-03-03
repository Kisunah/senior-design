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
						if (v.tagFilters.includes(t)) {
							return t;
						}
					}).length > 0) {
						return s;
					}
				})
			}

			if (v.languageFilters.length != 0) {
				results = _.filter(results, (s) => {
					if (v.languageFilters.includes(s)) {
						return s;
					}
				});
			}

			if (v.sortBy === 1) {
				//results = _.orderBy(results, (s) => {
				//	return s.upvotes / (s.upvotes + s.downvotes);
				//}, 'desc');
			} else if (v.sortBy === 2) {
				//results = _.orderBy(results, (s) => {
				//	return s.upvotes + s.downvotes;
				//}, 'desc');
			} else if (v.sortBy === 3) {
				//results = _.orderBy(results, (s) => {
				//	return Math.abs((s.upvotes / (s.upvotes + s.downvotes)) - .5);
				//}, 'asc');
			} else if (v.sortBy === 4 || v.sortBy === 5) {
				results = _.orderBy(results, (s) => {
					return s.voteCount;
				}, 'desc');
			}

			if (v.sortBy === 4 || v.sortBy === 5) {
				results = _.filter(results, (s) => {
					if (v.sortBy === 4 && moment(s.creationDate) >= moment().subtract(7, 'days')) {
						return s;
					} else if (v.sortBy === 5 && moment(s.creationDate) >= moment().subtract(30, 'days')) {
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

			$.ajax({
				url: document.location.origin + "/codebase/getTags",
			    type: "POST",
			    success: function (data) {
			        v.tags = data
			    },
			    error: function (error) {
			        console.log(error);
			    }
			});
		},

		getLangauges: async function () {
			let v = this;

			$.ajax({
				url: document.location.origin + "/codebase/getLanguages",
			    type: "POST",
			    success: function (data) {
			        v.languages = data
			    },
			    error: function (error) {
			        console.log(error);
			    }
			});
		},

		getSnippets: async function (search) {
			let v = this;

			$.ajax({
				url: document.location.origin + "/codebase/getCodeblocks",
				contentType: "application/json; charset=utf-8",
				data: {
					filter: {
						id: ""
					}
				},
			    type: "POST",
			    success: function (data) {
					v.snippets = data.codeblocks
					_.forEach(v.snippets, (s) => {
						s.creationDate = moment(s.creationDate).format("MM/DD/YYYY");
					});
			    },
			    error: function (error) {
			        console.log(error);
			    }
			});
		},

		getTrending: async function () {
			let v = this;

			$.ajax({
				url: document.location.origin + "/codebase/getCodeblocks",
				contentType: "application/json; charset=utf-8",
				data: {
					filter: {
						id: ""
					}
				},
				type: "POST",
				success: function (data) {
					v.trendingSnippets = data.codeblocks
				},
				error: function (error) {
					console.log(error);
				}
			});
		},

		addTagFilter: function (tag) {
			let v = this;

			if (v.tagFilters.includes(tag.id)) {
				v.tagFilters.splice(v.tagFilters.indexOf(tag), 1);
			} else {
				v.tagFilters.push(tag);
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
			v.infoModalItem = tag;
			v.infoModalDescription = "temp";

			$('#info-modal').modal('show');
		},

		addLanguageFilter: function (language) {
			let v = this;

			if (v.languageFilters.includes(language)) {
				v.languageFilters.splice(v.languageFilters.indexOf(language), 1);
			} else {
				v.languageFilters.push(language);
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
			v.infoModalItem = lang;
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

			//$.ajax({
			//    url: /*API ENDPOINT*/,
			//    type: "GET",
			//    success: function (data) {
			//    },
			//    error: function (error) {
			//    }
			//});

			alert("Upvote: " + snippet.id);
		},

		downvote: function (snippet) {
			let v = this;

			//$.ajax({
			//    url: /*API ENDPOINT*/,
			//    type: "GET",
			//    success: function (data) {
			//    },
			//    error: function (error) {
			//        console.log(error);
			//    }
			//});

			alert("Downvote: " + snippet.id);
		},

	}

})