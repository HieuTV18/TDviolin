document.getElementById("introduce").onclick = function(){
    document.getElementById("slideshow").style.display = "block";
    document.getElementById("tour_event").style.display = "none";
    document.getElementById("teaching-time").style.display = "none";
    document.getElementById("list_product").style.display = "none";
    document.getElementById("support_help").style.display = "none";

    document.getElementById("introduce").style.backgroundColor="#ff9100";
    document.getElementById("teaching_schedule").style.backgroundColor="rgb(255, 242, 223)";
    document.getElementById("show_schedule").style.backgroundColor="rgb(255, 242, 223)";
    document.getElementById("product").style.backgroundColor="rgb(255, 242, 223)";
    document.getElementById("help").style.backgroundColor="rgb(255, 242, 223)";
    
}
document.getElementById("teaching_schedule").onclick = function(){
    document.getElementById("slideshow").style.display = "none";
    document.getElementById("tour_event").style.display = "flex";
    document.getElementById("teaching-time").style.display = "none";
    document.getElementById("list_product").style.display = "none";
    document.getElementById("support_help").style.display = "none";

    document.getElementById("introduce").style.backgroundColor="rgb(255, 242, 223)";
    document.getElementById("teaching_schedule").style.backgroundColor="#ff9100";
    document.getElementById("show_schedule").style.backgroundColor="rgb(255, 242, 223)";
    document.getElementById("product").style.backgroundColor="rgb(255, 242, 223)";
    document.getElementById("help").style.backgroundColor="rgb(255, 242, 223)";
}
document.getElementById("show_schedule").onclick = function(){
    document.getElementById("slideshow").style.display = "none";
    document.getElementById("tour_event").style.display = "none";
    document.getElementById("teaching-time").style.display = "block";
    document.getElementById("list_product").style.display = "none";
    document.getElementById("support_help").style.display = "none";

    document.getElementById("introduce").style.backgroundColor="rgb(255, 242, 223)";
    document.getElementById("teaching_schedule").style.backgroundColor="rgb(255, 242, 223)";
    document.getElementById("show_schedule").style.backgroundColor="#ff9100";
    document.getElementById("product").style.backgroundColor="rgb(255, 242, 223)";
    document.getElementById("help").style.backgroundColor="rgb(255, 242, 223)";
}
document.getElementById("product").onclick = function(){
    document.getElementById("slideshow").style.display = "none";
    document.getElementById("tour_event").style.display = "none";
    document.getElementById("teaching-time").style.display = "none";
    document.getElementById("list_product").style.display = "block";
    document.getElementById("support_help").style.display = "none";

    document.getElementById("introduce").style.backgroundColor="rgb(255, 242, 223)";
    document.getElementById("teaching_schedule").style.backgroundColor="rgb(255, 242, 223)";
    document.getElementById("show_schedule").style.backgroundColor="rgb(255, 242, 223)";
    document.getElementById("product").style.backgroundColor="#ff9100";
    document.getElementById("help").style.backgroundColor="rgb(255, 242, 223)";
}
document.getElementById("help").onclick = function(){
    document.getElementById("slideshow").style.display = "none";
    document.getElementById("tour_event").style.display = "none";
    document.getElementById("teaching-time").style.display = "none";
    document.getElementById("list_product").style.display = "none";
    document.getElementById("support_help").style.display = "block";

    document.getElementById("introduce").style.backgroundColor="rgb(255, 242, 223)";
    document.getElementById("teaching_schedule").style.backgroundColor="rgb(255, 242, 223)";
    document.getElementById("show_schedule").style.backgroundColor="rgb(255, 242, 223)";
    document.getElementById("product").style.backgroundColor="rgb(255, 242, 223)";
    document.getElementById("help").style.backgroundColor="#ff9100";
}

// slide changeIMG 
var index = 1;
changeImage =function() {
    var imgs = [
    "./asset/image/slideshow/IMG_0249.JPG",
    "./asset/image/slideshow/IMG_0251.JPG",
    "./asset/image/slideshow/IMG_0877.JPG"
]
    document.getElementById("img").src = imgs[index];
    index++;
    if(index == 3){
        index =0;
    }
}
setInterval(changeImage,8000)

// marquee 
// onmouseover= "document.getElementById('marquee-two').stop();"
// onmouseout="document.getElementById('marquee-two').start();"