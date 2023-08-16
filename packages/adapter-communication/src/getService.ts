// apiService.ts
import { detectAppShellType } from './detectAppShellType';
import { StrategyType } from './types'

export default function getService<T>(strategies: StrategyType<T>): T {
  const appShellType = detectAppShellType()
  if (!appShellType) {
    throw new Error('AppShell não mapeada')
  }

  return strategies[appShellType];
}
