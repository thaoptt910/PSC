/*
 * 5 ways to customize the infowindow
 * 2015 - en.marnoto.com
*/

// map center
//var center = new google.maps.LatLng(40.589500, -8.683542);
var center = new google.maps.LatLng(10.785377, 106.693515);

// marker position
//var factory = new google.maps.LatLng(40.589500, -8.683542);
var factory = new google.maps.LatLng(10.785377, 106.693515);//40 Pham ngoc thach

function initialize() {
  var mapOptions = {
    center: center,
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);

  // InfoWindow content




  var content = '<div class="information">' +
                    '<ul>' +
                    '<li><i class="fa fa-map-marker"></i><span>40 Phạm Ngọc Thạch, Phường 6, Quận 3, Tp Hồ Chí Minh, Việt Nam</span></li>' +
                      '<li><i class="fa fa-phone"></i><span>(08) 35173655 - 0903725496</span></li>' +
                      
                      '<li><i class="fa fa-print"></i><span>(08) 35173655</span></li>' +
                      '<li><i class="fa fa-envelope-o"></i><span>webmaster@pscvietnam.com</span></li>' +
                      '</ul>'+
                      '</div>';
                    

  // A new Info Window is created and set content
  var infowindow = new google.maps.InfoWindow({
    content: content,

   
    maxWidth: 373,
  });
   
  var marker = new google.maps.Marker({
    position: factory,
    map: map,
    // title:"Fábrica de Porcelana da Vista Alegre"
  });
/*----------------------------tắt sự kiện click vào show box-----------------------------------------------------*/
  infowindow.open(map,marker);
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.hide();
  });


  // google.maps.event.addListener(map, 'click', function() {
  //   infowindow.close();
  // });

  // *
  // START INFOWINDOW CUSTOMIZE.
  // The google.maps.event.addListener() event expects
  // the creation of the infowindow HTML structure 'domready'
  // and before the opening of the infowindow, defined styles are applied.
  // *
  google.maps.event.addListener(infowindow, 'domready', function() {

    // Reference to the DIV that wraps the bottom of infowindow
    var iwOuter = $('.gm-style-iw');

    /* Since this div is in a position prior to .gm-div style-iw.
     * We use jQuery and create a iwBackground variable,
     * and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
    */
    var iwBackground = iwOuter.prev();

    // Removes background shadow DIV
    iwBackground.children(':nth-child(2)').css({'display' : 'none'});

    // Removes white background DIV
    iwBackground.children(':nth-child(4)').css({'display' : 'none'});

    // Moves the infowindow 115px to the right.
    iwOuter.parent().parent().css({left: '50px'});

  
    // iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'left: 74px !important;'});

    
    // iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s + 'left: 74px !important;'});


    iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'rgba(72, 181, 233, 0.6) 0px 1px 6px', 'z-index' : '1','background-color':'transparent'});

    // Reference to the div that groups the close button elements.
    var iwCloseBtn = iwOuter.next();

    // Apply the desired effect to the close button
    iwCloseBtn.css({opacity: '1', right: '29px', top: '-5px', border: '7px solid #0066b3', 'border-radius': '13px', 'box-shadow': '0 0 5px #3990B9','width':'27','height':'27','display':'none'});

    // If the content of infowindow not exceed the set maximum height, then the gradient is removed.
    if($('.iw-content').height() < 140){
      $('.iw-bottom-gradient').css({display: 'none'});
    }

    // The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
    iwCloseBtn.mouseout(function(){
      $(this).css({opacity: '1'});
    });
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
