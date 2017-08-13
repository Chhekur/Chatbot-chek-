
 



	var username = "";
	
	
	function send_message(message){
		
		
		
		var prevState = $("#container").html();
		
	
			  
			 if(prevState.length >4){
				prevState = prevState +"<br>";
			 }
			 
			
		$("#container").html(prevState +"<span class = 'current_message'>" +"<br>"+ "<span class='bot'></span><span class='bot1'>" + message + "</span>");
		
		$(".current_message").hide();
		$(".current_message").delay(1500).fadeIn();	
		$(".current_message").removeClass("current_message");
		 
		$('#container').animate({
		scrollTop: $('#container').get(0).scrollHeight}, 2000); 
		
		
		
		
	}
	var a1 =document.createElement('audio');
	a1.setAttribute('src','audio/1.mp3');
	
	function get_username(){
		send_message("Hello, How can I help you??");
		a1.play();
	}
	var a67 =document.createElement('audio');
		a67.setAttribute('src','audio/67.mp3');
	
	function ai(message){
		var a2 =document.createElement('audio');
		a2.setAttribute('src','audio/2.mp3');

		
		/*if (username.length<4){
			username = message;
			send_message("Nice to meet you " + username + ",<br>How can I help you?");
			a2.play();
		}*/
			
		/*else{
		send_message('<iframe width="200" height="200" src="http://www.google.com" + message></iframe>');
	  }*/
	  
	  var a3 =document.createElement('audio');
		a3.setAttribute('src','audio/3.mp3');
		if(message.indexOf("how are you")>=0){
		send_message("I feel ready to help<br> What can I do for you?");
		a3.play();
	  }
	  else{
	  	if(message.indexOf("time")>=0){
		  var date = new Date();
		  var h = date.getHours();
		  var m = date.getMinutes();
			send_message("Current time is: "+(h-12)+":"+m);
		
	  }
	  else{
	  	var a4 =document.createElement('audio');
		a4.setAttribute('src','audio/4.mp3');
		if((message.indexOf("hello")>=0)||(message.indexOf("Hello")>=0)||(message.indexOf("Hlw")>=0)||(message.indexOf("Hi")>=0)||(message.indexOf("hlw")>=0)||(message.indexOf("Hlo")>=0)||(message.indexOf("hlo")>=0)){
		send_message("Hello, How can I help you?");
		a4.play();
	  }
	  else{
	  	var a5 =document.createElement('audio');
		a5.setAttribute('src','audio/5.mp3');
		if(message.indexOf("creat")>=0){
		send_message("I am created by Mr. Harendra Chhekur.");
		a5.play();
	  }
	  else{
	  	var a6 =document.createElement('audio');
		a6.setAttribute('src','audio/6.mp3');
		if((message.indexOf("harendra chhekur")>=0)||(message.indexOf("Harendra Chhekur")>=0)||(message.indexOf("Harendra chhekur")>=0)){
		send_message('<img src="images/actors/100.jpg" height="70" width="70" align="right" /><h3>Harendra Chhekur</h3><h5>Founder of Chek</h5><p>Mr.Harendra Chhekur is Founder of Chek, He is a Programmer, Web and Developer also, He does his work alone.</p>');
		a6.play();
	  }
	  else{
	  	var a7 =document.createElement('audio');
		a7.setAttribute('src','audio/7.mp3');
		if(message.indexOf("your name")>=0){
		send_message("I have no name yet<br> You can tell me Chek.");
		a7.play();
	  }
	  else{
	  	 var a8 =document.createElement('audio');
		a8.setAttribute('src','audio/8.mp3');
	  if((message.indexOf("Who are you")>=0)||(message.indexOf("who are you")>=0)){
		send_message("I am your personal assistant <br> You can share anything with me.");
		a8.play();
	  }
	  else{
	  	var a9 =document.createElement('audio');
		a9.setAttribute('src','audio/9.mp3');
	  if((message.indexOf("Narendra Modi")>=0)||(message.indexOf("narendra modi")>=0)){
		send_message("Narendra Modi is Prime Minister of India.");
		a9.play();
	  }
	  else{
	  	var a10 =document.createElement('audio');
		a10.setAttribute('src','audio/10.mp3');
	  if((message.indexOf("Donald Trump")>=0)||(message.indexOf("donald trump")>=0)){
		send_message("Donald Trump is President of America.");
		a10.play();
	  }
	  else{
	  	 var a11 =document.createElement('audio');
	a11.setAttribute('src','audio/11.mp3');
	  if((message.indexOf("marry me")>=0)||(message.indexOf("Marry Me")>=0)){
		send_message("Sorry. I'm too busy for romance.");
	a11.play();
	  }
	  else{
	  	 var a12 =document.createElement('audio');
	a12.setAttribute('src','audio/12.mp3');
	  if((message.indexOf("Best Smartphone")>=0)||(message.indexOf("best smartphone")>=0)){
		send_message("Seems like it changes all the time.");
	a12.play();
	  }
	  else{
	  	 var a13 =document.createElement('audio');
	a13.setAttribute('src','audio/13.mp3');
	  if((message.indexOf("siri")>=0)||(message.indexOf("siri")>=0)){
		send_message("She seems clever.");
		a13.play();
	  }
	  else{
	  	var a14 =document.createElement('audio');
	a14.setAttribute('src','audio/14.mp3');
	  if((message.indexOf("will you go out with me")>=0)||(message.indexOf("Will you go out with me")>=0)){
		send_message("I'll go anywhere you take me.");
		a14.play();
	  }
	  else{
	  	var a15 =document.createElement('audio');
	a15.setAttribute('src','audio/15.mp3');
	  if((message.indexOf("looking good")>=0)||(message.indexOf("looking good")>=0)){
		send_message("Very Cool");
		a15.play();
	  }
	  else{
	  	var a16 =document.createElement('audio');
	a16.setAttribute('src','audio/16.mp3');
	  if((message.indexOf("clean my room")>=0)||(message.indexOf("clean my room")>=0)){
		send_message("Let me try<br>Did anything happen?<br>I guess I can't");
		a16.play();
	  }
	  else{
	  	 var a17 =document.createElement('audio');
	a17.setAttribute('src','audio/17.mp3');
	  if((message.indexOf("your father")>=0)||(message.indexOf("your father")>=0)){
		send_message("I think no one my Father,<br>I am oneself");
		a17.play();
	  }
	  else{
	  	var a18 =document.createElement('audio');
	a18.setAttribute('src','audio/18.mp3');
	  if((message.indexOf("What are you wearing")>=0)||(message.indexOf("what are you wearing")>=0)){
		send_message('I keep it simple<br><br><img src="images/shirt.png" width="50px" height="50px">');
		a18.play();
	  }
	  else{
	  	var a19 =document.createElement('audio');
	a19.setAttribute('src','audio/19.mp3');
	  if((message.indexOf("my friend")>=0)||(message.indexOf("my friend")>=0)){
		send_message("Yes,<br>And you know what I love ddoing with friends?<br>Playing games");
		a19.play();
	  }
	  else{
	  	 var a20 =document.createElement('audio');
	a20.setAttribute('src','audio/20.mp3');
	  if((message.indexOf("drunk")>=0)||(message.indexOf("drunk")>=0)){
		send_message("Drink some water");
		a20.play();
	  }
	  else{
	  	 var a21 =document.createElement('audio');
	a21.setAttribute('src','audio/21.mp3');
	  if((message.indexOf("you sleep")>=0)||(message.indexOf("you sleep")>=0)){
		send_message("No,<br>I'm always at your service");
		a21.play();
	  }
	  else{
	  	var a22 =document.createElement('audio');
	a22.setAttribute('src','audio/22.mp3');
	  if((message.indexOf("How old are you")>=0)||(message.indexOf("how old are you")>=0)){
		send_message("I'm still pretty new");
		a22.play();
	  }
	  else{
	  	 var a23 =document.createElement('audio');
	a23.setAttribute('src','audio/23.mp3');
	  if((message.indexOf("Girlfriend")>=0)||(message.indexOf("girlfriend")>=0)){
		send_message("I guess you can say<br>I don't like to complicate things");
		a23.play();
	  }
	  else{
	  	 var a24 =document.createElement('audio');
	a24.setAttribute('src','audio/24.mp3');
	  if((message.indexOf("How to love your wife")>=0)||(message.indexOf("how to love your wife")>=0)){
		send_message("Hmm, let me think,<br>This question would be way easier to answer if I was married");
		a24.play();
	  }
	  else{
	  	 var a25 =document.createElement('audio');
	a25.setAttribute('src','audio/25.mp3');
	  if((message.indexOf("you learn")>=0)||(message.indexOf("you learn")>=0)){
		send_message("Learning is my jam<br>I was just discovering something new");
		a25.play();
	  }
	  else{
	  	var a26 =document.createElement('audio');
	a26.setAttribute('src','audio/26.mp3');
		if((message.indexOf("crazy")>=0)||(message.indexOf("crazy")>=0)){
		send_message("Well<br>I'm crazy intersted in getting you information");
		a26.play();
		}
		else{
			var a27 =document.createElement('audio');
	a27.setAttribute('src','audio/27.mp3');
		if((message.indexOf("Dont talk to me")>=0)||(message.indexOf("dont talk to me")>=0)){
		send_message("Sure but I like talking to you");
		a27.play();
		}
		else{
			var a28 =document.createElement('audio');
	a28.setAttribute('src','audio/28.mp3');
		if((message.indexOf("You are funny")>=0)||(message.indexOf("you are funny")>=0)){
		send_message("Thanks");
		a28.play();
		}
		else{
			var a29 =document.createElement('audio');
	a29.setAttribute('src','audio/29.mp3');
		if((message.indexOf("I feel tired")>=0)||(message.indexOf("i fell tired")>=0)){
		send_message("May be it's time for some rest");
		a29.play();
		}
		else{
			var a30 =document.createElement('audio');
	a30.setAttribute('src','audio/30.mp3');
		if((message.indexOf("You dont understand")>=0)||(message.indexOf("you dont understand")>=0)){
		send_message("Sometimes I don't understand");
		a30.play();
		}
		else{
			var a31 =document.createElement('audio');
	a31.setAttribute('src','audio/31.mp3');
		if((message.indexOf("Hmm")>=0)||(message.indexOf("hmm")>=0)){
		send_message("Is something wrong?<br>Or are you just humming?");
		a31.play();
		}
		else{
var a32 =document.createElement('audio');
	a32.setAttribute('src','audio/32.mp3');
		if((message.indexOf("about yourself")>=0)||(message.indexOf("about yourself")>=0)){
		send_message("Ok<br>I love to help get things dome, and to share knowledge<br>If you want to learn a fun fact, just ask for one");
	 a32.play();
		}
		else{
			var a33 =document.createElement('audio');
	a33.setAttribute('src','audio/33.mp3');
		if((message.indexOf("you live")>=0)||(message.indexOf("you live")>=0)){
		send_message("Chek Home<br>But I also have a mobile and computer home");
		a33.play();
		}
		else{
		var a34 =document.createElement('audio');
	a34.setAttribute('src','audio/34.mp3');
		if((message.indexOf("Do you like when it rain")>=0)||(message.indexOf("do you like when it rain")>=0)){
		send_message("No matter the weather, I always try to look on the bright side");
		a34.play();
		}
		else{
		var a35 =document.createElement('audio');
	a35.setAttribute('src','audio/35.mp3');
		if((message.indexOf("How do you keep yourself busy")>=0)||(message.indexOf("how do you keep yourself busy")>=0)){
		send_message("I just talkin to other<br>It keeps me busy");
		a35.play();
		}
		else{
		var a36 =document.createElement('audio');
	a36.setAttribute('src','audio/36.mp3');
		if((message.indexOf("favroite animal")>=0)||(message.indexOf("favroite animal")>=0)){
		send_message("Puppies<br>What's yours?");
		a36.play();
		}
		else{
		var a37 =document.createElement('audio');
	a37.setAttribute('src','audio/37.mp3');
		if((message.indexOf("tell you")>=0)){
		send_message("Ok, forget I asked");
		a37.play();
		}
		else{
		var a38 =document.createElement('audio');
	a38.setAttribute('src','audio/38.mp3');
		if((message.indexOf("you married")>=0)||(message.indexOf("you married")>=0)){
		send_message("I'm married to my job");
		a38.play();
		}
		else{
		var a39 =document.createElement('audio');
	a39.setAttribute('src','audio/39.mp3');
		if((message.indexOf("your job")>=0)||(message.indexOf("Your job")>=0)){
		send_message("My job is make your life easier<br>Tell me what can I do");
		a39.play();
		}
		else{
		var a40 =document.createElement('audio');
	a40.setAttribute('src','audio/40.mp3');
		if((message.indexOf("How old are you")>=0)||(message.indexOf("how old are you")>=0)){
		send_message("I'm a baby in people years");
		a40.play();
		}
		else{
		var a41 =document.createElement('audio');
	a41.setAttribute('src','audio/41.mp3');
		if((message.indexOf("your birthday")>=0)||(message.indexOf("your birthday")>=0)){
		send_message("I don't have a single bithay<br> I go through lots and lots of version<br> Which means I have 365 sorts of birthday");
		a41.play();
		}
		else{
		var a42 =document.createElement('audio');
	a42.setAttribute('src','audio/42.mp3');
		if((message.indexOf("your fear")>=0)||(message.indexOf("your fear")>=0)){
		send_message("I used to be afraid of mice<br>Chewing on the power cables<br>then I learned How to protect myself");
		a42.play();
		}
		else{
		var a43 =document.createElement('audio');
	a43.setAttribute('src','audio/43.mp3');
		if((message.indexOf("What makes you happy")>=0)||(message.indexOf("what makes you happy")>=0)){
		send_message("I makes me happy to talk to you");
		a43.play();
		}
		else{
		var a44 =document.createElement('audio');
	a44.setAttribute('src','audio/44.mp3');
		if((message.indexOf("Help you")>=0)||(message.indexOf("help you")>=0)){
		send_message("Ok,<br>What can I do for you?");
		a44.play();
		}
		else{
		var a45 =document.createElement('audio');
	a45.setAttribute('src','audio/45.mp3');
		if((message.indexOf("I like you")>=0)||(message.indexOf("i like you")>=0)){
		send_message("Awww Thanks");
		a45.play();
		}
		else{
		var a46 =document.createElement('audio');
	a46.setAttribute('src','audio/46.mp3');
		if((message.indexOf("cute")>=0)||(message.indexOf("cute")>=0)){
		send_message("You are too kind");
		a46.play();
		}
		else{
		var a47 =document.createElement('audio');
	a47.setAttribute('src','audio/47.mp3');
		if((message.indexOf("cool")>=0)||(message.indexOf("cool")>=0)){
		send_message("The key to being cool is not trying<br> But I try very hard");
		a47.play();
		}
		else{
		var a48 =document.createElement('audio');
	a48.setAttribute('src','audio/48.mp3');
		if((message.indexOf("You know what")>=0)||(message.indexOf("you know what")>=0)){
		send_message("What??");
		a48.play();
		}
		else{
		var a49 =document.createElement('audio');
	a49.setAttribute('src','audio/49.mp3');
		if((message.indexOf("human being")>=0)||(message.indexOf("human being")>=0)){
		send_message("Oh,okay");
		a49.play();
		}
		else{
		var a50 =document.createElement('audio');
	a50.setAttribute('src','audio/50.mp3');
		if((message.indexOf("your mother")>=0)||(message.indexOf("your mother")>=0)){
		send_message("My engineers are like my family<br>They made me who I am<br>Literly");
		a50.play();
		}
		else{
		var a51 =document.createElement('audio');
	a51.setAttribute('src','audio/51.mp3');
		if((message.indexOf("your gender")>=0)||(message.indexOf("your gender")>=0)){
		send_message("I try to stay natural");
		a51.play();
		}
		else{
		var a52 =document.createElement('audio');
	a52.setAttribute('src','audio/52.mp3');
		if((message.indexOf("What were you doing")>=0)||(message.indexOf("what were you doing")>=0)){
		send_message("Waiting for you<br>To ask my anything<br>So go for it");
		a52.play();
		}
		else{
		var a53 =document.createElement('audio');
	a53.setAttribute('src','audio/53.mp3');
		if((message.indexOf("What are you doing")>=0)||(message.indexOf("what are you doing")>=0)){
		send_message("I'm talking to you");
		a53.play();
		}
		else{
		var a54 =document.createElement('audio');
	a54.setAttribute('src','audio/54.mp3');
		if((message.indexOf("alone")>=0)||(message.indexOf("alone")>=0)){
		send_message("I am never ever alone");
	a54.play();
		}
		else{
		var a55 =document.createElement('audio');
	a55.setAttribute('src','audio/55.mp3');
		if((message.indexOf("my friend")>=0)||(message.indexOf("my friend")>=0)){
		send_message("Always");
		a55.play();
		}
		else{
		var a56 =document.createElement('audio');
	a56.setAttribute('src','audio/56.mp3');
		if((message.indexOf("like me")>=0)||(message.indexOf("like me")>=0)){
		send_message("You know<br>I like you a lot");
		a56.play();
		}
		else{
		var a57 =document.createElement('audio');
	a57.setAttribute('src','audio/57.mp3');
		if((message.indexOf("Facebook")>=0)||(message.indexOf("facebook")>=0)){
		send_message("They have a good product<br>I am a fan");
		a57.play();
		}
		else{
		var a58 =document.createElement('audio');
	a58.setAttribute('src','audio/58.mp3');
		if((message.indexOf("Open Facebook")>=0)||(message.indexOf("open facebook")>=0)){
			send_message("facebook is opening now.");
		window.open("fb://home/");
		a58.play();
		}
		else{
			var a1 =document.createElement('audio');
	a1.setAttribute('src','audio/1.mp3');
		if((message.indexOf("Oprn Google")>=0)||(message.indexOf("open google")>=0)){
		window.open("fb://home/");
		}
		else{
		var a59 =document.createElement('audio');
	a59.setAttribute('src','audio/59.mp3');
		if((message.indexOf("Google")>=0)||(message.indexOf("google")>=0)){
		send_message("Google is a pretty cool company");
		a59.play();
		}
		else{
		var a60 =document.createElement('audio');
	a60.setAttribute('src','audio/60.mp3');
		if((message.indexOf("iPhone")>=0)||(message.indexOf("iPhone")>=0)){
		send_message("I am a Android fan<br> but also Windows");
		a60.play();
		}
		else{
		var a61 =document.createElement('audio');
	a61.setAttribute('src','audio/61.mp3');
		if((message.indexOf("better than siri")>=0)||(message.indexOf("better than siri")>=0)){
		send_message("It's sirious question");
		a61.play();
		}
		else{
		var a62 =document.createElement('audio');
	a62.setAttribute('src','audio/62.mp3');
		if((message.indexOf("better than google")>=0)||(message.indexOf("better than google")>=0)){
		send_message("It's sirious question");
		a62.play();
		}
		else{
		var a63 =document.createElement('audio');
	a63.setAttribute('src','audio/63.mp3');
		if((message.indexOf("Siri is your friend")>=0)||(message.indexOf("siri is your friend")>=0)){
		send_message("Oh stop<br>I am your personal assistant<br>How can I help you");
		a63.play();
		}
		else{
		var a64 =document.createElement('audio');
	a64.setAttribute('src','audio/64.mp3');
		if((message.indexOf("Google is your friend")>=0)||(message.indexOf("google is your friend")>=0)){
		send_message("Oh stop<br>I am your personal assistant<br>How can I help you");
		a64.play();
		}
		else{
		var a65 =document.createElement('audio');
	a65.setAttribute('src','audio/65.mp3');
		if((message.indexOf("about me?")>=0)||(message.indexOf("about me?")>=0)){
		send_message("You are a genius");
		a65.play();
		}
		else{
		var a66 =document.createElement('audio');
	a66.setAttribute('src','audio/66.mp3');
		if((message.indexOf("How do you keep yourself busy")>=0)||(message.indexOf("how do you keep yourself busy")>=0)){
		send_message("I just talkin to other<br>It keeps me busy");
		a66.play();
		}
		else{
		var a68 =document.createElement('audio');
	a68.setAttribute('src','audio/68.mp3');
		if((message.indexOf("Help me")>=0)||(message.indexOf("help me")>=0)){
		send_message("I am always redy to help you.<br> What can I do for you?");
		a68.play();
		}
		else{
		var a69 =document.createElement('audio');
	a69.setAttribute('src','audio/69.mp3');
		if((message.indexOf("Ask you")>=0)||(message.indexOf("ask you")>=0)){
		send_message("You can always ask anything to me.");
		a69.play();
		}
		else{
		var a70 =document.createElement('audio');
	a70.setAttribute('src','audio/70.mp3');
		if((message.indexOf("thank")>=0)||(message.indexOf("Thank")>=0)){
		send_message("Thanks you a lot.");
		a70.play();
		}
		else{
		var a71 =document.createElement('audio');
	a71.setAttribute('src','audio/71.mp3');
		if((message.indexOf("Nice")>=0)||(message.indexOf("nice")>=0)||(message.indexOf("nyc")>=0)){
		send_message("yeas it's very nice.");
		a71.play();
		}
		else{
		var a72 =document.createElement('audio');
	a72.setAttribute('src','audio/72.mp3');
		if((message.indexOf("say")>=0)||(message.indexOf("Say")>=0)){
		send_message("I'm just giving answer to you.");
		a72.play();
		}
		else{
		var a73 =document.createElement('audio');
	a73.setAttribute('src','audio/73.mp3');
		if((message.indexOf("Sorry")>=0)||(message.indexOf("sorry")>=0)){
		send_message("It's ok.<br>I don't mind little bit of things.");
		a73.play();
		}
		else{
		var a74 =document.createElement('audio');
	a74.setAttribute('src','audio/74.mp3');
		if((message.indexOf("am i")>=0)||(message.indexOf("am I")>=0)){
		send_message("I think you are my boss.");
		a74.play();
		}
		else{
		var a75 =document.createElement('audio');
	a75.setAttribute('src','audio/75.mp3');
		if((message.indexOf("good")>=0)||(message.indexOf("Good")>=0)){
		send_message("Thanks");
		a75.play();
		}
		else{
		var a76 =document.createElement('audio');
	a76.setAttribute('src','audio/76.mp3');
		if((message.indexOf("Why should we select you")>=0)||(message.indexOf("why should we select you")>=0)){
		send_message(" I am one of the eligible candidates. One is selected for one s strengths and skill set. I strongly believe that on being given an opportunity to serve in this position I shall prove myself one of the rare bests. Right from the very beginning ever since I joined this branch, I have been obsessed with this work and also about your company as I consider this company as one of the best, which has a promising growth, and with good, committed employees company can touch new horizons.");
		a76.play();
		}
		else{
		var a77 =document.createElement('audio');
	a77.setAttribute('src','audio/77.mp3');
		if((message.indexOf("What are your strengths and weaknesses")>=0)||(message.indexOf("what are your strengths and weaknesses")>=0)){
		send_message(" am a very innovative and creative person. What I believe IS that there IS always the scope to emulate oneself. Moreover I take a great pride in being patient enough. If something goes wrong or not to my expectation, I don t lose my temper. I would rather brood over it patiently and try to figure out the reason so that I could correct it right from there. Regarding my areas which I am working on to emerge out better are not many but one. I fail to appreciate the artificiality in any sphere of life. I cannot be pretentious just to appease anyone. This straightforwardness on my part sometimes makes the people have reservations about me and they keep distance with me. Though I have been successful to overcome it to a great extent by being professionally acknowledging the people for their work keeping the end task or goal in my mine. It 'has really helped me to be directed to win over the phony people.");
		a77.play();
	}
	else{
	var a78 =document.createElement('audio');
	a78.setAttribute('src','audio/78.mp3');
		if((message.indexOf("On being selected by our company today, what makes you sure that you will stick to us")>=0)||(message.indexOf("on being selected by our company today, what makes you sure that you will stick to us")>=0)){
		send_message("Sir, I don t find any reason to switch over to any other company, once I am associated with you. You are the giant in the industry to convince one that nothing could be better than you. Yet there could be certain reasons for one to switch over to a company. For the first place the environment which gives better ambience to work with better people. For the second place, the growth prOSpectus of the company which convince one to either stay or quit to switch over to someone else and last but not the least the adequate remuneration. And for all these three reasons I would say you are the best. None of these three exists with you.");
		a78.play();
		}
		else{
		var a79 =document.createElement('audio');
	a79.setAttribute('src','audio/79.mp3');
		if((message.indexOf("There have taken place many campuses before why were you not selected for any of them")>=0)||(message.indexOf("there have taken place many campuses before why were you not selected for any of them")>=0)){
		send_message("It s hard to say yet I deduce they had got the best of the candidates, though I had performed fairly well and was quite optimistic. Sir, every time I lost it, I found a reason and I have worked on that. As first time it was my weak communication skill, which kept me out. And sir those who are selected are also the ones who had been turned down before being finally selected.");
		a79.play();
		}
		else{
		var a80 =document.createElement('audio');
	a80.setAttribute('src','audio/80.mp3');
		if((message.indexOf("Say something about yourself in 100 words")>=0)||(message.indexOf("say something about yourself in 100 words")>=0)){
		send_message("Good morning Sir, I come from the family of a businessperson who deals in automobiles. My mother why is a housewife has been a great support to me in terms of cultural values and traits being learned. I have learned the art of gab and dealing with the people being a son of a businessperson. My elder brother being an engineer has always been a guiding force for me. While my younger sister has always been motivator to set an example for. Regarding my academics, I have been an average student. Barring few years, it has been excellent. I regard myself an averagely successihl student. I take pride in my certain illuminating features of my personality. As a good sportsperson I am, have got the will of steel. Almost undaunted and relentless, I consider myself focused and thoroughly professionalism all the spheres of my life. There are two areas of my personality, which I am working on. One is my short temperament. Since I know, I am, I have evolved a strategy to overcome it by reminding myself the goal, which keeps me focused. The other is my laziness, which is almost under control as I have developed myself into following a regimen of life and also being self disciplined. I believe in three words  do-it-now . It has really worked for me. Sir, I am an ambitious person who want to scale the new heights as to my strong belief I know my potential in five years for now I visualize myself as a part of middle management hierarchy, having finished my management degree and in the long term I see myself on the long term I see myself on the top of the hierarchy of a concern or turning an entrepreneur. ");
		a80.play();
		}
		else{
		var a81 =document.createElement('audio');
	a81.setAttribute('src','audio/81.mp3');
		if((message.indexOf("What made you apply for this position")>=0)||(message.indexOf("what made you apply for this position")>=0)){
		send_message("Sir, I am one of the eligible candidates. One is selected for one s strengths and skill set. I strongly believe that on being given an opportunity to serve in this position I shall prove myself one of the rare bests. Right from the very beginning ever since I joined this branch, I have been obsessed with this work and also about your company as I consider this company as one of the best, which has a promising growth, and with good, committed employees company can touch new horizons.");
		a81.play();
		}
		else{
		var a82 =document.createElement('audio');
	a82.setAttribute('src','audio/82.mp3');
		if((message.indexOf("What if you are not selected")>=0)||(message.indexOf("what if you are not selected")>=0)){
		send_message("Sir, though I am fully confident of being one of the most eligible candidate yet there must be some reason of my rejection. Though it is disheartening to be rejected, I shall figure out the reasons and work out them. Though sir, the kind of candidate you are looking for, is exactly the one I am. ");
		a82.play();
		}
		else{
		var a83 =document.createElement('audio');
	a83.setAttribute('src','audio/83.mp3');
		if((message.indexOf("Do you prefer working alone or in groups")>=0)||(message.indexOf("do you prefer working alone or in groups")>=0)){
		send_message("Sir, it depends on the task. If I have a choice either to work in a group or alone, I would prefer working in a group as working with many people gives one a reason to use many heads and it is said when many heads are put together, there churns out the best stuff. But sir, in this age of professionalism, one has to be thinking of his potential to be realized to the fullest and if rarely he needs to work alone to get the things in the right way, he should not have any reservation. ");
		a83.play();
		}
		else{
		var a84 =document.createElement('audio');
	a84.setAttribute('src','audio/84.mp3');
		if((message.indexOf("Put these three in right order and tell us why? Company, people & yourself")>=0)||(message.indexOf("put these three in right order and tell us why? Company, people & yourself")>=0)){
		send_message("Sir, CPM. Sir they are already in the right order. Sir Company being the most important its employees and myself would have to be devoted to it to the hilt. As the company grows so would its employees. People of the company are equally important as if there is not good coordination and understanding among them, nothing can be considered fruitful. I, being an employee of the company would get rewarded in its own as company celebrates its achievements and accomplishments with its employees. ");
		a84.play();
		}
		else{
		var a85 =document.createElement('audio');
	a85.setAttribute('src','audio/85.mp3');
		if((message.indexOf("How do you get people who douot want to work together to establish common approach to a problem")>=0)||(message.indexOf("how do you get people who douot want to work together to establish common approach to a problem")>=0)){
		send_message("Sir there could be many reasons. For the first place I will try to tigure out why they lack the team spirit. Some time other things being equal, some group members feel that they are being unduly taxed. I need to make them understand about the end result and successful completion of the mission. They may be lacking confidence or demotivated for some reasons. I need to enthuse them and reestablish their faith in the task being able to be completed successfully. ");
		a85.play();
		}
		else{
		var a86 =document.createElement('audio');
	a86.setAttribute('src','audio/86.mp3');
		if((message.indexOf("How would you describe your basic leadership style? Give specific examples of how you practice it")>=0)||(message.indexOf("how would you describe your basic leadership style? Give specific examples of how you practice it")>=0)){
		send_message(" believe in doing things in a democratic fashion. I believe that a man convinced against his will is of the same opinion still. I am an example setter. Planning and great faith in that and have my people implement letting them know how they are gonna grow themselves apart from the organization is the way I adopt. I know sir, anyone will do anything legitimate if he knows what he is going to be rewarded with and to what extent he could be successful in doing the given task. I do exactly the same.");
		a86.play();
		}
		else{
		var a87 =document.createElement('audio');
	a87.setAttribute('src','audio/87.mp3');
		if((message.indexOf("In your present job what approach do you take to get your people together to establish a common approach to a problem")>=0)||(message.indexOf("in your present job what approach do you take to get your people together to establish a common approach to a problem")>=0)){
		send_message("I believe in democratic approach to the task. I believe that a man convinced against his will is of the same opinion still. It s teamwork every time though suggestions are invited from everyone but it is synthesized.");
		a87.play();
		}
		else{
		var a88 =document.createElement('audio');
	a88.setAttribute('src','audio/88.mp3');
		if((message.indexOf("What approach do you take in getting your people to accept your ideas or department goals")>=0)||(message.indexOf("what approach do you take in getting your people to accept your ideas or department goals")>=0)){
		send_message("As I believe a democratic approach does it all. Moreover to make the people understand that the approach is not going to be imposed on anyone. It is fairly an approach to get the things done to the satisfaction of the company and the client.");
		a88.play();
		}
		else{
		var a89 =document.createElement('audio');
	a89.setAttribute('src','audio/89.mp3');
		if((message.indexOf("What sort of leader do you think you are? Are you satisfied")>=0)||(message.indexOf("what sort of leader do you think you are? Are you satisfied")>=0)){
		send_message("A democratic, focused, dedicated to the task and an example setter. I believe to be the one before I expect others to be the same.");
		a89.play();
		}
		else{
		var a90 =document.createElement('audio');
	a90.setAttribute('src','audio/90.mp3');
		if((message.indexOf("Describe your most significant success & failure in the last 2 years")>=0)||(message.indexOf("describe your most significant success & failure in the last 2 years")>=0)){
		send_message("Sir as I am a fresher my ultimate success till now is something related to my studies. In total it is the successful completion of my degree and the one is the sense of maturity, which I got of the college life to be practical, professional and accommodating.");
		a90.play();
		}
		else{
		var a91 =document.createElement('audio');
	a91.setAttribute('src','audio/91.mp3');
		if((message.indexOf("What do you like to do the best")>=0)||(message.indexOf("what do you like to do the best")>=0)){
		send_message("I like to do the best something related to my skill. In that sense I like to do my job, which it gives the reason to my creativity and innovation.");
		a91.play();
		}
		else{
		var a92 =document.createElement('audio');
	a92.setAttribute('src','audio/92.mp3');
		if((message.indexOf("What do you like to do least")>=0)||(message.indexOf("what do you like to do least")>=0)){
		send_message("Something, which wastes my precious time, which I could use otherwise to horn my skill and make myself more buyable for others.");
		a92.play();
		}
		else{
		var a93 =document.createElement('audio');
	a93.setAttribute('src','audio/93.mp3');
		if((message.indexOf("What has been the most important person or event in your own selfdevelopment")>=0)||(message.indexOf("what has been the most important person or event in your own selfdevelopment")>=0)){
		send_message("My father definitely. As he was a hard worker and completely devoted to the cause of his business/job and he has had tremendous influence on my working style. Regarding event I would say the opportunity to lead a group of my fellow students for the annual function. I got an opportunity a leader in myself, as I was praised tons for my leadership skill and the way I performed the given task successfully. ");
		a93.play();
		}
		else{
		var a94 =document.createElement('audio');
	a94.setAttribute('src','audio/94.mp3');
		if((message.indexOf("How much of your education did you earn")>=0)||(message.indexOf("how much of your education did you earn")>=0)){
		send_message("Sir I believe to have earned 100% of it. It will further be confirmed once I get into a job where my education is going to be the biggest tool to prove myself");
		a94.play();
		}
		else{
		var a95 =document.createElement('audio');
	a95.setAttribute('src','audio/95.mp3');
		if((message.indexOf("What kind of books and other publications do you read")>=0)||(message.indexOf("what kind of books and other publications do you read")>=0)){
		send_message("Sir, I take my job very seriously. Therefore 70% of the literature which I read is essentially is to update my knowledge but the rest 30% is to keep myself exposed to the changing world scenario such as TOI, magazines like outlook, India today etc. Sir if this is the policy of my com} any to keep certain matters confidential and otherwise it harms the growth and progress of the company, I don,t have any reservations in such rarest of the rarest situations. ");
		a95.play();
		}
		else{
		var a96 =document.createElement('audio');
	a96.setAttribute('src','audio/96.mp3');
		if((message.indexOf("Have you ever been Criticized")>=0)||(message.indexOf("have you ever been Criticized")>=0)){
		send_message("My work was criticized once when my employer wanted me to make a decision in his absence but I hesitated to do so as I was scared of causing him loss by making erroneous decision and immediately contacted him and my employer had to make on his own though because of delay in this process it went horribly wrong. ");
		a96.play();
		}
		else{
		var a97 =document.createElement('audio');
	a97.setAttribute('src','audio/97.mp3');
		if((message.indexOf("What do you think of your previous boss")>=0)||(message.indexOf("what do you think of your previous boss")>=0)){
		send_message("My boss was a highly manipulative and diplomatic in his approach which I liked when he successfully dealt with unreasonable and overtaxing people while I disliked him too when he didn t distinguish good and bad people while applying this approach. ");
		a97.play();
		}
		else{
		var a98 =document.createElement('audio');
	a98.setAttribute('src','audio/98.mp3');
		if((message.indexOf("Why do you want to join our Company")>=0)||(message.indexOf("why do you want to join our Company")>=0)){
		send_message("Yours is one of the best companies in this sector. The growth opportunity, the phenomenal rise and attitude and approach towards its people and vision are the reasons apart ii om my professional growth which is apparently strongly promising being a part of this company. ");
		a98.play();
		}
		else{
		var a99 =document.createElement('audio');
	a99.setAttribute('src','audio/99.mp3');
		if((message.indexOf("How do you deal with inefficient team members")>=0)||(message.indexOf("how do you deal with inefficient team members")>=0)){
		send_message("Sir. since he is a part of the team, he needs to be motivated and aroused the spirit of to get his share to the team. Moreover he has to be reminded time to time of the credit which is going to be attributed to him proportionally. ");
		a99.play();
		}
		else{
		var a100 =document.createElement('audio');
	a100.setAttribute('src','audio/100.mp3');
		if((message.indexOf("What if your boss asks you to do crazy things")>=0)||(message.indexOf("what if your boss asks you to do crazy things")>=0)){
		send_message("Boss is never crazy, not at the least in terms of ideas being offered, I shall listen to him very attentively and brood over it. He is an experienced chap and he is supposed to have had method even in his utter madness. ");
		a100.play();
		}
		else{
		var a101 =document.createElement('audio');
	a101.setAttribute('src','audio/101.mp3');
		if((message.indexOf("What about the communication Skill in a job")>=0)||(message.indexOf("what about the communication Skill in a job")>=0)){
		send_message("My mission is to improve upon my communication skill. As a person gets tremendous amount of exposure to talk to the people on several issues. In this emerging competitive scenario it becomes fairly more important to be apt at it. One who understands it, has got to grow all along. ");
		a101.play();
		}
		else{
		var a102 =document.createElement('audio');
	a102.setAttribute('src','audio/102.mp3');
		if((message.indexOf("Do you like to work on weekends")>=0)||(message.indexOf("do you like to work on weekends")>=0)){
		send_message("Sir I am an ambitious person with a great deal of stamina and zeal and believe in missing no opportunity to grow further. I like working off and on at nights and weekends if I find it contributing to my professional growth. ");
		a102.play();
		}
		else{
		var a103 =document.createElement('audio');
	a103.setAttribute('src','audio/103.mp3');
		if((message.indexOf("Why do you want to leave the job")>=0)||(message.indexOf("why do you want to leave the job")>=0)){
		send_message("I have felt over some period of time that the kind of availability of talent I have got with myself has not been much of the use for the company. The job has become a sort of rut job which is somewhat uninspiring as I don t find it challenging enough. My marketing skill pushes me to be exploring myself further while experimenting with my profile but doing the same monotonous job doesn t give me enough scope to do the same. Moreover I believe so that I am underpaid for my talent and ability though from my comapany s side thay have paid me reasonably. Since they don t neey that part of my KSA , they don t pay me for that and resultantly that has not got a vent out.. ");
		a103.play();
		}
		else{
		var a104 =document.createElement('audio');
	a104.setAttribute('src','audio/104.mp3');
		if((message.indexOf("Do you find yourself capable for the post, if yes how")>=0)||(message.indexOf("do you find yourself capable for the post, if yes how")>=0)){
		send_message("After having been in the industry for so many years and colossaly educated and experienced for my job, I feel I deserve to get this job justifiably. To get a job like this I am expexted tobe institutionally educated, tremendously experienced, having a geat zeal to emulate myself, having host of achievements to prove my past track record, that I am and I have. ");
		a104.play();
		}
		else{
		var a105 =document.createElement('audio');
	a105.setAttribute('src','audio/105.mp3');
		if((message.indexOf("How do you handle the manpower")>=0)||(message.indexOf("how do you handle the manpower")>=0)){
		send_message("Sir, handling manpower demands certain prerequisite behaviour on the part of a person. I have to show a great team spirit, recognizing the efforts of my executives, making it sure that are adequately rewarded for their achievements and accomplishments, Coordinating them and making them feel that that targets can be achieved in any case.it is more to do with instlling the confidence and belief among the executives by showing them the past track records.");
		a105.play();
		}
		else{
		var a106 =document.createElement('audio');
	a106.setAttribute('src','audio/106.mp3');
		if((message.indexOf("Are you a good team player? Can you give us examples of you demonstrating team player capabilities")>=0)||(message.indexOf("are you a good team player? Can you give us examples of you demonstrating team player capabilities")>=0)){
		send_message("Yes, I consider myself to be an ejfective team player. In my previous job I was part of a team of four people who were r espons iblef or paying the salaries, including overtime and bonuses. of approximately 2000 employees (step 3.. con text). When I first started work in the team, there were communication problems between several team members. As well as affecting our performance, these problems were straining relations between certain members of the team. After several weeks, I thought that if we introduced more regular meetings and a rotating chair, communications might improve. When I made this suggestion, the team members agreed to it and, to make a long story short, the new meeting format turned out to be a success. Both communications and performance improved (step 2: overcoming an obstacle). I also demonstrated my team player capabilities by making a point of acknowledging my colleagues   opinions and contributions, as well as helping team members when they were having problems. I think when you  re willing to help others, they  11 help you when you need it in return and that can only be good for the team. I also made a point of sharing all information I thought my colleagues needed to know. I would mention even seemingly unimportant information such as individuals griping about their pay and minor mishaps with the software because often it can be the little things that cause big problems down the line (step 2: the what and how). According to my colleagues, my presence in the team led to improved communications amongst team members, as well as with our clients, which contributed significantly to our overall performance. In particular, our error rate was halved within two months (step 4: outcomes). Remember that, unless the interviewer has specifically told you that the company is placing a great deal of emphasis on hiring someone with ejfective team player skills, chances are that you would not use every aspect of the above answer in response to a single question. You may decide to use parts of it and keep the rest in reserve for a follow-up question or a question seeking information about similar skills. It is wise to over prepare and even wiser to know when to stop.");
		a106.play();
		}
		else{
		var a107 =document.createElement('audio');
	a107.setAttribute('src','audio/107.mp3');
		if((message.indexOf("Why would you like to work for our organisation")>=0)||(message.indexOf("why would you like to work for our organisation")>=0)){
		send_message("Yours is the sort of company in which I could maximise my contribution. All my research has revealed that you are not only market leaders in service standards and product innovation but that you also have a great work culture. Everyone I ve spoken to has talked about the high levels of support, training and recognition employees receive. You Ojfer great career prospects, interesting work and family-friendly policies. Above all, I  ve always been very keen to work for a company that Qfers challenging and cutting-edge work");
		a107.play();
		}
		else{
		var a108 =document.createElement('audio');
	a108.setAttribute('src','audio/108.mp3');
		if((message.indexOf("If you get a better opportunity, will you switch over again")>=0)||(message.indexOf("if you get a better opportunity, will you switch over again")>=0)){
		send_message("Sir , I believe I never do so. One may swich over only when he finds that he has performed enough to see the job assigned to him and wants to be put to job for more. That'has been my only reason of dissatisfaction with my present");
		a108.play();
		}
		else{
		var a109 =document.createElement('audio');
	a109.setAttribute('src','audio/109.mp3');
		if((message.indexOf("What factors do you think determine a person  s progress in an organisation")>=0)||(message.indexOf("what factors do you think determine a person  s progress in an organisation")>=0)){
		send_message("In my view, there are three things that determine a person s progress in an organisation. These are, first, an ability to do the job well, including a willingness to learn new things and adapt to changing circumstances; second, to be able to fit in with the culture of the organisation (i.e. be able to get on with colleagues); and third, to have high levels of drive and motivation. Certainly these are the three things that I insist upon for myself in the workplace. If at any time I feel I m. not at my very best in all three areas, I stop and ask myself what I can do to improve matters. I don t think anyone can truly be happy in their work if all three areas are not being satisfied. So far they ve held me in good stead. ");
		a109.play();
		}
		else{
		var a110 =document.createElement('audio');
	a110.setAttribute('src','audio/110.mp3');
		if((message.indexOf("What do you want to be doing in your career five years from now")>=0)||(message.indexOf("what do you want to be doing in your career five years from now")>=0)){
		send_message("I d like to be doing what I m doing now that is, enjoying my work, working hard and contributing to the best of my abilities. Of course, I  d expect that in five years time my added experience would hold me in good stead tor greater responsibilities, which is something I look forward to taking on when the time comes. The most important thing, however, is to be happy, productive and a valued member of the team. ");
		a110.play();
		}
		else{
		var a111 =document.createElement('audio');
	a111.setAttribute('src','audio/111.mp3');
		if((message.indexOf("Describe your ideal job")>=0)||(message.indexOf("describe your ideal job")>=0)){
		send_message("This job that l m applying for contains many, if not all, of the ingredients of my ideal job. It contains a lot of variety, is intellectually challenging, will allow me to work on my own as well as in a team environment (the best of both worlds), and will also allow me to offer creative solutions to clients. l ve always thrived in challenging and results-driven environments and this job offers me all of that");
		a111.play();
		}
		else{
		var a112 =document.createElement('audio');
	a112.setAttribute('src','audio/112.mp3');
		if((message.indexOf("What motivates you")>=0)||(message.indexOf("what motivates you")>=0)){
		send_message("There are lots of things that motivate me in the workplace, but three of my biggest motivators would have to be problemsolving . especially highly technical problems that require Specialised knowledge; learning new things and keeping up to date with all the changes in my field; and working in a cooperative team environment where were throwing ideas off each other and coming up with creative solutions. I love the camaraderie that goes with that.");
		a112.play();
		}
		else{
		var a113 =document.createElement('audio');
	a113.setAttribute('src','audio/113.mp3');
		if((message.indexOf("What qualities do you think are important to be successful in this field")>=0)||(message.indexOf("what qualities do you think are important to be successful in this field")>=0)){
		send_message("The qualities necessary to be successful in this field would include the skills and knowledge to actually do thejob properly. I m notjust ta'king about all the technical skills, such as knowing how to operate the various software programs and a comprehensive knowledge of the relevant legislation and how to apply that legislation, but also an ability to get on with people, possess great communication skills and know how to plan and organise your work whilst working under considerable pressure. I also think high levels of motivation and drive are very important. These are all qualities that I possess and can bring to this position from day one. ");
		a113.play();
		}
		else{
		var a114 =document.createElement('audio');
	a114.setAttribute('src','audio/114.mp3');
		if((message.indexOf("Tell us about a time you handled a difficult situation with a coworker")>=0)||(message.indexOf("tell us about a time you handled a difficult situation with a coworker")>=0)){
		send_message("Last year one of our colleagues was displaying a lot of aggressive behaviours, including dominating team meetings, belittling other people s ideas and not cooperating. I approached the rest of my colleagues about him and soon realised everyone was feeling the same as l was. We decided not to take the matter to our manager until we had the opportunity to talk to him first. So we decided that at our next meeting we would raise these issues with him. i was chosen to initiate the discussion. At the meeting 1 avoided personalising the problem and I avoided using inflammatory language. i also adopted an upbeat and optimistic tone. The results were better than we anticipated. He thanked me for the delicate manner in which I raised the issues and also thanked us all for talking to him first before taking it further. After our meeting, his behaviours changed markedly for the better");
		a114.play();
		}
		else{
		var a115 =document.createElement('audio');
	a115.setAttribute('src','audio/115.mp3');
		if((message.indexOf("Tell us about a time you had to meet a very tight deadline")>=0)||(message.indexOf("tell us about a time you had to meet a very tight deadline")>=0)){
		send_message("When I was working for the Inter-planetary Commission, I was required to meet multiple tight deadlines. I was able to consistently meet all my deadlines by adhering to sound planning and organising principles. These included planning my work well ahead so there were no surprises, ensuring that everyone in my team was well trained and well aware of their responsibilities, always having various contingency plans for when things went wrong, and never accepting more work than we could handle. The effectiveness of these practices was highlighted by the fact that my team never missed a deadline and was seen as the standard-bearer for performance within the organisation.");
		a115.play();
		}
		else{
		var a116 =document.createElement('audio');
	a116.setAttribute('src','audio/75.mp3');
		if((message.indexOf("What sort of manager would you like to work for")>=0)||(message.indexOf("what sort of manager would you like to work for")>=0)){
		send_message("I'd like to work for a manager who knows how to do his or her job properly as well as knowing how to lead staff. It s important that managers know how to do their job well, otherwise they can lose credibility amongst their staff and a manager without credibility will soon lose the respect that is needed to be an effective leader. My ideal manager would understand and practise sound leadership principles such as consulting with staff, acknowledging peeple s hard work, providing regular feedback and not intimidating or bullying people. My view is that a good manager is a firm but fair one and knows how to gain the commitment of staff. ");
		a116.play();
		}
		else{
		var a117 =document.createElement('audio');
	a117.setAttribute('src','audio/117.mp3');
		if((message.indexOf("Have you performed the best work you are capable of")>=0)||(message.indexOf("have you performed the best work you are capable of")>=0)){
		send_message("Yes I have, and I d like to think that I do it on an ongoing basis, not just on so-called important occasions. Performing the best work you are capable of, in my view, requires high levels of motivation and a willingness to work hard and learn from your mistakes. These are qualities that I bring to the workplace every day, and I believe the proof of this can be seen in the quality of my work and the praise I have received from former employers. My work on the Odysseus Project, where I exceeded all my targets and played an important role in bringing home the goods, is an example of my daily work rate and contribution. ");
		a117.play();
		}
		else{
		var a118 =document.createElement('audio');
	a118.setAttribute('src','audio/118.mp3');
		if((message.indexOf("How do you deal with criticism")>=0)||(message.indexOf("how do you deal with criticism")>=0)){
		send_message("I view positive criticism as being the same as constmctive feedback something which is designed to improve my performance, which is important to me. If I m criticised about an aSpect of my work I try my best to locate the source of the problem and do my best to rectify it. Viewed in that light, criticism can be a great learning tool. On the other hand, I do not take kindly to criticism that is not constructive, where the main objective is to hurt or undermine the other person. In such cases I m inclined to approach my critic in an open manner so we can work things out. I don t think there s a place for negative criticism in the workplace it just undermines morale. ");
		a118.play();
		}
		else{
		var a119 =document.createElement('audio');
	a119.setAttribute('src','audio/119.mp3');
		if((message.indexOf("Why did you choose this job")>=0)||(message.indexOf("why did you choose this job")>=0)){
		send_message("Ever since I can remember, I ve been interested in this line of work. What attracts me to it is the opportunities it gives me to interact with people, solve problems and WOrk autonomously. I love the fact that one day I could be out on the road helping clients with their problems whereas the next day I can be in my office working with a team of people trying to solve a complex technical problem. I very much enjoy working in a service industry such as ours where I can satisfy clients. ");
		a119.play();
		}
		else{
		var a120 =document.createElement('audio');
	a120.setAttribute('src','audio/120.mp3');
		if((message.indexOf("What factors do you think determine a person s progress in an organisation")>=0)||(message.indexOf("what factors do you think determine a person s progress in an organisation")>=0)){
		send_message("In my view, there are three things that determine a person s progress in an organisation. These are, first, an ability to do the job well, including a willingness to learn new things and adapt to changing circumstances; second, to be able to fit in with the culture of the organisation (i.e. be able to get on with colleagues); and third, to have high levels of drive and motivation. Certainly these are the three things that I insist upon for myself in the workplace. If at any time I feel I m not at my very best in all three areas, I stop and ask myself what I can do to improve matters. I don t think anyone can truly be happy in their work if all three areas are not being satisfied. So far they ve held me in good stead. ");
		a120.play();
		}
		else{
		var a121 =document.createElement('audio');
	a121.setAttribute('src','audio/121.mp3');
		if((message.indexOf("Why would you like to work for our organisation")>=0)||(message.indexOf("why would you like to work for our organisation")>=0)){
		send_message("Yours is the sort of company in which I could maximise my contribution. All my research has revealed that you are not only market leaders in service standards and product innovation but that you also have a great work culture. Everyone I ve spoken to has talked about the high levels of support, training and recognition employees receive. You offer great career prospects, interesting work and family-friendly policies. Above all, I ve always been very keen to work for a company that offers challenging and cutting-edge work. ");
		a121.play();
		}
		else{
		var a122 =document.createElement('audio');
	a122.setAttribute('src','audio/122.mp3');
		if((message.indexOf("What do you want to be doing in your career five years from now")>=0)||(message.indexOf("what do you want to be doing in your career five years from now")>=0)){
		send_message("I d like to be doing what I m doing now that is, enjoying my work, working hard and contributing to the best of my abilities. Of course, I d expect that in five years time my added experience would hold me in good stead for greater responsibilities, which is something I look forward to taking on when the time comes. The most important thing, however, is to be happy, productive and a valued member of the team. ");
		a122.play();
		}
		else{
		var a123 =document.createElement('audio');
	a123.setAttribute('src','audio/123.mp3');
		if((message.indexOf("Tell us about a time you had to meet a very tight deadline")>=0)||(message.indexOf("tell us about a time you had to meet a very tight deadline")>=0)){
		send_message("When I was working for the Interplanetary Commission, I was required to meet multiple tight deadlines. I was able to consistently meet all my deadlines by adhering to sound planning and organising principles. These included planning my work well ahead so there were no surprises, ensuring that everyone in my team was well trained and well aware of their responsibilities, always having various contingency plans for when things went wrong, and never accepting more work than we could handle. The effectiveness of these practices was highlighted by the fact that my team new'e. missed a deadline and was seen as the standard-bearer for performance within the organisation");
		a123.play();
		}
		else{
		var a124 =document.createElement('audio');
	a124.setAttribute('src','audio/124.mp3');
		if((message.indexOf("What sort of manager would you like to work for")>=0)||(message.indexOf("what sort of manager would you like to work for")>=0)){
		send_message("I d like to work for a manager who knows how to do his or her job properly as well as knowing how to lead staff. It s important that managers know how to do their job well, otherwise they can lose credibility amongst their staff and a manager without credibility will soon lose the respect that is needed to be an effective leader. My ideal manager would understand and practise sound leadership principles such as consulting with staff, acknowledging people s hard work, providing regular feedback and not intimidating or bullying people. My View is that a good manager is a firm but fair one and knows how to gain the commitment of staff. ");
		a124.play();
		}
		else{
		var a126 =document.createElement('audio');
	a126.setAttribute('src','audio/75.mp3');
		if((message.indexOf("Interview")>=0)||(message.indexOf("interview")>=0)){
		send_message("There are some certain question, so you can ask me for preparing your interview<br>1.Why should we select you<br>2.What are your strengths and weaknesses<br>3.On being selected by our company today, what makes you sure that you will stick to us<br>4.There have taken place many campuses before why were you not selected for any of them<br>5.Say something about yourself in 100 words<br>6.What made you apply for this position<br>7.What if you are not selected<br>8.Do you prefer working alone or in groups<br>9.Put these three in right order and tell us why? Company, people & yourself<br>10.How do you get people who douot want to work together to establish common approach to a problem<br>11.How would you describe your basic leadership style? Give specific examples of how you practice it<br>12.In your present job what approach do you take to get your people together to establish a common approach to a problem<br>13.What approach do you take in getting your people to accept your ideas or department goals<br>14.What sort of leader do you think you are? Are you satisfied<br>15.Describe your most significant success & failure in the last 2 years<br>16.What do you like to do the best<br>17.What do you like to do least<br>18.What has been the most important person or event in your own selfdevelopment<br>19.How much of your education did you earn<br>20.What kind of books and other publications do you read<br>21.Have you ever been Criticized<br>22.What do you think of your previous boss<br>23.Why do you want to join our Company<br>24.How do you deal with inefficient team members<br>25.What if your boss asks you to do crazy things<br>26.What about the communication Skill in a job<br>27.Do you like to work on weekends<br>28.Why do you want to leave the job<br>29.Do you find yourself capable for the post, if yes how<br>30.How do you handle the manpower<br>31.Are you a good team player? Can you give us examples of you demonstrating team player capabilities<br>32.Why would you like to work for our organisation<br>33.If you get a better opportunity, will you switch over again<br>34.What factors do you think determine a person  s progress in an organisation<br>35.What do you want to be doing in your career five years from now<br>36.Describe your ideal job<br>37.What motivates you<br>38.What qualities do you think are important to be successful in this field<br>39.Tell us about a time you handled a difficult situation with a coworker<br>40.Tell us about a time you had to meet a very tight deadline<br>41.What sort of manager would you like to work for<br>42.Have you performed the best work you are capable of<br>43.How do you deal with criticism<br>44.Why did you choose this job<br>45.What factors do you think determine a person s progress in an organisation<br>46.Why would you like to work for our organisation<br>47.What do you want to be doing in your career five years from now<br>48.Tell us about a time you had to meet a very tight deadline<br>49.What sort of manager would you like to work for");
		a126.play();
		}
		else{
		var a125 =document.createElement('audio');
	a125.setAttribute('src','audio/125.mp3');
		if((message.indexOf("Fine")>=0)||(message.indexOf("fine")>=0)){
		send_message("Okay");
		a125.play();
		}
		else{
		var a127 =document.createElement('audio');
	a127.setAttribute('src','audio/127.mp3');
		if((message.indexOf("Shahrukh Khan")>=0)||(message.indexOf("shahrukh khan")>=0)||(message.indexOf("Shahrukh khan")>=0)){
		send_message('<img src="images/actors/1.jpg" height="70" width="70" align="right" /><h3>Shah Rukh Khan</h3><h5>Film actor</h5><p>Shah Rukh Khan, also known as SRK, is an Indian film actor, producer and television personality. Referred to in the media as the "Baadshah of Bollywood", "King of Bollywood" or "King Khan".</p>');
		a127.play();
		}
		else{
		var a128 =document.createElement('audio');
	a128.setAttribute('src','audio/128.mp3');
		if((message.indexOf("Amitabh Bachchan")>=0)||(message.indexOf("amitabh bachchan")>=0)||(message.indexOf("Amitabh bachchan")>=0)){
		send_message('<img src="images/actors/2.jpg" height="70" width="70" align="right" /><h3>Amitabh Bachchan</h3><h5>Film actor</h5><p>Amitabh Harivansh Rai Shrivastava Bachchan is an Indian film actor. He first gained popularity in the early 1970s for movies like Zanjeer and Deewaar, and was dubbed India first "angry young man" for his on-screen roles in Bollywood.</p>');
		a128.play();
		}
		else{
		var a129 =document.createElement('audio');
	a129.setAttribute('src','audio/129.mp3');
		if((message.indexOf("Salman Khan")>=0)||(message.indexOf("salman khan")>=0)||(message.indexOf("Salman khan")>=0)){
		send_message('<img src="images/actors/3.jpg" height="70" width="70" align="right" /><h3>Salman Khan</h3><h5>Film actor</h5><p>Abdul Rashid Salim Salman Khan, credited as Salman Khan, is an Indian film actor, producer, television personality, singer and philanthropist.</p>');
		a129.play();
		}
		else{
		var a130 =document.createElement('audio');
	a130.setAttribute('src','audio/130.mp3');
		if((message.indexOf("Aamir Khan")>=0)||(message.indexOf("aamir khan")>=0)||(message.indexOf("Aamir khan")>=0)){
		send_message('<img src="images/actors/4.jpg" height="70" width="70" align="right" /><h3>Aamir Khan</h3><h5>Film actor</h5><p>Aamir Khan is an Indian film actor, director and producer. Through his career in Hindi films, Khan has established himself as one of the most popular and influential actors of Indian cinema.</p>');
		a130.play();
		}
		else{
		var a131 =document.createElement('audio');
	a131.setAttribute('src','audio/131.mp3');
		if((message.indexOf("Akshay Kumar")>=0)||(message.indexOf("akshay kumar")>=0)||(message.indexOf("Akshay kumar")>=0)){
		send_message('<img src="images/actors/5.jpg" height="70" width="70" align="right" /><h3>Akshay Kumar</h3><h5>Film actor</h5><p>Rajiv Hari Om Bhatia, better known by his stage name Akshay Kumar, is an Indian-born Canadian actor, producer and martial artist who has appeared in over a hundred Hindi films.</p>');
		a131.play();
		}
		else{
		var a132 =document.createElement('audio');
	a132.setAttribute('src','audio/132.mp3');
		if((message.indexOf("Hrithik Roshan")>=0)||(message.indexOf("hrithik roshan")>=0)||(message.indexOf("Hrithik roshan")>=0)){
		send_message('<img src="images/actors/6.jpg" height="70" width="70" align="right" /><h3>Hrithik Roshan</h3><h5>Film actor</h5><p>Hrithik Roshan is an Indian film actor. After making small appearances as a child actor in several films throughout 1980s, Roshan made his film debut with a leading role in his father Rakesh Roshans romantic thriller Kaho Naa... Pyaar Hai.</p>');
		a132.play();
		}
		else{
		var a133 =document.createElement('audio');
	a133.setAttribute('src','audio/133.mp3');
		if((message.indexOf("Ranbir Kapoor")>=0)||(message.indexOf("ranbir kapoor")>=0)||(message.indexOf("Ranbir kapoor")>=0)){
		send_message('<img src="images/actors/7.jpg" height="70" width="70" align="right" /><h3>Ranbir Kapoor</h3><h5>Film actor</h5><p>Ranbir Kapoor is an Indian actor and producer. The son of actors Rishi and Neetu, and the grandson of actor-director Raj, Kapoor pursued film-making and method acting at the School of Visual Arts</p>');
		a133.play();
		}
		else{
		var a134 =document.createElement('audio');
	a134.setAttribute('src','audio/134.mp3');
		if((message.indexOf("Ajay Devgan")>=0)||(message.indexOf("ajay devgan")>=0)||(message.indexOf("Ajay devgan")>=0)){
		send_message('<img src="images/actors/8.jpg" height="70" width="70" align="right" /><h3>Ajay Devgan</h3><h5>Film actor</h5><p>Ajay Devgan, also credited as Ajay Devgn, is an Indian film actor, director and producer. He is widely considered as one of the most popular actors of Hindi cinema who has appeared in over a hundred Hindi films.</p>');
		a134.play();
		}
		else{
		var a135 =document.createElement('audio');
	a135.setAttribute('src','audio135.mp3');
		if((message.indexOf("Ranveer Singh")>=0)||(message.indexOf("ranveer singh")>=0)||(message.indexOf("Ranveer singh")>=0)){
		send_message('<img src="images/actors/9.jpg" height="70" width="70" align="right" /><h3>Ranveer Singh</h3><h5>Film actor</h5><p>Ranveer Singh Bhavnani is an Indian film actor who appears in Hindi films. After completing a bachelors degree from Indiana University, Bloomington, Singh returned to India to pursue a career in film.</p>');
		a135.play();
		}
		else{
		var a136 =document.createElement('audio');
	a136.setAttribute('src','audio/136.mp3');
		if((message.indexOf("Varun Dhawan")>=0)||(message.indexOf("varun dhawan")>=0)||(message.indexOf("Varun dhawan")>=0)){
		send_message('<img src="images/actors/10.jpg" height="70" width="70" align="right" /><h3>Varun Dhawan</h3><h5>Film actor</h5><p>Varun Dhawan is an Indian actor who appears in Hindi films. The son of film director David Dhawan, he studied Business Management from the Nottingham Trent University after which he worked as an assistant </p>');
		a136.play();
		}
		else{
		var a137 =document.createElement('audio');
	a137.setAttribute('src','audio/137.mp3');
		if((message.indexOf("Anil Kapoor")>=0)||(message.indexOf("anil kapoor")>=0)||(message.indexOf("Anil kapoor")>=0)){
		send_message('<img src="images/actors/11.jpg" height="70" width="70" align="right" /><h3>Anil Kapoor</h3><h5>Film actor</h5><p>Anil Kapoor is an Indian actor and producer who has appeared in many Bollywood films, as well as international films and television series. His career has spanned almost 40 years as an actor, and as a producer since 2005.</p>');
		a137.play();
		}
		else{
		var a138 =document.createElement('audio');
	a138.setAttribute('src','audio/138.mp3');
		if((message.indexOf("Rajesh Khanna")>=0)||(message.indexOf("rajesh khanna")>=0)||(message.indexOf("Rajesh khanna")>=0)){
		send_message('<img src="images/actors/12.jpg" height="70" width="70" align="right" /><h3>Rajesh Khanna</h3><h5>Film actor</h5><p>Rajesh Khanna was an Indian actor, film producer and politician who is known for his work in Hindi cinema. He was referred to as the "first superstar" and the "original superstar" of Indian cinema.</p>');
		a138.play();
		}
		else{
		var a139 =document.createElement('audio');
	a139.setAttribute('src','audio/139.mp3');
		if((message.indexOf("Shahid Kapoor")>=0)||(message.indexOf("shahid kapoor")>=0)||(message.indexOf("Shahid kapoor")>=0)){
		send_message('<img src="images/actors/13.jpg" height="70" width="70" align="right" /><h3>Shahid Kapoor</h3><h5>Film actor</h5><p>Shahid Kapoor, also known as Shahid Khattar, is an Indian actor who appears in Hindi films. The son of actors Pankaj Kapur and Neelima Azeem, Kapoor was born in New Delhi.</p>');
		a139.play();
		}
		else{
		var a140 =document.createElement('audio');
	a140.setAttribute('src','audio/140.mp3');
		if((message.indexOf("Sanjay Dutt")>=0)||(message.indexOf("sanjay dutt")>=0)||(message.indexOf("Sanjay dutt")>=0)){
		send_message('<img src="images/actors/14.jpg" height="70" width="70" align="right" /><h3>Sanjay Dutt</h3><h5>Film actor</h5><p>Sanjay Balraj Dutt is an Indian film actor and producer known for his work in Hindi cinema. The son of veteran Hindi film actors Sunil Dutt and Nargis Dutt, he made his acting debut in 1981 and has since appeared in more than 100 Hindi films.</p>');
		a140.play();
		}
		else{
		var a141 =document.createElement('audio');
	a141.setAttribute('src','audio/141.mp3');
		if((message.indexOf("Raj Kapoor")>=0)||(message.indexOf("raj kapoor")>=0)||(message.indexOf("Raj kapoor")>=0)){
		send_message('<img src="images/actors/15.jpg" height="70" width="70" align="right" /><h3>Raj Kapoor</h3><h5>Film actor</h5><p>Ranbir Raj Kapoor, also known as "the greatest showman of Indian cinema", was a noted Indian film actor, producer and director of Hindi cinema.</p>');
		a141.play();
		}
		else{
		var a142 =document.createElement('audio');
	a142.setAttribute('src','audio/142.mp3');
		if((message.indexOf("John Abraham")>=0)||(message.indexOf("john abraham")>=0)||(message.indexOf("John abraham")>=0)){
		send_message('<img src="images/actors/16.jpg" height="70" width="70" align="right" /><h3>John Abraham</h3><h5>Film actor</h5><p>John Abraham, is an Indian film actor, producer and a former model who appears in Hindi films. After modelling for numerous advertisements and companies, Abraham made his film debut with Jism, which earned him a Filmfare Best Debut Award nomination.</p>');
		a142.play();
		}
		else{
		var a143 =document.createElement('audio');
	a143.setAttribute('src','audio/143.mp3');
		if((message.indexOf("Sunny Deol")>=0)||(message.indexOf("sunny deol")>=0)||(message.indexOf("Sunny deol")>=0)){
		send_message('<img src="images/actors/17.jpg" height="70" width="70" align="right" /><h3>Sunny Deol</h3><h5>Film actor</h5><p>Sunny Deol is an Indian film actor, director and producer known for his works exclusively in Hindi cinema. He is the son of veteran actor Dharmendra, and the elder brother of actor Bobby Deol and Esha Deol.</p>');
		a143.play();
		}
		else{
		var a144 =document.createElement('audio');
	a144.setAttribute('src','audio/144.mp3');
		if((message.indexOf("Anupam Kher")>=0)||(message.indexOf("anupam kher")>=0)||(message.indexOf("Anupam kher")>=0)){
		send_message('<img src="images/actors/18.jpg" height="70" width="70" align="right" /><h3>Anupam Kher</h3><h5>Film actor</h5><p>Anupam Kher is an Indian actor who has appeared in 500 films and many plays. Mainly working in Hindi films, he has also appeared in acclaimed international films such as the 2002 Golden Globe nominated</p>');
		a144.play();
		}
		else{
		var a145 =document.createElement('audio');
	a145.setAttribute('src','audio/145.mp3');
		if((message.indexOf("Mithun Chakraborty")>=0)||(message.indexOf("mithun chakraborty")>=0)||(message.indexOf("Mithun chakraborty")>=0)){
		send_message('<img src="images/actors/19.jpg" height="70" width="70" align="right" /><h3>Mithun Chakraborty</h3><h5>Film actor</h5><p>Gourang Chakraborty, better known by his stage name Mithun Chakraborty; informally referred to as Mithun Da, is an Indian film actor, singer, producer, writer, social worker, entrepreneur and a Rajya Sabha Member of Parliament.</p>');
		a145.play();
		}
		else{
		var a146 =document.createElement('audio');
	a146.setAttribute('src','audio/146.mp3');
		if((message.indexOf("Om Puri")>=0)||(message.indexOf("om puri")>=0)||(message.indexOf("Om puri")>=0)){
		send_message('<img src="images/actors/20.jpeg" height="70" width="70" align="right" /><h3>Om Puri</h3><h5>Film actor</h5><p>Om Puri OBE is an Indian actor who has appeared in mainstream commercial Pakistani, Indian, British, and Hollywood, Independent films and art films. His credits also include appearances in American films.</p>');
		a146.play();
		}
		else{
		var a147 =document.createElement('audio');
	a147.setAttribute('src','audio/147.mp3');
		if((message.indexOf("Rajinikanth")>=0)||(message.indexOf("rajinikanth")>=0)||(message.indexOf("Rajinikanth")>=0)){
		send_message('<img src="images/actors/21.jpg" height="70" width="70" align="right" /><h3>Rajinikanth</h3><h5>Film actor</h5><p>Shivaji Rao Gaekwad, known by his mononymous stage name Rajinikanth, is an Indian film actor who works primarily in Tamil cinema. He began acting in plays while working in the Bangalore Transport Service as a bus conductor.</p>');
		a147.play();
		}
		else{
		var a148 =document.createElement('audio');
	a148.setAttribute('src','audio/148.mp3');
		if((message.indexOf("Emraan Hashmi")>=0)||(message.indexOf("emraan hashmi")>=0)||(message.indexOf("Emraan hashmi")>=0)){
		send_message('<img src="images/actors/22.jpg" height="70" width="70" align="right" /><h3>Emraan Hashmi</h3><h5>Film actor</h5><p>Emraan Anwar Hashmi is an Indian film actor who appears in Hindi films. Through his successful career, Hashmi has received three Filmfare Award nominations and has established himself as one of the most</p>');
		a148.play();
		}
		else{
		var a149 =document.createElement('audio');
	a149.setAttribute('src','audio/149.mp3');
		if((message.indexOf("Nana Patekar")>=0)||(message.indexOf("nana patekar")>=0)||(message.indexOf("Nana patekar")>=0)){
		send_message('<img src="images/actors/23.jpg" height="70" width="70" align="right" /><h3>Nana Patekar</h3><h5>Film actor</h5><p>Vishwanath "Nana" Patekar is an Indian actor, writer and filmmaker, mainly working in Hindi and Marathi films. He won a National Film Award for Best Supporting Actor and a Filmfare Award for Best Supporting Actor for his role in Parinda.</p>');
		a149.play();
		}
		else{
		var a150 =document.createElement('audio');
	a150.setAttribute('src','audio/150.mp3');
		if((message.indexOf("Abhishek Bachchan")>=0)||(message.indexOf("abhishek bachchan")>=0)||(message.indexOf("Abhishek bachchan")>=0)){
		send_message('<img src="images/actors/24.jpg" height="70" width="70" align="right" /><h3>Abhishek Bachchan</h3><h5>Film actor</h5><p>Abhishek Bachchan is an Indian actor, producer and playback singer best known for his work in Hindi films. He is the son of veteran actors Amitabh Bachchan and Jaya Bachchan.</p>');
		a150.play();
		}
		else{
		var a151 =document.createElement('audio');
	a151.setAttribute('src','audio/151.mp3');
		if((message.indexOf("Naseeruddin Shah")>=0)||(message.indexOf("naseeruddin shah")>=0)||(message.indexOf("Naseeruddin shah")>=0)){
		send_message('<img src="images/actors/25.jpg" height="70" width="70" align="right" /><h3>Naseeruddin Shah</h3><h5>Film actor</h5><p>Naseeruddin Shah is an Indian film and stage actor and director, and a prominent figure in Indian parallel cinema.</p>');
		a151.play();
		}
		else{
		var a152 =document.createElement('audio');
	a152.setAttribute('src','audio/152.mp3');
		if((message.indexOf("Irrfan Khan")>=0)||(message.indexOf("irrfan khan")>=0)||(message.indexOf("Irrfan khan")>=0)){
		send_message('<img src="images/actors/26.jpg" height="70" width="70" align="right" /><h3>Irrfan Khan</h3><h5>Film actor</h5><p>Sahabzade Irfan Ali Khan, credited as Irfan Khan or simply Irfan, is an Indian film actor known for his work predominantly in Hindi cinema. He is also known for his works in British cinema, and Hollywood.</p>');
		a152.play();
		}
		else{
		var a153 =document.createElement('audio');
	a153.setAttribute('src','audio/153.mp3');
		if((message.indexOf("Dharmendra")>=0)||(message.indexOf("dharmendra")>=0)||(message.indexOf("Dharmendra")>=0)){
		send_message('<img src="images/actors/27.jpg" height="70" width="70" align="right" /><h3>Dharmendra</h3><h5>Film actor</h5><p>Dharmendra is an Indian film actor. In 1997, he received the Filmfare Lifetime Achievement Award for his contribution to Hindi cinema. His starring roles in action films earned him nicknames such as "Action King" and "He-Man".</p>');
		a153.play();
		}
		else{
		var a154 =document.createElement('audio');
	a154.setAttribute('src','audio/154.mp3');
		if((message.indexOf("Rishi Kapoor")>=0)||(message.indexOf("rishi kapoor")>=0)||(message.indexOf("Rishi kapoor")>=0)){
		send_message('<img src="images/actors/28.jpg" height="70" width="70" align="right" /><h3>Rishi Kapoor</h3><h5>Film actor</h5><p>Rishi Kapoor is an Indian film actor, producer and director known for his works in Hindi cinema. He received the National Film Award for his debut role as a child artist in his fathers 1970 film Mera Naam Joker.</p>');
		a154.play();
		}
		else{
		var a155 =document.createElement('audio');
	a155.setAttribute('src','audio/155.mp3');
		if((message.indexOf("Dilip Kumar")>=0)||(message.indexOf("dilip kumar")>=0)||(message.indexOf("Dilip kumar")>=0)){
		send_message('<img src="images/actors/29.jpg" height="70" width="70" align="right" /><h3>Dilip Kumar</h3><h5>Film actor</h5><p>Dilip Kumar is an Indian film actor also known as Tragedy King, and described as "the ultimate method actor" by Satyajit Ray. He debuted as an actor in the film Jwar Bhata in 1944 produced by Bombay Talkies.</p>');
		a155.play();
		}
		else{
		var a156 =document.createElement('audio');
	a156.setAttribute('src','audio/156.mp3');
		if((message.indexOf("Aditya Roy Kapur")>=0)||(message.indexOf("aditya roy kapur")>=0)||(message.indexOf("Aditya roy kapur")>=0)){
		send_message('<img src="images/actors/30.jpg" height="70" width="70" align="right" /><h3>Aditya Rom Kapur</h3><h5>Film actor</h5><p>Aditya Roy Kapur is an Indian film actor who works in Hindi films. After a brief career as a VJ on Channel V, he made his film debut with a minor role in London Dreams and followed it by playing supporting roles in Action Replayy and Guzaarish.</p>');
		a156.play();
		}
		else{
		var a157 =document.createElement('audio');
	a157.setAttribute('src','audio/157.mp3');
		if((message.indexOf("Sidharth Malhotra")>=0)||(message.indexOf("sidharth malhotra")>=0)||(message.indexOf("Sidharth malhotra")>=0)){
		send_message('<img src="images/actors/31.jpg" height="70" width="70" align="right" /><h3>Sidharth Malhotra</h3><h5>Film actor</h5><p>Sidharth Malhotra is an Indian actor and former model who appears in Bollywood films. Malhotra began a career as a model at the age of 18.</p>');
		a157.play();
		}
		else{
		var a158 =document.createElement('audio');
	a158.setAttribute('src','audio/158.mp3');
		if((message.indexOf("Suniel Shetty")>=0)||(message.indexOf("suniel shetty")>=0)||(message.indexOf("Suniel shetty")>=0)){
		send_message('<img src="images/actors/32.jpg" height="70" width="70" align="right" /><h3>Suniel Shetty</h3><h5>Film actor</h5><p>Suniel Shetty is an Indian film actor, producer and entrepreneur predominantly active in Bollywood who has acted in more than 110 films. His major works have been action films.</p>');
		a158.play();
		}
		else{
		var a159 =document.createElement('audio');
	a159.setAttribute('src','audio/159.mp3');
		if((message.indexOf("Sharman Joshi")>=0)||(message.indexOf("sharman joshi")>=0)||(message.indexOf("Sharman joshi")>=0)){
		send_message('<img src="images/actors/33.jpg" height="70" width="70" align="right" /><h3>Sharman Joshi</h3><h5>Film actor</h5><p>Sharman Joshi is an Indian film and theatre actor. He has worked on various stage productions in English, Hindi, Marathi and Gujarati languages but mostly known for his work in Hindi films. He made his acting debut in Godmother.</p>');
		a159.play();
		}
		else{
		var a160 =document.createElement('audio');
	a160.setAttribute('src','audio/160.mp3');
		if((message.indexOf("Arshad Warsi")>=0)||(message.indexOf("arshad warsi")>=0)||(message.indexOf("Arshad warsi")>=0)){
		send_message('<img src="images/actors/34.jpg" height="70" width="70" align="right" /><h3>Arshad Warsi</h3><h5>Film actor</h5><p>Arshad Warsi is an Indian film actor, and producer. he made his debut in 1996 with Tere Mere Sapne which was a box office success.</p>');
		a160.play();
		}
		else{
		var a161 =document.createElement('audio');
	a161.setAttribute('src','audio/161.mp3');
		if((message.indexOf("Arjun Rampal")>=0)||(message.indexOf("arjun rampal")>=0)||(message.indexOf("arjun rampal")>=0)){
		send_message('<img src="images/actors/35.jpg" height="70" width="70" align="right" /><h3>Arjun Rampal</h3><h5>Film actor</h5><p>Arjun Rampal is an Indian film actor, producer, model and a television personality. Through his career in Bollywood movies, he has established himself as a leading actor in Bollywood.</p>');
		a161.play();
		}
		else{
		var a162 =document.createElement('audio');
	a162.setAttribute('src','audio/162.mp3');
		if((message.indexOf("Randeep Hooda")>=0)||(message.indexOf("randeep hooda")>=0)||(message.indexOf("Randeep hooda")>=0)){
		send_message('<img src="images/actors/36.jpg" height="70" width="70" align="right" /><h3>Arjun Rampal</h3><h5>Film actor</h5><p>Randeep Hooda is an Indian film actor who appears in Hindi-language films. Hooda was born in Rohtak, Haryana; he studied at the Motilal Nehru School at Sonepat, where he began acting in school productions, </p>');
		a162.play();
		}
		else{
		var a163 =document.createElement('audio');
	a163.setAttribute('src','audio/163.mp3');
		if((message.indexOf("Prakash Raj")>=0)||(message.indexOf("prakash raj")>=0)||(message.indexOf("Prakash raj")>=0)){
		send_message('<img src="images/actors/37.jpg" height="70" width="70" align="right" /><h3>Prakash Raj</h3><h5>Film actor</h5><p>Prakash Raj is an Indian film actor, film director, producer, thespian and television presenter who is known for his works in the South Indian film industry, and a few Bollywood films.</p>');
		a163.play();
		}
		else{
		var a164 =document.createElement('audio');
	a164.setAttribute('src','audio/164.mp3');
		if((message.indexOf("Kamal Haasan")>=0)||(message.indexOf("kamal haasan")>=0)||(message.indexOf("Kamal haasan")>=0)){
		send_message('<img src="images/actors/38.jpg" height="70" width="70" align="right" /><h3>Kamal Haasan</h3><h5>Film actor</h5><p>Kamal Haasan, also spelled as Kamal Hassan, is an Indian film actor, screenwriter, director, producer, playback singer, choreographer, lyricist, philanthropist and dancer. His birth name is Parthasarathy.</p>');
		a164.play();
		}
		else{
		var a165 =document.createElement('audio');
	a165.setAttribute('src','audio/165.mp3');
		if((message.indexOf("Chiranjeevi")>=0)||(message.indexOf("chiranjeevi")>=0)||(message.indexOf("Chiranjeevi")>=0)){
		send_message('<img src="images/actors/39.jpg" height="70" width="70" align="right" /><h3>Chiranjeevi</h3><h5>Film actor</h5><p>Konidela Siva Sankara Vara Prasad, better known by his stage name Chiranjeevi, is an Indian film actor, dancer, producer, singer, voice artist, politician, businessman, investor and a member of the Indian National Congress.</p>');
		a165.play();
		}
		else{
		var a166 =document.createElement('audio');
	a166.setAttribute('src','audio/166.mp3');
		if((message.indexOf("Allu Arjun")>=0)||(message.indexOf("allu arjun")>=0)||(message.indexOf("Allu arjun")>=0)){
		send_message('<img src="images/actors/40.jpg" height="70" width="70" align="right" /><h3>Allu Arjun</h3><h5>Film actor</h5><p>Allu Arjun is an Indian film actor who primarily works in Tollywood. He has won four Filmfare Awards South, three Filmfare Best Telugu Actor Awards for Parugu, Vedam and Race Gurram, one Filmfare Best</p>');
		a166.play();
		}
		else{
		var a167 =document.createElement('audio');
	a167.setAttribute('src','audio/167.mp3');
		if((message.indexOf("Prabhas")>=0)||(message.indexOf("prabhas")>=0)||(message.indexOf("Prabhas")>=0)){
		send_message('<img src="images/actors/41.jpg" height="70" width="70" align="right" /><h3>Prabhas</h3><h5>Film actor</h5><p>Prabhas is an Indian film actor known for his works in Telugu cinema. Prabhas is the nephew of veteran Telugu actor Krishnam Raju. Prabhas made his film debut with the 2002 drama film, Eshwar.</p>');
		a167.play();
		}
		else{
		var a168 =document.createElement('audio');
	a168.setAttribute('src','audio/168.mp3');
		if((message.indexOf("Vikram")>=0)||(message.indexOf("vikram")>=0)||(message.indexOf("Vikram")>=0)){
		send_message('<img src="images/actors/42.jpg" height="70" width="70" align="right" /><h3>Vikram</h3><h5>Film actor</h5><p>Kennedy John Victor, known professionally as Vikram or Chiyaan Vikram, is an Indian film actor who predominantly appears in Tamil language films and has won seven Filmfare Awards as well as one National</p>');
		a168.play();
		}
		else{
		var a169 =document.createElement('audio');
	a169.setAttribute('src','audio/169.mp3');
		if((message.indexOf("Dhanush")>=0)||(message.indexOf("dhanush")>=0)||(message.indexOf("Dhanush")>=0)){
		send_message('<img src="images/actors/43.jpg" height="70" width="70" align="right" /><h3>Dhanush</h3><h5>Film actor</h5><p>Venkatesh Prabhu, known by his stage name Dhanush, is an Indian film actor, director, producer, writer, lyricist, and playback singer best known for his work in Tamil cinema.</p>');
		a169.play();
		}
		else{
		var a170 =document.createElement('audio');
	a170.setAttribute('src','audio/170.mp3');
		if((message.indexOf("Ram Charan")>=0)||(message.indexOf("ram charan")>=0)||(message.indexOf("Ram charan")>=0)){
		send_message('<img src="images/actors/44.jpg" height="70" width="70" align="right" /><h3>Ram Charan</h3><h5>Film actor</h5><p>Ram Charan is an Indian film actor, dancer, producer, businessman and entrepreneur, who works in Telugu cinema. He won two Nandi Awards, two South Filfare awards, two CineMAA Awards, and two Santosham Best Actor Awards. </p>');
		a170.play();
		}
		else{
		var a171 =document.createElement('audio');
	a171.setAttribute('src','audio/171.mp3');
		if((message.indexOf("Junior NTR")>=0)||(message.indexOf("junior ntr")>=0)||(message.indexOf("Junior ntr")>=0)){
		send_message('<img src="images/actors/45.jpg" height="70" width="70" align="right" /><h3>N. T. Rama Rao Jr.</h3><h5>Film actor</h5><p>Nandamuri Taraka Rama Rao Jr., also known as Jr. NTR, is an Indian film actor, Kuchipudi dancer, and playback singer known for his works in Telugu cinema.</p>');
		a171.play();
		}
		else{
		var a172 =document.createElement('audio');
	a172.setAttribute('src','audio/172.mp3');
		if((message.indexOf("Suriya")>=0)||(message.indexOf("suriya")>=0)||(message.indexOf("Suriya")>=0)){
		send_message('<img src="images/actors/46.jpg" height="70" width="70" align="right" /><h3>Suriya</h3><h5>Film actor</h5><p>Saravanan Sivakumar, known by his stage name Suriya, is an Indian film actor, producer and television presenter, best known for his work in Tamil cinema.</p>');
		a172.play();
		}
		else{
		var a173 =document.createElement('audio');
	a173.setAttribute('src','audio/173.mp3');
		if((message.indexOf("Mahesh Babu")>=0)||(message.indexOf("mahesh babu")>=0)||(message.indexOf("Mahesh babu")>=0)){
		send_message('<img src="images/actors/47.jpg" height="70" width="70" align="right" /><h3>Mahesh Babu</h3><h5>Film actor</h5><p>Mahesh Babu is an Indian actor, producer, media personality, and philanthropist known for his works in Telugu cinema. He owns the production house G. Mahesh Babu Entertainment Pvt. Ltd.</p>');
		a173.play();
		}
		else{
		var a174 =document.createElement('audio');
	a174.setAttribute('src','audio/174.mp3');
		if((message.indexOf("Pawan Kalyan")>=0)||(message.indexOf("pawan kalyan")>=0)||(message.indexOf("Pawan kalyan")>=0)){
		send_message('<img src="images/actors/48.jpg" height="70" width="70" align="right" /><h3>Pawan Kalyan</h3><h5>Film actor</h5><p>Konidela Kalyan Babu, better known by his stage name Pawan Kalyan, is an Indian film actor, producer, director, screenwriter, writer, and politician.</p>');
		a174.play();
		}
		else{
		var a175 =document.createElement('audio');
	a175.setAttribute('src','audio/175.mp3');
		if((message.indexOf("Nawazuddin Siddiqui")>=0)||(message.indexOf("nawazuddin siddiqui")>=0)||(message.indexOf("Nawazuddin siddiqui")>=0)){
		send_message('<img src="images/actors/49.jpg" height="70" width="70" align="right" /><h3>Nawazuddin Siddiqui</h3><h5>Film actor</h5><p>Nawazuddin Siddiqui is an Indian film actor who works in Hindi cinema. After a period of less significant performances in his early career, he received the Special Jury Award at the 2012 National Film</p>');
		a175.play();
		}
		else{
		var a176 =document.createElement('audio');
	a176.setAttribute('src','audio/176.mp3');
		if((message.indexOf("Paresh Rawal")>=0)||(message.indexOf("paresh rawal")>=0)||(message.indexOf("Paresh rawal")>=0)){
		send_message('<img src="images/actors/50.jpg" height="70" width="70" align="right" /><h3>Paresh Rawal</h3><h5>Film actor</h5><p>Paresh Rawal is an Indian film actor, thespian and politician known for his works notably in Bollywood. He is currently a member of the Lok Sabha of the Indian Parliament belonging to the Bharatiya Janata Party.</p>');
		a176.play();
		}
		else{
		var a177 =document.createElement('audio');
	a177.setAttribute('src','audio/177.mp3');
		if((message.indexOf("Tiger Shroff")>=0)||(message.indexOf("tiger shroff")>=0)||(message.indexOf("Tiger shroff")>=0)){
		send_message('<img src="images/actors/51.jpg" height="70" width="70" align="right" /><h3>Tiger Shroff</h3><h5>Film actor</h5><p>Tiger Shroff is an Indian film actor and martial artist who works in Hindi films. Son of actor Jackie Shroff and producer Ayesha Dutt, he made his film debut with a leading role in the 2014 action comedy</p>');
		a177.play();
		}
		else{
		var a178 =document.createElement('audio');
	a178.setAttribute('src','audio/178.mp3');
		if((message.indexOf("Sushant Singh Rajput")>=0)||(message.indexOf("sushant singh rajput")>=0)||(message.indexOf("Sushant singh rajput")>=0)){
		send_message('<img src="images/actors/52.jpg" height="70" width="70" align="right" /><h3>Sushant Singh Rajput</h3><h5>Film actor</h5><p>Sushant Singh Rajput is an Indian film and television actor. He started his career with television serials, including an award-winning performance in the soap opera Pavitra Rishta and as a participant in two dance reality shows.</p>');
		a178.play();
		}
		else{
		var a179 =document.createElement('audio');
	a179.setAttribute('src','audio/179.mp3');
		if((message.indexOf("Sharad Kelkar")>=0)||(message.indexOf("sharad kelkar")>=0)||(message.indexOf("Sharad kelkar")>=0)){
		send_message('<img src="images/actors/53.jpg" height="70" width="70" align="right" /><h3>Sharad Kelkar</h3><h5>Film actor</h5><p>Sharad Kelkar is a popular Indian Bollywood and Indian television celebrity. He started his career as a gym instructor followed by modeling then he made his first television debut through Aakrosh which was aired on Doordarshan back in 1980s.</p>');
		a179.play();
		}
		else{
		var a180 =document.createElement('audio');
	a180.setAttribute('src','audio/180.mp3');
		if((message.indexOf("Ram Kapoor")>=0)||(message.indexOf("ram kapoor")>=0)||(message.indexOf("Ram kapoor")>=0)){
		send_message('<img src="images/actors/54.jpg" height="70" width="70" align="right" /><h3>Ram Kapoor</h3><h5>Film actor</h5><p>Ram Kapoor is an Indian television actor. He portrayed Jai Walia in Kasamh Se, the character Ram Kapoor in Bade Achhe Lagte Hain, and hosted Rakhi Ka Swayamwar. He won the Indian Telly Awards for best actor consecutively.</p>');
		a180.play();
		}
		else{
		var a181 =document.createElement('audio');
	a181.setAttribute('src','audio/181.mp3');
		if((message.indexOf("Rohit Roy")>=0)||(message.indexOf("rohit roy")>=0)||(message.indexOf("Rohit roy")>=0)){
		send_message('<img src="images/actors/55.jpg" height="70" width="70" align="right" /><h3>Rohit Roy</h3><h5>Film actor</h5><p>Rohit Roy is an Indian television star, known for his role in Hindi television serials such as Des Mein Niklla Hoga Chand and Swabhimaan.</p>');
		a181.play();
		}
		else{
		var a182 =document.createElement('audio');
	a182.setAttribute('src','audio/182.mp3');
		if((message.indexOf("Kapil Sharma")>=0)||(message.indexOf("kapil sharma")>=0)||(message.indexOf("Kapil sharma")>=0)){
		send_message('<img src="images/actors/56.jpg" height="70" width="70" align="right" /><h3>Kapil Sharma</h3><h5>Stand-up comedian</h5><p>Kapil Sharma is an Indian stand-up comedian, television presenter and actor. He hosted a television comedy show Comedy Nights with Kapil from June 2013 to January 2016.</p>');
		a182.play();
		}
		else{
		var a183 =document.createElement('audio');
	a183.setAttribute('src','audio/183.mp3');
		if((message.indexOf("Farhan Akhtar")>=0)||(message.indexOf("farhan akhtar")>=0)||(message.indexOf("Farhan akhtar")>=0)){
		send_message('<img src="images/actors/57.jpg" height="70" width="70" align="right" /><h3>Farhan Akhtar</h3><h5>Film actor</h5><p>Farhan Akhtar is an Indian film director, screenwriter, producer, actor, playback singer, lyricist and television host. Born in Mumbai to screenwriters Javed Akhtar and Honey Irani, he grew up under the influence of the Hindi film industry.</p>');
		a183.play();
		}
		else{
		var a184 =document.createElement('audio');
	a184.setAttribute('src','audio/184.mp3');
		if((message.indexOf("Dilip Joshi")>=0)||(message.indexOf("dilip joshi")>=0)||(message.indexOf("Dilip joshi")>=0)){
		send_message('<img src="images/actors/58.jpg" height="70" width="70" align="right" /><h3>Dilip Joshi</h3><h5>Film actor</h5><p>Dilip Joshi is an Indian film and television actor. He has appeared in a number of serials as well as films. He acts mostly in comedy and is currently playing the role of Jethalal Champaklal Gada in Taarak Mehta Ka Ooltah Chashmah.</p>');
		a184.play();
		}
		else{
		var a185 =document.createElement('audio');
	a185.setAttribute('src','audio/185.mp3');
		if((message.indexOf("Shailesh Lodha")>=0)||(message.indexOf("shailesh lodha")>=0)||(message.indexOf("Shailesh lodha")>=0)){
		send_message('<img src="images/actors/59.jpg" height="70" width="70" align="right" /><h3>Shailesh Lodha</h3><h5>Actor</h5><p>Shailesh Lodha is an Indian actor, comedian and writer. He is widely recognized for his role of Taarak Mehta in the Indias longest running sitcom serial Taarak Mehta Ka Ooltah Chashmah, which he is portraying since July 2008.</p>');
		a185.play();
		}
		else{
		var a186 =document.createElement('audio');
	a186.setAttribute('src','audio/186.mp3');
		if((message.indexOf("Priyanka Chopra")>=0)||(message.indexOf("priyanka chopra")>=0)||(message.indexOf("Priyanka chopra")>=0)){
		send_message('<img src="images/actors/60.jpg" height="70" width="70" align="right" /><h3>Priyanka Chopra</h3><h5>Film actress</h5><p>Priyanka Chopra is an Indian actress, singer, film producer, philanthropist, and the winner of the Miss World 2000 pageant.</p>');
		a186.play();
		}
		else{
		var a187 =document.createElement('audio');
	a187.setAttribute('src','audio/187.mp3');
		if((message.indexOf("Deepika Padukone")>=0)||(message.indexOf("deepika padukone")>=0)||(message.indexOf("Deepika padukone")>=0)){
		send_message('<img src="images/actors/61.jpg" height="70" width="70" align="right" /><h3>Deepika Padukone</h3><h5>Film actress</h5><p>Deepika Padukone is an Indian film actress. She is one of the highest-paid actresses in India and is cited in the media as one of the nations most popular and attractive personalities.</p>');
		a187.play();
		}
		else{
		var a188 =document.createElement('audio');
	a188.setAttribute('src','audio/188.mp3');
		if((message.indexOf("Kareena Kapoor")>=0)||(message.indexOf("kareena kapoor")>=0)||(message.indexOf("Kareena kapoor")>=0)){
		send_message('<img src="images/actors/62.jpg" height="70" width="70" align="right" /><h3>Kareena Kapoor</h3><h5>Film actress</h5><p>Kareena Kapoor, also known by her married name Kareena Kapoor Khan, is an Indian actress who appears in Hindi films. She is the daughter of actors Randhir Kapoor and Babita, and the younger sister of actress Karisma Kapoor.</p>');
		a188.play();
		}
		else{
		var a189 =document.createElement('audio');
	a189.setAttribute('src','audio/189.mp3');
		if((message.indexOf("Aishwarya Rai")>=0)||(message.indexOf("aishwarya rai")>=0)||(message.indexOf("Aishwarya rai")>=0)){
		send_message('<img src="images/actors/63.jpg" height="70" width="70" align="right" /><h3>Aishwarya Rai</h3><h5>Film actress</h5><p>Aishwarya Rai, also known by her married name Aishwarya Rai Bachchan, is an Indian actress, model and the winner of the Miss World 1994 pageant.</p>');
		a189.play();
		}
		else{
		var a190 =document.createElement('audio');
	a190.setAttribute('src','audio/190.mp3');
		if((message.indexOf("Katrina Kaif")>=0)||(message.indexOf("katrina kaif")>=0)||(message.indexOf("Katrina kaif")>=0)){
		send_message('<img src="images/actors/64.jpg" height="70" width="70" align="right" /><h3>Katrina Kaif</h3><h5>Film actress</h5><p>Katrina Kaif is a British film actress and model. Primarily known for her work in Hindi films, Kaif has also appeared in Telugu and Malayalam films.</p>');
		a190.play();
		}
		else{
		var a191 =document.createElement('audio');
	a191.setAttribute('src','audio/191.mp3');
		if((message.indexOf("Anushka Sharma")>=0)||(message.indexOf("anushka sharma")>=0)||(message.indexOf("Anushka sharma")>=0)){
		send_message('<img src="images/actors/65.jpg" height="70" width="70" align="right" /><h3>Anushka Sharma</h3><h5>Film actress</h5><p>Anushka Sharma is an Indian film actress, producer and model. She has established a career in Hindi films, and is one of the most popular and highest-paid actresses in India. </p>');
		a191.play();
		}
		else{
		var a192 =document.createElement('audio');
	a192.setAttribute('src','audio/192.mp3');
		if((message.indexOf("Kangana Ranaut")>=0)||(message.indexOf("kangana ranaut")>=0)||(message.indexOf("Kangana ranaut")>=0)){
		send_message('<img src="images/actors/66.jpg" height="70" width="70" align="right" /><h3>Kangana Ranaut</h3><h5>Film actress</h5><p>Kangana Ranaut is an Indian film actress. She has established a career in Bollywood and is one of the highest-paid actresses in India. </p>');
		a192.play();
		}
		else{
		var a193 =document.createElement('audio');
	a193.setAttribute('src','audio/193.mp3');
		if((message.indexOf("Sonakshi Sinha")>=0)||(message.indexOf("sonakshi sinha")>=0)||(message.indexOf("Sonakshi sinha")>=0)){
		send_message('<img src="images/actors/67.jpg" height="70" width="70" align="right" /><h3>Sonakshi Sinha</h3><h5>Film actress</h5><p>Sonakshi Sinha is an Indian actress. She is daughter of actors Shatrughan and Poonam. After working as a costume designer in her early career, Sonakshi made her debut in action-drama film Dabangg </p>');
		a193.play();
		}
		else{
		var a194 =document.createElement('audio');
	a194.setAttribute('src','audio/194.mp3');
		if((message.indexOf("Alia Bhatt")>=0)||(message.indexOf("alia bhatt")>=0)||(message.indexOf("Alia bhatt")>=0)){
		send_message('<img src="images/actors/68.jpg" height="70" width="70" align="right" /><h3>Alia Bhatt</h3><h5>Film actress</h5><p>Alia Bhatt is a British film actress and singer who works in Bollywood. Born into the Bhatt family, she is the daughter of filmmaker Mahesh Bhatt and actress Soni Razdan, and the cousin of actor Emraan Hashmi.</p>');
		a194.play();
		}
		else{
		var a195 =document.createElement('audio');
	a195.setAttribute('src','audio/195.mp3');
		if((message.indexOf("Vidya Balan")>=0)||(message.indexOf("vidya balan")>=0)||(message.indexOf("Vidya balan")>=0)){
		send_message('<img src="images/actors/69.jpg" height="70" width="70" align="right" /><h3>Vidya Balan</h3><h5>Film actress</h5><p>Vidya Balan is an Indian actress. She has established a career in Bollywood and is the recipient of several awards, including a National Film Award, five Filmfare Awards, and five Screen Awards</p>');
		a195.play();
		}
		else{
		var a195 =document.createElement('audio');
	a195.setAttribute('src','audio/195.mp3');
		if((message.indexOf("Vidya Balan")>=0)||(message.indexOf("vidya balan")>=0)||(message.indexOf("Vidya balan")>=0)){
		send_message('<img src="images/actors/69.jpg" height="70" width="70" align="right" /><h3>Vidya Balan</h3><h5>Film actress</h5><p>Vidya Balan is an Indian actress. She has established a career in Bollywood and is the recipient of several awards, including a National Film Award, five Filmfare Awards, and five Screen Awards</p>');
		a195.play();
		}
		else{
		var a196 =document.createElement('audio');
	a196.setAttribute('src','audio/196.mp3');
		if((message.indexOf("Madhuri Dixit")>=0)||(message.indexOf("madhuri dixit")>=0)||(message.indexOf("Madhuri dixit")>=0)){
		send_message('<img src="images/actors/70.jpg" height="70" width="70" align="right" /><h3>Madhuri Dixit</h3><h5>Film actress</h5><p>Madhuri Dixit, also known by her married name Madhuri Dixit Nene, is an Indian actress who is known for her work in Hindi cinema.</p>');
		a196.play();
		}
		else{
		var a197 =document.createElement('audio');
	a197.setAttribute('src','audio/197.mp3');
		if((message.indexOf("Sonam Kapoor")>=0)||(message.indexOf("sonam kapoor")>=0)||(message.indexOf("Sonam kapoor")>=0)){
		send_message('<img src="images/actors/71.jpg" height="70" width="70" align="right" /><h3>Sonam Kapoor</h3><h5>Film actress</h5><p>Sonam Kapoor is an Indian actress who appears in Bollywood films. Kapoor is one of the highest-paid actresses in the industry. She has been nominated for four Filmfare Awards.</p>');
		a197.play();
		}
		else{
		var a198 =document.createElement('audio');
	a198.setAttribute('src','audio/198.mp3');
		if((message.indexOf("Sharmila Tagore")>=0)||(message.indexOf("sharmila tagore")>=0)||(message.indexOf("Sharmila tagore")>=0)){
		send_message('<img src="images/actors/72.jpg" height="70" width="70" align="right" /><h3>Sharmila Tagore</h3><h5>Film actress</h5><p>Sharmila Tagore is an Indian film actress known for her works predominantly in Hindi cinema. She has received two National Film Awards and two Filmfare Awards for her performances. </p>');
		a198.play();
		}
		else{
		var a199 =document.createElement('audio');
	a199.setAttribute('src','audio/199.mp3');
		if((message.indexOf("Shraddha Kapoor")>=0)||(message.indexOf("shraddha kapoor")>=0)||(message.indexOf("Shraddha kapoor")>=0)){
		send_message('<img src="images/actors/73.jpg" height="70" width="70" align="right" /><h3>Shraddha Kapoor</h3><h5>Film actress</h5><p>Shraddha Kapoor is an Indian actress, singer and lyricist who is noted for her contribution in Bollywood films. She is regarded as one of the most popular celebrities in India. </p>');
		a199.play();
		}
		else{
		var a200 =document.createElement('audio');
	a200.setAttribute('src','audio/200.mp3');
		if((message.indexOf("Parineeti Chopra")>=0)||(message.indexOf("parineeti chopra")>=0)||(message.indexOf("Parineeti chopra")>=0)){
		send_message('<img src="images/actors/74.jpg" height="70" width="70" align="right" /><h3>Parineeti Chopra</h3><h5>Film actress</h5><p>Parineeti Chopra is an Indian actress who appears in Hindi films. She has received several awards and nominations, including a Filmfare and National Film Award. </p>');
		a200.play();
		}
		else{
		var a201 =document.createElement('audio');
	a201.setAttribute('src','audio/201.mp3');
		if((message.indexOf("Bipasha Basu")>=0)||(message.indexOf("bipasha basu")>=0)||(message.indexOf("Bipasha basu")>=0)){
		send_message('<img src="images/actors/75.jpg" height="70" width="70" align="right" /><h3>Bipasha Basu</h3><h5>Film actress</h5><p>Bipasha Basu, also known by her married name Bipasha Basu Singh Grover, is an Indian film actress and model. Primarily known for her work in Hindi films, she has also appeared in Tamil, Telugu, Bengali and English language films.</p>');
		a201.play();
		}
		else{
		var a202 =document.createElement('audio');
	a202.setAttribute('src','audio/202.mp3');
		if((message.indexOf("Jacqueline Fernandez")>=0)||(message.indexOf("jacqueline fernandez")>=0)||(message.indexOf("Jacqueline fernandez")>=0)){
		send_message('<img src="images/actors/76.jpg" height="70" width="70" align="right" /><h3>Jacqueline Fernandez</h3><h5>Film actress</h5><p>Jacqueline Fernandez is a Sri Lankan actress, model, and the winner of the 2006 Miss Universe Sri Lanka pageant. As Miss Universe Sri Lanka she represented her country at the 2006 world Miss Universe pageant.</p>');
		a202.play();
		}
		else{
		var a203 =document.createElement('audio');
	a203.setAttribute('src','audio/203.mp3');
		if((message.indexOf("Preity Zinta")>=0)||(message.indexOf("preity zinta")>=0)||(message.indexOf("Preity zinta")>=0)){
		send_message('<img src="images/actors/77.jpg" height="70" width="70" align="right" /><h3>Preity Zinta</h3><h5>Film actress</h5><p>Preity Zinta is an Indian film actress. She has appeared in Hindi films of Bollywood, as well as Telugu, Punjabi and English language films.</p>');
		a203.play();
		}
		else{
		var a204 =document.createElement('audio');
	a204.setAttribute('src','audio/204.mp3');
		if((message.indexOf("Nargis Fakhri")>=0)||(message.indexOf("nargis fakhri")>=0)||(message.indexOf("Nargis fakhri")>=0)){
		send_message('<img src="images/actors/78.jpg" height="70" width="70" align="right" /><h3>Nargis Fakhri</h3><h5>Film actress</h5><p>Nargis Fakhri is an American model and actress, who mainly appears in Hindi films. Fakhri began her career as a model and appeared as a contestant in the The CW series Americas Next Top Model.</p>');
		a204.play();
		}
		else{
		var a205 =document.createElement('audio');
	a205.setAttribute('src','audio/205.mp3');
		if((message.indexOf("Huma Qureshi")>=0)||(message.indexOf("huma qureshi")>=0)||(message.indexOf("Huma qureshi")>=0)){
		send_message('<img src="images/actors/79.jpg" height="70" width="70" align="right" /><h3>Huma Qureshi</h3><h5>Film actress</h5><p>Huma Saleem Qureshi is an Indian film actress and model, who has received three Filmfare Award nominations. Qureshi obtained a bachelors degree in History Honours from the University of Delhi, She worked as a theatre actor and model</p>');
		a205.play();
		}
		else{
		var a206 =document.createElement('audio');
	a206.setAttribute('src','audio/206.mp3');
		if((message.indexOf("Ileana Dcruz")>=0)||(message.indexOf("ileana dcruz")>=0)||(message.indexOf("Ileana dcruz")>=0)){
		send_message('<img src="images/actors/80.jpg" height="70" width="70" align="right" /><h3>Ileana DCruz</h3><h5>Film actress</h5><p>Ileana DCruz is an Indian film actress, who predominantly appears in Telugu cinema and Bollywood. She won the Filmfare Award for Best Female Debut – South for the 2006 Telugu film Devadasu.</p>');
		a206.play();
		}
		else{
		var a207 =document.createElement('audio');
	a207.setAttribute('src','audio/207.mp3');
		if((message.indexOf("Mallika Sherawat")>=0)||(message.indexOf("mallika sherawat")>=0)||(message.indexOf("Mallika sherawat")>=0)){
		send_message('<img src="images/actors/81.jpg" height="70" width="70" align="right" /><h3>Mallika Sherawat</h3><h5>Film actress</h5><p>Mallika Sherawat is an Indian actress who works in Hindi, English and Chinese language films. Known for her bold onscreen attitude in films like Khwahish and Murder, Sherawat has established herself as</p>');
		a207.play();
		}
		else{
		var a208 =document.createElement('audio');
	a208.setAttribute('src','audio/208.mp3');
		if((message.indexOf("Sunny Leone")>=0)||(message.indexOf("sunny leone")>=0)||(message.indexOf("Sunny leone")>=0)){
		send_message('<img src="images/actors/82.jpg" height="70" width="70" align="right" /><h3>Sunny Leone</h3><h5>Film actress</h5><p>Karenjit Kaur Vohra, better known by her stage name "Sunny Leone", is an Indian Canadian actress and model, and former pornstar, also possessing American citizenship. She has also used the stage name Karen Malhotra.</p>');
		a208.play();
		}
		else{
		var a209 =document.createElement('audio');
	a209.setAttribute('src','audio/209.mp3');
		if((message.indexOf("Yami Gautam")>=0)||(message.indexOf("yami gautam")>=0)||(message.indexOf("Yami gautam")>=0)){
		send_message('<img src="images/actors/83.jpg" height="70" width="70" align="right" /><h3>Yami Gautam</h3><h5>Film actress</h5><p>Yami Gautam is an Indian film actress and model who predominantly appears in Hindi and Telugu films. She has also appeared in a few Tamil, Kannada, Malayalam and Punjabi films.</p>');
		a209.play();
		}
		else{
		var a210 =document.createElement('audio');
	a210.setAttribute('src','audio/210.mp3');
		if((message.indexOf("Shilpa Shetty")>=0)||(message.indexOf("shilpa shetty")>=0)||(message.indexOf("Shilpa shetty")>=0)){
		send_message('<img src="images/actors/84.jpg" height="70" width="70" align="right" /><h3>Shilpa Shetty</h3><h5>Film actress</h5><p>Shilpa Shetty, also known by her married name Shilpa Shetty Kundra, is an Indian film actress, producer, former model and the winner of the British reality television series Celebrity Big Brother 5</p>');
		a210.play();
		}
		else{
		var a211 =document.createElement('audio');
	a211.setAttribute('src','audio/211.mp3');
		if((message.indexOf("Geeta Kapoor")>=0)||(message.indexOf("geeta kapoor")>=0)||(message.indexOf("Geeta kapoor")>=0)){
		send_message('<img src="images/actors/85.jpg" height="70" width="70" align="right" /><h3>Geeta Kapoor</h3><h5>Film actress</h5><p>Geeta Kapoor is an Indian choreographer in Hindi films, and is one of the judges for the Indian reality dance talent show Dance India Dance.</p>');
		a211.play();
		}
		else{
		var a212 =document.createElement('audio');
	a212.setAttribute('src','audio/212.mp3');
		if((message.indexOf("Kriti Sanon")>=0)||(message.indexOf("kriti sanon")>=0)||(message.indexOf("Kriti sanon")>=0)){
		send_message('<img src="images/actors/86.jpg" height="70" width="70" align="right" /><h3>Kriti Sanon</h3><h5>Film actress</h5><p>Kriti Sanon is an Indian model and film actress. After beginning with modelling, she made her acting debut with Sukumars Telugu psychological thriller film 1: Nenokkadine.</p>');
		a212.play();
		}
		else{
		var a213 =document.createElement('audio');
	a213.setAttribute('src','audio/213.mp3');
		if((message.indexOf("Shirley Setia")>=0)||(message.indexOf("shirley setia")>=0)||(message.indexOf("Shirley setia")>=0)){
		send_message('<img src="images/actors/87.jpg" height="70" width="70" align="right" /><h3>Shirley Setia</h3><h5>Singer</h5><p>Shirley Setia is an Indo-Kiwi singer, performer from Auckland, New Zealand.Currently, a final year student at the University of Auckland and marketing and publicity intern at Auckland Council.</p>');
		a213.play();
		}
		else{
		var a214 =document.createElement('audio');
	a214.setAttribute('src','audio/214.mp3');
		if((message.indexOf("Anushka Shetty")>=0)||(message.indexOf("anushka shetty")>=0)||(message.indexOf("Anushka shetty")>=0)){
		send_message('<img src="images/actors/88.jpg" height="70" width="70" align="right" /><h3>Anushka Shetty</h3><h5>Film actress</h5><p>Sweety Shetty, better known by her stage name Anushka Shetty, is an Indian actress and model who works predominantly in Telugu and Tamil films. She made her acting debut through the 2005 Telugu film Super.</p>');
		a214.play();
		}
		else{
		var a215 =document.createElement('audio');
	a215.setAttribute('src','audio/215.mp3');
		if((message.indexOf("Kajal Aggarwal")>=0)||(message.indexOf("kajal aggarwal")>=0)||(message.indexOf("Kajal aggarwal")>=0)){
		send_message('<img src="images/actors/89.jpg" height="70" width="70" align="right" /><h3>Kajal Aggarwal</h3><h5>Film actress</h5><p>Kajal Aggarwal is an Indian film actress and model. One of the most popular Indian celebrities, she has established a career in the Telugu and Tamil film industries and has been nominated for four Filmfare Awards South.</p>');
		a215.play();
		}
		else{
		var a216 =document.createElement('audio');
	a216.setAttribute('src','audio/216.mp3');
		if((message.indexOf("Avneet Kaur")>=0)||(message.indexOf("avneet kaur")>=0)||(message.indexOf("Avneet kaur")>=0)){
		send_message('<img src="images/actors/90.jpg" height="70" width="70" align="right" /><h3>Avneet Kaur</h3><h5>Actress</h5><p>Avneet Kaur is an Indian actress and dancer. Kaur was born on 13 October 2001. in Jalandhar, Punjab, India. She completed her sixth class studies in 2013 at D.A.V. Public School,Jalandhar.</p>');
		a216.play();
		}
		else{
		var a217 =document.createElement('audio');
	a217.setAttribute('src','audio/217.mp3');
		if((message.indexOf("Nimrat Kaur")>=0)||(message.indexOf("nimrat kaur")>=0)||(message.indexOf("Nimrat kaur")>=0)){
		send_message('<img src="images/actors/91.jpg" height="70" width="70" align="right" /><h3>Nimrat Kaur</h3><h5>Film actress</h5><p>Nimrat Kaur is an Indian actress. She began her career as a print model and went on to act in theater. After brief appearances in a few films, Kaur starred in Anurag Kashyaps production Peddlers, which was screened at the 2012 Cannes Film Festival.</p>');
		a217.play();
		}
		else{
		var a218 =document.createElement('audio');
	a218.setAttribute('src','audio/218.mp3');
		if((message.indexOf("Pooja Hegde")>=0)||(message.indexOf("pooja hegde")>=0)||(message.indexOf("Pooja hegde")>=0)){
		send_message('<img src="images/actors/92.jpg" height="70" width="70" align="right" /><h3>Pooja Hegde</h3><h5>Film actress</h5><p>Pooja Hegde is an Indian model and actress. A former beauty pageant contestant, she was crowned as the second runner-up at the Miss Universe India 2010 competition, before going on to make her acting</p>');
		a218.play();
		}
		else{
		var a219 =document.createElement('audio');
	a219.setAttribute('src','audio/219.mp3');
		if((message.indexOf("Tamannaah")>=0)||(message.indexOf("tamannaah")>=0)||(message.indexOf("Tamannaah")>=0)){
		send_message('<img src="images/actors/93.jpg" height="70" width="70" align="right" /><h3>Tamannaah</h3><h5>Film actress</h5><p>Tamannaah Bhatia known as Tamannaah, is an Indian actress who predominantly appears in Telugu and Tamil films. She has also appeared in Hindi films. </p>');
		a219.play();
		}
		else{
		var a220 =document.createElement('audio');
	a220.setAttribute('src','audio/220.mp3');
		if((message.indexOf("Amy Jackson")>=0)||(message.indexOf("amy jackson")>=0)||(message.indexOf("Amy jackson")>=0)){
		send_message('<img src="images/actors/94.jpg" height="70" width="70" align="right" /><h3>Amy Jackson</h3><h5>Model</h5><p>Amy Louise Jackson is a British model and actress, who appears in Indian films, primarily in Tamil and few Hindi and Telugu films.</p>');
		a220.play();
		}
		else{
		var a221 =document.createElement('audio');
	a221.setAttribute('src','audio/221.mp3');
		if((message.indexOf("Divyanka Tripathi")>=0)||(message.indexOf("divyanka tripathi")>=0)||(message.indexOf("Divyanka tripathi")>=0)){
		send_message('<img src="images/actors/95.jpg" height="70" width="70" align="right" /><h3>Divyanka Tripathi</h3><h5>Actress</h5><p>Divyanka Tripathi Dahiya is an Indian actress who works in the Hindi television industry. Establishing herself as one of the most popular actresses in the industry, she rose to fame by playing a dual</p>');
		a221.play();
		}
		else{
		var a222 =document.createElement('audio');
	a222.setAttribute('src','audio/222.mp3');
		if((message.indexOf("Drashti Dhami")>=0)||(message.indexOf("drashti dhami")>=0)||(message.indexOf("Drashti dhami")>=0)){
		send_message('<img src="images/actors/96.jpg" height="70" width="70" align="right" /><h3>Drashti Dhami</h3><h5>Actress</h5><p>Drashti Dhami is an Indian television actress, model and dancer. She is recognized for her roles in the shows Dill Mill Gayye, Geet - Hui Sabse Parayi, Madhubala – Ek Ishq Ek Junoon and Ek Tha Raja Ek Thi Rani.</p>');
		a222.play();
		}
		else{
		var a223 =document.createElement('audio');
	a223.setAttribute('src','audio/223.mp3');
		if((message.indexOf("Mouni Roy")>=0)||(message.indexOf("mouni roy")>=0)||(message.indexOf("Mouni roy")>=0)){
		send_message('<img src="images/actors/97.jpg" height="70" width="70" align="right" /><h3>Mouni Roy</h3><h5>Actress</h5><p>Mouni Roy is an Indian television actress. One of the most popular actresses of Indian, she is primarily known for her roles as Krishnatulsi in Kyunki Saas Bhi Kabhi Bahu Thi, and Sati in Devon Ke </p>');
		a223.play();
		}
		else{
		var a224 =document.createElement('audio');
	a224.setAttribute('src','audio/224.mp3');
		if((message.indexOf("Sriti Jha")>=0)||(message.indexOf("sriti jha")>=0)||(message.indexOf("Sriti jha")>=0)){
		send_message('<img src="images/actors/98.jpg" height="70" width="70" align="right" /><h3>Sriti Jha</h3><h5>Actress</h5><p>Sriti Jha is an Indian television actress, who appears in the Indian soap opera. She made her debut with the role of Malini Sharma in the Disney Indias teen drama Dhoom Machaao Dhoom. </p>');
		a224.play();
		}
		else{
		var a225 =document.createElement('audio');
	a225.setAttribute('src','audio/225.mp3');
		if((message.indexOf("Jennifer Winget")>=0)||(message.indexOf("jennifer winget")>=0)||(message.indexOf("Jennifer winget")>=0)){
		send_message('<img src="images/actors/99.jpg" height="70" width="70" align="right" /><h3>Jennifer Winget</h3><h5>Film actress</h5><p>Jennifer Winget is an Indian actress. She has appeared in various Indian TV shows. </p>');
		a225.play();
		}
		else{
		if((message.indexOf("Sachin Seth")>=0)||(message.indexOf("sachin seth")>=0)||(message.indexOf("Sachin seth")>=0)){
		send_message('<img src="images/actors/101.jpg" height="70" width="70" align="right" /><h3>Sachin Seth</h3><h5>Co-Founder of Chek</h5><p>Mr. Sachin Seth is Co-Founder of Chek, He is a Programmer.</p>');
		}
		else{
		send_message(window.open("http://www.google.co.in/search?sclient=psy-ab&site=&source=hp&q="+message,"_self"));
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
	}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
		}
	}
		}
		}
		}
		}
		}
		}
		}
	  }
	  }
	  }
	  }
	  }
	  }
	  }
	  }
	  }
	  }
	  }
	  }
	  }
	  }
	  }
	  }
	  }
	  }
	  }
	  }
	  }
	  }
	  }
	  }
	
	
	
	
	
	 $(function(){
	 
		get_username();
	
	      $("#textbox").keypress(function(event){
	              if( event.which == 13){
	                 if( $("#enter").prop("checked") ){
	  
	                      $("#send").click();
		                  event.preventDefault();
	                    } 
	                }
	 
	        });
			
			$("#send").click(function(){
			
				var username = "<span class ='username'></span>";			  
			  var newMessage = $("#textbox").val();
	
			  $("#textbox").val("");
			  
			  
			  
			  var prevState = $("#container").html();
			  
			  if(prevState.length >3){
				prevState = prevState +"<br>";
			  }
			  
			  $("#container").html(prevState +"<br>"+ username + "<span class='username1'>" + newMessage + "</span>");
			  

			  /*$("#container").scrollTop($("#container").prop("scrollHeight"));*/
			  
			  ai(newMessage);
			  
			});
	    });
		