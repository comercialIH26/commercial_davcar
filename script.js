// Configura aquí el número comercial en formato internacional, solo dígitos.
const CONTACT_PHONE = "573112195510"; // Línea comercial principal
const WHATSAPP_MESSAGE = "Hola, quisiera conocer más sobre W Valve y sus beneficios para mi instalación.";
const phoneLabel = document.querySelector("[data-contact-phone]");
const callLink = document.querySelector("[data-contact-call]");
const whatsappLink = document.querySelector("[data-whatsapp]");
if (CONTACT_PHONE && !CONTACT_PHONE.includes("X")) {
  if (phoneLabel) phoneLabel.textContent = "+57 (311) 219-5510 / +57 (319) 651-7890";
  if (callLink) callLink.href = `tel:+${CONTACT_PHONE}`;
  if (whatsappLink) whatsappLink.href = `https://wa.me/${CONTACT_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}
const toggle=document.querySelector(".menu-toggle");
const nav=document.querySelector("#nav");
toggle?.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));});
nav?.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{nav.classList.remove("open");toggle?.setAttribute("aria-expanded","false")}));
const items=document.querySelectorAll(".benefit-card,.story-points article,.clients-note,.contact-panel");
items.forEach(item=>item.classList.add("reveal"));
if("IntersectionObserver" in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}}),{threshold:.12});items.forEach(item=>observer.observe(item))}
else{items.forEach(item=>item.classList.add("visible"))}
