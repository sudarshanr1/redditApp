// home.controller.js
(() => {
	angular.module("app").controller("NavBarController", NavBarController);

	function NavBarController() {
		const vm = this;
		vm.news = true;
		vm.makeActive = makeActive;
		vm.navBars = ["news", "politics", "pics", "sports"];

		function makeActive(item) {
			for (let navBar of vm.navBars) {
				if (navBar === item) {
					vm[navBar] = true;
				} else {
					vm[navBar] = false;
				}
			}
		}
	}
})();
