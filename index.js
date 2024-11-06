const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link')

function linkAction() {
    navMenu.classList.remove('show-menu')
}
navLinks.forEach(link => link.addEventListener('click', linkAction))

/*=============== ADD BLUR HEADER ===============*/
function blurHeader() {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                       : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector(`.nav__menu a[href*='${sectionId}']`)

        if(sectionsClass) {
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link')
            } else {
                sectionsClass.classList.remove('active-link')
            }
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== HOME SLIDESHOW ===============*/
function initializeSlideshow() {
    const slides = document.querySelectorAll('.home__bg')
    let currentSlide = 0
    let slideInterval

    function showSlide(index) {
        // Remove active class from all slides
        slides.forEach(slide => slide.classList.remove('active-slide'))
        
        // Add active class to current slide
        slides[index].classList.add('active-slide')
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length
        showSlide(currentSlide)
    }

    function startSlideshow() {
        if(slideInterval) {
            clearInterval(slideInterval)
        }
        slideInterval = setInterval(nextSlide, 5000) // Change slide every 5 seconds
    }

    // Show first slide
    showSlide(0)
    
    // Start slideshow
    startSlideshow()
}

/*=============== ITINERARY POPUP ===============*/
document.addEventListener('DOMContentLoaded', function() {
    const imageContainers = document.querySelectorAll('.itinerary__image-container');
    const overlay = document.querySelector('.itinerary__overlay');

    // Open popup
    imageContainers.forEach(container => {
        container.addEventListener('click', function() {
            const popup = this.closest('.itinerary__card').querySelector('.itinerary__popup');
            popup.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    // Close popup when clicking overlay
    overlay.addEventListener('click', closeActivePopup);

    // Close popup when clicking close button
    document.querySelectorAll('.itinerary__close').forEach(button => {
        button.addEventListener('click', closeActivePopup);
    });

    function closeActivePopup() {
        const activePopup = document.querySelector('.itinerary__popup.active');
        if (activePopup) {
            activePopup.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
    }

    // Close popup when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeActivePopup();
        }
    });
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
window.sr = ScrollReveal();

// Base config for all reveals
sr.reveal('.reveal', {
    duration: 2500,
    delay: 400,
    distance: '60px',
    origin: 'top',
    reset: true
});

// Common elements (Header/Nav) - exists in both pages
sr.reveal('.nav__logo', {
    origin: 'left',
    delay: 100
});

sr.reveal('.nav__list', {
    origin: 'top',
    delay: 200,
    interval: 100
});

// Helper function to check current page
function isCurrentPage(page) {
    return window.location.pathname.includes(page);
}

// Initialize animations based on current page
document.addEventListener('DOMContentLoaded', () => {
    // Common sections for both pages
    // Footer animations
    sr.reveal('.footer__content', {
        origin: 'bottom'
    });
    sr.reveal('.footer__logo', {
        delay: 200
    });
    sr.reveal('.footer__description', {
        delay: 300
    });
    sr.reveal('.footer__data', {
        delay: 400,
        interval: 100
    });
    sr.reveal('.footer__social', {
        delay: 500
    });
    sr.reveal('.footer__copy', {
        delay: 600
    });

    // Contact section (exists in both pages)
    sr.reveal('.contact__data', {
        origin: 'left'
    });
    sr.reveal('.contact__form', {
        origin: 'right'
    });
    sr.reveal('.contact__info', {
        delay: 300,
        interval: 100
    });
    sr.reveal('.contact__card', {
        interval: 200
    });

    // Check if we're on the main page (index.html)
    if (!isCurrentPage('about.html')) {
        // Home section
        sr.reveal('.home__data');
        sr.reveal('.home__card', {
            delay: 600,
            distance: '100px',
            interval: 100
        });
        sr.reveal('.home__bg', {
            delay: 300
        });

        // Itinerary section
        sr.reveal('.itinerary__group', {
            interval: 200
        });
        sr.reveal('.itinerary__card', {
            interval: 200
        });
        sr.reveal('.itinerary__day-title', {
            interval: 100
        });

        // Price section
        sr.reveal('.price__data', {
            origin: 'left'
        });
        sr.reveal('.price__table-wrapper', {
            origin: 'right',
            delay: 200
        });
        sr.reveal('.cost__information', {
            delay: 300,
            interval: 100
        });
        sr.reveal('.hotel__information', {
            delay: 400,
            interval: 200
        });
        sr.reveal('.complimentary', {
            delay: 500
        });

        // Experience section
        sr.reveal('.experience__card', {
            interval: 200
        });
        sr.reveal('.experience__title', {
            delay: 200
        });

        // Gallery section
        sr.reveal('.gallery__slider');
        sr.reveal('.gallery__track', {
            delay: 200
        });
        sr.reveal('.gallery__item', {
            interval: 100
        });
        sr.reveal('.gallery__nav', {
            origin: 'bottom',
            delay: 300
        });

        // Join section
        sr.reveal('.join__data', {
            origin: 'left'
        });
        sr.reveal('.join__image', {
            origin: 'right'
        });
        sr.reveal('.join__form', {
            delay: 300
        });
    }
    
    // Check if we're on the about page
    if (isCurrentPage('about.html')) {
        // About specific animations
        sr.reveal('.section__title', {
            distance: '40px',
            delay: 100
        });

        sr.reveal('.about__description', {
            origin: 'right',
            delay: 300,
            interval: 200
        });

        sr.reveal('.about__stats', {
            delay: 400
        });

        sr.reveal('.about__stat', {
            interval: 200,
            scale: 0.8,
            delay: 500
        });

        sr.reveal('.about__image', {
            origin: 'left',
            delay: 300,
            scale: 0.9
        });

        sr.reveal('.about__shadow', {
            origin: 'left',
            delay: 400
        });

        // Contact section specific to about page
        sr.reveal('.contact__description', {
            origin: 'bottom',
            delay: 200
        });

        sr.reveal('.contact__form-div', {
            interval: 200,
            delay: 600
        });

        sr.reveal('.contact__button', {
            delay: 800,
            scale: 0.8
        });
    }
});



/*=============== FORM VALIDATION ===============*/
function initializeFormValidation() {
    const forms = document.querySelectorAll('form')
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            
            // Basic form validation
            let isValid = true
            const requiredFields = form.querySelectorAll('[required]')
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false
                    field.classList.add('error')
                } else {
                    field.classList.remove('error')
                }
            })
            
            if (isValid) {
                // Handle form submission
                console.log('Form submitted successfully')
                form.reset()
            }
        })
    })
}

/*=============== LAZY LOADING IMAGES ===============*/
function initializeLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]')
    
    const lazyLoadingOptions = {
        rootMargin: '50px 0px',
        threshold: 0.1
    }
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target
                img.src = img.dataset.src
                img.removeAttribute('data-src')
                observer.unobserve(img)
            }
        })
    }, lazyLoadingOptions)
    
    lazyImages.forEach(img => imageObserver.observe(img))
}

/*=============== INITIALIZE ALL FEATURES ===============*/
document.addEventListener('DOMContentLoaded', () => {
    initializeSlideshow()
    initializePopups()
    initializeScrollReveal()
    initializeFormValidation()
    initializeLazyLoading()
})

/*=============== PREVENT FORM RESUBMISSION ===============*/
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href)
}

document.addEventListener('DOMContentLoaded', function() {
    const tableWrapper = document.querySelector('.price__table-wrapper');
    const scrollIndicator = document.querySelector('.price__scroll-indicator');

    if (tableWrapper && scrollIndicator) {
        // Check if scrolling is needed
        const checkScroll = () => {
            if (tableWrapper.scrollWidth > tableWrapper.clientWidth) {
                scrollIndicator.style.display = 'flex';
            } else {
                scrollIndicator.style.display = 'none';
            }
        };

        // Check scroll position for gradient fade
        tableWrapper.addEventListener('scroll', () => {
            const isScrollEnd = tableWrapper.scrollLeft + tableWrapper.clientWidth >= tableWrapper.scrollWidth;
            tableWrapper.classList.toggle('scroll-end', isScrollEnd);
        });

        // Initial check
        checkScroll();

        // Recheck on window resize
        window.addEventListener('resize', checkScroll);
    }
});

const slider = document.querySelector('.gallery__slider')
const track = document.querySelector('.gallery__track')
const items = document.querySelectorAll('.gallery__item')
const prevButton = document.querySelector('.gallery__nav--prev')
const nextButton = document.querySelector('.gallery__nav--next')

let isDragging = false
let startPos = 0
let currentTranslate = 0
let prevTranslate = 0
let animationID = 0
const itemWidth = 300 // Width of each item + gap

function setupInfiniteScroll() {
    // Clone initial set of items
    items.forEach(item => {
        const clone = item.cloneNode(true)
        track.appendChild(clone)
    })
    
    // Observer to check when we need to add more items
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // When the last visible item comes into view
            if (entry.isIntersecting) {
                // Clone and append all items again
                items.forEach(item => {
                    const clone = item.cloneNode(true)
                    track.appendChild(clone)
                })
            }
        })
    }, {
        root: slider,
        rootMargin: '0px 200px 0px 0px' // Start loading before reaching the end
    })

    // Observe the last visible item
    function observeLastItem() {
        const allItems = track.children
        observer.disconnect()
        observer.observe(allItems[allItems.length - items.length])
    }

    observeLastItem()
    // Reobserve when new items are added
    const mutationObserver = new MutationObserver(observeLastItem)
    mutationObserver.observe(track, { childList: true })
}

function touchStart(event) {
    isDragging = true
    startPos = event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
    animationID = requestAnimationFrame(animation)
    track.style.cursor = 'grabbing'
}

function touchMove(event) {
    if (!isDragging) return
    
    const currentPosition = event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
    const diff = currentPosition - startPos
    currentTranslate = prevTranslate + diff
}

function touchEnd() {
    isDragging = false
    cancelAnimationFrame(animationID)
    track.style.cursor = 'grab'
    
    prevTranslate = currentTranslate
    track.style.transform = `translateX(${currentTranslate}px)`
}

function animation() {
    if (isDragging) {
        track.style.transform = `translateX(${currentTranslate}px)`
        requestAnimationFrame(animation)
    }
}

function slideNext() {
    currentTranslate -= itemWidth
    prevTranslate = currentTranslate
    track.style.transform = `translateX(${currentTranslate}px)`
}

function slidePrev() {
    currentTranslate += itemWidth
    prevTranslate = currentTranslate
    track.style.transform = `translateX(${currentTranslate}px)`
}

// Prevent context menu
window.oncontextmenu = function(event) {
    if (event.target.closest('.gallery__slider')) {
        event.preventDefault()
        event.stopPropagation()
        return false
    }
}

// Event Listeners
track.addEventListener('mousedown', touchStart)
track.addEventListener('touchstart', touchStart)
track.addEventListener('mousemove', touchMove)
track.addEventListener('touchmove', touchMove)
track.addEventListener('mouseup', touchEnd)
track.addEventListener('touchend', touchEnd)
track.addEventListener('mouseleave', touchEnd)

nextButton?.addEventListener('click', slideNext)
prevButton?.addEventListener('click', slidePrev)

// Initialize
document.addEventListener('DOMContentLoaded', setupInfiniteScroll)

const experienceCards = document.querySelectorAll('.experience__image-container')
const experiencePopups = document.querySelectorAll('.experience__popup')
const experienceCloseButtons = document.querySelectorAll('.experience__close')
const experienceOverlay = document.querySelector('.experience__overlay')

// Open popup when clicking on a card
experienceCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        experiencePopups[index].classList.add('active')
        experienceOverlay.classList.add('active')
        document.body.style.overflow = 'hidden'
    })
})

// Close popup when clicking the close button
experienceCloseButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        experiencePopups[index].classList.remove('active')
        experienceOverlay.classList.remove('active')
        document.body.style.overflow = 'initial'
    })
})

// Close popup when clicking outside
experienceOverlay.addEventListener('click', () => {
    experiencePopups.forEach(popup => popup.classList.remove('active'))
    experienceOverlay.classList.remove('active')
    document.body.style.overflow = 'initial'
})