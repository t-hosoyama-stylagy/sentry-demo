import Link from 'next/link'
import Layout from '../components/Layout'
import { captureException } from '@sentry/react'

const IndexPage = () => {

  const handleError = () => {
    try {
      throw new Error("test");
    } catch(e) {
      const eventId = captureException(e);
      console.log(eventId);
    }
  }

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <p>
        <a id="error" onClick={handleError}>Error</a>
      </p>
    </Layout>
  )
}

export default IndexPage