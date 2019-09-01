window.onload = function(){
   var services = document.getElementById("services");
   var nav = document.getElementById("nav");
   var navColor = document.getElementById("navColor");
   var navColorWrap = document.getElementById("navColorWrap")
   var banner = document.getElementById("banner");
   var contact = document.getElementById("contact");
   var bannerHeight = (banner.getBoundingClientRect().bottom - banner.getBoundingClientRect().top)
   var totHeight = contact.getBoundingClientRect().top - (bannerHeight + window.innerHeight*0.30);
   var moveHeight = nav.getBoundingClientRect().bottom - nav.getBoundingClientRect().top;
   var serviceHeight = (services.getBoundingClientRect().bottom - services.getBoundingClientRect().top);
   console.log("serviceHeight: " + serviceHeight);
   //console.log("heme" + window.innerHeight + " contra " + (window.getBoundingClientRect().bottom - window.getBoundingClientRect().top));
   var movePer = (moveHeight/totHeight);
   //console.log(movePer);
   var navVisible = false;
   var scrollPos = contact.getBoundingClientRect().top - (banner.clientHeight - (window.innerHeight*0.30));
   //console.log(scrollPos);
   var navColorStyle = 0;

   window.onscroll = function navScroll(){
     var oldScrollPos = scrollPos;
     console.log(services.getBoundingClientRect().top);
     if (services.getBoundingClientRect().top < (window.innerHeight*0.30) && !navVisible) {
        nav.style.opacity = 1;
        navVisible = true;
     }
     else if (services.getBoundingClientRect().top > (window.innerHeight*0.30) && navVisible) {
        navColorStyle = 0;
        navColorWrap.style.height = navColorStyle;
        nav.style.opacity = 0;
        navVisible = false;
     }
     if (navVisible) {
       scrollPos = contact.getBoundingClientRect().top;
        navColorStyle = navColorStyle + (oldScrollPos - scrollPos)*movePer;
       // console.log("navColorStyle: " + navColorStyle);
       // console.log("navColorStyle: " + navColorStyle);
       // console.log("navColorStyle" + navColorStyle);
       navColorWrap.style.height = navColorStyle + "px";
     }
   }

   navColor.addEventListener("mouseover", navOver);
   nav.addEventListener("mouseover", navOver);
   function navOver(event){
     // console.log("eventto: " + event.target.parentNode.id);
     if (event.target.id.length > 0 && event.target.id != "navColor" && event.target.id != "nav") {
       if (event.target.parentNode.id == navColor) {
         document.getElementById(event.target.id).style.fill = "pink";
         document.getElementById(event.target.id).style.stroke = "pink";
       }
       // console.log("nu");
       for (var i = 0; i < 4; i++) {
          nav.getElementsByTagName("text")[i].style.opacity = 1;
       }
     }
     for (var i = 0; i < 4; i++) {
        nav.getElementsByTagName("text")[i].style.opacity = 1;
     }
   }
   navColor.addEventListener("mouseout", navOut);
   nav.addEventListener("mouseout", navOut);
   function navOut(event){
      // console.log("eventto: " + event.target.parentNode.id);
     if (event.target.id.length > 0 && event.target.id != "navColor" && event.target.id != "nav") {
       if (event.target.parentNode.id == navColor) {
         document.getElementById(event.target.id).style.fill = "grey";
         document.getElementById(event.target.id).style.stroke = "grey";
       }
    }
    else {
      // console.log("duaser");
      for (var i = 0; i < 4; i++) {
         nav.getElementsByTagName("text")[i].style.opacity = 0;
      }
    }
  }
     var scrolling = false;
     navColor.addEventListener("click", navClick);
     nav.addEventListener("click", navClick);

     function navClick(){
       if (!scrolling) {
         if (event.target.id.length > 0 && event.target.id != "navColor" && event.target.id != "nav") {
         var currentPos = -banner.getBoundingClientRect().top;
         var n = (event.target.id.length - 3);
         var scrollToId = event.target.id.slice(0, n);
         var elmPos = document.getElementById((event.target.id.slice(0, n))).getBoundingClientRect().top;
         var scrollToPos = currentPos + elmPos;
         scrollTo(currentPos, scrollToPos);
      }
    }
  }
   // nederste element må nås ellers må en annen sjekk legges til
  function scrollTo(from, to){
    if (from != to) {
      scrolling = true;
      var time = 700;
      var speed = 14;
      var at = from;
      var pxPer = (to-from)/(time/speed);
      var scrollTimer = setInterval(function(){
        window.scroll(0, at)
        if (Math.floor(at) >= Math.floor(to) && pxPer > 0){
          clearInterval(scrollTimer);
          scrolling = false;
        }
        else if (Math.floor(at) <= Math.floor(to) && pxPer < 0) {
          clearInterval(scrollTimer);
          scrolling = false;
        }
        at += pxPer;
     },speed);
   }
 }
}
