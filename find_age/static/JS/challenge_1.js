

function disp(){
    let year=document.getElementById("year1").value;
    let current_year=new Date().getFullYear() 
    let age=current_year-year;
    let final=age*365;
    document.getElementById("age").value=age;
    let age_days=document.getElementById("age_days").value=final
    
}

function reset(){
    //let year=document.getElementById("year1").value=null;
    let year=document.getElementById("year1").remove()
    document.getElementById("age").value=null;
    let age_days=document.getElementById("age_days").value=null;
}

//diffrent method

function age_days(){
    let year=document.getElementById("year1").value;
    let current_year=new Date().getFullYear() 
    let age=current_year-year;
    let final=age*365;
    var h1 = document.createElement("h1");
    var textanswer=document.createTextNode("your age in"+final+"days")
    h1.setAttribute('id','final');
    h1.appendChild(textanswer);
    document.getElementById("display_age_days").appendChild(h1);
    console.log(final)


}


