

let total_cost=document.getElementById("total");
let total_fuel=document.getElementById("fuel")




function calculate(){
    let cost_ltr=document.getElementById("ltr").value;
    let total_km=document.getElementById("km").value;
    let milage=document.getElementById("milage").value;
    
    calcu(cost_ltr,total_km,milage)
    
}



function calcu(cost_ltr,total_km,milage){
   let a= total_km/milage;
   let b= Math.round(a*cost_ltr)
   total_cost.value=b
   let c= Math.round(a);
   total_fuel.value=c;  
   
}

function reset(){
    document.getElementById("ltr").value=null;
    document.getElementById("km").value=null;
    document.getElementById("milage").value=null;
    document.getElementById("total").value=null;
    document.getElementById("fuel").value=null;
    
}