Splitting();
$.ajax({ //$.ajax("typo-list.json")//이것도 가능
        url: "typo-list.json"
    })
    .done(function (res) { //잘 실행됬을경우
        //console.log(res.list);
        var typoList = res.list;
        //console.log (typoList[0].imgsrc);
        $.each(typoList, function (idx, item) {
            //console.log("idx", idx)//순서
            //console.log("item or this", item);//내용
            var html = `
            <li class="item ${item.type}">
                <a href="${item.imgsrc}" data-fancybox="${item.type}"><!-- 화면크게 -->
                    <div class="imgBox">
                        <img src="${item.imgsrc}" alt="">
                    </div>
                    <div class="desc">
                        <h2>
                        ${item.title}
                        </h2>
                        <p>
                        ${item.desc}
                        </p>
                    </div>
                </a>
            </li>`;
            $("#main ul").append(html);
        });
        $('#main').imagesLoaded()
            .always(function (instance) {
                var grid = $("#main .list").isotope({
                    itemSelector: ".item",
                    layoutMode: "masonry"
                });
                var filter_array = ["item", "typography", "digital", "paint"]
                $(".filter li").on("click", function () {
                    $(this).addClass("on");
                    $(this).siblings().removeClass("on");
                    // var filter_text = filter_array[$(this).index()];
                    var filter_text = $(this).data("filter"); //요즘 많이씀
                    console.log("filter_text=", filter_text)
                    console.log("this=", this)
                    grid.isotope({
                        filter: `.${filter_text}`
                    })
                })
                $("#main li").on("mouseenter", function () {
                    $(".cursor").addClass("on");
                    gsap.to(".cursor", {
                        scale: 5,
                        ease: "elastic",
                        duration: 1
                    })
                });
                $("#main li").on("mouseleave", function () {
                    $(".cursor").removeClass("on");
                    gsap.to(".cursor", {
                        scale: 1,
                        ease: "elastic",
                        duration: 1
                    })
                });
                var time = gsap.timeline();
                time.from("h1 .char", {
                        x: 100,
                        opacity: 0,
                        ease: "back.out",
                        stagger: 0.1,
                    })
                    .from(".filter li", {
                        x: 100,
                        opacity: 0,
                        ease: "back.out",
                        stagger: 0.1,
                    })
            })

    });
$(window).on("mousemove", function (e) {
    //console.log(e);
    gsap.to(".cursor", {
        //x: e.pageX,
        //y: e.pageY,
        x: e.clientX,
        y: e.clientY,
        ease: "power4"
    });
    gsap.to(".cursor_follow1", {
        //x: e.pageX,
        //y: e.pageY,
        x: e.clientX,
        y: e.clientY,
        duration: 1.8,
        ease: "power4"
    })
    /*
    gsap.to(".cursor_follow2", {
        //x: e.pageX,
        //y: e.pageY,
        x: e.clientX,
        y: e.clientY,
        duration: 2.1,
        ease: "power4"
    })
    gsap.to(".cursor_follow3", {
        //x: e.pageX,
        //y: e.pageY,
        x: e.clientX,
        y: e.clientY,
        duration: 2.4,
        ease: "power4"
    })
    gsap.to(".cursor_follow4", {
        //x: e.pageX,
        //y: e.pageY,
        x: e.clientX,
        y: e.clientY,
        duration: 2.7,
        ease: "power4"
    })
    gsap.to(".cursor_follow5", {
        //x: e.pageX,
        //y: e.pageY,
        x: e.clientX,
        y: e.clientY,
        duration: 3.0,
        ease: "power4"
    })
    gsap.to(".cursor_follow6", {
        //x: e.pageX,
        //y: e.pageY,
        x: e.clientX,
        y: e.clientY,
        duration: 3.3,
        ease: "power4"
    })
    */
})