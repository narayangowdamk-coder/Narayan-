// ---------- Video sound toggle ----------
const vid = document.getElementById('showcaseVideo');
const soundBtn = document.getElementById('soundToggle');
if (vid && soundBtn) {
  soundBtn.addEventListener('click', () => {
    vid.muted = !vid.muted;
    soundBtn.textContent = vid.muted ? '🔇' : '🔊';
  });
}

// ---------- Mobile hamburger / full-screen glass drawer ----------
const navToggle = document.getElementById('navToggle');
const navDrawer = document.getElementById('navDrawer');
if (navToggle && navDrawer) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navDrawer.classList.toggle('open');
  });
  navDrawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navDrawer.classList.remove('open');
    });
  });
}

// ---------- Hero background slide carousel ----------
const heroSlides = document.querySelectorAll('.hero-bg-slide');
let currentSlide = 0;

if (heroSlides.length > 1) {
  setInterval(() => {
    heroSlides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % heroSlides.length;
    heroSlides[currentSlide].classList.add('active');
  }, 6000);
}

// ---------- Skills background slide carousel ----------
const skillsSlides = document.querySelectorAll('.skills-bg-slide');
let currentSkillsSlide = 0;

if (skillsSlides.length > 1) {
  setInterval(() => {
    skillsSlides[currentSkillsSlide].classList.remove('active');
    currentSkillsSlide = (currentSkillsSlide + 1) % skillsSlides.length;
    skillsSlides[currentSkillsSlide].classList.add('active');
  }, 5500);
}

// ---------- Hero parallax on scroll ----------
const heroBg = document.querySelector('.hero-bg-wrap');
const heroGlow = document.querySelector('.hero-glow');
let ticking = false;

function updateParallax() {
  const scrollY = window.scrollY;
  const heroHeight = window.innerHeight;
  if (scrollY < heroHeight) {
    // Background moves slower than scroll for depth (parallax)
    heroBg.style.transform = `translateY(${scrollY * 0.35}px)`;
    if (heroGlow) heroGlow.style.transform = `translate(-50%, ${scrollY * 0.15}px)`;
  }
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(updateParallax);
    ticking = true;
  }
});
