Splitting();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var titleMainMotion = {
    x: function () {
        return Math.random() * 200 - 100;
    },
    autoAlpha: 0,
    ease: "back",
    stagger: 0.05,
    duration: 1,
}
var titleSubMotion = {
    x: 100,
    autoAlpha: 0,
    ease: "back",
    stagger: 0.02,
    duration: 1,
}
var listMotion = {
    x: function () {
        return Math.random() * 200 - 100;
    },
    autoAlpha: 0,
    ease: "back",
    stagger: 0.05,
    duration: 1,
}
var happenMotion = gsap.timeline({ //gsap 지샥에 대한 엑세스 포인트 지정
    delay: 2, //첫번쨰 요소가 2초 늦게 나온다
});
var businessMotion = gsap.timeline({
    paused: true, //일단 정지시키기
    //delay: 2,
});
var portfolioMotion = gsap.timeline({
    paused: true
});
var communityMotion = gsap.timeline({
    paused: true
});

happenMotion
    .from("#happen .titleBox h2 .char", titleMainMotion)
    .from("#happen .titleBox p .char", titleSubMotion)
    .started = 1;
businessMotion
    .from("#business .titleBox h2 .char", titleMainMotion)
    .from("#business .titleBox p .char", titleSubMotion)
    .started = 0;
portfolioMotion
    .from("#portfolio .titleBox h2 .char", titleMainMotion)
    .from("#portfolio .titleBox p .char", titleSubMotion)
    .started = 0;
communityMotion
    .from("#community .titleBox h2 .char", titleMainMotion)
    .from("#community .titleBox p .char", titleSubMotion)
    .started = 0;

var motionArray = [happenMotion, businessMotion, portfolioMotion, communityMotion]; //배열로 넣어서 글을 줄인다.
//var total = $(".section").length;
new fullpage("#main", { //세션을 둘러싸고있는 메인을 적어주면된다. 높이도 무조건 자동으로 꽉채운다.
    navigation: true,
    navigationTooltips: ['HAPPEN', 'BUSINESS', 'PORTFOLIO', 'COMMUNITY'], //버튼 설명보여주기
    showActiveTooltip: true,
    onLeave: function (origin, destination, direction) { //이거 집가서 해보기
        var idx = destination.index;
        console.log("idx", idx);
        if (idx < 4) { //이거안쓰면 아래 footer 안나옴 targetMotion이 5번쨰라 if에서부터 문제가 발생
            var targetMotion = motionArray[idx];
            console.log(targetMotion.started);
            if (targetMotion.started === 0) {
                var targetMotion = motionArray[idx];
                targetMotion.restart(true);
                targetMotion.started = 1;
            }
        }

        /*
        var idx = destination.index;
        console.log("idx", idx);
        if (idx !== total + 1 && origin.index !== total) {
            var targetMotion = motionArray[idx];
            targetMotion.restart(true);
        }
    }*/

        /* 배열 넣은 이상 필요없다
        if (idx === 0) {
            happenMotion.restart(true);
        } else if (idx === 1) {
            businessMotion.restart(true);
        } else if (idx === 2) {
            portfolioMotion.restart(true);
        } else if (idx === 3) {
            communityMotion.restart(true); //true 적어야 딜레이가 걸린다.
        }
        */
    }, //destination이 위치값을 알려준다
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$("#gnb .gnbList >li").on("mouseenter focusin", function () { //이벤트 두개도 붙혀쓸수있다. focus로 탭키로 찾아도 열리게끔했다.
    $("#header").addClass("on");
    return false;
});
$("#header").on("mouseleave focusout", function () {
    $(this).removeClass("on");
    return false;
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////