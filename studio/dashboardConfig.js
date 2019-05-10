export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5cd4d1f4b65565c74ba9b660',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-bpktc2q6',
                  apiId: '07d59f55-1f20-4679-b595-642587c04e28'
                },
                {
                  buildHookId: '5cd4d1f40d84ab86beee7824',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-rdvzurmy',
                  apiId: '9b496d11-b0b8-47c2-95f0-ce88d367394b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/madleo-dk/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-rdvzurmy.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
