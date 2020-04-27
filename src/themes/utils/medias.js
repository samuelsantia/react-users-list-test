/** responsive sizes */
export const sizes = {
  mobile: '420px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1400px',
};

/**
 * medias collection
 * use in your template literal as
 * `
 *  @media ${devices.laptop} {
 *    max-width: 20em;
 *  }
 *
 *  @media ${devices.desktop}  {
 *    max-width: 30em;
 *  }
 * `
 */
export default Object.entries(sizes).reduce(
  (medias, [key, size]) => ({
    ...medias,
    [key]: `(min-width: ${size})`,
  }),
  {}
);
