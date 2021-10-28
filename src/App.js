import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch,  Route} from 'react-router-dom'
import Profile from './components/Profile/Profile'
import Login from './components/Login/Login'
import './App.css'

function App() {
    const state = useSelector(state => state.auth)

    return (
        <div className='App'>
            <Router>
                <Switch>
                    <Route path='/profile'>
                        <Profile login={state.login} />
                    </Route>
                    <Route path='/'>
                        <Login />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App