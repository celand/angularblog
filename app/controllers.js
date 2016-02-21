angular.module('app.controllers', [
	'app.directives'
])
	.controller('PostController', ['$scope', '$http', function($scope, $http){
		$http.jsonp('//www.example.com/api/get_recent_posts/?callback=JSON_CALLBACK').success(function(response){
			$scope.posts = response;
			console.log($scope.posts);
		})
	}])
	.controller('PageController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
		$http.get('data/pages.json').success(function(data){
			$scope.page = data[$routeParams.id];
		});
		
	}])
	.controller('SinglePostController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
		$http.get('data/posts.json').success(function(data){
			$scope.post = data[$routeParams.id];
		});
	}]);
