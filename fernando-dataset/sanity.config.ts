import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'quintaneira-ferreira-advocacia',

  projectId: '63iyl519',
  dataset: 'fernando-advocacia',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
