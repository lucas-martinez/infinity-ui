export type StyledValueType<T extends string> = Record<T, string>

export type StyleModes = 'dark' | 'light';

export type StyledValue = StyledValueType<StyleModes>;

type Color = string | StyledValue;

export default Color;
