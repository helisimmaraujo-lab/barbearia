

const botao = document.querySelector("#btn-cor");
const logo = document.querySelector(".logo");

botao.addEventListener("click", () => {
  logo.style.color = "red";
});

const Agendar = document.querySelector("#botao-agendar");

Agendar.addEventListener("click", () => {
  const nome = document.querySelector("#nome").value;
  const telefone = document.querySelector("#telefone").value;
  const servico = document.querySelector("#servico").value;

  if (nome === "" || telefone === "" || servico === "") {
    alert("por favor preecha todos os campos!");
    return;
  }

  alert("Agendamento realizado com sucesso!");
});
