---
date: '2023-06-01'
title: '프로그래밍 기초 6'
categories: ['개발', '프로그래밍 기초', 'JAVA']
summary: '배열(Array)'
thumbnail: '../thum/programing.png'
---

### 배열(Array)

  배열은 동일한 데이터 타입을 가진 데이터들을 하나의 변수에 저장할 수 있는 자료구조입니다. 이러한 데이터들은 인덱스를 통해 구분됩니다. 인덱스는 0부터 시작하며, 각 요소마다 고유한 인덱스를 가지고 있습니다.

  배열은 프로그래밍에서 매우 중요한 역할을 합니다. 배열을 사용함으로써 데이터를 효율적으로 관리할 수 있으며, 반복문과 함께 사용하면 매우 강력한 기능을 제공합니다.

  예를 들어, 5명의 학생들의 점수를 저장해야 한다고 가정해 봅시다. 이 경우, 배열을 사용하면 간단하게 해결할 수 있습니다. 다음은 Java 언어로 작성된 코드 예시입니다.

    ```java
    int[] scores = new int[5]; // 5개의 정수를 저장할 수 있는 배열 선언
    scores[0] = 90; // 첫 번째 학생의 점수, 배열 요소
    scores[1] = 80; // 두 번째 학생의 점수
    scores[2] = 70; // 세 번째 학생의 점수
    scores[3] = 85; // 네 번째 학생의 점수
    scores[4] = 95; // 다섯 번째 학생의 점수
    
    int[] scores = new int[]{90, 80, 70, 85, 95};
    
    int[] scores; // 배열 선언
    scores = new [5]; // 배열 생성
    
    // [HEAP]에 저장
    ```

  위 코드에서는 5개의 정수를 저장할 수 있는 배열을 선언하고, 각 학생들의 점수를 인덱스를 통해 저장하고 있습니다. 이렇게 하면 각 학생들의 점수를 쉽게 관리할 수 있습니다.

    <aside>
    ➕ 자료구조는 데이터를 보다 효율적으로 저장하고 관리할 수 있는 방법을 제공하는 자료형입니다. 이는 컴퓨터 과학에서 매우 중요한 개념 중 하나이며, 다양한 종류의 자료구조가 존재합니다. 예를 들어, 배열, 스택, 큐, 연결 리스트, 트리, 그래프 등이 있습니다. 이러한 자료구조들은 각각 다른 방식으로 데이터를 저장하고 관리하며, 각각의 장단점이 있습니다.

    </aside>

    <aside>
    ➕ `length` 은 배열의 크기를 알려주는 속성입니다. 이 속성은 배열 객체에서 호출할 수 있으며, 해당 배열의 크기를 반환합니다. 예를 들어, `scores.length`는 위의 코드에서 5를 반환합니다.
    </aside>
<br>

| 자료형     | 기본값      |
|---------|----------|
| boolean | false    |
| char    | '\u0000' |
| byte    | 0        |
| short   | 0        |
| int     | 0        |
| long    | 0L       |
| float   | 0.0f     |
| double  | 0.0d     |
| 참조 자료형  | null     |

- 다차원 배열

    ```java
    int[][] scores = new int[3][5]; // 3개의 학급, 각 학급에 5명의 학생이 있음
    scores[0][0] = 90; // 첫 번째 학급의 첫 번째 학생의 점수, 배열 요소
    scores[0][1] = 80; // 첫 번째 학급의 두 번째 학생의 점수
    scores[0][2] = 70; // 첫 번째 학급의 세 번째 학생의 점수
    scores[0][3] = 85; // 첫 번째 학급의 네 번째 학생의 점수
    scores[0][4] = 95; // 첫 번째 학급의 다섯 번째 학생의 점수
    
    scores[1][0] = 70; // 두 번째 학급의 첫 번째 학생의 점수
    scores[1][1] = 60; // 두 번째 학급의 두 번째 학생의 점수
    scores[1][2] = 80; // 두 번째 학급의 세 번째 학생의 점수
    scores[1][3] = 75; // 두 번째 학급의 네 번째 학생의 점수
    scores[1][4] = 80; // 두 번째 학급의 다섯 번째 학생의 점수
    
    scores[2][0] = 80; // 세 번째 학급의 첫 번째 학생의 점수
    scores[2][1] = 90; // 세 번째 학급의 두 번째 학생의 점수
    scores[2][2] = 95; // 세 번째 학급의 세 번째 학생의 점수
    scores[2][3] = 70; // 세 번째 학급의 네 번째 학생의 점수
    scores[2][4] = 85; // 세 번째 학급의 다섯 번째 학생의 점수
    
    int[][] score = new int [5][3]; // 크기가 3인 1차원 배열을 5개 제작하라 
    ```

  위 코드에서는 3개의 학급이 있고, 각 학급에 5명의 학생이 있다고 가정하고, 각 학생들의 점수를 인덱스를 통해 저장하고 있습니다. 이렇게 하면 각 학급과 학생들의 점수를 쉽게 관리할 수 있습니다.

    <aside>
    ➕ 다차원 배열에서 마지막 차원배열만 값을 가짐

    </aside>

- 배열의 복사

  배열은 다른 변수와 마찬가지로 복사할 수 있습니다. 하지만, 배열을 복사하는 것은 일반적으로 다른 변수를 복사하는 것보다 복잡합니다. 이는 배열이 참조 타입이기 때문입니다.

  Java에서는 기본 배열을 복사하기 위해 `System.arraycopy` 메소드를 제공합니다. 이 메소드는 다음과 같은 구문을 가집니다.

    ```java
    System.arraycopy(originalArray, 0, newArray, 0, originalArray.length);
    ```

  위 코드에서 `originalArray`는 복사할 배열을 나타내며, `newArray`는 복사된 배열을 저장할 배열입니다. `originalArray`와 `newArray`가 모두 같은 데이터 타입이어야 합니다.

  `0`은 복사를 시작할 위치를 나타내며, `originalArray.length`는 복사할 요소 수를 나타냅니다.

    <aside>
    ➕ Java에서는 배열을 복사하기 위해 `clone` 메소드를 제공하기도 합니다. 이 메소드는 `Object` 클래스에서 상속받은 메소드이며, 배열을 복사하기 위해 사용할 수 있습니다. 다음은 `clone` 메소드를 사용한 예시 코드입니다.

    ```java
    int[] originalArray = {1, 2, 3, 4, 5};
    int[] newArray = originalArray.clone();
    ```

  위 코드에서 `originalArray`는 복사할 배열을 나타내며, `newArray`는 복사된 배열을 저장할 배열입니다. `clone` 메소드를 호출하면 `originalArray`의
  복사본이 `newArray`에 저장됩니다.

    </aside>

    <aside>
    ➕ Java에서는 2차원 배열을 복사하기 위해 `Arrays.copyOf` 메소드를 제공합니다. 이 메소드는 다음과 같은 구문을 가집니다.

    ```java
    int[][] newArray = Arrays.copyOf(originalArray, originalArray.length);
    ```

  위 코드에서 `originalArray`는 복사할 배열을 나타내며, `newArray`는 복사된 배열을 저장할 배열입니다. `originalArray`와 `newArray`가 모두 같은 데이터 타입이어야 합니다.
  또한, `newArray`의 크기는 `originalArray`와 동일해야 합니다.

    </aside>

    ```java
    int[] originalArray = {1, 2, 3, 4, 5};
    int[] newArray = new int[originalArray.length];
    
    for (int i = 0; i < originalArray.length; i++) {
        newArray[i] = originalArray[i];
    }
    ```

  위 코드는 `originalArray`를 `newArray`에 복사하는 예시입니다. `newArray`의 크기는 `originalArray`와 동일하며, 반복문을 사용하여 `originalArray`의 각
  요소를 `newArray`에 복사합니다.