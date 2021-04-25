function limpar(){
    document.getElementById("botaolimpar")
    location.href = "ex06.html";
}

function cadastrar(){
    var x = document.getElementById("nome").value;
    var mail = document.getElementById("email").value;
    var date = document.getElementById("data").value;
    var school = document.getElementById("escola").value;
    var sex = document.getElementById("sexo").value;
    return alert ("Seu nome é " + x + " Seu e-mail é " + mail + " Sua data de nascimento é " + date
    + " Escolaridade " + school + " e sexo é " + sex);       
}