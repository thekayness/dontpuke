angular.module('dontPuke', ['ui.router', 'templates'])
	.config([
		'$stateProvider',
		'$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state('search', {
					url: '/search',
					templateUrl: 'search/_search.html',
					controller: 'MainCtrl'
				})
				.state('seach.restaurants', {
					url: '/search/restaurants/{id}',
					templateUrl: 'restaurants/_restaurants.html',
					controller: 'RestaurantsCtrl',
					resolve: {
					 	post: ['$stateParams', 'restaurants', function($stateParams, restaurants) {
					 		// console.log($stateParams.id);
					    	return restaurants.get($stateParams.id);
					  	}]
					}
				})
				.state('login', {
			      url: '/login',
			      templateUrl: 'auth/_login.html',
			      controller: 'AuthCtrl'
			    })
			    .state('register', {
			      url: '/register',
			      templateUrl: 'auth/_register.html',
			      controller: 'AuthCtrl'
			    })
				.state('about', {
					url: '/about',
					templateUrl: 'about/_about.html',
					controller: 'MainCtrl'
				});
			$urlRouterProvider.otherwise('home');
		}]);
	

