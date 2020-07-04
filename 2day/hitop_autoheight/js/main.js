//$("selector").height(); 높이구하기
//$("selector").height(400); 높이 지정
//$("selector").innerHeight(); 패팅값까지 가져오기
//$("selector").outerHeight(true); 마진값까지 가져오기

$("#gnb .list >li").on("mouseenter", function () {
  $("#header").addClass("on");
  var h = $(this).find(".depth02").innerHeight(); //높이찾기//그냥 height는 패딩값을못가져온다 그래서 innerHeight를 쓴다
  //마진을 포함한 높이를 가져오고 싶으면outerHeight(true);를 쓰면 된다.
  console.log(h);
  $("#header").height(h + 100);
});
$("#gnb .list >li").on("mouseleave", function () {
  $("#header").removeClass("on");
  $("#header").height(100);
});
