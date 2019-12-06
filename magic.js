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
    $("#counter").css('display', 'none');


    $(document).on('click', '#invite', function () {
        $("#title").empty();
        $("#invite").css('display', 'none');
        $("#introduction").css('display', 'inline');
        $("#introduction").toggleClass("fade-in");
        $("#firstname").css('display', 'inline');
        $("#lastname").css('display', 'inline');
        $("#submit").css('display', 'inline');
        $("#counter").css('display', 'none');



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
        $("#body1").toggleClass("fade-in");
        $("#counter").css('display', 'none');
        $("#body1").append(`<div>It's so very nice to meet you, ${genderinput} ${last}</div>`);


        var time = setTimeout(alertFunc, 2000);

        function alertFunc() {

            $("#body1").empty();
            $("#body1").css('display', 'inline');
            $("#body1").toggleClass("fade-in");
            $("#body1").append(`<div>Do you like scary stories?</div>`);

        }

        var time2 = setTimeout(buttons, 4000);

        function buttons() {

            $("#body1").css('display', 'none');
            $("#buttons").css('display', 'inline');
            $("#button1").css('display', 'inline')
            $("#button1").toggleClass("fade-in");
            $("#button1").append(`<span>Yes</span><br>`);
            $("#button2").css('display', 'inline');
            $("#button2").toggleClass("fade-in");
            $("#button2").append(`<span>No</span>`);


        }

        $(document).on('click', '#button1', function () {
            $("#button1").css('display', 'none');
            $("#button2").css('display', 'none');
            $("#button3").css('display', 'none');
            $("#body2").css('display', 'inline');
            $("#body2").toggleClass("fade-in");
            $("#body2").append(`<p>I knew a ${gender2} who liked scary stories, too. <br> These were 3 of ${gender3} favorites:<p>`);
            $("#stories").css('display', 'block');

            var time2 = setTimeout(addcounter, 1000);

            function addcounter() {
                $("#counter").css('display', 'inline');
                $("#counter").toggleClass("fade-in");
                $("#counter").append(timeConverter(time));
                clock()

            }


        });

        $(document).on('click', '#button2', function () {

            $("#button1").css('display', 'none')
            $("#button2").css('display', 'none')
            $("#button3").css('display', 'none');
            $("#body1").empty();
            $("#body1").css('display', 'inline')
            $("#body1").toggleClass("fade-in");
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

        // STORY 1// The girl in the closet.

        $(document).on('click', '#story1', function () {
            $("#story1").css('display', 'none');
            $("#story2").css('display', 'none');
            $("#story3").css('display', 'none');
            $("#body2").css('display', 'none');
            $("#body3").empty()
            $("#body3").css('display', 'inline');
            $("#body3").toggleClass("fade-in");
            $("#body3").append(`<div><h1>The girl in the closet.</h1></div> <br>
           <div><p>The ${last}'s were moving into their new house, a new town, a fresh start for them and their ${gender5} ${name}. They didn't want to move, but after a series of incidents at ${name}'s school they had no other choice. There was that incident when ${name}'s teacher broke her arm falling down a set of stairs. ${name}'s teacher claimed ${gender} had done it, but how can a small 60 lbs ${gender2} push a grown woman down a step of stairs? ${name} said ${gender} was just standing there when she fell. There was another time when  ${name}'s classmate who tripped and fell on a fallen tree limb that nearly impaling the poor girl. A protruding broken branch only went in a few inches into her shoulders, but when she rolled over, blood sprayed out all over the nearby children. They ran screaming, pushing and tripping like a bad zombie movie. ${name} just stood there, and some how avoided the blood splatter. The parents blamed ${name} and threaten to sue, but nobody was able to prove it. The rumors afterwards didn't go away. It was as permanent as the blood that had stained the play ground that day.</P><P>Mrs.${last} turned down the long driveway to their new home. The uneven pebbles jostled Mrs. ${last} from her daze. It's been a 10 hour drive and Mr. ${last} and their ${gender5} had been sleeping most of the way. She didn't trust Mr. ${last} to drive; no Mrs. ${last} had to remain in control.</p> 

           <p>The new house was a referral from the principal of ${name}'s old school. Lot's a room, quiet and secluded, great place to raise a child such as ${name} the principal had said. Great place to get them away from them, Mrs. ${last} said to herself. However, the price and location was too good to pass up. The only unsettling thing was that a previous family had lived there for only a few months before it went back onto the market. The principal had mentioned that the previous family had a troubled daughter, but said they were doing great now.</p><p>As the car reached a bend on the long driveway. A deer leaped before their car, causing Mrs.${last} to slam to a screeching a halt. Moving boxes and small knick knacks flung forward in the cab of their SUV waking both Mr. ${last} and ${name}. "Are we there yet?" asked ${name}. Mr. ${last} points at the two story, grey house with overgrown vines covering the side, that was hanging at the end of the bend. "Here at last", said Mr.${last}</p>

           <p>The ${last}'s settled into their new house. ${name} choose the room on the second floor at the end of the hallway, two rooms away from ${gender3} parents room.</p>

           <p>As days, then weeks, then months went by without any incident, Mrs. ${last} began to worry less. ${name} seemed to be adjusting to ${gender3} new environment. ${name} enjoyed playing out in the woods and seemed to be less depressed then ${gender} had been before. ${name}'s doctor even lower the dosage on ${gender3} antidepressants. ${name} had almost no incident at ${gender3} new school. ${name}'s teacher had said ${gender} mostly played on ${gender3} own and sometimes talked to ${gender4}self, but that was normal for a ${gender2} ${gender3} age.</p>

           <p>It was all going so well until it abruptly ended one night.</p>

           <p>Mrs. ${last} woke up in the middle of the night to get a glassof water.As Mrs. ${last} staggered out of the bedroom door, a sharp pain shot up her leg, followed by a crunch and a warm sticky feeling on the bottom of her feet. She cleared her eyes and looked down to find a small dead bloody thing. She screamed and leaned over to turn on the hallway light. The horrid thing before her was a small dead bird.</p>

           <p> Mr. ${last} came out behind her and asked what had happened. Mr. ${last} looked down and saw what Mrs. ${last} had been staring at. He also saw a set of small footsteps and fingerprints along the wall leading from and back to ${name}'s room. </p>

           <p>Mrs. ${last} remembered ${name} playing with a box in the backyard the day before. This drove Mrs. ${last} to marched straight towards ${name}'s room and pushed the door wide open. Mrs. ${last} quickly notices the blood on ${name}'s bed. ${name}, startled by the bang of the door, slowly raises from ${gender3} sleep. What's happened? ${gender} asked. Exasperated and tired, Mrs. ${last} asked, "Why would you do this?" "Do what?" ${name} responded. Just look, Mrs. ${last} pointed. ${name} looked and saw the bloody tracks coming out from ${gender3} bed and from the closet and out ${gender3} bedroom door. It was the girl in the closet ${name} tried to explained. "${name}!", Mrs. ${last} cut ${gender4} off. I don't want to hear it. Just go outside and clean this up and we'll discuss it in the morning. "But, but-t,but-t" ${name} blurted out, but Mrs. ${last} just marched out.</p>

           <p>${name} went out and started to wipe the mess. They were used to this kinda of behavior from ${name}, almost expecting it. ${gender} wasn't even done when ${gender3} parents went back to their bedroom.  After ${name} was done, ${gender} stomped back to ${gender3} room and propped a chair on the closet door and crawled back to bed.</p>

           <p>A few hours passed and ${name} awoke from noises downstairs. ${gender} peered over to see the chair that kept the closet door closed, was now laying on its side and the door wide opened. ${gender} then heard footsteps running up the stairs, and ${gender3} parents waking up from the disturbance. ${gender} crept out ${gender3} bed and cracked open ${gender3} bedroom door. ${gender} can see ${gender3} parents walking slowly out of their bedroom and down the stairs. Mr. ${last} had a putter and Mrs. ${last} had a blowdryer. Ten minutes later, ${name} heard ${gender3} name, the loudest ${gender} had ever had heard. ${gender3} went rushing down the stairs, screaming it wasn't me, it wasn't me , it was the girl in closet. And when ${gender} reached ${gender3} parents in the kitchen, ${name} saw they were surrounded by broken dishes, every cupboard open, drawers emptied and contents spread acrossed the floor. Explaining was futile. ${name} could only whisper, it was the girl in the closet.</p>

           <p>${name} spent the rest of the night cleaning up the kitchen and meandered back to ${gender3} room. This time ${gender} put the chair back on the door and every heavy object ${gender} could find.</p>

           <p>Some time passed, and ${name} woke up cold and shivering. ${name}'s blanket was completely stripped from ${gender3} bed. ${name} looks over and sees a corner of ${gender3} covers peeking out from the closet door. ${gender} get's up slowly and crawls over to the closet door. ${gender}stretches out ${gender3} and grabs the blanket. ${name} tugs at it, but the blanket yanks back causing ${name} to fly forward and into the closet. The closet door slams closed.<p>

           <p>Next morning, Mr. and Mrs. ${last} goes downstairs and begins their morning routine. Mrs. ${last} opens the refrigerator and finds an empty carton of milk. Mrs. ${last} voice rises, "Who drank all the milk and putted it back in the refrigerator? The girl now setting at the kitchen table says, "It was the ${gender2} in the closet". Mrs. ${last} turns around and stares at the unfamiliar girl for a few seconds, then realizes and says with a smile "Don't give me that excuse young lady.". The girl smiles back obediently. "May I please have some pancakes?" the girl politely asks and Mrs. ${last} says "Of course, dear. Did you sleep well?"<br></p>


            <div>The End.</div>

            <button id="startover" class="btn btn-dark">Start Over</button>`)


        });

        // STORY 2// TIMES UP!

        $(document).on('click', '#story2', function () {
            $("#story1").css('display', 'none');
            $("#story2").css('display', 'none');
            $("#story3").css('display', 'none');
            $("#body2").css('display', 'none');
            $("#body3").empty()
            $("#body3").css('display', 'inline');
            $("#body3").toggleClass("fade-in");
            $("#body3").append(`<div><h1>Times Up!</h1></div> 
           <p>You have just woken up by the blinding white light above you. You look to your left and see what appears to be something shiny, like the silverware set from Christmas dinner. Your head is throbbing. </p>
           <p>You drop back down.</p>
           <p> The last thing you remember was being in the UC Bootcamp class and then leaving, then walking to your car and then it all went dark.</p>
           <p> You rub your eyes and try to sit up. And when you finally do, you realize you're on some sort of table - a cold metallic table, the kind used for operations or seen in morgues.</P>
           <p>This can't be good.</p> 
           <p>You try to get off the table, but instead fall onto your knees. The pain is excruciating, you try to scream, but you vomit violently. Your body start to shake and you tuck yourself into a tight ball. Once the episode subsides you pull yourself up by the table.</p><p>Across from the table next to the Christmas utensils, you see a medicine bottle. You reach for it, hoping it's a remedy, and the label reads:</p>

          <div style="font-family: 'IM Fell English SC' , serif ; background-color:wheat ; width:50vw; height:auto; color:black; padding:5%;"><h5>Tetraethylammonium[31]</h5><p>Poison: if vomiting, muscle weakness followed by convulsions and cold sweat, seek immediate medical attention or symptoms will increase and may lead to death.
           </div>
           <br>
           <p>You now notice in the lower right corner of your vision a small timer. When did that appear? It looks like the timer in that game you played. Why is it counting down? What is it counting down to?</p>
           <p> The voice in your head, the one that keeps you away from stepping too close to the edge, gets louder and louder and telling you to get out.</p>
           <p>You pull yourself together, gather your strength and survey the room. </p>
           <p>The room is about 20' by 20', lit by the one light above. You can vaguely see a door on the far wall. The floor is tiled and there is what looks like a semi-large drainage gate under the table. </p>
           <p> The voice tells you:</p> 
           <button id="getout3" class="btn btn-dark">Make for the door.</button>  <button id="getout4" class="btn btn-dark">Drainage Leads Out.</button>`)

        });


        // GET OUT 3//The Door

        $(document).on('click', '#getout3', function () {
            console.log("getting the fuck out")
            $("#story1").css('display', 'none');
            $("#story2").css('display', 'none');
            $("#story3").css('display', 'none');
            $("#body2").css('display', 'none');
            $("#body3").empty()
            $("#body3").css('display', 'inline');
            $("#body3").toggleClass("fade-in");
            $("#body3").append(`<div><h1>The Door.</h1></div>

           <p>You feel woozy and it takes you 3 minutes getting to the doors.</p>
           <p>The door appears to be made of metal. You place an ear trying to see if you can hear anything on the other side. You hear nothing. </p>
           <p>You turn the handle and relieved that it's not locked. You carefully open the door and step out. There's a set of metal stairs leading up and a set leading down.</p> 
           <p>You decide to take the stairs going:</p>
           <button id="getout5" class="btn btn-dark">Up</button> <button id="getout6" class="btn btn-dark">Down</button>`)

            subtractTime(180)
        });

        // GET OUT 4// Crap Hole. 

        $(document).on('click', '#getout4', function () {
            console.log("getting the fuck out")
            $("#story1").css('display', 'none');
            $("#story2").css('display', 'none');
            $("#story3").css('display', 'none');
            $("#body2").css('display', 'none');
            $("#body3").empty()
            $("#body3").css('display', 'inline');
            $("#body3").toggleClass("fade-in");
            $("#body3").append(`<div><h1>Crap Hole</h1></div>
           <p>You crawl under the table and try to pull open the gate</p>

           <p>The gate is locked. You see there's a pad lock holding the gate in place. You pull yourself up and look at the tray of surgical tools and grab the surgical tweezers.</p>

           <p>You vomit down the drain. Wipe your mouth and jam the tweezers into the lock.</p>
           <p>The rusted lock pops open with surprising relative ease.</p>
           <p>You lift the gate open. And you realize the lingering bad odor that had filled room came from below.</p>
           <p>There's enough room for a large body to fit.</p> 
           <p>You look down and see nothing but darkness.</p> 
           <br>
           <p>The voice in your head says:</p> 
            <button id="stay3" class="btn btn-dark">Jump Already.</button>  <button id="getout3" class="btn btn-dark">Make for the doors.</button> `)

            subtractTime(600)


        });


        // GET OUT 5//Stairs Go Up.

        $(document).on('click', '#getout5', function () {
            console.log("getting the fuck out")
            $("#story1").css('display', 'none');
            $("#story2").css('display', 'none');
            $("#story3").css('display', 'none');
            $("#body2").css('display', 'none');
            $("#body3").empty()
            $("#body3").css('display', 'inline');
            $("#body3").toggleClass("fade-in");
            $("#body3").append(`<div><h1>Stairs Go Up.</h1></div>

           <p>You stagger up the steps and reach the top platform and there's a set of double push doors./p> 
           <p>You try to push open the door on the right. Locked.You try the door on the left. Click. You're overwhelmed with relief.</p> 
           <p>You open a small crack to look outside. You can see elevator doors on the other side and a long hallway.</p> 
           <p>Seemingly safe you slowly you step out side and see that the hallway stretches to right and to the left.</p> 

           <p> Which way now?</p> 
           <button id="getout7" class="btn btn-dark">Right?</button>  <button id="getout8" class="btn btn-dark">Left?</button>  <button id="getout9" class="btn btn-dark">Back down?</button>`)

            subtractTime(300)
        });

        // GET OUT 6//Stairs Go Down.

        $(document).on('click', '#getout6', function () {
            console.log("getting the fuck out")
            $("#story1").css('display', 'none');
            $("#story2").css('display', 'none');
            $("#story3").css('display', 'none');
            $("#body2").css('display', 'none');
            $("#body3").empty()
            $("#body3").css('display', 'inline');
            $("#body3").toggleClass("fade-in");
            $("#body3").append(`<div><h1>Stairs Go Down.</h1></div>

           <p>At the bottom of the stairs there's a metal door that is marked "PARKING"</p>
           <p>You slowly open the door and step outside</p>
           <p>It's dark with only a few dim lights along the wall. You never noticed how dark this parking lot was until now. You spot your car and see that the gate is down and the gate ticket machine glowing blue in the distance.</p>

           <p> What do you do?</p> 
           <button id="getout9" class="btn btn-dark"> Get to the car</button>  <button id="stay6" class="btn btn-dark">Get to the gate?</button>  <button id="getout4" class="btn btn-dark">Back Up?</button>`)

            subtractTime(300)
        });

        // GET OUT 7//Hallway Left.

        $(document).on('click', '#getout7', function () {
            console.log("getting the fuck out")
            $("#story1").css('display', 'none');
            $("#story2").css('display', 'none');
            $("#story3").css('display', 'none');
            $("#body2").css('display', 'none');
            $("#body3").empty()
            $("#body3").css('display', 'inline');
            $("#body3").toggleClass("fade-in");
            $("#body3").append(`<div><h1>Hallway Left</h1></div>
           <p>At the top of the stairs there's a metal door that is marked "PARKING"</p>
           <p>You slowly open the doo</p>
           <p> Which way now?</p>
           <button id="getout3" class="btn btn-dark">Right?</button>  <button id="stay3" class="btn btn-dark">Left?</button>  <button id="getout4" class="btn btn-dark">Back Up?</button>`)

            subtractTime(300)

        });

        // GET OUT 8//Hallway Right.
        $(document).on('click', '#getout8', function () {
            console.log("getting the fuck out")
            $("#story1").css('display', 'none');
            $("#story2").css('display', 'none');
            $("#story3").css('display', 'none');
            $("#body2").css('display', 'none');
            $("#body3").empty()
            $("#body3").css('display', 'inline');
            $("#body3").toggleClass("fade-in");
            $("#body3").append(`<div><h1>Hallway Right</h1></div>

               <p>At the bottom of the stairs there's a metal door that is marked "PARKING"</p>
               <p>You slowly open the doo</p>
               <p> Which way now?</p> 
               <button id="getout3" class="btn btn-dark">Right?</button>  <button id="stay3" class="btn btn-dark">Left?</button>  <button id="getout4" class="btn btn-dark">Back Up?</button>`)

            subtractTime(300)
        });

        // GET OUT 9//Get to the car.
        $(document).on('click', '#getout9', function () {
            console.log("getting the fuck out")
            $("#story1").css('display', 'none');
            $("#story2").css('display', 'none');
            $("#story3").css('display', 'none');
            $("#body2").css('display', 'none');
            $("#body3").empty()
            $("#body3").css('display', 'inline');
            $("#body3").toggleClass("fade-in");
            $("#body3").append(`<div><h1>The Getaway</h1></div> <p>You get to your car and quickly realize that you don’t have your keys. A small memory snaps into view. You took your keys out before you left the elevator. And you heard a distinct clink on the ground before you fell. </p>
            <p>You retrace your steps from the elevator.</p>
            <p>You get to where you remember passing out and bend down onto your knees. The ground is dark and the poison in your system distorts your vision. You scuddle along the floor feeling for your keys and after 5 minutes you at last found them.</p><p>You quickly get up and rush to your car. You jump into the driver seat and jam the key into the ignition and the car comes to life with no hesitation. You pull the car in reverse, and drive towards the gate. The ticket machine is waiting patiently to accept your ticket. You search your pockets and check the visor. No ticket. There’s a call button on the machine. You pause for the moment and remember all those horror movies. What if the murderer is the attendant? You stare out and see only a gate preventing you from escape. With determination, you put the car in reverse and put enough distance between you and the gate. You put the car into drive and scream, “F***K this night!” and slam on the gas launching your car towards the closed gate. As you approach the gate at a high velocity, you somehow trigger the safety and the gate begins to open. You realize too late as you fly through the bottom of gate while the gate is still rising. The bottom of the gate barrels towards you and slams through the windshield, severing your car’s top half and simultaneously decapitating you.</p>

<p>You never make it to your next class.</p><br>
<button id="startover" class="btn btn-dark">Start Over?</button>`)

            subtractTime(300)

        });


        // GET OUT 10//Get to the gate.

        $(document).on('click', '#getout10', function () {
            console.log("getting the fuck out")
            $("#story1").css('display', 'none');
            $("#story2").css('display', 'none');
            $("#story3").css('display', 'none');
            $("#body2").css('display', 'none');
            $("#body3").empty()
            $("#body3").css('display', 'inline');
            $("#body3").toggleClass("fade-in");
            $("#body3").append(`<div><h1>The Attendent.</h1></div> <p>You realize you don't have the keys to your car so you forego your car and run</p>

<p>You never make it to your next class.</p><br>
<button id="startover" class="btn btn-dark">Start Over?</button>`)
        });

        // Stay 3// Into the Hole. DEAD

        $(document).on('click', '#stay3', function () {
            $("#story1").css('display', 'none');
            $("#story2").css('display', 'none');
            $("#story3").css('display', 'none');
            $("#body2").css('display', 'none');
            $("#body3").empty()
            $("#body3").css('display', 'inline');
            $("#body3").toggleClass("fade-in");
            $("#body3").append(`<div><h1>Into the Hole</h1></div>
           <p>You hold your breath and swing your legs over the edge and slide into the darkness.</p>
           <p>You try to keep your hands on the wall to slow your decent,but there some sort of sticky slime that's tears at your skin.</p>
           <p>You let go and begin to slide rapidly.</p><p>You can feel cold air rushing past you faster and faster.</p>
           <p>You try to reach out to slow your descent.</p><p>The walls are wet and slippery.</p><p>The bottoms arrives with a splash and you slam into the bottom of the sewer floor. The speed of the fall and the weight of your body, snaps your knees and you buckle into the cold sewer water filling your mouth and lungs. You pass out.</p><p>When you wake up, you're laying on the side of the Sacramento river. There's a homeless camp and you scream for help. Unfortunately for you an escape cannibal had been hiding here and drags you into his camp.</p><p>You never make it to your next class.</p><br><button id="startover" class="btn btn-dark">Start Over?</button>`)

            subtractTime(300)

        });

        // START OVER/ 

        $(document).on('click', '#startover', function () {
            $("#button1").css('display', 'none');
            $("#button2").css('display', 'none');
            $("#button3").css('display', 'none');
            $("#body3").empty();
            $("#body2").toggleClass("fade-in");
            $("#body2").append(`<p>You've another chance<p>`);
            $("#story1").css('display', 'block');
            $("#story2").css('display', 'block');
            $("#story3").css('display', 'block');
            clock()


        });


        // STORY OVERVIEW/ Time to Waste?

        $(document).on('click', '#button3', function () {
            $("#button1").css('display', 'none');
            $("#button2").css('display', 'none');
            $("#button3").css('display', 'none');
            $("#body2").css('display', 'inline');
            $("#body3").empty();
            $("#body2").empty();
            $("#body2").toggleClass("fade-in");
            $("#body2").append(`<h1>Time to Waste?<h1>`);
            $("#body2").css('display', 'inline');
            $("#story1").css('display', 'block');
            $("#story2").css('display', 'block');
            $("#story3").css('display', 'block');

        });


        // TIME STUFF/ 

        var intervalId;
        var time = 60 * 30;

        //create a sentinal value
        var endGame = false;

        function clock() {
            intervalId = setInterval(tick, 1000);//starts the clock right here

        }

        function tick() {

            if (time <= 0) {
                clearInterval(intervalId)

                if (!endGame) {
                    end()

                }

            } else {
                time--;
                console.log(timeConverter(time));
                $('#counter').empty()
                $('#counter').append(timeConverter(time))

            }

        }

        function timeConverter(t) {
            var minutes = Math.floor(t / 60);
            var seconds = t - (minutes * 60);
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            if (minutes === 0) {
                minutes = "00";
            }
            else if (minutes < 10) {
                minutes = "0" + minutes;
            }
            return minutes + ":" + seconds;
        }

        var count = 0;

        function subtractTime(secondsToSubtract) {
            time -= secondsToSubtract;
            count++;

        }

        function end() {

            //set the sentinal value
            endGame = true;
            $("#background").toggleClass("flicker-2");
            $('#background').empty()
            $('#background').append('<img src="css/cooph_halloween_photos_4.jpg"  class="flex-container background"/>')

            var background3 = setTimeout(scary2, 200);

            function scary2() {
                $('#background').empty()
            }

        }

    });
}

