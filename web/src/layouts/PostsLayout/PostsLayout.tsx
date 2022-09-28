import { Link, routes } from '@redwoodjs/router'

import { Button } from '@chakra-ui/react'
import { ArrowBackIcon, PlusSquareIcon } from '@chakra-ui/icons'

type PostLayoutProps = {
  children: React.ReactNode
}

const PostsLayout = ({ children }: PostLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.home()} className="rw-link">
            <Button
              variant="ghost"
              marginRight={10}
              colorScheme="teal"
              leftIcon={<ArrowBackIcon />}
            >
              Return Home
            </Button>
          </Link>
          <Link to={routes.posts()} className="rw-link">
            Posts
          </Link>
        </h1>
        <Link to={routes.newPost()}>
          <Button rightIcon={<PlusSquareIcon />} colorScheme="green">
            New Post
          </Button>
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default PostsLayout
