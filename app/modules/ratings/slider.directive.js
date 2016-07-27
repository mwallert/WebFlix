
  angular.module('webflixApp')
  .directive('slider', slider);

  function slider(storage){
    function link(scope, element, attrs){
      $(element[0])
        .val(storage.get('filterRating') || 0)
        .rangeslider({
          polyfill: false,
          onSlideEnd: function(pos, value){
            storage.set('filterRating', value);
          }
        }).change();
    }

    return{
      restrict: 'A',
      link: link
    };
  }
