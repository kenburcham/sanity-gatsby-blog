export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d768c98c0e0cda3e954f463',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-xnzdaoyc',
                  apiId: 'd4ca9678-2ab6-4904-b95e-fce8d9a9b156'
                },
                {
                  buildHookId: '5d768c981f9af73b71d8a368',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-cv55o433',
                  apiId: 'a11419c4-e82c-47ff-b781-a3b06c2e5535'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kenburcham/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-cv55o433.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
