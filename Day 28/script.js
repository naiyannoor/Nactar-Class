document.getElementById("flipBtn").addEventListener("click", function() {
    document.querySelector(".card-inner").classList.add("flipped");
});

document.getElementById("flipBackBtn").addEventListener("click", function() {
    document.querySelector(".card-inner").classList.remove("flipped");
});
