
/*function reload(){
    window.location.reload();

    
    var audio = new Audio("http://music.ogg");
    audio.play();


} */   


function reload() {
    window.location.reload();
    
  }

function generateimage(){
    let image=document.createElement("img")
    var div=document.getElementById("cat_gen")
    image.src="https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}  