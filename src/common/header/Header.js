import React,{Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assests/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            isModalOpen: false,
            value: 0
        };
    }
    openModalHandler = () => {
        this.setState({isModalOpen: true,value: 0});
    }

    closeModalHandler = () => {
        this.setState({isModalOpen: false, value: 0});
    }
    tabChangeHandler = (event, value) => {
        this.setState({isModalOpen: true, value: value});
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
        <Tabs value={this.state.value} onChange={this.tabChangeHandler}>
            <Tab label="Login"/>
            <Tab label="Register"/>
        </Tabs>
        </Modal>
        </div>
        
        
    }
}
export default Header;