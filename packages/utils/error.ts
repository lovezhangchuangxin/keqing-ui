import { isString } from '@vue/shared'

class KqUIError extends Error {
  constructor(msg: string) {
    super(msg)
  }
}

export function throwError(scope: string, msg: string): never {
  throw new KqUIError(`[${scope}] ${msg}`)
}

export function debugWarn(error: Error): void
export function debugWarn(scope: string, message: string): void
export function debugWarn(scope: string | Error, message?: string): void {
  if (process.env.NODE_ENV !== 'production') {
    const error: Error = isString(scope) ? new KqUIError(`[${scope}] ${message}`) : scope
    console.warn(error)
  }
}
