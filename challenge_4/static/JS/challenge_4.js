

function choice_picker(your_color){

  choice=(your_color.value)
  colore_changer(choice)

}

let button=  document.getElementsByTagName("button")

let copy_allbuttons=[]
for(let i=0;i<button.length;i++){
    copy_allbuttons.push(button[i].classList[1])
}

let labels=[]
for(let i=0;i<button.length;i++){
    labels.push(button[i].innerHTML)
}



function colore_changer(choice){
    if(choice==="red"){
        buttenred()
    }else if(choice==="green"){
        buttengreen()
    }else if(choice==="yellow"){
        buttenyellow()
    }else if(choice==="blue"){
        buttenblue()
    }else if(choice==="reset"){
        buttenreset()
    }else if(choice==="random"){
        random()
    }




}

function buttenred(){
    for(let i=0;i<button.length;i++){
        button[i].classList.remove(button[i].classList[1]);
        button[i].classList.add("btn-danger")
        button[i].innerHTML="red"
    }    
}

function buttengreen(){
    for(let i=0;i<button.length;i++){
        button[i].classList.remove(button[i].classList[1]);
        button[i].classList.add("btn-success")
        button[i].innerHTML="green"
    }
}

function buttenblue(){
    for(let i=0;i<button.length;i++){
        button[i].classList.remove(button[i].classList[1]);
        button[i].classList.add("btn-primary")
        button[i].innerHTML="blue" 
    }
}

function buttenyellow(){
    for(let i=0;i<button.length;i++){
        button[i].classList.remove(button[i].classList[1]);
        button[i].classList.add("btn-warning")
        button[i].innerHTML="yellow"
    }
}


function buttenreset(){
    for(let i=0;i<button.length;i++){
        button[i].classList.remove(button[i].classList[1]);
        button[i].classList.add(copy_allbuttons[i]);
        button[i].innerHTML=labels[i] 
        
    }
}

function random(){
    let colors=["btn-primary","btn-success","btn-danger","btn-warning"]
    for(let i=0;i<button.length;i++){
        let num= Math.floor(Math.random()  * 4);
        button[i].classList.remove(button[i].classList[1]);
        button[i].classList.add(colors[num]);
    }
}

function buttenreset_my(){
    for(let i=0;i<button.length;i++){
        button[0].classList.remove(button[i].classList[1]);
        button[0].classList.add("btn-danger")
        button[1].classList.remove(button[i].classList[1]);
        button[1].classList.add("btn-primary")
        button[2].classList.remove(button[i].classList[1]);
        button[2].classList.add("btn-warning")
        button[3].classList.remove(button[i].classList[1]);
        button[3].classList.add("btn-success")
        
    }
}

let gamebutton=  document.getElementsByClassName("btnc")

function playgame(data){
    console.log(data)
    let scors=[1,2,3,"*",0]
    for(let i=0;i<gamebutton.length;i++){
        let num = Math.floor(Math.random()*5);
        gamebutton[i].innerHTML="";
        gamebutton[i].innerHTML=scors[num]
        var data= gamebutton[i].innerHTML=="*"
    

        if(gamebutton[i].innerHTML=="*"){
            
            data.sy
        }

    }
}
function reset(){
    for(let i=0;i<gamebutton.length;i++){
        gamebutton[i].innerHTML="click"
    }
}


