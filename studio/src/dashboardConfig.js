export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eddf20a1311f88cddd10a93',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-dbt4phk4',
                  apiId: '77cedd92-b0d2-4a8b-bcfe-b700c073eddc'
                },
                {
                  buildHookId: '5eddf20a2908fe535d99d1cd',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-m99uh23b',
                  apiId: '950d5a54-1963-4b2e-95b7-40b1419a2cb9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jennego/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-m99uh23b.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
