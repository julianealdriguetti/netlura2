// Função para alternar entre dark e light mode
function toggleTheme() {
    const body = document.body;
    const button = document.getElementById('theme-toggle');

    // Verifica se o tema atual é dark
    const isDark = body.classList.contains('light-mode');

    if (isDark) {
        // Muda para dark mode
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        button.textContent = '🌙'; // Ícone da lua para dark mode
        localStorage.setItem('theme', 'dark');
    } else {
        // Muda para light mode
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        button.textContent = '☀️'; // Ícone do sol para light mode
        localStorage.setItem('theme', 'light');
    }
}

// Função para aplicar o tema salvo no localStorage
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    const button = document.getElementById('theme-toggle');

    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        button.textContent = '☀️';
    } else {
        document.body.classList.add('dark-mode');
        button.textContent = '🌙';
    }
}

// Salva perfil ativo em localStorage quando clica num perfil
function saveActiveProfile(event) {
    const profile = event.currentTarget;
    const avatar = profile.querySelector('img');
    const nameEl = profile.querySelector('figcaption');

    if (!avatar || !nameEl) return;

    const imagem = avatar.getAttribute('src');
    const nome = nameEl.textContent.trim();

    if (imagem && nome) {
        localStorage.setItem('perfilAtivoImagem', imagem);
        localStorage.setItem('perfilAtivoNome', nome);
    }
}

function attachProfileListeners() {
    const profiles = document.querySelectorAll('a.profile');

    profiles.forEach(profile => {
        profile.addEventListener('click', saveActiveProfile);
    });
}

// Aplica o tema salvo e configura os perfis quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    applySavedTheme();
    attachProfileListeners();
});