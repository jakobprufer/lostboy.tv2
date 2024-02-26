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
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'linkedWork',
      title: 'Linked Work',
      type: 'reference',
      validation: Rule => Rule.required(),
      to: [
            {
              type: 'project',
              title: 'Work'
            }
          ]
    }),
    defineField({
      name: 'icon',
      title: 'Brand Icon (.png) - Optional. Follow format of the existing case studies.',
      type: 'image',
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      validation: Rule => Rule.required(),
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Subheading', value: 'h2'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'}
          ]
        },
        {
          type: 'image',
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
            description: 'Important for SEO and accessiblity.',
              options: {
                isHighlighted: true,
            },
          },
        ],
        },
        {
          type: 'file',
          title: 'MP3 Audio',
          accept: "audio/mp3",
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption'
            }
          ]
        }
      ]
    }),
  ],
})
