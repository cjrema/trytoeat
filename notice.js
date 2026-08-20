// =========================================================
// 📢 [전광판 관리 전용 파일] notice.js
// 초보자 가이드: 공지 문구, 색상, 속도를 바꿀 땐 이 파일만 수정하세요!
// =========================================================

document.addEventListener("DOMContentLoaded", function() {
  
  // -------------------------------------------------------
  // ✏️ [수정 포인트 1] 전광판에 보여줄 공지 문구
  // 💡 아래 따옴표 안의 글자만 자유롭게 수정하시면 모든 페이지에 적용됩니다!
  // -------------------------------------------------------
  const noticeMessage = "📢 할인점 8월 2차 행사 진행 중   |   📢 신제품 와사비 제품 정보 업데이트 완료 😎   |   📢 현재 분산&연계 진열의 달인 페이지는 테스트 중입니다!";


  // -------------------------------------------------------
  // 🎨 [수정 포인트 2] 전광판 디자인 및 이동 속도 설정
  // -------------------------------------------------------
  const noticeHTML = `
    <style>
      /* 상단 고정 전광판 바 */
      .notice-bar {
        width: 100%;
        background: #1F2E22; /* 👈 배경색 (주황색: #E8622C / 초록색: #2E7D32 / 검은색: #111111) */
        color: #ffffff;     /* 👈 글자색 (기본: 흰색) */
        padding: 10px 0;    /* 👈 위아래 두께 */
        overflow: hidden;
        white-space: nowrap;
        position: sticky;   /* 👈 스크롤을 내려도 상단에 찰싹 붙어있게 설정 */
        top: 0;
        z-index: 1000;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }

      /* 흘러가는 글씨 트랙 */
      .notice-track {
        display: inline-block;
        padding-left: 100%;
        animation: marquee 22s linear infinite; /* 👈 22s = 속도 (숫자가 작아지면 빨라지고, 커지면 느려집니다) */
        font-size: 13.5px;  /* 👈 글자 크기 */
        font-weight: 600;   /* 👈 글자 굵기 */
        letter-spacing: -0.2px;
      }

      /* 오른쪽에서 왼쪽으로 흐르는 동작 규칙 */
      @keyframes marquee {
        0% { transform: translate(0, 0); }
        100% { transform: translate(-100%, 0); }
      }
    </style>

    <div class="notice-bar">
      <div class="notice-track">
        ${noticeMessage}
      </div>
    </div>
  `;

  // -------------------------------------------------------
  // 🚀 페이지 맨 위(Body 최상단)에 전광판을 자동으로 끼워 넣습니다.
  // -------------------------------------------------------
  document.body.insertAdjacentHTML('afterbegin', noticeHTML);
});
