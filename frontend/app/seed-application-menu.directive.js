(function() {
  'use strict';

  var MODULE_NAME = 'awesome.module.seed';

  angular.module(MODULE_NAME)
         .directive('seedApplicationMenu', seedApplicationMenu);

  function seedApplicationMenu(applicationMenuTemplateBuilder) {
    var directive = {
      restrict: 'E',
      template: applicationMenuTemplateBuilder('/#/example', 'mdi-emoticon-happy', 'Seed'),
      replace: true
    };

    return directive;
  }
})();