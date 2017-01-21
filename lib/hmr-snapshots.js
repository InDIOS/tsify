var cache = {};
exports.register = function (id, options) {
	cache[id] = (options.render || '').toString();
};
exports.renderChanged = function (id, options) {
	var render = (options.render || '').toString(),
		change = cache[id] !== render;
	if (change) cache[id] = render;
	return change;
};
