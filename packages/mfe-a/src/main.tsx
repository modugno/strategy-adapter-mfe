import React from 'react'
import ReactDOM from 'react-dom/client'
import Mfe from './components/Mfe'
import { CommunicationProvider } from './context/Communication'

class WebComponent extends HTMLElement {
  root: ReactDOM.Root
  constructor() {
    super()
    this.root = ReactDOM.createRoot(this)
  }

  get context() {
    return {
      token: 'token',
      data: {}
    }
  }

  connectedCallback() {
    this.root.render(
      <React.StrictMode>
        <CommunicationProvider context={this.context}>
          <Mfe />
        </CommunicationProvider>
      </React.StrictMode>,
    )
  }
}

customElements.define('mfe-element', WebComponent)
