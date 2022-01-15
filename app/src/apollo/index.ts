import type { ApolloClientOptions } from '@apollo/client/core'
import { createHttpLink, InMemoryCache } from '@apollo/client/core'
import fetch from 'cross-fetch'

export /* async */ function getClientOptions (
  /* {app, router, ...} */
  // options?: Partial<BootFileParams<any>>
) {
  return <ApolloClientOptions<unknown>>Object.assign(
    // General options.
    <ApolloClientOptions<unknown>>{
      link: createHttpLink({
        uri: process.env.GRAPHQL_URI,
        fetch,
      }),

      cache: new InMemoryCache(),
    },

    // Specific Quasar mode options.
    process.env.MODE === 'spa'
      ? {
        //
      }
      : {},
    process.env.MODE === 'ssr'
      ? {
        //
      }
      : {},
    process.env.MODE === 'pwa'
      ? {
        //
      }
      : {},
    process.env.MODE === 'bex'
      ? {
        //
      }
      : {},
    process.env.MODE === 'cordova'
      ? {
        //
      }
      : {},
    process.env.MODE === 'capacitor'
      ? {
        //
      }
      : {},
    process.env.MODE === 'electron'
      ? {
        //
      }
      : {},

    // dev/prod options.
    process.env.DEV
      ? {
        //
      }
      : {},
    process.env.PROD
      ? {
        //
      }
      : {},

    // For ssr mode, when on server.
    process.env.MODE === 'ssr' && process.env.SERVER
      ? {
        ssrMode: true,
      }
      : {},
    // For ssr mode, when on client.
    process.env.MODE === 'ssr' && process.env.CLIENT
      ? {
        ssrForceFetchDelay: 100,
      }
      : {},
  )
}