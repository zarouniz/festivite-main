// --------------------------
// Alternância de estilos (Claro/Escuro)
// --------------------------

// Seleciona os campos de radio
const lightRadio = document.getElementById('light');
const darkRadio = document.getElementById('dark');
const styleTypeElement = document.getElementById('style-type');
const body = document.body;  // Seleciona o corpo da página para alterar o tema

// Lida com a mudança do radio "light"
lightRadio.addEventListener('change', () => {
    if (lightRadio.checked) {
        styleTypeElement.textContent = 'Claro';
        body.classList.remove('escuro');
        body.classList.add('claro');
    }
});

// Lida com a mudança do radio "dark"
darkRadio.addEventListener('change', () => {
    if (darkRadio.checked) {
        styleTypeElement.textContent = 'Escuro';
        body.classList.remove('claro');
        body.classList.add('escuro');
    }
});

// Adiciona funcionalidade de troca de tema via clique
document.querySelector('.radio-boolean').addEventListener('click', (event) => {
    // Verifica se o clique foi em um dos inputs ou seus labels
    if (event.target.tagName.toLowerCase() !== 'input') {
        // Alterna entre dark e light sem bloquear navegação por teclado
        if (darkRadio.checked) {
            lightRadio.checked = true;
            lightRadio.dispatchEvent(new Event('change')); // Dispara evento 'change'
            lightRadio.focus(); // Foca no input "light"
        } else {
            darkRadio.checked = true;
            darkRadio.dispatchEvent(new Event('change')); // Dispara evento 'change'
            darkRadio.focus(); // Foca no input "dark"
        }
    }
});
