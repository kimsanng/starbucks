
// 돋보기아이콘 
let searchEl = document.querySelector('.search');
let searchInput = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
    searchInput.focus();
});


// 통합검색
searchInput.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInput.setAttribute('placeholder', '통합검색');
});
// 지워진값
searchInput.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInput.setAttribute('placeholder', '');
});

// lodash
let badgeEl = document.querySelector('header .badges');
let toTopEl = document.querySelector('#to-top');
window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 500){
        //배지 숨기기
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6,{
            opacity:0,
            display: 'none'
        });
        //버튼 보이기
        gsap.to(toTopEl, .2,{
            x: 0
        });
    } else{
        //배지 보이기
        gsap.to(badgeEl, .6,{
            opacity:1,
            display: 'block'
        });
        //버튼 숨기기
        gsap.to(toTopEl, .2,{
            x: 100
        });
    }
}, 300)); //_.throttle(함수,시간)


toTopEl.addEventListener('click', function(){
    gsap.to(window, .7,{
        scrollTo: 0
    });
})



// visual image
let fadeEls = document.querySelectorAll('.visual .fade_in');
fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl, 1, {
        delay: (index+ 1 ) * .7,
        opacity: 1,
    });
});

// new Swiper(선택자, 옵션)  공지사항 슬라이드
new Swiper('.notice_line .swiper-container', {
    direction:'vertical',
    autoplay: true,
    loop: true
});


// promotion 슬라이드

new Swiper('.promotion .swiper-container', {
    // direction: 'horizontal', // 수평 슬라이드
    autoplay: { // 자동 재생 여부
      delay: 5000 // 5초마다 슬라이드 바뀜
    },
    loop: true, // 반복 재생 여부
    slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    pagination: { // 페이지 번호 사용 여부
      el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
      clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: { // 슬라이드 이전/다음 버튼 사용 여부
      prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
      nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
    }
  })


// awards
new Swiper('.awards .swiper-container', {
    // direction: 'horizontal', // 수평 슬라이드
    autoplay: true, // 자동 재생 여부
    loop: true, // 반복 재생 여부
    spaceBetween: 30, // 슬라이드 사이 여백
    slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
    // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
    navigation: { // 슬라이드 이전/다음 버튼 사용 여부
      prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
      nextEl: '.awards .swiper-next' // 다음 버튼 선택자
    }
  })


//   toggle_promotion
let promotionEl = document.querySelector('.promotion');
let promotionToggleBtn = document.querySelector('.toggle_promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion // !값의반대
    if(isHidePromotion){
        // 숨김처리 true
        promotionEl.classList.add('hide');
    } else{
        // 보임처리 false
        promotionEl.classList.remove('hide');
    }
});


// Youtube IFrame API를 비동기로 로드합니다.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubePlayerAPIReady() {
  // <div id="player"></div>
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', // 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      // 영상이 준비되었을 때,
      onReady: function (event) {
        event.target.mute(); // 음소거!
      }
    }
  });
}

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }


// floating 애니메이션

function floatingObject(selector, delay, size){
    gsap.to(selector, random(1.5, 2.5), {
        y: size, 
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInout,
        delay: random(0, delay)
    });
} // 선택자 , 애니메이션 동작시간 , 옵션
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);



// scrollmagic
let spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl,  //보여짐여부를 감시할요소
            triggerHook: .8
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
})


// copyright
let thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear();


// to-top
