$(document).ready(function () {
  //$(".green").css({ width: 200, height: 200, backgorundColor: "ff33399" });
  //귄장하는 사양은 아니다 권장하는것은 아래다.
  $(".green").addClass("modify");
});
//document 는 쉽게말해서 body 태그이다.
//이렇게 하면 index.html에서 script가 위에 있어도 된다.
$("#red").css({ width: 300 });
$(".black").css({ width: 200 });

//$(".green").css({ width: 200 });
//달러그린을 찾아서 css를 바꾸겠다.
//or jQuery(".green") or document.queryselecton(".green");
