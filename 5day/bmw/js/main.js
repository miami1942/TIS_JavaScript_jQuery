function addZero(num) {
    if (num < 10) {
        return "0" + num;
    } else {
        return "" + num;
    }
}



var gap = 30;
var img_total = 38;
var img_num = 1;
$("#view").on("mousedown", function (e) {
    var oldX = e.pageX;
    $("#view").on("mousemove", function (e) {
        var posX = e.pageX;
        //var distance = Math.abs(posX - click_posX);
        if (posX > oldX + gap) {
            img_num++;
            if (img_num > img_total) {
                img_num = 1;
            }
            oldX = posX;
        } else if (posX < oldX - gap) {
            img_num--;
            if (img_num < 1) {
                img_num = img_total;
            }
            oldX = posX;
        }
        //var x = posX * 38 / 1920; //비례식
        ///var img_num = addZero(Math.floor(distance) % 38 + 1);
        //$("#view .car").attr("src", "../images/02.jpg"); //속성값보기 아래거와 둘다 사용가능
        $(".txt").text(`posX====${posX}`, `click_posX====${oldX}`);
        $("#view .car").attr({
            src: `../images/${addZero(img_num)}.jpg`,
            //alt: "두번째이미지"
        });
    });
});
$("#view").on("mouseup", function (e) {
    $("#view").off("mousemove"); //off()만쓰면 view에 걸린 모든 이벤트가 다 삭제된다.
});

$(window).on("mousewheel", function (e) {
    console.log("e", e.originalEvent.deltaY);
    var amount = e.originalEvent.deltaY;
    if (amount > 0) {
        img_num++;
        if (img_num > img_total) {
            img_num = 1;
        }
        $("#view .car").attr({
            src: `../images/${addZero(img_num)}.jpg`,
        });
    } else {
        img_num--;
        if (img_num < 1) {
            img_num = img_total;
        }
        $("#view .car").attr({
            src: `../images/${addZero(img_num)}.jpg`,
        });
    }
    //
});
gsap.registerPlugin([InertiaPlugin]);
Draggable.create("#drag .knob", {
    type: "x",
    edgeResistance: 0.65,
    bounds: "#drag .bg",
    inertia: true,
    onDrag: function () {
        img_num = Math.floor(this.x * 38 / 720) + 1;
        $("#view .car").attr({
            src: `../images/${addZero(img_num)}.jpg`,
        });
    },
    onThrowUpdate: function () { //잡고 던지는거 까지
        img_num = Math.floor(this.x * 37 / 720) + 1;
        $("#view .car").attr({
            src: `../images/${addZero(img_num)}.jpg`,
        });
    }
});