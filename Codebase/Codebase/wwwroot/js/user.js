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
					if (s.isPublic) {
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

		getSnippets: function (id) {
			let v = this;

			var data;
			if (id === "CodeBaseDev") {
				data = {
					userId: id
				}
			}
			else {
				data = {
					userId: id,
					isPublic: true
				}
            }

			$.ajax({
				url: document.location.origin + "/codebase/getCodeblocks",
				contentType: "application/json; charset=utf-8",
				data: {
					filter: data
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

			var firstpost = null;
			var numposts = 0;
			var votes = 0;
			_.forEach(v.snippets, (s) => {
				numposts = numposts + 1;
				if (firstpost === null) {
					firstpost = moment(s.creationDate);
				} else if (firstpost > moment(s.creationDate)) {
					firstpost = moment(s.creationDate)
				}
				votes = votes + s.voteCount;
            })

			v.user = {
				username: id,
				creationDate: firstpost.format("MM/DD/YYYY"),
				numberOfPosts: numposts,
				upvotes: votes
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
			//		if (s.isPublic) {
			//			s.isPublic = false;
			//		} else {
			//			s.isPublic = true;
			//		}
			//	}
			//});
		}

	}

})