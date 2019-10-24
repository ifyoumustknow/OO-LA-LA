window.onload = function () {


    $("#input1").css('display', 'none');
    $("#yourname").css('display', 'none');
    $("#submit").css('display', 'none');
    $("#button1").toggleClass('fade-in');
    $("#button1").append('Please Come In');


    $(document).on('click', '#button1', function () {
        $("#button1").css('display', 'none');
        $("#body1").toggleClass('fade-in');
        $("#body1").append("May I have your name?");
        $("#yourname").css('display', 'inline');
        $("#submit").css('display', 'inline');


    });

    $(document).on('click', '#submit', function () {
        event.preventDefault();

        let textinput = $('#yourname').val()
        $("#body3").toggleClass('fade-in');
        $("#body3").append(`<div>It's so very nice to meet you, ${textinput}</div>`);

        $("#submit").css('display', 'none');
        $("#yourname").css('display', 'none');
        $("#body1").css('display', 'none');
        $("#title").css('display', 'none');


    });
    //function to choose three stories: The girl in the closet, The Dark (timed event), 

    //function to 









}