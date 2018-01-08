var TalentPage = angular.module("TalentPage", ["ui.router", "ngRoute"]);

TalentPage.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
	function($stateProvider, $urlRouterProvider, $locationProvider){

		$stateProvider
			.state('blogPosts', {
				url: '/',
				templateUrl: 'app/views/posts.html'
			})
			.state('profile', {
				url: '/profile',
				templateUrl: 'app/views/profile.html'
			})
			.state('experience', {
				url: '/experience',
				templateUrl: 'app/views/experience.html'
			})
			.state('projects', {
				url: '/projects',
				templateUrl: 'app/views/projects.html'
			})
			.state('blog9', {
				url: '/01-01-2018',
				templateUrl: 'app/blogposts/01-01-2018.html'
			})
			.state('blog8', {
				url: '/09-26-2017',
				templateUrl: 'app/blogposts/09-26-2017.html'
			})
			.state('blog7', {
				url: '/08-09-2017',
				templateUrl: 'app/blogposts/08-09-2017.html'
			})
			.state('blog6', {
				url: '/05-22-2017',
				templateUrl: 'app/blogposts/05-22-2017.html'
			})
			.state('blog5', {
				url: '/01-16-2017',
				templateUrl: 'app/blogposts/01-06-2017.html'
			})
			.state('blog4', {
				url: '/11-06-2016',
				templateUrl: 'app/blogposts/11-06-2016.html'
			})
			.state('blog3', {
				url: '/09-06-2016',
				templateUrl: 'app/blogposts/09-06-2016.html'
			})
			.state('blog2', {
				url: '/06-19-2016',
				templateUrl: 'app/blogposts/06-19-2016.html'
			})
			.state('blog1', {
				url: '/05-19-2016',
				templateUrl: 'app/blogposts/05-19-2016.html'
		});

		$urlRouterProvider.otherwise('/');

		$locationProvider.hashPrefix('');

		// $locationProvider.html5Mode({
		// 	enabled: true,
		// 	requireBase: false
		// });
	}
]);