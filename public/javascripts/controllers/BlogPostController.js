function BlogPostCtrl($scope, $http) {
	$scope.posts = [];

	$scope.newPost = {
		title: 'Enter Title',
		date: new Date(new Date().getTime()),
		body: 'Enter Content',
		visible: true
	}

	$scope.isVisibleFilter = { visible: true };

	$scope.setPosts = function(posts) {
		$scope.posts = posts;
	};


	$scope.addNewPost = function () {
		$http.post('/blog/post.json', $scope.newPost).success(function(data) {
			if(data.post) {
				$scope.posts.push(data.post);
				$scope.newPost.body = '';
				$scope.newPost.title = '';
			}
			else {
				alert(JSON.stringify.data);
			}
		});
	}
};
