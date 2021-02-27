import React from 'react'
import 'normalize.css'
import '@fontsource/source-sans-pro'
import Layout from './src/components/layout/layout'
import './src/lib/prism.css'

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}
