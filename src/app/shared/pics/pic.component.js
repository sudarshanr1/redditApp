// item.component.js
(() => {
	angular.module("app").component("pic", {
		controller: "PicController",
		controllerAs: "vm",
		templateUrl: "app/shared/pics/pic.html",
		bindings: {
			item: "="
		}
	});
})();
