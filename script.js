const toggle = document.querySelector("[data-nav-toggle]");
const menu = document.querySelector("[data-nav-menu]");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

const links = document.querySelectorAll("[data-nav-link]");
const current = window.location.pathname.split("/").pop() || "index.html";

links.forEach((link) => {
  const href = link.getAttribute("href");
  if (href === current) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
});

const yearNode = document.querySelector("[data-year]");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}
