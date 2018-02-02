$(function(){
    
    var playerword = "";
    
    beginquest();
    
});

//the Begining
var beginquest = function(){
    $("div.story-text").html("You finally woke up. And you noticed that you are lying on a bed. Now what?");
    
    $("div.story-choices").html("<button class='btn btn-primary awoken'>Wake Up</button>");
    $("div.story-choices").append("<button class='btn btn-primary deep-slumber'>Continue Sleeping</button>");
    
    //Wake Up
    $(".awoken").click(function(){
       $("span.Q1-decision").html("You woke up.");
       breakfest();
        
    });
    
    //Continue Sleeping
    $(".deep-slumber").click(function(){
       //main feature of game
       $("span.Q1-decision").html("You continued to sleep.");
       $("div.display-story").html("You Decided to continue sleeping");
        
    });
        
};

//Restart
var request = function(){
    $("div.story-text").html("You finally woke up. And you noticed that you are lying on a bed. Now what?");
    
    $("div.story-choices").html("<button class='btn btn-primary awoken'>Wake Up</button>");
    $("div.story-choices").append("<button class='btn btn-primary deep-slumber'>Continue Sleeping</button>");
    
    //Wake Up
    $(".awoken").click(function(){
       $("span.Q1-decision").html("You woke up.");
       breakfest();
        
    });
    
    //Continue Sleeping
    $(".deep-slumber").click(function(){
       //main feature of game
       $("span.Q1-decision").html("You continued to sleep.");
       $("div.display-story").html("You Decided to continue sleeping");
        
    });
        
};

//Nutrients First
var breakfest = function(){
    $("div.story-text").html("You got out of bed and you walked into the kitchen. This is up to you.");
    
    $("div.story-choices").html("<button class='btn btn-primary eat'>Yes, I want breakfest!</button>");
    $("div.story-choices").append("<button class='btn btn-primary hungry'>No, I hate breakfest!</button>");
    
    //Ok
    $(".eat").click(function(){
        $("span.Q2-decision").html("Ate breakfest");
        ate();
        
    });
    
    //No
    $(".hungry").click(function(){
       $("span.Q2-decision").html("No, screw breakfest");
       GrO();
        
    });
    
};

var ate = function(){
    $("div.story-text").html("You ate breakfest");
    
    $("div.story-choices").html("<button class='btn btn-primary forw'>continue</button>");
      
    $(".forw").click(function(){
        GrO();
        
    });
      
};

//Random user input WORKING ON
//var ieat = function(){
    //$("div.story-text").html("What decided to get...");
    
    //$("div.story-choices").html("<input type='text'");
    
    
      
//};


//begins story
var GrO = function(){
    
    $("div.story-text").html("You walked into the living room. And you saw your calander marked with the word hiking for today.");
    
    $("div.story-choices").html("<button class='btn btn-primary hike'>Yeah, I'll go on a hike</button>");
    $("div.story-choices").append("<button class='btn btn-primary home'>No, Stay Home</button>");
    
    //Go outside
    $(".hike").click(function(){
        $("span.Q3-decision").html("Went Hiking");
        hiking();
        
    });
    
    
    //Stayed Home
    $(".home").click(function(){
        $("span.Q3-decision").html("Stayed Home");
        home();
        
    });
};

//Home
var home = function(){
    $("div.story-text").html("You stayed home. Now what?");
    
    $("div.story-choices").html("<button class='btn btn-primary slept'>Go back to sleep</button>");
    $("div.story-choices").append("<button class='btn btn-primary nvm'>Nevermind, I'll go on a hike</button>");
    
    //Go to Sleep
    $(".slept").click(function(){
        $("span.Q4-decision").html("Sleep");
        request();
        
    });
    
    //Nevermind go back
    $(".nvm").click(function(){
        $("span.Q4-decision").html("Revaluate to Hiking");
        hiking();
        
    });
    
};


//hiking CONTINUE STORY
var hiking = function(){
    $("div.story-text").html("You decided to take a hike in the forest. Inside the forest, you see two pathways. Which one will you take?");
    
    $("div.story-choices").html("<button class='btn btn-primary go-left'>Left</button>");
    $("div.story-choices").append("<button class='btn btn-primary go-right'>Right</button>");
    
    //Took left
    $(".go-left").click(function(){
       $("span.Q4-decision").html("Went left");
       leftpath();
        
    });
    
    //Took right
    $(".go-right").click(function(){
       $("span.Q4-decision").html("Went Right");
       rightpath();
        
    });
    
    
};


//Left path CONTINUE STORY
var leftpath = function(){
    $("div.story-text").html("During your hike, you saw sunlight pericing through the leaves on the trees. At the end of the path, you see a huge mountain from a very far distance. But you also heard a someone crying for help.");
    
    $("div.story-choices").html("<button class='btn btn-primary mountain'>Go to the mountain</button>");
    $("div.story-choices").append("<button class='btn btn-primary somebody-help'>Help the person</button>");
    
    //Went to the mountain
    $(".mountain").click(function(){
        $("span.Q6-decision").html("Went to the mountain");
        mountain();
        
    });
    
    $("somebody-help").click(function(){
        $("span.Q6-decision").html("Help the person");
        helpsomeone();
        
    });
    
    
};


//Go to the Mountain
var mountain = function(){
    $("div.story-text").html("You followed the trail that leads to the mountain. Once you reached to the mountain, you saw a path made of gravel that leads to a town nearby.");
    
    $("div.story-choices").html("<button class='btn btn-primary town'>Go to the town</button>");
    $("div.story-choices").append("<button class='btn btn-primary around-mountain'>Go around the mountain</button>");
        
    //Go to town
    $(".town").click(function(){
       $("span.Q7-decision").html("Gone to town");
        climbedmountain();
        
    });
    
    //Go Around the Mountain
    $(".around-mountain").click(function(){
        $("span.Q7-decision").html("Go Around");
        armountain();
        
    });
        
};

//Town
var town = function(){
    $("div.story-text").html("The sun was beginning to set, but luckly for you made it to the town on time. Would you rather stay in a motel or roam around the town.");
    
    $("div.story-choices").html("<button class='btn btn-primary motel'>Stay in a motel</button>");
    $("div.story-choices").append("<button class='btn btn-primary roam'>Roam around</button>");
    
    
      
};


var motel = function(){
    $("div.story-text").html("You searched and searched until you found a motel. The conditions inside is decent. After a talk with the receptionist, you finally got room to stay for the night.");
  
};


//Go Around Mountain Resets you to the beginning
var armountain = function(){
    $("div.story-text").html("You decided to walk around the mountain. Once you reach the other side of the mountain, you saw a cave. But there is light inside, so you let your curiosity get the better of you. Once you entered, began falling. However, it was a bottomless pit so you been falling for hours.");
    
    $("div.story-choices").html("<button class='btn btn-primary end3'>Continue</button>");
    
    $(".end3").click(function(){
       request();
        
    });
    
};

//Help the Person STORY ENDING
var helpsomeone = function(){
    $("div.story-text").html("You heard the cries from the forest. Once you found the source, you realized that it was just a tape recorder playing on a loop. You hit the pause button, but instead it played a lullaby. You started to feel very sleepy and you were knocked out seconds later.");
    
    $("div.story-choices").html("<button class='btn btn-primary end2'>Continue</button>");
    
    $(".end2").click(function(){
        request();
        
    });
        
};


//Right Path STORY ENDING

var rightpath = function(){
    $("div.story-text").html("You took the right path. A minute later, the path started to become dark. You can bearly see anything from you're standing. You tripped on a trap which shoot out a dart. The dart made you get knocked out cold."); 
    
    $("div.story-choices").html("<button class='btn btn-primary end1'>Continue</button>");
    
    $(".end1").click(function(){
       request();
        
    });
    
};



