$(function(){
    $( "#burger" ).click(function() {
        $( "#modal" ).addClass( "modal_visible" );
    });
    $( "#modal__close" ).click(function() {
        $( "#modal" ).removeClass( "modal_visible" );
    });
});
