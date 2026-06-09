import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'potteryPiece',
  title: 'Pottery Piece',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'string',
      description: 'Unique identifier (e.g., "tri-color-bowl-01")',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'height',
      title: 'Height',
      type: 'string',
      description: 'e.g., "4 inches" or "10 cm"',
    }),
    defineField({
      name: 'width',
      title: 'Width',
      type: 'string',
      description: 'e.g., "3 inches" or "7.5 cm"',
    }),
    defineField({
      name: 'depth',
      title: 'Depth',
      type: 'string',
      description: 'e.g., "2.5 inches" or "6 cm"',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'e.g., "$150" or "Contact for pricing"',
    }),
  ],
})
