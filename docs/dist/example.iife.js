var Example = (function (exports) {
	const hello = (world) => console.log(`Hello, ${world}!`);

	exports.hello = hello;

	return exports;

}({}));
