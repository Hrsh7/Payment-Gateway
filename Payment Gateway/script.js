const payButton = document.querySelector(".payment");
const timeline = new TimelineMax({ delay: 0.2 });

window.onload = () => {
    timeline.fromTo(payButton, 0.5, { opacity: 0 }, { opacity: 1 });
}