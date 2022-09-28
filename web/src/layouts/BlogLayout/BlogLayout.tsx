import NavBar from 'src/components/NavBar/NavBar'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
