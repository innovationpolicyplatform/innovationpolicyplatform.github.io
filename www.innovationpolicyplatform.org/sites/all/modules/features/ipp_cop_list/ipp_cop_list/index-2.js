/**
 * @file
 * Custom scripts for Unify theme.
 */
(function ($) {

  /**
   * MegaMenu menu tabs behavior.
   *
   * @type {{attach: Function}}
   */
  Drupal.behaviors.selectACommunityTab = {
    attach: function (context) {

      $("#community_search_box").keyup(function(e) {
        $("#select-a-community #community-scroll-area ul li").children().each(function (){
          if ($(this).text().match(new RegExp($("#community_search_box").val(), 'gi'))) {
            $(this).parent().show();
          }
          else {
            $(this).parent().hide();
          }
        });
      });
    }
  };
})(jQuery);

