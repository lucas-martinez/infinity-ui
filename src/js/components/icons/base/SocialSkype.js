// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import CSSClassnames from '../../../utils/CSSClassnames';
import Intl from '../../../utils/Intl';
import Props from '../../../utils/Props';

const CLASS_ROOT = CSSClassnames.CONTROL_ICON;
const COLOR_INDEX = CSSClassnames.COLOR_INDEX;

export default class Icon extends Component {
  render () {
    const { className, colorIndex } = this.props;
    let { a11yTitle, size, responsive } = this.props;
    let { intl } = this.context;

    const classes = classnames(
      CLASS_ROOT,
      `${CLASS_ROOT}-social-skype`,
      className,
      {
        [`${CLASS_ROOT}--${size}`]: size,
        [`${CLASS_ROOT}--responsive`]: responsive,
        [`${COLOR_INDEX}-${colorIndex}`]: colorIndex
      }
    );

    a11yTitle = a11yTitle || Intl.getMessage(intl, 'social-skype');

    const restProps = Props.omit(this.props, Object.keys(Icon.propTypes));
    return <svg {...restProps} version="1.1" viewBox="0 0 24 24" width="24px" height="24px" role="img" className={classes} aria-label={a11yTitle}><path stroke="none" fill="#000000" fillRule="evenodd" d="M12.05175,18.85575 C8.025,18.85575 6.22425,16.8765 6.22425,15.393 C6.22425,14.63175 6.786,14.0985 7.56,14.0985 C9.2835,14.0985 8.83725,16.57275 12.05175,16.57275 C13.69725,16.57275 14.60625,15.67875 14.60625,14.7645 C14.60625,14.21475 14.33475,13.605 13.251,13.338 L9.66975,12.444 C6.786,11.721 6.2625,10.16175 6.2625,8.69625 C6.2625,5.65275 9.1275,4.5105 11.8185,4.5105 C14.2965,4.5105 17.2185,5.88 17.2185,7.7055 C17.2185,8.48775 16.54125,8.943 15.76725,8.943 C14.2965,8.943 14.56725,6.9075 11.6055,6.9075 C10.1355,6.9075 9.32175,7.5735 9.32175,8.526 C9.32175,9.47625 10.48275,9.78 11.49,10.0095 L14.14125,10.59825 C17.0445,11.24475 17.78025,12.93975 17.78025,14.5365 C17.78025,17.00925 15.88275,18.85575 12.05175,18.85575 M23.15025,13.9695 C23.14275,14.0115 23.1375,14.05425 23.12925,14.09625 L23.08875,13.85475 C23.1105,13.89225 23.12925,13.93125 23.15025,13.9695 C23.274,13.29525 23.33925,12.60525 23.33925,11.91525 C23.33925,10.38525 23.03925,8.901 22.44825,7.50375 C21.87675,6.1545 21.06075,4.9425 20.019,3.9015 C18.97875,2.8605 17.766,2.04375 16.41675,1.473 C15.02025,0.882 13.536,0.58275 12.00675,0.58275 C11.28525,0.58275 10.563,0.65025 9.86025,0.78525 C9.85875,0.78525 9.85725,0.78525 9.855,0.786 C9.89475,0.807 9.9345,0.82575 9.9735,0.8475 L9.735,0.81 C9.77475,0.8025 9.81525,0.79425 9.855,0.786 C8.8905,0.27375 7.80675,0 6.70875,0 C4.917,0 3.23175,0.6975 1.965,1.965 C0.69825,3.23175 0,4.917 0,6.7095 C0,7.8495 0.29325,8.97075 0.84375,9.96225 C0.8505,9.921 0.85575,9.879 0.864,9.8385 L0.90525,10.07625 C0.8835,10.03875 0.86475,9.99975 0.84375,9.96225 C0.732,10.6035 0.67275,11.25975 0.67275,11.91525 C0.67275,13.44525 0.97275,14.9295 1.5645,16.32675 C2.1345,17.67675 2.952,18.888 3.99225,19.929 C5.03325,20.96925 6.2445,21.7875 7.59525,22.35675 C8.99175,22.94925 10.47675,23.2485 12.00675,23.2485 C12.672,23.2485 13.3395,23.18775 13.99125,23.07225 C13.953,23.05125 13.914,23.03175 13.87575,23.00925 L14.118,23.052 C14.076,23.0595 14.034,23.06475 13.99125,23.07225 C14.99475,23.64075 16.131,23.94225 17.29125,23.94225 C19.08375,23.94225 20.7675,23.2455 22.035,21.97725 C23.3025,20.71125 24,19.026 24,17.2335 C24,16.089 23.70525,14.964 23.15025,13.9695"/></svg>;
  }
};

Icon.contextTypes = {
  intl: PropTypes.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'SocialSkype';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: PropTypes.string,
  colorIndex: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: PropTypes.bool
};

