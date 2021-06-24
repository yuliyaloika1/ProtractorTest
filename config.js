exports.config = {
	framework: 'jasmine',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	capabilities: {
		'browserName': 'chrome'
	},
	specs: [
		'tests/test.spec.js'
	],
	jasmineNodeOpts: {
		showColors: true
	},
	onPrepare: function () {
		browser.driver.manage().window().maximize();
	}
};