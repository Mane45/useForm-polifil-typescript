import { useHttpGet } from '../../helpers/hooks'
import styles from './style.module.css'
export function Child() {
    <h2 className={styles.title}>Child</h2>
    const [loading, data] = useHttpGet('https://fakestoreapi.com/products')
    return <>
        <h1 className={styles.title}>Child</h1>
        {
            loading && <img style={{width:200}} src='https://loading.io/assets/mod/spinner/rolling/lg.gif'/>
        }

        {
            data && <p>{data?.length}</p>
        }
    </>
}