import ThemeType from '../../js/components/Theme/ThemeType';
import SidebarTheme from '../../sidebar/SidebarTheme';
import {
  BreadcrumbsLinkTheme,
  BreadcrumbsSeparationTheme,
  BreadcrumbsTheme,
} from '../../themes/cobalt/breadcrumbs';
import { ControlTheme } from '../../themes/cobalt/control';
import { FormTheme } from '../../themes/cobalt/form';
import { GridTheme } from '../../themes/cobalt/grid';
import AlertTheme from '../AlertQ/AlertTheme';

export default interface ExtendedTheme extends ThemeType {
  alert: AlertTheme;
  alertDanger: AlertTheme;
  alertError: AlertTheme;
  alertGeneral: AlertTheme;
  alertInfo: AlertTheme;
  alertInverse: AlertTheme;
  alertInverseCrossInterface: AlertTheme;
  alertInverseDanger: AlertTheme;
  alertInverseError: AlertTheme;
  alertInverseInfo: AlertTheme;
  alertInverseSuccess: AlertTheme;
  alertInverseWarning: AlertTheme;
  alertLarge: AlertTheme;
  alertOverlay: AlertTheme;
  alertSuccess: AlertTheme;
  alertWarning: AlertTheme;
  breadcrumbs: BreadcrumbsTheme;
  breadcrumbsLink: BreadcrumbsLinkTheme;
  breadcrumbsSeparation: BreadcrumbsSeparationTheme;
  control: ControlTheme;
  form: FormTheme;
  grid: GridTheme;
  code: Record<string, any>;
  paper: Record<string, any>;
  sidebar: SidebarTheme;
}

