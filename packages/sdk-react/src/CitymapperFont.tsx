import { useEffect } from 'react'
import { proximaFontURI } from './theme/theme'

/**
 * Injects the Proxima Nova font
 */
const CitymapperFont = () => {
  useEffect(() => {
    if (typeof document !== undefined) {
      const fontImport = document.head.querySelector(
        `link[href="${proximaFontURI}"]`
      )
      if (!fontImport) {
        const preloadEl = document.createElement('link')
        preloadEl.setAttribute('href', proximaFontURI)
        preloadEl.setAttribute('rel', 'preload')
        preloadEl.setAttribute('as', 'style')
        document.head.appendChild(preloadEl)
        const linkEl = document.createElement('link')
        linkEl.setAttribute('href', proximaFontURI)
        linkEl.setAttribute('rel', 'stylesheet')
        document.head.appendChild(linkEl)
      }
    }
  }, [])

  return null
}

export default CitymapperFont
