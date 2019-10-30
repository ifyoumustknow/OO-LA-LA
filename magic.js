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
            $("#body2").append(`<p>I knew a ${gender2} who liked scary stories, too. These were 3 of ${gender3} favorites:<p>`);
            $("#stories").css('display', 'block');

            var time2 = setTimeout(addcounter, 1000);

            function addcounter(){
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

        $(document).on('click', '#story1', function () {
            $("#story1").css('display', 'none');
            $("#story2").css('display', 'none');
            $("#story3").css('display', 'none');
            $("#body2").css('display', 'none');
            $("#body3").empty()
            $("#body3").css('display', 'inline');
            $("#body3").toggleClass("fade-in");
            $("#body3").append(`<div><h1>The girl in the closet.</h1></div> <br>
            <div><p>The ${last}'s were moving into their new house, a new town, a fresh start for them and their ${gender5} ${name}. They didn't want to move, but after a series of incidents at ${name}'s school they had no other choice. There was that incident when ${name}'s teacher broke her arm falling down a set of stairs. ${name}'s teacher claimed ${gender} had done it, but how can a small 60lbs ${gender2} push a grown woman down a step of stairs? ${name} said ${gender} was just standing there when she fell. There was another time when  ${name}'s classmate who tripped and fell on a fallen tree limb that nearly impalled the poor girl. A pertruding broken branch only went in a few inches into her shoulders, but when she rolled over, blood sprayed out all over the nearby children. They ran screaming, pushing and tripping like a bad zombie movie. ${name} just stood there, and some how avoided the blood splatter. The parents blamed ${name} and threaten to sue, but nobody was able to prove it. The rumors afterwards didn't go away. It was as permanent as the blood that had stained the play ground that day.</P><P>Mrs.${last} turned down the long driveway to their new home. The uneven pebbles jostled Mrs. ${last} from her daze. It's been a 10 hour drive and Mr. ${last} and their ${gender5} had been sleeping most of the way. She didn't trust Mr. ${last} to drive; no Mrs. ${last} had to remain in control.</p> 
            
            <p>The new house was a referral from the principal of ${name}'s old school. Lot's a room, quiet and secluded, great place to raise a child such as ${name} the principal had said. Great place to get them away from them, Mrs. ${last} said to herself. However, the price and location was too good to pass up. The only unsettling thing was that a previous family had lived there for only a few months before it went back onto the market. The principal had mentioned that the previous family had a troubled daughter, but said they were doing great now.</p><p>As the car reached a bend on the long driveway. A deer leaped before their car, causing Mrs.${last} to slam to a screeching a hault. Moving boxes and small knick knacks flung forward in the cab of their SUV waking both Mr. ${last} and ${name}. "Are we there yet?" asked ${name}. Mr. ${last} points at the two story, grey house with overgrown vines covering the side, that was hanging at the end of the bend. "Here at last", said Mr.${last}</p>
            
            <p>The ${last}'s settled into their new house. ${name} choose the room on the second floor at the end of the hallway, two rooms away from ${gender3} parents room.</p>
            
            <p>As days, then weeks, then months went by without any incident, Mrs. ${last} began to worry less. ${name} seemed to be adjusting to ${gender3} new environment. ${name} enjoyed playing out in the woods and seemed to be less depressed then ${gender} had been before. ${name}'s doctor even lower the dosage on ${gender3} antidepressants. ${name} had almost no incident at ${gender3} new school. ${name}'s teacher had said ${gender} mostly played on ${gender3} own and sometimes talked to ${gender4}self, but that was normal for a ${gender2} ${gender3} age.</p>
            
            <p>It was all going so well until it abruptly ended one night.</p>
            
            <p>Mrs. ${last} woke up in the middle of the night to get a glass of water.As Mrs. ${last} staggered out of the bedroom door, a sharp pain shot up her leg, followed by a crunch and a warm sticky feeling on the bottom of her feet. She cleared her eyes and looked down to find a small dead bloody thing. She screamed and leaned over to turn on the hallway light. The horrid thing before her was a small dead bird.</p>
            
            <p> Mr. ${last} came out behind her and asked what had happened. Mr. ${last} looked down and saw what Mrs. ${last} had been staring at. He also saw a set of small footsteps and fingerprints along the wall leading from and back to ${name}'s room. </p>
            
            <p>Mrs. ${last} remembered ${name} playing with a box in the backyard the day before. This drove Mrs. ${last} to marched straight towards ${name}'s room and pushed the door wide open. Mrs. ${last} quickly notices the blood on ${name}'s bed. ${name}, startled by the bang of the door,slowly raises from ${gender3} sleep. What's happened? ${gender} asked. Exasperated and tired, Mrs. ${last} asked, "Why would you do this?" "Do what?" ${name} responded. Just look, Mrs. ${last} pointed. ${name} looked and saw the bloody tracks coming out from ${gender3} bed and from the closet and out ${gender3} bedroom door. It was the girl in the closet ${name} tried to explained. "${name}!", Mrs. ${last} cut ${gender4} off. I don't want to hear it. Just go outside and clean this up and we'll discuss it in the morning. "But, but-t,but-t" ${name} blurted out, but Mrs. ${last} just marched out.</p>
            
            <p>${name} went out and started to wipe the mess. They were used to this kinda of behavior from ${name}, almost expectiing it. ${gender} wasn't even done when ${gender3} parents went back to their bedroom.  After ${name} was done, ${gender} stomped back to ${gender3} room and propted a chair on the closet door and crawled back to bed.</p>
            
            <p>A few hours passed and ${name} awoke from noises downstairs. ${gender} peered over to see the chair that kept the closet door closed, was now laying on its side and the door wide opened. ${gender} then heard footsteps running up the stairs, and ${gender3} parents waking up from the disturbance. ${gender} crept out ${gender3} bed and cracked open ${gender3} bedroom door. ${gender} can see ${gender3} parents walking slowly out of their bedroom and down the stairs. Mr. ${last} had a putter and Mrs. ${last} had a blowdryer. Ten minutes later, ${name} heard ${gender3} name, the loudest ${gender} had ever had heard. ${gender3} went rushing down the stairs, screaming it wasn't me, it wasn't me , it was the girl in closet. And when ${gender} reached ${gender3} parents in the kitchen, ${name} saw they were surrounded by broken dishes, every cupboard open, drawers emptied and contents spread acrossed the floor. Explaining was futile. ${name} could only whisper, it was the girl in the closet.</p>
            
            <p>${name} spent the rest of the night cleaning up the kitchen and meandered back to ${gender3} room. This time ${gender} put the chair back on the door and every heavy object ${gender} could find.</p>
            
            <p>Some time passed, and ${name} woke up cold and shivering. ${name}'s blanket was completely stripped from ${gender3} bed. ${name} looks over and sees a corner of ${gender3} covers peeking out from the closet door. ${gender} get's up slowly and crawls over to the closet door. ${gender}stretches out ${gender3} and grabs the blanket. ${name} tugs at it, but the blanket yanks back causing ${name} to fly forward and into the closet. The closet door slams closed.<p>
            
            </p>Next morning, Mr. and Mrs. ${last} goes downstairs and begins their morning routine. Mrs. ${last} opens the refrigerator and finds an empty carton of milk. Mrs. ${last} voice rises, "Who drank all the milk and putted it back in the refrigerator? The girl now setting at the kitchen table says, "It was the boy in the closet". Mrs. ${last} turns around and stares at the girl for a few seconds. "Don't give me that excuse young lady." Mrs. ${last} says with a smile. The girl smiles back obediently. "May I have please have some pancakes?" the girl politely asks and Mrs. ${last} says "Of course,dear. Did you sleep well?"<br>
            
            The End.<p></div>`)
            
            $("#button3").css('display', 'inline');      


        });

        
        $(document).on('click', '#story2', function () {
            $("#story1").css('display', 'none');
            $("#story2").css('display', 'none');
            $("#story3").css('display', 'none');
            $("#body2").css('display', 'none');
            $("#body3").empty()
            $("#body3").css('display', 'inline');
            $("#body3").toggleClass("fade-in");
            $("#body3").append(`<div><h1>Times Up!</h1></div> 
            <p>You just woken up with a blinding white light above you. You look to your left and see what appears to be something shiny, like the silverware set from Christmas dinner. Your head is throbbing. </p>
            
            <p>You drop back down.</p>
            
            <p> The last thing you remember was being in the UC Bootcamp class and then leaving, then walking to your car and then it all went dark.</p>
            
            <p> You rub your eyes and try to sit up. And when you finally do, you realize you're on some sort of table - a cold metallic table, the kind used for operations or seen in morgues.</P>

            <p>Choose:</p>
            <button id="getout" class="btn btn-dark">This can't be good.</button>  or  <button id="stay" class="btn btn-dark">Probably a bad dream.</button>`)      
            


        });

        $(document).on('click', '#getout', function () {
            console.log("getting the fuck out")
            
            $("#story1").css('display', 'none');
            $("#story2").css('display', 'none');
            $("#story3").css('display', 'none');
            $("#body2").css('display', 'none');
            $("#body3").empty()
            $("#body3").css('display', 'inline');
            $("#body3").toggleClass("fade-in");
            $("#body3").append(`<p>You try to take a step, but fall to your knees instead. The pain is excruciating, you try to scream, but instead you begin to vomit violently. Your body begins to shake and you tuck yourself into a tight ball. Once the episode subsides you pull yourself up by the table.</p><p>Across from the table next to the Christmas utensils, you see a medicine bottle. You reach for it, hoping it's a remedy, and the label reads:</p>
            
           <div style="font-family: 'IM Fell English SC' , serif ; background-color:wheat ; width:50vw; height:auto; color:black; padding:5%;"><h5>Tetraethylammonium[31]</h5><p>Poison: if vomiting, muscle weakness followed by convulsions and cold sweat, seek medical attention within 10 minutes or symptoms will increase and may lead to death.
            </div>
          <br>
            <p>You now notice in the lower right corner of your vision a small timer. When did that appear? It looks like the timer in that game you played. Why is it counting down? What is it counting down to?</p>

            <p> The voice in your head, the one that keeps you away from stepping too close to the edge, gets louder and louder and tells you to:</p> 
            <br>
            <button id="getout2" class="btn btn-dark">Get Out.</button> or <button id="stay2" class="btn btn-dark">Wait it out.</button>`)      



        });

        $(document).on('click', '#getout2', function () {
            console.log("getting the fuck out")
            $("#story1").css('display', 'none');
            $("#story2").css('display', 'none');
            $("#story3").css('display', 'none');
            $("#body2").css('display', 'none');
            $("#body3").empty()
            $("#body3").css('display', 'inline');
            $("#body3").toggleClass("fade-in");
    
            $("#body3").append(`<p>You pull yourself together, gather your strength and survey the room. </p>
            
            <p>The room is about 20' by 20', lit by the one light above. You can vaguely see 2 doors on the far wall. There's also a large tub in the back of the room. The floor is tiled and there is what looks like a semi-large drainage gate under the table. </p>

            <p> The voice in your head tells you to:</p> 
            <br>
            <button id="getout3" class="btn btn-dark">Make for the doors.</button> or <button id="stay3" class="btn btn-dark">Look in the Tub.</button> or <button id="getout4" class="btn btn-dark">Make for the drainage.</button>`)      



        });


        $(document).on('click', '#getout3', function () {
            console.log("getting the fuck out")
            $("#story1").css('display', 'none');
            $("#story2").css('display', 'none');
            $("#story3").css('display', 'none');
            $("#body2").css('display', 'none');
            $("#body3").empty()
            $("#body3").css('display', 'inline');
            $("#body3").toggleClass("fade-in");
            $("#body3").append(`<p>The poison slows your movement getting to the doors. The counter substracted 3 minutes getting from the table to the door.</p>
            
            <p>Both doors are non-descript so you place an ear on each. You hear nothing. </p>
            <p> The voice in your head tells you to choose the door on the:</p> 
            <button id="getout6" class="btn btn-dark">Left</button> or <button id="stay4" class="btn btn-dark">Right</button>`)      

            subtractTime(180)
        });

        $(document).on('click', '#getout4', function () {
            console.log("getting the fuck out")
            $("#story1").css('display', 'none');
            $("#story2").css('display', 'none');
            $("#story3").css('display', 'none');
            $("#body2").css('display', 'none');
            $("#body3").empty()
            $("#body3").css('display', 'inline');
            $("#body3").toggleClass("fade-in");
            $("#body3").append(`<p>You crawl under the table and try to pull open the gate</p>
            
            <p>The gate is locked. You see there's a pad lock holding the gate in place. You pull yourself up and look at the tray of surgical tools and grab the surgical tweezers.</p>

            <p>You vommit down the drain. Wipe your mouth and jam the tweezers into the lock.</p>
            <p>The rusted lock pops open with surprising relative ease.</p>
            <p>You lift the gate open. And you realize the lingering bad ordor that had filled room came from below.</p>
            <p> You look down and see nothing but darkness.</p> 
            <br>
            <p> The voice in your head says:</p> 
            <a id="getout5" class="btn btn-dark">Turn Back.</a> or <a id="stay5" class="btn btn-dark">Jump Already</a>`)      


        });
        
        
        

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

  

        var intervalId;
        var time = 60 * 1

        function clock (){
            intervalId = setInterval(tick, 1000);//starts the clock right here
           
        }

        function tick(){

            if(time === 0){
               clearInterval(intervalId)
                $("#background").toggleClass("flicker-2");
                $('#background').empty()
                $('#background').append('<img src="css/cooph_halloween_photos_4.jpg"  class="flex-container background"/>')
               
                var background3 = setTimeout(scary2, 200);

                function scary2 (){
                $('#background').empty()
                $('#background').append('<img src="css/gesphaus.jpg"  class="flex-container background"/>')
               
            }
   
            }else{
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

        function subtractTime (secondsToSubtract){
            time -= secondsToSubtract;
            count++; 
            

        }


    });


}