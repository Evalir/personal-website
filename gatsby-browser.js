import React from 'react'
import 'normalize.css'
import '@fontsource/source-sans-pro'
import Layout from './src/components/layout/layout'

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}
