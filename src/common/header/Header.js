import React,{Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assests/logo.svg';
import Modal from 'react-modal';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            isModalOpen: false
        };
    }
    openModalHandler = () => {
        this.setState({isModalOpen: true});
    }

    closeModalHandler = () => {
        this.setState({isModalOpen: false});
    }

    render() {
        return <div>
<div className="header-outer-div">
            <div className="header-inner-icon-div">
                <img className="app-logo" src={logo} alt="movies-app-logo-icon"/>
            </div>
            <Button id="login-btn" variant="contained" onClick={this.openModalHandler}>Login</Button>
        </div>
        <Modal ariaHideApp={false} isOpen={this.state.isModalOpen} contentLabel="Login" onRequestClose={this.closeModalHandler}>
        </Modal>
        </div>
        
        
    }
}
export default Header;