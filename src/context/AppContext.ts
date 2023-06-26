import { createContext } from 'react'

import { Value } from '../@types/ContextType'
const INITIAL_STATE: Value = {}

const AppContext = createContext(INITIAL_STATE)

export default AppContext
