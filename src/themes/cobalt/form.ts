import { css } from 'styled-components';
import { ExtendType, PartialThemeGenerator } from '.';
import spec from './quantum-spec';
import { paper } from './paper';

export const form = {
  boxShadow: spec.global.form.boxShadow,
  marginTop: spec.global.form.marginTop,

  fieldset: {
    marginTop: spec.global.form.fieldsetMarginTop,
  },
  footer: {
    paddingBottom: spec.global.form.footerPaddingBottom,
    paddingTop: spec.global.form.footerPaddingTop,
  },
  header: {
    paddingLeft: spec.global.form.headerPaddingLeft,
  },

  small: {
    width: spec.global.form.smallSize,
  },

  medium: {
    width: spec.global.form.mediumSize,
  },

  large: {
    width: spec.global.form.largeSize,
  },
};

export type FormTheme = typeof form & {
  extend?: ExtendType;
};

const formStyle = css`
  box-shadow: ${form.boxShadow};
  margin-top: ${form.marginTop};

  &.shadow {
    box-shadow: ${spec.global['$qtm-paper__box-shadow--depth1']};
  }
  fieldset {
    header {
      padding-left: ${form.header.paddingLeft};
    }
  }
  footer {
    padding-bottom: ${form.footer.paddingBottom};
    padding-top: ${form.footer.paddingTop};
  }
  fieldset {
    margin-top: ${form.fieldset.marginTop};
  }
`;

const extend = css<{ size: 'small' | 'medium' | 'large' }>`
  ${formStyle}
  ${props => css`
    width: ${(props.size ? form[props.size] ||form.medium : form.medium).width};
  `}
`;

const generator: PartialThemeGenerator<'form'> = ({ baseSpacing = 24, scale = 6 }) => {
  return {
    form: {
      extend,
    },
  };
};

export default generator;
