const PHONE_NUMBER = '88888888';
const NAVER_FORM_URL = 'nnnnnnnn';

function callNow() {
  const cleanNumber = PHONE_NUMBER.replace(/[^0-9+]/g, '');
  if (!cleanNumber) {
    alert('전화번호를 입력해 주세요.');
    return;
  }
  window.location.href = 'tel:' + cleanNumber;
}

function openNaverForm() {
  if (!NAVER_FORM_URL || NAVER_FORM_URL === 'nnnnnnnn') {
    alert('네이버폼 주소를 실제 URL로 교체해 주세요.');
    return;
  }
  const newWindow = window.open(NAVER_FORM_URL, '_blank', 'noopener,noreferrer');
  if (newWindow) {
    newWindow.opener = null;
  }
}
