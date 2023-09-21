import Head from 'next/head'

interface SeoProps {
  title: string
}

const Seo = (props: SeoProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <title>{`${props.title} - Benny's`}</title>
        <meta name="description" content="Benny's Dashboard" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="twitter:url" content={process.env.NEXTAUTH_URL} />
      </Head>
    </>
  )
}

export default Seo
