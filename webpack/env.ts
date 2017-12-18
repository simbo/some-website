export const NODE_ENV: string = ((env) => {
  switch (env) {
    case 'prod':
    case 'production':
      return 'production';
    default:
      return 'development';
  }
})(process.env.NODE_ENV)

export const IS_PRODUCTION: boolean = NODE_ENV === 'production';

export const IS_DEVELOPMENT: boolean = NODE_ENV === 'development';
