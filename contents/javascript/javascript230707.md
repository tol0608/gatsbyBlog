---
date: '2023-07-07'
title: '시간 함수, eval, 메서드'
categories: ['웹개발', '프로그래밍 기초', 'JAVASCRIPT']
summary: 'javascript'
thumbnail: '../thum/javascript.png'
---

## 시간 함수

JavaScript에서는 다양한 시간 함수들을 지원하고 있습니다. 이러한 시간 함수들은 현재 시간을 가져오거나, 시간을 조작하는 등의 다양한 기능을 제공합니다.

JavaScript에서 가장 기본적인 시간 함수는 `Date()` 함수입니다. `Date()` 함수를 호출하면 현재 시간을 나타내는 `Date` 객체가 생성됩니다. 이 객체를 이용하여, 현재 시간의 년, 월, 일, 시간, 분, 초 등을 가져올 수 있습니다.

예를 들어, 다음과 같이 현재 시간을 나타내는 `Date` 객체를 생성하고, 이 객체를 이용하여 현재 시간의 년, 월, 일, 시간, 분, 초를 가져오는 코드를 작성할 수 있습니다.

```jsx
const now = new Date();

const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const hour = now.getHours();
const minute = now.getMinutes();
const second = now.getSeconds();

console.log(`${year}년 ${month}월 ${date}일 ${hour}시 ${minute}분 ${second}초`);

```

위 코드를 실행하면, 현재 시간이 출력됩니다.

## eval()

`eval()` 함수는 JavaScript에서 문자열로 표현된 JavaScript 코드를 실행하는 함수입니다. 이 함수는 문자열로 표현된 JavaScript 코드를 실행하므로, 동적으로 생성된 코드를 실행하거나, 문자열로 표현된 수식을 계산하는 등의 용도로 사용됩니다.

하지만 `eval()` 함수는 보안상의 이유로 사용을 지양해야 합니다. 왜냐하면 `eval()` 함수는 실행될 코드를 문자열로 받기 때문에, 악의적인 공격자가 이 함수를 이용하여 악성 스크립트를 실행시킬 수 있기 때문입니다. 따라서 `eval()` 함수는 가능한 한 사용하지 않고, 대체할 수 있는 다른 함수를 사용하는 것이 좋습니다.

```jsx
var script = 'var age = 24;' + 'var gender = "man";' + 'var name = "lee";' + 'alert("이름 : " + name + ", 나이 : " + age + ", 성별 : " + gender)';

eval(script);
console.log('name : ' + name);
console.log('나이 : ' + age);
console.log('성별 : ' + gender);
```

## 메서드(Method)

자바스크립트에서 메서드는 객체에 저장된 함수를 가리키는 용어입니다. 다른 언어에서도 메서드는 객체에 속한 함수를 의미하는 경우가 많습니다.

하지만 자바스크립트에서는 함수도 객체로 취급되기 때문에, 메서드도 함수의 일종으로 볼 수 있습니다. 이러한 특징 때문에 자바스크립트에서는 함수를 **변수에 할당**하거나, 함수를 **다른 함수의 인수로 전달**할 수 있습니다. → 동적 속성 추가 및 제거를 막을 수 있는 방법이 없습니다.

```jsx
var obj = {};

obj.name = 'lee';
obj.age = 21;
obj.gender = 'male';
        
console.log(obj.name);
console.log(obj.age);
console.log(obj.gender);
```

예를 들어, 아래 코드에서 `greet` 함수는 `person` 객체에 속한 메서드로 정의되어 있습니다. 이때 `this` 키워드를 이용해 `person` 객체에 저장된 데이터에 접근할 수 있습니다.

```jsx
let person = {
  name: "Alice",
  age: 30,
  greet: function() {
    console.log("Hello, my name is " + this.name + " and I'm " + this.age + " years old.");
  }
};

person.greet();
// 출력 예시: Hello, my name is Alice and I'm 30 years old.
```

자바스크립트에서는 함수도 객체로 취급되기 때문에, 함수를 변수에 할당하거나, 함수를 다른 함수의 인수로 전달할 수 있습니다. 이러한 특징들은 자바스크립트에서 메서드를 다루는 방식을 다른 언어와 구분짓는 중요한 특징 중 하나입니다.