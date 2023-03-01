import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

import { course, teacher } from './schemas/schemaTypes';

export default defineConfig({
  basePath: '/studio', // <-- important that `basePath` matches the route you're mounting your studio from, it applies to both `/pages` and `/app`

  projectId,
  dataset,
  
  plugins: [
    deskTool({
      structure: (S, context) =>
        S.list()
          .title('Base')
          .items([
            orderableDocumentListDeskItem({
              type: 'course',
              title: 'Courses',
              params: {
                lang: 'en_US'
              },
              S,
              context
            }),
            orderableDocumentListDeskItem({
              type: 'teacher',
              title: 'Teachers',
              params: {
                lang: 'en_US'
              },
              S,
              context
            })
            // S.documentTypeListItems().reverse()
          ])
    })
  ],

  schema: {
    types: [course, teacher]
  }
});
