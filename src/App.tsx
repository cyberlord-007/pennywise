import { ThemeProvider } from 'styled-components'
import { AwsmDarkTheme } from './theme/AwsmTheme'
import { PennywiseProvider } from './context/PennywiseContext'
import Protected from './components/Protected/Protected'


function App() {
  return (
    <PennywiseProvider>
      <ThemeProvider theme={AwsmDarkTheme}>
        <Protected/>
      </ThemeProvider>
    </PennywiseProvider>
  )
}

export default App
