import { useEffect, useLayoutEffect } from 'react'

const useSafeLayoutEffect: typeof useLayoutEffect = (callback, deps) => {
  if (typeof window !== 'undefined') return useLayoutEffect(callback, deps)
  return useEffect(callback, deps)
}

export default useSafeLayoutEffect
