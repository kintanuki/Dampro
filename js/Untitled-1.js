// Data - Imágenes reemplazadas con placeholders online
const data = {
    groups: [
        {
            name: "Infantil A",
            description: "Técnica refinada y elegancia en cada movimiento",
            ages: "5-18 años",
            schedule: "Mar/Jue 4:00-6:00 PM",
            icon: "🩰",
        },
        {
            name: "Infantil B",
            description: "Energía urbana y expresión contemporánea",
            ages: "8-25 años",
            schedule: "Lun/Mié 6:00-8:00 PM",
            icon: "🎤",
        },
        {
            name: "Junior A",
            description: "Fusión de técnicas modernas y expresión artística",
            ages: "12+ años",
            schedule: "Vie/Sáb 5:00-7:00 PM",
            icon: "💃",
        },
        {
            name: "Junior B",
            description: "Ritmos latinos llenos de pasión y sabor",
            ages: "16+ años",
            schedule: "Sáb/Dom 7:00-9:00 PM",
            icon: "🔥",
        },
        {
            name: "Junior C",
            description: "Dinamismo y versatilidad en cada coreografía",
            ages: "10+ años",
            schedule: "Mar/Jue 7:00-9:00 PM",
            icon: "🎭",
        },
        {
            name: "Juvenil C",
            description: "Tradiciones culturales en movimiento",
            ages: "Todas las edades",
            schedule: "Dom 3:00-5:00 PM",
            icon: "🌺",
        },
    ],
    teachers: [
        {
            name: "Isabella Martínez",
            specialty: "Ballet Clásico",
            experience: "15 años de experiencia profesional",
            image: "https://placehold.co/300x300/ea580c/white?text=Isabella",
            achievements: ["Royal Academy", "Prima Ballerina"],
        },
        {
            name: "Carlos Rivera",
            specialty: "Hip Hop & Street Dance",
            experience: "Campeón nacional de Hip Hop",
            image: "https://placehold.co/300x300/ea580c/white?text=Carlos",
            achievements: ["Battle Winner", "Coreógrafo"],
        },
        {
            name: "Ana Sofía López",
            specialty: "Danza Contemporánea",
            experience: "Graduada de Juilliard School",
            image: "https://placehold.co/300x300/ea580c/white?text=Ana+Sofia",
            achievements: ["Juilliard", "Coreógrafa"],
        },
        {
            name: "Miguel Ángel Torres",
            specialty: "Salsa & Bachata",
            experience: "Instructor certificado internacional",
            image: "https://placehold.co/300x300/ea580c/white?text=Miguel",
            achievements: ["World Champion", "Instructor"],
        },
    ],
    adminTeam: [
        {
            name: "María Elena Vásquez",
            position: "Directora General",
            description: "Fundadora y visionaria de la academia, con más de 20 años dedicados a la educación artística.",
            image: "https://placehold.co/200x200/ea580c/white?text=María",
        },
        {
            name: "Roberto Mendoza",
            position: "Coordinador Académico",
            description: "Supervisa todos los programas educativos y mantiene los más altos estándares de calidad.",
            image: "https://placehold.co/200x200/ea580c/white?text=Roberto",
        },
        {
            name: "Lucía Fernández",
            position: "Gerente de Operaciones",
            description: "Gestiona las operaciones diarias y asegura una experiencia excepcional para todos.",
            image: "https://placehold.co/200x200/ea580c/white?text=Lucía",
        },
    ],
    events: [
        {
            title: "Recital de Primavera 2024",
            description: "Nuestro espectáculo anual donde todos los grupos presentan sus mejores coreografías.",
            date: "15 MAR",
            location: "Teatro Municipal",
            image: "https://placehold.co/400x300/ea580c/white?text=Recital",
        },
        {
            title: "Competencia Nacional de Hip Hop",
            description: "Representaremos a la ciudad en el campeonato nacional con nuestro grupo élite.",
            date: "22 ABR",
            location: "Centro de Convenciones",
            image: "https://placehold.co/400x300/ea580c/white?text=Competencia",
        },
        {
            title: "Workshop Internacional de Ballet",
            description: "Masterclass con bailarines del Ballet Nacional. Cupos limitados.",
            date: "10 MAY",
            location: "Estudio Principal",
            image: "https://placehold.co/400x300/ea580c/white?text=Workshop",
        },
        {
            title: "Festival de Danza Latina",
            description: "Celebración de ritmos latinos con presentaciones y clases abiertas.",
            date: "18 JUN",
            location: "Plaza Central",
            image: "https://placehold.co/400x300/ea580c/white?text=Festival",
        },
    ],
    achievements: [
        {
            icon: "🏆",
            number: "50+",
            title: "Premios Ganados",
            description: "En competencias nacionales e internacionales",
        },
        {
            icon: "🎭",
            number: "500+",
            title: "Estudiantes Activos",
            description: "Formando nuevos talentos cada día",
        },
        {
            icon: "🌟",
            number: "15",
            title: "Años de Experiencia",
            description: "Transformando vidas a través del arte",
        },
        {
            icon: "🎪",
            number: "100+",
            title: "Presentaciones",
            description: "En teatros y eventos de la ciudad",
        },
    ],
    newsItems: [
        {
            id: 1,
            title: "Nueva Sede en el Centro de la Ciudad",
            excerpt: "Estamos emocionados de anunciar la apertura de nuestra segunda sede, equipada con estudios de última generación.",
            date: "15 Febrero 2024",
            image: "https://placehold.co/600x400/ea580c/white?text=Nueva+Sede",
        },
        {
            id: 2,
            title: "Estudiantes Ganan Competencia Internacional",
            excerpt: "Nuestro grupo de ballet contemporáneo obtuvo el primer lugar en el Festival Internacional de Danza de Miami.",
            date: "8 Febrero 2024",
            image: "https://placehold.co/600x400/ea580c/white?text=Competencia+Ganada",
        },
        {
            id: 3,
            title: "Nuevo Programa de Becas 2024",
            excerpt: "Lanzamos nuestro programa de becas para estudiantes talentosos con recursos limitados.",
            date: "1 Febrero 2024",
            image: "https://placehold.co/600x400/ea580c/white?text=Becas+2024",
        },
    ],
};

// State
let currentSlide = 0;
let carouselInterval;

// DOM Elements
const newsCarousel = document.getElementById("news-carousel");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const carouselIndicators = document.getElementById("carousel-indicators");

// Initialize app
document.addEventListener("DOMContentLoaded", () => {
    populateGroups();
    populateTeachers();
    populateAdminTeam();
    populateEvents();
    populateAchievements();
    populateNews();
    initializeCarousel();
    initializeScrollAnimations();
});

// Populate sections
function populateGroups() {
    const container = document.getElementById("groups-container");
    container.innerHTML = data.groups
        .map(
            (group, index) => `
        <div class="group-card" style="animation-delay: ${index * 0.1}s">
            <div class="text-center">
                <div class="group-icon">
                    <span>${group.icon}</span>
                </div>
                <h3>${group.name}</h3>
                <p>${group.description}</p>
                <div class="group-details">
                    <p>Edades: ${group.ages}</p>
                    <p>Horario: ${group.schedule}</p>
                </div>
            </div>
        </div>
    `
        )
        .join("");
}

function populateTeachers() {
    const container = document.getElementById("teachers-container");
    container.innerHTML = data.teachers
        .map(
            (teacher, index) => `
        <div class="teacher-card" style="animation-delay: ${index * 0.15}s">
            <div class="teacher-image-container">
                <img src="${teacher.image}" alt="${teacher.name}" class="teacher-image">
            </div>
            <div class="teacher-info">
                <h3>${teacher.name}</h3>
                <p class="specialty">${teacher.specialty}</p>
                <p class="experience">${teacher.experience}</p>
                <div class="achievements">
                    ${teacher.achievements
                        .map(
                            (achievement) => `
                        <span class="achievement-tag">${achievement}</span>
                    `
                        )
                        .join("")}
                </div>
            </div>
        </div>
    `
        )
        .join("");
}

function populateAdminTeam() {
    const container = document.getElementById("admin-container");
    container.innerHTML = data.adminTeam
        .map(
            (member, index) => `
        <div class="admin-card" style="animation-delay: ${index * 0.2}s">
            <div class="admin-image-container">
                <img src="${member.image}" alt="${member.name}" class="admin-image">
            </div>
            <h3>${member.name}</h3>
            <p class="position">${member.position}</p>
            <p class="description">${member.description}</p>
        </div>
    `
        )
        .join("");
}

function populateEvents() {
    const container = document.getElementById("events-container");
    container.innerHTML = data.events
        .map(
            (event, index) => `
        <div class="event-card" style="animation-delay: ${index * 0.1}s">
            <div class="event-image-container">
                <img src="${event.image}" alt="${event.title}">
                <div class="event-date">${event.date}</div>
            </div>
            <div class="event-info">
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                <div class="event-footer">
                    <div class="event-location">
                        <span>📍</span>
                        <span>${event.location}</span>
                    </div>
                    <button class="event-button">Más Info</button>
                </div>
            </div>
        </div>
    `
        )
        .join("");
}

function populateAchievements() {
    const container = document.getElementById("achievements-container");
    container.innerHTML = data.achievements
        .map(
            (achievement, index) => `
        <div class="achievement-card" style="animation-delay: ${index * 0.1}s">
            <div class="achievement-content">
                <div class="achievement-icon">${achievement.icon}</div>
                <h3>${achievement.number}</h3>
                <p class="achievement-title">${achievement.title}</p>
                <p class="achievement-desc">${achievement.description}</p>
            </div>
        </div>
    `
        )
        .join("");
}

function populateNews() {
    newsCarousel.innerHTML = data.newsItems
        .map(
            (news) => `
        <div class="carousel-slide">
            <div class="news-item">
                <div class="news-image">
                    <img src="${news.image}" alt="${news.title}">
                </div>
                <div class="news-content">
                    <div class="news-date">${news.date}</div>
                    <h3>${news.title}</h3>
                    <p>${news.excerpt}</p>
                    <button class="news-button">Leer Más</button>
                </div>
            </div>
        </div>
    `
        )
        .join("");

    // Populate indicators
    carouselIndicators.innerHTML = data.newsItems
        .map(
            (_, index) => `
        <button class="carousel-indicator ${index === 0 ? "active" : ""}" data-slide="${index}"></button>
    `
        )
        .join("");
}

// Carousel functionality
function initializeCarousel() {
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener("click", prevSlide);
        nextBtn.addEventListener("click", nextSlide);
    }

    // Indicator clicks
    document.querySelectorAll(".carousel-indicator").forEach((indicator, index) => {
        indicator.addEventListener("click", () => goToSlide(index));
    });

    // Auto-advance carousel
    startCarouselAutoplay();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % data.newsItems.length;
    updateCarousel();
}

function prevSlide() {
    currentSlide = currentSlide === 0 ? data.newsItems.length - 1 : currentSlide - 1;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

function updateCarousel() {
    if (newsCarousel) {
        newsCarousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    // Update indicators
    document.querySelectorAll(".carousel-indicator").forEach((indicator, index) => {
        if (index === currentSlide) {
            indicator.classList.add("active");
        } else {
            indicator.classList.remove("active");
        }
    });
}

function startCarouselAutoplay() {
    carouselInterval = setInterval(nextSlide, 5000);
}

function stopCarouselAutoplay() {
    if (carouselInterval) {
        clearInterval(carouselInterval);
    }
}

// Scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, observerOptions);

    // Observe all stagger items
    document.querySelectorAll(".stagger-item").forEach((item) => {
        observer.observe(item);
    });
}

// Pause carousel on hover
if (newsCarousel) {
    newsCarousel.addEventListener("mouseenter", stopCarouselAutoplay);
    newsCarousel.addEventListener("mouseleave", startCarouselAutoplay);
}