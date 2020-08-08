$ajax({
        url: "gnb.json"
    })
    .done(function (res) {
        console.log("res", res)
        var gnb = res.gnb;
        $("#gnb").append(`<ul class="list"></ul>`);
        $.each(gnb, function (idx, item) {
            $("#gnb .list").append(`<li><a href="${item.depth01.link}" target="${item.depth01.target}">${item.depth01.title}</a></li>`)
            var depth02 = item.depth02;
            /*<li>
                <a href="">소개</a>
                <ul>
                    <li><a href="">1</a></li>
                    <li><a href="">1</a></li>
                    <li><a href="">1</a></li>
                </ul>
            </li>*/
        })
        $.each(depth02, function (idx02, item02) {
            $("gnb .list > li").append(`<ul calss="depth02"></ul>`);
            $("gnb .list > li .depth02").append(
                `<li>
                            <a href="${item.depth01.link}" target="${item.depth01.target}">${item.depth01.title}</a>
                            </li>
                            `
            );

        })
    })