/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from 'react'
import { IAbstractLayer } from '../services/AbstractLayer/IAbstractLayer'
import CanalAdapter from '../services/AbstractLayer/CanalAdapter'
import WebviewAdapter from '../services/AbstractLayer/WebviewAdapter'
import OutroCanalAdapter from '../services/AbstractLayer/OutroCanalAdapter'

type ContextProps = {
  token: string
  data: any
}

type ProviderProps = {
  children: React.ReactNode,
  context?: ContextProps
}

export function getStrategy(context?: ContextProps): IAbstractLayer | undefined {
  if (!context) {
    return new WebviewAdapter()
  }

  if (window.location.href.includes('canal.com')) {
    return new CanalAdapter(context)
  }

  if (window.location.href.includes('outro-canal.com')) {
    return new OutroCanalAdapter(context)
  }

  return new CanalAdapter(context)
}

const CommunicationContext = createContext<IAbstractLayer>({} as IAbstractLayer)

export const CommunicationProvider = ({ children, context }: ProviderProps) => {
  const strategy = getStrategy(context)
  return (
    <>
      {strategy && (
        <CommunicationContext.Provider value={strategy}>
          {children}
        </CommunicationContext.Provider>
      )}
    </>
  )
}

export function useCommunication() {
  return useContext(CommunicationContext)
}

