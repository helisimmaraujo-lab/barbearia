const botaoAgendar = document.querySelector("#botao-agendar");
botaoAgendar.addEventListener("click", function(){
    alert("Agendamento realizado com sucesso!")
});

const botao = document.querySelector('#btn-cor');
const logo = document.querySelector(".logo");

botao.addEventListener("click",() => {

logo.style.color = "red";

});