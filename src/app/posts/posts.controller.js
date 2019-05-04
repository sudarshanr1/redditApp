// posts.controller.js
(() => {
	angular.module("app").controller("PostsController", PostsController);

	function PostsController($state, postsService) {
		const vm = this;
		vm.posts = null;
		vm.quantity = 25;
		vm.isPicsState = isPicsState;
		activate();

		function activate() {
			getPosts();
			// Poll every 60 seconds
			setInterval(getPosts, 60000);
		}

		function isPicsState() {
			return $state.current.data.pageTitle === "Pics";
		}

		function getPosts() {
			postsService.getPosts().then(posts => {
				vm.posts = posts.data;
			});
		}
	}
})();
