// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika menu di klik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Klik di luar side bar untuk hide
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
// Animasi scroll muncul dari bawah
const revealTargets = document.querySelectorAll(
  ".about h2, .about-img, .about-p, .menu h2, .menu > p, .menu-card",
);

revealTargets.forEach((el) => el.classList.add("reveal"));

// Jeda bertahap untuk kartu menu (3 per baris)
document.querySelectorAll(".menu-card").forEach((card, i) => {
  card.style.transitionDelay = `${(i % 3) * 0.15}s`;
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // animasi hanya sekali
      }
    });
  },
  { threshold: 0.15 },
);

revealTargets.forEach((el) => observer.observe(el));
