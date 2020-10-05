$('.icon1').click(function() {
    $('#icon1').show();
    $(".icon1").hide();

});
$('#icon1').click(function() {
    $('.icon1').show();
    $("#icon1").hide();

});
$('.icon2').click(function() {
    $('#icon2').show();
    $(".icon2").hide();

});
$('#icon2').click(function() {
    $('.icon2').show();
    $("#icon2").hide();

});

$('.icon3').click(function() {
    $('#icon3').show();
    $(".icon3").hide();

});
$('#icon3').click(function() {
    $('.icon3').show();
    $("#icon3").hide();

});

$("form").submit(function(event) {
    if ($("input").val() === "") {
        alert('Enter valid data')
        return;
    }

    alert('Your message has been received, Thank you for reaching out to us!!!')
    event.preventDefault();
    this.reset();
});