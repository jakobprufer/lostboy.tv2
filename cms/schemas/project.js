import {defineField, defineType} from 'sanity'
import {ProjectsIcon} from '@sanity/icons'

export default defineType({
  name: 'project',
  title: 'Featured Work',
  type: 'document',
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: 'orderRank',
      title: 'Order Rank',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'available',
      title: 'Is this project currently available for licensing?',
      type: 'boolean',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Brand Name',
      validation: Rule => Rule.required(),
      type: 'string',
    }),
    defineField({
      name: 'brandIcon',
      title: 'Brand Icon (.png)',
      type: 'image',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'client',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'agency',
      title: 'Agency (optional)',
      type: 'string',
    }),
    defineField({
      name: 'video',
      title: 'Video (.mp4, .mov, .ogg - max 20 MB)',
      type: 'file',
      accept: ".mp4, .mov, .ogg",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail (max 0.5 MB, 16/9 aspect ratio)',
      type: 'image',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'client',
      author: 'author.name',
      media: 'thumbnail',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
