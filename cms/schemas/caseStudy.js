import {defineField, defineType} from 'sanity'
import {PresentationIcon} from '@sanity/icons'

export default defineType({
  name: 'caseStudy',
  title: 'Case Studies',
  type: 'document',
  icon: PresentationIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'linkedProject',
      title: 'Linked Project',
      type: 'reference',
      to: [
    {
      type: 'project',
      title: 'Project'
    }
  ]
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
