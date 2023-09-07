---
date: '2023-09-08'
title: 'TopButton 구현'
categories: ['블로그']
summary: '제이쿼리 코드를 타입스크립트의 함수형 컴포넌트로!'
thumbnail: '../thum/typescript.jpeg'
---

깃허브 블로그를 구현하던 중. 다른 블로그나 페이지에서 흔하게 볼 수 있는 ‘탑버튼’을 구현해보기로 했습니다.

저는 기존에 다른 홈페이지를 클론코딩하면서 구현해 놓은 자바스크립트, 제이쿼리 코드를 가지고 있었습니다.

### 1. 기존의 코드 (jQuery)

```jsx
$(document).ready(function() {
    // main2에 내려가기전까지 버튼 숨기기
    $('.t-btn').hide();

    // 스크롤 이벤트 감지
    $(window).scroll(function() {
        // main2의 위치를 확인하여 버튼 보이기/숨기기
        var section2Offset = $('.main2').offset().top;
        if ($(window).scrollTop() > section2Offset) {
            $('.t-btn').fadeIn();
        } else {
            $('.t-btn').fadeOut();
        }
    });

    // 버튼 클릭 시 상단으로 스크롤
    $('.t-btn').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
}
```

기존의 코드를 가볍게 살펴보면, 스크롤 이벤트를 사용하여 페이지의 스크롤 위치를 감지하고, 특정섹션(main2 클래스)에 도달하면 버튼을 표시하고 버튼을 클릭하면 페이지 상단으로 스크롤액션하고 있습니다.

현재 제 블로그에서는 Gatsby JS와 TypeScript를 사용하기에 손봐야할 부분이 조금 있습니다.

### 2. 1차 수정 코드 (typescript)

```tsx
document.addEventListener("DOMContentLoaded", function () {
  // main2에 내려가기전까지 버튼 숨기기
  const tBtn = document.querySelector('.t-btn');
  if (tBtn) {
    tBtn.style.display = 'none';
  }

  // 스크롤 이벤트 감지
  window.addEventListener("scroll", function () {
    // main2의 위치를 확인하여 버튼 보이기/숨기기
    const main2 = document.querySelector('.main2');
    if (main2) {
      const section2Offset = main2.getBoundingClientRect().top;
      if (window.scrollY > section2Offset) {
        if (tBtn) {
          tBtn.style.display = 'block';
        }
      } else {
        if (tBtn) {
          tBtn.style.display = 'none';
        }
      }
    }
  });

  // 버튼 클릭 시 상단으로 스크롤
  if (tBtn) {
    tBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
```

기존의 기능과 동일하게 그대로 Typescript형식으로만 바꾸었습니다. 여기서 추가적으로 작업이 필요합니다.

1. main2 클래스와 연결된 스크롤 이벤트를 scrollY 를 이용한 스크롤 이벤트로 수정
2. 여러 querySeletor를 제거하고 함수형 컴포넌트로 변환

크게 보면 두 가지인데, 제가 실제로 거쳐간 과정은 조금 복잡했습니다.

### 3. 2차 수정 코드

```jsx
// 스크롤 이벤트 감지하여 버튼 보이기/숨기기
function handleScroll() {
  const tBtn = document.querySelector('.tBtn')

  if (tBtn instanceof HTMLElement) {
    const scrollPosition = window.scrollY

    if (scrollPosition > 500) {
      tBtn.style.display = 'block'
    } else {
      tBtn.style.display = 'none'
    }
  }
}

// 버튼 클릭 시 상단으로 스크롤
function scrollToTop() {
  const tBtn = document.querySelector('.t-btn')
  if (!tBtn) return

  tBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
}

// 페이지 로드 시 초기화 및 이벤트 리스너 등록
document.addEventListener('DOMContentLoaded', function () {
  handleScroll()
  scrollToTop()

  // 스크롤 이벤트 리스너 등록
  window.addEventListener('scroll', handleScroll)
})
```

처음에는 ESLint 오류가 떴었습니다. tBtn이 ‘any’타입으로  간주되어 display와 같은 속성에 대한 안전하지 않은 멤버 액세스를 수행하고 있다고 오류가 발생했습니다. 그래서 tBtn을 HTMLElement 또는 null로 캐스팅하여 타입 안정성을 확보하는게 필요했습니다.

그럼에도 불구하고 지속적으로 멤버 액세스 오류가 발생하여  querySelector로 찾은 요소가 실제로 HTMLElement임을 Typescript에 알려주어야했습니다. 이를 위해서 `if (tBtn instanceof HTMLElement){}` 를 통해 오류를 해결했습니다.

### 4. 함수형 컴포넌트

```tsx
import React, { useState, useEffect } from 'react';

function TopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 스크롤 이벤트 핸들러
    function handleScroll() {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 500);
    }

    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 마운트 되었을 때 초기 스크롤 위치에 따라 버튼 보이기/숨기기 설정
    handleScroll();

    // 컴포넌트 언마운트 시 스크롤 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className="t-btn"
      style={{ display: isVisible ? 'block' : 'none' }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      Top
    </button>
  );
}

export default TopButton;
```

TopButton 을 함수형 컴포넌트로 변환했습니다. 코드를 한 번 리뷰해보자면,

1. `import React, {useEffect} from ‘react’` 에서 React와 useEffect를 임포트 했습니다. 함수형 컴포넌트에서 데이터를 가져오거나 이벤트 리스너 등을 추가할때 필요한 구문입니다.
2. `funtion TopButton(){}` 함수 컴포넌트를 정의했습니다.
3. `useEffect(() ⇒ {…}, [])` useEffect 훅을 사용하여 컴포넌트가 마운트될때 실행할 함수를 정의 했습니다. 빈배열을 추가하여 의존성을 대응했습니다. 그래서 배열에 포함된 변수가 변경될 때만 함수가 실행되도록 했습니다.
4. `funtion handleScroll() {}` 스크롤 이벤트를 처리하는 함수입니다.
5. `funtion scrollToTop() {}` 페이지 상단으로 스크롤하는 버튼 클릭 이벤트를 처리하는 함수입니다.

간략하게 위와 같은 코드를 통해 Top Button을 구현했습니다. 이제 버튼을 클릭하면 페이지의 상단으로 스크롤 하는 코드가 만들어졌습니다.

이제 스타일만 입혀주면 제가 고민한것은 끝이납니다.

### 5. 스타일 객체를 생성

```tsx
import React, { useState, useEffect } from 'react'

import '../styles/themeMode.css'

function TopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // 스크롤 이벤트 핸들러
    function handleScroll() {
      const scrollPosition = window.scrollY
      setIsVisible(scrollPosition > 500)
    }

    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll)

    // 컴포넌트가 마운트 되었을 때 초기 스크롤 위치에 따라 버튼 보이기/숨기기 설정
    handleScroll()

    // 컴포넌트 언마운트 시 스크롤 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // 스타일 객체를 생성하는 함수
  const buttonStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '110px',
    right: '25px',
    border: 'none',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    fontSize: '24px',
    cursor: 'pointer',
    display: isVisible ? 'block' : 'none', // isVisible 상태에 따라 동적으로 설정
  }

  return (
    <button
      style={buttonStyle}
      className="tBtn"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      👆
    </button>
  )
}

export default TopButton
```

css파일을 따로 만들수도 있었지만, 기존에 다른 기능들도 상당부분 함수를 사용하여 컴포넌트 스타일을 동적으로 설정해왔었습니다. 통일성을 위해서 컴포넌트 스타일 함수를 생성했습니다.

추후 리팩토링을 하면서 CSS를 한번에 뺄지는 다시한 번 고민해보겠습니다.

이렇게 해서 TopButton.tsx 컴포넌트는 완성되었습니다. 아직 익숙하지 않은 Typescript라 과정도 매끄럽지 않고 여정이 길었지만 기존의 QuerrySelector 와 스크롤 이벤트를 함수형 컴포넌트로 수정해볼 수 있는 경험을 가질수있어서 뿌듯했습니다.