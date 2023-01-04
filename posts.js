async function posts (){
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
    let  data = await resp.json()
    mapposts(data)
    
} 

  posts()
const post = document.querySelector(".post")


  const mapposts = (elem)=>{
   const mydata =  elem.map(e=>{
        return `<div class="postDiv">${e.title}<button>See Post</button></div>`
    }).join("")
    post.innerHTML = mydata
  }