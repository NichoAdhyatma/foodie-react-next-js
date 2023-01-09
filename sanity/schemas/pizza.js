export default {
  name: 'pizza',
  type: 'document',
  title: 'pizza',
  fields: [
    {
      name: 'image',
      title: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'price',
      title: 'price',
      type: 'array',
      of: [{type: 'number'}],
    },
    {
      name: 'details',
      title: 'details',
      type: 'string',
    },
  ],
}
