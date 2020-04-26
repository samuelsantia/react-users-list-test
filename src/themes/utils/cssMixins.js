import { css } from 'styled-components';
import { ifProp, switchProp, prop } from 'styled-tools';

/** sets number of lines of margin top from leader prop */
export const leader = ifProp(
  'leader',
  css`
    margin-top: calc(var(--scale-rhythm) * ${prop('leader')});
  `
);

/** sets number of lines of margin bottm from trailer prop */
export const trailer = ifProp(
  'trailer',
  css`
    margin-bottom: calc(var(--scale-rhythm) * ${prop('trailer')});
  `
);

/** sets text-align from prop align */
export const align = ifProp(
  'align',
  css`
    text-align: ${prop('align')};
  `
);

/** sets font family and weight from prop weight */
export const weight = switchProp(
  'weight',
  {
    bold: css`
      font-weight: var(--weight-bold, bold);
    `,
  },
  css`
    font-weight: var(--weight-normal, normal);
  `
);

/** sets --font-increase css variable from porp fontIncrease */
export const fontIncrease = ifProp(
  'fontIncrease',
  css`
    --font-increase: ${prop('fontIncrease')};
  `
);

/** sets --rhythm-increase css variable from porp rhythmIncrease */
export const rhythmIncrease = ifProp(
  'rhythmIncrease',
  css`
    --rhythm-increase: ${prop('rhythmIncrease')};
  `
);

/**
 * create switcher of key -> cssAttr: value;
 *
 * @param {string} cssAttr css attribute name
 * @param {Object.<string, string>} switchs key value switch
 * @return {Object.<string, css>} final switcher
 */
export const createCssAttrSwitcher = (cssAttr, switchs = {}) =>
  Object.entries(switchs).reduce(
    (switcher, [key, value]) => ({
      ...switcher,
      [key]: `${cssAttr}: ${value};`,
    }),
    {}
  );

/** sets color from prop color */
export const switchColor = (colors, defaultValue) =>
  ifProp(
    'color',
    switchProp(
      'color',
      createCssAttrSwitcher('color', colors),
      css`
        color: ${defaultValue};
      `
    )
  );

/** sets background-color from prop bgc */
export const switchBgc = (colors, defaultValue) =>
  ifProp(
    'bgc',
    switchProp(
      'bgc',
      createCssAttrSwitcher('background-color', colors),
      css`
        background-color: ${defaultValue};
      `
    )
  );
