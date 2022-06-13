import { Link } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

import { Box, Flex, Button } from '@chakra-ui/react'

import MenuItem from './MenuItem'
import { MenuIcon, CloseIcon } from './Icons'

const Header = () => {
  const { isAuthenticated, logOut } = useAuth()

  const toggleMenu = () => setShow(!show)
  const [show, setShow] = React.useState(false)

  const handleSignIn = () => {
    if (isAuthenticated) logOut()
  }

  return (
    <Flex
      p={8}
      mb={8}
      as="nav"
      w="100%"
      wrap="wrap"
      align="center"
      justify="space-between"
      color={['white', 'white', 'primary.700', 'primary.700']}
      bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
    >
      <Flex align="center">
        <Link to="/">Rasjonell</Link>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        flexBasis={{ base: '100%', md: 'auto' }}
        display={{ base: show ? 'block' : 'none', md: 'block' }}
      >
        <Flex
          align="center"
          pt={[4, 4, 0, 0]}
          direction={['column', 'row', 'row', 'row']}
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
        >
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/about">About </MenuItem>
          <MenuItem to="/contact">Contact </MenuItem>

          {isAuthenticated ? (
            <MenuItem to="/admin/posts">Admin Dashboard </MenuItem>
          ) : null}

          <MenuItem
            isLast
            onClick={handleSignIn}
            to={isAuthenticated ? '/' : '/admin/login'}
          >
            <Button
              size="sm"
              rounded="md"
              color={['primary.500', 'primary.500', 'white', 'white']}
              bg={['white', 'white', 'primary.500', 'primary.500']}
              _hover={{
                bg: [
                  'primary.100',
                  'primary.100',
                  'primary.600',
                  'primary.600',
                ],
              }}
            >
              Log {isAuthenticated ? 'Out' : 'In'}
            </Button>
          </MenuItem>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Header
