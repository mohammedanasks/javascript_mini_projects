
rpsgame=(yourchoice)=>{
    
    
   var humanChoice=yourchoice.id
   
    
   inte=RandomInteger()
   
    Botchoice = NumberTochoice(RandomInteger())
    
    
    result=DecideWinner(humanChoice,Botchoice)

    scorebord(result)

    message=finalmessage(result)
    
    frontend_view(humanChoice,Botchoice,message)



   
}


function RandomInteger(){
  return Math.floor(Math.random()*3);
}

function NumberTochoice(number){
    return['rock','papper','scissors'][number];
    
}

function DecideWinner(humanchoice,botchoice){
    var rpsData={
        'papper':{"papper":0.5,"rock":1,"scissors":0},
        'rock':{"papper":0,"rock":0.5,"scissors":1},
        'scissors':{"papper":1,"rock":0,"scissors":0.5},
    };
    var yourscore=rpsData[humanchoice][botchoice];
    var botscore = rpsData[botchoice][humanchoice];
    return[yourscore,botscore]
}

function finalmessage([yourscore,botscore]){
    if(yourscore===0){
        console.log("you loss")
        return{"message":"you losss !","color":"red"};
        
    }else if(yourscore===1){
        return{"message":"you winn !","color":"green"}
    }else if(yourscore===0.5){
        return{"message":"you tied !","color":"yellow"}
    }    
}

function frontend_view(yourIMAGEchoice,botchoice,message){
    imagedtabase={
        'rock':document.getElementById('rock').src,
        'papper':document.getElementById('papper').src,
        'scissors':document.getElementById('scissors').src,
    }

    document.getElementById("rock").remove()
    document.getElementById("papper").remove()
    document.getElementById("scissors").remove()

    var human_div=document.createElement("div")
    var bot_div=document.createElement("div")
    var message_div=document.createElement("div");
     

    human_div.innerHTML="<img src='"+imagedtabase[yourIMAGEchoice]+"'height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1)';>"
    bot_div.innerHTML="<img src='"+imagedtabase[botchoice]+"'height=150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1)';>"
    message_div.innerHTML="<h1 style='color:"+message['color']+";  font-size:100px; padding:30px;'>" + message["message"] + "</h1>"

    document.getElementById("image_container").appendChild(human_div)
    document.getElementById("image_container").appendChild(message_div)
    document.getElementById("image_container").appendChild(bot_div)
   
}

  let play_score= document.getElementById("human_score");
  let computer_score= document.getElementById("computer_score");
  let score = 0;
  let score2=0;  
  function scorebord([yourdata,computerdata]){

    
   
   
     if(yourdata===1){
        score++;
        play_score.innerHTML = score;
        
        
       
     }else if(yourdata===0){
        score2++;
        computer_score.innerHTML = score2;
     }
  }

  function reload() {
    window.location.reload();
   

  }

  window.onbeforeunload = function() {
    localStorage.setItem("score",score).val();
}


