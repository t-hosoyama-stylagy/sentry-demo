import * as Sentry from "@sentry/react"
import { Integrations } from "@sentry/tracing"
import { AppProps } from "next/app"
import Head from "next/head"

Sentry.init({
  dsn: "https://9fe3bf75f01941dfb798555d79c4995e@o540928.ingest.sentry.io/5659087",
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
  environment: process.env.NODE_ENV,
  release: process.env.GIT_SHA,
  //   beforeSend(event) {
  //     if (event.exception) {
  //       Sentry.showReportDialog({ eventId: event.event_id });
  //     }
  //     return event;
  //   },
})

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    </Head>
    <Component {...pageProps} />
  </>
)

export default App
