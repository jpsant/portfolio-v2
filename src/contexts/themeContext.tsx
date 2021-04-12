/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from 'react';

export const ThemeContext = createContext<any | null>(null);

const ThemeContextProvider = (props: { children: JSX.Element }) => {
  const [theme, setTheme] = useState('dark');
  return <ThemeContext.Provider value={{ theme, setTheme }}>{props.children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
