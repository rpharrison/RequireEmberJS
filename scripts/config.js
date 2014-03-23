define({
  app_name: "MyExampleApp",

  shim : {
    'ember.dev': {
        deps: ['handlebars.dev', 'jquery2'],
        exports: 'Ember'
    }
    'ember.min' : {
      deps: ['handlebars.dev', 'jquery2'],
      exports: 'Ember'
    },
    'emberFacebook':{
      deps:['ember.min']
    },
    'App':{
    deps:['ember.min','emberFacebook']
    }
    //'jquery-ui': ['jquery']
    'jquery.ui': ['jquery2']
    },

	paths : {
	    /*requirejs-plugins*/
		'text': 'libs/requirejs-plugins/text',
		'hbs': 'libs/requirejs-plugins/hbs',
		'domReady': 'libs/requirejs-plugins/domReady'
        
        'handlebars.dev': 'libs/handlebars/1.3.0/handlebars.dev',
		//'handlebars': 'libs/handlebars/1.3.0/handlebars',
        
        /*libs*/
        // jQuery
		//'jquery.dev': 'libs/jquery/1.11.0/jquery.dev',
		//'jquery': 'libs/jquery/1.11.0/jquery.min',
		//'jquery2.dev': 'libs/jquery/2.1.0/jquery.dev',
		'jquery2': 'libs/jquery/2.1.0/jquery.min',
		'jquery.ui': 'libs/jquery.ui/1.9.2/jquery-ui-1.9.2.custom.min',
        
        'highlightjs': 'libs/highlightjs/highlight.pack.js',
        
        //'ember.dev': 'libs/ember/1.3.1/ember.dev',*/
		//'ember.prod': 'libs/ember/1.3.1/ember.prod',*/
		'ember.min': 'libs/ember/1.3.1/ember.prod.min',
        
		'App': 'app/main',
		'models': 'app/models',
		'views': 'app/views',
		'controllers': 'app/controllers',
    	'templates': 'app/templates',
		'routes': 'app/routes',

        'bootstrap': 'libs/bootstrap/3.0.0/js/bootstrap.min',

        // Social Plugins - Google +1, Twitter Tweet, Facebook Like.
		'googlePlus': '//apis.google.com/js/plusone', // Google +1 js loaded from Google CDN.
		'twitter': '//platform.twitter.com/widgets', // Twitter widgets.js loaded from Twitter.
        'emberFacebook': 'mixins/ember-facebook', // Use the Ember-Facebook Mixin:
        
        // Twitter Bootstrap
        'holder': 'libs/bootstrap/3.0.0/js/holder',
		'application': 'libs/bootstrap/3.0.0/js/application',
        'transition': 'libs/bootstrap/3.0.0/js/transition',
        'alert': 'libs/bootstrap/3.0.0/js/alert',
        'BsAlertComponent': 'components/BsAlertComponent',
        'bs-alert': 'bs-alert',
        'BsLabelComponent': 'components/BsLabelComponent',
        'bs-label': 'bs-label',
        'BsBadgeComponent': 'components/BsBadgeComponent',
        'bs-badge': 'bs-badge',
        'BsWellComponent': 'components/BsWellComponent',
        'BsPageHeaderComponent': 'components/BsPageHeaderComponent',
        'BsPanelComponent': 'components/BsPanelComponent',
        'bs-basic': 'bs-basic',
        'button': 'libs/bootstrap/3.0.0/js/button',
        'BsButtonComponent': 'components/BsButtonComponent',
        'BsBtnGroup': 'components/BsBtnGroup',
        'BsBtnToolbarComponent': 'components/BsBtnToolbarComponent',
        'bs-button': 'bs-button',
        'bs-btn-toolbar': 'bs-btn-toolbar',
        'BsProgressComponent': 'components/BsProgressComponent',
        'BsProgressbarComponent': 'components/BsProgressbarComponent',
        'bs-progressbar': 'bs-progressbar',
        'BsPill': 'components/BsPill',
        'BsPills': 'components/BsPills',
        'BsTabPane': 'components/BsTabPane',
        'BsTabsPanes': 'components/BsTabsPanes',
        'BsTabs': 'components/BsTabs',
        'Notifications': 'components/Notifications',
        'GrowlNotifications': 'components/GrowlNotifications',
        'BsModalComponent': 'components/BsModalComponent',
        'bs-modal': 'bs-modal',
        'BsItemsActionBar': 'components/BsItemsActionBar',
        'BsWizardComponent': 'components/BsWizardComponent',
        'BsListGroupComponent': 'components/BsListGroupComponent',
        'showcase-templates': 'showcase-templates',
        'showcase-scripts': 'showcase-scripts',
	},

	/*hbs plugin options*/
	hbs: {
		disableI18n: true,
		templateExtension: "html"
	}
}); 

