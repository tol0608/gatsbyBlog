---
date: '2023-07-13'
title: '동적 컨텐츠 생성, DOM요소 접근 및 속성변경'
categories: ['웹개발', '프로그래밍 기초', 'JAVASCRIPT', 'DOM']
summary: 'javascript'
thumbnail: '../thum/javascript.png'
---

## 동적 컨텐츠 생성

JavaScript에서 동적으로 HTML 요소를 생성하는 방법 중 하나는 `createElement()` 메소드를 사용하는 것입니다. 이 메소드를 사용하면 새로운 요소를 만들고, 해당 요소에 내용을 추가하거나 속성을 설정할 수 있습니다.

예를 들어, 다음 코드는 새로운 `<p>` 요소를 만들고, 해당 요소에 내용을 추가하고, 마지막으로 body 요소에 추가하는 방법을 보여줍니다.

```jsx
const newParagraph = document.createElement('p');
const paragraphContent = document.createTextNode('이것은 새로운 문단입니다.');
newParagraph.appendChild(paragraphContent);

document.body.appendChild(newParagraph);
```

위 코드에서 `createElement()` 메소드는 새로운 요소를 생성하고, `createTextNode()` 메소드는 새로운 텍스트 노드를 생성합니다. 그런 다음, `appendChild()` 메소드를 사용하여 텍스트 노드를 새로운 요소에 추가하고, 마지막으로 `appendChild()` 메소드를 사용하여 새로운 요소를 body 요소에 추가합니다.

또 다른 방법은 `innerHTML` 속성을 사용하는 것입니다. 이 속성을 사용하면 문자열 형태로 HTML을 생성하고, 해당 HTML을 요소 내부에 삽입할 수 있습니다.

```jsx
const targetDiv = document.getElementById('target-div');
targetDiv.innerHTML = '<p>이것은 새로운 문단입니다.</p>';
```

위 코드에서는 `innerHTML` 속성을 사용하여 새로운 HTML 요소를 생성하고, 해당 요소를 targetDiv 요소 내부에 삽입합니다.

이 방법은 텍스트와 HTML 요소를 모두 포함하고 있기 때문에 더 간단한 구문을 사용할 수 있습니다.

## DOM 요소에 접근 및 속성 변경

### 속성 접근 및 변경

DOM 요소의 속성에 접근하고 값을 변경하는 방법에는 여러 가지가 있습니다. 여기서는 `getAttribute()` 메서드를 사용하는 방법을 설명합니다.

`getAttribute()` 메서드는 지정된 속성의 값을 반환합니다. 예를 들어, 다음 코드는 `myLink` 요소의 `href` 속성 값을 가져와서 콘솔에 출력합니다.

```jsx
const myLink = document.getElementById('my-link');
const hrefValue = myLink.getAttribute('href');
console.log(hrefValue);
```

속성 값을 변경하려면 `setAttribute()` 메서드를 사용합니다. 다음 코드는 `myLink` 요소의 `href` 속성 값을 `https://www.google.com`으로 변경합니다.

```jsx
myLink.setAttribute('href', '<https://www.google.com>');
```

### 예시

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>getAttribute() 예제</title>
  </head>
  <body>
    <a href="<https://www.naver.com>" id="my-link">링크</a>
    <script>
      const myLink = document.getElementById('my-link');
      const hrefValue = myLink.getAttribute('href');
      console.log(hrefValue);

      myLink.setAttribute('href', '<https://www.google.com>');
      const newHrefValue = myLink.getAttribute('href');
      console.log(newHrefValue);
    </script>
  </body>
</html>
```

위 코드에서는 `myLink` 요소의 `href` 속성 값을 가져와서 콘솔에 출력하고, 다시 `href` 속성 값을 `https://www.google.com`으로 변경한 뒤, 변경된 값도 콘솔에 출력합니다.

`setAttribute()` 메서드는 DOM 요소의 속성 값을 변경하는 메서드입니다. `setAttribute()` 메서드를 사용하여 지정된 속성의 값을 변경하고 DOM 요소를 업데이트할 수 있습니다.

예를 들어, 다음 코드는 `myLink` 요소의 `href` 속성 값을 `https://www.google.com`으로 변경합니다.

```jsx
const myLink = document.getElementById('my-link');
myLink.setAttribute('href', '<https://www.google.com>');
```

위 코드에서 `setAttribute()` 메서드를 사용하여 `myLink` 요소의 `href` 속성 값을 변경합니다. 첫 번째 인수는 변경할 속성 이름이고, 두 번째 인수는 변경할 값입니다.

다른 예시로, 다음 코드는 `myImage` 요소의 `src` 속성 값을 `image.jpg`로 변경합니다.

```jsx
const myImage = document.getElementById('my-image');
myImage.setAttribute('src', 'image.jpg');
```

위 코드에서 `setAttribute()` 메서드를 사용하여 `myImage` 요소의 `src` 속성 값을 변경합니다.

`setAttribute()` 메서드를 사용하여 속성 값을 변경하면 DOM 요소가 업데이트됩니다.

DOM 요소의 속성 값을 변경하는 방법에는 `setAttribute()` 메서드 이외에도 `removeAttribute()` 메서드를 사용할 수 있습니다. `removeAttribute()` 메서드는 지정된 속성을 제거합니다.

```jsx
const myLink = document.getElementById('my-link');
myLink.removeAttribute('href');
```

위 코드에서 `removeAttribute()` 메서드를 사용하여 `myLink` 요소의 `href` 속성을 제거합니다.

`setAttribute()` 메서드와 `removeAttribute()` 메서드는 모두 지정된 속성의 값을 변경하여 DOM 요소를 업데이트합니다.