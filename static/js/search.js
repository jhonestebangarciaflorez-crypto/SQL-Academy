document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const navLinks = document.querySelectorAll('.sidebar-left a'); // Los enlaces de la barra izquierda

    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        navLinks.forEach((link) => {
        const text = link.textContent.toLowerCase();
        
        // Si coincide con lo que escribe el usuario, lo mostramos; si no, lo ocultamos
        if (text.includes(query)) {
            link.style.display = 'block';
        } else {
            link.style.display = 'none';
        }
        });
    });
});

// Buscar todos los botones con la clase btn-copy
const copyButtons = document.querySelectorAll('.btn-copy');

copyButtons.forEach((button) => {
    button.addEventListener('click', async () => {
        // 1. Busca si está dentro de un contendor con clase .code-block, o si no, usa el padre del botón
        const parentContainer = button.closest('.code-block') || button.parentElement.parentElement;
        
        // 2. Busca la etiqueta <code> o <pre>
        const codeElement = parentContainer.querySelector('code') || parentContainer.querySelector('pre');

        if (!codeElement) {
        console.error('No se encontró ningún elemento <code> o <pre> para copiar.');
        return;
        }

        try {
        // 3. Copia el texto limpio
        await navigator.clipboard.writeText(codeElement.innerText.trim());

        // 4. Feedback visual
        const originalText = button.innerHTML;
        button.innerHTML = '✓ ¡Copiado!';

        setTimeout(() => {
            button.innerHTML = originalText;
        }, 2000);
        } catch (err) {
        console.error('Error al copiar al portapapeles: ', err);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const btnExecute = document.getElementById('btn-execute');
    const resultContainer = document.getElementById('playground-result');

    if (btnExecute && resultContainer) {
        btnExecute.addEventListener('click', () => {
        // Alterna la visibilidad de la tabla de resultados
        resultContainer.classList.toggle('hidden');
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('themeToggle');
    if (!themeToggleBtn) return;

    const btnText = themeToggleBtn.querySelector('span');

    const updateUI = (isLight) => {
        if (btnText) {
        btnText.textContent = isLight ? 'Dark' : 'Light';
        }
    };

    // Cargar preferencia
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
        updateUI(true);
    }

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        updateUI(isLight);
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
});









