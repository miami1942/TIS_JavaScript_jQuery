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
            });
    });