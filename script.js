// Adiciona um ouvinte de evento para o formulário ao ser enviado
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    // Evita que o formulário seja enviado e a página recarregue
    event.preventDefault(); 

    // Captura os valores dos campos de entrada (nome e email)
    const nome = document.getElementById('nome').value; // Armazena o valor do campo nome
    const email = document.getElementById('email').value; // Armazena o valor do campo email

    // Seleciona o corpo da tabela onde os dados serão inseridos
    const tabela = document.getElementById('usuariosTable').getElementsByTagName('tbody')[0]; 

    // Cria uma nova linha na tabela
    const novaLinha = tabela.insertRow(); 

    // Insere células na nova linha para o nome e o email
    const celulaNome = novaLinha.insertCell(0); // Cria a primeira célula (para o nome)
    const celulaEmail = novaLinha.insertCell(1); // Cria a segunda célula (para o email)

    // Adiciona os valores capturados às células correspondentes
    celulaNome.textContent = nome; // Define o conteúdo da célula do nome
    celulaEmail.textContent = email; // Define o conteúdo da célula do email

    // Limpa os campos do formulário para novos cadastros
    document.getElementById('cadastroForm').reset(); 
});


document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    //
    event.preventDefault();

    //Está linha recebe os valores dos campos de entrada "nome" e "email"
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    const tabela = document.getElementById('usuariosTable').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();

    const celulaNome = novaLinha.insertCell(0);
    const celulaEmail = novaLinha.insertCell(1);

    celulaNome.textContent = nome;
    celulaEmail.textContent = email;

    document.getElementById('cadastroForm').reset();
});
