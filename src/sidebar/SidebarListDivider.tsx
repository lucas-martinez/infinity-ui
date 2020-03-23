import styled, { css } from 'styled-components';

const SidebarListDivider = styled.div`
  ${props => css`
    display: flex;
    align-items: center;
    color: ${props.theme?.sidebar?.colors?.muted};
    cursor: default;
    font-size: 9px;
    font-weight: lighter;
    height: 11px;
    letter-spacing: .1em;
    text-align: center;
    text-transform: uppercase;
    &::before,
    &::after {
      content: '';
      flex: 1;
      border-bottom: 1px solid ${props.theme?.sidebar?.colors?.muted}};
      &::before {
        margin-left: .75em;
        margin-right: ${props.children ? '.5em' : '0'};
      }
      &::after {
        margin-left: ${props.children ? '.5em' : '0'};
        margin-right: .75em;
      }
    }
  `}
`;

export default SidebarListDivider;
