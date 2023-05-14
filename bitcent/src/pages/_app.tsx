import '@/styles/globals.css'
import { AutenticacaoProvider } from '@/data/contexts/AutenticacaoContext'
import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <AutenticacaoProvider>
        <Component {...pageProps} />
      </AutenticacaoProvider>
    </MantineProvider>
  )
}
