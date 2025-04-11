const btnEl=document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event) =>{
    const x = event.pageX - btnEl.offsetLeft;
    const y = event.pageY - btnEl.offsetTop;

    btnEl.computedStyleMap.setProperty("--xPos", x + "px");
    btnEl.computedStyleMap.setProperty("--yPos", y + "px");
});