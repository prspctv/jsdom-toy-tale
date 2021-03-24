let addToy = false;

  const toyCollection = document.querySelector("#toy-collection")
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }


  });
fetch("http://localhost:3000/toys")
  .then(res => res.json())
  .then(function(toyArray){
    toyArray.forEach(function(toyObj){
      turnToyToDiv(toyObj)
      console.log("fetch block happened")
    })
  })

function turnToyToDiv(toyObject){
  let toyDiv =document.createElement("div")
  toyDiv.className = "card"
  // toyDiv.innerText = `${toyObject}`
  let toyHeader = document.createElement("h2")
      toyHeader.innerText = toyObject.name
  let toyImg = document.createElement("img")
      toyImg.src = toyObject.image
      toyImg.className = "toy-avatar"

  let toyP = document.createElement("p")
    toyP.innerText = toyObject.likes 
  
  let toyButton = document.createElement("button")
    toyButton.className = "like-btn"
    toyButton.innerText = "Like <3"
  
  toyCollection.append(toyDiv)
  toyDiv.append(toyHeader, toyImg, toyP, toyButton)
  console.log(turnToyToDiv)

}






