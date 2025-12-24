import React from 'react';
import { Divider } from '@mantine/core'
import { pageConfig } from '@/uptime.config'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Divider mt="lg" />
      <div style={{ textAlign: 'center', fontSize: '12px', marginTop: '10px' }}>
        Copyright © {currentYear} 三木羽冰<br />
        Powered by <a href="https://github.com/lyc8503/UptimeFlare" target="_blank">Uptimeflare</a>
      </div>
    </>
  )
}
