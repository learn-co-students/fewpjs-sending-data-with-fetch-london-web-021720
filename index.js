// Add your code here
const form1 = document.querySelector("form")
const body = document.querySelector("body")
const list = document.createElement("ul")
const errors = document.createElement("div")
body.append(errors)
body.append(list)
let formData = {
    dogName: "Byron",
    dogBreed: "Poodle"
  };
   
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
   
  fetch("http://localhost:3000/dogs", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      console.log(object);
    }).catch(function(error) {
        alert("Bad things! Ragnarők!");
        console.log(error.message);
      });


function submitData(name1,email1) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers:
        {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
              name: name1,
              email: email1
          }
        )})
        .then(response =>  response.json())
        .then(object => {
            console.log(object);
            const id = document.createElement("li")
         id.innerHTML = object.id
         list.append(id)
        })
        .catch(function(error) {
            alert("Bad things! Ragnarők!");
            errors.innerHTML = error.message;
          });
       
    }