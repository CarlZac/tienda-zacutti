import { useState, useEffect } from 'react'

export const useAsyncFn = (asyncFunction, dependencies = []) => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    setIsLoading(true)

    asyncFunction().then(response => {
      setData(response)
    }).catch(error => {
      setError(error)
    }).finally(() => {
      setIsLoading(false)
    })
  }, dependencies)

  return {
    data,
    isLoading,
    error
  }
};
