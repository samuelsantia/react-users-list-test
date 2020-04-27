import medias, { sizes } from './medias';

describe('medias', () => {
  it.each(Object.entries(sizes))(
    'should have %s with min-widht %s',
    (media, size) => {
      expect(medias[media]).toBe(`(min-width: ${size})`);
    }
  );
});
