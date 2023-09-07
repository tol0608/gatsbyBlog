---
date: '2023-07-17'
title: '이벤트 버블링, 예외처리'
categories: ['Front-End']
summary: 'javascript'
thumbnail: '../thum/javascript.png'
---

## 표준 이벤트 연결 방식

```jsx
/*
	1. 이벤트 연결 방식을 표준 이벤트 연결 방식으로 변경
	2. 변경된 코드를 실행하여 디폴트 제거 테스트
	3. 표준 이벤트 방식에서는 이벤트 제거를 위해 preventDefault() 메서드를 사용
*/

function handler(event) {
    var id = document.querySelector('#id');
    var pw = document.querySelector('#pw');
    var newPw = document.querySelector('#newPw');
    var rePw = document.querySelector('#rePw');
    var msg = document.querySelector('#msg');

    if (id.value.length >= 3 && pw.value.length >= 3 && newPw.value.length >= 3 && rePw.value.length >= 3 && pw.value !== newPw.value && newPw.value === rePw.value) {

    } else {
        id.value = '';
        pw.value = '';
        newPw.value = '';
        rePw.value = '';

        msg.innerHTML = '실패';
        msg.style.color = 'red';
        id.focus();

        event.preventDefault();
    }
}

function init() {
    document.querySelector('#changePw').addEventListener('submit', handler);
}

window.addEventListener('load', init);
```

## 이벤트 버블링과 stopPropagation()

### 이벤트 버블링(7/15 수업내용)

이벤트 버블링은 하위 요소에서 발생한 이벤트가 상위 요소로 전달되는 현상입니다. 예를 들어, 다음과 같은 HTML 코드가 있다고 가정해봅시다.

```html
<div id="outer">
  <div id="inner">
    <button>Click me</button>
  </div>
</div>
```

버튼을 클릭하면 버튼에서 click 이벤트가 발생합니다. 이때 이벤트 버블링이 발생하면서 버튼에서 발생한 이벤트가 상위 요소인 `div#inner`로 전달되고, 다시 `div#inner`에서 `div#outer`로
전달됩니다.

```jsx
    document.querySelector('#outer').addEventListener('click', function() {
      console.log('outer');
    });
    
    document.querySelector('#inner').addEventListener('click', function() {
      console.log('inner');
    });
    
    document.querySelector('button').addEventListener('click', function() {
      console.log('button');
    });
```

위 코드를 실행하면 버튼을 클릭할 때 콘솔에는 다음과 같은 결과가 출력됩니다.

```
button
inner
outer
```

### stopPropagation()

stopPropagation() 메서드는 이벤트의 버블링을 중지시킵니다. 예를 들어, 다음과 같은 HTML 코드가 있다고 가정해봅시다.

```html
<div id="outer">
    <div id="inner">
        <button>Click me</button>
    </div>
</div>
```

그리고 다음과 같은 자바스크립트 코드가 있다고 가정해봅시다.

```jsx
document.querySelector('#outer').addEventListener('click', function () {
    console.log('outer');
});

document.querySelector('#inner').addEventListener('click', function (event) {
    console.log('inner');
    event.stopPropagation();
});

document.querySelector('button').addEventListener('click', function () {
    console.log('button');
});
```

위 코드를 실행하면 버튼을 클릭할 때 콘솔에는 다음과 같은 결과가 출력됩니다.

```
button
inner
```

`div#inner`의 click 이벤트 핸들러에서 stopPropagation() 메서드를 호출하면 이벤트 버블링이 중지되고, `div#outer`로 이벤트가 전파되지 않습니다.

### 이벤트 버블링을 이용한 버튼 구현

```html
<body>
<h1>hello, world</h1>
<h2>이벤트 버블링</h2>
<hr>
<div id="buttons">
    <button>Create</button>
    <br>
    <button>Read</button>
    <br>
    <button>Update</button>
    <br>
    <button>Delete</button>
    <br>
</div>

<script>
    function handler(event) {
        var content = event.target.innerHTML;
        // event.target 을 이용한 예제

        if (content === 'Create') {
            alert('생성 버튼을 클릭함')
        } else if (content === 'Read') {
            alert('읽기 버튼을 클릭함')
        } else if (content === 'Update') {
            alert('업데이트 버튼을 클릭함')
        } else if (content === 'Delete') {
            alert('삭제 버튼을 클릭함')
        }
    }

    function init() {
        document.querySelector('#buttons').addEventListener('click', handler)
    }

    window.onload = init;

</script>
</body>
```

## SPA(Single Page-web Application)

SPA(Single Page-Web Application)란 단일 페이지로 구성된 웹 어플리케이션입니다. 새로운 페이지를 불러오는 것이 아니라, 동적으로 화면을 갱신하면서 사용자와 상호작용합니다. 이를 위해,
대부분의 로직이 클라이언트 측에서 수행됩니다. SPA는 빠른 사용자 경험과 높은 성능을 제공합니다. 이는 페이지 전환 시에 필요한 리소스(HTML, CSS, JavaScript)를 한 번만 불러오기 때문입니다.
또한, 서버와의 통신을 최소화하면서, 데이터를 비동기적으로 가져와 사용자에게 보여줍니다.

→ AJAX는 Asynchronous JavaScript and XML의 약자로, 비동기적인 웹 애플리케이션을 만드는 데 사용되는 웹 개발 기술입니다. 이러한 애플리케이션은 페이지를 다시 로드할 필요 없이 서버와
데이터를 교환할 수 있습니다. 이를 통해 더 반응성이 뛰어나고 상호작용이 가능한 사용자 경험을 제공할 수 있습니다.

AJAX는 현대적인 웹 개발에서 널리 사용되며, 특히 단일 페이지 애플리케이션(SPA)에서 사용됩니다. SPA는 단일 HTML 페이지를 로드하고 사용자가 애플리케이션과 상호작용함에 따라 해당 페이지를 동적으로
업데이트하는 웹 애플리케이션입니다. 페이지가 다시 로드되지 않기 때문에 사용자는 더 빠른 로드 시간과 페이지 간의 부드러운 전환을 경험할 수 있습니다.

AJAX를 사용하면 클라이언트 측 Javacript 코드와 서버 측 웹 애플리케이션 간에 데이터를 교환할 수 있습니다. 이 통신은 일반적으로 JSON(JavaScript Object Notation) 또는 XML(
Extensible Markup Language)을 사용하여 수행됩니다. 클라이언트 측 코드는 이 데이터를 사용하여 페이지를 동적으로 업데이트할 수 있습니다.

AJAX는 빠르고 반응성이 높은 웹 애플리케이션을 만드는 데 강력한 도구입니다. 그러나 올바르게 사용하고 보안을 유지하는 것이 중요합니다. AJAX를 사용할 때는 반드시 크로스 사이트 스크립팅(XSS) 공격으로부터
보호해야 합니다. 이를 위해 사용자 입력을 적절하게 검증하고 모든 데이터를 서버 측에서 유효성 검사해야 합니다.

AJAX 외에도, 단일 페이지 애플리케이션을 만드는 데 사용되는 다른 인기 있는 도구로는 React가 있습니다. React는 사용자 인터페이스를 구축하기 위한 자바스크립트 라이브러리로, 전체 애플리케이션에서 재사용
가능한 UI 컴포넌트를 만들 수 있습니다. React는 서버 측 렌더링도 지원하기 때문에 SEO에 친화적인 SPA를 구축하는 데 좋은 선택지입니다. AJAX와 React를 함께 사용하면 동적이고 상호작용이 가능한 웹
애플리케이션을 만들어 원활한 사용자 경험을 제공할 수 있습니다.

→ React : SPA 환경에서 AJAX를 이용하여 동적으로 화면을 재구성 하는 방법 (JXS, Compornent를 이용)

## 예외처리

예외(Exception)란 실행 중인 프로그램이 오작동을 하거나 종료되는 원인이 되는 오류를 말합니다. 자바스크립트에서 예외는 다양한 이유로 발생할 수 있습니다. 예를 들어, 잘못된 매개변수를 함수에 전달하거나,
존재하지 않은 객체 속성을 참조하거나, 배열의 범위를 벗어나는 인덱스를 사용하는 등의 경우가 있습니다.

자바스크립트에서 예외를 처리하는 방법 중 하나는 try-catch문을 사용하는 것입니다. try 블록 안에는 예외가 발생할 가능성이 있는 코드를 작성하고, catch 블록 안에는 해당 예외를 처리하는 코드를
작성합니다. 예외가 발생하면, try 블록 안의 코드 실행이 중단되고, catch 블록으로 제어가 이동합니다. catch 블록에서 예외를 처리한 후, 프로그램이 계속 실행됩니다.

예제를 통해 이를 살펴보겠습니다.

```jsx
function divide(a, b) {
    if (b === 0) {
        throw new Error('Divide by zero');
    }
    return a / b;
}

try {
    var result = divide(10, 0);
    console.log(result);
} catch (e) {
    console.log(e.message);
}
```

위 코드는 숫자 a를 숫자 b로 나누는 divide 함수입니다. 만약 b가 0이면, 예외를 발생시킵니다. try 블록 안에서 divide 함수를 호출한 후, catch 블록에서 예외를 처리합니다. 이 예제에서는
예외가 발생하면, "Divide by zero"라는 메시지가 콘솔에 출력됩니다.

이외에도, 예외를 발생시키는 다른 방법으로는 throw문을 사용하는 것이 있습니다. throw문은 예외를 강제로 발생시킵니다. 다음 예제를 살펴보겠습니다.

```jsx
function func() {
    throw new Error('Something went wrong');
}

try {
    func();
} catch (e) {
    console.log(e.message);
}
```

위 코드는 func 함수를 호출하고, 함수 내부에서 예외를 발생시키는 예제입니다. try 블록에서 func 함수를 호출하고, catch 블록에서 예외를 처리합니다. 이 예제에서는 예외가 발생하면, "Something
went wrong"라는 메시지가 콘솔에 출력됩니다.

예외처리는 프로그램의 안정성을 높이는 데 중요한 역할을 합니다. 예외가 발생하면, 프로그램이 예기치 않게 종료{되는 것을 방지할 수 있습니다. 따라서, 예외처리를 적절하게 사용하여 프로그램의 안정성을 높이는 것이
좋습니다.

### 예외처리 콘솔로 확인해보기

```jsx
try {
    console.log('[1] 오류 발생 전');
    console.log('[2]' + (4 + num));
    console.log('[3] 오류 발생 후');
} catch (e) {
    console.log('[4] 에러 처리');
}
console.log('[5] 에러 처리 후');

// 1, 4, 5 콘솔창에 표시됨
```