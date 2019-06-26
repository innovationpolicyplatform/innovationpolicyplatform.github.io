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
  Drupal.behaviors.selectACountryTab = {
    attach: function (context) {

      // scroll bar
      $('#focus-init').click(function(){
        $('#map1').vectorMap('set', 'focus', 1, 0, 0);
      });
      //inArray function
      function inArray(elem,array){
        var len = array.length;
        for(var i = 0 ; i < len;i++){
          if(array[i] == elem){return i;}
        }
        return 0;
      }
      // World Bank regions
      ippregions = ['','Latin America and the Caribbean', 'North America', 'Sub-Saharan Africa', 'North Africa and Middle East', 'Europe', 'South, East and Central Asia', 'Oceania', 'Russian Federation'];
      // World Bank countries
      /* Added by santhosh on 06Aug, 2013 regarding 'No click for countries without any contents' */
      ippcountries = Drupal.settings.geonav.ippcountries;
      ipptids = Drupal.settings.geonav.ipptids;
      var check_countries = [''];
      $.each(ippcountries, function(key, value) {
        check_countries.push(value);
      });
      /* Ended by santhosh on 06Aug, 2013 regarding 'No click for countries without any contents' */
      $('#map1').vectorMap({
        map: 'custom',
        focusOn: {
          x: 0.5,
          y: 0.5,
          scale: 1
        },
        series: {
          regions: [{
            values: {
              /* Changed by prachi on 22Aug, 2013 for replacing #fff to #caf1f2 */
              "Russian Federation": '#57B7D9',
              "RS": '#48A4C5',
              "_3": '#caf1f2',
              "_2": '#48A4C5',
              "CI": '#caf1f2',
              "KP": '#48A4C5',
              "LA": '#48A4C5',
              "TW": '#48A4C5',
              "TL": '#48A4C5',
              "TF": '#48A4C5',
              "Latin America and the Caribbean": '#caf1f2',
              "North America": '#57B7D9',
              "Sub-Saharan Africa": '#caf1f2',
              "North Africa and Middle East": '#64D7D9',
              "Europe": '#BBBBBB',
              "South, East and Central Asia": '#caf1f2',
              "Oceania": '#64D7D9'
              /* Ended by prachi on 22Aug, 2013 for replacing #fff to #caf1f2 */
            }
          }]
        },
        regionStyle:{
          initial: {stroke:'#007585',"stroke-width":0.5, "stroke-opacity": 1}
        },
        onRegionClick: function(event, code){
          if(inArray(code, ippregions)){
            var width = $(window).width();
            var height = $(window).height();
            var pwidth = $('#popup').width();
            var pheight = $('#popup').height();
            $('#body').css({'width':width+'px', 'height':height+'px', 'z-index':999, 'opacity':'0.7', 'background-color': 'rgba(0,0,0,1)', 'position':'fixed', 'left':'0px', 'top': '0px', 'background-image' : 'url("sites/all/modules/custom/document_display/overlay.png")'});
            $('#popup').css({left:width/2-pwidth/2, top:height/2-pheight/2, 'z-index':9999, 'display':'block', 'position':'fixed', 'background-color': 'rgba(0,0,0)'});
            $('#body').click(function(){
              $('#popup').hide();
              $('#body').css({'width':'0px', 'height':'0px'});
            });

            if($('.jvectormap-container').length == 1){
              $('#popup').vectorMap({
                map: 'world_mill_en',
                focusOn: {
                  x: 0.5,
                  y: 0.5,
                  scale: 1
                },
                series: {
                  regions: [{
                    scale: ['#C8EEFF', '#0071A4'],
                    normalizeFunction: 'polynomial',
                    values: {
                      "_1": 15.8,
                      "AF": 16.63,
                      "AL": 11.58,
                      "DZ": 158.97,
                      "AO": 85.81,
                      "AG": 1.1,
                      "AR": 351.02,
                      "AM": 8.83,
                      "AU": 1219.72,
                      "AT": 366.26,
                      "AZ": 52.17,
                      "BS": 7.54,
                      "BH": 21.73,
                      "BD": 105.4,
                      "BB": 3.96,
                      "BY": 52.89,
                      "BE": 461.33,
                      "BZ": 1.43,
                      "BJ": 6.49,
                      "BT": 1.4,
                      "BO": 19.18,
                      "BA": 16.2,
                      "BW": 12.5,
                      "BR": 2023.53,
                      "BN": 11.96,
                      "BG": 44.84,
                      "BF": 8.67,
                      "BI": 1.47,
                      "KH": 11.36,
                      "CM": 21.88,
                      "CA": 1563.66,
                      "CV": 1.57,
                      "CF": 2.11,
                      "TD": 7.59,
                      "CL": 199.18,
                      "CN": 5745.13,
                      "CO": 283.11,
                      "KM": 0.56,
                      "CD": 12.6,
                      "CG": 11.88,
                      "CR": 35.02,
                      "CI": 22.38,
                      "HR": 59.92,
                      "CY": 22.75,
                      "CZ": 195.23,
                      "DK": 22.75,
                      "DJ": 1.14,
                      "DM": 0.38,
                      "DO": 50.87,
                      "EC": 61.49,
                      "EG": 216.83,
                      "SV": 21.8,
                      "GQ": 14.55,
                      "ER": 2.25,
                      "EE": 19.22,
                      "ET": 30.94,
                      "FJ": 3.15,
                      "FI": 231.98,
                      "FR": 2555.44,
                      "FG": 2555.44,
                      "GA": 12.56,
                      "GM": 1.04,
                      "GE": 11.23,
                      "DE": 3305.9,
                      "GH": 18.06,
                      "GR": 305.01,
                      "GD": 0.65,
                      "GT": 40.77,
                      "GN": 4.34,
                      "GW": 0.83,
                      "GY": 2.2,
                      "HT": 6.5,
                      "HN": 15.34,
                      "HK": 226.49,
                      "HU": 132.28,
                      "IS": 12.77,
                      "IN": 5745.13,
                      "ID": 695.06,
                      "IR": 337.9,
                      "IQ": 84.14,
                      "IE": 204.14,
                      "IL": 201.25,
                      "IT": 2036.69,
                      "JM": 13.74,
                      "JP": 5390.9,
                      "JO": 27.13,
                      "KZ": 129.76,
                      "KE": 32.42,
                      "KI": 0.15,
                      "KR": 10.2,
                      "KP": 10.2,
                      "KW": 117.32,
                      "KG": 4.44,
                      "LA": 6.34,
                      "LV": 23.39,
                      "LB": 39.15,
                      "LS": 1.8,
                      "LR": 0.98,
                      "LY": 77.91,
                      "LT": 35.73,
                      "LU": 52.43,
                      "MK": 9.58,
                      "MG": 8.33,
                      "MW": 5.04,
                      "MY": 218.95,
                      "MV": 1.43,
                      "ML": 9.08,
                      "MT": 7.8,
                      "MR": 3.49,
                      "MU": 9.43,
                      "MX": 1004.04,
                      "MD": 5.36,
                      "MN": 5.81,
                      "ME": 3.88,
                      "MA": 91.7,
                      "MZ": 10.21,
                      "MM": 35.65,
                      "NA": 11.45,
                      "NP": 15.11,
                      "NL": 770.31,
                      "NZ": 138,
                      "NI": 6.38,
                      "NE": 5.6,
                      "NG": 206.66,
                      "NO": 413.51,
                      "OM": 53.78,
                      "PK": 174.79,
                      "PA": 27.2,
                      "PG": 8.81,
                      "PY": 17.17,
                      "PE": 153.55,
                      "PH": 189.06,
                      "PL": 438.88,
                      "PT": 223.7,
                      "QA": 126.52,
                      "RO": 158.39,
                      "Russian Federation": 1476.91,
                      "RW": 5.69,
                      "WS": 0.55,
                      "ST": 0.19,
                      "SA": 434.44,
                      "SN": 12.66,
                      "RS": 38.92,
                      "SC": 0.92,
                      "SL": 1.9,
                      "SG": 217.38,
                      "SK": 86.26,
                      "SI": 46.44,
                      "SB": 0.67,
                      "SO": 0.67,
                      "SS": 16.5,
                      "ZA": 354.41,
                      "ES": 1374.78,
                      "LK": 48.24,
                      "KN": 0.56,
                      "LC": 1,
                      "VC": 0.58,
                      "SD": 65.93,
                      "SR": 3.3,
                      "SZ": 3.17,
                      "SE": 444.59,
                      "SY": 10.2,
                      "CH": 522.44,
                      "TW": 426.98,
                      "TJ": 5.58,
                      "TZ": 22.43,
                      "TH": 312.61,
                      "TL": 0.62,
                      "TG": 3.07,
                      "TO": 0.3,
                      "TT": 21.2,
                      "TN": 43.86,
                      "TR": 729.05,
                      "TM": 0,
                      "UG": 17.12,
                      "UA": 136.56,
                      "AE": 239.65,
                      "GB": 2258.57,
                      "US": 14624.18,
                      "UY": 40.71,
                      "UZ": 37.72,
                      "VU": 0.72,
                      "VE": 285.21,
                      "VN": 101.99,
                      "YE": 30.02,
                      "ZM": 15.69,
                      "ZW": 5.57,
                      "GL": 22.75,
                      "_3": 22.75,
                      "_2":40.71,
                      "KP":15.69,
                      "PS":40.71,
                    }
                  }]
                },
                onRegionClick: function(event, code){
                  /* Changed by santhosh on 06Aug, 2013 regarding 'No click for countries without any contents' */
                  if(inArray(code, check_countries)){
                    var country_filter = '';
                    $.each(ippcountries, function(key, value) {
                      if(value == code){
                        country_filter = key;
                      }
                      if(value == code && typeof(ipptids[key]) != 'undefined'){
                        country_filter = ipptids[key];
                      }
                    });
                    window.open(Drupal.settings.basePath+'taxonomy/term/'+country_filter, '_self');
                  }
                  /* Ended by santhosh on 06Aug, 2013 regarding 'No click for countries without any contents' */
                },
                /* Added by santhosh on 08Aug, 2013 regarding 'Pointer for countries with any contents on hover' */
                onRegionOver: function(event, code){
                  if(inArray(code, check_countries)){
                    document.body.style.cursor = "pointer";
                  }else{
                    document.body.style.cursor = "not-allowed";
                  }
                },
                onRegionOut: function(event, code){
                  document.body.style.cursor = "default";
                },
                /* Ended by santhosh on 08Aug, 2013 regarding 'Pointer for countries with any contents on hover' */
                zoomOnScroll:false
              });
            }
            $('.jvectormap-label').show();
            if(code == "Latin America and the Caribbean"){
              $('#popup').vectorMap('set', 'focus', ['MX', 'CL']);
            }else if(code == "North America"){
              $('#popup').vectorMap('set', 'focus', ['CA', 'MX']);
            }else if(code == "Sub-Saharan Africa"){
              $('#popup').vectorMap('set', 'focus', ['TD', 'ZA']);
            }else if(code == "North Africa and Middle East"){
              $('#popup').vectorMap('set', 'focus', ['MA', 'OM']);
            }else if(code == "Europe"){
              $('#popup').vectorMap('set', 'focus', ['IT', 'NO']);
            }else if(code == "South, East and Central Asia"){
              $('#popup').vectorMap('set', 'focus', ['KZ', 'ID']);
            }else if(code == "Oceania"){
              $('#popup').vectorMap('set', 'focus', ['ID', 'NZ']);
            }else if(code == "Russian Federation"){
              $('#popup').vectorMap('set', 'focus', ['Russian Federation']);
            }else{
              $('#popup').vectorMap('set', 'focus', 1, 0, 0);
            }
            $('#popup img').click(function(){
              $('#popup').hide();
              $('#body').css({'width':'0px', 'height':'0px'});
            });
            $('span#region').text(code);
          }
          $('#block-block-6').hide();
        },
        zoomOnScroll:false
      });
      /* Added for filtering the content with region */
      $('#popup span#region').live('click', function(){
        window.open(Drupal.settings.basePath+'geonav/'+$(this).text(), '_self');
      });
      /* Added for troubleshooting the scroll effect issue on topic page */
      $('.link-browse-by-country').live('click', function(){
        //jQuery('#scroll-area').tinyscrollbar({ sizethumb: 32 });
      });
      /* Added for filtering the dropdown list of countries */
      jQuery("#search_box").keyup(function(e) {
        jQuery("#select-a-country #scroll-area ul li").children().each(function (){
          if (jQuery(this).text().match(new RegExp(jQuery("#search_box").val(), 'gi'))) {
            jQuery(this).parent().show();
          }
          else {
            jQuery(this).parent().hide();
          }
        });
      });

    }
  };
})(jQuery);








    
    
