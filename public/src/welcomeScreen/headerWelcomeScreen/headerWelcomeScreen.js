document.addEventListener('DOMContentLoaded', function() {
    // Carrega o conteúdo do arquivo HTML e insere no contêiner
    fetch('headerWelcomeScreen/headerWelcomeScreen.html')
        .then(response => response.text())
        .then(data => {
            // Cria um elemento temporário para armazenar o conteúdo carregado
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;

            // Extrai o conteúdo do body do HTML carregado
            const headerContent = tempDiv.querySelector('body').innerHTML;

            // Insere o conteúdo no contêiner
            document.getElementById('header-content').innerHTML = headerContent;

            // Adiciona o link do CSS ao head do documento principal
            const link = document.createElement('link');
            link.rel = "stylesheet";
            link.href = 'headerWelcomeScreen/headerWelcomeScreen.css';
            document.head.appendChild(link);

            console.log('Header do Welcome Screen carregado com sucesso!');
        })
        .catch(error => console.error('Erro ao carregar o header do Welcome Screen:', error));
});