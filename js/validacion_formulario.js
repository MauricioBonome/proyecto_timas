const nombre = document.getElementById("name")
const email =  document.getElementById("email")
const textarea = document.getElementById("message")
const form = document.getElementById("form")
const parrafo = document.getElementById("warning")

form.addEventListener("submit", e => {
    e.preventDefault()
    let warning = ""
    let entrar = false
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(nombre.value.length <2){
        alert('Debes ingresar tu nombre')
        entrar = true
    }
    console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)){
        alert(` ¡Tu E-mail no es valido intenta nuevamente !`)
        entrar = true
    }
    if(textarea.value.length <2){
        alert(` ¡Hola Deja un mensaje para que podamos ayudarte!`)
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warning
    }
    
})