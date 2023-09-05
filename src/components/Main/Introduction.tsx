import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import ProfileImage from 'components/Main/ProfileImage'

import '../../styles/themeMode.css'

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Background = styled.div`
  width: 100%;
  color: #ffffff;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 768px;
  height: 400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding: 0 20px;
  }
`

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  font-family: 'Do Hyeon', sans-serif;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const Title = styled.div`
  margin-top: 5px;
  font-size: 35px;
  font-weight: 700;
  font-family: 'Lilita One', 'Do Hyeon', 'Noto Sans KR', cursive;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`

const AboutMe = styled.a`
  display: inline-block;
  background: #515373;
  color: #ffffff;
  margin-top: 15px;
  padding: 5px 10px;
  font-weight: 500;
  border-radius: 5px;
  transform-origin: center;
  animation: vibration 1.2s infinite;

  @keyframes vibration {
    0% {
      transform: rotate(0deg);
    }
    40% {
      transform: rotate(5deg);
    }
    60% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`

const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage,
}) {
  return (
    <Background className="introBackground">
      <Wrapper>
        <ProfileImage profileImage={profileImage} />

        <div>
          <SubTitle>오늘도 앞으로</SubTitle>
          <Title>저는 Junior Frontend Developer 이재현 입니다.</Title>
        </div>
        <AboutMe
          href="https://tol0608.github.io/helloworld"
          className="aboutMe"
          target="_blank"
        >
          About Me 👋
        </AboutMe>
      </Wrapper>
    </Background>
  )
}

export default Introduction
