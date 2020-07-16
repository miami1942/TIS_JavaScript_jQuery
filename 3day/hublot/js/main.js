var my_fullpage = new fullpage("#main", {
    scrollBar: true,
});

/////////////////////////////////////////////////////////////////////////////////////////////////////

particlesJS.load('bg', '../js/particles.json', function () { //파티클은 id값에 샾 안붙힘
    console.log('callback - particles.js config loaded');
});

/////////////////////////////////////////////////////////////////////////////////////////////////////

$(".btns .btnUp").on("click", function () {
    console.log("btnUp click");
    my_fullpage.moveSectionUp(); //fullpage_api.moveSectionUp라는데 fullpage_api가 뭐지?
    return false;
});
$(".btns .btnDown").on("click", function () {
    console.log("btnDown click");
    fullpage_api.moveSectionDown();
    return false;
})