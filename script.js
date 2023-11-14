( () => {
    let icey_modal          = document.getElementById("icey_modal");
    let icey_modal_close    = document.getElementById("icey_modal_close");
    let icey_modal_overlay  = document.getElementById("icey_modal_overlay");
    document.querySelectorAll(".icey_modal_button").forEach(iceyModalButton => {
      console.log("forEach", iceyModalButton);
      iceyModalButton.addEventListener("click", function() {
        icey_modal.classList.add("icey_active");
      });
    });
    icey_modal_close.addEventListener("click", function() {
        icey_modal.classList.remove("icey_active");
    });
    icey_modal_overlay.addEventListener("click", function() {
        icey_modal.classList.remove("icey_active");
    });
  } )();


var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        // markers:true,
        start:"top -0.2%",
        end:"top -100%",
        scrub:1,
        pin:true,
    }
})

tl
.from("#slide2",{
    y:"100%",
    opacity:0,
    duration:5,
    delay:6,
})
.from("#slide3",{
    y:"100%",
    opacity:0,
    duration:5,
    delay:6,
})

.to("#loader #bar",{
    y:"100%",
    duration:1,
    delay:-22
})
.to("#loader #bar",{
    y:"200%",
    duration:1,
})
 
