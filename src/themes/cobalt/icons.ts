import spec from './quantum-spec';
import { deepMerge } from '../../js/utils';

const SIZE = {
  16: 'small',
  24: 'medium',
  32: 'large'
};

const icons = {
  Collapse: {
    small: spec.global.iconUrl.collapse16,
    medium: spec.global.iconUrl.collapse24,
  },
  Expand: {
    small: spec.global.iconUrl.expand16,
    medium: spec.global.iconUrl.expand24,
  },
  Error: {
    medium: spec.global.iconUrl.error24, 
  },
  Info: {
    small: spec.global.iconUrl.info16,
    medium: spec.global.iconUrl.info24, 
  },
  Normal: {
    medium: spec.global.iconUrl.normal24, 
  },
  Warning: {
    medium: spec.global.iconUrl.warning24, 
  },
  SeverityCritical: {
    small: spec.global.iconUrl.severityCritical16,
  },
  SeverityMajor: {
    small: spec.global.iconUrl.severityMajor16,
  },
  SeverityMinor: {
    small: spec.global.iconUrl.severityMinor16,
  },
  SeverityNormal: {
    small: spec.global.iconUrl.severityNormal16,
  },
  SeverityUnknown: {
    small: spec.global.iconUrl.severityUnknown16,
  },
  SeverityWarning: {
    small: spec.global.iconUrl.severityWarning16,
  },
  ...Object.entries(spec)
    .reduce((acc, [key, val]) => {
      if (typeof val !== 'string') {
        return acc;
      }
      const match = key.match(/^icon(.*)(16|24|32)$/)
      if (!match) {
        return acc;
      }
      const [, name, size] = match;
      return deepMerge(acc, { [name]: { [SIZE[size]]: val } });
    }, {})
};

export default icons;
