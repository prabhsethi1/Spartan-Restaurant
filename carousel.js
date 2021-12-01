document.querySelectorAll(" .carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(" .carousel-item");
    const buttonsHtml = Array.from(items, () => {
        return <span class="carousel-button"></span>;
        
    });
    carousel.insertAdjacentHTML("beforeend", `
     <div class="carousel-nav"> ${ buttonsHtml.join("")} 
     </div>
     `);


    console.log(buttonsHtml);
});