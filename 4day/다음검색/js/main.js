let page = 1;

let imgSearch = function () {
  //함수표현식
  //$("#thumbs ul li").remove(); //같음
  let searchWord = $("#imgSearch").val(); //값, 벨류 ()안에 쓰면 입력, 안쓰면 값 받아오기
  $.ajax({
      //접속할 것
      url: `https://dapi.kakao.com/v2/search/image?query=${searchWord}&size=50&sort=recency&page=${page}`,
      headers: {
        Authorization: "KakaoAK 29dccbd2b5216f17cc2f3c21fc0cc981",
      },
    })
    //변수 첫검색은 ?로시작
    .done(function (res) {
      //접속시 나오는 것
      //console.log(res);
      let imglist = res.documents;
      let total = imglist.length;
      $.each(imglist, function (index, item) {
        let thumnail = item.thumbnail_url;
        let big = item.image_url; //item.url은 동영상이다. 스크롤바 안생기니 li width로 키워주면된다.
        let tag = `<li><a data-fancybox="gallery" href="${big}"><img src="${thumnail}" alt=""></a></li>`;
        $("#thumbs ul").append(tag);
      }); //jquery에서 제공하는 반복문, imglist쭉 보면서 function반복해라
      gsap.from("thumbs ul li", {
        opacity: 0,
        stagger: 0.05,
      });

      $("#thumbs .btnMore").show();
    });
};

$(".searchBox .btn").on("click", function () {
  page = 1;
  $("#thumbs ul li").html("");
  imgSearch();
});

$("#imgSearch").on("keyup", function (e) {
  page = 1;
  if (e.keyCode === 13) {
    $("#thumbs ul li").html("");
    imgSearch();
  }
});

//없는거에 이벤트 거는법, 이벤트를 위임
$("body").on("click", "#thumbs .btnMore", function () {
  page++;
  imgSearch();
});
/*$("#thumbs .btnMore").on("click", function () {
  page++;
  imgSearch();
});*/

$(window).on("scroll", function () {
  let scroll_height = $(window).scrollTop() + $(window).height() + 5;
  console.log(scroll_height, "===", $(document).height()); //스크롤값 위치구하기
  //$(window).height() = 웹브라우저의 높이 안바뀜
  //$(document).height() = 브라우저 안의 페이지 길이의 높이

  if (scroll_height >= $(document).height()) {
    page++;
    imgSearch();
  }
});