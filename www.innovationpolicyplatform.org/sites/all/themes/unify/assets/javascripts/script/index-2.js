/**
 * @file
 * Custom scripts for Unify theme.
 */
(function ($) {

  /**
   * Add tinyscrollbar to defined blocks.
   *
   * @type {{attach: Function}}
   */
  Drupal.behaviors.tinyscrollbar = {
    attach: function (context) {
      $('#community-scroll-area').tinyscrollbar();
      $('#scroll-area').tinyscrollbar();

      $('#community-scroll-area').hover(function() {
        $(window).trigger('resize');
      });
      $('#scroll-area').hover(function() {
        $(window).trigger('resize');
      });
    }
  };

  /**
   * MegaMenu menu tabs behavior.
   *
   * @type {{attach: Function}}
   */
  Drupal.behaviors.omMenuTabs = {
    attach: function (context) {

      if ($('.om-leaf').length > 0) {

        // Implement active class toggling.
        $('.om-link').click(function(e) {
          $('.om-leaf').removeClass('active');
          $(this).parent().addClass('active');

          // Display tabbed content only if was previously hidden by clicking
          // on ".close" handler element.
          if ($('.om-maximenu-tabbed-content').hasClass('om-maximenu-tabbed-hidden')) {
            $('.om-maximenu-tabbed-content').removeClass('om-maximenu-tabbed-hidden').slideDown();
          }
        });

        // Implement close behaviour, remove activ link only after transaction
        // has been completed.
        $('.om-leaf .close').click(function(e) {
          $('.om-maximenu-tabbed-content').addClass('om-maximenu-tabbed-hidden').slideUp(300,
            function() {
              $('.om-leaf').removeClass('active');
              $(window).trigger('resize');
            }
          );
        });
      }
    }
  };

  /**
   * Taxonomy menu dropdown behavior.
   *
   * @type {{attach: Function}}
   */
  Drupal.behaviors.taxonomyMenu = {
    attach: function (context) {

      $('.taxonomy-menu-active-term').siblings('.item-list').show();
      $('.taxonomy-menu-trail-term').siblings('.item-list').show();

      $('.taxonomy-menu-handler').click(function(e) {
        $(this).parent('a').siblings('.item-list').toggle();
        e.preventDefault();
      });
    }
  };


  /**
   * Slightly modified version of oa_appearance.js, removed in unify_js_alter().
   *
   * @see: unify_js_alter.
   */
  
  /* force the banners to be displayed within one second since
   poormanscron can delay this for a while
   */
  setTimeout(function() {
    var $banner = $('.oa-banner');
    $banner.each( function(index) {
      $(this).addClass('oa-banner-appeared');
    });
  }, 1000);

  Drupal.behaviors.oaAppearance = {
    attach: function(context, settings) {
      var $banner = $('.oa-banner', context);
      if ($banner.length) {
        var $width = $('body').width();
        $banner.each( function(index) {
          if (!$(this).hasClass('oa-banner-appeared') &&
            !$(this).hasClass('oa-banner-hidden')) {
            // set the image sizes before image gets loaded
            var $img_width = parseInt($(this).attr('data-width'));
            var $img_height = parseInt($(this).attr('data-height'));
            if ($img_width > 0) {
              // stretched banner image
              var $max_height = document.documentElement.clientHeight / 3;
              var $new_width = $new_height * $img_width / $img_height;
              var $new_height = Math.min( $img_height * $width / $img_width, $max_height);
              $(this).css('height', $new_height + 'px');
              $(this).css('max-height', $max_height + 'px');
              $(this).addClass('oa-banner-hidden');
              var $image = $('.oa-banner-overlay-img', this);
              if ($image.length) {
                $image.css('width', '100%');
              }
            }
            else {
              // non-stretching banner image
              $(this).addClass('oa-banner-appeared');
            }
          }
        });
      }
    }
  };

  $(window).load(function() {
    // this is needed to allow bootstrap tour to display correctly
    $(window).trigger('resize');
  });
})(jQuery);
