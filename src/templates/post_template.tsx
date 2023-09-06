import React, { FunctionComponent, useEffect } from 'react'
import { graphql } from 'gatsby'
import { PostFrontmatterType } from 'types/PostItem.types'
import Template from 'components/Common/Template'
import PostHead from 'components/Post/PostHead'
import PostContent from 'components/Post/PostContent'
import CommentWidget from 'components/Post/CommentWidget'
import useThemeToggle from '../hooks/useThemeToggle'
import ThemeToggle from 'hooks/themeToggle'

import '../styles/toc.css'
import '../styles/themeMode.css'

type TableOfContentsProps = {
  toc: string[]
}
export const TableOfContents: FunctionComponent<TableOfContentsProps> = ({
  toc,
}) => {
  if (!toc || toc.length === 0) {
    return null
  }

  return (
    <div className="toc-container">
      <div className="toc" dangerouslySetInnerHTML={{ __html: toc }} />
    </div>
  )
}

type PostTemplateProps = {
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[]
    }
  }
  location: {
    href: string
  }
}

export type PostPageItemType = {
  node: {
    html: string
    frontmatter: PostFrontmatterType
    tableOfContents?: string[]
  }
}

const PostTemplate: FunctionComponent<PostTemplateProps> = function ({
  data: {
    allMarkdownRemark: { edges },
  },
  location: { href },
}) {
  const {
    node: {
      html,
      frontmatter: {
        title,
        summary,
        date,
        categories,
        thumbnail: {
          childImageSharp: { gatsbyImageData },
          publicURL,
        },
      },
      tableOfContents = [],
    },
  } = edges[0]

  const { theme, toggleTheme } = useThemeToggle()

  useEffect(() => {
    document.body.className = `theme-${theme}`
  }, [theme])

  return (
    <Template title={title} description={summary} url={href} image={publicURL}>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <PostHead
        title={title}
        date={date}
        categories={categories}
        thumbnail={gatsbyImageData}
      />
      <TableOfContents toc={tableOfContents} />
      <PostContent html={html} />
      <CommentWidget />
    </Template>
  )
}

export default PostTemplate

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          tableOfContents
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
              publicURL
            }
          }
        }
      }
    }
  }
`
