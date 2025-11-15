// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Navigation smooth scroll
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Hero button click handler
    const heroButton = document.querySelector('.btn-hero');
    if (heroButton) {
        heroButton.addEventListener('click', function() {
            const productsSection = document.querySelector('#products');
            if (productsSection) {
                productsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Product card click handlers - only for cards that are not links
    const productCards = document.querySelectorAll('.product-card:not(a)');
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            const productName = this.querySelector('.product-name')?.textContent;
            if (productName) {
                alert(`${productName} 상세 페이지는 추후 구현 예정입니다.`);
            }
        });
    });

    // Header scroll effect
    let lastScroll = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        }
        
        lastScroll = currentScroll;
    });

    // Mobile Hamburger Menu Toggle
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navigation = document.querySelector('.navigation');
    
    if (hamburgerMenu && navigation) {
        // PC 버전이 아닐 때만 햄버거 메뉴 작동
        hamburgerMenu.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // PC 버전 모드가 아닐 때만 토글
            if (!document.body.classList.contains('desktop-view')) {
                hamburgerMenu.classList.toggle('active');
                navigation.classList.toggle('active');
                
                // active 클래스가 추가되면 display: block으로 변경
                if (navigation.classList.contains('active')) {
                    navigation.style.display = 'block';
                } else {
                    navigation.style.display = 'none';
                }
            }
        });

        // Close menu when clicking on a link
        const navLinks = navigation.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (!document.body.classList.contains('desktop-view')) {
                    hamburgerMenu.classList.remove('active');
                    navigation.classList.remove('active');
                    navigation.style.display = 'none';
                }
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navigation.contains(event.target);
            const isClickOnHamburger = hamburgerMenu.contains(event.target);
            
            if (!document.body.classList.contains('desktop-view')) {
                if (!isClickInsideNav && !isClickOnHamburger && navigation.classList.contains('active')) {
                    hamburgerMenu.classList.remove('active');
                    navigation.classList.remove('active');
                    navigation.style.display = 'none';
                }
            }
        });
    }

    // Version Toggle (PC/Mobile View)
    const urlParams = new URLSearchParams(window.location.search);
    const viewParam = urlParams.get('view');
    
    function applyDesktopView() {
        document.body.classList.add('desktop-view');
        const navigation = document.querySelector('.navigation');
        const navMenu = document.querySelector('.nav-menu');
        
        if (navigation) {
            navigation.style.display = 'flex';
            navigation.style.position = 'static';
            navigation.style.width = 'auto';
            navigation.style.backgroundColor = '#f8f9fa';
            navigation.style.boxShadow = 'none';
            navigation.classList.remove('active'); // active 클래스 제거
        }
        
        if (navMenu) {
            navMenu.style.flexDirection = 'row';
            navMenu.style.gap = '12px';
            navMenu.style.padding = '15px 0';
            navMenu.style.justifyContent = 'center';
            navMenu.style.flexWrap = 'wrap';
            
            // 모든 li 요소 스타일 강제 적용
            const navItems = navMenu.querySelectorAll('li');
            navItems.forEach(li => {
                li.style.width = 'auto';
                li.style.padding = '0';
            });
            
            // 모든 a 요소 스타일 강제 적용
            const navLinks = navMenu.querySelectorAll('a');
            navLinks.forEach(link => {
                link.style.display = 'inline-block';
                link.style.padding = '5px 6px';
                link.style.borderBottom = 'none';
                link.style.width = 'auto';
                link.style.fontSize = '12px';
                link.style.whiteSpace = 'nowrap';
            });
        }
        
        // 햄버거 메뉴 숨기기
        const hamburger = document.querySelector('.hamburger-menu');
        if (hamburger) {
            hamburger.style.display = 'none';
        }
    }
    
    function removeDesktopView() {
        document.body.classList.remove('desktop-view');
        const navigation = document.querySelector('.navigation');
        const navMenu = document.querySelector('.nav-menu');
        
        if (navigation) {
            // 모바일에서는 기본적으로 숨김
            navigation.style.display = 'none';
            navigation.style.position = '';
            navigation.style.width = '';
            navigation.style.backgroundColor = '';
            navigation.style.boxShadow = '';
            navigation.classList.remove('active'); // active 클래스 제거
        }
        
        if (navMenu) {
            // 인라인 스타일 제거하여 CSS 기본값 사용
            navMenu.style.flexDirection = '';
            navMenu.style.gap = '';
            navMenu.style.padding = '';
            navMenu.style.justifyContent = '';
            navMenu.style.flexWrap = '';
            
            const navItems = navMenu.querySelectorAll('li');
            navItems.forEach(li => {
                li.style.width = '';
                li.style.padding = '';
            });
            
            const navLinks = navMenu.querySelectorAll('a');
            navLinks.forEach(link => {
                link.style.display = '';
                link.style.padding = '';
                link.style.borderBottom = '';
                link.style.width = '';
                link.style.fontSize = '';
                link.style.whiteSpace = '';
            });
        }
        
        const hamburger = document.querySelector('.hamburger-menu');
        if (hamburger) {
            // 모바일에서는 햄버거 메뉴 표시
            if (window.innerWidth <= 992) {
                hamburger.style.display = 'flex';
            } else {
                hamburger.style.display = '';
            }
        }
    }
    
    if (viewParam === 'desktop') {
        applyDesktopView();
        localStorage.setItem('preferredView', 'desktop');
    } else if (viewParam === 'mobile') {
        removeDesktopView();
        localStorage.setItem('preferredView', 'mobile');
    } else {
        // 저장된 선호도 불러오기
        const preferredView = localStorage.getItem('preferredView');
        if (preferredView === 'desktop') {
            applyDesktopView();
        }
    }

    // Version toggle links
    const desktopLink = document.getElementById('desktop-view-link');
    const mobileLink = document.getElementById('mobile-view-link');
    
    if (desktopLink && mobileLink) {
        const currentUrl = window.location.pathname;
        
        desktopLink.addEventListener('click', function(e) {
            e.preventDefault();
            const newUrl = currentUrl + '?view=desktop';
            window.location.href = newUrl;
        });
        
        mobileLink.addEventListener('click', function(e) {
            e.preventDefault();
            const newUrl = currentUrl + '?view=mobile';
            window.location.href = newUrl;
        });
    }

    // 실제 날씨 정보 가져오기 (OpenWeatherMap API)
    async function fetchWeather() {
        const weatherElement = document.querySelector('.nav-weather');
        if (!weatherElement) return;

        // 파주시 좌표 (경기도 파주시)
        const lat = 37.7599;
        const lon = 126.7778;
        
        // OpenWeatherMap API 키 (무료 API 사용)
        // 실제 운영 시에는 환경 변수나 서버 사이드에서 처리하는 것이 좋습니다
        const apiKey = 'YOUR_API_KEY_HERE'; // 사용자가 OpenWeatherMap에서 발급받은 API 키로 교체 필요
        
        try {
            // API 키가 없으면 가상 데이터 사용
            if (apiKey === 'YOUR_API_KEY_HERE') {
                // 가상 데이터 (실제 API 연동 전까지 사용)
                const currentDate = new Date();
                const hour = currentDate.getHours();
                let temp = 15;
                let weatherIcon = '☀️';
                let airQuality = '좋음';
                
                // 시간대별 온도 조정 (가상)
                if (hour >= 6 && hour < 12) {
                    temp = 12 + Math.floor(Math.random() * 5); // 오전: 12-17도
                    weatherIcon = '☀️';
                } else if (hour >= 12 && hour < 18) {
                    temp = 18 + Math.floor(Math.random() * 7); // 오후: 18-25도
                    weatherIcon = '☀️';
                } else if (hour >= 18 && hour < 22) {
                    temp = 15 + Math.floor(Math.random() * 5); // 저녁: 15-20도
                    weatherIcon = '🌙';
                } else {
                    temp = 8 + Math.floor(Math.random() * 5); // 밤: 8-13도
                    weatherIcon = '🌙';
                }
                
                weatherElement.innerHTML = `${weatherIcon} 파주: ${temp}°C (미세먼지: ${airQuality})`;
                return;
            }

            // 실제 API 호출 (API 키가 있을 때)
            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=kr`;
            const airQualityUrl = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;
            
            const [weatherResponse, airQualityResponse] = await Promise.all([
                fetch(weatherUrl),
                fetch(airQualityUrl)
            ]);
            
            if (weatherResponse.ok && airQualityResponse.ok) {
                const weatherData = await weatherResponse.json();
                const airQualityData = await airQualityResponse.json();
                
                const temp = Math.round(weatherData.main.temp);
                const weatherMain = weatherData.weather[0].main;
                const aqi = airQualityData.list[0].main.aqi;
                
                // 날씨 아이콘 매핑
                const weatherIcons = {
                    'Clear': '☀️',
                    'Clouds': '☁️',
                    'Rain': '🌧️',
                    'Drizzle': '🌦️',
                    'Thunderstorm': '⛈️',
                    'Snow': '❄️',
                    'Mist': '🌫️',
                    'Fog': '🌫️'
                };
                const weatherIcon = weatherIcons[weatherMain] || '☀️';
                
                // 미세먼지 등급 매핑 (AQI: 1=좋음, 2=보통, 3=나쁨, 4=매우나쁨, 5=위험)
                const airQualityLevels = {
                    1: '좋음',
                    2: '보통',
                    3: '나쁨',
                    4: '매우나쁨',
                    5: '위험'
                };
                const airQuality = airQualityLevels[aqi] || '보통';
                
                weatherElement.innerHTML = `${weatherIcon} 파주: ${temp}°C (미세먼지: ${airQuality})`;
            } else {
                // API 호출 실패 시 가상 데이터 사용
                weatherElement.innerHTML = '☀️ 파주: 15°C (미세먼지: 좋음)';
            }
        } catch (error) {
            console.error('날씨 정보를 가져오는 중 오류 발생:', error);
            // 오류 발생 시 가상 데이터 사용
            weatherElement.innerHTML = '☀️ 파주: 15°C (미세먼지: 좋음)';
        }
    }

    // 페이지 로드 시 날씨 정보 가져오기
    fetchWeather();
    
    // 10분마다 날씨 정보 업데이트
    setInterval(fetchWeather, 600000); // 10분 = 600000ms
});

