var tc = 0;
function validar_formulario_cadastro(){
    let email = document.getElementById('valor_email').value;
    let senha1 = document.getElementById('valor_senha').value;
    let senha2 = document.getElementById('valor_confirmar_senha').value;


                      //Qualquer char @    dominio    . letras  {de 2 a 4 caracteres}
    let emailPadrao = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/              //Definindo o formato válido (máscara)
    if(tc >2){
        alert("Você excedeu o número máximo de tentativas!")
        document.getElementById('valor_email').disabled = true;
        document.getElementById('valor_senha').disabled = true;
        document.getElementById('valor_confirmar_senha').disabled = true;
    }
    if(!email.match(emailPadrao)){ //!match (se o que foi digitado não é igual a máscara)
        alert("Por favor, digite um e-mail válido!")
        tc++;
        console.log(tc);
        return false;
    }

    //Verifica se a senha1 tem, no mínimo, 8 caracteres
    if(senha1.length < 8){
        alert("A senha deve ter, no mínimo, 8 caracteres")
        tc++;
        console.log(tc);
        return false
    }

    //verificando se as duas senhas são iguais
    if(senha1 != senha2){
        alert("As senhas não coincidem! Por favor, tente novamente :3")
        console.log(tc);
        return false
    }
    
    return true;
}

var t = 0;
function validar_formulario_login(){
    let email = document.getElementById('valor_email').value;
    let senha1 = document.getElementById('valor_senha').value;
    

    let emailPadrao = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    
    if(t > 2){
        alert("Você excedeu o número máximo de tentativas!")
        document.getElementById('valor_email').disabled = true;
        document.getElementById('valor_senha').disabled = true;
    }

    if(!email.match(emailPadrao)){ //!match (se o que foi digitado não é igual a máscara)
        alert("Por favor, digite um e-mail válido!")
        t++;
        console.log(t)  
        return false;
        
             
    }

    if(senha1.length < 8){
        alert("A senha deve ter, no mínimo, 8 caracteres")
        t++;
        console.log(t) 
        return false        
    }



    return true;

}