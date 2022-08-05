import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import TransitDirections from '../src/components/TransitDirections'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SDK Next Example</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>
          <a href="https://citymapper.com">Citymapper</a> SDK next
        </h3>
        <TransitDirections />
      </main>
    </div>
  )
}

export default function Index() {
  return (
    <Container maxWidth={false} disableGutters>
      <TransitDirections />
      <footer className={styles.footer}>
        <a
          href="https://citymapper.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.poweredByLink}
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image
              src="/favicon.png"
              alt="Citymapper Logo"
              width={24}
              height={24}
            />
          </span>
        </a>
      </footer>
    </Container>
  )
}
