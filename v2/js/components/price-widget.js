import { formatPrice } from '../api.js';

export function renderPriceWidget(data) {
     const itemsHtml = data.items.map(item => {
          const saving = item.marketPrice - item.localPrice;
          const trendIcon = item.trend === 'up' ? 'text-red-500 fa-arrow-up' :
               item.trend === 'down' ? 'text-blue-500 fa-arrow-down' : 'text-gray-400 fa-minus';

          return `
        <div class="price-item" style="border-bottom: 1px solid #eee; padding: 16px 0;">
            <div class="flex justify-between items-center mb-1">
                <span style="font-weight: 600; font-size: 1.05rem;">${item.name}</span>
                <span style="font-size: 0.85rem; color: #888;">
                    전국 평균 대비 <span style="color: var(--color-primary); font-weight: 700;">${Math.round((saving / item.marketPrice) * 100)}% 저렴</span>
                </span>
            </div>
            <div class="flex justify-between items-center">
                <div style="font-size: 0.9rem; color: #666;">
                    평균가 <span style="text-decoration: line-through;">${formatPrice(item.marketPrice)}</span>
                </div>
                <div class="flex items-center gap-sm">
                    <span style="font-weight: 700; color: var(--color-text-main); font-size: 1.1rem;">
                        ${formatPrice(item.localPrice)}
                    </span>
                </div>
            </div>
            <div style="margin-top: 8px; font-size: 0.8rem; color: #999; display: flex; align-items: center; gap: 4px;">
                <i class="fas ${trendIcon}" style="font-size: 0.7rem;"></i> 
                <span>최근 시세 동향: ${item.trend === 'up' ? '상승세' : item.trend === 'down' ? '하락세' : '보합세'}</span>
            </div>
        </div>
        `;
     }).join('');

     return `
    <div class="price-widget-card" style="background: white; border-radius: 16px; padding: 32px; box-shadow: 0 10px 30px rgba(0,0,0,0.08);">
        <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 2px solid var(--color-text-main);">
            <div class="flex justify-between items-end">
                <h3 style="font-family: var(--font-serif); font-size: 1.5rem; margin: 0;">오늘의 시세</h3>
                <span style="font-size: 0.85rem; color: #666;">${data.date} 기준 (aT 제공)</span>
            </div>
            <p style="font-size: 0.9rem; color: var(--color-text-sub); margin-top: 8px;">
                중간 유통 마진을 뺀 로컬잇파주의 투명한 가격을 확인하세요.
            </p>
        </div>
        <div class="price-list">
            ${itemsHtml}
        </div>
        <div style="margin-top: 24px; text-align: center;">
            <a href="#" style="font-size: 0.85rem; color: var(--color-text-light); text-decoration: underline;">
                데이터 출처: KAMIS (농산물유통정보)
            </a>
        </div>
    </div>
    `;
}
