// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// nav menu
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document
        .querySelector(".custom_menu-btn")
        .classList.toggle("menu_btn-style");
}

$(document).ready(function() {
    $(window).on('scroll', function() {
        $('.about_section .detail-box').each(function() {
            var elementPosition = $(this).offset().top;
            var windowHeight = $(window).scrollTop() + $(window).height();

            // Jika elemen sudah masuk viewport
            if (windowHeight > elementPosition + 100) {  // 100px adalah jarak tambahan sebelum elemen terlihat
                $(this).addClass('visible');
            }
        });
    });
});

