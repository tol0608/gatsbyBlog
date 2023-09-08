---
date: '2023-09-08'
title: 'Gatsby 블로그에 darkmode 구현'
categories: ['블로그']
summary: '테마토글, 이른바 다크모드 구현'
thumbnail: '../thum/typescript.jpeg'
---

# Dark Mode

몇 년 전부터 다양한 앱, 웹 그리고 하드웨어에서 다크모드를 지원하기 시작했습니다. 현재는 다크모드가 안되는 페이지가 잘 보이지 않을 정도로 흔해졌습니다. 그래서 저도 블로그에 다크모드를 적용해보기로 생각했습니다.

작업을 시작하기전에 다양한 다른 개발자들의 개발 블로그를 살펴보는데 같은 Gatsby를 사용하더라도 다크모드를 적용한 방식에는 차이가 있었습니다.

다크모드를 구현하면서 정말 많은 글들을 참고했지만, 오히려 너무 많은 글을 읽은 탓인지 참고한 블로그들을 마크업 해두지 않아서 막상 이렇게 포스트로 정리해두려하니 어려움이 있습니다.

저는 어떻게 다크모드를 구현을 했는지 살펴보겠습니다.

### 1. ThemeToggle React 컴포넌트

```tsx
import React from 'react'

type ThemeToggleProps = {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  const themeClassName = theme === 'light' ? 'light-mode' : 'dark-mode'

  return (
    <button
      onClick={toggleTheme}
      className={`themeToggle ${themeClassName}`}
    >
      {theme === 'light' ? '다크모드' : '라이트모드'}
    </button>
  )
}

export default ThemeToggle
```

**라이트 모드**와 **다크 모드** 간의 테마 전환을 처리하는 React 컴포넌트를 구현하였습니다. 코드를 간단하게 리뷰해보면,

1. `type ThemeToggleProps = {}` Typescript를 사용하여 ThemeToggle 컴포넌트의 prop 타입을 정의 했습니다. 테마는 light 또는 dark 문자열 중 하나고 `toggleTheme` 는 함수입니다.
2. `const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {}` ThemeToggle 컴포넌트를 선언하고 위의 props를 받아와서 사용합니다.
3. theme의 prop 값에 따라 css 클래스 이름을 선택합니다.
4. 버튼을 클릭할때마다 **다크모드** 혹은 **라이트모드** 로 텍스트가 전환됩니다.

테마 전환을 처리하는 컴포넌트는 비교적 간단하게 구현이 완료되었습니다. 위 컴포넌트를 이제 실제 테마를 적용할 수 있는 커스텀 훅과 함께 살펴보겠습니다.

### 2. ThemeToggle 커스텀 훅

```tsx
import { useState, useEffect } from 'react'

type Theme = 'light' | 'dark'

const useThemeToggle = (): { theme: Theme; toggleTheme: () => void } => {
  const [theme, setTheme] = useState<Theme>('light')

  const toggleTheme = () => {
    const newTheme: Theme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null
    if (savedTheme) {
      setTheme(savedTheme)
    }

    document.body.className = `theme-${theme}`
  }, [theme])

  return { theme, toggleTheme }
}

export default useThemeToggle
```

처음에는 사용자 하드웨어 설정에 맞게 다크모드 혹은 라이트모드를 적용하고, 토글 버튼으로 전환 까지 가능한 방식으로 구현하고 싶었지만 아직은 연구가 더 필요할것같습니다.

이번에는 **로컬 스토리지**를 활용하여 사용자가 선택한 테마를 기억하고 적용하는 기능을 위주로 구현해봤습니다.

1. useState, useEffect 훅을 가져옵니다. useState를 통해 초기 테마 상태를 **light** 로 설정했고 useEffect를 통해 theme 변수가 변경 될때마다 document.body의 클래스를 변경하여 테마 스타일을 변경 적용 합니다.
2. `const toggleTheme = () ⇒ {}` 를 통해 테마를 토글하고, 변경된 테마를 로컬 스토리지에 저장합니다.
3. `return {theme, toggleThme}` 커스텀 훅의 반환 값으로 현제 테마와 테마 변경 함수를 객체 형태로 반환하게 됩니다.

위의 ThemeToggle 컴포넌트에서 커스텀 훅을 호출하여 테마 전환 기능을 사용하는 간단한 방식으로 구현이 되었습니다.

### 3. 토글 버튼 스타일링

```tsx
import React from 'react'

type ThemeToggleProps = {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  const themeClassName = theme === 'light' ? 'light-mode' : 'dark-mode'

  const buttonStyle: React.CSSProperties = {
    width: '50px',
    height: '50px',
    position: 'fixed',
    border: 'none',
    borderRadius: '50%',
    bottom: '20px',
    right: '0',
    transform: 'translate(-50%, -50%)',
    color: theme === 'light' ? 'white' : 'black',
    backgroundColor: theme === 'light' ? 'black' : 'white',
  }

  return (
    <button
      onClick={toggleTheme}
      style={buttonStyle}
      className={`themeToggle ${themeClassName}`}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}

export default ThemeToggle
```

`const buttonStyle: React.CSSProperties = {}` 를 이용하여 테마 전환 버튼을 스타일링 했습니다. 이 또한 CSS 파일로 따로 뺄 수 있었겠지만, 다른 기능에서 또한 스타일 객체를 함수로 생성 했기에 통일했습니다. 추후에 리팩토링시에 수정될 수 있습니다.

이렇게 테마를 전환하는 버튼과 커스텀 훅을 통해 **다이나믹 테마** 를 구현하였습니다. 시작하기전 다양한 블로그를 참고할때만 하더라도 너무 포스트들에서 얻을 수 있는 정보가 달라서 걱정했던것과 달리 생각보다 구현이 간단하게 되서 뜻밖이었습니다. 다만 현재 블로그에 적용되어있는 댓글 플러그인에는 테마변경이 적용되지 않습니다. 이 부분은 조금 더 연구하여 적용이 필요하다는 생각이 들었습니다.

조금씩 타입스크립트에도 익숙해지고 있고, 컴포넌트를 생성하는 것에도 자연스러워지고 있습니다. 앞으로도 많은 고민을 하고 다양한 기능 구현을 시도해보겠습니다.