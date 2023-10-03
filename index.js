function sauver(){
    let nom = document.getElementById("name").value
    let email = document.getElementById("email").value
    let age = document.getElementById("age").value
   let type = document.formulaire.type.value
 

if(nom ==""){
    alert("Vous devez informer le nom")
   
}if(email ==""){
    alert("Vous devez informer l'email")

}if(age ==""){
    alert("Vous devez informer l'age")

}if(type ==""){
    alert("Vous devez informer le type")
}else{
    alert("Vous avez enregiatré les informations")
}

}

