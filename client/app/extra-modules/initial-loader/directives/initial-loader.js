function initialLoader($templateRequest, $compile) {
  var directive = {
    link,
    scope: { loader: '=initialLoader', contentClasses: '@' }
  };

  function link(scope, element, iAttrs) {
    var content;
    var children = element.children();
    //var tpl = typeof iAttrs.loadingTemplate !== 'undefined'
      //? iAttrs.loadingTemplate
      //: 'templates/directives/initial_loader.html';

    //$templateRequest(tpl)
    //.then(function(template){
      //var compiler = $compile(template);
      //content = compiler(scope);
      //init();
    //});

    // TODO: Remove harcoded stuff...
    var compiler = $compile(require('../../../templates/directives/initial_loader.html'));
    content = compiler(scope);
    init();

    function init() {
      scope.$watch('loader.loading', function(loading) {

        const showLoadingContent = loading || !!scope.loader.error;
        //children.toggleClass('hide', showLoadingContent);
        if(!showLoadingContent){
          children.toggleClass('fadein', true);
        } else {
          children.toggleClass('faded', true);
          children.toggleClass('noneno', true);
        }

        if (loading && !scope.loader.isRetry) {
          content.addClass('faded');
          element.append(content);
          content.addClass('fadein');
        }

        if (!loading && !scope.loader.error) {
          content.addClass('fadeout')//remove();
          setTimeout(()=>{
            content.remove()
            children.toggleClass('noneno', false);

          }, 1000)
        }
      });
    }
  }

  return directive;
}

export default initialLoader;
