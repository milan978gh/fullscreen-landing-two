// animate smooth scroll

$('#take-peak').on('click', function(){
    const section = $('#section').position().top;

    $('body, html').animate({
        scrollTop: section
    }, 600);
});