// ANIMAÇÃO DE ENTRADA VEXA

document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("introScreen");

    if (!intro) return;

    document.body.style.overflow = "hidden";

    const liberarSite = () => {
        intro.classList.add("hide");
        document.body.style.overflow = "";

        setTimeout(() => {
            intro.remove();
        }, 850);
    };

    setTimeout(liberarSite, 1800);
});