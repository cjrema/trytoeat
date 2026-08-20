// =========================================================
// 📢 [전광판 관리 전용 파일] notice.js
// =========================================================

document.addEventListener("DOMContentLoaded", function() {
  
  // -------------------------------------------------------
  // ✏️ [수정 포인트 1] 전광판에 보여줄 공지 문구
  // -------------------------------------------------------
  const noticeMessage = "📢 할인점 8월 2차 행사 진행 중   |   📢 신제품 와사비 제품 정보 업데이트 완료 😎   |   📢 현재 분산&연계 진열의 달인 페이지는 테스트 중입니다!";

  // -------------------------------------------------------
  // 🎨 [수정 포인트 2] 전광판 디자인 및 이동 속도 설정
  // -------------------------------------------------------
  const noticeHTML = `
    <style>
      /* 💡 기존 화면이 전광판에 가려지지 않게 내용물들을 전체적으로 아래로 40px 밀어줍니다 */
      body {
        padding-top: 40px !important; 
      }

      /* 💡 화면 최상단에 무조건 100% 꽉 차게 고정되는 전광판 */
      .notice-bar-fixed {
        position: fixed;  /* 화면 허공에 완전 고정 */
        top: 0;
        left: 0;
        width: 100vw;     /* 화면 가로 전체 100% 사용 */
        background: #1F2E22;
        color: #ffffff;
        padding: 10px 0;
        overflow: hidden;
        white-space: nowrap;
        z-index: 9999;    /* 가장 최상단에 보이도록 설정 */
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      }

      .notice-track-fixed {
        display: inline-block;
        padding-left: 100%;
        animation: marquee-fixed 22s linear infinite; /* 22s는 흐르는 속도 */
        font-size: 13.5px;
        font-weight: 600;
        letter-spacing: -0.2px;
      }

      @keyframes marquee-fixed {
        0% { transform: translate(0, 0); }
        100% { transform: translate(-100%, 0); }
      }
    </style>

    <div class="notice-bar-fixed">
      <div class="notice-track-fixed">
        ${noticeMessage}
      </div>
    </div>
  `;

  // 페이지의 맨 위(Body 최상단)에 전광판을 삽입합니다.
  document.body.insertAdjacentHTML('afterbegin', noticeHTML);
});
