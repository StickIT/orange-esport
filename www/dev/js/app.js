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
            // Remove class
            jQuery('.parallax-step-00').removeClass('hidden');
            // Animate speechbubble
            jQuery('.parallax-step-00 .speech-text-left, .parallax-step-00 .speech-photo-left').velocity({opacity: [1, 0]}, { duration: 100 });
            // jQuery('.parallax-step-00 .speech-photo-left .speech-image').velocity({opacity: [1, 0], translateY: ['0', '-150%']}, { duration: 500, easing: [ .24,0,.29,1.29 ] }); 
            jQuery('.parallax-step-00 .speech-text-left-logo-start').velocity("transition.shrinkIn", {duration: 300, easing: [ .24,0,.29,1.29 ]}).velocity({left: ['0', '50%'], bottom: ['0', '50%']}, { 
                duration: 500,
                easing: [ .24,0,.29,1.29 ],
                delay: 100,
                complete: function(){
                    jQuery('.parallax-step-00 .speech-text-left-logo-start').velocity('callout.tada', {duration: 300});
                    jQuery('.parallax-step-00 .speech-photo-left .speech-image').velocity({opacity: [1, 0], translateY: ['0', '-150%']}, { duration: 800, easing: [ .24,0,.29,1.29 ] });
                    jQuery('.parallax-step-00 .speech-text-left .speech-text-left-bubble').velocity({ 
                        opacity: [1, 0], 
                        width: ['80%', '0px'] }, 
                        { 
                            duration: 500,
                            easing: [ .24,0,.29,1.29 ],
                            complete: function(){                                 
                                jQuery('.parallax-step-00 .text').typed({ 
                                    strings: ["Bienvenue <br> <b>sur la plateforme des fans d'eSport !</b>"],
                                    showCursor: false,
                                    callback: function() {      
                                    // jQuery('.parallax-step-00 .speech-text-left .speech-text-left-bubble').velocity('callout.swing', {duration: 500});                              
                                    jQuery('.parallax-step-00 .speech-text-left-bubble a').click(function(e){
                                        e.preventDefault();
                                        e.stopPropagation();  
                                        jQuery('.parallax-step-00 .speech-text-left, .parallax-step-00 .speech-photo-left').velocity({opacity: [0, 1]}, { duration: 500, display: "none" });
                                        jQuery('.parallax-step-00 .speech-photo-left .speech-image').velocity({opacity: [0, 1], translateY: ['-150%', '0']}, { duration: 500, display: "none" }); 
                                        jQuery('.parallax-step-00 .speech-text-left-logo-start, .parallax-step-00 .speech-text-left-bubble').velocity({opacity: [0, 1], translateY: ['150%', '0']}, {
                                            duration: 500, 
                                            display: 'none',
                                            complete: function(){registrationStep01();}
                                        }); 
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
            // Remove class
            jQuery('.parallax-step-01').removeClass('hidden');
            // Animate speechbubble
            jQuery('.parallax-step-01 .speech-text-left, .parallax-step-01 .speech-photo-left').velocity({opacity: [1, 0]}, { duration: 100 });
            jQuery('.parallax-step-01 .speech-photo-left .speech-image').velocity({opacity: [1, 0], translateY: ['0', '-150%']}, { duration: 500, easing: [ .24,0,.29,1.29 ] }); 
            jQuery('.parallax-step-01 .speech-text-left-logo').velocity('transition.bounceUpIn', { 
                duration: 500,
                easing: [ .24,0,.29,1.29 ],
                complete: function(){
                    jQuery('.parallax-step-01 .speech-text-left-logo').velocity('callout.tada', {duration: 300});
                    jQuery('.parallax-step-01 .speech-text-left .speech-text-left-bubble').velocity({ opacity: [1, 0], width: ['80%', '0px'] }, { 
                        duration: 500,
                        easing: [ .24,0,.29,1.29 ],
                        complete: function(){                                    
                            jQuery('.parallax-step-01 .text').typed({ 
                                strings: ["Salut ! Moi c'est Rush. <br> <b>Et toi ?</b>"],
                                showCursor: false,
                                callback: function() { 
                                    // jQuery('.parallax-step-01 .speech-text-left .speech-text-left-bubble').velocity('callout.swing', {duration: 500});     
                                    jQuery('.parallax-step-01 .text').append('<input class="typedInput" type="text" name="pseudo" autofocus>');                                    
                                    jQuery('.parallax-step-01 .speech-text-left-bubble a').click(function(e){
                                        e.preventDefault();
                                        e.stopPropagation();  
                                        if(jQuery('input[name="pseudo"]').val() != ''){
                                            pseudoUser = jQuery('input[name="pseudo"]').val();
                                            jQuery('.parallax-step-01 .speech-text-left, .parallax-step-01 .speech-photo-left').velocity({opacity: [0, 1]}, { duration: 500, display: "none" });
                                            jQuery('.parallax-step-01 .speech-photo-left .speech-image').velocity({opacity: [0, 1], translateY: ['-150%', '0']}, { duration: 500, display: "none" }); 
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
        // Step 02 : Bravo tu viens de rejoindre le club
        function registrationStep02(){
            // Load Parallax
            jQuery('.parallax-step-02').parallax();
            // Remove class
            jQuery('.parallax-step-02').removeClass('hidden');
            // Display pseudoUser
            jQuery('.parallax-step-02 .text-pseudoUser').html(pseudoUser);
            // Animate speechbubble
            jQuery('.parallax-step-02 .speech-text-left, .parallax-step-02 .speech-photo-left').velocity({opacity: [1, 0]}, { duration: 100 });
            jQuery('.parallax-step-02 .speech-photo-left .speech-photo-left-card').velocity({opacity: [1, 0], translateY: ['0', '-150%']}, { duration: 500, easing: [ .24,0,.29,1.29 ] }); 
            jQuery('.parallax-step-02 .speech-text-left-logo').velocity('transition.bounceUpIn', { 
                duration: 500,
                easing: [ .24,0,.29,1.29 ],
                complete: function(){
                    jQuery('.parallax-step-02 .speech-text-left-logo').velocity('callout.tada', {duration: 300});
                    jQuery('.parallax-step-02 .speech-text-left .speech-text-left-bubble').velocity({ opacity: [1, 0], width: ['80%', '0px'] }, { 
                        duration: 500,
                        easing: [ .24,0,.29,1.29 ],
                        complete: function(){                                    
                            jQuery('.parallax-step-02 .text').typed({ 
                                strings: ["Te voilà parmi nous. <br> <b>Es-tu prêt à découvrir l'expérience ?</b>"],
                                showCursor: false,
                                callback: function() {  
                                    // jQuery('.parallax-step-02 .speech-text-left .speech-text-left-bubble').velocity('callout.swing', {duration: 500});                                 
                                    jQuery('.parallax-step-02 .speech-text-left-bubble a').click(function(e){
                                        e.preventDefault();
                                        e.stopPropagation();  
                                        jQuery('.parallax-step-02 .speech-text-left, .parallax-step-02 .speech-photo-left').velocity({opacity: [0, 1]}, { duration: 500, display: "none" });
                                        jQuery('.parallax-step-02 .speech-photo-left .speech-photo-left-card').velocity({opacity: [0, 1], translateY: ['-150%', '0']}, { duration: 500, display: "none" }); 
                                        jQuery('.parallax-step-02 .speech-text-left-logo, .parallax-step-02 .speech-text-left-bubble').velocity({opacity: [0, 1], translateY: ['150%', '0']}, {
                                            duration: 500, 
                                            display: 'none',
                                            complete: function(){registrationStep03();}
                                        }); 
                                    });  
                                }
                            });
                        }
                    });
                }
            });       
        }
        // Step 03 : Accès
        function registrationStep03(){
            // Load Parallax
            jQuery('.parallax-step-03').parallax();
            // Remove class
            jQuery('.parallax-step-03').removeClass('hidden');
            // Display pseudoUser
            // Animate speechbubble
            jQuery('.parallax-step-03 .speech-text-left, .parallax-step-03 .speech-photo-left').velocity({opacity: [1, 0]}, { duration: 100 });
            jQuery('.parallax-step-03 .speech-photo-left .speech-image').velocity({opacity: [1, 0], translateY: ['0', '-150%']}, { duration: 500, easing: [ .24,0,.29,1.29 ] }); 
            jQuery('.parallax-step-03 .speech-text-left-logo').velocity('transition.bounceUpIn', { 
                duration: 500,
                easing: [ .24,0,.29,1.29 ],
                complete: function(){
                    jQuery('.parallax-step-03 .speech-text-left-logo').velocity('callout.tada', {duration: 300});
                    jQuery('.parallax-step-03 .speech-text-left .speech-text-left-bubble').velocity({ opacity: [1, 0], width: ['80%', '0px'] }, { 
                        duration: 500,
                        easing: [ .24,0,.29,1.29 ],
                        complete: function(){                                    
                            jQuery('.parallax-step-03 .text').typed({ 
                                strings: ["Accès privilégiés<br> <b>Tu vas venir dans les évènements incontournables de l'eSport !</b>"],
                                showCursor: false,
                                callback: function() {     
                                    // jQuery('.parallax-step-03 .speech-text-left .speech-text-left-bubble').velocity('callout.swing', {duration: 500});                              
                                    jQuery('.parallax-step-03 .speech-text-left-bubble a').click(function(e){
                                        e.preventDefault();
                                        e.stopPropagation();  
                                        jQuery('.parallax-step-03 .speech-text-left, .parallax-step-03 .speech-photo-left').velocity({opacity: [0, 1]}, { duration: 500, display: "none" });
                                        jQuery('.parallax-step-03 .speech-photo-left .speech-image').velocity({opacity: [0, 1], translateY: ['-150%', '0']}, { duration: 500, display: "none" }); 
                                        jQuery('.parallax-step-03 .speech-text-left-logo, .parallax-step-03 .speech-text-left-bubble').velocity({opacity: [0, 1], translateY: ['150%', '0']}, {
                                            duration: 500, 
                                            display: 'none',
                                            complete: function(){registrationStep04();}
                                        }); 
                                    });  
                                }
                            });
                        }
                    });
                }
            });       
        }
        // Step 04 : Rencontres
        function registrationStep04(){
            // Load Parallax
            jQuery('.parallax-step-04').parallax();
            // Remove class
            jQuery('.parallax-step-04').removeClass('hidden');
            // Animate speechbubble
            jQuery('.parallax-step-04 .speech-text-left, .parallax-step-04 .speech-photo-left').velocity({opacity: [1, 0]}, { duration: 100 });
            jQuery('.parallax-step-04 .speech-photo-left .speech-image').velocity({opacity: [1, 0], translateY: ['0', '-150%']}, { duration: 500, easing: [ .24,0,.29,1.29 ] }); 
            jQuery('.parallax-step-04 .speech-text-left-logo').velocity('transition.bounceUpIn', { 
                duration: 500,
                easing: [ .24,0,.29,1.29 ],
                complete: function(){
                    jQuery('.parallax-step-04 .speech-text-left-logo').velocity('callout.tada', {duration: 300});
                    jQuery('.parallax-step-04 .speech-text-left .speech-text-left-bubble').velocity({ opacity: [1, 0], width: ['80%', '0px'] }, { 
                        duration: 500,
                        easing: [ .24,0,.29,1.29 ],
                        complete: function(){                                    
                            jQuery('.parallax-step-04 .text').typed({ 
                                strings: ["Rencontres exclusives<br> <b>Prépare-toi à rencontrer tes influenceurs préférés !</b>"],
                                showCursor: false,
                                callback: function() {    
                                    // jQuery('.parallax-step-04 .speech-text-left .speech-text-left-bubble').velocity('callout.swing', {duration: 500});                               
                                    jQuery('.parallax-step-04 .speech-text-left-bubble a').click(function(e){
                                        e.preventDefault();
                                        e.stopPropagation();  
                                        jQuery('.parallax-step-04 .speech-text-left, .parallax-step-04 .speech-photo-left').velocity({opacity: [0, 1]}, { duration: 500, display: "none" });
                                        jQuery('.parallax-step-04 .speech-photo-left .speech-image').velocity({opacity: [0, 1], translateY: ['-150%', '0']}, { duration: 500, display: "none" }); 
                                        jQuery('.parallax-step-04 .speech-text-left-logo, .parallax-step-04 .speech-text-left-bubble').velocity({opacity: [0, 1], translateY: ['150%', '0']}, {
                                            duration: 500, 
                                            display: 'none',
                                            complete: function(){registrationStep05();}
                                        }); 
                                    });  
                                }
                            });
                        }
                    });
                }
            });       
        }
        // Step 05 : Expériences
        function registrationStep05(){
            // Load Parallax
            jQuery('.parallax-step-05').parallax();
            // Remove class
            jQuery('.parallax-step-05').removeClass('hidden');
            // Animate speechbubble
            jQuery('.parallax-step-05 .speech-text-left, .parallax-step-05 .speech-photo-left').velocity({opacity: [1, 0]}, { duration: 100 });
            jQuery('.parallax-step-05 .speech-photo-left .speech-image').velocity({opacity: [1, 0], translateY: ['0', '-150%']}, { duration: 500, easing: [ .24,0,.29,1.29 ] }); 
            jQuery('.parallax-step-05 .speech-text-left-logo').velocity('transition.bounceUpIn', { 
                duration: 500,
                easing: [ .24,0,.29,1.29 ],
                complete: function(){
                    jQuery('.parallax-step-05 .speech-text-left-logo').velocity('callout.tada', {duration: 300});
                    jQuery('.parallax-step-05 .speech-text-left .speech-text-left-bubble').velocity({ opacity: [1, 0], width: ['80%', '0px'] }, { 
                        duration: 500,
                        easing: [ .24,0,.29,1.29 ],
                        complete: function(){                                    
                            jQuery('.parallax-step-05 .text').typed({ 
                                strings: ["Expériences uniques<br> <b>Tu vivras des moments exceptionnels avec d'autres joueurs !</b>"],
                                showCursor: false,
                                callback: function() {       
                                    // jQuery('.parallax-step-05 .speech-text-left .speech-text-left-bubble').velocity('callout.swing', {duration: 500});                            
                                    jQuery('.parallax-step-05 .speech-text-left-bubble a').click(function(e){
                                        e.preventDefault();
                                        e.stopPropagation();  
                                        jQuery('.parallax-step-05 .speech-text-left, .parallax-step-05 .speech-photo-left').velocity({opacity: [0, 1]}, { duration: 500, display: "none" });
                                        jQuery('.parallax-step-05 .speech-photo-left .speech-image').velocity({opacity: [0, 1], translateY: ['-150%', '0']}, { duration: 500, display: "none" }); 
                                        jQuery('.parallax-step-05 .speech-text-left-logo, .parallax-step-05 .speech-text-left-bubble').velocity({opacity: [0, 1], translateY: ['150%', '0']}, {
                                            duration: 500, 
                                            display: 'none',
                                            complete: function(){registrationStep06();}
                                        }); 
                                    });  
                                }
                            });
                        }
                    });
                }
            });       
        }
        // Step 06 : Choix du jeu
        function registrationStep06(){
            // Load Parallax
            jQuery('.parallax-step-06').parallax();
            // Remove class
            jQuery('.parallax-step-06').removeClass('hidden');
            // Animate speechbubble
            jQuery('.parallax-step-06 .speech-text-left, .parallax-step-06 .speech-photo-left').velocity({opacity: [1, 0]}, { duration: 100 });
            jQuery('.parallax-step-06 .speech-photo-left .speech-photo-left-card').velocity({opacity: [1, 0], translateY: ['0', '-150%']}, { duration: 500, easing: [ .24,0,.29,1.29 ] }); 
            jQuery('.parallax-step-06 .speech-text-left-logo').velocity('transition.bounceUpIn', { 
                duration: 500,
                easing: [ .24,0,.29,1.29 ],
                complete: function(){
                    jQuery('.parallax-step-06 .speech-text-left-logo').velocity('callout.tada', {duration: 300});
                    jQuery('.parallax-step-06 .speech-text-left .speech-text-left-bubble').velocity({ opacity: [1, 0], width: ['80%', '0px'] }, { 
                        duration: 500,
                        easing: [ .24,0,.29,1.29 ],
                        complete: function(){                                    
                            jQuery('.parallax-step-06 .text').typed({ 
                                strings: ["Dis moi, <br> <b>t'es plutôt quoi ?</b>"],
                                showCursor: false,
                                callback: function() {  
                                    // jQuery('.parallax-step-06 .speech-text-left .speech-text-left-bubble').velocity('callout.swing', {duration: 500});                                 
                                    jQuery('.parallax-step-06 .speech-text-left-bubble a').click(function(e){
                                        e.preventDefault();
                                        e.stopPropagation();  
                                        $("input[type=checkbox]").each(function(i) { 
                                            checkedBoxes = jQuery("input[type=checkbox]:checked").length;

                                        });
                                        if(checkedBoxes >= 1){
                                            jQuery('.parallax-step-06 .speech-text-left, .parallax-step-06 .speech-photo-left').velocity({opacity: [0, 1]}, { duration: 500, display: "none" });
                                            jQuery('.parallax-step-06 .speech-photo-left .speech-photo-left-card').velocity({opacity: [0, 1], translateY: ['-150%', '0']}, { duration: 500, display: "none" }); 
                                            jQuery('.parallax-step-06 .speech-text-left-logo, .parallax-step-06 .speech-text-left-bubble').velocity({opacity: [0, 1], translateY: ['150%', '0']}, {
                                                duration: 500, 
                                                display: 'none',
                                                complete: function(){registrationStep07();}
                                            }); 
                                        }else{                                            
                                            jQuery('.parallax-step-06 .speech-text-left .speech-text-left-bubble').velocity('callout.shake');
                                            jQuery('.parallax-step-06 .text').html('<b>Tu dois choisir au moins 1 jeu...</b>');
                                        }               
                                    });  
                                }
                            });
                        }
                    });
                }
            });       
        }
        // Step 07 : Bravo !
        function registrationStep07(){
            // Load Parallax
            jQuery('.parallax-step-07').parallax();
            // Remove class
            jQuery('.parallax-step-07').removeClass('hidden');
            // Username card            
            jQuery('.parallax-step-07 .card-username').html(pseudoUser);
            // Animate speechbubble
            jQuery('.parallax-step-07 .speech-text-left, .parallax-step-07 .speech-photo-left').velocity({opacity: [1, 0]}, { duration: 100 });
            jQuery('.parallax-step-07 .speech-photo-left .speech-photo-left-card').velocity({opacity: [1, 0], translateY: ['0', '-150%']}, { duration: 500, easing: [ .24,0,.29,1.29 ] }); 
            jQuery('.parallax-step-07 .speech-text-left-logo').velocity('transition.bounceUpIn', { 
                duration: 500,
                easing: [ .24,0,.29,1.29 ],
                complete: function(){
                    jQuery('.parallax-step-07 .speech-text-left-logo').velocity('callout.tada', {duration: 300});
                    jQuery('.parallax-step-07 .speech-text-left .speech-text-left-bubble').velocity({ opacity: [1, 0], width: ['80%', '0px'] }, { 
                        duration: 500,
                        easing: [ .24,0,.29,1.29 ],
                        complete: function(){                                    
                            jQuery('.parallax-step-07 .text').typed({ 
                                strings: ["Bravo !, <br> <b>Tu viens de remporter ton premier badge eSport !</b>"],
                                showCursor: false,
                                callback: function() {   
                                    // jQuery('.parallax-step-07 .speech-text-left .speech-text-left-bubble').velocity('callout.swing', {duration: 500});                                
                                    jQuery('.parallax-step-07 .speech-text-left-bubble a').click(function(e){
                                        e.preventDefault();
                                        e.stopPropagation();  
                                        jQuery('.parallax-step-07 .speech-text-left, .parallax-step-07 .speech-photo-left').velocity({opacity: [0, 1]}, { duration: 500, display: "none" });
                                        jQuery('.parallax-step-07 .speech-photo-left .speech-photo-left-card').velocity({opacity: [0, 1], translateY: ['-150%', '0']}, { duration: 500, display: "none" }); 
                                        jQuery('.parallax-step-07 .speech-text-left-logo, .parallax-step-07 .speech-text-left-bubble').velocity({opacity: [0, 1], translateY: ['150%', '0']}, {
                                            duration: 500, 
                                            display: 'none',
                                            complete: function(){
                                                jQuery('#modal-registration-steps').modal('hide');
                                            }
                                        }); 
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