// /*document.addEventListener("keydown",function(e){
//     let doc = document.getElementsByTagName("body")[0]
//     doc.innerHTML = e.key
    
// })

// document.addEventListener("click",function(e){
//     let doc = document.getElementsByTagName("body")[0]
//     doc.innerHTML = e.target

// })*/

// document.addEventListener("DOMContentLoaded",function(e){
    
//    // doc.textContent = e.target

//     setInterval(function(){
//         let doc = document.getElementsByTagName("body")[0]
//         let num = 0;


//         let posx = Math.floor(Math.random()* 500)
//         let posy = Math.floor(Math.random()* 500)

//         let div = document.createElement("div")
//         div.style.backgroundColor = "black";
//         div.style.position="sticky"
//         div.style.width =`${posx}px`
//         div.style.height = `${posx}px`
//         div.style.opacity ="0.5";
//         div.style.transform = `translate(${posx}px,${posy}px)`
       

//         doc.appendChild(div)
//         let r = Math.floor(Math.random()*240)
//         let g = Math.floor(Math.random()*240)
//         let b = Math.floor(Math.random()*240)
//         console.log("r: "+r)
//         console.log("g: "+g)
//         console.log("b: "+b)
//         //doc.innerHTML = num;
//         num+=1
//         doc.style.backgroundColor = `rgb(${r},${g},${b})`

//         doc.removeChild(doc.firstChild)
//     },500)
    
// })