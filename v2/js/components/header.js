export function renderHeader() {
     return `
    <header class="header" id="main-header">
        <div class="container flex justify-between items-center" style="height: 100%;">
            <a href="index.html" class="logo">
                <h3 style="color: var(--color-primary); font-weight: 800;">LOCALeatPAJU</h3>
            </a>
            <nav class="nav-menu flex gap-lg items-center">
                <a href="index.html" class="nav-link">홈</a>
                <a href="products.html" class="nav-link">마켓</a>
                <a href="#" class="nav-link">농장체험</a>
                <a href="#" class="nav-link">캠핑</a>
                <a href="#" class="nav-link">커뮤니티</a>
            </nav>
            <div class="auth-buttons flex gap-sm">
                <a href="login.html" class="btn btn-outline" style="padding: 8px 16px; font-size: 0.9rem;">로그인</a>
                <a href="#" class="btn btn-primary" style="padding: 8px 16px; font-size: 0.9rem;">회원가입</a>
            </div>
        </div>
    </header>
    `;
}

export function initHeader() {
     const header = document.getElementById('main-header');
     if (header) {
          window.addEventListener('scroll', () => {
               if (window.scrollY > 50) {
                    header.classList.add('scrolled');
               } else {
                    header.classList.remove('scrolled');
               }
          });
     }
}
