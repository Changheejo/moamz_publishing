// 💥tr클릭시 해당 상세페이지 이동시키기 구현하기
// // 모든 <tr>에 클릭 이벤트 추가
// const rows = document.querySelectorAll('table tbody tr');

// rows.forEach(row => {
//   row.addEventListener('click', function() {
//     // 클릭한 <tr>의 data-page 속성값을 가져오기
//     const pageNumber = this.getAttribute('data-page');
    
//     // 페이지 이동 (예시: 페이지 번호에 해당하는 URL로 이동)
//     window.location.href = `your-page-url?page=${pageNumber}`;
//   });
// });