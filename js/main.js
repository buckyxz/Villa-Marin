// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Room Data
const rooms = [
    {
        name: 'Deluxe Oda',
        description: 'Deniz manzaralı, 35m², 2 kişilik',
        price: '₺1.500',
        image: 'images/room1.jpg'
    },
    {
        name: 'Suit Oda',
        description: 'Deniz manzaralı, 45m², 2+1 kişilik',
        price: '₺2.000',
        image: 'images/room2.jpg'
    },
    {
        name: 'Aile Suit',
        description: 'Deniz manzaralı, 60m², 4 kişilik',
        price: '₺2.500',
        image: 'images/room3.jpg'
    }
];

// Populate Rooms
const roomGrid = document.querySelector('.room-grid');
rooms.forEach(room => {
    const roomCard = document.createElement('div');
    roomCard.className = 'room-card';
    roomCard.innerHTML = `
        <img src="${room.image}" alt="${room.name}">
        <div class="room-info">
            <h3>${room.name}</h3>
            <p>${room.description}</p>
            <p class="price">${room.price} / gece</p>
            <button class="btn-primary">Rezervasyon Yap</button>
        </div>
    `;
    roomGrid.appendChild(roomCard);
});

// Form Validation
const bookingForm = document.querySelector('.booking-form');
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Form validation logic here
    alert('Rezervasyon talebiniz alındı. En kısa sürede size dönüş yapacağız.');
});

// Scroll Animation
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .room-card').forEach(el => {
    observer.observe(el);
});

// Date Picker Validation
const checkInInput = document.querySelector('input[type="date"]:first-of-type');
const checkOutInput = document.querySelector('input[type="date"]:last-of-type');

checkInInput.addEventListener('change', () => {
    const checkInDate = new Date(checkInInput.value);
    const minCheckOutDate = new Date(checkInDate);
    minCheckOutDate.setDate(minCheckOutDate.getDate() + 1);
    
    checkOutInput.min = minCheckOutDate.toISOString().split('T')[0];
});

// Weather Widget (Placeholder)
// Removed dynamic weather widget creation to avoid conflicts with static HTML.
// function updateWeather() {
//     // This would typically fetch from a weather API
//     const weatherWidget = document.createElement('div');
//     weatherWidget.className = 'weather-widget';
//     weatherWidget.innerHTML = `
//         <i class="fas fa-sun"></i>
//         <span>25°C</span>
//     `;
//     document.querySelector('.navbar').appendChild(weatherWidget);
// }

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // updateWeather(); // Call to updateWeather removed
}); 