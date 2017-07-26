var TalentPage = angular.module("TalentPage", ["ui.router", "ngRoute"]);

TalentPage.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
	function($stateProvider, $urlRouterProvider, $locationProvider){

		$stateProvider
			.state('blogPosts', {
				url: '/',
				templateUrl: 'views/posts.html'
			})
			.state('profile', {
				url: '/profile',
				templateUrl: 'views/profile.html'
			})
			.state('experience', {
				url: '/experience',
				templateUrl: 'views/experience.html'
			})
			.state('projects', {
				url: '/projects',
				templateUrl: 'views/projects.html'
			})
			.state('blog6', {
				url: '/05-22-2017',
				templateUrl: 'blogposts/05-22-2017.html'
			})
			.state('blog5', {
				url: '/01-16-2017',
				templateUrl: 'blogposts/01-06-2017.html'
			})
			.state('blog4', {
				url: '/11-06-2016',
				templateUrl: 'blogposts/11-06-2016.html'
			})
			.state('blog3', {
				url: '/09-06-2016',
				templateUrl: 'blogposts/09-06-2016.html'
			})
			.state('blog2', {
				url: '/06-19-2016',
				templateUrl: 'blogposts/06-19-2016.html'
			})
			.state('blog1', {
				url: '/05-19-2016',
				templateUrl: 'blogposts/05-19-2016.html'
		});

		$urlRouterProvider.otherwise('/');

		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
	}
]);