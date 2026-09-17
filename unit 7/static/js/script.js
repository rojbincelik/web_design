const form=document.getElementById("777")
const result=document.getElementById("999")

form.addEventListener("submit", async function (event) {
    event.preventDefault()
    const information={ name : form.name.value , email : form.email.value , message : form.message.value  }
    const response = await fetch("/newroute" , {method:"POST", 
                                                headers: { "Content-Type": "application/json" },
                                                body:JSON.stringify(information)})    



const data = await response.json()
result.textContent = "Thank you " + data.name + ". We got your message."
})
