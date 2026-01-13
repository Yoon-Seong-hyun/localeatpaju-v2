// Main JS for Home Page
import { renderHeader, initHeader } from './components/header.js';
import { renderProductCard } from './components/product-card.js';
import { renderPriceWidget } from './components/price-widget.js';
import { getProducts, getMarketPrices } from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
     // 1. Render Header
     document.body.insertAdjacentHTML('afterbegin', renderHeader());
     initHeader();

     // 2. Load Products & Market Data in Parallel
     const productGrid = document.getElementById('product-grid');
     const priceWidgetContainer = document.getElementById('price-widget-container');

     try {
          const [products, marketData] = await Promise.all([
               getProducts(),
               getMarketPrices()
          ]);

          // Render Products
          if (productGrid) {
               productGrid.innerHTML = products.map(product => renderProductCard(product)).join('');
          }

          // Render Price Widget
          if (priceWidgetContainer && marketData) {
               priceWidgetContainer.innerHTML = renderPriceWidget(marketData);
          }

     } catch (e) {
          console.error('Error initializing page:', e);
     }
});
