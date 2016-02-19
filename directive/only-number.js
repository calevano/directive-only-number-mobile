.directive('only-number', function(){
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, modelCtrl) {
            function valueInput (inputValue) {
                var transformedInput = inputValue ? inputValue.replace(/[^\d.]/g,'').replace('.','') : null;
                if (transformedInput != inputValue) {
                    modelCtrl.$setViewValue(transformedInput);
                    modelCtrl.$render();
                }
                return transformedInput;
            };
            modelCtrl.$parsers.push(function (valueInput);
        }
    };
})