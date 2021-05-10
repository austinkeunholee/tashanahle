$(document).ready(function(){
	
	//Type.js 
	$(function(){
		$(".open").typed({
			strings: ["Hey, my name is Natasha!"],
			typeSpeed: 20,
			showCursor: false,
		});
		$(".prob").typed({
			strings: ["Im probably,"],
			typeSpeed: 10,
			showCursor:false,
		})
		$(".about").typed({
			strings: ["Playing League of Legends","Video Editing","Busy being a Zed main","Walking my cat","Having some ice cream",
			"Playing the ukelele","Trying to become cryto rich","Hanging out with the homies","Learning to code","Thinking of the next million dollar idea",
			"Reading Manga","Watching Videos on Youtube","Drinking Coffee","Drawing","Playing on my Switch","Waiting for the bus"
			,"Making Memes","Listening to Porter Robinson"
			,"Watching Anime","Streaming on Twitch","Travelling","Playing soccer"],
			typeSpeed: 10,
            backDelay: 1250,
            showCursor: false,
            loop: true
		});

	});
});