import ClipLoader from 'react-spinners/ClipLoader';
import styles from './styles.module.scss';

type Props = {
  loading: boolean;
};

const LoadingSpinner = ({ loading }: Props) => {
  return (
    <div className={styles.loadingSpinner} role="status">
      <ClipLoader color="#FF6E30" loading={loading} size={150} />
    </div>
  );
};

export default LoadingSpinner;
