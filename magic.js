window.onload = function () {

    $("#body1").empty();
    $("#body2").css('display', 'none');
    $("#stories").css('display', 'none');
    $("#input1").css('display', 'none');
    $("#yourname").css('display', 'none');
    $("#submit").css('display', 'none');
    $("#buttons").css('display', 'none');
    $("#introduction").css('display', 'none');
    $("#invite").toggleClass('fade-in');
    $("#invite").append('Please Come In');



    $(document).on('click', '#invite', function () {
        $("#title").empty();
        $("#invite").css('display', 'none');
        $("#introduction").css('display', 'inline');
        $("#introduction").toggleClass('fade-in');
        $("#firstname").css('display', 'inline');
        $("#lastname").css('display', 'inline');
        $("#submit").css('display', 'inline');


    });

    $(document).on('click', '#submit', function () {
        event.preventDefault();

        let name = $('#firstname').val()
        let last = $('#lastname').val()
        let genderinput = $('#salute , option value').val()
        console.log(genderinput)

        if (genderinput === "Mr.") {
            var gender = "he";
            var gender2 = "boy"
            var gender3 = "his"
            var gender4 = "him"
            var gender5 = "son"


        } else {
            (genderinput === "Ms.")
            var gender = "she";
            var gender2 = "girl"
            var gender3 = "her"
            var gender4 = "her"
            var gender5 = "daughter"
        }


        $("#body1").empty();
        $("#title").css('display', 'none');
        $("#introduction").css('display', 'none');
        $("#body1").empty();
        $("#body1").toggleClass('fade-in');
        $("#body1").append(`<div>It's so very nice to meet you, ${genderinput} ${last}</div>`);


        var time = setTimeout(alertFunc, 2000);

        function alertFunc() {

            $("#body1").empty();
            $("#body1").css('display', 'inline');
            $("#body1").toggleClass('fade-in');
            $("#body1").append(`<div>Do you like scary stories?</div>`);

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
            $("#button1").css('display', 'none');
            $("#button2").css('display', 'none');
            $("#body2").css('display', 'inline');
            $("#body2").toggleClass('fade-in');
            $("#body2").append(`<p>I knew a ${gender2} who liked scary stories, too. These were 3 of ${gender3} favorites:<p>`);
            $("#stories").css('display', 'inline');


        });

        $(document).on('click', '#button2', function () {

            $("#button1").css('display', 'none')
            $("#button2").css('display', 'none')
            $("#body1").empty();
            $("#body1").css('display', 'inline')
            $("#body1").toggleClass('fade-in');
            $("#body1").append(`<div> That's too bad, ${name}</div>`);

            console.log("toobad");

            var no1 = setTimeout(sad, 2000);

            function sad() {
                $("#body1").empty();
                $("#body1").append(`<div>Please try to come back when you do.</div>`);

            }

            var no2 = setTimeout(restart, 4000);

            function restart() {
                location.reload(true);

            }


        });

        $(document).on('click', '#story1', function () {
            $("#body2").empty();
            $("#stories").empty();
            $("#stories").css('display', 'block');
            $("#stories").toggleClass('fade-in');
            $("#stories").append(`<div><h1>The girl in the closet.</h1></div> <br>
            <div><p>The ${last}s were moving into their new house, a new town, a fresh start for them and their ${gender5} ${name}. They didn't want to move, but after a series of incidents at ${name}'s school they had no other choice. There was that incident when ${name}'s teacher broke her arm falling down a set of stairs. ${name}'s teacher claimed ${gender} had done it, but how can a small 60lbs ${gender2} push a grown woman down a step of stairs? ${name} said ${gender} was just standing there when she fell. There was another time when  ${name}'s classmate who tripped and fell on a fallen tree limb that nearly impalled the poor girl. A pertruding broken branch only went in a few inches into her shoulders, but when she rolled over, blood sprayed out all over the nearby children. They ran screaming, pushing and tripping like a bad zombie movie. ${name} just stood there, and some how avoided the blood splatter. The parents blamed ${name} and threaten to sue, but nobody was able to prove it. The rumors afterwards didn't go away. It was as permanent as the blood that had stained the play ground that day.</P><P>Mrs.${last} turned down the long driveway to their new home. The uneven pepple jostled Mrs. ${last} from her daze. It's been a 10 hour drive and Mr. ${last} and their ${gender5} had been sleeping most of the way. She didn't trust Mr. ${last} to drive; no Mrs. ${last} had to remain in control.</p> <p>The new house was a referral from the principal of ${name}'s old school. Lot's a room, quiet and secluded, great place to raise a child such as ${name} the principal had said. Great place to get them away from them, Mrs. ${last} said to herself. However, the price and location was too good to pass up. The only unsettling thing was that a previous family had lived there for only a few months before it went back onto the market. The principal had mentioned that the previous family had a troubled daughter, but said they were doing great now.</p><p>As the car reached a bend on the long driveway. A deer leaped before their car, causing Mrs.${last} to slam to a screeching a hault. Moving boxes and small knick knacks flung forward in the cab of their SUV waking both Mr. ${last} and ${name}. Are we there yet asked ${name}. Mr. ${last} points at the two story, grey bricked house with overgrown vines covering the side, that was hangin at the end of the bend. Here at last.</p><p>The ${last} settled into their new house. ${name} choose the room on the second floor at the end of the hallway, two rooms away from ${gender3} parents room.</p><p>As days, then weeks, then months went by without any incident, Mrs. ${last} began to worry less. ${name} seemed to be adjusting to ${gender3} new environment. ${name} enjoyed playing out in the woods and seemed to be less depressed then ${gender} had been before. ${name}'s doctor even lower the dosage on ${gender3} antidepressants. ${name} had almost no incident at ${gender3} new school. ${name}'s teacher had said ${gender} mostly played on ${gender3} own and sometimes talked to ${gender4}self, but that was normal for a ${gender2} ${gender3} age.</p><p>It was all going so well until it abruptly ended one night.</p><p>Mrs. ${last} woke up in the middle of the night to get a glass of water.As Mrs. ${last} staggered out of the bedroom door, a sharp pain shot up her leg, followed by a crunch and a warm sticky feeling on the bottom of her feet. She cleared her eyes and looked down to find a small dead bloody thing. She screamed and leaned over to turn on the hallway light. The horrid thing before her was a small dead bird.</p><p> Mr. ${last} came out behind her and asked what had happened. Mr.${last} looked down and saw what Mrs. ${last} had been staring at. The other thing he saw was a set of small footsteps and fingerprints along the wall leading from and back to ${name}'s room. </p><p>Mrs. ${last} remembered ${name} playing with a box in the backyard the day before. This drove Mrs. ${last} to marched straight towards ${name}'s room and pushed the door wide open. Mrs. ${last} quickly notices the blood on ${name}'s bed. ${name},startled by the bang of the door,slowly raises from ${gender3} sleep. What's happened? ${gender} asked. Exasperated and tired, Mrs. ${last} asked, "Why would you do this?" "Do what?" ${name} responded. Just look, Mrs. ${last} pointed. ${name} looked and saw the bloody tracks coming out from ${gender3} bed and from the closet and out ${gender3} bedroom door. It was the girl in the closet ${name} tried to explained. "${name}!", Mrs.${last} cut ${gender4} off. I don't want to hear it. Just go outside and clean this up and we'll discuss it in the morning. "But, but-t,but-t" ${name} blurted out, but Mrs. ${last} just marched out.</p><p>${name} went out and started to wipe the mess. ${gender} wasn't done when ${gender3} went back to their bedroom. After ${name} was done, ${gender}stomped back to ${gender3} room and propted a chair on the closet door and crawled back to bed.</p><p> A few hours passed and ${name} woke to noises down stairs. ${gender} peered over to see the chair that kept the closet door closed, was now laying on its side and the door wide opened. ${gender} then heard footsteps running up the stairs, and ${gender3} parents waking up from the disturbance. ${gender} crept out ${gender3} bed and cracked open ${gender3} bedroom door. ${gender} can see ${gender3} parents walking slowly out of their bedroom door and down the stairs. Mr. ${last} had a putter and Mrs. ${last} had a blowdryer. Ten minutes later, ${name} heard ${gender3} name, the loudest ${gender} had ever had heard. ${gender3} went rushing down the stairs, screaming it wasn't me, it wasn't me , it was the girl in closet. And when ${gender} reached ${gender3} parents in the kitchen, they were surrounded by broken dishes, and every single cupboard door and drawer were opened and it's contents stretched across the floor.${name} could only whisper, it was the girl in the closet.</p><p> ${name} spent the rest of the night cleaning up the kitchen and meandered back to ${gender3} room. This time ${gender} put the chair back on the door and every heavy object ${gender} could fine.</p><p>Some time passed, and ${name} woke up cold and shivering. ${name} blanket was completely stripped from ${gender3} bed. ${name} looks over and sees a corner of ${gender3} covers peeking out of the closet door. ${gender} slowly gets out of bed and walks over and stretch out ${gender3} hands, towards the closet door. ${gender} nearly gets to ${gender3} cover when a hand reaches out of the closet and yanks ${name} in and slams the closet door closed.<p></p>Next morning, Mr. and Mrs. ${last} goes down the stairs and begins their morning routine. Mrs. ${last} opens the refrigerator and finds an empty carton of milk. Mrs. ${last} voice rises, "Who drinks all the milk and puts it back in the refrigerator? The girl at the kitchen table says, it was the boy in the closet. Mrs. ${last} turns around and looks at the girl sitting there. Hair perfectly straightend, sitting thier quietly and reading a book.  "Don't give me that excuse young lady." Mrs. ${last} says with a smile. She smiles back. "May I have please have some pancakes?" the girl politely asks. "Of course, dear." Mrs. ${last} says.<br>


            The End.<p></div>`)

        });


    });


}