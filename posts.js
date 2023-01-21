async function posts (){
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
    let  data = await resp.json()
    localStorage.setItem("posts", JSON.stringify(data))
    console.log(data)


} 
posts()
const allpost = JSON.parse(localStorage.getItem("posts") || "[]");
  
const post = document.querySelector(".post")
const selectid = document.querySelector(".selectid")
const creat = document.querySelector(".creat")
const close = document.querySelector(".close")
const modal = document.querySelector(".modal")


let empty =[]


  function mapposts (elem){
   const mydata =  elem.map(e=>{
        return `<div class="postDiv">${e.title}<a href="newpage.html?id=${e.id}"><button>See Post</button></div></a>`
      
    }).join("")
    post.innerHTML = mydata
  }



  const allId = ()=>{
    allpost.map(x=>{
    empty.push(x.userId)
   })
   let newone = empty;

   Options = [...new Set(newone)];

   myopt = Options.map(c=>
    `<option>${c}</option>`
   )
   selectid.innerHTML += myopt.join('')
  }
  allId()


creat.addEventListener('click',()=>{
  modal.classList.add('showmodal')
})


close.addEventListener('click',()=>{
  if(modal.classList.contains('showmodal')){
    modal.classList.remove('showmodal')
    modal.classList.add('.modal')
  }
    })

    selectid.addEventListener("click", () => { theid() });    
    function  theid(){
      
      const idinput = selectid.value
      
      if(idinput === 'text'){
           mapposts(allpost)
      }else{
        const filtered = allpost.filter(item=>item.userId == idinput
               
        );
        mapposts(filtered)
      }
      
       }

       mapposts(allpost)
