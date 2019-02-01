(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.Example = {}));
}(this, function (exports) {
	const hello = (world) => console.log(`Hello, ${world}!`);

	exports.hello = hello;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
