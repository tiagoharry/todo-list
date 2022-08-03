const botaoAdicionar = document.querySelector('#adicionar');

botaoAdicionar.addEventListener('click', (evento) => {
  evento.preventDefault();

  const form = document.querySelector('#form');
  const nome = document.querySelector('#nome');
  const input = nome.value;

  const ul = document.querySelector('#lista');

  const nomeLi = document.createElement('li');
  nomeLi.classList.add('nome');

  const erro = document.querySelector('#mensagem__erro');
  if (!nome.checkValidity()) {
    erro.textContent = "É nescesário digitar um nome";
    nomeLi.style.display = "none";
  } else {
     erro.style.display = "none";
     nomeLi.textContent = input;
  }

  nomeLi.addEventListener('click', () => {
    nomeLi.style.backgroundColor = "green";
  });

  const botaoDeleta = document.createElement("button");
  botaoDeleta.classList.add('botao_deleta');
  botaoDeleta.appendChild(document.createTextNode("X"));
  nomeLi.appendChild(botaoDeleta);

  botaoDeleta.addEventListener('click', (event) => {
    event.target.parentNode.classList.add('fadeOut');

    setTimeout(function () {
      event.target.parentNode.remove();
    }, 300);

  });

  ul.appendChild(nomeLi);

  form.reset();
});
