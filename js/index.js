$(document).ready(function () {
    var dropDownRef = $(".dropdown-ref");
    var dropLinks = dropDownRef.children("a");
    var dropMenus = dropDownRef.children(".dropdown-menu");

    // Dropdown trigger
    dropLinks.click(function (event) {
        event.preventDefault();
        var actualMenu = $(this).next(".dropdown-menu");

        dropMenus.not(actualMenu).hide();

        actualMenu.toggle();
    });

    // Close dropdown on external click
    dropDownRef.click(function (e) {
        e.stopPropagation();
    });

    $(".wrapper").click(function (e) {
        if (dropLinks !== e.target && !dropLinks.has(e.target).length) {
            dropMenus.hide();
        }
    });

    // end Doc ready
});
