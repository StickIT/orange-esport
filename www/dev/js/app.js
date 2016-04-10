requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: 'js'
    }
});
require.config({
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'velocity': {
            deps: ['jquery']
        },
        'velocity-ui': {
            deps: ['velocity']
        },
        'parallax': {
            deps: ['jquery']
        },
        'typed': {
            deps: ['jquery']
        }
    },
    paths: {
        'jquery': 'jquery',
        'bootstrap': 'bootstrap',
        'velocity': 'velocity',
        'velocity-ui': 'velocity.ui',
        'parallax': 'jquery.parallax',
        'typed': 'typed'
    }
});
require(['jquery', 'bootstrap', 'velocity', 'velocity-ui', 'parallax', 'typed'], function(jQuery) {
    jQuery(function() {
        jQuery(document).ready(function() {
			console.log('It works !');
            jQuery('#modal-registration-steps').modal('show');
            jQuery('.parallax-container-steps').parallax();
            jQuery('.speech-photo-left img').velocity("transition.slideLeftBigIn", { duration: 1000 });
            jQuery('.speech-text-left .speech-text-left-logo').velocity("transition.slideRightBigIn", { duration: 1000 });
            jQuery('.speech-text-left .speech-text-left-bubble').velocity({ opacity: [1, 0], width: ['550px', '0px'] }, { duration: 800, delay: 400, easeing: 'ease-out' });
            jQuery('.speech-text-left, .speech-photo-left').velocity("transition.fadeIn", { duration: 1000, stagger: 200});
            jQuery(".text").typed({ 
                strings: ["<b>Salut ! Moi c'est Rush</b> <br> Et toi t'es qui ?"],
                startDelay: 1000
            });
		});
    });
});