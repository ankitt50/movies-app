import React,{Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assests/logo.svg';

class Header extends Component {
    
    render() {
        return <div className="header-outer-div">
            <div className="header-inner-icon-div">
                <img className="app-logo" src={logo} alt="movies-app-logo-icon"/>
            </div>
            <Button id="login-btn" variant="contained" onClick={this.props.openModalHandler}>Login</Button>
        </div>
    }
}
export default Header;