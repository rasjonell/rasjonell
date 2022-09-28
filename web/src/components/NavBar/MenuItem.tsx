import { Text } from '@chakra-ui/react'
import { Link } from '@redwoodjs/router'

export default ({ children, isLast = false, to = '/', ...rest }) => (
  <Text
    mb={{ base: isLast ? 0 : 8, sm: 0 }}
    mr={{ base: 0, sm: isLast ? 0 : 8 }}
    {...rest}
  >
    <Link to={to}>{children}</Link>
  </Text>
)
