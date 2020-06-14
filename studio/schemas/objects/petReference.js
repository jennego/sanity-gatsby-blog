export default {
  name: 'petReference',
  type: 'object',
  title: 'Pet Reference',
  fields: [
    {
      name: 'pet',
      type: 'reference',
      to: [
        {
          type: 'pet'
        }
      ]
    }
  ],
  preview: {
    select: {
      media: 'pet.image.asset'
    }
  }
}
