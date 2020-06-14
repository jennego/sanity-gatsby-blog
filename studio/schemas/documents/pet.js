export default {
  name: 'pet',
  type: 'document',
  title: 'pet',
  fields: [
    {
      name: 'type',
      type: 'string',
      title: 'type'
    },
    {
      name: 'pet',
      type: 'image',
      title: 'Pet (if purple)',
      description: 'pet but only if purple or special'
    },
    {
      name: 'isHog',
      type: 'boolean',
      title: 'Horn of Gold'
    }
  ]
}
