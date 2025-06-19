// Translations object (global scope)
const translations = {
    tr: {
        "hero-title": "Villa Marin Otel – Akdeniz'in Kalbinde Huzur ve Konfor",
        "hero-subtitle": "Mersin'in incisi Tömük'te, denize sadece birkaç adım mesafede, doğayla iç içe sakin bir tatil deneyimi",
        "features-title": "Neden Villa Marin Otel?",
        "features-subtitle": "Size özel hizmetlerimizle unutulmaz bir tatil deneyimi sunuyoruz",
        "room-title": "Tertemiz, Yeni ve Modern Odalar",
        "room-desc": "Yeni açılan otelimizde tüm eşyalar ilk günkü gibi yeni, tertemiz ve konforlu",
        "breakfast-title": "Mis Gibi Kahvaltı",
        "breakfast-desc": "Ege ve Akdeniz mutfağından esinlenerek hazırladığımız kahvaltıyı odanızda keyifle yapabilirsiniz",
        "location-title": "Denize Yakın Konum",
        "location-desc": "Sabah gözlerinizi açar açmaz Akdeniz'in kokusunu içinize çekin, kumsala yürüme mesafesindeyiz",
        "nav-home": "Ana Sayfa",
        "nav-about": "Hakkımızda",
        "nav-rooms": "Odalar",
        "nav-services": "Hizmetler",
        "nav-contact": "İletişim",
        "btn-book": "Rezervasyon",
        "btn-explore": "Odaları Keşfet",
        "btn-details": "Detaylı Bilgi"
    },
    en: {
        "hero-title": "Villa Marin Hotel - Peace and Comfort in the Heart of Mediterranean",
        "hero-subtitle": "A tranquil holiday experience just steps away from the sea in Tömük, the pearl of Mersin",
        "features-title": "Why Villa Marin Hotel?",
        "features-subtitle": "We offer an unforgettable holiday experience with our special services",
        "room-title": "Clean, New and Modern Rooms",
        "room-desc": "All furnishings in our newly opened hotel are brand new, spotlessly clean and comfortable",
        "breakfast-title": "Delicious Breakfast",
        "breakfast-desc": "Enjoy your breakfast in your room, inspired by Aegean and Mediterranean cuisine",
        "location-title": "Close to the Sea",
        "location-desc": "Wake up to the scent of the Mediterranean, we are within walking distance to the beach",
        "nav-home": "Home",
        "nav-about": "About",
        "nav-rooms": "Rooms",
        "nav-services": "Services",
        "nav-contact": "Contact",
        "btn-book": "Book Now",
        "btn-explore": "Explore Rooms",
        "btn-details": "Learn More"
    },
    ru: {
        "hero-title": "Отель Villa Marin - Спокойствие и комфорт в сердце Средиземноморья",
        "hero-subtitle": "Спокойный отдых в нескольких шагах от моря в Тёмюке, жемчужине Мерсина",
        "features-title": "Почему отель Villa Marin?",
        "features-subtitle": "Мы предлагаем незабываемый отдых с нашими специальными услугами",
        "room-title": "Чистые, новые и современные номера",
        "room-desc": "Вся мебель в нашем недавно открывшемся отеле совершенно новая, безупречно чистая и удобная",
        "breakfast-title": "Вкусный завтрак",
        "breakfast-desc": "Наслаждайтесь завтраком в своем номере, вдохновленным эгейской и средиземноморской кухней",
        "location-title": "Близко к морю",
        "location-desc": "Просыпайтесь под аромат Средиземного моря, мы находимся в нескольких минутах ходьбы от пляжа",
        "nav-home": "Главная",
        "nav-about": "О нас",
        "nav-rooms": "Номера",
        "nav-services": "Услуги",
        "nav-contact": "Контакты",
        "btn-book": "Забронировать",
        "btn-explore": "Посмотреть номера",
        "btn-details": "Подробнее"
    }
};

// Mobil Menü İşlemleri
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const body = document.body;

    // Create overlay element
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    body.appendChild(overlay);

    function toggleMenu() {
        mobileMenuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    }

    mobileMenuToggle.addEventListener('click', toggleMenu);
    mobileMenuClose.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // Close menu on window resize if open
    window.addEventListener('resize', function() {
        if (window.innerWidth > 991 && mobileMenu.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                if (mobileMenu.classList.contains('active')) {
                    toggleMenu();
                }
            }
        });
    });

    // Language Selector
    const langCurrent = document.querySelector('.lang-current');
    const langDropdown = document.querySelector('.lang-dropdown');
    const languageSelector = document.querySelector('.language-selector');

    if (langCurrent && langDropdown) {
        langCurrent.addEventListener('click', function(e) {
            e.stopPropagation();
            languageSelector.classList.toggle('active');
        });

        document.addEventListener('click', function(e) {
            if (!languageSelector.contains(e.target)) {
                languageSelector.classList.remove('active');
            }
        });

        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                const img = this.querySelector('img').src;
                const text = this.textContent.trim();

                document.querySelector('.lang-current img').src = img;
                document.querySelector('.lang-current span').textContent = text;

                document.querySelectorAll('.lang-option').forEach(opt => {
                    opt.classList.remove('active');
                });
                this.classList.add('active');

                languageSelector.classList.remove('active');
            });
        });
    }

    // Hava Durumu API'si
    const weatherWidget = document.querySelector('.weather-widget');
    const weatherIcon = weatherWidget?.querySelector('.weather-icon');
    const weatherTemp = weatherWidget?.querySelector('.weather-temp');

    // Mersin koordinatları
    const LATITUDE = 36.8125;
    const LONGITUDE = 34.625;

    async function getWeather() {
        try {
            const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&hourly=temperature_2m,weathercode&current_weather=true&timezone=auto`);
            const data = await response.json();

            if (data && data.current_weather && weatherIcon && weatherTemp) {
                const temp = Math.round(data.current_weather.temperature);
                const weatherCode = data.current_weather.weathercode;
                
                // Hava durumu koduna göre ikon belirleme
                let iconCode;
                switch(weatherCode) {
                    case 0: iconCode = '01d'; break;
                    case 1:
                    case 2: iconCode = '02d'; break;
                    case 3: iconCode = '04d'; break;
                    case 45:
                    case 48: iconCode = '50d'; break;
                    case 51:
                    case 53:
                    case 55: iconCode = '09d'; break;
                    case 61:
                    case 63:
                    case 65: iconCode = '10d'; break;
                    case 71:
                    case 73:
                    case 75: iconCode = '13d'; break;
                    case 95:
                    case 96:
                    case 99: iconCode = '11d'; break;
                    default: iconCode = '01d';
                }
                
                weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
                weatherTemp.textContent = `${temp}°C`;
            }
        } catch (error) {
            console.error('Hava durumu bilgisi alınamadı:', error);
        }
    }

    // Sayfa yüklendiğinde hava durumunu al
    getWeather();

    // Her 30 dakikada bir hava durumunu güncelle
    setInterval(getWeather, 30 * 60 * 1000);

    // Dil değiştirme işlevselliği
    initLanguageSwitcher();
});

// Dil değiştirme fonksiyonları
function initLanguageSwitcher() {
    const langSelector = document.querySelector('.language-selector');
    const langCurrent = document.querySelector('.lang-current');
    const langOptions = document.querySelectorAll('.lang-option');
    
    // Sayfa yüklendiğinde varsayılan dili ayarla
    const savedLang = localStorage.getItem('selectedLang') || 'tr';
    
    // İlk yüklemede aktif dil butonunu ve current dili işaretle
    langOptions.forEach(option => {
        if (option.getAttribute('data-lang') === savedLang) {
            option.classList.add('active');
            updateCurrentLang(option);
        }
    });
    
    // Dili uygula
    changeLang(savedLang);
    
    // Dropdown toggle
    langCurrent.addEventListener('click', (e) => {
        e.stopPropagation();
        langSelector.classList.toggle('active');
    });
    
    // Dil seçimi
    langOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const lang = this.getAttribute('data-lang');
            
            // Aktif seçeneği güncelle
            langOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            // Current dili güncelle
            updateCurrentLang(this);
            
            // Dili değiştir ve kaydet
            changeLang(lang);
            localStorage.setItem('selectedLang', lang);
            
            // Dropdown'ı kapat
            langSelector.classList.remove('active');
        });
    });
    
    // Sayfa herhangi bir yerine tıklandığında dropdown'ı kapat
    document.addEventListener('click', () => {
        langSelector.classList.remove('active');
    });
}

function updateCurrentLang(selectedOption) {
    const langCurrent = document.querySelector('.lang-current');
    const img = selectedOption.querySelector('img');
    const text = selectedOption.textContent.trim();
    
    langCurrent.querySelector('img').src = img.src;
    langCurrent.querySelector('span').textContent = text;
}

function changeLang(lang) {
    if (!translations[lang]) return;
    
    // Tüm çevrilebilir elementleri güncelle
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Navigasyon menüsünü güncelle
    updateNavigation(lang);
    
    // Butonları güncelle
    updateButtons(lang);
}

function updateNavigation(lang) {
    const navItems = {
        'home': translations[lang]['nav-home'],
        'about': translations[lang]['nav-about'],
        'rooms': translations[lang]['nav-rooms'],
        'services': translations[lang]['nav-services'],
        'contact': translations[lang]['nav-contact']
    };
    
    document.querySelectorAll('.main-nav a, .mobile-nav a').forEach(link => {
        const key = link.getAttribute('href').replace('/', '');
        if (key in navItems) {
            link.textContent = navItems[key];
        }
    });
}

function updateButtons(lang) {
    // Rezervasyon butonu
    const reservationBtn = document.querySelector('.hero-buttons .btn-primary');
    if (reservationBtn) {
        reservationBtn.textContent = translations[lang]['btn-book'];
    }

    // Odaları keşfet butonu
    const exploreBtn = document.querySelector('.hero-buttons .btn-secondary');
    if (exploreBtn) {
        exploreBtn.textContent = translations[lang]['btn-explore'];
    }

    // Detaylı bilgi butonları
    document.querySelectorAll('.feature-link').forEach(link => {
        link.innerHTML = translations[lang]['btn-details'] + ' <i class="fas fa-arrow-right"></i>';
    });
} 