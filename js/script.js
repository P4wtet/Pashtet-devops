function up(){var e=Math.max(document.body.scrollTop,document.documentElement.scrollTop);return e>0?(window.scrollBy(0,-((e+100)/10)),t=setTimeout("up()",20)):clearTimeout(t),!1}window.onscroll=()=>{let e=document.querySelector(".header"),l=window.scrollY;l>300?e.classList.add("header_fixed"):l<100&&e.classList.remove("header_fixed")};const anchors=document.querySelectorAll('a[href*="#"]');for(let anchor of anchors)anchor.addEventListener("click",function(e){e.preventDefault();let l=anchor.getAttribute("href");document.querySelector(""+l).scrollIntoView({behavior:"smooth",block:"start"})});!function(){let e=function(e,l){let r=document.querySelector(".header").clientHeight,o=document.querySelector(e).getBoundingClientRect().top-r,c=window.pageYOffset,n=null,i=function(e){var r,s,a,u;null===n&&(n=e);let f=e-n,h=(r=f,s=c,a=o,u=l,(r/=u/2)<1?a/2*r*r+s:-a/2*(--r*(r-2)-1)+s);window.scrollTo(0,h),f<l&&requestAnimationFrame(i)};requestAnimationFrame(i)};!function(){let l=document.querySelectorAll(".js-scroll");l.forEach(l=>{l.addEventListener("click",function(){let l=this.getAttribute("href");e(l,1e3)})})}()}();