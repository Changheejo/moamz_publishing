const userMngBtn = document.getElementById('user-management-btn');
const sellerMngBtn = document.getElementById('seller-management-btn');
const userList = document.getElementById('user-table-container');
const sellerList = document.getElementById('seller-table-container');


userMngBtn.addEventListener('click',function(){
    this.classList.add('active-btn');
    sellerMngBtn.classList.remove('active-btn');
    userList.classList.remove('table-hidden');
    sellerList.classList.add('table-hidden');
})
sellerMngBtn.addEventListener('click',function(){
    this.classList.add('active-btn');
    userMngBtn.classList.remove('active-btn');
    sellerList.classList.remove('table-hidden');
    userList.classList.add('table-hidden');

})


 function changeStatusBtn(){
    alert("답변완료로 변경하시겠습니까?")
 }