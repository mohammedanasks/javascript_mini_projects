

let Appqustions=[
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
     correct:'b'  }
]

let qustion=document.querySelector('#qustion')
let answer1=document.querySelector('.answer1')
let answer2=document.querySelector('.answer2')
let answer3=document.querySelector('.answer3')

document.getElementById("btn").addEventListener('click',submit)

let quz_count =0;

loadquiz()
function loadquiz(){
    let quz_data=Appqustions[quz_count]
    qustion.innerHTML=quz_data.qustion
    answer1.innerHTML=quz_data.a
    answer2.innerHTML=quz_data.b
    answer4.innerHTML=quz_data.c
    answer5.innerHTML=quz_data.d
}

function submit(){
    quz_count++;
    loadquiz()
    unchekd()
}

function unchekd(){
    let select=document.querySelector('.answer')
    select.forEach(element => {
        element.checked=false;
    });
}

