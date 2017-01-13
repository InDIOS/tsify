if (module.hot) {
	var hmrAPI = require('HOTRELOADAPI');
	hmrAPI.install(require('vue'), true);
	if (!hmrAPI.compatible) {
		console.warn('vue-hot-reload-api is not compatible with the version of Vue you are using.');
	} else {
		if (module.exports.__esModule) module.exports = module.exports.default;
		module.hot.accept();
		if (!module.hot.data) {
			hmrAPI.createRecord('COMP_ID', module.exports);
		} else {
			if (hmrAPI.rerender && hmrAPI.reload) {
				if (module.exports.options.render || module.exports.options.template) {
					hmrAPI.rerender('COMP_ID', module.exports);
				} else {
					hmrAPI.reload('COMP_ID', module.exports);
				}
			} else {
				hmrAPI.update('COMP_ID', module.exports, module.exports.options.template);
			}
		}
	}
}
