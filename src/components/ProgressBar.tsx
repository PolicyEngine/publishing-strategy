import { useScrollProgress } from '../hooks/useScrollProgress';
import styles from './ProgressBar.module.css';

export function ProgressBar() {
  const progress = useScrollProgress();

  return (
    <div className={styles.progressBar} style={{ width: `${progress}%` }} />
  );
}
