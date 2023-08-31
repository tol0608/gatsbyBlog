---
date: '2023-06-14'
title: '프로그래밍 기초 13'
categories: [ '개발', '프로그래밍 기초', 'JAVA', '객체지향' ]
summary: '다형성'
thumbnail: '../thum/programing.png'
---

### 다형성(plymorphism)

  다형성은 객체지향 프로그래밍에서 중요한 개념 중 하나입니다.

  다형성은 상속 관계에 있는 클래스들 간에 서로 호환 가능한 것을 말합니다. 즉, 부모 클래스의 인스턴스가 자식 클래스의 인스턴스로 취급될 수 있는 것입니다.

  따라서, 부모 클래스의 레퍼런스는 자식 클래스의 인스턴스를 가리킬 수 있습니다. 이를 업캐스팅이라고도 부릅니다.

  하지만, 자식 클래스의 레퍼런스는 부모 클래스의 인스턴스를 가리킬 수 없습니다. 이를 다운캐스팅이라고 부릅니다.

    ```java
    // 다형성 예제 1
    public static void main(String[] args) {
    		Car [] cars = new Car[3];
    		cars[0] = new Car();
    		cars[1] = new FireEngine();
    		cars[2] = new Ambulance();
    
    		for(Car myCar : cars){
    			myCar.drive();
    		}
    	}
    ```

    ```java
    // 다형성 예제2
    void driveCar(Car myCar) {
    		myCar.drive();
    	}
    
    	public static void main(String[] args) {
    		Ex13 ex13 = new Ex13();
    
    		Car myCar = new Car();
    		FireEngine fire = new FireEngine();
    		Ambulance ambulance = new Ambulance();
    
    		ex13.driveCar(myCar);
    		ex13.driveCar(fire);
    		ex13.driveCar(ambulance);
    	}
    ```

    ```java
    // 다형성 예제3
    public static void main(String[] args) {
    		Car myCar = new FireEngine();
    
    		myCar.drive();
    		myCar.stop();
    //		myCar.water();
    
    		FireEngine fire = (FireEngine) myCar;
    		fire.water();
    	}
    ```

    ```java
    Car myCar = new Car();
    FireEngine fire = (FireEngine) myCar(); // == ❌
    
    Car myCar = new FireEngine();
    FireEngine fire = (FireEngine) myCar; // == ⭕️
    ```

  위 코드는 자바에서의 다운캐스팅 예제입니다.

  다운캐스팅은 부모 클래스의 레퍼런스를 자식 클래스의 레퍼런스로 변환하는 것을 말합니다.

  그러나 부모 클래스의 인스턴스를 자식 클래스의 레퍼런스로 변환하는 것은 불가능합니다. 이는 부모 클래스와 자식 클래스의 관계로 설명됩니다.

  따라서, 첫 번째 줄의 코드에서는 `myCar` 변수가 `Car` 인스턴스를 참조하고 있으므로, `FireEngine` 클래스의 레퍼런스로 다운캐스팅하는 것은 불가능합니다. 따라서, `FireEngine fire = (FireEngine) myCar();` 는 컴파일 에러가 발생합니다.

  두 번째 줄의 코드에서는 `myCar` 변수가 `FireEngine` 인스턴스를 참조하고 있으므로, `FireEngine` 클래스의 레퍼런스로 다운캐스팅이 가능합니다. 따라서, `FireEngine fire = (FireEngine) myCar;` 는 정상적으로 동작합니다.

### instanceof 연산자

  `instanceof` 연산자는 객체가 특정 클래스의 인스턴스인지 여부를 확인하는 데 사용됩니다. 이 연산자를 사용하면, 부모 클래스의 레퍼런스가 가리키는 객체가 어떤 자식 클래스의 인스턴스인지 확인할 수 있습니다.

    ```java
    Car myCar = new FireEngine();
    
    if(myCar instanceof FireEngine) {
    	System.out.println("This is a FireEngine.");
    }
    ```

  위 코드에서 `instanceof` 연산자를 사용하여 `myCar` 객체가 `FireEngine` 클래스의 인스턴스인지 확인하고 있습니다. 따라서, 해당 코드는 "This is a FireEngine." 문장을 출력합니다. 만약 `myCar` 객체가 `Ambulance` 클래스의 인스턴스였다면, 해당 코드는 아무런 출력도 하지 않았을 것입니다.

### 추상클래스(abstract class)

  추상 클래스는 일반적으로 하위 클래스에서 구현해야 하는 메서드를 정의하는 데 사용됩니다. 추상 클래스는 일반 클래스와 달리 인스턴스화할 수 없으며, 하위 클래스에서 상속받아 구현해야 합니다. 추상 클래스는 `abstract` 키워드를 사용하여 정의됩니다. 추상 클래스를 생성하려면, 클래스의 하나 이상의 메서드를 추상 메서드로 선언해야 합니다. 추상 메서드는 메서드 본문이 없으며, 하위 클래스에서 구현되어야 합니다.

    ```java
    public abstract class Shape {
       public abstract void draw();
    }
    ```

  위 코드에서 `Shape` 클래스는 추상 클래스입니다. `Shape` 클래스는 `draw` 메서드를 추상 메서드로 선언하여, `Shape` 클래스를 상속하는 하위 클래스에서 `draw` 메서드를 구현하도록 요구합니다.

    ```java
    public class Circle extends Shape {
       private int x, y, radius;
    
       public void draw() {
          // draw circle
       }
    }
    ```

  위 코드에서 `Circle` 클래스는 `Shape` 클래스를 상속하며, `draw` 메서드를 구현합니다. `Circle` 클래스는 `Shape` 클래스에서 상속받은 `draw` 메서드를 구현함으로써, `Shape` 클래스의 인스턴스를 생성할 수 있습니다.

### 추상메서드(abstract method)

  추상 메서드는 메서드의 구현을 하위 클래스에서 수행하도록 요구하는 것입니다. 추상 메서드는 선언만 하고, 구현은 하지 않습니다. 추상 메서드를 선언하는 방법은 다음과 같습니다.

    ```java
    public abstract void methodName();
    ```

  추상 메서드를 선언하려면, 메서드 이름 옆에 `abstract` 키워드를 추가하고, 메서드 본문을 작성하지 않아야 합니다. 추상 메서드가 포함된 클래스는 추상 클래스여야 하며, 추상 클래스는 인스턴스화할 수 없습니다.

    ```java
    public abstract class AbstractClass {
    	public abstract void abstractMethod();
    }
    ```

  위 코드에서 `AbstractClass` 클래스는 추상 클래스입니다. `AbstractClass` 클래스에는 추상 메서드인 `abstractMethod` 메서드가 선언되어 있습니다. 이 클래스를 상속받는 하위 클래스에서는 `abstractMethod` 메서드를 구현해야 합니다. 추상 메서드를 구현하려면 `override` 키워드를 사용하여 메서드를 오버라이드해야 합니다.

    ```java
    public class ConcreteClass extends AbstractClass {
    	@Override
    	public void abstractMethod() {
    		// 추상 메서드 구현
    	}
    }
    ```

  위 코드에서 `ConcreteClass` 클래스는 `AbstractClass` 클래스를 상속받고, `abstractMethod` 메서드를 구현하고 있습니다. 이 클래스는 `AbstractClass` 클래스의 추상 메서드를 구현했기 때문에, 이 클래스의 인스턴스를 생성할 수 있습니다.