// Add your code here

function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            name: `${name}`,
            email: `${email}`
            })
        })
    .then( response => response.json() )
    .then( object => {
        let extra = document.querySelector("body")
        let extraText = `The ID is ${object.id}`
        extra.innerHTML = extraText
    } )
    .catch(function(error) {
        alert("ERROR");
        let extra = document.querySelector("body")
        let extraText = `The error is ${error.message}`
        extra.innerHTML = extraText
      });
}

