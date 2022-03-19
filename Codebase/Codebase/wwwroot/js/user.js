var app = new Vue({

	el: '#user',

	// Test data
	data: {
		user: {},
		snippets: [],
		sortBy: 2,
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
				results = _.orderBy(results, (s) => {
					return moment(s.creationDate);
				}, 'asc');
			} else if (v.sortBy === 2) {
				results = _.orderBy(results, (s) => {
					return s.voteCount;
				}, 'desc');
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
		},

		usercreationDate: function () {
			let v = this;

			var firstpost = null;
			_.forEach(v.snippets, (s) => {
				if (firstpost === null) {
					firstpost = moment(s.creationDate);
				} else if (firstpost > moment(s.creationDate)) {
					firstpost = moment(s.creationDate)
				}
			});

			return firstpost;
		},

		usernumberOfPosts: function () {
			let v = this;

			var numposts = 0;
			_.forEach(v.snippets, (s) => {
				numposts = numposts + 1;
			});

			return numposts;
		},

		userupvotes: function () {
			let v = this;

			var votes = 0;
			_.forEach(v.snippets, (s) => {
				votes = votes + s.voteCount;
			});

			return votes;
		},

	},

	methods: {

		getSnippets: function (id) {
			let v = this;

			$.ajax({
				url: document.location.origin + "/codebase/getCodeblocks",
				contentType: "application/json; charset=utf-8",
				data: JSON.stringify({
					filter: {
						userId: id
					}
				}),
				type: "POST",
				success: function (data) {
					v.snippets = _.filter(data.codeblocks, (d) => {
						if (d.isPublic || id === "CodeBaseDev") {
							return d;
                        }
					});
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

			v.user = {
				username: id
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