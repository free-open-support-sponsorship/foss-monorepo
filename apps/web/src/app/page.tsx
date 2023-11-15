import { Card } from 'ui';
import styles from './page.module.scss';

export default function Page(): JSX.Element {
    return (
        <main className={styles.main}>
            <Card>LiberFund</Card>
        </main>
    );
}
