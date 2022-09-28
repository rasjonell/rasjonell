import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { AuthProvider } from '@redwoodjs/auth'

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import { Toaster } from '@redwoodjs/web/toast'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import theme from 'src/utils/theme'

import './index.css'
import './scaffold.css'

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <AuthProvider type="dbAuth">
        <ColorModeScript />
        <ChakraProvider theme={theme}>
          <RedwoodApolloProvider>
            <Toaster toastOptions={{ className: 'rw-toast', duration: 2000 }} />
            <Routes />
          </RedwoodApolloProvider>
        </ChakraProvider>
      </AuthProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
