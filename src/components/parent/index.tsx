import { useForm } from '../../helpers/hooks'
import styles from './style.module.css'

interface IFormInput {
    name: string;
    age: string;
}

export function Parent() {
    const { handleSubmit, register, errors } = useForm<IFormInput>()
    const handleAdd = (data: IFormInput):void => {
        console.log(data)
    }
    return <>
        <h2 className={styles.title}>Parent</h2>
        <form onSubmit={handleSubmit(handleAdd)}>
            <div>
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                <input
                    {...register('name', { required: 'please fill name' })}
                />
            </div>

            <div>
                {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}
                <input
                    {...register('age', { required: 'please fill age' })}
                />
            </div>
            <button type="submit">save</button>
        </form>

    </>
}