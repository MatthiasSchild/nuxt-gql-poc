import 'dotenv/config';
import type { CodegenConfig } from '@graphql-codegen/cli'

const schema = process.env.GRAPHQL_ENDPOINT;

const config: CodegenConfig = {
  schema,
  documents: ['graphql/*.graphql'],
  generates: {
    'types/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-vue-apollo',
        ],
    },
  },

}

export default config
