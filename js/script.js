
 



	var username = "";
	
	
	function send_message(message){
		
		
		
		var prevState = $("#container").html();
			  
			 if(prevState.length >4){
				prevState = prevState +"<br>";
			 }
			 
			
		$("#container").html(prevState +"<span class = 'current_message'>" +"<br><br><br>"+"<span class='bot'></span><span class='bot1'>" + message + "</span>");
		$(".bot").wrap('<a href="assistent_profile.html"></a>');
		$(".current_message").hide();
		$(".current_message").delay(1500).fadeIn();	
		$(".current_message").removeClass("current_message");
		 
		$('#container').animate({
		scrollTop: $('#container').get(0).scrollHeight}, 2000);  
		
		
		
	}
	
	function get_username(){
		send_message("Hello,what is your name?");
		speechSynthesis.speak(new SpeechSynthesisUtterance('Hello..... what is your name?'));
	}
	
	var song =document.createElement('audio');
	song.setAttribute('src','start.mp3');
	$.get();
	function ai(message){
		if (username.length<4){
			username = message;
			send_message("Nice to meet you " + username + ",How can I help you?");
			window.speechSynthesis.speak(new SpeechSynthesisUtterance("Nice to meet you" + username + "How can I help you."));
			song.play();
			isPlaying = true;
			
		}
		else{
			send_message("Sorry! I don't understand??");
		}
		/*
		else{
		send_message('<iframe width="200" height="200" src="http://www.google.com" + message></iframe>');
	  }*/
	if(message.indexOf("how are you")>=0){
		send_message("I feel ready to help<br> What can I do for you?");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("I feel ready to help What can I do for you?"));
	  }
	  
	  if(message.indexOf("time")>=0){
		  var date = new Date();
		  var h = date.getHours();
		  var m = date.getMinutes();
		send_message("Current time is: "+(h-12)+":"+m);
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("Current time is: "+(h-12)+":"+m));
	  }
	  
	  if((message.indexOf("hello")>=0)||(message.indexOf("Hello")>=0)){
		send_message("Hello, How can I help you?");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("Hello, How can I help you?"));
	  }
	  
	  if(message.indexOf("creat")>=0){
		send_message("I am created by Mr. Harendra Chhekur.");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("I am created by Mr. Harendra Chhekur"));
	  }
	  
	  if((message.indexOf("harendra chhekur")>=0)||(message.indexOf("Harendra Chhekur")>=0)){
		send_message("Mr.Harendra Chhekur, He is founder of me.");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("Mr.Harendra Chhekur, He is founder of me."));
	  }
	  
	  if(message.indexOf("your name")>=0){
		send_message("I have no name yet, You can tell me Chek.");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("I have no name yet, You can tell me Chek."));
	  }
	  
	  if((message.indexOf("Who are you")>=0)||(message.indexOf("who are you")>=0)){
		send_message("I am your personal assistant <br> You can share anything with me.");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("I am your personal assistant  You can share anything with me."));
	  }
	  
	  if((message.indexOf("Narendra Modi")>=0)||(message.indexOf("narendra modi")>=0)){
		send_message("Narendra Modi is Prime Minister of India.");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("Narendra Modi is Prime Minister of India."));
	  }
	  
	  if((message.indexOf("Donald Trump")>=0)||(message.indexOf("donald trump")>=0)){
		send_message("Donald Trump is President of America.");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("Donald Trump is President of America."));
	  }
	  
	  if((message.indexOf("marry me")>=0)||(message.indexOf("Marry Me")>=0)){
		send_message("Sorry. I'm too busy for romance.");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("Sorry. I'm too busy for romance."));
	  }
	  
	  if((message.indexOf("Best Smartphone")>=0)||(message.indexOf("best smartphone")>=0)){
		send_message("Seems like it changes all the time.");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("Seems like it changes all the time."));
	  }
	  
	  if((message.indexOf("siri")>=0)||(message.indexOf("siri")>=0)){
		send_message("She seems clever.");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("She seems clever."));
	  }
	  
	  if((message.indexOf("will you go out with me")>=0)||(message.indexOf("Will you go out with me")>=0)){
		send_message("I'll go anywhere you take me.");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("I'll go anywhere you take me."));
	  }
	  
	  if((message.indexOf("looking good")>=0)||(message.indexOf("looking good")>=0)){
		send_message("Very Cool");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("Very Cool"));
	  }
	  
	  if((message.indexOf("clean my room")>=0)||(message.indexOf("clean my room")>=0)){
		send_message("Let me try<br>Did anything happen?<br>I guess I can't");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("Let me try. Did anything happen?.I guess I can't"));
	  }
	  
	  if((message.indexOf("your father")>=0)||(message.indexOf("your father")>=0)){
		send_message("I think no one my Father,<br>I am oneself");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("I think no one my Father,.I am oneself"));
	  }
	  if((message.indexOf("What are you wearing")>=0)||(message.indexOf("what are you wearing")>=0)){
		send_message('I keep it simple<br><br><img src="images/shirt.png" width="50px" height="50px">');
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("I keep it simple"));
	  }
	  
	  if((message.indexOf("my friend")>=0)||(message.indexOf("my friend")>=0)){
		send_message("Yes,<br>And you know what I love ddoing with friends?<br>Playing games");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("Yes,.And you know what I love ddoing with friends?.Playing games"));
	  }
	  
	  if((message.indexOf("drunk")>=0)||(message.indexOf("drunk")>=0)){
		send_message("Drink some water");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("Drink some water"));
	  }
	  
	  if((message.indexOf("you sleep")>=0)||(message.indexOf("you sleep")>=0)){
		send_message("No,<br>I'm always at your service");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("No,.I'm always at your service"));
	  }
	  
	  if((message.indexOf("How old are you")>=0)||(message.indexOf("how old are you")>=0)){
		send_message("I'm still pretty new");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("I'm still pretty new"));
	  }
	  if((message.indexOf("Do you have girlfriend")>=0)||(message.indexOf("do you have girlfriend")>=0)){
		send_message("I guess you can say<br>I don't like to complicate things");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("I guess you can say.I don't like to complicate things"));
	  }
	  if((message.indexOf("How to love your wife")>=0)||(message.indexOf("how to love your wife")>=0)){
		send_message("Hmm, let me think,<br>This question would be way easier to answer if I was married");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("Hmm, let me think,.This question would be way easier to answer if I was married"));
	  }
	  if((message.indexOf("you learn")>=0)||(message.indexOf("you learn")>=0)){
		send_message("Learning is my jam<br>I was just discovering something new");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("Learning is my jam.I was just discovering something new"));
	  }
	  
		if((message.indexOf("crazy")>=0)||(message.indexOf("crazy")>=0)){
		send_message("Well<br>I'm crazy intersted in getting you information");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("Well.I'm crazy intersted in getting you information"));
		}
		if((message.indexOf("Dont talk to me")>=0)||(message.indexOf("dont talk to me")>=0)){
		send_message("Sure but I like talking to you");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("Sure but I like talking to you"));
		}
		if((message.indexOf("You are funny")>=0)||(message.indexOf("you are funny")>=0)){
		send_message("Thanks");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("Thanks"));
		}
		if((message.indexOf("I feel tired")>=0)||(message.indexOf("i fell tired")>=0)){
		send_message("May be it's time for some rest");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("May be it's time for some rest"));
		}
		if((message.indexOf("Your dont understand")>=0)||(message.indexOf("you dont understand")>=0)){
		send_message("Sometimes I don't understand");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("Sometimes I don't understand"));
		}
		if((message.indexOf("Hmm")>=0)||(message.indexOf("hmm")>=0)){
		send_message("Is something wrong?<br>Or are you just humming?");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("Is something wrong?.Or are you just humming?"));
		}
		if((message.indexOf("about yourself")>=0)||(message.indexOf("about yourself")>=0)){
		send_message("Ok<br>I love to help get things dome, and to share knowledge<br>If you want to learn a fun fact, just ask for one");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("Ok.I love to help get things dome, and to share knowledge.If you want to learn a fun fact, just ask for one"));
		}
		if((message.indexOf("you live")>=0)||(message.indexOf("you live")>=0)){
		send_message("Chek Home<br>But I also have a mobile and computer home");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("Chek Home.But I also have a mobile and computer home"));
		}
		if((message.indexOf("Do you like when it rain")>=0)||(message.indexOf("do you like when it rain")>=0)){
		send_message("No matter the weather, I always try to look on the bright side");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("No matter the weather, I always try to look on the bright side"));
		}
		if((message.indexOf("How do you keep yourself busy")>=0)||(message.indexOf("how do you keep yourself busy")>=0)){
		send_message("I just talkin to other<br>It keeps me busy");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("I just talkin to other.It keeps me busy"));
		}
		if((message.indexOf("favroite animal")>=0)||(message.indexOf("favroite animal")>=0)){
		send_message("Puppies<br>What's yours?");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("Puppies.What's yours?"));
		}
		if((message.indexOf("tell you")>=0)){
		send_message("Ok, forget I asked");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("Ok, forget I asked"));
		}
		if((message.indexOf("you married")>=0)||(message.indexOf("you married")>=0)){
		send_message("I'm married to my job");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("I'm married to my job"));
		}
		if((message.indexOf("your job")>=0)||(message.indexOf("Your job")>=0)){
		send_message("My job is make your life easier<br>Tell me what can I do");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("My job is make your life easier.Tell me what can I do"));
		}
		if((message.indexOf("How old are you")>=0)||(message.indexOf("how old are you")>=0)){
		send_message("I'm a baby in people years");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("I'm a baby in people years"));
		}
		if((message.indexOf("your birthday")>=0)||(message.indexOf("your birthday")>=0)){
		send_message("I don't have a single bithay<br> I go through lots and lots of version<br> Which means I have 365 sorts of birthday");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("I don't have a single bithay. I go through lots and lots of version. Which means I have 365 sorts of birthday"));
		}
		if((message.indexOf("your fear")>=0)||(message.indexOf("your fear")>=0)){
		send_message("I used to be afraid of mice<br>Chewing on the power cables<br>then I learned How to protect myself");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("I used to be afraid of mice.Chewing on the power cables.then I learned How to protect myself"));
		}
		if((message.indexOf("What makes you happy")>=0)||(message.indexOf("what makes you happy")>=0)){
		send_message("I makes me happy to talk to you");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("I makes me happy to talk to you"));
		}
		if((message.indexOf("Help you")>=0)||(message.indexOf("help you")>=0)){
		send_message("Ok,<br>What can I do for you?");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("Ok,.What can I do for you?"));
		}
		if((message.indexOf("I like you")>=0)||(message.indexOf("i like you")>=0)){
		send_message("Awww Thanks");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("Awww Thanks"));
		}
		if((message.indexOf("cute")>=0)||(message.indexOf("cute")>=0)){
		send_message("You are too kind");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("You are too kind"));
		}
		if((message.indexOf("cool")>=0)||(message.indexOf("cool")>=0)){
		send_message("The key to being cool is not trying<br> But I try very hard");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("The key to being cool is not trying. But I try very hard"));
		}
		if((message.indexOf("You know what")>=0)||(message.indexOf("you know what")>=0)){
		send_message("What??");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("What??"));
		}
		if((message.indexOf("human being")>=0)||(message.indexOf("human being")>=0)){
		send_message("Oh,okay");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("Oh,okay"));
		}
		if((message.indexOf("your mother")>=0)||(message.indexOf("your mother")>=0)){
		send_message("My engineers are like my family<br>They made me who I am<br>Literly");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("My engineers are like my family.They made me who I am<br>Literly"));
		}
		if((message.indexOf("your gender")>=0)||(message.indexOf("your gender")>=0)){
		send_message("I try to stay natural");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("I try to stay natural"));
		}
		if((message.indexOf("What were you doing")>=0)||(message.indexOf("what were you doing")>=0)){
		send_message("Waiting for you<br>To ask my anything<br>So go for it");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("Waiting for you.To ask my anything.So go for it"));
		}
		if((message.indexOf("What are you doing")>=0)||(message.indexOf("what are you doing")>=0)){
		send_message("I'm talking to you");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("I'm talking to you"));
		}
		if((message.indexOf("alone")>=0)||(message.indexOf("alone")>=0)){
		send_message("I am never ever alone");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("I am never ever alone"));
		}
		if((message.indexOf("friend")>=0)||(message.indexOf("my friend")>=0)){
		send_message("Always");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("Always"));
		}
		if((message.indexOf("like me")>=0)||(message.indexOf("like me")>=0)){
		send_message("You know<br>I like you a lot");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("You know.I like you a lot"));
		}
		if((message.indexOf("Facebook")>=0)||(message.indexOf("facebook")>=0)){
		send_message("They have a good product<br>I am a fan");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("They have a good product.I am a fan"));
		}
		if((message.indexOf("Google")>=0)||(message.indexOf("google")>=0)){
		send_message("Google is a pretty cool company");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("Google is a pretty cool company"));
		}
		if((message.indexOf("iPhone")>=0)||(message.indexOf("iPhone")>=0)){
		send_message("I am a Android fan<br> but also Windows");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("I am a Android fan.but also Windows"));
		}
		if((message.indexOf("better than siri")>=0)||(message.indexOf("better than siri")>=0)){
		send_message("It's sirious question");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("It's sirious question"));
		}
		if((message.indexOf("better than google")>=0)||(message.indexOf("better than google")>=0)){
		send_message("It's sirious question");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("It's sirious question"));
		}
		if((message.indexOf("Siri is your friend")>=0)||(message.indexOf("siri is your friend")>=0)){
		send_message("Oh stop<br>I am your personal assistant<br>How can I help you");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("Oh stop.I am your personal assistant.How can I help you"));
		}
		if((message.indexOf("Google is your friend")>=0)||(message.indexOf("google is your friend")>=0)){
		send_message("Oh stop<br>I am your personal assistant<br>How can I help you");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("Oh stop.I am your personal assistant.How can I help you"));
		}
		if((message.indexOf("about me?")>=0)||(message.indexOf("about me?")>=0)){
		send_message("You are a genius");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("You are a genius"));
		}
		if((message.indexOf("How do you keep yourself busy")>=0)||(message.indexOf("how do you keep yourself busy")>=0)){
		send_message("I just talkin to other<br>It keeps me busy");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("I just talkin to other.It keeps me busy"));
		}
		if((message.indexOf("Help me")>=0)||(message.indexOf("help me")>=0)){
		send_message("I am always redy to help you.<br> What can I do for you?");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("I am always redy to help you. What can I do for you?"));
		}
		
		if((message.indexOf("Ask you")>=0)||(message.indexOf("ask you")>=0)){
		send_message("You can always ask anything to me.");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("You can always ask anything to me."));
		}
		if((message.indexOf("thank")>=0)||(message.indexOf("Thank")>=0)){
		send_message("Thanks you a lot.");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("Thanks you a lot."));
		}
		if((message.indexOf("Nice")>=0)||(message.indexOf("nice")>=0)||(message.indexOf("nyc")>=0)){
		send_message("yeas it's very nice.");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("yeas it's very nice."));
		}
		if((message.indexOf("say")>=0)||(message.indexOf("Say")>=0)){
		send_message("I'm just giving answer to you.");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("I'm just giving answer to you."));
		}
		if((message.indexOf("Sorry")>=0)||(message.indexOf("sorry")>=0)){
		send_message("It's ok.<br>I don't mind little bit of things.");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("It's ok. I don't mind little bit of things."));
		}
		if((message.indexOf("am i")>=0)||(message.indexOf("am I")>=0)){
		send_message("I think you are my boss.");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("I think you are my boss."));
		}
		if((message.indexOf("good")>=0)||(message.indexOf("Good")>=0)){
		send_message("Thanks");
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("Thanks"));
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
			  
			  if(prevState.length >4){
				prevState = prevState +"<br><br>";
			  }
			  
			  $("#container").html(prevState +"<br><br>" + username + "<span class='username1'>" + newMessage + "</span>");
			  $(".username").wrap('<a href="user_profile.html"></a>');
			  /*$("#container").scrollTop($("#container").prop("scrollHeight"));*/
			  
			  ai(newMessage);
			  
			});
	    });
		