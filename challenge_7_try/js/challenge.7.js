

let blackjackgame={
    'you':{'yourscore':"#your_score",'div':".your_div",'score':0,'span':'#your_span'},
    'com':{'comrscore':"#com_score",'div':".com_div",'score':0,'span':'#com_span'},
    'cards':['2','3','4','5','6','7','8','9','10','J','Q','K','A'],
    'card_val':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':10,'Q':10,'K':10,'A':[1,11]},
    'wins':0,
    'loss':0,
    'tie':0,
    'stand':false,
    "tunsover":false,
}

let win=blackjackgame['wins']

YOU=blackjackgame['you']
COM=blackjackgame['com']

document.querySelector('#hit_btn').addEventListener('click',your_play)
document.querySelector('#stand_btn').addEventListener('click',com_play)
document.querySelector('#deal_btn').addEventListener('click',remove_card)

const hit_sound= new Audio("static/AUDIO/swish.mp3")
const winn_sound= new Audio("static/AUDIO/cash.mp3")
const loss_sound= new Audio("static/AUDIO/aww.mp3")

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function com_play(){
    blackjackgame['stand']=true;
    while(COM['score']<16 ){
      
        let card = randum_card()
        update_score(card,COM)
        show_score(COM)
        show_card(COM,card)
        await sleep(1000);
        
    }
    
    blackjackgame['tunsover']=true;
    let winner=who_winn();
    show_score(winner); 
}

function your_play(){
    if(blackjackgame['stand']===false){
    let card=randum_card();
    update_score(card,YOU)
    show_card(YOU,card)
    update_score(card,YOU)
    show_score(YOU)
    }

    
    document.querySelector('.banner').textContent="lets' play"
    document.querySelector('.banner').style="color:whaite";
}



function randum_card(){
    let randum_num=Math.floor(Math.random()*13);
    return blackjackgame['cards'][randum_num]
}

function show_card(active_player,card){
    if(active_player['score']<=21){
        let image=document.createElement('img');
        image.style="width:150px; height:150px; padding:10px;"
        image.src=`static/IMAGES/${card}.png`
        document.querySelector(active_player['div']).appendChild(image);
        hit_sound.play()
    }

 
}

function update_score(card,active_player){
    if(card==='A'){
        if(active_player['score']+blackjackgame['card_val'][card][1]<=21){
            active_player['score']+=blackjackgame['card_val'][card][1]
        }else{
            active_player['score']=+blackjackgame['card_val'][card][0]
        }

    }else{
       active_player['score']+=blackjackgame['card_val'][card]
        
    }
    
}

function show_score(active_player){
    if(active_player['score']>21){
        document.querySelector(active_player['span']).innerHTML="you burst !"
        document.querySelector(active_player['span']).style='color:red;'
        loss_sound.play()
    }else{
        document.querySelector(active_player['span']).innerHTML=active_player['score']
    }
}

function remove_card(){
    if(blackjackgame['tunsover']===true){

        blackjackgame['stand']=false ;
        show_banner_message(who_winn())
        let your_img=document.querySelector('.your_div').querySelectorAll('img')
        let com_img=document.querySelector('.com_div').querySelectorAll('img')
        for(let i=0; i<your_img.length;i++){
            your_img[i].remove();
        }
        for(let i=0; i<com_img.length;i++){
            com_img[i].remove();
        } 
        YOU['score']=0;
        COM['score']=0;
        
        document.querySelector('#your_span').textContent=0
        document.querySelector('#your_span').style='color:white';
        document.querySelector('#com_span').textContent=0;
        document.querySelector('#com_span').style='color:white';    

        blackjackgame['tunsover']=true;



    } 
    console.log(blackjackgame)
}

function who_winn(){

    let winner ;
    if(YOU['score']<=21){
        if(YOU['score']>(COM['score'])||(COM['score'])>21){
            let win=blackjackgame['wins']++;
            winner=YOU;
           console.log(win)
        }else if(YOU['score']<(COM['score'])){
           let los= blackjackgame['loss']++;
            winner=COM;
            console.log(los)
        }else if(YOU['score']===(COM['score'])){
            blackjackgame['tie']++;
        }
    
    }else if(YOU['score']>21&&(COM['score'])<=21){
        blackjackgame['loss']++;
        winner=COM;
    }else if(YOU['score']>21&&(COM['score'])>21){
        blackjackgame['tie']++
    }
    return winner;
    

}
function show_banner_message(winner){
    if(blackjackgame['tunsover']===true){

        let message,messagecolor
        if(winner===YOU){
            document.querySelector('#winn').innerHTML=blackjackgame['wins']
            message='you won !';
            messagecolor = "green";
            winn_sound.play();
        }else if(winner===COM){
            document.querySelector('#loss').innerHTML=blackjackgame['loss']
            message='you lost !'
            messagecolor="red"
            loss_sound.play()
        }else{
            document.querySelector('#tie').innerHTML=blackjackgame['tie']
            message='you drew'
            messagecolor='black'
        }
        document.querySelector('.banner').textContent=message;
        document.querySelector('.banner').style.color=messagecolor;
    }
   
}