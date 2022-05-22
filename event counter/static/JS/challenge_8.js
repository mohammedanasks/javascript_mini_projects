
const days1=document.querySelector('#days')
const houre1=document.querySelector('#hours')
const mind1=document.querySelector('#mini')
const seconds1=document.querySelector('#sec')



document.querySelector('#count_btn').addEventListener('click',count)

document.querySelector('#reset_btn').addEventListener('click',reset)

let hit_sound = new Audio('static/AUDIO/clock.mp3')
let message= new Audio('static/AUDIO/message.mp3')

let counter={'score':0}

let div=document.querySelector('body')
 
run=false;

function count(){
    if(run===false){
        
        let event_date=document.getElementById('event').value;

        const newyear_date=new Date(event_date)
        const current_date= new Date()

        const totalseconds=(newyear_date-current_date)/1000;
        const days=Math.floor(totalseconds/3600/24);
        const houre=Math.floor(totalseconds/3600)%24;
        const min=Math.floor(totalseconds/60)%60;
        const seconds=Math.floor(totalseconds)%60

        days1.textContent=days
        houre1.textContent=houre
        mind1.textContent=min
        seconds1.textContent=seconds

        hit_sound.play()
        setInterval(count,1000);

        if(days==1){
            hit_sound.pause()
            message.play()
            div.innerHTML=`<div class="message"><h3>you have a event tommorow</h3><button class="btn btn-primary" id="reload_btn" onclick="(
                window.location.reload()
            )">reset counter</button>`
            
            run=true;
        }

    }
  
}
resume= ()=>{
    console.log("resume")
}

function reset(){
    window.location.reload()
    days1.textContent=0;
    mind1.textContent=0
    seconds1.textContent=0;
    houre1.textContent=0;
    
}