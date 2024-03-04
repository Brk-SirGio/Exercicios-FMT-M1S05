let input = document.querySelector("#nova-tarefa");
let button = document.querySelector("#add-tarefa");
let ul = document.querySelector("#afazeres");
let itens = document.querySelectorAll(".item-lista");
let tarefasFeitas = document.querySelectorAll(".check-tarefa[checked=true]");
var numeroFeitas = tarefasFeitas.length;


let contador = document.querySelector("#contador");

// Adicione um evento de clique ao botão de adicionar tarefa
button.addEventListener("click", adicionarTarefa);

// Adicione um evento de pressionar tecla ao input de nova tarefa
input.addEventListener("keypress", function(event) {
  // Verifique se a tecla pressionada é o enter
  if (event.key === "Enter" || event.keyCode === 13) {
    // Chame a função de adicionar tarefa
    adicionarTarefa(event);
  }
});

// Crie uma função para adicionar uma nova tarefa
function adicionarTarefa(event) {
  // Previna o comportamento padrão do evento
  event.preventDefault();

  const valor = input.value;

  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  const label = document.createElement("label");
  const button = document.createElement("button");
  const span = document.createElement("span");
  
  li.classList.add("item-lista");
  checkbox.type = "checkbox";
  checkbox.classList.add("check-tarefa");
  label.textContent = valor;

  button.setAttribute("class", "remover-item-lista");
  span.setAttribute("class", "material-symbols-outlined");
  span.textContent = "delete_forever";

  const id = "item" + (ul.children.length + 1);
  checkbox.id = id;
  label.setAttribute("for", id);
  label.classList.add("to-do-texto");
    
  button.appendChild(span);
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(button);
  ul.appendChild(li);

  input.value = "";

  atualizarContador()

  button.addEventListener("click", function() {
    window.confirm("Tem certeza que deseja excluir?") && ul.removeChild(li);
    atualizarContador()
  })
}

for (let item of itens) {
    let button = item.querySelector(".remover-item-lista");
    button.addEventListener("click", function() {
      window.confirm("Tem certeza que deseja excluir?") && ul.removeChild(item);
      atualizarContador()
    });
  }

  function atualizarContador() {
    // Seleciona todos os elementos li dentro do elemento afazeres
    var itens = document.querySelectorAll("#afazeres li");
  
    // Obtém o número de elementos do array itens
    var numero = itens.length;
  
    // Atualiza o texto do elemento contador com o número
    contador.textContent = `Você possui ${numero} tarefas`;

  }//está faltando atualizar quando da o check para concluir
