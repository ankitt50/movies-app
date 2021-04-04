import React,{Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assests/logo.svg';
import ReactDOM from 'react-dom';
import BookShow from '../../screens/bookShow/BookShow.js';

class Header extends Component {
    

    bookShowHandler = (e) => {
        ReactDOM.render(<BookShow movieId={this.props.movieId}/>, document.getElementById('root'));
    }

    render() {
        return <div className="header-outer-div">
            <div className="header-inner-icon-div">
                <img className="app-logo" src={logo} alt="movies-app-logo-icon"/>
            </div>
            <div className="header-inner-right-div">
            <div>
            <Button id="login-btn" variant="contained" onClick={this.props.openModalHandler}>Login</Button>
            </div>
            <div>
            {this.props.showBookShowButton === "true" ?
                        <div className="bookshow-button">
                            <Button variant="contained" color="primary" onClick={this.bookShowHandler}>
                                Book Show
                            </Button>
                        </div>
                        : ""}
            </div>
            </div>
            
            
        </div>
    }
}
export default Header;