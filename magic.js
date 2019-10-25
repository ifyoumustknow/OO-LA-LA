window.onload = function () {

    $("#body1").empty();
    $("#stories").css('display', 'none');
    $("#input1").css('display', 'none');
    $("#yourname").css('display', 'none');
    $("#submit").css('display', 'none');
    $("#buttons").css('display', 'none');
    $("#introduction").css('display', 'none');
    $("#invite").toggleClass('fade-in');
    $("#invite").append('Please Come In');


    $(document).on('click', '#invite', function () {
        $("#invite").css('display', 'none');
        $("#introduction").css('display', 'inline');
        $("#title").empty();
        $("#title").append("May I have your first name?");
        $("#title").toggleClass('fade-in');
        $("#yourname").css('display', 'inline');
        $("#submit").css('display', 'inline');


    });

    $(document).on('click', '#submit', function () {
        event.preventDefault();

        let textinput = $('#yourname').val()
        let genderinput = $('#salute , option value').val()
        console.log(genderinput)

        if (genderinput === "Mr.") {
            var gender = "he";
            var gender2 = "boy"
            var gender3 = "his"
            var gender4 = "him"


        } else {
            (genderinput === "Ms.")
            var gender = "she";
            var gender2 = "girl"
            var gender3 = "her"
            var gender4 = "her"
        }


        $("#body1").empty();
        $("#title").css('display', 'none');
        $("#introduction").css('display', 'none');
        $("#body1").empty();
        $("#body1").toggleClass('fade-in');
        $("#body1").append(`<div>It's so very nice to meet you, ${genderinput} ${textinput}</div>`);

        $("#submit").css('display', 'none');
        $("#yourname").css('display', 'none');

        var time = setTimeout(alertFunc, 2000);

        function alertFunc() {

            $("#body1").empty();
            $("#body1").css('display', 'inline');
            $("#body1").toggleClass('fade-in');
            $("#body1").append(`<div>Do you like stories?</div>`);

        }

        var time2 = setTimeout(buttons, 4000);

        function buttons() {

            $("#body1").css('display', 'none');

            $("#buttons").css('display', 'inline');
            $("#button1").css('display', 'inline')
            $("#button1").toggleClass('fade-in');
            $("#button1").append(`<span>Yes</span><br>`);

            $("#button2").css('display', 'inline');
            $("#button2").toggleClass('fade-in');
            $("#button2").append(`<span>No</span>`);

            $("#button3").css('display', 'none')

        }

        $(document).on('click', '#button1', function () {
            $("#button2").css('display', 'none');
            $("#button3").css('display', 'none');
            $("#button1").css('display', 'none');
            $("#body2").css('display', 'inline');
            $("#body2").toggleClass('fade-in');
            $("#body2").append(`<div><h2>Oh so do I.</h2></div><div><h3>Here are 3 of my favorites<h3><div>`);
            $("#stories").css('display', 'inline');


        });

        $(document).on('click', '#story1', function () {
            $("#body2").empty();
            $("#stories").empty();
            $("#stories").css('display', 'block');
            $("#stories").toggleClass('fade-in');
            $("#stories").append(`<div><h1>The girl in the closet</h1></div> <br>
            <div>There once was a ${gender2} named ${textinput} and ${gender} lived at the edge of town with ${gender3} mother and father. ${textinput} was always a curious ${gender2} and this always got ${gender4} in trouble. 
            <div>`);


        });


        $(document).on('click', '#button2', function () {

            $("#button2").css('display', 'none')
            $("#button3").css('display', 'none')
            $("#body1").empty();
            $("#body1").css('display', 'inline')
            $("#body1").toggleClass('fade-in');
            $("#body1").append(`<div>That's too bad, ${textinput}</div>`);

            console.log("toobad");

            var no1 = setTimeout(sad, 2000);

            function sad() {
                $("#body1").empty();
                $("#body1").append(`<div>Please try to come back when you do, ${textinput}</div>`);

            }

            var no2 = setTimeout(restart, 4000);

            function restart() {
                location.reload(true);

            }



        });







    });







    //function to choose three stories: The girl in the closet, The Dark (timed event), 

    //function to 









}