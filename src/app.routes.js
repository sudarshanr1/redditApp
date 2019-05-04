// app.routes.js
(() => {
	angular
		.module("app")

		.config(($stateProvider, $urlRouterProvider) => {
			const states = [
				{
					name: "news",
					url: "/news",
					template: "<posts></posts>",
					data: {
						pageTitle: "News",
						param: "news.json"
					}
				},
				{
					name: "politics",
					url: "/politics",
					template: "<posts></posts>",
					data: {
						pageTitle: "Politics",
						param: "politics.json"
					}
				},
				{
					name: "sports",
					url: "/sports",
					template: "<posts></posts>",
					data: {
						pageTitle: "Sports",
						param: "sports.json"
					}
				},
				{
					name: "pics",
					url: "/pics",
					template: "<posts></posts>",
					data: {
						pageTitle: "Pics",
						param: "pics.json"
					}
				}
			];
			states.forEach(state => {
				$stateProvider.state(state);
			});
			$urlRouterProvider.when("", [
				"$state",
				"$match",
				($state, $match) => {
					$state.go("news");
				}
			]);
			$urlRouterProvider.when("/politics", [
				"$state",
				"$match",
				($state, $match) => {
					$state.go("posts");
				}
			]);
			$urlRouterProvider.when("/sports", [
				"$state",
				"$match",
				($state, $match) => {
					$state.go("posts");
				}
			]);
			$urlRouterProvider.when("/pics", [
				"$state",
				"$match",
				($state, $match) => {
					$state.go("");
				}
			]);
		})
		.config($translateProvider => {
			$translateProvider.translations("en", {
				TITLE: "Title",
				NEWS: "News",
				POLITICS: "Politics",
				PICS: "Pics",
				SPORTS: "Sports",
				POSTED_BY: "Posted by",
				COMMENTS: "Comments",
				POSTS: "Posts"
			});

			$translateProvider.translations("esp", {
				TITLE: "Title",
				NEWS: "Noticias",
				POLITICS: "Política",
				PICS: "Fotos",
				SPORTS: "Deportes",
				POSTED_BY: "publicado por",
				COMMENTS: "Comentarios",
				POSTS: "Mensajes"
			});

			$translateProvider.preferredLanguage("en");
		})

		.run([
			"$rootScope",
			"$state",
			"$stateParams",
			($rootScope, $state, $stateParams) => {
				// It's very handy to add references to $state and $stateParams to the $rootScope
				// so that you can access them from any scope within your applications.For example,
				// <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
				// to active whenever 'contacts.list' or one of its decendents is active.
				$rootScope.$state = $state;
				$rootScope.$stateParams = $stateParams;
			}
		]);
})();
