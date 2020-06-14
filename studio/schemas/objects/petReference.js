export default {
  name: 'authorReference',
  type: 'object',
  title: 'Author reference',
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
