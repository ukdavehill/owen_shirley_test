"use strict";!function(){var a,r,c,s,d,t=[{name:"https://www.youtube.com/embed/J9mjbzqqA_M",order:"v-1",title:"Sound Design & Mix",description:"",clientName:"Al Boardman",clientLink:"https://www.alboardman.com/"},{name:"https://player.vimeo.com/video/294531001",order:"v-2",title:"Full audio post-production",description:"",clientName:"Shunk Films",clientLink:"https://www.shunkfilms.co.uk/",id:"cropped-vid1"},{name:"https://player.vimeo.com/video/206720872",order:"v-3",title:"Sound Editing",description:"The short film 'Breakdown' won the award for Best Sound (Drama) at the <a href='https://rts.org.uk/article/rts-west-england-awards-winners-announced' target='_blank'>Royal Television Society West of England Awards 2018.</a>",clientName:"Dave Mackie",clientLink:"https://davemackie.co.uk/"},{name:"https://player.vimeo.com/video/245042663",order:"v-4",title:"Sound Design",description:"Collaboration with motion graphics designer, Matt Gilligan. Voice Over taken from <a href='https://play.acast.com/s/distractionpieces/blindboyofrubberbandits-distractionpiecespodcastwithscroobiuspip-89' target='_blank'>Scroobius Pip’s Distraction Pieces podcast #89</a>",clientName:"Matt Gilligan",clientLink:"https://www.mattgilligan.com/"},{name:"https://www.youtube.com/embed/HOIA6YOJfTo",order:"v-5",title:"Full audio post-production",description:"I edited and mixed the sound for epsidoes 1 to 6 of ‘The Drunk’ webseries, starring Seann Walsh.",clientName:"Gabriel Foster-Prior",clientLink:"http://www.fosterprior.co.uk/"},{name:"https://player.vimeo.com/video/175214101",order:"v-6",title:"Music & Sound Design",description:"For this work, I was given a brief of providing a clean, slick and contemporary soundtrack, working to the movement of the animated font.",clientName:"Chris Joyce",clientLink:"https://www.velvetbadger.com/info"},{name:"https://www.youtube.com/embed/g7N8sG1VahQ",order:"v-7",title:"Full audio post-production",description:"This is the fifth and final episode of the ‘One lapse can last a lifetime’ series for Mitie.",clientName:"JS Productions",clientLink:"https://www.jsproductions.tv/"},{name:"https://player.vimeo.com/video/148634793",order:"v-8",title:"Sound Design & Mix",description:"",clientName:"Scubaboy Inc",clientLink:"http://www.scubaboyinc.co.uk/"},{name:"https://player.vimeo.com/video/158911645",order:"v-9",title:"Music & Sound Design",description:"",clientName:"Al Boardman",clientLink:"https://www.alboardman.com/",id:"cropped-vid8"},{name:"https://www.youtube.com/embed/Q20fx2BJJbI",order:"v-10",title:"Full audio post-production",description:"",clientName:"JS Productions",clientLink:"https://www.jsproductions.tv/"},{name:"https://player.vimeo.com/video/144639395",order:"v-11",title:"Full audio post-production",description:"",clientName:"Jonathan Hardy",clientLink:"http://www.jonathanhardyfilm.com/",id:"cropped-vid10"},{name:"https://www.youtube.com/embed/jwv4wZsohjU",order:"v-12",title:"Sound Design & Mix",description:"",clientName:"Scubaboy Inc",clientLink:"http://www.scubaboyinc.co.uk/"},{name:"https://player.vimeo.com/video/144544510",order:"v-13",title:"Full audio post-production",description:"",clientName:"Matty Groves",clientLink:"https://mattygroves.co.uk/"},{name:"https://www.youtube.com/embed/ZhxRnjB8F3I",order:"v-14",title:"Sound Design & Mix",description:"",clientName:"Al Boardman",clientLink:"https://www.alboardman.com/"},{name:"https://www.youtube.com/embed/nRfhYTcr43U",order:"v-15",title:"Sound Design & Mix",description:"",clientName:"JS Productions",clientLink:"https://www.jsproductions.tv/"},{name:"https://player.vimeo.com/video/124807425",order:"v-16",title:"Sound Design",description:"Submission to the 2015 <a href='http://sci-fi-london.com/48-hour-film-challenge' target='_blank'>48 HOUR FILM CHALLENGE.</a> This film was written, shot and edited between 11-13 April 2015.",clientName:"Robot Dinsosaur",clientLink:"http://www.robot-dinosaur.co.uk/"}],i=document.querySelector(".video-area");function o(e){var t=e.target,i=t.parentNode,o=i.parentNode,n=o.parentNode;t.matches(".text h4")?(r=i,c=(a=o).querySelector(".video"),s=i.querySelector("p"),d=o.querySelector(".icon")):t.matches(".text i")?(r=o,c=(a=n).querySelector(".video"),s=o.querySelector("p"),d=i):t.matches("div.text")?(r=t,c=(a=i).querySelector(".video"),s=t.querySelector("p"),d=i.querySelector(".icon")):t.matches(".text p")?(r=i,c=(a=o).querySelector(".video"),s=t,d=o.querySelector(".icon")):t.matches("div.icon")?(r=i,c=(a=o).querySelector(".video"),s=i.querySelector("p"),d=t):a=!1}function e(e){e.target.matches("#page-message")||e.target.parentElement.matches("#page-message")||e.target.matches("a")||(e.preventDefault(),o(e),a&&a.classList.toggle("touched"))}function n(e){o(e),a&&(a.classList.toggle("item1"),r.classList.toggle("text1"),c.classList.toggle("video1"),s.classList.toggle("active"),d.classList.toggle("fa-rotate-180"))}document.addEventListener("DOMContentLoaded",function(){var e;e=t.map(function(e){return'\n      <div class="item '.concat(e.order,'">\n      <div class="text">\n      \n      <h4>').concat(e.title,"</h4>\n        <p>").concat(e.description,'\n        <br>Client: <a href="').concat(e.clientLink,'" target="_blank">').concat(e.clientName,'</a>\n        </p>\n        <div class="icon"><i class="fas fa-caret-down"></i></div>\n        </div>\n        \n        \n        <div class = "video" id="').concat(e.id,'">\n        <img class="imgiframe"src="https://img.youtube.com/vi/J9mjbzqqA_M/default.jpg" alt="">\n            \n        \n        \x3c!-- <iframe\n                src="').concat(e.name,'"\n                loading="lazy"\n                frameborder="0"\n                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"\n                allowfullscreen\n            ></iframe> --\x3e\n        </div>\n    </div>\t')}).join(""),i.insertAdjacentHTML("afterbegin",e)}),i.addEventListener("mousedown",e),i.addEventListener("mouseup",n),i.addEventListener("touchstart",e),i.addEventListener("touchend",n);var l=document.querySelector(".hamburger"),m=l.querySelector(".fa-bars"),u=l.querySelector(".fa-times"),p=document.querySelector(".hamburger-menu");l.querySelector("ul");m.addEventListener("click",function(){p.classList.remove("hide-menu"),u.classList.remove("inactive"),m.classList.add("inactive")}),u.addEventListener("click",function(){p.classList.add("hide-menu"),u.classList.add("inactive"),m.classList.remove("inactive")})}();