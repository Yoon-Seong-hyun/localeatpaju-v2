export async function getProducts() {
     try {
          const response = await fetch('./data/products.json');
          if (!response.ok) throw new Error('Failed to fetch products');
          return await response.json();
     } catch (error) {
          console.warn('API Fetch failed (likely due to file:// CORS), falling back to mock data:', error);
          // Fallback data for local preview without server
          return [
               {
                    "id": "p1",
                    "name": "새벽 4시 수확한 설향 딸기",
                    "price": 25000,
                    "category": "FRUIT",
                    "image": "https://images.unsplash.com/photo-1518635017498-87f514b751ba?q=80&w=600&auto=format&fit=crop",
                    "badges": ["TODAY"]
               },
               {
                    "id": "p2",
                    "name": "파주의 흙내음 유기농 쌈채소",
                    "price": 12000,
                    "category": "VEGETABLE",
                    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=600&auto=format&fit=crop",
                    "badges": ["ORGANIC"]
               },
               {
                    "id": "p3",
                    "name": "스테비아 대추 방울토마토",
                    "price": 15000,
                    "category": "FRUIT",
                    "image": "https://images.unsplash.com/photo-1561136594-8f906f9ad438?q=80&w=600&auto=format&fit=crop",
                    "badges": ["BEST"]
               },
               {
                    "id": "p4",
                    "name": "해남보다 달콤한 꿀고구마 3kg",
                    "price": 14000,
                    "category": "ROOT",
                    "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=600&auto=format&fit=crop",
                    "badges": []
               }
          ];
     }
}

export async function getFarmers() {
     try {
          const response = await fetch('./data/farmers.json');
          if (!response.ok) throw new Error('Failed to fetch farmers');
          return await response.json();
     } catch (error) {
          console.warn('API Fetch failed, using fallback:', error);
          return [];
     }
}

// Mock KAMIS (Korea Agricultural Marketing Information Service) Data
// 실제 구현 시: aT 농산물유통정보(KAMIS) Open API 사용
// API URL Example: http://www.kamis.or.kr/service/price/xml.do?action=dailyPriceByCategoryList...
export async function getMarketPrices() {
     // Simulate API delay
     await new Promise(resolve => setTimeout(resolve, 800));

     return {
          date: new Date().toLocaleDateString('ko-KR'),
          items: [
               { name: '딸기 (2kg)', marketPrice: 32000, localPrice: 25000, trend: 'up' },
               { name: '상추 (100g)', marketPrice: 1500, localPrice: 1200, trend: 'stable' },
               { name: '방울토마토 (1kg)', marketPrice: 18000, localPrice: 15000, trend: 'down' },
               { name: '고구마 (1kg)', marketPrice: 6500, localPrice: 5000, trend: 'up' }
          ]
     };
}

export function formatPrice(price) {
     return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(price);
}
