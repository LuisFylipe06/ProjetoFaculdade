document.addEventListener('DOMContentLoaded', function() {
    fetch('headerWelcomeScreen/headerWelcomeScreen.html')
        .then(response => response.text())
        .then(data => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;

            
            const headerContent = tempDiv.innerHTML;

            
            document.getElementById('header-content').innerHTML = headerContent;

            const link = document.createElement('link');
            link.rel =  'stylesheet';
            link.href = 'headerWelcomeScreen/headerWelcomeScreen.css';
            document.head.appendChild(link);

            console.log('Header do Welcome Screen carregado com sucesso!');
        })
        .catch(error => console.error('Erro ao carregar o header do Welcome Screen:', error));
});