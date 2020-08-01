$("#view").on("mousemove", function (e) {
    var posX = e.pageX;
    gsap.to("#view .up", {
        width: postX,
        duration: 1,
        ease: "power3"
    })
});