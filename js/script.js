document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario (){
  if(document.getElementById("nome").value != "" && document.getElementById("comentario").value != "" && document.getElementById("comentario").value != "Escreva o seu comentário aqui..."){
    alert("Seu comentário será analisado! Caso aprovado, em 24hrs irá aparecer em nosso site.")
  }
  else{
    alert("Por favor, preencha os campos nome e comentário.")
  }
}