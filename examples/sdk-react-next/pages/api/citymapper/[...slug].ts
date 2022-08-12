import type { NextApiRequest, NextApiResponse } from 'next'

const serverEndpoint = 'https://api.external.citymapper.com/api/'

/* Proxies all incoming requests to the Citymapper API.*/
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const serverUrl = req.url?.replace('/api/citymapper/', serverEndpoint) || ''
  const headers = {
    'Content-Type': 'application/json',
    'Citymapper-Partner-Key':
      process.env.REACT_APP_CITYMAPPER_API_KEY || 'no api key',
  }
  const backendApiResponse = await fetch(serverUrl, {
    headers: headers,
  })
  const json = await backendApiResponse.json()

  res.status(backendApiResponse.status).json(json)
}
