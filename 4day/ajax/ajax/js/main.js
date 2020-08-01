let page = 1;
let imgSearch = function() {
    //$("#thumbs ul li").remove();
    console.log("page===",page);
    let searchWord = $("#imgSearch").val();
    $.ajax({
        url:`https://dapi.kakao.com/v2/search/image?query=${searchWord}&size=80&page=${page}`,
        headers: {
            "Authorization": "KakaoAK c6c6557f90252e4208ea1252e6ac7ce1"
        }
    })
    .done(function(res){
        console.log(res);
        var imgList = res.documents;
        let total = imgList.length;
        //console.log(total);
        $.each(imgList,function(index,item){
            let thumbnail = item.thumbnail_url;
            let big = item.image_url;
            let tag = `<li class="page${page}"><a data-fancybox="gallery" href="${big}"><img src="${thumbnail}" alt=""></a></li>`;
            $("#thumbs ul").append(tag);
        });
        gsap.from(`#thumbs ul li.page${page}`,{
            opacity:0,
            stagger:0.05
        })
        // if($("#thumbs .btnMore").length<1){
        //     $("#thumbs").append(`<div class="btns"><button class="btnMore">더보기 <i class="xi-arrow-down"></i></button></div>`);
        // }
        $("#thumbs .btnMore").show();
    });
}

$(".searchBox .btn").on("click",function(){
    $("#thumbs ul").html("");
    imgSearch();
});
$("#imgSearch").on("keyup",function(e){
    $("#thumbs ul").html("");
    if(e.keyCode===13){
        imgSearch();
    }
});
$("#thumbs .btnMore").on("click",function(){
    page++;
    imgSearch();
    console.log("click");
    console.log($(window).height(),"====",$(document).height());
});

$("body").on("click","#thumbs .btnMore",function(){
    page++;
    imgSearch();
    console.log("click");
});

$(window).on("scroll",function(){
    if( $(window).scrollTop()+$(window).height() >= $(document).height() ){
        page++;
        console.log("page", page)
        imgSearch();
    }
})
// console.log($(window).height(),"====",$(document).height());