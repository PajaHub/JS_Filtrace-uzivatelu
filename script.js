const result = document.querySelector(".user-list")
const input = document.querySelector(".input-filter")
const userList = []

getData()

input.addEventListener("input", function(e){
    dataFilter(e.target.value)
})

// async = asynchronni js, neceka na jeho dokonceni a pokracuje dal
async function getData(){
   const allUsers = await fetch("https://randomuser.me/api?results=100")

   //json prelozi nactené data do jine podoby pro js
   const data = await allUsers.json() 
   console.log(data)
   //vycisti seznam uživatelů
   result.innerHTML = ""

   

   data.results.forEach( user => {
      const li = document.createElement("li")

      li.innerHTML = 
        `<img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-info">
        <h3>${user.name.first} ${user.name.last}</h3>
        <p>${user.location.city}, ${user.location.country} </p>
        </div>`
      result.appendChild(li)

      userList.push(li) //naplneni pole uzivatelema
      
   })

}

function dataFilter(inputText){
    userList.forEach(oneUser => {
        if(oneUser.innerText.toLowerCase().includes(inputText.toLowerCase())){
            oneUser.classList.remove("hide")
        } else {
            oneUser.classList.add("hide")
        }
    })
}