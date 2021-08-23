(function() {
    
    angular.module('app.global').service('appService', appService);
    
    function appService($rootScope, $state, $stateParams, $translate, $transitions, ENV_VARS) {
        // $location, $timeout, $uibModal, ssoService, authService, userService, dateService, toitsuToasterService
        
        return {
            initialize: initialize
        };
        
        function initialize() {
            
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
            
            $translate.use('el');
            
            $rootScope.baseUrl = ENV_VARS.baseUrl;
            
            $rootScope.settings = {

            };

            $rootScope.user = {};
            $rootScope.authenticated = false;
            
            /**
             * HTML title
             */
            $transitions.onSuccess({
                to: function(state) {
                    $translate.onReady(function() {
                        if (state.data && state.data.title) {
                            $rootScope.title = $translate.instant(state.data.title);
                        }
                        else {
                            $rootScope.title = $translate.instant('global.appTitle');
                        }
                    });
                }
            });
            
            /**
             * Toaster
             */
            // $rootScope.toasterOptions = {
            //     'close-button': true,
            //     'tap-to-dismiss': false,
            //     'body-output-type': 'trustedHtml',
            //     'time-out': {
            //         'toast-success': 5000,
            //         'toast-info': 8000,
            //         'toast-warning': 8000,
            //         'toast-error': 10000
            //     }
            // };
            
            /**
             * Μέθοδοι για εμφάνιση ημερομηνιών με σωστό format
             */
            // $rootScope.formatDate = function(arg) {
            //     return dateService.getFormattedMomentWithTzAsDateWithSlashes(arg);
            // };
            
            // $rootScope.formatDateTime = function(arg) {
            //     return dateService.getFormattedMomentWithTzAsDateTimeWithSlashes(arg);
            // };
            
            /**
             * Μέθοδος για έλεγχο των δικαιωμάτων του χρήστη
             */
            // $rootScope.userHasPermission = function(permissions) {
            //     return authService.userHasPermission(permissions);
            // };
            
            /**
             * Μέθοδος για scroll στο κάτω μέρος της σελίδας
             */
            $rootScope.scrollToBottom = function() {
                $('html, body').animate({scrollTop: $(document).height()}, 500);
            };
            
        }
        
    }
    
})();
