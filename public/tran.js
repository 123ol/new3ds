const obse = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements=document.querySelectorAll(".hidden");
hiddenElements.forEach((el)=>obse.observe(el));


// var links = document.getElementsByClassName("body");
// for (var i = 0; i < links.length; i++) {
//   links[i].innerHTML = links[i].innerHTML.upLowerCase();
// }


// function myFunction() {
//   const element = document.getElementById("click");
//   element.classList.add("c");
//   console.log("ok working") ;
// }