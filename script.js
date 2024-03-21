const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorMessage = document.getElementById('error')

form.addEventListener('submit' , (e) => {
    let messages = []
    if (name.value === "" || name.value == null) {
        messages.push('Type something')
    }

    if (password.value.length <= 6) {
        messages.push('Password must be longer than 6 Characters')
    }

    if (messages.length > 0) {

        errorMessage.innerText = messages.join(",")
        e.preventDefault()
        
    }
    
    
})