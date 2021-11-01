$(function () {
    // Cards Click JS Start
    $('.viewcard').on('click', function(){
        $('.views').addClass('block'),
        $('.subscribers').removeClass('block'),
        $('.comments').removeClass('block'),
        $('.earnings').removeClass('block')
    });

    $('.subscribercard').on('click', function(){
        $('.subscribers').addClass('block'),
        $('.views').removeClass('block'),
        $('.comments').removeClass('block'),
        $('.earnings').removeClass('block')
    });

    $('.commentcard').on('click', function(){
        $('.comments').addClass('block'),
        $('.views').removeClass('block'),
        $('.subscribers').removeClass('block'),
        $('.earnings').removeClass('block')
    });

    $('.earningcard').on('click', function(){
        $('.earnings').addClass('block'),
        $('.views').removeClass('block'),
        $('.comments').removeClass('block'),
        $('.subscribers').removeClass('block')
    });
    // //Cards Click JS End
});
