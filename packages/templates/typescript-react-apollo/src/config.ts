import typescriptConfig from 'graphql-codegen-typescript-template';

import * as components from './components.handlebars';
import { gql } from './helpers/gql';
import { generateFragments } from './helpers/generate-fragments';
import { eq } from './helpers/eq';
import { toLowerCase } from './helpers/to-lower-case';
import { propsType } from './helpers/props-type';

typescriptConfig.templates['documents'] += components;
typescriptConfig.customHelpers.gql = gql;
typescriptConfig.customHelpers.generateFragments = generateFragments;
typescriptConfig.customHelpers.eq = eq;
typescriptConfig.customHelpers.toLowerCase = toLowerCase;
typescriptConfig.customHelpers.propsType = propsType;
typescriptConfig.outFile = 'types.tsx';

export { typescriptConfig as config };
