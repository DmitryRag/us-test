import './Profile.css'

const Profile = ({ login }) => {
    return (
        <dev className='profile'>
            <h1>Hello, <span className='profile__name'>{login}</span></h1>
        </dev>        
    )
}

export default Profile