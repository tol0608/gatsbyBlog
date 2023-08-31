---
date: '2023-07-14'
title: 'DOM에서의 이벤트 처리'
categories: ['웹개발', '프로그래밍 기초', 'JAVASCRIPT', 'DOM']
summary: 'javascript'
thumbnail: '../thum/javascript.png'
---

## DOM 에서 이벤트 처리

- DOM level 0 Event Model
    - 인라인 이벤트 모델 : 태그 레벨의 이벤트 속성을 이용한 이벤트 처리 (사용하지 않는것을 추천)
    - 디폴트 이벤트 모델 : 이벤트 속성을 이용한 이벤트 처리
- DOM level 2 Event Model
    - 표준 이벤트 모델 : 이벤트 처리 메서드를 이용한 이벤트 처리

  ⇒ addEventListener(eventName, handler, isCapture)
  ⇒ removeEventListener(eventName, handler)


DOM에서 이벤트를 처리하는 방법에는 DOM level 0, DOM level 2 두 가지 모델이 있다. DOM level 0 모델은 인라인 이벤트 모델과 디폴트 이벤트 모델이 있다. 인라인 이벤트 모델은 태그 레벨의 이벤트 속성을 이용하여 이벤트를 처리하는 방법으로, 가독성과 유지보수의 어려움 때문에 사용을 권장하지 않는다. 디폴트 이벤트 모델은 이벤트 속성을 이용하여 이벤트를 처리하는 방법으로, 인라인 이벤트 모델보다는 나은 방법이다.

DOM level 2 모델은 표준 이벤트 모델로 이벤트 처리 메서드를 이용하는 방법이다. 이 방법은 가독성과 유지보수성이 높아 추천되는 방법이다.

예시 :

```jsx
document.getElementById("myButton").addEventListener("click", function(){
  alert("Button clicked");
});
```

## 이벤트 버블링과 캡쳐링

이벤트 버블링과 캡쳐링은 DOM에서 이벤트가 발생할 때, 이벤트가 전파되는 방식을 말합니다.

이벤트 버블링은 이벤트가 발생한 엘리먼트에서 시작하여 상위 요소로 전파되는 방식입니다. 예를 들어, 아래와 같은 HTML 코드가 있다고 가정합니다.

```html
<div id="outer">
  <div id="inner">
    <button id="btn">Click me</button>
  </div>
</div>
```

이 경우, `btn` 요소에서 클릭 이벤트가 발생하면, 이벤트는 `btn` 요소에서 시작하여 상위 요소인 `inner` 요소, 그리고 `outer` 요소로 전파됩니다. 이벤트 버블링은 기본적으로 모든 브라우저에서 지원되며, 이벤트 전파 순서가 자식 요소에서 부모 요소로 이루어지기 때문에 상위 요소에서 이벤트를 캐치하거나 처리하기 용이합니다.

이벤트 캡쳐링은 이벤트 버블링과 반대로 상위 요소에서 시작하여 이벤트가 발생한 엘리먼트로 전파되는 방식입니다. 이벤트 캡쳐링은 기본적으로 모든 브라우저에서 지원되지만, IE8 이하 버전에서는 지원되지 않습니다.

예를 들어 위의 HTML 코드에서 `btn` 요소에서 클릭 이벤트가 발생하면, 이벤트는 `outer` 요소에서 시작하여 `inner` 요소, 그리고 `btn` 요소로 전파됩니다. 이벤트 캡쳐링은 이벤트 전파 순서가 부모 요소에서 자식 요소로 이루어지기 때문에 자식 요소에서 이벤트를 캐치하거나 처리하기 용이합니다.

예시:

```html
<div id="outer">
  <div id="inner">
    <button id="btn">Click me</button>
  </div>
</div>

<script>
  const outer = document.getElementById("outer");
  const inner = document.getElementById("inner");
  const btn = document.getElementById("btn");

  outer.addEventListener("click", function() {
    console.log("outer clicked");
  }, true);

  inner.addEventListener("click", function() {
    console.log("inner clicked");
  }, true);

  btn.addEventListener("click", function() {
    console.log("button clicked");
  }, true);
</script>
```

위 코드에서 `true` 값은 이벤트 캡쳐링을 사용한다는 것을 의미합니다. `btn` 요소에서 클릭 이벤트가 발생하면, 이벤트는 `outer` 요소에서 시작하여 `inner` 요소, 그리고 `btn` 요소로 전파됩니다. 따라서 콘솔에는 아래와 같이 출력됩니다.

```
outer clicked
inner clicked
button clicked
```

```html
<body>
	<h1>hello, world</h1>
	<h4>다중 이벤트 연결</h4>

	<button id="btn">버튼</button>
</body>

<script>
	var btn;

	function clickHandler1() {
		alert('clickHandler1');
	}

	function clickHandler2() {
		alert('clickHandler2');
	
		btn.removeEventListener('click', clickHandler2);
	// 첫 클릭시에만 handler2가 동작하고, 이후부터는 handler2가 동작하지 않음
	}

	function init() {
		btn = document.querySelector('#btn');
		btn.addEventListener('click', clickHandler1);
		btn.addEventListener('click', clickHandler2); 
	}
	window.onload = init;

 </script>
```

```html
<body>
	<h1>hello, world</h1>
	<h4>이벤트 버블링</h4>
	
	<div id="parent">
   <div id="child"></div>
	</div>
</body>

<script>
	function childHandler(event) {
		alert('child');

		event.stopPropagation();
		// 부모의 이벤트를 상속받지 않게 해줌 / 이벤트 버블링 X
	}

	function parentHandler() {
		alert('parent');
	}

	function init() {
		document.querySelector('#child').onclick = childHandler;
		document.querySelector('#parent').onclick = parentHandler;
	}

	window.onload = init;

	</script>
```

```html
<body>
	<h1>hello, world</h1>
	<h4>이벤트 버블링</h4>

	<div id="parent">
	    <div id="child"></div>
	</div>
</body>

<script>
	function childHandler() {
		alert('child');
	}

	function parentHandler() {
		alert('parent');
	}
	
	function init() {
		document.querySelector('#child').onclick = childHandler;
		document.querySelector('#parent').onclick = parentHandler;
	}

	window.onload = init;
</script>
```