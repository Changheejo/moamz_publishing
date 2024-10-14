// 썸머노트 삽입
$(document).ready(function() {
    //여기 아래 부분
    $('#summernote').summernote({
          height: 400,                 // 에디터 높이
          minHeight: null,             // 최소 높이
          maxHeight: null,             // 최대 높이
          focus: true,                  // 에디터 로딩후 포커스를 맞출지 여부
          lang: "ko-KR",					// 한글 설정
    });
});

$(function() {
    $("#adminNavBar").load("adminNavBar.html");
    $("#adminHeader").load("adminHeader.html")
});