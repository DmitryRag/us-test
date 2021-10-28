import { useDispatch, useSelector } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { LOGIN, PASSWORD } from '../../constants/constants'
import { login } from '../../features/actions'
import './Login.css'

const Login = () => {
    const state = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const handlerLogin = (e) => {
        dispatch(login(LOGIN, e.target.value))
        console.log(state.login)
    }

    const handlerPassword = (e) => {
        dispatch(login(PASSWORD, e.target.value))
        console.log(state.password)
    }

    return (
        <div className='login'>
            <form className='form__login'>
                <h1>Login here:</h1>
                <input 
                    className='form__input'
                    placeholder='login name' 
                    onChange={handlerLogin}
                />
                <input
                    className='form__input'
                    placeholder='password'
                    onChange={handlerPassword}    
                />
                <Link
                    className={`form__link ${
                        state.login === 'developer21' 
                        && 
                        state.password === '123456' 
                        ? '' 
                        : 'form__link_disabled '}`}
                    to='/profile'
                >
                    Login
                </Link>
            </form>
        </div>
    )
}

export default withRouter(Login)