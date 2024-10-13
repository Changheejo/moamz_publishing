
// 메뉴 클릭했을 때 css 고정
const menuItems = document.querySelectorAll('.menu-item a');

menuItems.forEach(item => {
    item.addEventListener('click', function() {
        // 나머지 태그에서 clicked 클래스 제거
        menuItems.forEach(item => {
            item.classList.remove('selected');
        });
        // 클릭된 태그에 clicked 클래스 추가
        console.log(this);
        this.classList.add('selected');
    })
});
