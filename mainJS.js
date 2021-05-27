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
// var index = 1;
// changeImage =function() {
//     var imgs = [
//     "./image/slideshow/IMG_0249.JPG",
//     "./image/slideshow/IMG_0251.JPG",
//     "./image/slideshow/IMG_0877.JPG"
// ]
//     document.getElementById("img").src = imgs[index];
//     index++;
//     if(index == 3){
//         index =0;
//     }
// }
// setInterval(changeImage,8000)

window.onscroll = function(){
    // console.info(document.documentElement.scrollTop);
    var gototop = document.getElementById('gototop');
    if (document.documentElement.scrollTop > 500 || document.body.scrollTop > 500){
        gototop.style.display = "flex";
    }
    else{
        gototop.style.display = "none";
    }
}
function goToTop(){
    var timer = setInterval(function(){
        document.documentElement.scrollTop-=20;
        if(document.documentElement.scrollTop<=0)
        clearInterval(timer);
    },1)
}

// let ListBtnHelp = document.getElementsByClassName("buy-product_btn");
// console.log(ListBtnHelp)
// for (let i =0; i<ListBtnHelp.length;i++){
//     ListBtnHelp[i].onclick = function(){
//         document.getElementById("methodSupport").style.display = "flex";
//     }
// }

function ShowMethodSupport(){
        document.getElementById("methodSupport").style.display = "flex";

}
function HiddenMethodSupport(){
    document.getElementById("methodSupport").style.display = "none";

}