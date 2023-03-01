import { defineField, defineType } from 'sanity';
import {
  orderRankField,
  orderRankOrdering
} from '@sanity/orderable-document-list';

export const course = defineType({
  name: 'course',
  type: 'document',
  title: 'Course',
  //@ts-ignore
  orderings: [orderRankOrdering],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title'
    }),
    orderRankField({ type: 'course' }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input: any) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
      }
    }),
    defineField({
      name: 'courseCode',
      type: 'string',
      title: 'Course Code',
      validation: (rule) => rule.required().min(2).regex(/^\S*$/)
    }),
    defineField({
      name: 'courseTier',
      type: 'number',
      title: 'Course Tier',
      options: {
        list: [
          { title: 'Tier 1', value: 1 },
          { title: 'Tier 2', value: 2 },
          { title: 'Tier 3', value: 3 }
        ]
      }
    }),
    defineField({
      name: 'courseDesc',
      type: 'text',
      title: 'Course Description'
    }),
    defineField({
      name: 'courseColorCode',
      type: 'string',
      title: 'Course Color Code',
      validation: (rule) => rule.regex(/^\#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)
    }),
    defineField({
      name: 'sections',
      type: 'array',
      title: 'Sections',
      of: [
        {
          title: 'Section',
          name: 'section',
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            {
              name: 'text',
              type: 'array',
              title: 'Text',
              of: [
                {
                  type: 'block'
                }
              ]
            },
            {
              name: 'video',
              type: 'file',
              title: 'Video',
              options: {
                accept: 'video/*'
              }
            }
          ]
        }
      ]
    })
  ]
});

export const teacher = defineType({
  name: 'teacher',
  type: 'document',
  title: 'Teacher',
  //@ts-ignore
  orderings: [orderRankOrdering],
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name'
    }),
    orderRankField({ type: 'teacher' }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input: any) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
      }
    }),
    defineField({
      name: 'role',
      type: 'string',
      title: 'Role'
    }),
    defineField({
      name: 'desc',
      type: 'text',
      title: 'Teacher Description'
    }),
    defineField({
      name: 'thumbnail',
      type: 'image',
      title: 'Thumbnail'
    }),
    defineField({
      name: 'video',
      type: 'file',
      title: 'Video',
      options: {
        accept: 'video/*'
      }
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'thumbnail'
    }
  }
});
