import { ThemeContext } from '~contexts/themeContext';
import { useContext } from 'react';

import ClipLoader from 'react-spinners/ClipLoader';
import styles from './styles.module.scss';

type Props = {
  loading: boolean;
};

const LoadingSpinner = ({ loading }: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.loadingSpinner} role="status">
      <ClipLoader color={theme === 'dark' ? '#FF6E30' : '#4E7D96'} loading={loading} size={150} />
    </div>
  );
};

export default LoadingSpinner;
