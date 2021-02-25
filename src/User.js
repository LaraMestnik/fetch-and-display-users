


export default function User({ name, phone }) {
    return (
        <article className='user'>
            <h1>{name}</h1>
            <h3>{phone}</h3>
        </article>
    )
}