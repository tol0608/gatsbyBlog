import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostItem from 'components/Main/PostItem'

const POST_ITEM_DATA = {
  title: 'Post Item Title',
  date: '2023.08.27.',
  categories: ['Web', 'Frontend', 'Testing'],
  summary:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat doloremque fugit quis rem temporibus! Maxime molestias, suntrem debitis odit harum impedit. Modi cupiditate harum dignissimos eos in corrupti!',
  thumbnail:
    'https://media.istockphoto.com/id/1371081916/ko/%EC%82%AC%EC%A7%84/%EC%9D%8C%EC%84%B1-%EA%B1%B0%ED%92%88%EB%82%98%EB%AC%B4-%ED%81%90%EB%B8%8C%EC%97%90-%EB%8C%80%ED%95%9C-%EB%82%B4%EC%9A%A9-%ED%91%9C%ED%98%84.webp?b=1&s=612x612&w=0&k=20&c=dtZmH6u1k1Y6A-M9jqYqXIwn_5ZLwZTo2WgU_seU930=',
  link: '<https://www.google.co.kr/>',
}

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`

const PostList: FunctionComponent = function () {
  return (
    <PostListWrapper>
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
    </PostListWrapper>
  )
}

export default PostList
