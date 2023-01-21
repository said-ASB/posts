
const url = window.location.search;
console.log(url)
const value = new URLSearchParams(url);
console.log(value)
const id = value.get('id')
console.log(id)

  async function getpost (){
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    let  selfdata = await resp.json()
    console.log(selfdata)
    myposst(selfdata)
} 
getpost()


const branchpost = document.querySelector('.branchpost')





function myposst(h){
  branchpost.innerHTML =  `<h1>${h.title}</h1>
  <h4>*${h.body}</h4>`
  
}

 