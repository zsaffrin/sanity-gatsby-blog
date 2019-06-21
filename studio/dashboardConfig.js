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
                  buildHookId: '5d0cd0d084e542931e93b7d5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-kb8josn6',
                  apiId: '9315a91c-5538-40ce-ae9c-8f272021d8eb'
                },
                {
                  buildHookId: '5d0cd0d05761080170b63eff',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-cg3zozj8',
                  apiId: '9232e483-661f-43d9-99d7-24e1d5376aa8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zsaffrin/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-cg3zozj8.netlify.com', category: 'apps'}
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
