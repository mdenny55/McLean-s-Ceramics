import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import schemas from './sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'McLean\'s Ceramics',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  basePath: '/admin',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemas,
  },
})
