document.addEventListener("DOMContentLoaded", function() {
  
  // 💡 [여기가 핵심!] 앞으로 공지사항이 바뀔 때마다 이 부분의 글자만 수정하시면 됩니다.
  const noticeMessage = "🚨 [공지] 7월 신제품 '백설x움트리 와사비 3종' 진열 가이드가 업데이트 되었습니다! 🚀 필수 확인 부탁드립니다!";

  // 전광판 디자인과 구조 (CSS + HTML)
  const noticeHTML = `
    <style>
      .marquee-box {
        width: 100%;
        background: #1F2E22; /* 진한 쑥색 배경 (주황색은 #E8622C) */
        color: #fff;
        overflow: hidden;
        white-space: nowrap;
        padding: 12px 0;
        border-radius: 12px;
        margin-bottom: 24px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.05);
      }
      .marquee-text {
        display: inline-block;
        padding-left: 100%;
        animation: scroll-left 15s linear infinite; /* 15s는 흐르는 속도 */
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 0.02em;
      }
      @keyframes scroll-left {
        0% { transform: translateX(0); }
        100% { transform: translateX(-100%); }
      }
    </style>
    <div class="marquee-box">
      <div class="marquee-text">
        ${noticeMessage}
      </div>
    </div>
  `;

  // 페이지의 .wrap(메인 하얀 상자) 안쪽 맨 위에 전광판을 자동으로 끼워 넣습니다.
  const wrapElement = document.querySelector('.wrap');
  if (wrapElement) {
    wrapElement.insertAdjacentHTML('afterbegin', noticeHTML);
  }
});
