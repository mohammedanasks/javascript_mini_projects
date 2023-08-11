



let blackjack_game={
    'you':{'yourscore':"#your_score","div":".your_div",'score':0 ,'span':"#your_score"},
    'bot':{'botscore':"#bot_score","div":".bot_div",'score':0,'span':"#bot_score"},
    'cards':['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
    'card_val':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'J':10,'Q':10,'A':[1,11]},
    'wins':0,
    'loss':0,
    'tie':0,
    'stand':false,
    "tunsover":false,


}

const YOU=blackjack_game['you']
const BOT=blackjack_game['bot']

const hit_sound= new Audio('static/AUDIO/swish.mp3')
const busrst_sound=new Audio('static/AUDIO/aww.mp3')
const winn_sound=new Audio('static/AUDIO/cash.mp3')

  
document.querySelector("#hit_btn").addEventListener('click',hit_fung);
document.querySelector("#stand_btn").addEventListener('click',bot_logic);
document.querySelector("#deal_btn").addEventListener('click',remove_cards);


function hit_fung(){
    if(blackjack_game['stand']===false){
        let card = random_card()
        update_score(card,YOU)
        show_score(YOU,card)
        show_card(YOU,card)  
    }
   

    document.querySelector('.banner').textContent="lets' play"
    document.querySelector('.banner').style="color:whaite";
    
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function bot_logic(){
    blackjack_game['stand']=true;
    while(BOT['score']<16 ){
      
        let card = random_card()
        update_score(card,BOT)
        show_score(BOT)
        show_card(BOT,card)
        await sleep(1000);
        
    }
    
    blackjack_game['tunsover']=true;
    let winner=who_winn();
    show_score(winner); 
}

function random_card(){
    let random_num=Math.floor(Math.random()*13)
    return blackjack_game['cards'][random_num]
   
}

function show_card(activ_Player,card){
    if(activ_Player['score']<=21){
        let card_image=document.createElement('img')
        card_image.style="width:150px; height:150px; padding:10px;  border-radius:10px;"
        card_image.src = `static/IMAGES/${card}.png`;
        document.querySelector(activ_Player['div']).appendChild(card_image);
        hit_sound.play()
    }

}

function remove_cards(){
    if(blackjack_game['tunsover']===true){

        blackjack_game['stand']=false ;
        show_banner_message(who_winn())
        let remv_your_cards=document.querySelector('.your_div').querySelectorAll('img')
        let remv_bot_cards=document.querySelector('.bot_div').querySelectorAll('img')
        for(let i=0;i<remv_your_cards.length;i++){
            remv_your_cards[i].remove();
        }
        for(let i=0;i< remv_bot_cards.length;i++){
            remv_bot_cards[i].remove();
        }
    
        YOU['score']=0;
        BOT['score']=0;
        
        document.querySelector('#your_score').textContent=0
        document.querySelector('#your_score').style='color:white';
        document.querySelector('#bot_score').textContent=0;
        document.querySelector('#bot_score').style='color:white';

        blackjack_game['tunsover']=true;

    }
   

}


function update_score(card,activ_Player){
    if(card==='A'){
        if(activ_Player['score']+blackjack_game['card_val'][card][1]<=21){
            activ_Player['score']+=blackjack_game['card_val'][card][1];
        }else{
            activ_Player['score']+=blackjack_game['card_val'][card][0];
        }
    }else{
        activ_Player['score']+=blackjack_game['card_val'][card];
    } 
}


function show_score(activ_Player,card){
    if(activ_Player['score']>21){
        document.querySelector(activ_Player['span']).innerHTML="BURST !"
        document.querySelector(activ_Player['span']).style= 'color:red;'
        busrst_sound.play()}
    else{
        document.querySelector(activ_Player['span']).innerHTML=activ_Player['score']
    }  
}

function who_winn(){
    let winner 
    if(YOU['score']<=21){
        if(YOU['score']>(BOT['score'])||(BOT['score'])>21){
            blackjack_game['wins']++;
            winner=YOU;
        }else if(YOU['score']<(BOT['score'])){
            blackjack_game['loss']++;
            winner=BOT;
        }else if(YOU['score']===(BOT['score'])){
            blackjack_game['tie']++;
        }

    }else if(YOU['score']>21&&(BOT['score'])<=21){
        blackjack_game['loss']++;
        winner=BOT;
    }else if(YOU['score']>21&&(BOT['score'])>21){
        blackjack_game['tie']++
    }
    console.log(blackjack_game)
    return winner;
}

function show_banner_message(winner){
    if(blackjack_game['tunsover']===true){

        console.log(winner)
        let message,messagecolor
        if(winner===YOU){
            document.querySelector('#winn').innerHTML=blackjack_game['wins']
            message='you won !';
            messagecolor = "green";
            winn_sound.play();
        }else if(winner===BOT){
            document.querySelector('#loss').innerHTML=blackjack_game['loss']
            message='you lost !'
            messagecolor="red"
            busrst_sound.play()
        }else{
            document.querySelector('#tie').innerHTML=blackjack_game['tie']
            message='you drew'
            messagecolor='black'
        }
        document.querySelector('.banner').textContent=message;
        document.querySelector('.banner').style.color=messagecolor;
    }
   
}












