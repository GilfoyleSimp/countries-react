import '../Navigation/navigation.styles.css';
import HomeLogo from '../../assets/el-classico-logo.png';
import { Link, Outlet } from "react-router-dom";
import { Fragment } from 'react';

const Navigation = () => {
    return (

        <Fragment>
        <div className="nav-container">
            <div className="nav-items">
                <Link className="nav-anchor" to='/'>
                    {/* <img src={HomeLogo} className='home-logo'/> */}
                    Home
                </Link>

                <div className='nav-anchor right' >
                    <Link className="nav-anchor" to='/about'>About</Link>
                </div>
            </div>
            
        </div>
        <Outlet/>
    </Fragment>

    );
    
}

export default Navigation;