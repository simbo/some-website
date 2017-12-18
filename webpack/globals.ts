import { NODE_ENV, IS_DEVELOPMENT, IS_PRODUCTION } from './env';

export const globals: {[key: string]: any} = {
  NODE_ENV,
  IS_PRODUCTION,
  IS_DEVELOPMENT
};
