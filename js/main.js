const data = {
    // ! Grupos Academicos
    groups: [
        {
            name: "Infantil A",
            description: "Descripción del grupo",
            ages: "2-3 años",
            schedule: "Sab 10:00 AM -1:00 PM",
            image: "../img/img-group.jpg"
        },
        {
            name: "Infantil B",
            description: "Descripción del grupo",
            ages: "2-3 años",
            schedule: "Sab 10:00 AM - 1:00 PM",
            image: "../img/img-group.jpg"
        },
        {
            name: "Junior A",
            description: "Descripcion del grupo",
            ages: "2-3 años",
            schedule: "Sab 10:00 AM - 1:00 PM",
            image: "../img/img-group.jpg"
        },
        {
            name: "Junior B",
            description: "Descripcion del grupo",
            ages: "2-3 años",
            schedule: "Sab 10:00 AM - 1:00 PM",
            image: "../img/img-group.jpg"
        },
        {
            name: "Junior C",
            description: "Descripcion del grupo",
            ages: "2-3 años",
            schedule: "Sab 10:00 AM - 1:00 PM",
            image: "../img/img-group.jpg"
        },
        {
            name: "Juvenil C",
            description: "Descripcion del grupo",
            ages: "2-3 años",
            schedule: "Sab 10:00 AM - 1:00 PM",
            image: "../img/img-group.jpg"
        }
    ],
    // ! Profesores
    teachers: [
        {
            name: "Jorge Mauricio Pinilla",
            specialty: "Especialidad? jsjsjjs",
            experience: "Mucho tiempo?",
            image: "../img/img-teacher.jpg",
            achievements: ["Director", "Coreografo"]
        },
        {
            name: "Anny Dayanna Nuñez",
            specialty: "Especialidad? x2",
            experience: "3 años?",
            image: "../img/img-teacher.jpg",
            achievements: ["La mami de sergei", "Profesora junior?"]
        },
        {
            name: "Danna Sofia Baustista",
            specialty: "Hace algo?",
            experience: "En llegar tarde jsjsj",
            image: "../img/img-teacher.jpg",
            achievements: ["ni idea"]
        },
        {
            name: "Angie Tatiana Perez",
            specialty: "The peach? JASJAJSJ",
            experience: "4 años?",
            image: "../img/img-teacher.jpg",
            achievements: ["Profesora Juvenil?"]
        },
        {
            name: "Danna Paola",
            specialty: "??????????",
            experience: "este año?",
            image: "../img/img-teacher.jpg",
            achievements: ["Baile Salon????"]
        },
        {
            name: "Cesar Lopez",
            specialty: "Adiestrando perros",
            experience: "2 años",
            image: "../img/img-teacher.jpg",
            achievements: ["Adiestrador"]
        }
    ],
    // ! Equipo Admin
    adminTeam: [
        {
            name: "Daniel Lopez",
            position: "en 4? JASJS",
            description: "Miercoles de 2x1",
            image: "../img/img-teacher.jpg",
        },
        {
            name: "Juan Diego Quintana",
            position: "El otro",
            description: "Vomite 🤮🤮",
            image: "../img/img-teacher.jpg",
        },
        {
            name: "Sergio",
            position: "El novio de lily",
            description: "Todas quieren con el",
            image: "../img/img-teacher.jpg",
        },
        {
            name: "Julieth",
            position: "La perris",
            description: "La perris",
            image: "../img/img-teacher.jpg",
        },
        {
            name: "Lily Perea",
            position: "La novia de Sergei",
            description: "La futura esposa de Sergei",
            image: "../img/img-teacher.jpg",
        }
    ],
    // ! Eventos
    events: [
        {
            title: "La feria más bonita",
            description: "la feria",
            date: "10 SEP",
            localitation: "Bucaramanga",
            image: "https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2019/06/7-planes-en-Bucaramanga-para-aprovechar-tu-fin-de-semana-1024x512.png"
        },
        {
            title: "Arte y circulacion",
            description: "Evento del cafe",
            date: "10 NOV",
            localitation: "Bucaramanga",
            image: "https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2019/06/7-planes-en-Bucaramanga-para-aprovechar-tu-fin-de-semana-1024x512.png",
        },
        {
            title: "Arte y circulacion",
            description: "Evento del cafe",
            date: "10 NOV",
            localitation: "Bucaramanga",
            image: "https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2019/06/7-planes-en-Bucaramanga-para-aprovechar-tu-fin-de-semana-1024x512.png",
        },
        {
            title: "Arte y circulacion",
            description: "Evento del cafe",
            date: "10 NOV",
            localitation: "Bucaramanga",
            image: "https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2019/06/7-planes-en-Bucaramanga-para-aprovechar-tu-fin-de-semana-1024x512.png",
        }
    ],
    // ! Logros
    achievements: [
        {
            icon: "🏆",
            number: "5+",
            title: "Premios ganados",
            description: "Premios"
        },
        {
            icon: "👩‍🎓",
            number: "90+",
            title: "Estudiantes Activos",
            description: "Formando nuevos talentos"
        },
        {
            icon: "🎟",
            number: "300+",
            title: "Presentaciones",
            description: "En teatros y eventos del pais"
        }
    ]
}
// * varibales carrusel
let currentSlide = 0;
let carouselInterval;

//* Elementos carrusel
const newsCarousel = document.getElementById("news-carousel");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const carouselIndicators = document.getElementById("carousel-indicators")

//* Inicializacion de la app

document.addEventListener("DOMContentLoaded", () => {
    populateGroups();
    populateTeachers();
    populateAdmin();
    populateEvents();
    populateAchievements();
    populateNews();
    initializeCarousel();
    initializeScrollAnimations();
})

//* Populate Sections

function populateGroups() {
    const container = document.getElementById("groups-container");
    container.innerHTML = data.groups.map(
        (group, index) =>
            `
        <div class="group-card" style="animation-delay: ${index * 0.1}s">
            <div class="group-image">
                <img src="${group.image}">
                </div>
                <h3>${group.name}</h3>
                <p>${group.description}</p>
                <div class="group-details">
                    <p class="ages">Edades: ${group.ages}</p>
                    <p class="schedule">${group.schedule}</p>
                </div>
            </div>
        </div>
        `
    )
        .join("");
}

function populateTeachers() {
    const container = document.getElementById("teachers-container");
    container.innerHTML = data.teachers.map(
        (teacher, index) =>
            `
        <div class="teacher-card" style="animation-delay: ${index * 0.15}s">
            <div class="teacher-image-container">
                <img src="${teacher.image}" alt="${teacher.name}" class="teacher-image">
            </div>
            <div class="teacher-info">
                <h3>${teacher.name}</h3>
                <p class="specialty">${teacher.specialty}</p>
                <p class="experience"><span>${teacher.experience}</span></p>
                <br>
                <div class="achievements">
                    ${teacher.achievements
                .map(
                    (achievement) => `
                            <span class="achievement-tag">${achievement}</span>
                            `
                )
                .join("")
            }
                </div>
            </div>
        </div>
        `
    )
        .join("");
}

function populateAdmin() {
    const container = document.getElementById("admin-container");
    container.innerHTML = data.adminTeam.map(
        (member, index) => `
        <div class="admin-card" style="animation-delay: ${index * 0.15}s">
            <div class="admin-image-container">
                <img src="${member.image}" alt="${member.name}" class="admin-image">
            </div>
            <div class="admin-info">
                <h3>${member.name}</h3>
                <p class="position"><span>${member.position}</span></p>
                <p class="description">${member.description}</p>
            </div>
            
        </div>
        `
    )
        .join("");
}

function populateEvents() {
    const container = document.getElementById("events-container");
    container.innerHTML = data.events.map((event, index) => `
        <div class="event-card" style="animation-delay: ${index * 0.1}s">
            <div class="event-image-container">
                <img src="${event.image}" alt="${event.title}">
            </div>
            <div class="event-content">
                <div class="event-info">
                    <h3 class="event-title">${event.title}</h3>
                    <p class="event-description">${event.description}</p>
                </div>
                <div class="event-details">
                    <div class="event-date">${event.date}</div>
                    <div class="event-location">
                        <span class="event-tag">📍</span>
                        <span>${event.localitation}</span>
                    </div>
                </div>
            </div>
            </div>
    `).join("");
}

function populateAchievements(){
    const container = document.getElementById("achievements-container");
    container.innerHTML = data.achievements. map(
        (achievement,index) => `
        <div class="achievements-card" style="animation-delay: ${index * 0.1}s">
            <div class="achievement-content">
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achevement-info">
                <h3>${achievement.number}</h3>
                <p class="achievement-title"><span>${achievement.title}</span></p>
                <p class="achievement-desc">${achievement.description}</p>
                </div>
            </div>
        </div>
        `
    )
}