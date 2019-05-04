// posts.service.js
(() => {
	angular.module("app").factory("postsService", PostsService);

	function PostsService($state, apiService) {
		return {
			getPosts: getPosts
		};

		////////////

		function getPosts() {
			return apiService.get($state.current.data.param, true);
		}
	}
})();
