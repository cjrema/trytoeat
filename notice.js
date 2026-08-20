// =========================================================
// 📢 [전광판 관리 전용 파일] notice.js
// =========================================================

document.addEventListener("DOMContentLoaded", function() {
  
  // -------------------------------------------------------
  // ✏️ [수정 포인트 1] 전광판 공지 문구
  // 💡 따옴표 안의 글자만 수정하시면 모든 페이지에 동시에 적용됩니다!
  // -------------------------------------------------------
  const noticeMessage = 
    "📢 할인점 8월 2차 행사 진행 중", 
    "📢 신제품 와사비 제품 정보 업데이트 완료 😎",
    "📢 현재 분산&연계 진열의 달인 페이지는 테스트 중입니다!",
    " ✨ 추석 명절 영업 화이팅 ✨" 
    ;


  // -------------------------------------------------------
  // 🎨 [수정 포인트 2] 전광판 디자인 및 상단 고정 설정
  // -------------------------------------------------------
  const noticeHTML = `
    <style>
      /* 💡 전광판에 기존 화면 상단(제목, 뒤로가기 버튼 등)이 가려지지 않게 40px 내려줍니다 */
      html {
        margin-top: 40px !important;
      }

      /* 💡 어떤 페이지에서든 화면 맨 위 꼭대기에 가로 100%로 강제 고정하는 스타일 */
      #common-notice-bar {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 40px !important;
        background: #1F2E22 !important; /* 배경색 (주황색: #E8622C / 초록색: #2E7D32) */
        color: #ffffff !important;      /* 글자색 */
        display: flex !important;
        align-items: center !important;
        overflow: hidden !important;
        white-space: nowrap !important;
        z-index: 999999 !important;     /* 최상단 레이어 고정 */
        box-shadow: 0 2px 8px rgba(0,0,0,0.15) !important;
        box-sizing: border-box !important;
      }

      /* 흘러가는 글자 트랙 */
      #common-notice-track {
        display: inline-block !important;
        padding-left: 100% !important;
        animation: marquee-common 22s linear infinite !important; /* 22s = 흐르는 속도 */
        font-size: 13.5px !important;
        font-weight: 600 !important;
        letter-spacing: -0.2px !important;
        color: #ffffff !important;
        line-height: 40px !important;
      }

      /* 오른쪽에서 왼쪽으로 흐르는 애니메이션 */
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

  // 화면 최상단(body 시작 지점)에 전광판 주입
  document.body.insertAdjacentHTML('afterbegin', noticeHTML);
});
