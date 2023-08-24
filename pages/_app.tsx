import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Header } from '../components/shared/Header/Header'
import Head from 'next/head'
import EditorProvider from '../context/editorContext'
import { useEffect } from 'react'
import StoreProvider from '../context/storeContext'
import InterfaceProvider from '../context/interfaceContext'
import { Cart } from '../components/shared/Cart/Cart'

export default function App({ Component, pageProps }: AppProps) {
  const useDisablePinchZoomEffect = () => {
    useEffect(() => {
      const disablePinchZoom = (e) => {
        if (e.touches.length > 1) {
          e.preventDefault()
        }
      }
      document.addEventListener("touchmove", disablePinchZoom, { passive: false })
      return () => {
        document.removeEventListener("touchmove", disablePinchZoom)
      }
    }, [])
  }
  
  return (
    <InterfaceProvider>
      <StoreProvider>
        <EditorProvider>
          {/* { pageProps !== 'editor' && <Header {...pageProps} /> } */}
          <Component {...pageProps} />
        </EditorProvider>
      </StoreProvider>
    </InterfaceProvider>
  )
}
