var app = new Vue({

	el: '#user',

	// Test data
	data: {
		user: {},
		snippets: [],
		sortBy: 1,
		hidePublic: false,

		infoModalType: null,
		infoModalItem: null,
		infoModalDescription: null,
	},

	mounted: function () {
		let v = this;

		if (!userId) {
			userId = null;
		}

		v.getSnippets(userId);
		v.getUser(userId);
	},

	computed: {

		sortedSnippets: function () {
			let v = this;

			results = v.snippets;

			if (v.hidePublic) {
				results = _.filter(results, (s) => {
					if (s.isPrivate) {
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

		getSnippets: async function (id) {
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

		getUser: async function (id) {
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

			v.user = {
				id: 1,
				username: "CodeBaseDev",
				creationDate: "2022-02-22",
				description: "Hello, I am a student at the University of Cincinnati",
				numberOfPosts: 15,
				upvotes: 10000,s
				downvotes: 676,
				comments: 57
			};
		},

		sortSnippets: function (id) {
			let v = this;

			v.sortBy = id;
		},

		filterLock: function () {
			let v = this;

			if (v.hidePublic) {
				v.hidePublic = false;
			} else {
				v.hidePublic = true
			}
		},

		languageDetails: function (lang) {
			let v = this;

			v.infoModalType = "Language";
			v.infoModalItem = lang.language;
			v.infoModalDescription = "temp";

			$('#info-modal').modal('show');
		},

		tagDetails: function (tag) {
			let v = this;

			v.infoModalType = "Tag";
			v.infoModalItem = tag.tag;
			v.infoModalDescription = "temp";

			$('#info-modal').modal('show');
		},

		upvote: function (snippet) {
			let v = this;

			//alert("Upvote: " + snippet.id);
		},

		downvote: function (snippet) {
			let v = this;

			//alert("Downvote: " + snippet.id);
		},

		setPrivate: function (snippet) {
			let v = this;

			//alert("Lock/Unlock: " + snippet.id);

			//_.forEach(v.snippets, (s) => {
			//	if (s.id === snippet.id) {
			//		if (s.isPrivate) {
			//			s.isPrivate = false;
			//		} else {
			//			s.isPrivate = true;
			//		}
			//	}
			//});
		}

	}

})