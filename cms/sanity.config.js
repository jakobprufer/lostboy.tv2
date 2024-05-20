import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { deskStructure } from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'lostboy.tv',

  projectId: 'vlugq6ei',
  dataset: 'production',
  plugins: [structureTool({
    structure: deskStructure,
    }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
