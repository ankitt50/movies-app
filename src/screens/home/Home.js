import React,{Component} from 'react';
import './Home.css';
import Header from '../../common/header/Header';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';


function TabContainer(props) {
    return (<Typography component="div" style={{padding:0}}>
        {props.children}
    </Typography>);
}

class Home extends Component {

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

        const customStyles = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
            }
        };

        return <div className="main-page-outermost-div">
            <Header openModalHandler={this.openModalHandler}/>;
            <Modal id="login-register-modal" ariaHideApp={false} isOpen={this.state.isModalOpen} contentLabel="Login" onRequestClose={this.closeModalHandler} style={customStyles}>
        <Tabs value={this.state.value} onChange={this.tabChangeHandler}>
            <Tab label="Login"/>
            <Tab label="Register"/>
        </Tabs>
        <TabContainer>
            <div className="form-control-container">
            <FormControl className="form-control-login" required>
                <InputLabel htmlFor="userName">Username</InputLabel>
                <Input id="userName" type="text"/>
            </FormControl>
            </div>
           <div className="form-control-container">
           <FormControl className="form-control-login" required>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input id="password" type="password"/>
            </FormControl>
           </div>
        </TabContainer>
        </Modal>
        </div>
    }
}

export default Home;