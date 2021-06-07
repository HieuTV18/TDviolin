document.getElementById("introduce").onclick = function(){
    document.getElementById("slideshow").style.display = "block";
    document.getElementById("tour_event").style.display = "none";
    document.getElementById("teaching-time").style.display = "none";
    document.getElementById("list_product").style.display = "none";
    document.getElementById("support_help").style.display = "none";


    
}
document.getElementById("teaching_schedule").onclick = function(){
    document.getElementById("slideshow").style.display = "none";
    document.getElementById("tour_event").style.display = "block";
    document.getElementById("teaching-time").style.display = "none";
    document.getElementById("list_product").style.display = "none";
    document.getElementById("support_help").style.display = "none";


}
document.getElementById("show_schedule").onclick = function(){
    document.getElementById("slideshow").style.display = "none";
    document.getElementById("tour_event").style.display = "none";
    document.getElementById("teaching-time").style.display = "block";
    document.getElementById("list_product").style.display = "none";
    document.getElementById("support_help").style.display = "none";


}
document.getElementById("product").onclick = function(){
    document.getElementById("slideshow").style.display = "none";
    document.getElementById("tour_event").style.display = "none";
    document.getElementById("teaching-time").style.display = "none";
    document.getElementById("list_product").style.display = "block";
    document.getElementById("support_help").style.display = "none";


}
document.getElementById("help").onclick = function(){
    document.getElementById("slideshow").style.display = "none";
    document.getElementById("tour_event").style.display = "none";
    document.getElementById("teaching-time").style.display = "none";
    document.getElementById("list_product").style.display = "none";
    document.getElementById("support_help").style.display = "block";


}

var header_menu = document.getElementById("navbar_menu");
var menu_item = header_menu.getElementsByClassName("menu_item-link");
for (var i = 0;i<menu_item.length; i++){
    menu_item[i].addEventListener("click", function(){
        var classCurrent = document.getElementsByClassName("menu_item-link--active")
        classCurrent[0].className = classCurrent[0].className.replace(" menu_item-link--active", "");
        this.className += " menu_item-link--active";
        
    });
    // menu_item[i].addEventListener("click", function(){
    //     var classCurrent = document.getElementsByClassName("menu_item-link--active");
    //     var slideshow     =   document.getElementById("slideshow");
    //     var tour_event    =   document.getElementById("tour_event");
    //     var teaching      =   document.getElementById("teaching-time");
    //     var list_product  =   document.getElementById("list_product");
    //     var support_help  =   document.getElementById("support_help");
    //     var ShowMenu_item = [slideshow,tour_event,teaching,list_product,support_help];
    //     console.log("OK")
    // });
}


// var slideshow     =   document.getElementById("slideshow");
// var tour_event    =   document.getElementById("tour_event");
// var teaching      =   document.getElementById("teaching-time");
// var list_product  =   document.getElementById("list_product");
// var support_help  =   document.getElementById("support_help");
// var ShowMenu_item = [slideshow,tour_event,teaching,list_product,support_help];
// console.log(ShowMenu_item[i].style.display = "block");



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
