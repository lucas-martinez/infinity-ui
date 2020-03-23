import * as React from 'react';

export type ThemeValue = Record<string, any>;

export interface ThemeContextI extends React.Context<ThemeValue> {
  Extend: React.FC<{ value: ThemeValue }>;
}

declare const ThemeContext: ThemeContextI;

export { ThemeContext };
