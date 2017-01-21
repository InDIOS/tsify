if (module.hot) {
	var hmrAPI = require('HOTRELOADAPI');
	hmrAPI.install(require('vue'), true);
	if (!hmrAPI.compatible) {
		console.warn('vue-hot-reload-api is not compatible with the version of Vue you are using.');
	} else {
		if (module.exports.__esModule) module.exports = module.exports.default;
		module.hot.accept();
		var snapshot = require('vue-tsify/lib/hmr-snapshots');
		if (!module.hot.data) {
			if (hmrAPI.rerender && hmrAPI.reload) snapshot.register('COMP_ID', (module.exports.$options || module.exports.options));
			hmrAPI.createRecord('COMP_ID', module.exports);
		} else {
			if (hmrAPI.rerender && hmrAPI.reload) {
				if (module.exports.$options) {
					if (module.exports.$options.render && snapshot.renderChanged('COMP_ID', module.exports.$options)) {
						hmrAPI.rerender('COMP_ID', module.exports.$options);
					} else {
						hmrAPI.reload('COMP_ID', module.exports.$options);
					}
				} else {
					if (module.exports.options.render && snapshot.renderChanged('COMP_ID', module.exports.options)) {
						hmrAPI.rerender('COMP_ID', module.exports.options);
					} else {
						hmrAPI.reload('COMP_ID', module.exports.options);
					}
				}
			} else {
				if (module.exports.$options) {
					hmrAPI.update('COMP_ID', module.exports, module.exports.$options.template);
				} else {
					hmrAPI.update('COMP_ID', module.exports, module.exports.options.template);
				}
			}
		}
	}
}
