$(document).ready(function()
{
    //abrir menú lateral movil 
    var expandedmenu = false;

    //para abrir el menú 
    $("#open-mlb-menu-movil").click(function(event) {
        event.stopPropagation();
        // Slide 
        if (!expandedmenu) {
            $(".mlb-menu-movil").animate({
                "left": 0
            }, "fast");
            $("#open-mlb-menu-movil").animate({
                "left": 280
            }, "fast");

            expandedmenu = true;
        }
        // Slide up menu if shown
        else {
            $(".mlb-menu-movil").animate({
                "left": -280
            }, "slow");
            $("#open-mlb-menu-movil").animate({
                "left": 0
            }, "slow");
            expandedmenu = false;
        }
    });
    // $(".mlb-menu-movil").click(function(event) {
    //     event.stopPropagation();
    // });
    // para cerrar el menu movil
    $(document).click(function() {
        if (expandedmenu) {
            $(".mlb-menu-movil").animate({
                "left": -280
            }, "fast");
            $("#open-mlb-menu-movil").animate({
                "left": 0
            }, "fast");
            expandedmenu = false;
        }
    });

    // $('.modal').on('show', function(e) {
    // var modal = $(this);
    // modal.css('margin-top', (modal.outerHeight() / 2) * -1)
    //      .css('margin-left', (modal.outerWidth() / 2) * -1);
    // return this;
    // });

});


