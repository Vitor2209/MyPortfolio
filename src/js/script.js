// ===================================
// DARK MODE TOGGLE LOGIC (ADICIONADO)
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Função para alterar o ícone do botão
    const updateIcon = (isDark) => {
        const iconSpan = toggleButton.querySelector('.icon');
        if (isDark) {
            // MODO ESCURO ATIVO: Mostra o Sol (para alternar para CLARO)
            iconSpan.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            `;
        } else {
            // MODO CLARO ATIVO: Mostra a Lua (para alternar para ESCURO)
            iconSpan.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            `;
        }
    };

    // Função para definir o tema (e salvar a preferência)
    const setTheme = (isDark) => {
        if (isDark) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
        updateIcon(isDark);
    };

    // 1. Carregar o tema ao iniciar
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        setTheme(savedTheme === 'dark');
    } else {
        // Se não houver preferência salva, usa a preferência do sistema (se for Dark, aplica Dark Mode)
        setTheme(prefersDark);
    }
    
    // 2. Event Listener para o clique do botão
    toggleButton.addEventListener('click', () => {
        const isDarkNow = body.classList.contains('dark-mode');
        setTheme(!isDarkNow); // Inverte o tema atual
    });


    // ===================================
    // SEU CÓDIGO EXISTENTE ABAIXO
    // ===================================

    // Smooth scroll and navigation
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('data-section');
            const section = document.getElementById(sectionId);
            
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
            
            // Update active button
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Update active navigation on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Ajuste aqui para pegar a seção um pouco antes de atingir o topo
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navButtons.forEach(button => {
            button.classList.remove('active');
            if (button.getAttribute('data-section') === current) {
                button.classList.add('active');
            }
        });
    });

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all major elements
    // Adicionado .skills-grid para cobrir a seção de habilidades também
    const animatedElements = document.querySelectorAll('.project-card, .skills-grid, .timeline-item'); 
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });

    // Navbar background on scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Shadow sutil que funciona em ambos os modos
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

}); // Fim do DOMContentLoaded