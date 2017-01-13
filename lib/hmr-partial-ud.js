if (module.hot) {
	if (module.exports.__esModule) module.exports = module.exports.default;
	if (typeof module.exports === 'function') {
		module.exports = require('UDMODULE').defn(module, module.exports);
	} else {
		module.exports = require('UDMODULE').defobj(module, module.exports);
	}
}
