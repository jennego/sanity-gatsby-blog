export default {
  title: 'Coat Intro',
  name: 'coatIntro',
  type: 'document',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
    }
  ]
}
