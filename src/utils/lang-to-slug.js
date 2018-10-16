// @flow
import { withPrefix } from 'gatsby-link';
import browserLang from 'browser-lang';

export const langToSlug = slug => {
  // Skip build, Browsers only
  if (typeof window !== 'undefined') {
    const detected =
      window.localStorage.getItem('language') ||
      browserLang({
        languages: langKeys,
        fallback: 'ro',
      });

    return withPrefix(`/${detected}${slug}`);
  }
  return '/';
};
export default langToSlug;
