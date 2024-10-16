<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
$(document).ready(function() {
  let seconds; // 남은 시간 변수
  let countdown; // 카운트다운을 관리하는 변수
  const $timeSpan = $('.time'); // 시간을 표시할 요소
  const $btnSend = $('#phone-send'); // "인증번호 받기" 버튼 요소

  // 시간을 업데이트하고 화면에 표시하는 함수
  const updateCountdown = function() {
      if (seconds >= 0) {
          const minutes = Math.floor(seconds / 60);
          const remainingSeconds = seconds % 60;
          $timeSpan.text(`${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`);
          seconds--;
      } else {
          clearInterval(countdown);
          alert('인증번호 유효시간이 만료되었습니다.');
      }
  };

  // "인증번호 받기" 버튼 클릭 이벤트 핸들러
  $btnSend.on('click', function(e) {
      e.preventDefault();
      $btnSend.text('재전송');
      alert('인증번호가 발송되었습니다.');

      clearInterval(countdown);
      seconds = 180; // 3분(180초)

      updateCountdown();
      // 1초마다 카운트다운 업데이트
      countdown = setInterval(updateCountdown, 1000); 
  });
});