// =========================================================
// 📢 [전광판 관리 전용 파일] notice.js
// =========================================================

function initNotice() {
  // 이미 전광판이 떠있으면 중복해서 띄우지 않도록 방지
  if (document.getElementById('common-notice-bar')) return;

  // -------------------------------------------------------
  // ✏️ [수정 포인트 1] 전광판 공지 문구
  // -------------------------------------------------------
  const noticeMessage = 
    "📢 할인점 8월 2차 행사 진행 중 📢 신제품 와사비 제품 정보 업데이트 완료 😎 📢 현재 분산&연계 진열의 달인 페이지는 테스트 중입니다! ✨ 추석 명절 영업 화이팅 ✨";

  // -------------------------------------------------------
  // 🎨 [수정 포인트 2] 전광판 디자인 및 상단 고정 설정
  // -------------------------------------------------------
  const noticeHTML = `
    <style>
      /* 💡 기존 화면 가려짐 방지: html 대신 모든 페이지에 있는 .wrap 박스를 안전하게 아래로 밀어줍니다 */
      .wrap {
        margin-top: 40px !important;
      }

      /* 💡 무조건 화면 최상단에 100% 꽉 차게 고정되는 전광판 */
      #common-notice-bar {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 40px !important;
        background: #1F2E22 !important; /* 배경색 (주황색은 #E8622C) */
        color: #ffffff !important;      /* 글자색 */
        display: flex !important;
        align-items: center !important;
        overflow: hidden !important;
        white-space: nowrap !important;
        z-index: 999999 !important;     /* 최상단에 무조건 노출 */
        box-shadow: 0 2px 8px rgba(0,0,0,0.15) !important;
        box-sizing: border-box !important;
      }

      /* 흘러가는 글자 트랙 */
      #common-notice-track {
        display: inline-block !important;
        padding-left: 100% !important;
        animation: marquee-common 25s linear infinite !important; /* 글씨가 길어서 속도를 25s로 살짝 늦췄습니다 */
        font-size: 13.5px !important;
        font-weight: 600 !important;
        letter-spacing: -0.2px !important;
        color: #ffffff !important;
        line-height: 40px !important;
      }

      /* 우측에서 좌측으로 흐르는 애니메이션 */
      @keyframes marquee-common {
        0% { transform: translate(0, 0); }
        100% { transform: translate(-100%, 0); }
      }
    </style>

    <div id="common-notice-bar">
      <div id="common-notice-track">
        ${noticeMessage}
      </div>
    </div>
  `;

  // 화면(body) 맨 위에 전광판을 안전하게 끼워 넣습니다.
  document.body.insertAdjacentHTML('afterbegin', noticeHTML);
}

// 🚀 어떤 환경(타이밍)에서든 무조건 실행되도록 하는 안전장치
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initNotice);
} else {
  initNotice();
}
