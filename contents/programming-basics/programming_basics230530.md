---
date: '2023-05-30'
title: '프로그래밍 기초 4'
categories: ['JAVA']
summary: '반복문'
thumbnail: '../thum/programing.png'
---

### 반복문

  Java에는 크게 4가지 종류의 반복문이 있습니다.

  - for문

    for문은 주어진 조건이 true인 경우 반복문 안에서 코드 블록을 실행합니다. 반복문이 실행될 때마다, 조건식이 다시 평가되고, 조건식이 false가 될 때까지 계속 반복됩니다.

      ```java
      for (조건식;조건식;증감식) {
          // 조건식이 true인 경우 수행될 문장들을 적습니다
      }
      
      // EX
      for (int i = 0; i < 10; i++) {
          System.out.println(i);
      }
      ```

  - while문

    while문은 주어진 조건이 true인 경우, 코드 블록을 반복적으로 실행합니다. 조건식을 먼저 평가하고, 그 값이 true인 경우 코드 블록을 실행합니다.

      ```java
      while (조건식) {
          // 조건식이 true인 경우 수행될 문장들을 적습니다
      }
      
      // EX
      int i = 0;
      while (i < 10) {
          System.out.println(i);
          i++;
      }
      ```

    while문을 사용할 때에는 미지수가 바뀌는 조건을 명확히 제시해야 합니다. (예: i++ 등)

  - do-while문

    do-while문은 while문과 매우 유사하지만, 코드 블록을 한 번 실행하고 나서 비로소 조건식을 평가합니다. 이것은 코드 블록이 최소한 한 번은 반복되도록 보장합니다.

      ```java
      do {
          // 조건식이 true인 경우 수행될 문장들을 적습니다
      } while (조건식);
      
      // EX
      int i = 0;
      do {
          System.out.println(i);
          i++;
      } while (i < 10);
      ```

    do-while문 역시 미지수가 바뀌는 조건을 명확히 제시해야 합니다. (예: i++ 등)

    while(조건식); ← 세미콜론을 잊으면 안됩니다.


    <aside>
    👌 while문과 do-while문 중 어떤 것을 사용할지는 상황에 따라 다릅니다. 만약 반복문이 한 번 이상 실행되어야 할 때는 do-while문을 사용하면 됩니다. 그러나 반복문이 실행되지 않을 수도 있고, 반복 횟수를 미리 알고 있을 때는 while문을 사용하는 것이 좋습니다.
    
    </aside>