---
date: '2023-05-24'
title: '윤년 계산 프로그램'
categories: ['개발', 'JAVA', '알고리즘']
summary: 'Java로 구현한 윤년 계산 프로그램'
thumbnail: '../thum/java.png'
---

```java
/*
[윤년 계산 프로그램]
사용자에게 년도를 입력 받아 윤년 여부를 판단하여 출력하는 코드를 작성하세요.

[실행 결과1]
년도를 입력하세요 : 2023
입력하신 년도는 평년입니다.

[실행 결과2]
년도를 입력하세요 : 2020
입력하신 년도는 윤년입니다.

[윤년 판단 알고리즘]
1. 4의 배수인 해는 윤년입니다.
2. 100의 배수인 해는 평년입니다.
3. 400의 배수인 해는 윤년입니다.
=> 2023 평년, 2020 윤년, 1900 평년, 2000 윤년
[코드 작성 조건]
1. if, else if, else 구문을 이용해서 해결
2. if, else 구문을 이용해서 해결
*/

import java.util.Scanner;

public class Exam {
    public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

        System.out.print("년도를 입력하삼요 : ");
        int year = sc.nextInt();
        sc.close();

        if (year % 4 == 0) {
            if (year % 100 == 0) {
                if (year % 400 == 0) {
                    System.out.println("입력하신 년도는 윤년인듯");
                } else {
                    System.out.println("입력하신 년도는 평년인듯");
                }
            } else {
                System.out.println("입력하신 년도는 윤년인듯");
            }
        } else {
            System.out.println("입력하신 년도는 평년인듯");
        }
	}
}
```