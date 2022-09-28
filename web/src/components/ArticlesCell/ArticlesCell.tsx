import type { ArticlesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Article from 'src/components/Article/Article'
import SkeletonStack from 'src/components/Skeleteon/Stack'

export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
      id
      body
      title
      createdAt
    }
  }
`

export const Loading = SkeletonStack

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ articles }: CellSuccessProps<ArticlesQuery>) => {
  return (
    <ul>
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </ul>
  )
}
