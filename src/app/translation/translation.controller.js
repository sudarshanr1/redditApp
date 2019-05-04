// translation.controller.js
(() => {
	angular
		.module("app")
		.controller("TranslationController", TranslationController);

	function TranslationController($translate) {
		const vm = this;
		vm.test = "test";
		vm.allLangs = [
			{ language: "English", code: "en" },
			{ language: "Spanish", code: "esp" }
		];
		vm.useLanguage = useLanguage;

		function useLanguage(code) {
			$translate.use(code);
		}
	}
})();
