const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav-links")
const links = document.querySelector(".nav-links li")
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
});
// image animation
const appearOptions = {
    threshold: 1,
    tootMargin: "0px 0px -20px 0px"
};
const sliders = document.querySelectorAll("#slide-in")
const faders = document.querySelectorAll('.fade-in')
const appearOnScroll = new IntersectionObserver(function(
    entries, 
    appearOnScroll
) {
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
},
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});