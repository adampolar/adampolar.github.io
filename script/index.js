$(document).ready(function () {
    $(".column").mouseenter(function () {
        var currentSelection = $(".column.selected");
        currentSelection.removeClass("selected");
        $(this).addClass("selected");
        currentSelection.animate({
            width: '25%'
        }, {
            duration: 200,
            queue: false
        });
        $(this).animate({
            width: '49%'
        }, {
            duration: 200,
            queue: false
        });
    });
});