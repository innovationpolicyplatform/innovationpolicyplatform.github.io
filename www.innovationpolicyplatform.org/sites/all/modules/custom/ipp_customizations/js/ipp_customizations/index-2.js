(function ($) {
  Drupal.behaviors.ipp_customizations = {
    attach: function (context, settings) {
      var loader_image = Drupal.settings.basePath + Drupal.settings.ipp_customizations.throbber;

      $.tablesorter.defaults.sortList = [[3,1]];
      
      $(".view-book-mark-content .views-table").tablesorter({
        sortInitialOrder: 'desc',
        dateFormat : "mmddyyyy",
        headers: {
          2: { sorter:'shortDate' },
          3: { sorter:'shortDate' }
        },
        widgets: ['zebra']
      });

      var windowHeight = $(window).height();
      $('.ctools-modal-content, #modal-content', context).height('auto');
      if (self.pageYOffset) { // all except Explorer
        var wt = self.pageYOffset;
      }
      else if (document.documentElement && document.documentElement.scrollTop) { // Explorer 6 Strict
        var wt = document.documentElement.scrollTop;
      }
      else if (document.body) { // all other Explorers
        var wt = document.body.scrollTop;
      }
      if ($('#modalContent', context).height() > windowHeight) {
        $('#modalContent', context).css({top: '20px'});
      }
      
      var modelContentHeight = $('#modalContent', context).outerHeight();
      if (modelContentHeight != null) {
        modelContentHeight = (windowHeight > modelContentHeight) ? windowHeight : modelContentHeight;
        $("#modalBackdrop", context).height(modelContentHeight + "px");
      }
      
      $(".toggle-moreinfo").unbind("click").click(function() {
        $(this).toggleClass("closeElement");
        
        if ($(this).hasClass("closeElement")) {
          $(this).text("Close " + $(this).text());
        }
        else {
          $(this).text($(this).text().replace("Close ", ""));
        }
        $(".field-name-field-more-information").toggleClass("hideme");
      });
    }
  }
})(jQuery);
