---
date: '2023-07-12'
title: 'DOM'
categories: ['Front-End']
summary: 'javascript'
thumbnail: '../thum/javascript.png'
---

    🌐 **URL** : host(hostname + port) + pathname(서버에게 원하는 것, pathname이 없는경우는 없습니다)
    
    http://www.naver.com:80/(기본포트, 입력하고 나면 보이지 않음)


## 문서 객체 모델 (DOM : Document Object Model)

문서 객체 모델(DOM)은 웹 페이지의 모든 콘텐츠를 객체로 변환하는 API입니다. HTML, XML 또는 SVG 문서를 읽고, 문서 내의 객체에 접근하고, 이를 수정할 수 있습니다. 이를 통해 자바스크립트를 사용하여 웹 페이지의 콘텐츠, 구조, 스타일을 동적으로 조작할 수 있습니다. → HTML은 최초 파싱 과정에서 1회만 읽고, 그 이후에는 DOM을 통해 접근한다는 말입니다.

DOM은 노드 트리 구조로 되어 있으며, 각 노드는 객체로 표현됩니다. 노드는 각각의 요소, 속성, 텍스트 등을 나타내며, 이러한 노드들은 계층 구조로 연결되어 있습니다.

### 예시

```html
<!DOCTYPE html>
<html>
  <head>
    <title>DOM 예시</title>
  </head>
  <body>
    <h1>문서 객체 모델(DOM)</h1>
    <p>DOM을 사용하면 웹 페이지의 콘텐츠, 구조, 스타일을 동적으로 조작할 수 있습니다.</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </body>
</html>

```

위의 예시 HTML 문서에서, DOM은 다음과 같은 노드 트리 구조를 갖습니다.

```markdown
Document
├── html
│   ├── head
│   │   └── title
│   └── body
│       ├── h1
│       ├── p
│       └── ul
│           ├── li
│           ├── li
│           └── li
```

DOM을 사용하여 페이지의 콘텐츠를 동적으로 조작하기 위해서는 JavaScript를 사용해야 합니다. 아래는 DOM을 사용하여 웹 페이지에서 h1 요소를 선택하고, 그 내용을 변경하는 예시입니다.

```jsx
const h1 = document.querySelector('h1');
h1.textContent = 'DOM을 사용하여 동적으로 변경된 제목';
```

### DOM에서의 노드(node)

  - 노드(node)는 웹 페이지에서의 HTML 태그, 속성, 텍스트 등의 모든 요소를 나타냅니다. 노드는 계층 구조를 갖고 있으며, 상위 노드와 하위 노드를 가질 수 있습니다. 노드는 다음과 같이 구분됩니다.
  - 요소 노드(Element Node): HTML 태그를 나타냅니다.
```html
<div></div>
<p></p>
```
  - 속성 노드(Attribute Node): HTML 태그의 속성을 나타냅니다. 
```html
<div class="container"></div>
<!-- class 속성이 해당됩니다. -->
```
  - 텍스트 노드(Text Node): HTML의 텍스트 요소를 나타냅니다.
```html
<p>Hello, world!</p>
<!-- Hello, world! 가 해당됩니다. -->
```
  - 주석 노드(Comment Node): HTML에서의 주석을 나타냅니다.
  - 노드는 다음과 같은 속성과 메서드를 가집니다.
  - parentNode: 상위 노드를 반환합니다.
  - childNodes: 하위 노드의 목록을 반환합니다.
  - firstChild: 첫 번째 하위 노드를 반환합니다.
  - lastChild: 마지막 하위 노드를 반환합니다.
  - nextSibling: 다음 노드를 반환합니다.
  - previousSibling: 이전 노드를 반환합니다.
  - nodeValue: 노드의 값(텍스트 노드일 경우)을 반환합니다.
  - nodeName: 노드의 이름을 반환합니다. 요소 노드일 경우 태그 이름, 속성 노드일 경우 속성 이름이 반환됩니다.
  - 노드를 조작하는 것은 DOM을 조작하는 것과 같습니다. JavaScript를 사용하여 노드를 선택하고, 속성 값을 변경하거나 새로운 노드를 추가하는 등의 조작을 할 수 있습니다.

### DOM 요소에 접근하고 속성 가져오기

### `getElementById()`

`getElementById()` 메서드는 지정된 ID 속성을 가진 요소를 반환합니다.

```jsx
const element = document.getElementById('myId');
```

### `getElementsByClassName()`

`getElementsByClassName()` 메서드는 지정된 클래스 이름을 가진 문서의 모든 요소를 반환합니다.

```jsx
const elements = document.getElementsByClassName('myClass');
```

### `getElementsByTagName()`

`getElementsByTagName()` 메서드는 지정된 태그 이름을 가진 문서의 모든 요소를 반환합니다.

```jsx
const elements = document.getElementsByTagName('p');
```

### `getElementsByName()`

`getElementsByName()` 메서드는 name 속성을 가질 수 있는 태그들의 요소를 반환합니다.

### `querySelector()`

`querySelector()` 메서드는 지정된 CSS 선택자와 일치하는 문서 내 첫 번째 요소를 반환합니다.

```jsx
const element = document.querySelector('.myClass');
```

### `querySelectorAll()`

`querySelectorAll()` 메서드는 지정된 CSS 선택자와 일치하는 문서 내 모든 요소를 반환합니다.

```jsx
const elements = document.querySelectorAll('p');
```

### 속성 가져오기

DOM 요소에 대한 참조가 있으면 `getAttribute()` 메서드를 사용하여 해당 요소의 속성을 검색할 수 있습니다.

```jsx
const element = document.getElementById('myId');
const value = element.getAttribute('myAttribute');
```

`setAttribute()` 메서드를 사용하여 속성을 설정할 수도 있습니다.

```jsx
const element = document.getElementById('myId');
element.setAttribute('myAttribute', 'myValue');
```

일부 속성(예: `id`, `class`, `value`)은 DOM 요소의 해당 속성을 직접 액세스할 수 있습니다.

```jsx
const element = document.getElementById('myId');
const id = element.id;
const className = element.className;
const value = element.value;
```

### 속성 수정

`setAttribute()` 메서드를 사용하여 속성 값을 수정할 수 있습니다.

```jsx
const element = document.getElementById('myId');
element.setAttribute('myAttribute', 'myNewValue');
```

또는 속성을 직접 수정할 수도 있습니다.

```jsx
const element = document.getElementById('myId');
element.id = 'myNewId';
element.className = 'myNewClass';
element.value = 'myNewValue';
```