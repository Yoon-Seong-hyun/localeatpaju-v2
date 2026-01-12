export function renderProductCard(product) {
    const badgeHtml = product.badges && product.badges.length > 0
        ? `<div class="badge" style="position: absolute; top: 12px; left: 12px; background: var(--color-accent); color: white; padding: 4px 10px; font-size: 0.75rem; font-weight: 700; border-radius: 4px; z-index: 2;">${product.badges[0]}</div>`
        : '';

    return `
    <div class="product-card fade-in">
        <a href="#">
            <div class="product-img-wrap">
                ${badgeHtml}
                <img src="${product.image}" alt="${product.name}" class="product-img">
                <div style="position: absolute; bottom:0; left:0; right:0; background: linear-gradient(to top, rgba(0,0,0,0.5), transparent); height: 50px;"></div>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3>${product.name}</h3>
                <p style="font-size: 0.9rem; color: #888; margin-bottom: 8px; line-height: 1.4;">${product.description.substring(0, 35)}...</p>
                <div class="flex items-center justify-between">
                     <p style="color: var(--color-primary); font-weight: 700; font-size: 1.1rem; font-family:var(--font-main);">${formatPrice(product.price)}</p>
                     <span style="font-size: 1.2rem; color: var(--color-border);"><i class="fas fa-plus-circle"></i></span>
                </div>
            </div>
        </a>
    </div>
    `;
}

function formatPrice(price) {
    return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(price);
}
