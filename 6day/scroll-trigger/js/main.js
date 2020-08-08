Splitting();
gsap.registerPlugin(CSSRulePlugin);
gsap.defaults({
    ease: "back.out",
    duration: 1
});
var time01 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section01",
        markers: true,
        start: "0 0",
        end: "100%",
        pin: true,
        pinSpacing: true, //이거잡아야 여백 생기고 같이 안올라간다
        scrub: true,
    }
});
time01.from(".section01 .txt01 .char", {
        x: 100,
        opacity: 0,
        stagger: 0.05
    })
    .from(CSSRulePlugin.getRule(".tsa .section01 .txt01:after"), {
        cssRule: {
            scale: 0
        },
        ease: "power3",
    }, "-=0.5")
    .from(".section01 .txt02 .char", {
        x: 100,
        opacity: 0,
        stagger: 0.05
    }, "-=0.8")
    .from(".section01 .txt03 .txt0301", {
        x: 100,
        opacity: 0,
    }, "-=0.8")
    .from(".section01 .txt03 .txt0302", {
        x: -100,
        opacity: 0,
    }, "-=0.8")
    .from(".section01 .txt03 .txt0303", {
        x: 100,
        opacity: 0,
    }, "-=0.8")
    .from(".section01 .txt04", {
        scale: 0,
        opacity: 0,
    }, "-=0.8")

let count = new CountUp("count", 100, 300, 0, 5); //시작, 끝 , 소수점, 걸리는 시간
count.start();


var time02 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section02",
        markers: true,
        start: "top top",
        end: "100%",
        pin: true,
        pinSpacing: true,
        scrub: true, //이걸줘야 움직이는동안 모션의 시간을 같이 감지한다
        onEnter: function () {
            count.start();
        }
    }
});
time02.from(".section02 .title .char", {
        x: 100,
        opacity: 0,
        stagger: 0.1
    })
    .from(".section02 .mainTxt .mainTxt01", {
        x: 100,
        opacity: 0
    }, "-=0.8")
    .from(".section02 .mainTxt .mainTxt02", {
        x: -100,
        opacity: 0
    }, "-=0.8")
    .from(".section02 .mainTxt .mainTxt03", {
        x: 100,
        opacity: 0
    }, "-=0.8")
    .from(".section02 .circleList li", {
        x: 100,
        opacity: 0,
        stagger: 0.1
    }, "-=0.8")
    .from(".section02 .cduBox", {
        scale: 0,
        opacity: 0,
    }, "-=0.2")

var time03 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section03",
        markers: true,
        start: "top top",
        end: "100%",
        pin: true,
        pinSpacing: true,
        scrub: true, //이걸줘야 움직이는동안 모션의 시간을 같이 감지한다
    }
});
time03.from(".section03 .title .char", {
        x: 100,
        opacity: 0,
        stagger: 0.1
    })
    .from(".section03 .mainTxt span", {
        x: 100,
        opacity: 0,
        stagger: 0.1
    }, "-=0.8")
    .from(".section03 .list li", {
        x: 100,
        opacity: 0,
        stagger: 0.1
    }, "-=0.8")
    .to(".section03 .airplane", {
        opacity: 1,
        x: 200,
        y: -200,
        ease: "power3"
    }, "-=0.8")