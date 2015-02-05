$(document).ready(function(){

    $('input[type="checkbox"]').on('change', function(e){
        $(this).next('.checkbox_btn').toggleClass('checkbox_selected');
    });

    $('input[type="radio"]').on('change', function(e){
        $(this).closest('.option').siblings().find('.radio_btn').removeClass('radio_selected');

        $(this).next('.radio_btn').addClass('radio_selected');
    });

    $(".flat-input-group > input").focus(function(e){
        $(this).parent().addClass('input-group-focus');
    }).blur(function(e){
            $(this).parent().removeClass('input-group-focus');
        });
});