import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

// 자신이 원하는 프로필 이미지 링크로 설정해주세요.
const PROFILE_IMAGE_LINK =
  'https://camo.githubusercontent.com/4b9a2d6348a0d6eb3776292fb2834afb0709579baf28cd7b60baebce12a79dda/68747470733a2f2f746f6c303630382e6769746875622e696f2f7374617469632f62633534656363383037386263396336643837643564623939366433303865652f65633737622f6c6a685f70686f746f2e61766966'

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`

const ProfileImage: FunctionComponent = function () {
  return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />
}

export default ProfileImage
