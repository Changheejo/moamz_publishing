const eatTogetherBtn = document.getElementById('eat-together-btn');
const goTogetherBtn = document.getElementById('go-together-btn');
const volunteerBtn = document.getElementById('volunteer-btn');
const hobbyBtn = document.getElementById('hobby-btn');
const activityBtn = document.getElementById('activity-btn');
const improvementBtn =document.getElementById('improvement-btn');
const challengeBtn = document.getElementById('challenge-btn');
console.log(goTogetherBtn);

const eatTogetherList = document.getElementById('"eat-together-list');
const goTogetherList= document.getElementById('go-together-list');
const volunteerList = document.getElementById('volunteer-list');
const hobbyList=document.getElementById('hobby-list');
const activityList = document.getElementById('activity-list');
const improvementList = document.getElementById('improvement-list');
const challengeList = document.getElementById('challenge-list');

eatTogetherBtn.addEventListener('click',()=>{
    eatTogetherBtn.classList.add('active');
    goTogetherBtn.classList.remove('active');
    volunteerBtn.classList.remove('active');
    hobbyBtn.classList.remove('active');
    activityBtn.classList.remove('active');
    improvementBtn.classList.remove('active');
    challengeBtn.classList.remove('active');

    eatTogetherList.classList.remove('hidden');
    goTogetherList.classList.add('hidden');
    volunteerList.classList.add('hidden');
    hobbyList.classList.add('hidden');
    activityList.classList.add('hidden');
    improvementList.classList.add('hidden');
    challengeList.classList.add('hidden');

});

goTogetherBtn.addEventListener('click',()=>{
    eatTogetherBtn.classList.remove('active');
    goTogetherBtn.classList.add('active');
    volunteerBtn.classList.remove('active');
    hobbyBtn.classList.remove('active');
    activityBtn.classList.remove('active');
    improvementBtn.classList.remove('active');
    challengeBtn.classList.remove('active');

    eatTogetherList.classList.add('hidden');
    goTogetherList.classList.remove('hidden');
    volunteerList.classList.add('hidden');
    hobbyList.classList.add('hidden');
    activityList.classList.add('hidden');
    improvementList.classList.add('hidden');
    challengeList.classList.add('hidden');

});
volunteerBtn.addEventListener('click',()=>{
    eatTogetherBtn.classList.remove('active');
    goTogetherBtn.classList.remove('active');
    volunteerBtn.classList.add('active');
    hobbyBtn.classList.remove('active');
    activityBtn.classList.remove('active');
    improvementBtn.classList.remove('active');
    challengeBtn.classList.remove('active');

    eatTogetherList.classList.add('hidden');
    goTogetherList.classList.add('hidden');
    volunteerList.classList.remove('hidden');
    hobbyList.classList.add('hidden');
    activityList.classList.add('hidden');
    improvementList.classList.add('hidden');
    challengeList.classList.add('hidden');

});
hobbyBtn.addEventListener('click',()=>{
    eatTogetherBtn.classList.remove('active');
    goTogetherBtn.classList.remove('active');
    volunteerBtn.classList.remove('active');
    hobbyBtn.classList.add('active');
    activityBtn.classList.remove('active');
    improvementBtn.classList.remove('active');
    challengeBtn.classList.remove('active');

    eatTogetherList.classList.add('hidden');
    goTogetherList.classList.add('hidden');
    volunteerList.classList.add('hidden');
    hobbyList.classList.remove('hidden');
    activityList.classList.add('hidden');
    improvementList.classList.add('hidden');
    challengeList.classList.add('hidden');

});
activityBtn.addEventListener('click',()=>{
    eatTogetherBtn.classList.remove('active');
    goTogetherBtn.classList.remove('active');
    volunteerBtn.classList.remove('active');
    hobbyBtn.classList.remove('active');
    activityBtn.classList.add('active');
    improvementBtn.classList.remove('active');
    challengeBtn.classList.remove('active');

    eatTogetherList.classList.add('hidden');
    goTogetherList.classList.add('hidden');
    volunteerList.classList.add('hidden');
    hobbyList.classList.add('hidden');
    activityList.classList.remove('hidden');
    improvementList.classList.add('hidden');
    challengeList.classList.add('hidden');

});
improvementBtn.addEventListener('click',()=>{
    eatTogetherBtn.classList.remove('active');
    goTogetherBtn.classList.remove('active');
    volunteerBtn.classList.remove('active');
    hobbyBtn.classList.remove('active');
    activityBtn.classList.remove('active');
    improvementBtn.classList.add('active');
    challengeBtn.classList.remove('active');

    eatTogetherList.classList.add('hidden');
    goTogetherList.classList.add('hidden');
    volunteerList.classList.add('hidden');
    hobbyList.classList.add('hidden');
    activityList.classList.add('hidden');
    improvementList.classList.remove('hidden');
    challengeList.classList.add('hidden');

});
challengeBtn.addEventListener('click',()=>{
    eatTogetherBtn.classList.remove('active');
    goTogetherBtn.classList.remove('active');
    volunteerBtn.classList.remove('active');
    hobbyBtn.classList.remove('active');
    activityBtn.classList.remove('active');
    improvementBtn.classList.remove('active');
    challengeBtn.classList.add('active');

    eatTogetherList.classList.add('hidden');
    goTogetherList.classList.add('hidden');
    volunteerList.classList.add('hidden');
    hobbyList.classList.add('hidden');
    activityList.classList.add('hidden');
    improvementList.classList.add('hidden');
    challengeList.classList.remove('hidden');

});