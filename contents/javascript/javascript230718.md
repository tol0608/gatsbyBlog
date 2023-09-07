---
date: '2023-07-18'
title: '비동기 통신을 위한 AJAX, XML, JSON'
categories: ['Front-End']
summary: 'javascript'
thumbnail: '../thum/javascript.png'
---

### ⭐️ 역대급 고난과 역경의 날

### AJAX(Asynchronous Javascript And Xml)?

AJAX는 웹 페이지를 리로드하지 않고도 서버와 데이터를 교환할 수 있는 기술입니다. 이를 통해 사용자는 웹 페이지를 빠르게 사용할 수 있습니다.

예를 들어, 검색창에 검색어를 입력하면 검색어와 관련된 데이터를 서버에서 가져오고, 그 결과를 웹 페이지에 동적으로 업데이트할 수 있습니다. 이렇게 하면 페이지의 로딩 시간이 단축되며, 사용자 경험이 개선됩니다.

AJAX는 주로 JavaScript와 XML을 사용하여 구현되었지만, 최근에는 JSON, HTML, CSS 등 다양한 형식의 데이터도 교환할 수 있습니다.

예시로는, Gmail의 이메일 미리보기, Facebook의 댓글 업데이트, Google Maps의 실시간 검색어 자동완성 등이 있습니다.

### XML?

XML은 Extensible Markup Language의 약자로, 데이터를 전달하고 저장하기 위한 마크업 언어입니다. HTML과 비슷한 문법을 가지고 있지만, 데이터를 표시하는 것이 HTML의 목적과 달리, 데이터를 저장하고 전달하기 위한 것입니다. XML은 데이터의 구조와 의미를 설명하는 태그를 사용하여 데이터를 구성합니다. 이러한 구조화된 데이터는 웹상에서 쉽게 교환되며, 데이터를 분석하고 처리하기 쉽습니다.

→ 새로운 마크업 언어를 만드는 기술

    🌐 동기통신에서 서버의 응답 데이터는 항상 화면 전체를 갱신하기 위한 모든 컨텐츠를 포함합니다.

    🌐 비동기통신에서의 서버의 응답은 항상 데이터 입니다.
    데이터의 형식은 단순 텍스트(CSV) 이거나, JSON 또는 XML 형식입니다.

### JSON(JavaScript Object Notation)?

JSON은 JavaScript Object Notation의 약자로, 경량의 데이터 교환 형식입니다. 사람이 읽고 쓰기 쉽고, 기계가 분석하고 생성하기 쉬운 형식을 갖추고 있습니다. JSON은 XML과 대조적으로 더 적은 양의 데이터를 전송하며, JavaScript에서 객체를 다루는 방식과 유사하여 JavaScript에서 쉽게 파싱하고 생성할 수 있습니다.

예를 들어, 서버에서 데이터를 받아와서 동적으로 웹 페이지를 업데이트할 때, JSON을 사용하여 데이터를 교환할 수 있습니다. 또한, RESTful API에서도 JSON을 자주 사용합니다.

**JSON 예시:**

```jsx
{
    "name": "John Smith",
    "age": 30,
    "city": "New York"
}
```

위의 예시는 이름, 나이, 도시 정보를 담고 있는 JSON 객체입니다. 이러한 객체는 JavaScript에서 다음과 같이 정의할 수 있습니다.

```jsx
const person = {
    name: "John Smith",
    age: 30,
    city: "New York"
};
```

⇒ Data / String

⇒ JSON 데이터를 구성하는 문자열이 자바스크립트의 암시적 객체생성 표기법을 그대로 이용하여 작성

⇒ JSON 데이터는 메서드를 가질 수 없습니다.

```jsx
<script>
    var persons = [
        {
            name: '손흥민',
            gender: '남자',
            age: 31,
            field: '축구'

        },
        {
            name: '류현진',
            gender: '남자',
            age: 37,
            field: '야구'
        },
        {
            name: '김연아',
            gender: '여자',
            age: 34,
            field: '피겨'
        }
    ]
    var personsJSON = JSON.stringify(persons);
    var personsObj = JSON.parse(personsJSON);

    function init() {
        document.querySelector('.jsonStr').innerHTML = personsJSON;

        alert(personsObj[1].name);
    }

    window.addEventListener('load', init)
</script>
```

### 비동기 통신에서 서버의 응답을 확인하는 방법

비동기 통신에서 서버의 응답을 확인하는 방법은 이벤트 리스너를 사용하는 것입니다. 서버로부터 응답이 도착하면, 이벤트 리스너가 해당 이벤트를 감지하고, 이벤트 핸들러 함수가 실행됩니다. 이벤트 핸들러 함수에서는 서버의 응답 데이터를 읽어서 필요한 처리를 수행할 수 있습니다.

예를 들어, JavaScript에서 AJAX를 사용하여 서버와 비동기 통신을 한다면, XMLHttpRequest 객체의 onreadystatechange 이벤트 리스너를 사용하여 서버의 응답을 확인할 수 있습니다. 이 이벤트 리스너는 서버로부터 응답이 도착할 때마다 호출됩니다. 이벤트 핸들러 함수에서는 XMLHttpRequest 객체의 readyState와 status 프로퍼티를 사용하여 서버의 응답을 확인하고, 필요한 처리를 수행할 수 있습니다.

```jsx
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        // 서버의 응답을 확인하고 필요한 처리를 수행합니다.
        console.log(this.responseText);
    }
};
xhttp.open("GET", "example.com/api/data", true);
xhttp.send();
```

위의 코드는 GET 방식으로 [example.com/api/data에](http://example.com/api/data%EC%97%90) 요청을 보내고, 서버로부터 응답이 도착하면 이를 콘솔에 출력하는 예시입니다.