import React, { useState, useEffect } from 'react'

import '../styles/themeMode.css'

function TopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // 스크롤 이벤트 핸들러
    function handleScroll() {
      const scrollPosition = window.scrollY
      setIsVisible(scrollPosition > 500)
    }

    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll)

    // 컴포넌트가 마운트 되었을 때 초기 스크롤 위치에 따라 버튼 보이기/숨기기 설정
    handleScroll()

    // 컴포넌트 언마운트 시 스크롤 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // 스타일 객체를 생성하는 함수
  const buttonStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '110px',
    right: '25px',
    border: 'none',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    fontSize: '24px',
    cursor: 'pointer',
    display: isVisible ? 'block' : 'none', // isVisible 상태에 따라 동적으로 설정
  }

  return (
    <button
      style={buttonStyle}
      className="tBtn"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      👆
    </button>
  )
}

export default TopButton
