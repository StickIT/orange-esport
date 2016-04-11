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
require(['jquery', 'bootstrap', 'velocity', 'velocity-ui', 'parallax', 'typed'], function(jQuery, Velocity) {
    jQuery(function() {
        jQuery(document).ready(function() {
			console.log('It works !');
            // Open modal at start
            jQuery('#modal-registration-steps').modal('show');
            // Steps
            registrationStep00();
		});
        // Registration Sequences        
        // Step 00 : Welcome
        function registrationStep00(){
            // Load Parallax
            jQuery('.parallax-step-00').parallax();
            // Animate speechbubble
            jQuery('.parallax-step-00 .speech-text-left, .parallax-step-00 .speech-photo-left').velocity({opacity: [1, 0]}, { duration: 100 });
            // jQuery('.parallax-step-00 .speech-photo-left img').velocity({opacity: [1, 0], translateY: ['0', '-150%']}, { duration: 500, easing: 'ease-out' }); 
            jQuery('.parallax-step-00 .speech-text-left-logo-start').velocity({scaleX: ['1', '0']}, {duration: 300, easing: 'ease-out'}).velocity({left: ['0', '50%'], bottom: ['0', '50%']}, { 
                duration: 800,
                easing: [ .24,0,.29,1.29 ],
                delay: 200,
                complete: function(){
                    // jQuery('.parallax-step-00 .speech-text-left-logo-start').velocity('callout.pulse', {duration: 300});
                    jQuery('.parallax-step-00 .speech-photo-left img').velocity({opacity: [1, 0], translateY: ['0', '-150%']}, { duration: 800, easing: [ .24,0,.29,1.29 ] });
                    jQuery('.parallax-step-00 .speech-text-left .speech-text-left-bubble').velocity({ 
                        opacity: [1, 0], 
                        width: ['550px', '0px'] }, 
                        { 
                        duration: 500,
                        easing: [ .24,0,.29,1.29 ],
                        complete: function(){                                    
                            jQuery('.parallax-step-00 .text').typed({ 
                                strings: ["Salut ! Moi c'est Rush. <br> <b>Et toi t'es qui ?</b>"],
                                showCursor: false,
                                callback: function() { 
                                    jQuery('.parallax-step-00 .text').append('<input class="typedInput" type="text" name="pseudo" autofocus>');                                    
                                    jQuery('.parallax-step-00 .speech-text-left-bubble a').click(function(e){
                                        e.preventDefault();
                                        e.stopPropagation();  
                                        if(jQuery('input[name="pseudo"]').val() != ''){
                                            pseudoUser = jQuery('input[name="pseudo"]').val();
                                            jQuery('.parallax-step-00 .speech-text-left, .parallax-step-00 .speech-photo-left').velocity({opacity: [0, 1]}, { duration: 500, display: "none" });
                                            jQuery('.parallax-step-00 .speech-photo-left img').velocity({opacity: [0, 1], translateY: ['-150%', '0']}, { duration: 500, display: "none" }); 
                                            jQuery('.parallax-step-00 .speech-text-left-logo, .parallax-step-00 .speech-text-left-bubble').velocity({opacity: [0, 1], translateY: ['150%', '0']}, {
                                                duration: 500, 
                                                display: 'none',
                                                complete: function(){registrationStep02();}
                                            }); 

                                        }else{
                                            jQuery('.parallax-step-00 .speech-text-left .speech-text-left-bubble').velocity('callout.shake');
                                            jQuery('input[name="pseudo"]').addClass('has-error');
                                        }
                                    });  
                                }
                            });
                        }
                    });
                }
            });       
        }
        // Step 01 : Qui es-tu ?
        function registrationStep01(){
            // Load Parallax
            jQuery('.parallax-step-01').parallax();
            // Animate speechbubble
            jQuery('.parallax-step-01 .speech-text-left, .parallax-step-01 .speech-photo-left').velocity({opacity: [1, 0]}, { duration: 100 });
            jQuery('.parallax-step-01 .speech-photo-left img').velocity({opacity: [1, 0], translateY: ['0', '-150%']}, { duration: 500, easing: 'ease-out' }); 
            jQuery('.parallax-step-01 .speech-text-left-logo').velocity('transition.bounceUpIn', { 
                duration: 500,
                easing: 'ease-out',
                complete: function(){
                    jQuery('.parallax-step-01 .speech-text-left-logo').velocity('callout.pulse', {duration: 300, delay: 200});
                    jQuery('.parallax-step-01 .speech-text-left .speech-text-left-bubble').velocity({ opacity: [1, 0], width: ['550px', '0px'] }, { 
                        duration: 500,
                        easing: 'ease-out',
                        complete: function(){                                    
                            jQuery('.parallax-step-01 .text').typed({ 
                                strings: ["Salut ! Moi c'est Rush. <br> <b>Et toi t'es qui ?</b>"],
                                showCursor: false,
                                callback: function() { 
                                    jQuery('.parallax-step-01 .text').append('<input class="typedInput" type="text" name="pseudo" autofocus>');                                    
                                    jQuery('.parallax-step-01 .speech-text-left-bubble a').click(function(e){
                                        e.preventDefault();
                                        e.stopPropagation();  
                                        if(jQuery('input[name="pseudo"]').val() != ''){
                                            pseudoUser = jQuery('input[name="pseudo"]').val();
                                            jQuery('.parallax-step-01 .speech-text-left, .parallax-step-01 .speech-photo-left').velocity({opacity: [0, 1]}, { duration: 500, display: "none" });
                                            jQuery('.parallax-step-01 .speech-photo-left img').velocity({opacity: [0, 1], translateY: ['-150%', '0']}, { duration: 500, display: "none" }); 
                                            jQuery('.parallax-step-01 .speech-text-left-logo, .parallax-step-01 .speech-text-left-bubble').velocity({opacity: [0, 1], translateY: ['150%', '0']}, {
                                                duration: 500, 
                                                display: 'none',
                                                complete: function(){registrationStep02();}
                                            }); 

                                        }else{
                                            jQuery('.parallax-step-01 .speech-text-left .speech-text-left-bubble').velocity('callout.shake');
                                            jQuery('input[name="pseudo"]').addClass('has-error');
                                        }
                                    });  
                                }
                            });
                        }
                    });
                }
            });       
        }
        // Step 02 : Bravo, tu fais parti du club !
        function registrationStep02(){
            // Load parallax
            jQuery('.parallax-step-02').parallax();
            // Remove class
            jQuery('.parallax-step-02').removeClass('hidden');
            jQuery('.parallax-step-02 .text-pseudoUser').html(pseudoUser);
            // Animate speechbubble
            jQuery('.parallax-step-02 .speech-text-left, .parallax-step-02 .speech-photo-left').velocity({opacity: [1, 0]}, { duration: 100 });
            jQuery('.parallax-step-02 .speech-photo-left img').velocity({opacity: [1, 0], translateX: ['0', '-150%']}, { duration: 500, easing: 'ease-out' }); 
            jQuery('.parallax-step-02 .speech-text-left-logo').velocity({opacity: [1, 0], translateY: ['0', '150%']}, { 
                duration: 500,
                easing: 'ease-out',
                complete: function(){
                    jQuery('.parallax-step-02 .speech-text-left .speech-text-left-bubble').velocity({ opacity: [1, 0], width: ['550px', '0px'] }, { 
                        duration: 500,
                        easing: 'ease-out',
                        complete: function(){                                    
                            jQuery('.parallax-step-02 .text').typed({ 
                                strings: ["Te voilà parmi nous !<br> <b>Es-tu prêt à découvrir l'expérience ?</b>"],
                                showCursor: false,
                                callback: function() {                                  
                                    jQuery('.parallax-step-02 .speech-text-left-bubble a').click(function(e){
                                        e.preventDefault();
                                        e.stopPropagation();  
                                        if(jQuery('input[name="pseudo"]').val() != ''){
                                            var pseudoUser = jQuery('input[name="pseudo"]').val();
                                            jQuery('.parallax-step-02 .speech-text-left, .parallax-step-02 .speech-photo-left').velocity({opacity: [0, 1]}, { duration: 1000, display: "none" });
                                            jQuery('.parallax-step-02 .speech-photo-left img').velocity({opacity: [0, 1], translateX: ['-150%', '0']}, { duration: 500, display: "none" }); 
                                            jQuery('.parallax-step-02 .speech-text-left-logo, .parallax-step-02 .speech-text-left-bubble').velocity({opacity: [0, 1], translateX: ['150%', '0']}, { duration: 500, display: 'none' }); 

                                        }else{
                                            jQuery('.parallax-step-02 .speech-text-left .speech-text-left-bubble').velocity('callout.shake');
                                            jQuery('input[name="pseudo"]').addClass('has-error');
                                        }
                                    });  
                                }
                            });
                        }
                    });
                }
            });       
        }
    });
});