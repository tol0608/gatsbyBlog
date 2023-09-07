---
date: '2023-05-30'
title: '구구단'
categories: ['알고리즘']
summary: 'Java로 구현한 구구단'
thumbnail: '../thum/java.png'
---

```java
/*
 사용자에게 구구단의 단을 입력 받아 구구단 결과를 출력하는 코드를 작성하세요.
 - 실행 예
 구구단의 단을 입력하세요: 4
 [ 4단 ]
 4 * 1 =  4
 4 * 2 =  8
 4 * 3 = 12
 . . .
 */

import java.util.Scanner;

public class gugudan {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("구구단의 단을 입력해보삼요 : ");
        int gugu = sc.nextInt();
        sc.close();

        System.out.printf("[ " + gugu + "단" + " ]\n");

        for (int i = 1; i <= 9; i++) {
            System.out.printf("%d * %d = %2d\n", gugu, i, gugu * i); 
// %d는 정수 %2d는 자바에서 정수를 최소 2자리로 표시하는 데 사용되는 형식 지정자
        }

    }
}
```

```java
/*
    2단 부터 9단 까지의 전체 구구단을 출력하는 코드
 - 실행 예
 4 * 1 =  4
 4 * 2 =  8
 4 * 3 = 12
 . . .
 */

public class gugudan2 {
    public static void main(String[] args) {
        int gugu = 2, num = 1;

        for (int i = 0; i < 72 ; i++) {
            System.out.printf("%d * %d = %2d\n", gugu, num, gugu * num);
            num++;

            if(num == 10) {
                gugu++;
                num = 1;
            }
        }

    }
}
```

```java
/*
    2단 부터 9단 까지의 전체 구구단을 출력하는 코드
 - 실행 예
[ 4 단 ]
 4 * 1 =  4
 4 * 2 =  8
 4 * 3 = 12
 . . .
 */

public class gugudan3 {
	public static void main(String[] args) {
		int gugu = 2, num = 1;

		for (int i = 0; i < 72; i++) {
			if (num == 1) {
				System.out.printf("\n [ %d 단 ] \n", gugu);
			}

			System.out.printf("%d * %d = %2d\n", gugu, num, gugu * num);
			num++;

			if (num == 10) {
				gugu++;
				num = 1;
			}
		}
	}
}
```

```java
/*
    2단 부터 9단 까지의 전체 구구단을 출력하는 코드
 - 실행 예
 4 * 1 = 4
 4 * 2 = 8
 4 * 3 = 12
 . . .
 단, 중첩 for 반복문 사용
 */

public class gugudan4 {
	public static void main(String[] args) {

		for (int i = 2; i <= 9; i++) {
			for (int j = 1; j <= 9; j++) {
				System.out.printf("%d * %d = %2d\n", i, j, (i * j));
			}
		}

	}
}
```

```java
/*
    2단 부터 9단 까지의 전체 구구단을 출력하는 코드
 - 실행 예
[ 4 단 ]
 4 * 1 =  4
 4 * 2 =  8
 4 * 3 = 12
 . . .
 */

public class gugudan5 {
	public static void main(String[] args) {

		for (int i = 2; i <= 9; i++) {
			System.out.printf("\n [ %d 단 ]  \n", i);

			for (int j = 1; j <= 9; j++) {
				System.out.printf("%d * %d = %2d\n", i, j, (i * j));
			}
		}

	}
}
```

```java
/*
    2단 부터 9단 까지의 전체 구구단을 출력하는 코드
    가로로 출력하기
 - 실행 예
 4 * 1 =  4   5 * 1 = 5
 4 * 2 =  8   5 * 2 = 10
 4 * 3 = 12   5 * 3 = 15
 . . .
 단, 중첩 for 반복문 사용
 */

public class gugudan6 {
	public static void main(String[] args) {

		for (int i = 1; i <= 9; i++) {
			for (int j = 2; j <= 9; j++) {
				System.out.printf("%d * %d = %2d\t\t", j, i, (i * j));
			}
			System.out.printf("\n");
		}

	}
}
```

```java
/*
    2단 부터 9단 까지의 전체 구구단을 출력하는 코드
    가로로 출력하기
 - 실행 예
[ 4 단 ]      [ 5 단 ]
 4 * 1 =  4   5 * 1 = 5
 4 * 2 =  8   5 * 2 = 10
 4 * 3 = 12   5 * 3 = 15
 . . .
 단, 중첩 for 반복문 사용
 */

public class gugudan7 {
	public static void main(String[] args) {

		for (int i = 0; i <= 9; i++){
			for (int j = 2; j <= 9; j++) {
				if (i == 0) {
					System.out.printf("[ %d 단 ]\t\t\t", j);
				}
				else {
					System.out.printf("%d * %d = %2d\t\t", j, i, (i * j));
				}
			}
			System.out.println();
		}
	}
}
```

```java
public class gugudan8 {
	public static void main(String[] args) {
		int i = 0;
		while (i <= 9) {
			int j = 2;
			while (j <= 9) {
				if (i == 0) {
					System.out.printf("[ %d 단 ]\t\t\t", j);
				}
				else {
					System.out.printf("%d * %d = %2d\t\t", j, i, (i * j));
				}
				j++;
			}
			System.out.println();
			i++;
		}

//아래의 중첩 for 반복문을 중첩 while 반복문으로 바꿔보삼
//		for (int i = 0; i <= 9; i++){
//			for (int j = 2; j <= 9; j++) {
//				if (i == 0) {
//					System.out.printf("[ %d 단 ]\t\t\t", j);
//				}
//				else {
//					System.out.printf("%d * %d = %2d\t\t", j, i, (i * j));
//				}
//			}
//			System.out.println();
//		}
	}
}
```

```java
public class gugudan9 {
	public static void main(String[] args) {
		int i = 0;
		do {
			int j = 2;
			do {
				if (i == 0) {
					System.out.printf("[ %d 단 ]\t\t\t", j);
				} else {
					System.out.printf("%d * %d = %2d\t\t", j, i, (i * j));
				}
				j++;
			} while (j <= 9);
			System.out.println();
			i++;
		} while (i <= 9);
	}
}

//중첩 do-while 반복문으로 바꿔보삼
```
