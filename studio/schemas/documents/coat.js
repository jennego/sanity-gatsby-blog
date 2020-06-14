import { format } from 'date-fns'

export default {
  name: 'coat',
  type: 'document',
  title: 'Golden Apple Coat',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description:
        'Some frontends like ours will require a slug to be set to be able to show the post',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing',
      validation: Rule => Rule.required()
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image'
    },
    {
      name: 'limited',
      type: 'boolean',
      title: 'Limited?',
      description: 'Is the coat limited or not.'
    },
    {
      name: 'preCreation',
      type: 'boolean',
      title: 'Pre-Creation Space',
      description: 'Is the coat pre-creation space or not.'
    },
    {
      name: 'useNum',
      type: 'number',
      title: 'Use Number',
      description: 'Number of uses for limited coats.'
    },
    {
      name: 'bgName',
      type: 'string',
      title: 'Background Name',
      description: 'background name'
    },
    {
      name: 'Pet',
      type: 'array',
      title: 'Pet',
      of: [
        {
          type: 'reference',
          to: {
            type: 'petReference'
          }
        }
      ]
    },
    {
      name: 'link',
      type: 'string',
      title: 'Public Link',
      description: 'public link'
    },
    {
      name: 'privateLink',
      type: 'string',
      title: 'Private Link'
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [
        {
          type: 'reference',
          to: {
            type: 'category'
          }
        }
      ]
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
    }
  ],
  initialValue: {
    limited: false,
    preCreation: false
  },
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare({ title = 'No title', publishedAt, slug = {}, media }) {
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  }
}
