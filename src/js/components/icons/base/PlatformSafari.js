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
      `${CLASS_ROOT}-platform-safari`,
      className,
      {
        [`${CLASS_ROOT}--${size}`]: size,
        [`${CLASS_ROOT}--responsive`]: responsive,
        [`${COLOR_INDEX}-${colorIndex}`]: colorIndex
      }
    );

    a11yTitle = a11yTitle || Intl.getMessage(intl, 'platform-safari');

    const restProps = Props.omit(this.props, Object.keys(Icon.propTypes));
    return <svg {...restProps} version="1.1" viewBox="0 0 24 24" width="24px" height="24px" role="img" className={classes} aria-label={a11yTitle}><path stroke="none" fill="#000000" fillRule="evenodd" d="M22.4330083,9.17010591 C20.8000212,4.68365352 16.5631501,1.89767949 12.0503494,1.89767949 C11.0628264,1.89767949 10.0622466,2.03336645 9.07275101,2.31150358 C9.58069647,2.01561301 9.82299797,1.38672815 9.61521704,0.815941166 C9.38193316,0.174797981 8.6664416,-0.158853853 8.02529842,0.0744300234 L6.8596305,0.49868073 C6.21848732,0.732105507 5.88478852,1.44759707 6.11811936,2.08869329 C6.32467915,2.6563335 6.9095092,2.98209492 7.48583826,2.88750387 C2.27290408,5.24612739 -0.319848711,11.2621461 1.66924037,16.7275266 C3.30241537,21.2143078 7.53867586,24 12.0520872,24 C13.3064283,24 14.5829378,23.7846105 15.8298112,23.3307707 C21.5634658,21.243709 24.5199761,14.9039014 22.4330083,9.17010591 L22.4330083,9.17010591 Z M20.3777431,16.8316519 C19.3405293,19.0557157 17.4993855,20.7429024 15.1933177,21.5821984 C14.1778495,21.9518737 13.1208157,22.1392241 12.0520402,22.1392241 C11.1236953,22.1392241 10.2017379,21.9978542 9.31157696,21.7189656 C8.42944735,21.4426132 7.59635104,21.0370083 6.83525476,20.5133289 C5.25726569,19.4277393 4.07558211,17.8985487 3.41762483,16.0910801 C2.5783289,13.7850124 2.68719784,11.2902322 3.72441168,9.06612151 C4.76162551,6.84191685 6.60276931,5.15482401 8.90883703,4.31543415 C9.92430526,3.94585275 10.9813391,3.75836146 12.0503024,3.75836146 C12.9782246,3.75836146 13.9001821,3.89982533 14.7903899,4.17876089 C15.6724726,4.45511328 16.5056159,4.86081212 17.2669,5.38453842 C18.8448891,6.47022195 20.0268075,7.99931862 20.6845299,9.80655242 C21.5238259,12.1125732 21.4149569,14.6075412 20.3777431,16.8316519 L20.3777431,16.8316519 Z M14.5597832,11.3251755 C14.4863741,11.2202518 14.4079866,11.1198838 14.3225071,11.0268896 L16.5008253,6.66560365 L16.5389153,6.58942357 L13.1747335,10.2623178 C12.8583655,10.1467326 12.5219426,10.0836563 12.1785686,10.0837502 C12.0940755,10.0837502 12.0093005,10.0876954 11.9242437,10.0952571 L10.1900901,7.52777239 L10.5120003,10.6094961 C10.2113661,10.8195784 9.95802739,11.0818877 9.76020342,11.3789994 L7.98129057,11.0344983 L9.38869638,12.1757904 C9.28814055,12.518319 9.25000355,12.8809963 9.28236364,13.2464916 L6.71478503,14.9806451 L9.79796469,14.658641 C9.86028957,14.7477839 9.92688843,14.8330286 9.99804307,14.9135766 L7.81892649,19.3943929 L7.99040212,19.2040837 L11.1290026,15.7022893 C11.4607287,15.8307903 11.816408,15.9000193 12.1790853,15.9000193 C12.2635785,15.9000193 12.3483535,15.8959802 12.4334103,15.8885125 L14.1677047,18.4559972 L13.8456536,15.3741795 C14.1464757,15.1640972 14.3997205,14.9017879 14.5975914,14.6048171 L16.3765043,14.9491304 L14.9690515,13.8080261 C15.0695134,13.4654975 15.1076504,13.1028672 15.0752903,12.7374659 L17.6429628,11.0030775 L14.5597832,11.3251755 L14.5597832,11.3251755 Z M10.2923837,14.3085508 C10.1791469,14.1469852 10.0845089,13.9703432 10.015092,13.7793764 C9.8047279,13.2014504 9.83206255,12.576182 10.0920235,12.0187336 C10.3520315,11.4612382 10.8134329,11.0383965 11.3914058,10.8279854 C11.6459187,10.735414 11.9107642,10.6884002 12.1788035,10.6884002 L12.1789444,10.6884002 C12.3651676,10.6884002 12.5476334,10.7116488 12.7235239,10.7549052 L11.2248147,12.39118 L10.2923837,14.3085508 L10.2923837,14.3085508 Z M11.5792728,12.5844012 C11.6946702,12.4499823 11.8576448,12.3556731 12.0477193,12.3319079 C12.2315941,12.309129 12.4074846,12.3566124 12.5497939,12.4522837 C12.7209407,12.5671174 12.8436179,12.7524013 12.8709995,12.973145 C12.8886121,13.1146559 12.8627803,13.2506716 12.8072187,13.371564 C12.698021,13.5756816 12.4774651,13.7659439 12.2299972,13.7967541 C12.0417545,13.8201905 11.8620597,13.7697952 11.7179187,13.669662 C11.5518443,13.5539359 11.4333471,13.3717989 11.4063882,13.155423 C11.3811201,12.9522918 11.4619029,12.7339903 11.5792728,12.5844012 L11.5792728,12.5844012 Z M14.2657243,13.965036 C14.0058103,14.5224844 13.5444089,14.9452322 12.966436,15.1555493 C12.7118292,15.2482617 12.4469837,15.2953693 12.1791322,15.2953693 C11.9698014,15.2953693 11.7654491,15.2650758 11.5695038,15.2107352 L13.068072,13.5387657 L14.0262408,11.6203146 C14.1571841,11.7961581 14.2652077,11.9916807 14.3426089,12.2043462 C14.55302,12.7822721 14.5257323,13.4075406 14.2657243,13.965036 L14.2657243,13.965036 Z M8.60313042,6.04399864 L8.57105212,5.95579507 L9.15921681,5.7418615 L10.3981059,6.48759965 L10.1830451,5.89656999 C10.1488064,5.80258951 10.1171977,5.73505132 10.0881253,5.69372057 C10.0589589,5.65238983 10.0266458,5.62552484 9.99160862,5.61340742 C9.9640861,5.60448373 9.92726417,5.60147786 9.88104888,5.60448373 C9.83478662,5.60767747 9.79791772,5.61171662 9.77063003,5.61660116 L9.73944411,5.53074593 L10.4099415,5.28656576 L10.4411274,5.37242099 C10.4214484,5.38219008 10.3936441,5.39689067 10.3575266,5.41675761 C10.3215031,5.43657758 10.2921959,5.4633956 10.2696518,5.4973056 C10.2497379,5.52689465 10.2429277,5.56803753 10.2489864,5.6202176 C10.2550921,5.67244463 10.2751,5.7451022 10.3090569,5.83842515 L10.7154603,6.95510674 L10.519468,7.0264962 L9.10633224,6.17268755 L9.37319735,6.90607344 C9.40630891,6.99704805 9.43763574,7.06416354 9.46703692,7.10699722 C9.49634418,7.15006574 9.52865731,7.17754129 9.56378844,7.18965871 C9.58947926,7.19862936 9.62634816,7.2014004 9.67411335,7.19820666 C9.72206641,7.19501292 9.75963981,7.19073895 9.78688053,7.18585441 L9.81811343,7.27170964 L9.14648882,7.51612463 L9.11516199,7.43026941 C9.14310721,7.41768231 9.17387043,7.40044552 9.20787437,7.37846507 C9.2418783,7.35648463 9.26817968,7.33224979 9.28673155,7.30561963 C9.30758479,7.27387011 9.3156161,7.23441803 9.31059066,7.18778004 C9.30561218,7.14090722 9.28461804,7.06698155 9.24774914,6.96553336 L8.97844176,6.22557212 C8.96515017,6.18893805 8.94678617,6.15610828 8.92358459,6.1275525 C8.90024211,6.09918457 8.87220296,6.0776738 8.83942016,6.06278534 C8.80471173,6.04719238 8.7680307,6.03826869 8.72937706,6.03615519 C8.69058252,6.03394775 8.64854727,6.03671879 8.60313042,6.04399864 L8.60313042,6.04399864 Z M15.4681202,19.6844127 C15.4926838,19.7519509 15.5008091,19.8231055 15.4923081,19.8978766 C15.4836662,19.9726946 15.4602298,20.0406555 15.4219989,20.1020411 C15.3800106,20.1697671 15.3250595,20.2301194 15.2570516,20.2830979 C15.1891377,20.3361703 15.1036582,20.3813524 15.0009889,20.4188788 C14.9055055,20.4535872 14.8121825,20.4740647 14.7208791,20.4802174 C14.6296227,20.486417 14.5494975,20.4838338 14.4804563,20.4723739 L14.4325033,20.5769689 L14.3389455,20.6111137 L14.1189532,20.0515988 L14.2136851,20.0170782 C14.2544523,20.0629177 14.3023114,20.1097906 14.3570747,20.157274 C14.4118379,20.2047574 14.4693722,20.2443973 14.5299123,20.2755363 C14.592519,20.3087887 14.6573331,20.3307222 14.7240259,20.3413836 C14.7907187,20.3520451 14.8610279,20.3439199 14.9351415,20.316867 C15.0350867,20.2806556 15.102578,20.2282407 15.1380848,20.160045 C15.1735447,20.0918962 15.1778187,20.0205068 15.1507659,19.9463463 C15.1285976,19.8853834 15.0872668,19.8423619 15.0269615,19.8172346 C14.9667971,19.7921074 14.8838068,19.7816338 14.7780847,19.7859078 C14.7092784,19.7886789 14.6458263,19.7907924 14.5878223,19.792765 C14.5299123,19.7944558 14.4749142,19.7948785 14.422922,19.7937982 C14.3026871,19.7901818 14.2029767,19.7586201 14.1235559,19.6991602 C14.0441821,19.6399351 13.9870705,19.5619234 13.9520333,19.4656415 C13.929865,19.4046787 13.9216928,19.3412266 13.9276106,19.2753322 C13.9334815,19.2095318 13.9537242,19.1449525 13.9881038,19.0816883 C14.0212623,19.0222284 14.0708123,18.9655395 14.1367536,18.9114338 C14.2027889,18.8575629 14.2801431,18.8143065 14.3689572,18.7818995 C14.4557048,18.7503378 14.5411374,18.733101 14.6256306,18.7296724 C14.7101238,18.7265257 14.7782725,18.7290149 14.8304526,18.7375629 L14.8735211,18.647011 L14.9693802,18.6120677 L15.1722297,19.1417588 L15.0773568,19.1762324 C15.0345701,19.1267764 14.9872276,19.0775552 14.9356581,19.0285689 C14.8840886,18.9793477 14.8346796,18.940788 14.7871492,18.9133125 C14.7355797,18.8836764 14.6817089,18.8647488 14.6254427,18.8563888 C14.5692235,18.8480756 14.5095287,18.8553555 14.4464524,18.8783692 C14.3671255,18.9073477 14.3104836,18.9533751 14.2765267,19.0164045 C14.2426636,19.0797157 14.2376852,19.144248 14.2617791,19.2105181 C14.284558,19.2729369 14.3250433,19.3161933 14.3830942,19.3398645 C14.4411451,19.3637237 14.521928,19.3739624 14.6254427,19.370299 C14.6864995,19.368843 14.7485895,19.3671522 14.8119007,19.3649918 C14.875071,19.3628783 14.9317599,19.3622207 14.9819204,19.3628783 C15.1033764,19.3654145 15.2050125,19.3927021 15.2868286,19.4448822 C15.3687386,19.4973441 15.4289969,19.5769997 15.4681202,19.6844127 L15.4681202,19.6844127 Z M6.28771631,15.1364338 C6.31157543,15.4061639 6.33618601,15.6866024 6.36173592,15.9776554 L6.18809983,16.0407317 L5.44452215,14.9967077 L5.57701536,16.2632133 L5.4036141,16.3262896 C5.17803277,16.0043325 5.00472544,15.7563011 4.88359818,15.5820074 C4.76247092,15.4079486 4.66064699,15.261976 4.57817337,15.1439485 C4.55281132,15.1081129 4.53003244,15.083878 4.50978977,15.0708682 C4.4895471,15.0580933 4.46517135,15.0461637 4.4365686,15.0356901 C4.41632592,15.0282224 4.39645899,15.024606 4.37663902,15.024606 C4.35691298,15.0248408 4.33493254,15.0271891 4.31069769,15.031651 L4.27937086,14.9457958 L4.92986043,14.7090833 L4.96034186,14.7927781 C4.92417746,14.812598 4.89768821,14.8288016 4.88078017,14.8411538 C4.86396608,14.8535061 4.85114415,14.8645902 4.84240833,14.8743593 C4.83423612,14.8839405 4.83029091,14.8924885 4.83038484,14.8999562 C4.83047878,14.907377 4.83155901,14.9138114 4.83334375,14.9186959 C4.83705412,14.9291226 4.84165687,14.9387038 4.84719894,14.9474396 C4.85260012,14.9561754 4.85879973,14.9663672 4.86565688,14.9781089 C4.90027138,15.030289 4.96748081,15.1287313 5.06752,15.2733889 C5.16755919,15.4180935 5.29136355,15.5974595 5.4387922,15.8120506 L5.30268254,14.5732554 L5.48486659,14.5070323 L6.23328184,15.5640661 C6.21209984,15.358023 6.19397067,15.1901168 6.17870647,15.0601598 C6.16363015,14.9302028 6.15019765,14.8189855 6.13864383,14.7269307 C6.13108218,14.6704766 6.12436594,14.623369 6.11849509,14.5856547 C6.11243638,14.5479404 6.1047808,14.5163787 6.09548138,14.4906409 C6.08984537,14.4752828 6.07951269,14.4640108 6.06429546,14.4572006 C6.04917216,14.4501556 6.03062029,14.4461164 6.00887468,14.4448014 C5.99055765,14.4441438 5.96787271,14.4463043 5.94091379,14.4514237 C5.91400184,14.4567309 5.89075329,14.4616624 5.87116816,14.4661243 L5.83908986,14.3781086 L6.32965763,14.199541 L6.36173592,14.2875567 C6.34482789,14.2962925 6.32881223,14.3077993 6.3138768,14.3218424 C6.29898834,14.3361203 6.28503921,14.3522769 6.27212335,14.3701712 C6.25272608,14.3989149 6.24154799,14.4266252 6.23854212,14.4534902 C6.23572412,14.4803082 6.23558322,14.5114002 6.23821335,14.547001 C6.24723097,14.6702418 6.2637163,14.8667037 6.28771631,15.1364338 L6.28771631,15.1364338 Z M19.6754492,10.441496 L19.8229248,10.9390148 L18.3571393,11.4725102 L18.3259064,11.3864202 C18.3459612,11.3774965 18.3727793,11.3644867 18.4063605,11.3472499 C18.4400356,11.3299661 18.4631433,11.3157352 18.4757304,11.304651 C18.4993547,11.2827176 18.5125523,11.2611598 18.5156991,11.239649 C18.5185641,11.2181383 18.5150416,11.1934338 18.5049437,11.1654885 L18.1037537,10.0632727 C18.0940316,10.0368304 18.082102,10.0163999 18.0677302,10.0018872 C18.0532174,9.9878441 18.0281842,9.97910828 17.9923016,9.97652511 C17.9701333,9.97459947 17.9403563,9.97633724 17.9032526,9.98140965 C17.865961,9.9867169 17.8381567,9.99141357 17.8197457,9.99568755 L17.7884658,9.90978535 L19.1737973,9.40545633 L19.3189246,9.80411015 L19.2351828,9.83459158 C19.1923491,9.78302208 19.1338755,9.73657196 19.0596211,9.69463064 C18.9855076,9.65306506 18.9205056,9.63601613 18.8653196,9.64371868 C18.8414135,9.64667758 18.8095231,9.65480283 18.7699771,9.66800049 C18.7301963,9.68101028 18.6975074,9.6922823 18.6718636,9.70167566 L18.445155,9.78433715 L18.6643019,10.3866858 L18.8250691,10.3280713 C18.8653196,10.3133707 18.9004508,10.2952885 18.9299928,10.2737307 C18.959488,10.25222 18.9829244,10.2228188 19.0001612,10.185715 C19.0108696,10.1627013 19.0171162,10.1269127 19.0189009,10.0779263 C19.0205917,10.0291279 19.0182434,9.987985 19.0119968,9.95459164 L19.0955976,9.92411021 L19.3329676,10.5761027 L19.2492729,10.6065841 C19.2337269,10.577183 19.2083648,10.5426624 19.1734215,10.5023649 C19.1384783,10.4625371 19.1097346,10.4365645 19.0872375,10.4248228 C19.0534684,10.4071163 19.0180555,10.3992729 18.9814214,10.4015743 C18.9447874,10.4034999 18.9047247,10.4126584 18.8614683,10.4284392 L18.7007951,10.4868189 L18.8646621,10.9372301 C18.881805,10.9843378 18.89876,11.0203613 18.9158089,11.0452536 C18.9328109,11.070193 18.9535232,11.0865844 18.977805,11.09424 C19.0013353,11.1014728 19.0297502,11.1014728 19.0634254,11.0944278 C19.0968657,11.087195 19.1412023,11.0735276 19.1963883,11.0535198 C19.2219382,11.0441264 19.2526075,11.0324317 19.2884431,11.0185765 C19.323997,11.0049562 19.3548072,10.991101 19.3806858,10.9776685 C19.410181,10.96278 19.436905,10.9467644 19.460999,10.9295276 C19.4850929,10.9127135 19.5012495,10.8945843 19.5093747,10.8757976 C19.5315431,10.8269991 19.5512691,10.7577701 19.568412,10.6678758 C19.5856488,10.5781693 19.5946194,10.5123219 19.59523,10.4705684 L19.6754492,10.441496 L19.6754492,10.441496 Z"/></svg>;
  }
};

Icon.contextTypes = {
  intl: PropTypes.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'PlatformSafari';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: PropTypes.string,
  colorIndex: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: PropTypes.bool
};

