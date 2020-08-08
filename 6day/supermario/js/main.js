$.ajax({
        url: "mario.json"
    })
    .done(function (res) {
        //console.log(res);
        var mario = res.mario;
        var total = mario.length;
        var zAmount = 5000;
        $("#gnb ul").html("");

        $.each(mario, function (idx, item) {
            var listItem = `<li>
                            <div class="mario">
                                <img src="${item.imgSrc}" alt="">
                            </div>
                            <div class="txtBox">
                                <h2>${item.title}</h2>
                                <p>
                                    ${item.desc}
                                </p>
                            </div>
                            <div class="bg"></div>
                        </li>`;
            $("#main ul").append(listItem);
            if (idx === 0) {
                var menuItem = `<li class="on"><a href="">${item.title}</a></li>`;
            } else {
                var menuItem = `<li><a href="">${item.title}</a></li>`;
            }
            $("#gnb ul").append(menuItem);
        });
        var oldIndex = 0;
        $("#gnb li").on("click", function () {
            //console.log($(this).index());
            num = zAmount * $(this).index();
            var selected = $(this).index();
            var time = Math.abs(selected - oldIndex) * 0.25;
            $("#gnb li").eq(selected).addClass("on");
            $("#gnb li").eq(selected).siblings("li").removeClass("on");
            $("#main li").each(function (idx, item) {
                var defaultNum = -zAmount * idx;
                gsap.to($(this), {
                    z: defaultNum + num,
                    duration: time
                });
            });
            oldIndex = selected;
            return false;
        });
        $("#main li").each(function (idx, item) {
            gsap.set($(this), {
                zIndex: 9999 - idx,
                z: -zAmount * idx
            });
        });

        var num = 0;
        var wheelAmount = 150;
        $(window).on("mousewheel", function (e) {
            var amount = e.originalEvent.deltaY;
            if (amount > 0) {
                num += wheelAmount;
                var selected = Math.floor(num / zAmount);
            } else {
                num -= wheelAmount;
                var selected = Math.round(num / zAmount);
            }
            if (num > (total - 1) * zAmount) {
                num = (total - 1) * zAmount;
            } else if (num < 0) {
                num = 0;
            }

            $("#gnb li").eq(selected).addClass("on");
            $("#gnb li").eq(selected).siblings("li").removeClass("on");
            $("#main li").each(function (idx, item) {
                var defaultNum = -zAmount * idx;
                gsap.to($(this), {
                    z: defaultNum + num
                });
            });
        });
    });

// $("#gnb").on("click","li",function(){
//     console.log($(this).index());
//     return false;
// });