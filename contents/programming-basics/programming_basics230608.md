---
date: '2023-06-08'
title: '프로그래밍 기초 9'
categories: ['JAVA']
summary: '참조형 매개변수, 재귀호출, 클래스 메서드와 인스턴스 메서드 등'
thumbnail: '../thum/programing.png'
---

### 참조형 매개변수

  메소드에 전달된 인자가 객체의 주소를 참조하도록 하는 매개변수입니다.
  이를 통해, 메소드 내에서 객체를 조작할 수 있습니다.

  다음과 같이 리스트를 생성하고 이를 메소드의 인자로 전달할 수 있습니다.

    ```java
    public void addToList(List<Integer> list, int num) {
        list.add(num);
    }
    
    List<Integer> my_list = new ArrayList<>(Arrays.asList(1, 2, 3));
    addToList(my_list, 4);
    System.out.println(my_list);  // [1, 2, 3, 4]
    ```

  이처럼, 참조형 매개변수를 사용하면, 메소드 내에서 객체를 조작할 수 있습니다. 하지만, 이러한 매개변수를 사용할 때에는 객체의 상태를 변경하지 않도록 주의해야 합니다.

### 재귀호출(recursive call)

  재귀호출은 자기 자신을 호출하는 것을 의미합니다. 이를 이용하여, 다양한 문제를 해결할 수 있습니다.

  예를 들어, 팩토리얼(factorial)을 계산하는 메소드를 구현한다고 생각해봅시다. 팩토리얼은 다음과 같이 정의됩니다.

    ```java
    n! = n * (n-1) * (n-2) * ... * 1
    ```

  이를 재귀적으로 표현하면 다음과 같습니다.

    ```java
    n! = n * (n-1)!
    ```

  따라서, 팩토리얼을 계산하는 메소드는 다음과 같이 구현될 수 있습니다.

    ```java
    public int factorial(int n) {
        if (n == 0) {
            return 1;
        } else {
            return n * factorial(n-1);
        }
    }
    ```

### 클래스 메서드와 인스턴스 메서드

  클래스 메서드는 클래스 자체에 속하는 메서드로, 인스턴스를 생성하지 않아도 사용할 수 있습니다. 이를 위해서는 메서드 앞에 `static` 키워드를 붙여야 합니다. 클래스 메서드는 주로 유틸리티 기능을 제공하거나, 특정 객체와 상관없이 동작하는 메서드를 구현할 때 사용됩니다.

  예를 들어, `Math` 클래스에서 제공하는 `sqrt` 메서드는 클래스 메서드입니다. `sqrt` 메서드는 숫자의 제곱근을 계산하는 유틸리티 기능을 제공하며, 인스턴스를 생성하지 않고도 사용할 수 있습니다.

    ```java
    double result = Math.sqrt(25);
    ```

  반면, 인스턴스 메서드는 특정 클래스의 인스턴스에 속하는 메서드로, 인스턴스를 생성한 후 사용할 수 있습니다. 인스턴스 메서드는 인스턴스의 상태를 변경하거나, 인스턴스의 특정 기능을 제공하는 메서드를 구현할 때 사용됩니다.

  예를 들어, `String` 클래스에서 제공하는 `length` 메서드는 인스턴스 메서드입니다. `length` 메서드는 문자열의 길이를 계산하는 기능을 제공하며, 인스턴스를 생성한 후에만 사용할 수 있습니다.

    ```java
    String str = "Hello, world!";
    int len = str.length();
    ```

  객체 지향 프로그래밍에서는 클래스와 인스턴스를 적절히 활용하여 프로그램을 구현합니다. 클래스 메서드와 인스턴스 메서드는 이러한 객체 지향 프로그래밍의 개념을 구현하는 데 중요한 역할을 합니다.


<aside>
👉 오버로딩(overloading)은 같은 이름의 메소드를 여러 개 정의하는 것을 의미합니다. 오버로딩을 사용하면, 같은 기능을 수행하는 메소드를 간결하게 정의할 수 있습니다.

예를 들어, 다음과 같은 두 개의 `add` 메소드를 구현한다고 생각해봅시다.

```java
public int add(int a, int b) {
    return a + b;
}

public double add(double a, double b) {
    return a + b;
}
```

이처럼, 같은 이름의 `add` 메소드를 정의함으로써, 정수와 실수를 더하는 기능을 간결하게 구현할 수 있습니다. 메소드를 호출할 때, 전달되는 인자의 타입에 따라 적절한 메소드가 자동으로 선택됩니다.

```java
int result1 = add(1, 2);
double result2 = add(3.14, 2.72);
```

오버로딩을 사용하면, 같은 기능을 수행하는 메소드를 간결하게 정의할 수 있습니다. 하지만, 오버로딩을 남발하여 코드가 복잡해지거나 가독성이 떨어지는 상황을 피해야 합니다.

</aside>

### 생성자(constructor)

  생성자는 객체를 생성할 때 호출되는 메소드입니다. 생성자를 이용하여, 객체를 초기화할 수 있습니다.

  생성자는 다음과 같이 정의됩니다.

    ```java
    class MyClass {
        public MyClass() {
            // 생성자 코드
        }
    }
    ```

  생성자는 메소드와 마찬가지로, 접근 제한자와 인자를 가질 수 있습니다. 인자를 가지는 생성자를 정의할 때에는, 다음과 같이 인자를 활용하여 객체를 초기화할 수 있습니다.

    ```java
    public class MyClass {
        private int value;
    
        public MyClass(int value) {
            this.value = value;
        }
    }
    ```

  이처럼, 생성자를 이용하여 객체를 초기화할 수 있습니다. 생성자를 정의할 때에는, 객체를 초기화하는 데 필요한 코드를 작성해야 합니다.

  ⬇️ 생성자 규칙 ⬇️

  - 모든 클래스에는 반드시 하나 이상의 생성자가 있어야합니다.
  - 생성자의 이름은 클래스의 이름과 같아야 합니다. 이러한 규칙은 생성자를 호출할 때 일관성 있게 사용할 수 있도록 도와줍니다.
  - 생성자는 반환형이 없습니다. 생성자는 객체를 초기화하는 데 사용되며, 객체를 반환하는 것이 아니기 때문에 반환형이 필요하지 않습니다.
  - 생성자는 매개변수를 가질 수 있습니다. 이를 통해 객체를 초기화할 때 필요한 정보를 전달할 수 있습니다.
  - 생성자는 다양한 타입과 개수의 매개변수를 통해 오버로딩이 가능합니다. 이를 통해 여러 가지 방법으로 객체를 초기화할 수 있습니다.
- this()

  `this`는 특정 객체를 참조하는 키워드입니다. `this()`는 생성자 내에서 다른 생성자를 호출하기 위해 사용됩니다.

  예를 들어, 다음과 같이 `Person` 클래스를 구현한다고 생각해봅시다.

    ```java
    public class Person {
        private String name;
        private int age;
    
        public Person() {
            this("Unknown", 0);
        }
    
        public Person(String name) {
            this(name, 0);
        }
    
        public Person(int age) {
            this("Unknown", age);
        }
    
        public Person(String name, int age) {
            this.name = name;
            this.age = age;
        }
    }
    ```

  이처럼, `Person` 클래스는 이름과 나이를 가지는 객체를 생성하는 데 사용됩니다. `Person` 클래스는 다양한 방법으로 객체를 생성할 수 있도록, 다음과 같이 오버로딩된 생성자를 포함합니다.

  - `Person()`: 이름과 나이가 모두 `Unknown`으로 초기화되는 객체를 생성합니다.
  - `Person(String name)`: 주어진 이름과 나이가 `0`으로 초기화되는 객체를 생성합니다.
  - `Person(int age)`: 이름이 `Unknown`으로 초기화되고, 주어진 나이로 초기화되는 객체를 생성합니다.
  - `Person(String name, int age)`: 주어진 이름과 나이로 초기화되는 객체를 생성합니다.

  이러한 생성자를 구현할 때, `this()`를 사용하여 다른 생성자를 호출할 수 있습니다. `this()`를 사용하여 다른 생성자를 호출하면, 해당 생성자의 코드가 먼저 실행됩니다. 따라서, `this()`는 생성자 코드의 중복을 피하고, 생성자를 간결하게 구현하는 데 유용합니다.

### this

  `this`는 자바에서 특정 객체를 참조하는 키워드입니다.

  `this` 키워드는 메소드 내에서 현재 객체를 참조하거나, 인스턴스 변수와 메소드를 구분하기 위해 사용됩니다.

  예를 들어, 다음과 같이 `Person` 클래스를 구현한다고 생각해봅시다.

    ```java
    public class Person {
        private String name;
        private int age;
    
        public Person(String name, int age) {
            this.name = name;
            this.age = age;
        }
    
        public String getName() {
            return this.name;
        }
    
        public int getAge() {
            return this.age;
        }
    }
    ```

  이처럼, `Person` 클래스에서는 `this`를 이용하여 인스턴스 변수 `name`과 `age`를 참조합니다. 이를 통해, 인스턴스 변수와 메소드를 구분하여 코드를 작성할 수 있습니다.

  `this` 키워드는 주로 다음과 같은 상황에서 사용됩니다.

  - 메소드 내에서 현재 객체를 참조할 때
  - 생성자에서 다른 생성자를 호출할 때
  - 인스턴스 변수와 로컬 변수의 이름이 같을 때