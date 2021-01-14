import {NavLink} from 'react-router-dom'


const MainMenu = (props) => {


    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/content-manager'>Content Manager</NavLink>
            <NavLink to='/partner'>Partner</NavLink>
            
        </div>
    )
}

export default MainMenu