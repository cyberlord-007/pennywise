import { ThemeProvider } from 'styled-components'
import Sidebar from './components/Sidebar/Sidebar'
import { AwsmDarkTheme } from './theme/AwsmTheme'
import { Outlet } from 'react-router'
import { AwsmLayout, AwsmRouteElement } from './atoms/Layout'
function App() {
  return (
    <ThemeProvider theme={AwsmDarkTheme}>
      <AwsmLayout>
        <Sidebar/>
        <AwsmRouteElement>
          <Outlet/>
        </AwsmRouteElement>
      </AwsmLayout>
    </ThemeProvider>
  )
}

export default App
