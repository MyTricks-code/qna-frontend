import React from 'react'
import Head from 'next/head'

export const Seo = ({title}) => {
  return (
    <div>
        <Head>
            <title>{title}</title>
        </Head>
    </div>
  )
}

export default Seo