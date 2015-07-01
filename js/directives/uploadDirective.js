app.directive('uploadDirective', function($parse) {
	return {
		restrict: 'EA',
		replace: true,
		template: "<input type='file /'>"
		link: function (scope, element, attrs) {

			//input  a file
            var modelGet = $parse(attrs.fileInput);
            var modelSet = modelGet.assign;
            var onChange = $parse(attrs.onChange);
 
            var updateModel = function () {
                scope.$apply(function () {
                    modelSet(scope, element[0].files[0]);
                    onChange(scope);
                }); 
		};

		element.bind('change', updateModel);
	};
});