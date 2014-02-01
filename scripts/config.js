define({
	app_name: "MyExampleApp", 
	shim : {
		'ember.min' : {
			deps: ['handlebars.dev', 'jquery2'],
			exports: 'Ember'
		}
	},
	paths : {
		'App': 'app/main',		
		'models': 'app/models',
		'views': 'app/views',
		'controllers': 'app/controllers',
    	'templates': 'app/templates',
		/*libs*/
		/*'jquery.dev': 'libs/jquery/1.11.0/jquery.dev',*/
		/*'jquery': 'libs/jquery/1.11.0/jquery.min',*/
		/*'jquery2.dev': 'libs/jquery/2.1.0/jquery.dev',*/
		'jquery2': 'libs/jquery/2.1.0/jquery.min',
		'handlebars.dev': 'libs/handlebars/1.3.0/handlebars.dev',
		/*'handlebars': 'libs/handlebars/1.3.0/handlebars',*/
		/*'ember.dev': 'libs/ember/1.3.1/ember.dev',*/
		/*'ember.prod': 'libs/ember/1.3.1/ember.prod',*/
		'ember.min': 'libs/ember/1.3.1/ember.prod.min',
		'bootstrap': 'libs/bootstrap/3.0.0/js/bootstrap.min',
		/*requirejs-plugins*/
		'text': 'libs/requirejs-plugins/text',
		'hbs': 'libs/requirejs-plugins/hbs',
		'domReady': 'libs/requirejs-plugins/domReady'
	},
	/*hbs plugin options*/
	hbs: {
		disableI18n: true,
		templateExtension: "html"
	}

}); 

