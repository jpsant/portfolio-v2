import { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';
import Brightness5Icon from '@material-ui/icons/Brightness5';

import { ThemeContext } from '~contexts/themeContext';
import styles from './styles.module.scss';

const ThemeSwitcher = () => {
  const useStyles = makeStyles({
    switchBase: {
      color: '#FFF',
      '&$checked': {
        color: '#FFF'
      },
      '&$checked + $track': {
        backgroundColor: '#C5DAE4'
      }
    },
    checked: {},
    track: {}
  });

  const { theme, setTheme } = useContext(ThemeContext);
  const classes = useStyles();
  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <div className={styles.themeSwitcher}>
      <NightsStayOutlinedIcon fontSize="default" />
      <Switch
        disableRipple
        classes={{
          switchBase: classes.switchBase,
          track: classes.track,
          checked: classes.checked
        }}
        onChange={changeTheme}
      />
      <Brightness5Icon fontSize="default" />
    </div>
  );
};

export default ThemeSwitcher;
