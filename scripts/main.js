(function(root){
	require(["config"], function(config){
		requirejs.config(config);
		require(["App", "ember.min","twitter"], function(App, Ember){
			var app_name = config.app_name || "App";
			root[app_name] = App = Ember.Application.createWithMixins(App, Em.Facebook);
			App.set('appId', '');
		});
	});
})(this);

