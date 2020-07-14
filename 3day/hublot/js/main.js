new fullpage("#main", {
    scrollBar: true,
});

particlesJS.load('bg', '../js/particles.json', function () { //파티클은 샾 안붙힘
    console.log('callback - particles.js config loaded');
});