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
const closebtn = document.querySelector(".closebtn")
const creat = document.querySelector(".creat")
const close = document.querySelector(".close")
const modal = document.querySelector(".modal")
const deleteloc = document.querySelector(".deleteloc")



let empty =[]


  function mapposts (elem){
   const mydata =  elem.map(e=>{
        return `<div class="smallpost">
                  <div class="postDiv">${e.title}</div> 

                  <div class="mybtns">

                  <div>
                  <a href="newpage.html?id=${e.id}"><button >See Post</button></a>
                  </div>
                  <div>
                  <button onclick="deleteFromLocalStoraj(${e.id})">delete</button>
                   </div>
                  </div>
        
                </div>
        `
      
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
  closebtn.addEventListener('click',()=>{
    if(modal.classList.contains('showmodal')){
      modal.classList.remove('showmodal') }
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


function deleteFromLocalStoraj(id){
 
  const filterpost = allpost.findIndex((obj) => obj.id === id);

  if (filterpost > -1) {
    allpost.splice(filterpost, 1);
  }
localStorage.setItem("posts", JSON.stringify(allpost))
mapposts(allpost)
}      


function creatPost(){
  const inputTitle = document.querySelector(".inputTitle")
  const inputText = document.querySelector(".inputText")
const x = JSON.parse(localStorage.getItem("posts") || "[]");

const dd = x.length+1

 const typOfObj = {
  body : inputText.value,
  id :  dd,
  title: inputTitle.value,
  userId : 1
 }
 const newValue = [...allpost,typOfObj] 

 console.log(newValue)
 localStorage.setItem("posts", JSON.stringify(newValue))
mapposts(newValue)
}