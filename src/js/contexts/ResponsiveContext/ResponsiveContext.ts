import React from 'react';

export type ResponsiveValue = string;

export const ResponsiveContext = React.createContext<ResponsiveValue | undefined>(undefined);
