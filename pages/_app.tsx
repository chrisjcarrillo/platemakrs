import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import EditorProvider from '../context/editorContext'
import { useEffect } from 'react'
import StoreProvider from '../context/storeContext'
import InterfaceProvider from '../context/interfaceContext'
import { Analytics } from '@vercel/analytics/react';
import { EditorHeader } from '../components/Editor/EditorHeader/EditorHeader'

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
          <EditorHeader />
          <Component {...pageProps} />
          <Analytics />
        </EditorProvider>
      </StoreProvider>
    </InterfaceProvider>
  )
}
