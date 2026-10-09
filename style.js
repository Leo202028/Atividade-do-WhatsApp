
const telefone = document.getElementById("telefone");
const campoSenha = document.getElementById("senha"); 
const entrar = document.getElementById("entrar");
const erro = document.getElementById("erro");

entrar.addEventListener("click", function () {

    const numero = telefone.value.trim();
    const senha = campoSenha.value.trim(); 
  
    if (numero === "") {
        erro.textContent = "Digite seu número de telefone.";
        telefone.focus();
        return;
    }

    if (numero.length < 10) {
        erro.textContent = "Digite um número de telefone válido.";
        telefone.focus();
        return;
    }

    if (senha === "") {
        erro.textContent = "Digite sua senha.";
        campoSenha.focus(); 
        return;
    }

    erro.textContent = "";

   
    entrar.textContent = "Entrando...";
    entrar.disabled = true;

    setTimeout(function () {
        alert("Login realizado com sucesso!");
        
        entrar.textContent = "Continuar";
        entrar.disabled = false;
    }, 1500);
});
