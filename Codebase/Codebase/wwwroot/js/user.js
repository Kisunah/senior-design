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

		getSnippets: async function (id) {
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

			v.snippets = [{
				id: 1,
				userID: 1,
				username: "Student1",
				creationDate: "2021-12-08",
				isPrivate: true,
				languageID: 1,
				language: "Python",
				tags: [],
				title: "Title 1",
				upvotes: 10,
				downvotes: 1230
			},
			{
				id: 2,
				userID: 1,
				username: "Student1",
				creationDate: "2021-12-09",
				isPrivate: false,
				languageID: 2,
				language: "Java",
				tags: [{
					id: 1,
					tag: "Sorting"
				}, {
					id: 8,
					tag: "HTTP"
				}, {
					id: 2,
					tag: "Parallel"
				}],
				title: "Title 2",
				upvotes: 100,
				downvotes: 150
			},
			{
				id: 3,
				userID: 1,
				username: "Student1",
				creationDate: "2021-12-10",
				isPrivate: true,
				languageID: 1,
				language: "Python",
				tags: [{
					id: 2,
					tag: "Parallel"
				}],
				title: "Title 3",
				upvotes: 1000,
				downvotes: 45
			},
			{
				id: 4,
				userID: 1,
				username: "Student1",
				creationDate: "2021-12-11",
				isPrivate: true,
				languageID: 3,
				language: "JavaScript",
				tags: [{
					id: 3,
					tag: "Help"
				}],
				title: "Title 4",
				upvotes: 1000000,
				downvotes: 9789
			},
			{
				id: 5,
				userID: 1,
				username: "Student1",
				creationDate: "2021-12-12",
				isPrivate: false,
				languageID: 1,
				language: "Python",
				tags: [{
					id: 4,
					tag: "CUDA"
				}, {
					id: 15,
					tag: "CRUD"
				}],
				title: "Title 5",
				upvotes: 100,
				downvotes: 7815
			},
			{
				id: 6,
				userID: 1,
				username: "Student1",
				creationDate: "2021-11-20",
				isPrivate: true,
				languageID: 2,
				language: "Java",
				tags: [{
					id: 5,
					tag: "DB"
				}, {
					id: 1,
					tag: "Sorting"
				}],
				title: "Title 6",
				upvotes: 10000,
				downvotes: 45
			},
			{
				id: 7,
				userID: 1,
				username: "Student1",
				creationDate: "2021-11-16",
				isPrivate: true,
				languageID: 3,
				language: "JavaScript",
				tags: [{
					id: 6,
					tag: "Problem"
				}, {
					id: 1,
					tag: "Sorting"
				}, {
					id: 8,
					tag: "HTTP"
				}, {
					id: 2,
					tag: "Parallel"
				}],
				title: "Title 7",
				upvotes: 10000,
				downvotes: 498
			},
			{
				id: 8,
				userID: 1,
				username: "Student1",
				creationDate: "2021-11-14",
				isPrivate: true,
				languageID: 2,
				language: "Java",
				tags: [{
					id: 7,
					tag: "NP-Complete"
				}, {
					id: 6,
					tag: "Problem"
				}, {
					id: 1,
					tag: "Sorting"
				}, {
					id: 8,
					tag: "HTTP"
				}, {
					id: 2,
					tag: "Parallel"
				}],
				title: "Title 8",
				upvotes: 100,
				downvotes: 78
			},
			{
				id: 9,
				userID: 1,
				username: "Student1",
				creationDate: "2021-08-08",
				isPrivate: true,
				languageID: 1,
				language: "Python",
				tags: [],
				title: "Title 9",
				upvotes: 10,
				downvotes: 126
			},
			{
				id: 10,
				userID: 1,
				username: "Student1",
				creationDate: "2021-07-08",
				isPrivate: false,
				languageID: 3,
				language: "JavaScript",
				tags: [{
					id: 8,
					tag: "HTTP"
				}],
				title: "Title 10",
				upvotes: 1,
				downvotes: 7851
			},
			{
				id: 11,
				userID: 1,
				username: "Student1",
				creationDate: "2021-06-08",
				isPrivate: false,
				languageID: 3,
				language: "JavaScript",
				tags: [{
					id: 9,
					tag: "Python3"
				}, {
					id: 6,
					tag: "Problem"
				}, {
					id: 1,
					tag: "Sorting"
				}, {
					id: 8,
					tag: "HTTP"
				}, {
					id: 2,
					tag: "Parallel"
				}],
				title: "Title 11",
				upvotes: 100,
				downvotes: 781
			},
			{
				id: 12,
				userID: 1,
				username: "Student1",
				creationDate: "2021-05-08",
				isPrivate: false,
				languageID: 3,
				language: "JavaScript",
				tags: [{
					id: 10,
					tag: "Python2.7"
				}, {
					id: 1,
					tag: "Sorting"
				}],
				title: "Title 12",
				upvotes: 10000,
				downvotes: 7841
			},
			{
				id: 13,
				userID: 1,
				username: "Student1",
				creationDate: "2021-04-08",
				isPrivate: false,
				languageID: 3,
				language: "JavaScript",
				tags: [{
					id: 11,
					tag: "G++"
				}],
				title: "Title 13",
				upvotes: 10,
				downvotes: 78
			},
			{
				id: 14,
				userID: 1,
				username: "Student1",
				creationDate: "2021-04-15",
				isPrivate: false,
				languageID: 1,
				language: "Python",
				tags: [{
					id: 12,
					tag: "Compiler Error"
				}],
				title: "Title 14",
				upvotes: 10,
				downvotes: 0
			},
			{
				id: 15,
				userID: 1,
				username: "Student1",
				creationDate: "2021-05-15",
				isPrivate: true,
				languageID: 1,
				language: "Python",
				tags: [{
					id: 13,
					tag: "SQL"
				}, {
					id: 15,
					tag: "CRUD"
				}],
				title: "Title 15",
				upvotes: 10,
				downvotes: 7849
			},
			{
				id: 16,
				userID: 1,
				username: "Student1",
				creationDate: "2021-06-15",
				isPrivate: false,
				languageID: 1,
				language: "Python",
				tags: [{
					id: 14,
					tag: "Select"
				}, {
					id: 15,
					tag: "CRUD"
				}, {
					id: 9,
					tag: "Python3"
				}, {
					id: 6,
					tag: "Problem"
				}, {
					id: 1,
					tag: "Sorting"
				}, {
					id: 8,
					tag: "HTTP"
				}, {
					id: 2,
					tag: "Parallel"
				}],
				title: "Title 16",
				upvotes: 1,
				downvotes: 78
			},
			{
				id: 17,
				userID: 1,
				username: "Student1",
				creationDate: "2021-07-15",
				isPrivate: true,
				languageID: 2,
				language: "Java",
				tags: [],
				title: "Title 17",
				upvotes: 1,
				downvotes: 950
			},
			{
				id: 18,
				userID: 1,
				username: "Student1",
				creationDate: "2021-08-15",
				isPrivate: true,
				languageID: 3,
				language: "JavaScript",
				tags: [{
					id: 15,
					tag: "CRUD"
				}, {
					id: 9,
					tag: "Python3"
				}, {
					id: 6,
					tag: "Problem"
				}, {
					id: 8,
					tag: "HTTP"
				}, {
					id: 2,
					tag: "Parallel"
				}, {
					id: 1,
					tag: "Sorting"
				}],
				title: "Title 18",
				upvotes: 10,
				downvotes: 0
			},
			{
				id: 19,
				userID: 1,
				username: "Student1",
				creationDate: "2021-09-15",
				isPrivate: true,
				languageID: 3,
				language: "JavaScript",
				tags: [],
				title: "Title 19",
				upvotes: 1,
				downvotes: 1
			},
			{
				id: 20,
				userID: 1,
				username: "Student1",
				creationDate: "2021-10-15",
				isPrivate: false,
				languageID: 3,
				language: "JavaScript",
				tags: [],
				title: "Title 20",
				upvotes: 100000,
				downvotes: 77770
			},
			];
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
				username: "Student1",
				creationDate: "2019-08-28",
				description: "Hello, I am a student at the University of Cincinnati",
				numberOfPosts: 15,
				upvotes: 10000,
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

			alert("Upvote: " + snippet.id);
		},

		downvote: function (snippet) {
			let v = this;

			alert("Downvote: " + snippet.id);
		},

		setPrivate: function (snippet) {
			let v = this;

			alert("Lock/Unlock: " + snippet.id);

			_.forEach(v.snippets, (s) => {
				if (s.id === snippet.id) {
					if (s.isPrivate) {
						s.isPrivate = false;
					} else {
						s.isPrivate = true;
					}
				}
			});
		}

	}

})