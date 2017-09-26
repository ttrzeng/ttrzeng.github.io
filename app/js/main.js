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
//= require_tree .
//
// Controller for the Main Page
// Talent's Page
////////////////////////////////////


TalentPage.controller('MainPageController', ['$scope',
    function($scope){

	var vm = this;

    var layout   = document.getElementById('layout'),
        menu     = document.getElementById('menu'),
        menuLink = document.getElementById('menuLink');

    $scope.blogposts = [{blogNum: 'blog8', name: 'Core components to self improvement', date: 'September 26, 2017'},
                        {blogNum: 'blog7', name: 'Gonna science the shit out of myself', date: 'August 9, 2017'},
                        {blogNum: 'blog6', name: 'Thoughts after graduation', date: 'May 22, 2017'},
                        {blogNum: 'blog5', name: 'Motivation vs Discipline', date: 'January 16 2017'},
                        {blogNum: 'blog4', name: 'The momentum of failure and success', date: 'November 6 2016'},
                        {blogNum: 'blog3', name: 'Dealing with difficult concepts and logic', date: 'September 6 2016'},
                        {blogNum: 'blog2', name: 'Early bird or night owl', date: 'June 19 2016'},
                        {blogNum: 'blog1', name: 'Learning how to learn', date: 'May 19 2016'}];

    //toggleClass
    function toggleClass(element, className) {
        var classes = element.className.split(/\s+/),
            length = classes.length,
            i = 0;

        for(; i < length; i++) {
          if (classes[i] === className) {
            classes.splice(i, 1);
            break;
          }
        }
        // The className is not found
        if (length === classes.length) {
            classes.push(className);
        }

        element.className = classes.join(' ');
    }

    //Hamburger link click
    menuLink.onclick = function (e) {
        var active = 'active';

        e.preventDefault();
        toggleClass(layout, active);
        toggleClass(menu, active);
        toggleClass(menuLink, active);
    };


}]);
$(document).ready(function() {

  // Variables
  var $codeSnippets = $('.code-example-body'),
      $nav = $('.navbar'),
      $body = $('body'),
      $window = $(window),
      $popoverLink = $('[data-popover]'),
      navOffsetTop = $nav.offset().top,
      $document = $(document),
      entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': '&quot;',
        "'": '&#39;',
        "/": '&#x2F;'
      }

  function init() {
    $window.on('scroll', onScroll)
    $window.on('resize', resize)
    $popoverLink.on('click', openPopover)
    $document.on('click', closePopover)
    $('a[href^="#"]').on('click', smoothScroll)
    buildSnippets();
  }

  function smoothScroll(e) {
    e.preventDefault();
    $(document).off("scroll");
    var target = this.hash,
        menu = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top-40
    }, 0, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
    });
  }

  function openPopover(e) {
    e.preventDefault()
    closePopover();
    var popover = $($(this).data('popover'));
    popover.toggleClass('open')
    e.stopImmediatePropagation();
  }

  function closePopover(e) {
    if($('.popover.open').length > 0) {
      $('.popover').removeClass('open')
    }
  }

  $("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#elementtoScrollToID").offset().top
    }, 2000);
});

  function resize() {
    $body.removeClass('has-docked-nav')
    navOffsetTop = $nav.offset().top
    onScroll()
  }

  function onScroll() {
    if(navOffsetTop < $window.scrollTop() && !$body.hasClass('has-docked-nav')) {
      $body.addClass('has-docked-nav')
    }
    if(navOffsetTop > $window.scrollTop() && $body.hasClass('has-docked-nav')) {
      $body.removeClass('has-docked-nav')
    }
  }

  function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
      return entityMap[s];
    });
  }

  function buildSnippets() {
    $codeSnippets.each(function() {
      var newContent = escapeHtml($(this).html())
      $(this).html(newContent)
    })
  }


  init();

});