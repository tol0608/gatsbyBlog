---
date: '2023-06-07'
title: '프로그래밍 기초 8'
categories: ['JAVA']
summary: '인스턴스, 인헨스드 for문'
thumbnail: '../thum/programing.png'
---

### 인스턴스 생성 및 사용

  ### 클래스 정의

  클래스는 객체를 만들기 위한 청사진(blueprint)입니다. 클래스를 정의함으로써, 객체를 생성하기 전에 미리 어떤 속성과 메소드를 가지게 될지를 결정할 수 있습니다.

    ```java
    public class Car {
        private String brand;
        private String model;
        private String color;
    
        public Car(String brand, String model, String color) {
            this.brand = brand;
            this.model = model;
            this.color = color;
        }
    
        public void startEngine() {
            System.out.println("Engine started.");
        }
    
        public void stopEngine() {
            System.out.println("Engine stopped.");
        }
    }
    ```

  위의 예시에서 `Car` 클래스는 `brand`, `model`, `color` 속성과 `start_engine()`, `stop_engine()` 메소드를 가집니다.

  ### 인스턴스 생성

  클래스를 정의하고 나면, 이제 객체를 만들어 볼 차례입니다. 클래스를 기반으로 한 객체를 생성하는 것을 **인스턴스화**라고 합니다. `Car` 클래스를 기반으로 하는 인스턴스를 생성하기 위해서는 다음과 같은 코드를 작성합니다.

    ```java
    Car my_car = new Car("Tesla", "Model S", "White");
    ```

  위의 코드에서 `my_car`는 `Car` 클래스의 인스턴스입니다. `Tesla`, `Model S`, `White`는 각각 `brand`, `model`, `color` 속성의 값으로 설정됩니다.

  ### 래퍼런스를 이용한 인스턴스 사용

  인스턴스를 생성한 후에는, 그 인스턴스를 이용하여 메소드를 호출하거나 속성에 접근할 수 있습니다. 객체를 참조하는 변수를 **래퍼런스**라고 합니다.

  예시:

    ```java
    my_car.startEngine();  // Engine started.
    System.out.println(my_car.getColor());  // White
    ```

  위의 코드에서, `my_car`는 `Car` 클래스의 인스턴스를 참조하는 래퍼런스입니다. `start_engine()` 메소드와 `color` 속성에 각각 접근하여 결과를 출력하고 있습니다.

- 인헨스드 **for 문**

  `for` 반복문을 이용하여 배열의 모든 요소를 반복하거나 컬렉션의 모든 요소를 반복할 수 있습니다. 이때 `for` 반복문에서 `:` 뒤에 배열 또는 컬렉션을 지정하면, 반복할 때마다 배열 또는 컬렉션의 요소를 차례대로 하나씩 꺼내서 변수에 할당합니다. 이렇게 변수에 할당된 요소를 이용하여 반복문 내부에서 원하는 작업을 수행할 수 있습니다.

    ```java
    int[] arr = {1, 2, 3, 4, 5};
    for (int num : arr) {
        System.out.println(num);
    }
    ```

  위의 코드에서는, 정수형 배열 `arr`의 모든 요소를 반복하면서, `num`이라는 이름의 변수에 하나씩 할당하고, 그 값을 출력하고 있습니다. 이러한 형태의 반복문을 **인헨스드 for 문**이라고 부릅니다.

    ```java
    for (int num : lotto) {
    			System.out.print(num + " ");
    		}
    ```

  위 코드는 `lotto`라는 이름의 정수형 배열을 반복문을 이용하여 출력하는 코드입니다. `for` 반복문에서 `: (콜론)` 뒤에 `lotto` 배열을 선언하여, `num`이라는 이름의 변수에 `lotto` 배열의 각 요소가 할당됩니다. `for` 반복문의 중괄호 안에서는 `num` 변수를 출력하고, 뒤에 공백 하나를 추가하여 출력합니다.

  즉, `for` 반복문은 `lotto` 배열의 크기만큼 반복되며, 각 반복마다 `num` 변수에 `lotto` 배열의 요소가 할당됩니다. 이후 `num` 변수를 출력하고, 반복문을 빠져나와서 출력 결과는 `lotto` 배열에 저장된 모든 요소를 공백으로 구분하여 출력합니다.

- Class 변수

    <aside>
    👉 객체의 속성을 클래스 변수로 정의할 수 있습니다. 클래스 변수는 어떤 인스턴스에서도 공유될 수 있는 변수입니다.

  클래스 변수는 `static` 키워드를 사용하여 정의합니다. 클래스 변수를 사용하려면 클래스 이름과 함께 접근해야 합니다.

    ```
    public class Rectangle {
        private int width;
        private int height;
    
        public Rectangle(int width, int height) {
            this.width = width;
            this.height = height;
        }
    
        public int getWidth() {
            return width;
        }
    
        public int getHeight() {
            return height;
        }
    
        public int getArea() {
            return width * height;
        }
    }
    
    ```

  `Rectangle` 클래스는 `width`와 `height` 속성, 이러한 속성을 초기화하기 위한 생성자 및 사각형의 `width`, `height`, `area`를 가져오기 위한 세 가지 메소드가 있습니다.

  클래스 변수에 접근하려면 클래스 이름을 이용하면 됩니다.

    ```java
    System.out.println(Car.getCount());
    ```

  위의 코드에서 `getCount()` 메소드는 `count` 클래스 변수를 반환합니다. 이 메소드를 호출할 때는 `Car` 클래스 이름을 이용하여 호출합니다.

    </aside>

- Stack

  FILO는 **First In Last Out**의 약자로, 먼저 들어간 데이터가 나중에 나오는 자료구조입니다. 이 구조는 데이터를 스택(Stack)이나 큐(Queue)와 같은 자료구조에서 사용할 수 있습니다. FILO 구조는 스택에서 사용됩니다. 스택은 데이터를 쌓아올리는 구조로, 가장 마지막에 들어온 데이터가 가장 먼저 나가게 됩니다. 이러한 특성은 함수의 호출 스택, 브라우저의 방문 기록 등 여러 곳에서 사용됩니다.

    ```java
    import java.util.Stack;
    
    public class Main {
        public static void main(String[] args) {
            Stack<String> stack = new Stack<String>();
    
            stack.push("apple");
            stack.push("banana");
            stack.push("cherry");
    
            System.out.println(stack.pop());  // cherry
            System.out.println(stack.pop());  // banana
            System.out.println(stack.pop());  // apple
        }
    }
    ```

  위의 코드에서 `Stack` 클래스를 이용하여 스택을 생성하고, `push()` 메소드를 이용하여 `apple`, `banana`, `cherry` 세 가지 데이터를 스택에 추가하고 있습니다. 그 다음 `pop()` 메소드를 이용하여 가장 마지막에 추가된 값부터 차례대로 꺼내고 있습니다. 따라서 출력 결과는 `cherry`, `banana`, `apple`이 됩니다.

- 메서드

  클래스는 객체를 만들기 위한 청사진(blueprint)입니다. 클래스를 정의함으로써, 객체를 생성하기 전에 미리 어떤 속성과 메소드를 가지게 될지를 결정할 수 있습니다.

  메서드는 클래스가 가지고 있는 기능이나 동작을 의미합니다. 즉, 객체가 할 수 있는 일입니다. 메서드는 클래스 내부에 정의되며, 클래스의 속성을 이용하여 작동합니다.

    ```java
    public class Car {
        private String brand;
        private String model;
        private String color;
    
        public Car(String brand, String model, String color) {
            this.brand = brand;
            this.model = model;
            this.color = color;
        }
    
        public void startEngine() {
            System.out.println("Engine started.");
        }
    
        public void stopEngine() {
            System.out.println("Engine stopped.");
        }
    }
    
    ```

  위의 예시에서 `Car` 클래스는 `brand`, `model`, `color` 속성과 `start_engine()`, `stop_engine()` 메소드를 가집니다.

  객체를 생성한 후, 메서드를 호출하려면 다음과 같은 코드를 작성합니다.

    ```java
    my_car.startEngine();  // Engine started.
    ```

  `startEngine()` 메소드는 `my_car` 객체가 가지고 있는 기능 중 하나입니다. 이 메소드를 호출하면 엔진이 시작됩니다.

  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6c8f7204-7dc9-40da-8df6-bd33c388781c/Untitled.png)

    <aside>
    ➕ **Argument**와 **Parameter**는 프로그래밍에서 자주 사용되는 용어입니다. 이 두 용어는 서로 비슷한 의미를 가지고 있지만, 약간의 차이가 있습니다.

  **Parameter**는 함수나 메소드의 선언부에 있는 변수를 의미합니다. 함수나 메소드를 호출할 때, 이 변수에 값을 전달해주어야 합니다. 예를 들어, 다음과 같은 함수가 있다면:

    ```java
    public void printName(String name) {
        System.out.println(name);
    }
    ```

  위의 코드에서 `name`은 함수의 **Parameter**입니다. 이 함수를 호출할 때, `printName("John")`과 같이 값을 전달해주어야 합니다.

  **Argument**는 함수나 메소드를 호출할 때 전달하는 값입니다. 예를 들어, 다음과 같은 함수가 있다면:

    ```java
    public void printName(String name) {
        System.out.println(name);
    }
    ```

  위의 코드에서 `"John"`은 함수의 **Argument**입니다. 이 함수를 호출할 때, `printName("John")`과 같이 값을 전달해줍니다.

  따라서, Parameter는 함수나 메소드의 선언부에서 정의되는 변수이고, Argument는 함수나 메소드를 호출할 때 전달되는 값입니다.

    </aside>

- Return 문

  `return` 문은 메소드나 함수에서 값을 반환할 때 사용됩니다. `return` 문은 메소드나 함수를 호출한 곳으로 값을 반환하고, 메소드나 함수를 종료합니다.

    ```java
    public class Calculator {
        public int add(int num1, int num2) {
            int result = num1 + num2;
            return result;
        }
    }
    ```

  위의 코드에서 `add()` 메소드는 `num1`과 `num2` 변수를 더한 결과를 `result` 변수에 저장한 후, `return` 문을 이용하여 `result` 값을 반환하고 있습니다. 따라서, `add(2, 3)`을 호출하면 `5`가 반환됩니다.

  `return` 문은 값을 반환하는 것뿐만 아니라, 메소드나 함수를 종료하기 위해 사용됩니다. 예를 들어, 다음과 같은 코드가 있다면:

    ```java
    public void printNumbers(int count) {
        for (int i = 0; i < count; i++) {
            System.out.println(i);
            if (i == 5) {
                return;
            }
        }
    }
    ```

  위의 코드에서 `printNumbers()` 메소드는 `count` 만큼 반복하면서, 0부터 `count`-1 까지의 숫자를 출력하고 있습니다. 그러나 `i == 5`일 때 `return` 문을 이용하여 메소드를 종료하고 있습니다. 따라서, `printNumbers(10)`을 호출하면 0부터 5까지의 숫자만 출력되고, 6부터 9까지의 숫자는 출력되지 않습니다.