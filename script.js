//opensimage
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");


document.querySelectorAll("img").forEach(img => {
    img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.style.display = "flex";
    });
});


lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});



//opens thankyou page

function redirectThankYou() {
    
    window.location.href = "thankyou.html"; 
    return false; 
}
