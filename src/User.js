


export default function User({ name, phone, id, deleteUser }) {
    return (
        <article className='user'>
            <div>
                <h1>{name}</h1>
                <p>{phone}</p>
            </div>
            <button className='delete-user-btn' onClick={() => deleteUser(id)}>delete user</button>
        </article>
    )
}