import React from 'react'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'

const Footer: React.FC = () => {
  return (
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
  )
}

export default Footer
