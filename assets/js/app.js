$(function () {
    // Cards Click JS Start
    $('.viewcard').on('click', function(){
        $('.viewBox').addClass('block'),
        $('.subBox').removeClass('block'),
        $('.earnBox').removeClass('block')
    });

    $('.subscribercard').on('click', function(){
        $('.subBox').addClass('block'),
        $('.viewBox').removeClass('block'),
        $('.earnBox').removeClass('block')
    });
    
    $('.earningcard').on('click', function(){
        $('.earnBox').addClass('block'),
        $('.subBox').removeClass('block'),
        $('.viewBox').removeClass('block')
    });
    // //Cards Click JS End

    // sidebar Click JS Start
    $('.channel').on('click', function(){
        $('.mychannel').removeClass('d-none'),
        $('.cards').addClass('d-none'),
        $('.messagebox').addClass('d-none'),
        $('.settingsbox').addClass('d-none')
    })
    // //sidebar Click JS End
});
