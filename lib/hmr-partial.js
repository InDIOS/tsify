if (module.hot) {
	var vue = require('vue');
	var hmrAPI = require('HOTRELOADAPI');
	hmrAPI.install(vue, true);
	if (!hmrAPI.compatible){
		console.warn('vue-hot-reload-api is not compatible with the version of Vue you are using.');
	} else {
		if (module.exports.__esModule) module.exports = module.exports.default;
		if (typeof module.exports === 'function') {
			if (module.exports.super && module.exports.super.name === 'Vue') {
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
			} else {
				module.exports = require('UDMODULE').defn(module, module.exports);
			}
		} else {
			module.exports = require('UDMODULE').defobj(module, module.exports);
		}
	}
}
