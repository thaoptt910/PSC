$(function() {
        

        $('#setting').on('shown.bs.collapse', function() {
          $(".parent").addClass('fa fa-angle-right').removeClass('fa-angle-down');
        });




        $('dir').css('display','none');
        $('#main-menu').smartmenus({
            mainMenuSubOffsetX: -1,
            subMenusSubOffsetX: 10,
            subMenusSubOffsetY: 0
        });
        $('#btn_menu').click(function(){
            $('#main-menu').toggle();
        });
        $('#btn_menu').click(function(){
            $('#main-menu1').toggle();
        });
});
//SEARCH
$(document).ready(function(){


    var submitIcon = $('.searchbox-icon');
    var inputBox = $('.searchbox-input');
    var searchBox = $('.searchbox');
    var isOpen = false;
    submitIcon.click(function(){
        if(isOpen == false){
            $('.search').css('width','100%');
            searchBox.addClass('searchbox-open');
            inputBox.focus();
            isOpen = true;
        } else {
            $('.search').css('width','25px');
            searchBox.removeClass('searchbox-open');
            inputBox.focusout();
            isOpen = false;
        }
    });  
     submitIcon.mouseup(function(){
            return false;
        });
    searchBox.mouseup(function(){
            return false;
        });
    $(document).mouseup(function(){
            if(isOpen == true){
                $('.searchbox-icon').css('display','block');
                submitIcon.click();
            }
        });

    $('#main-menu .has-submenu').click(function(){
        // $(this).next('ul').siblings().hide();
        var $this = $(this);
        var $obj = $this.next('ul');
        // console.log($this.parent('.child-menu'));
        if($this.parents('ul[id^="sm"]').length){
            // $('#main-menu ul').not($obj).hide();
            $('.dropdown').addClass('fa fa-angle-down');
        }
        else{
                $('#main-menu ul').not($obj).hide();
        }
        
    });
   
    $('.searchbox-icon').click(function(){
        $this = $('.searchbox');
        if($this.hasClass('searchbox-open')){
            $('.searchbox input').show();
            $('#main-nav').css('background','linear-gradient(180deg, black 0%, black 50%, transparent 100%, transparent 100%)');
            $('#main-menu li a').css('color','transparent');
            $('.img-logo').css('display','none');
            // $('#language').css('display','none');
            $('.search').css('right','30px!important');
        }
        else{
           $('.searchbox input').hide(); 
           $('#main-menu li a').css('color','#c3c3c3');
            // $('#main-nav').css('background','none');
            // $('#language').css('display','block');
            $('.img-logo').css('display','block');
            $('.search').css('right','85px');
        }
    });
    /*event scroll*/
    $(window).scroll(function(){
        
            var $val = $(this).scrollTop();
                if($val >0){
                  $('#main-nav').addClass('bg-menu-scroll');
                }
                else{
                  // $('#main-nav').addClass('bg-menu-scroll');
                    $('#main-nav').removeClass('bg-menu-scroll');
                }
            
    }); 



    if($(window).width() <= 767){
        $('.searchbox-icon').click(function(){
        $this = $('.searchbox');
        if($this.hasClass('searchbox-open')){
           
            $('#main-nav').css('background','#000');
        }
        else{
            $('#main-nav').css('background','#000');
        }
    });
    }
     $(window).resize(function() {
        if($(window).width() <= 767){
            $('#main-nav').css('background','#000');
        }
        else{
            $('#main-nav').css('background','transparent');
        }

    });

    if($(window).width() <= 1192){
        $('.searchbox-icon').click(function(){
        $this = $('.searchbox');
        // if($this.hasClass('searchbox-open')){
        //     $('.navbar-header').css('display','none');
        // }
        // else{
        //     $('.navbar-header').css('display','block');
        // }
    });
    }
    if($(window).width() <= 1192){
        $('#main-nav').css('opacity', 1);
    }
    else{
        $('#main-nav').css('opacity', 0.85);
    }

    $(window).resize(function() {
        if($(window).width() <= 1192){
            $('#main-nav').css('opacity', 1);
            $('#main-menu').css('display','none');
        }
        else{
            $('#main-nav').css('opacity', 0.85);
            $('#main-menu').css('display','block');
        }
    });
});
/*TAB*/
function openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    document.getElementById(cityName).style.display = "block"; 
}
// cach 1:
var name, email, unit, phone, content;
function OnlickSubmit(thao){
    name = $("#loginForm .contact-left").find("input[name=fullname]").val().trim();
    email = $("#loginForm .contact-left").find("input[name=email]").val().trim();
    unit = $("#loginForm .contact-right").find("input[name=unit]").val().trim();
    phone = $("#loginForm .contact-right").find("input[name=numberphone]").val().trim();
    content = $("#loginForm .contact-content").find("textarea").val().trim();
   //alert(name+" _ "+email+" _ "+unit+" _ "+phone+" _ "+content+" _ ");
    CheckValidate();
}
function CheckValidate(){
    name = $("#loginForm .contact-left").find("input[name=fullname]").val().trim();
    email = $("#loginForm .contact-left").find("input[name=email]").val().trim();
    unit = $("#loginForm .contact-right").find("input[name=unit]").val().trim();
    phone = $("#loginForm .contact-right").find("input[name=numberphone]").val().trim();
    content = $("#loginForm .contact-content").find("textarea").val().trim();
    if(name.length == null || name.length == 0 || name.length == "")
    {
        $("#loginForm .contact-left .full-name .no-empty").css("display","inline-block");
    }
    if(email.length == null || email.length == 0 || email.length == "")
        {
        $("#loginForm .contact-left .email .no-empty").css("display","inline-block");
    }
    else
    {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regex.test(email))
        {
             $("#loginForm .contact-left .email .no-empty").html("Vui lĂ²ng nháº­p Ä‘Ăºng email!");
            $("#loginForm .contact-left .email .no-empty").css("display","inline-block");
        }
    }
    if(unit.length == null || unit.length == 0 || unit.length == "")
        {
        $("#loginForm .contact-right .unit .no-empty").css("display","inline-block");
    }
    if(phone.length == null || phone.length == 0 || phone.length == "")
       {
       $("#loginForm .contact-right .number-phone .no-empty").css("display","inline-block");
    }
    
    else(phone.length != null || phone.length != 0 || phone.length != "")
    {
       
        var regex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
        if(!regex.test(phone))
        {
            $("#loginForm .contact-right .number-phone .no-empty").html("Vui lĂ²ng nháº­p Ä‘Ăºng sá»‘ Ä‘iá»‡n thoáº¡i!");
            $("#loginForm .contact-right .number-phone .no-empty").css("display","inline-block");
        }
    }
    if(content.length == null || content.length == 0 || content.length == "")
      {
       $("#loginForm .contact-content .no-empty").css("display","inline-block");
    }

}
function Onremovevalidate(thao){
    $(thao).parent().find(".no-empty").css("display","none");
    // ham` goi 1 lan.
    CheckValidate();
}
$(".longboxsmall").keyup(function(){
    var value = $(this).val();
    value = value.replace(/^(0*)/,"");
    $(this).val(value);
});
/*btn-search + menu mobile*/
if($(window).width() <= 1192){
    $('.searchbox-icon').click(function(){
        $this = $('.searchbox');
        if($this.hasClass('searchbox-open')){
            $('#main-menu').css('display','none');
              // $('#btn_menu').css('display','none');
              $('#btn_menu').css('display','block');
              $('#language').css('display','block');
        }
        else{
           $('#main-menu').css('display','none');
             $('#btn_menu').css('display','block');
             $('#language').css('display','block');
        }
    });
}
$(window).resize(function() {
    if($(window).width() <=1192){
        $('#main-menu').css('display','none');
        $('#btn_menu').css('display','block');
        $('#language').css('display','block');
    }
    else{
        $('#main-menu').css('display','block');
        $('#btn_menu').css('display','none');
        $('#language').css('display','block');
    }
    $('.searchbox-icon').click(function(){
        $this = $('.searchbox');
        if($(window).width() >=1193){
            if($this.hasClass('searchbox-open')){
                $('#main-menu').css('display','none');
                $('#btn_menu').css('display','none');
                $('#language').css('display','block');
            }
            else{
                $('#main-menu').css('display','block');
                // $('#btn_menu').css('display','none');
                $('#btn_menu').css('display','none');
                $('#language').css('display','block');
            }
        }
        else{
            $('#main-menu').css( 'display: none');
            $('#btn_menu').css('display','block');
            $('#language').css('display','block');
        }
    });
   
    if($(window).width() <= 1192){
        $('.searchbox-icon').click(function(){
            $this = $('.searchbox');
            if($this.hasClass('searchbox-open')){
                $('#main-menu').css('display','none');
                $('#btn_menu').css('display','block');
                $('#language').css('display','block');

            }
            else{
                $('#main-menu').css('display','none');
                $('#btn_menu').css('display','block');
                $('#language').css('display','block');
            }
        });
    }  
    

        
});