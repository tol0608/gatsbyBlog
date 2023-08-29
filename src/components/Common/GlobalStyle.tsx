import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'

const defaultStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Gasoek+One&family=Lilita+One&family=Noto+Sans+KR:wght@100;200;300;400;500;600;700;800;900&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Do Hyeon', 'Noto Sans KR', serif;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }

  a {
    color: inherit;
  }

  a,
  a:hover {
    text-decoration: none;
    cursor: pointer;
  }
`

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle
