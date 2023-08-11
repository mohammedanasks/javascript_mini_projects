

let quizeapp=[
        
{qustion: 'ayttavum valiya buddhu ?',
a:'minnu',
b:'chinnu',
c:'chingu',
d:'lallu',
correct:'c'
},
    
{qustion:'who is sundaran?',
a:'sachu',
b:'minnu',
c:'chinnu',
d:'kochu',
correct:'b'
},
    
{qustion:'minister of kerala?',
a:'arjnun',
b:'chynnithala',
c:'achudandhan',
d:"pinarai",
correct:'b'
},
    
{qustion:'most popular programming language in the world ?',
a:'java',
b:'javascript',
c:'python',
d:'c++',
correct:'b'
},
{qustion:'wich one is frontend programming language ? ',
a:'java',
b:'javascript',
c:'python',
d:'c++',
correct:'b'
},
{qustion:'most popular person in the world ? ',
a:'Donald trumph',
b:'sachin tendulkar',
c:'Dwayne Johnson',
d:'brad bit',
correct:'c'
},
{qustion:'high populated country in the world ?',
a:'india',
b:'canada',
c:'america',
d:'chaina',
correct:'d'
},
{qustion:'how many countrys in the world ?',
a:'193',
b:'120',
c:'180',
d:'123',
correct:'a'
},
{qustion:'capital of india ?',
a:'kerala',
b:'delhi',
c:'pujab' ,
d:'karntaka',
correct:'b'
  },
{qustion:'prime minister of india?',
a:'modi',
b:'bachan',
c:'ajay',
d:'rahul',
correct:'a'   },
{qustion:'gods on state ?',
a:'kerala',
b:'delhi',
c:'pujab' ,
d:'himachal',
correct:'a'  }
]

let score=0;
let qustion_count = 0;

const faild_audio= new Audio('static/AUDIO/aww.mp3')


let div=document.querySelector('.main')
const qustion=document.querySelector('#qustion')
answer1=document.querySelector('.answer1')
answer2=document.querySelector('.answer2')
answer3=document.querySelector('.answer3')
answer4=document.querySelector('.answer4')
let btn=document.querySelector('#btn')





loadquz()
function loadquz(){
    unchekd()
    const current_qustion = quizeapp[qustion_count];
    qustion.innerText=current_qustion.qustion;
    answer1.innerHTML=current_qustion.a;
    answer2.innerHTML=current_qustion.b;
    answer3.innerHTML=current_qustion.c;
    answer4.innerHTML=current_qustion.d;

}

function ChosstAnswer(){
    
    const selected_answer=document.querySelectorAll('.answer')

    let answer=undefined;
    selected_answer.forEach((selected)=>{
        if(selected.checked){
            answer = selected.id;
        }     
    });
    return answer;
}

btn.addEventListener('click',()=>{
    const answer_data = ChosstAnswer()
    if(answer_data){
        if(answer_data===quizeapp[qustion_count].correct){
            score++
            console.log(score)
         }
      
        qustion_count++;
        if(qustion_count<quizeapp.length){
            loadquz()
        
            
        }    
        
        else if(score>5){
           
            
            div.innerHTML=`<h3>you passed score is : ${score}/${quizeapp.length}</h3><button id="reload_btn" onclick="(
                window.location.reload()
            )">try againe</button>`
        }
     
        
        else if(score<5){
            div.innerHTML=`<h3>your faild score is : ${score}/${quizeapp.length} </h3><button id="reload_btn" onclick="(
                window.location.reload()
            )">try agine</button>`
            faild_audio.play()

        }
    }
  
});

function unchekd(){
    const selected_answer=document.querySelectorAll('.answer')
    selected_answer.forEach((selected)=>{
         selected.checked=false;
        })    

}
