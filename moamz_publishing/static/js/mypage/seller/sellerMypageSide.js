
// 메뉴 클릭했을 때 css 고정
const menuItems = document.querySelectorAll('.menu-item a');
console.log(menuItems);
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        // console.log('크릴리기클릭외않돼');
        // 나머지 태그에서 clicked 클래스 제거
        menuItems.forEach(item => {
            item.classList.remove('clicked');
        });
        // 클릭된 태그에 clicked 클래스 추가
        // console.log(this);
        this.classList.add('clicked');
    })
});
