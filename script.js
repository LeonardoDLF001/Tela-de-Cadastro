
//Adiciona um ouvinte de evento para o formulário ao enviá-lo
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    //Esta linha evita que o recarregue a página se enviar o formulário
    event.preventDefault();

    //Esta linha recebe os valores dos campos de entrada "nome" e "e-mail"
    const nome = document.getElementById('nome').value; // Armazena o valor do campo "nome"
    const email = document.getElementById('email').value; // Armazena o valor do campo "email"

    // Seleciona o corpo da tabela onde os dados serão inseridos
    const tabela = document.getElementById('usuariosTable').getElementsByTagName('tbody')[0];

    //Cria uma nova linha na tabela
    const novaLinha = tabela.insertRow();

    // Insere células na nova linha para o "nome" e o "email"
    const celulaNome = novaLinha.insertCell(0); // Cria a primeira célula para o nome
    const celulaEmail = novaLinha.insertCell(1); // Cria a segunda célula para o email

    celulaNome.textContent = nome; //Define o conteúdo da célula do "nome"
    celulaEmail.textContent = email; // Define o conteúdo da célula do "e-mail"

    //Limpa todos os campos do formulário para escrever novos cadastros
    document.getElementById('cadastroForm').reset();
});
