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
				results = _.orderBy(results, (s) => {
					return s.upvotes / (s.upvotes + s.downvotes);
				}, 'desc');
			} else if (v.sortBy === 2) {
				results = _.orderBy(results, (s) => {
					return s.upvotes + s.downvotes;
				}, 'desc');
			} else if (v.sortBy === 3) {
				results = _.orderBy(results, (s) => {
					return Math.abs((s.upvotes / (s.upvotes + s.downvotes)) - .5);
				}, 'asc');
			} else if (v.sortBy === 4 || v.sortBy === 5) {
				results = _.orderBy(results, (s) => {
					return s.upvotes;
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

			v.tags = [{
				id: 1,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag1"
			},
			{
				id: 2,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag2"
			},
			{
				id: 3,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag3"
			},
			{
				id: 4,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag4"
			},
			{
				id: 5,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag5"
			},
			{
				id: 6,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag6"
			},
			{
				id: 7,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag7"
			},
			{
				id: 8,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag8"
			},
			{
				id: 9,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag9"
			},
			{
				id: 10,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag10"
			},
			{
				id: 11,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag11"
			},
			{
				id: 12,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag12"
			},
			{
				id: 13,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag13"
			},
			{
				id: 14,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag14"
			},
			{
				id: 15,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag15"
			},
			{
				id: 16,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag16"
			},
			{
				id: 17,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag17"
			},
			{
				id: 18,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag18"
			},
			{
				id: 19,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag19"
			},
			{
				id: 20,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag20"
			},
			{
				id: 21,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag21"
			},
			{
				id: 22,
				description: "This is a test to see how things look and it is interesting!",
				tag: "Tag22"
			},
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

			v.languages = [{
				id: 1,
				description: "This is a test to see what a language description would look like!",
				language: "asciiarmor"
			},
			{
				id: 2,
				description: "This is a test to see what a language description would look like!",
				language: "clike"
			},
			{
				id: 3,
				description: "This is a test to see what a language description would look like!",
				language: "clojure"
			},
			{
				id: 4,
				description: "This is a test to see what a language description would look like!",
				language: "cmake"
			},
			{
				id: 5,
				description: "This is a test to see what a language description would look like!",
				language: "css"
			},
			{
				id: 7,
				description: "This is a test to see what a language description would look like!",
				language: "go"
			},
			{
				id: 8,
				description: "This is a test to see what a language description would look like!",
				language: "haskell"
			},
			{
				id: 9,
				description: "This is a test to see what a language description would look like!",
				language: "htmlembedded"
			},
			{
				id: 10,
				description: "This is a test to see what a language description would look like!",
				language: "javascript"
			},
			{
				id: 12,
				description: "This is a test to see what a language description would look like!",
				language: "markdown"
			},
			{
				id: 13,
				description: "This is a test to see what a language description would look like!",
				language: "mathematica"
			},
			{
				id: 14,
				description: "This is a test to see what a language description would look like!",
				language: "pascal"
			},
			{
				id: 15,
				description: "This is a test to see what a language description would look like!",
				language: "perl"
			},
			{
				id: 16,
				description: "This is a test to see what a language description would look like!",
				language: "php"
			},
			{
				id: 17,
				description: "This is a test to see what a language description would look like!",
				language: "powershell"
			},
			{
				id: 18,
				description: "This is a test to see what a language description would look like!",
				language: "properties"
			},
			{
				id: 19,
				description: "This is a test to see what a language description would look like!",
				language: "python"
			},
			{
				id: 20,
				description: "This is a test to see what a language description would look like!",
				language: "q"
			},
			{
				id: 21,
				description: "This is a test to see what a language description would look like!",
				language: "r"
			},
			{
				id: 22,
				description: "This is a test to see what a language description would look like!",
				language: "ruby"
			},
			{
				id: 24,
				description: "This is a test to see what a language description would look like!",
				language: "sas"
			},
			{
				id: 25,
				description: "This is a test to see what a language description would look like!",
				language: "sass"
			},
			{
				id: 26,
				description: "This is a test to see what a language description would look like!",
				language: "scheme"
			},
			{
				id: 27,
				description: "This is a test to see what a language description would look like!",
				language: "shell"
			},
			{
				id: 28,
				description: "This is a test to see what a language description would look like!",
				language: "spreadsheet"
			},
			{
				id: 29,
				description: "This is a test to see what a language description would look like!",
				language: "sql"
			},
			{
				id: 30,
				description: "This is a test to see what a language description would look like!",
				language: "swift"
			},
			{
				id: 31,
				description: "This is a test to see what a language description would look like!",
				language: "vb"
			},
			{
				id: 32,
				description: "This is a test to see what a language description would look like!",
				language: "yaml"
			}
			];
		},

		getSnippets: async function (search) {
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

			v.snippets = [{
				id: 1,
				userID: 1,
				username: "Username1",
				creationDate: "2021-12-08",
				tags: [{
					id: 7,
					tag: "Tag7"
				}],
				language: {
					id: 1,
					language: "asciiarmor"
				},
				title: "Random asciiarmor Script",
				upvotes: 1000,
				downvotes: 20
			},
			{
				id: 2,
				userID: 1,
				username: "Username1",
				creationDate: "2021-12-09",
				tags: [{
					id: 1,
					tag: "Tag1"
				}, {
					id: 3,
					tag: "Tag3"
				}, {
					id: 7,
					tag: "Tag7"
				}, {
					id: 14,
					tag: "Tag14"
				}, {
					id: 13,
					tag: "Tag13"
				}, {
					id: 19,
					tag: "Tag19"
				}],
				language: {
					id: 2,
					language: "clike"
				},
				title: "Random clike Script",
				upvotes: 1000,
				downvotes: 21
			},
			{
				id: 3,
				userID: 1,
				username: "Username1",
				creationDate: "2021-12-10",
				tags: [{
					id: 18,
					tag: "Tag18"
				}],
				language: {
					id: 3,
					language: "clojure"
				},
				title: "Random clojure Script",
				upvotes: 1000,
				downvotes: 22
			},
			{
				id: 4,
				userID: 1,
				username: "Username1",
				creationDate: "2021-12-11",
				tags: [{
					id: 16,
					tag: "Tag16"
				}],
				language: {
					id: 4,
					language: "cmake"
				},
				title: "Random cmake Script",
				upvotes: 1000,
				downvotes: 24
			},
			{
				id: 5,
				userID: 1,
				username: "Username1",
				creationDate: "2021-12-12",
				tags: [],
				language: {
					id: 5,
					language: "css"
				},
				title: "Random css Script",
				upvotes: 1000,
				downvotes: 26
			},
			{
				id: 6,
				userID: 1,
				username: "Username1",
				creationDate: "2021-12-13",
				tags: [{
					id: 2,
					tag: "Tag2"
				}],
				language: {
					id: 6,
					language: "go"
				},
				title: "Random go Script",
				upvotes: 1000,
				downvotes: 22
			},
			{
				id: 7,
				userID: 1,
				username: "Username1",
				creationDate: "2021-12-14",
				tags: [{
					id: 14,
					tag: "Tag14"
				}, {
					id: 15,
					tag: "Tag15"
				}],
				language: {
					id: 7,
					language: "haskell"
				},
				title: "Random haskell Script",
				upvotes: 1000,
				downvotes: 45
			},
			{
				id: 8,
				userID: 1,
				username: "Username1",
				creationDate: "2021-12-15",
				tags: [{
					id: 1,
					tag: "Tag1"
				}, {
					id: 7,
					tag: "Tag7"
				}, {
					id: 19,
					tag: "Tag19"
				}],
				language: {
					id: 8,
					language: "javascript"
				},
				title: "Random javascript Script",
				upvotes: 1000,
				downvotes: 92
			},
			{
				id: 9,
				userID: 1,
				username: "Username1",
				creationDate: "2021-12-16",
				tags: [{
					id: 11,
					tag: "Tag11"
				}, {
					id: 6,
					tag: "Tag6"
				}, {
					id: 13,
					tag: "Tag13"
				}, {
					id: 20,
					tag: "Tag20"
				}],
				language: {
					id: 9,
					language: "perl"
				},
				title: "Random perl Script",
				upvotes: 1000,
				downvotes: 56
			},
			{
				id: 10,
				userID: 1,
				username: "Username1",
				creationDate: "2021-12-17",
				tags: [{
					id: 1,
					tag: "Tag1"
				}, {
					id: 3,
					tag: "Tag3"
				}, {
					id: 7,
					tag: "Tag7"
				}, {
					id: 19,
					tag: "Tag19"
				}],
				language: {
					id: 10,
					language: "python"
				},
				title: "Random python Script",
				upvotes: 1000,
				downvotes: 78
			}
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

			v.trendingSnippets = [{
				id: 1,
				title: "Random Python Script",
				upvotes: 1000,
				downvotes: 20
			},
			{
				id: 2,
				title: "Random C++ Script",
				upvotes: 1000,
				downvotes: 21
			},
			{
				id: 3,
				title: "Random ABCDEF Script",
				upvotes: 1000,
				downvotes: 22
			},
			{
				id: 4,
				title: "Random Java Script",
				upvotes: 1000,
				downvotes: 24
			},
			{
				id: 5,
				title: "Random Javascript Script",
				upvotes: 1000,
				downvotes: 26
			},
			{
				id: 6,
				title: "Random R Script",
				upvotes: 1000,
				downvotes: 22
			},
			{
				id: 8,
				title: "E Script",
				upvotes: 1000,
				downvotes: 45
			},
			{
				id: 9,
				title: "Haskel Script",
				upvotes: 1000,
				downvotes: 92
			}
			];
		},

		addTagFilter: function (tag) {
			let v = this;

			if (v.tagFilters.includes(tag.id)) {
				v.tagFilters.splice(v.tagFilters.indexOf(tag.id), 1);
			} else {
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
			} else {
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