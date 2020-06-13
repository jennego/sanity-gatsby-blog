export default {
  title: 'About Me',
  name: 'about',
  type: 'document',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'body',
      name: 'body',
      type: 'string'
    }
  ]
}
