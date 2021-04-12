import ThemeContextProvider from '../themeContext';

const Providers = (props: { children: JSX.Element }) => {
  return <ThemeContextProvider>{props.children}</ThemeContextProvider>;
};

export default Providers;
