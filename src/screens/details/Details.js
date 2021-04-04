import React, { Component } from 'react';
import Header from '../../common/header/Header';
import moviesData from '../../common/movieData.js';
import Typography from '@material-ui/core/Typography';
import './Details.css';
import Home from '../home/Home';
import YouTube from 'react-youtube';
import ReactDOM from 'react-dom';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import StarBorderIcon from '@material-ui/icons/StarBorder'
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';



function TabContainer(props) {
    return (<Typography component="div" style={{ padding: 0 }}>
        {props.children}
    </Typography>);
}
const styles = theme => (
    {
        gridListUpcomingMovies: {
            flexWrap: 'nowrap',
            transform: 'translateZ(0)'
        },
        gridListReleasedMovies: {
            width: '70%',
            height: 450,
        },
        gridListTileReleasedMovies: {
            margin: 15
        },
        formControl: {
            margin: theme.spacing.unit,
            minWidth: 240,
            maxWidth: 240
        },
        title: {
            color: theme.palette.primary.light,
        }
    }
)

class Details extends Component {
    constructor() {
        super();
        this.state = {
            movie: {},
            isModalOpen: false,
            value: 0,
            formHelperTextClassname: 'dispNone',
            formHelperTextClassnameForPsw: 'dispNone',
            userName: '',
            password: '',
            firstName: '',
            lastName: '',
            email: '',
            psw: '',
            contact: '',
            firstNameformHelperTextClassname: 'dispNone',
            lastNameformHelperTextClassname: 'dispNone',
            emailformHelperTextClassname: 'dispNone',
            pswformHelperTextClassname: 'dispNone',
            contactformHelperTextClassname: 'dispNone',
            starIcons: [{
                id: 1,
                stateId: "star1",
                color: "black"
            },
            {
                id: 2,
                stateId: "star2",
                color: "black"
            },
            {
                id: 3,
                stateId: "star3",
                color: "black"
            },
            {
                id: 4,
                stateId: "star4",
                color: "black"
            },
            {
                id: 5,
                stateId: "star5",
                color: "black"
            }]
        }
    }

    componentWillMount() {
        let currentState = this.state;
        currentState.movie = moviesData.filter((mov) => {
            return mov.id === this.props.movieId
        })[0];
        this.setState({ currentState });
        console.log(this.state);
    }

    backToHomeHandler = () => {
        ReactDOM.render(<Home />, document.getElementById('root'));
    }

    artistClickHandler = (url) => {
        window.location = url;
    }

    starClickHandler = (id) => {
        let starIconList = [];
        for (let star of this.state.starIcons) {
            let starNode = star;
            if (star.id <= id) {
                starNode.color = "yellow"
            }
            else {
                starNode.color = "black";

            }
            starIconList.push(starNode);
        }
        this.setState({ starIcons: starIconList });
    }

    registrationInputFieldChangeHandler = (e) => {
        console.log(e.target.id);
        if (e.target.id === 'lastName') {
            this.setState({ lastName: e.target.value });
        }
        if (e.target.id === 'firstName') {
            this.setState({ firstName: e.target.value });
        }
        if (e.target.id === 'email') {
            this.setState({ email: e.target.value });
        }
        if (e.target.id === 'psw') {
            this.setState({ psw: e.target.value });
        }
        if (e.target.id === 'contact') {
            this.setState({ contact: e.target.value });
        }
        console.log(e.target.value);
    }

    userNameInputFieldChangeHandler = (e) => {
        this.setState({ userName: e.target.value });
    }
    passwordInputFieldChangeHandler = (e) => {
        this.setState({ password: e.target.value });
    }

    registrationBtnClickHandler = () => {
        console.log(this.state.firstName);
        console.log(this.state.lastName);
        console.log(this.state.email);
        console.log(this.state.psw);
        console.log(this.state.contact);
        if (this.state.firstName === '') {
            this.setState({ firstNameformHelperTextClassname: 'dispBlock' });
        } else {
            this.setState({ firstNameformHelperTextClassname: 'dispNone' });
        }
        if (this.state.lastName === '') {
            this.setState({ lastNameformHelperTextClassname: 'dispBlock' });
        } else {
            this.setState({ lastNameformHelperTextClassname: 'dispNone' });
        }
        if (this.state.email === '') {
            this.setState({ emailformHelperTextClassname: 'dispBlock' });
        } else {
            this.setState({ emailformHelperTextClassname: 'dispNone' });
        }
        if (this.state.psw === '') {
            this.setState({ pswformHelperTextClassname: 'dispBlock' });
        } else {
            this.setState({ pswformHelperTextClassname: 'dispNone' });
        }
        if (this.state.contact === '') {
            this.setState({ contactformHelperTextClassname: 'dispBlock' });
        } else {
            this.setState({ contactformHelperTextClassname: 'dispNone' });
        }
    }

    openModalHandler = () => {
        this.setState({ isModalOpen: true, value: 0, formHelperTextClassname: 'dispNone', formHelperTextClassnameForPsw: 'dispNone', firstNameformHelperTextClassname: 'dispNone', lastNameformHelperTextClassname: 'dispNone', emailformHelperTextClassname: 'dispNone', pswformHelperTextClassname: 'dispNone', contactformHelperTextClassname: 'dispNone' });
    }

    closeModalHandler = () => {
        this.setState({ isModalOpen: false, value: 0, formHelperTextClassname: 'dispNone', formHelperTextClassnameForPsw: 'dispNone' });
    }
    tabChangeHandler = (event, value) => {
        this.setState({ isModalOpen: true, value: value, formHelperTextClassname: 'dispNone', formHelperTextClassnameForPsw: 'dispNone', firstNameformHelperTextClassname: 'dispNone', lastNameformHelperTextClassname: 'dispNone', emailformHelperTextClassname: 'dispNone', pswformHelperTextClassname: 'dispNone', contactformHelperTextClassname: 'dispNone' });
    }
    loginBtnClickHandler = () => {
        if (this.state.userName === '' && this.state.password === '') {
            this.setState({ formHelperTextClassname: 'dispBlock', formHelperTextClassnameForPsw: 'dispBlock' });
        }
        else if (this.state.userName === '') {
            this.setState({ formHelperTextClassname: 'dispBlock', formHelperTextClassnameForPsw: 'dispNone' });
        }
        else if (this.state.password === '') {
            this.setState({ formHelperTextClassname: 'dispNone', formHelperTextClassnameForPsw: 'dispBlock' });
        }
        else {
            this.setState({ formHelperTextClassname: 'dispNone', formHelperTextClassnameForPsw: 'dispNone' });
        }
    }

    render() {
        let movie = this.state.movie;
        const opts = {
            height: '300',
            width: '700',
            playerVars: {
                autoplay: 1
            }
        }
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
        return (
            <div className="details">
                <Header openModalHandler={this.openModalHandler} showBookShowButton="true" movieId={this.props.movieId}/>
                <div className="back">
                    <Typography onClick={this.backToHomeHandler}>
                        &#60; Back to Home
                        </Typography>
                </div>
                <div className="flex-containerDetails">
                    <div className="leftDetails">
                    <img src={movie.poster_url} alt={movie.title} />
                    </div>
                    <div className="middleDetails">
                    <div>
                            <Typography variant="headline" component="h2">{movie.title} </Typography>
                        </div>
                        <div>
                            <Typography>
                                <span className="bold">Genres: </span> {movie.genres.join(', ')}
                            </Typography>
                        </div>
                        <div>
                            <Typography>
                                <span className="bold">Duration: </span> {movie.duration}
                            </Typography>
                        </div>
                        <div>
                            <Typography>
                                <span className="bold">Release Date: </span> {new Date(movie.release_date).toDateString()}
                            </Typography>
                        </div>
                        <div>
                            <Typography>
                                <span className="bold">Rating: </span> {movie.critics_rating}
                            </Typography>
                        </div>
                        <div>
                            <Typography>
                                <span className="bold">Plot: </span><a href={movie.wiki_url}>Wiki Link</a> {movie.storyline}
                            </Typography>
                        </div>
                        <div className="trailerContainer">
                            <Typography>
                                <span className="bold">Trailer:</span>
                            </Typography>
                            <YouTube
                                videoId={movie.trailer_url.split("?v=")[1]}
                                opts={opts}
                                onReady={this._onReady}
                            />
                        </div>
                    </div>
                    <div className="rightDetails">

                    <Typography>
                            <span className="bold">Rate this movie: </span>
                        </Typography>
                        {this.state.starIcons.map(star => (
                            <StarBorderIcon
                                className={star.color}
                                key={"star" + star.id}
                                onClick={() => this.starClickHandler(star.id)}
                            />
                        ))}

                    <div className="bold marginBottom16 marginTop16">
                            <Typography>
                                <span className="bold">Artists:</span>
                            </Typography>
                        </div>
                        <div className="paddingRight">
                            <GridList cellHeight={160} cols={2}>
                                {movie.artists != null && movie.artists.map(artist => (
                                    <GridListTile
                                        className="gridTile"
                                        onClick={() => this.artistClickHandler(artist.wiki_url)}
                                        key={artist.id}>
                                        <img src={artist.profile_url} alt={artist.first_name + " " + artist.last_name} />
                                        <GridListTileBar
                                            title={artist.first_name + " " + artist.last_name}
                                        />
                                    </GridListTile>
                                ))}
                            </GridList>
                        </div>
                    </div>
                </div>
                <Modal id="login-register-modal" ariaHideApp={false} isOpen={this.state.isModalOpen} contentLabel="Login" onRequestClose={this.closeModalHandler} style={customStyles}>
                <Tabs value={this.state.value} onChange={this.tabChangeHandler}>
                    <Tab label="Login" />
                    <Tab label="Register" />
                </Tabs>
                <TabContainer>
                    {this.state.value === 0 && <div>
                        <div className="form-control-container">
                            <FormControl className="form-control-login" required>
                                <InputLabel htmlFor="userName">Username</InputLabel>
                                <Input id="userName" type="text" onChange={this.userNameInputFieldChangeHandler} />
                                <FormHelperText className={this.state.formHelperTextClassname} style={{ color: '#f05945' }}>required</FormHelperText>
                            </FormControl>
                        </div>
                        <div className="form-control-container">
                            <FormControl className="form-control-login" required>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input id="password" type="password" onChange={this.passwordInputFieldChangeHandler} />
                                <FormHelperText className={this.state.formHelperTextClassnameForPsw} style={{ color: '#f05945' }}>required</FormHelperText>
                            </FormControl>
                        </div>
                        <div className="form-control-container">
                            <Button variant="contained" color="primary" onClick={this.loginBtnClickHandler}>LOGIN</Button>
                        </div>
                    </div>}

                    {this.state.value === 1 && <div>
                        <div className="form-control-container">
                            <FormControl className="form-control-registeration" required>
                                <InputLabel htmlFor="firstName">First Name</InputLabel>
                                <Input id="firstName" type="text" onChange={this.registrationInputFieldChangeHandler} />
                                <FormHelperText className={this.state.firstNameformHelperTextClassname} style={{ color: '#f05945' }}>required</FormHelperText>
                            </FormControl>
                        </div>
                        <div className="form-control-container">
                            <FormControl className="form-control-registeration" required>
                                <InputLabel htmlFor="lastName">Last Name</InputLabel>
                                <Input id="lastName" type="text" onChange={this.registrationInputFieldChangeHandler} />
                                <FormHelperText className={this.state.lastNameformHelperTextClassname} style={{ color: '#f05945' }}>required</FormHelperText>
                            </FormControl>
                        </div>
                        <div className="form-control-container">
                            <FormControl className="form-control-registeration" required>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Input id="email" type="text" onChange={this.registrationInputFieldChangeHandler} />
                                <FormHelperText className={this.state.emailformHelperTextClassname} style={{ color: '#f05945' }}>required</FormHelperText>
                            </FormControl>
                        </div>
                        <div className="form-control-container">
                            <FormControl className="form-control-registeration" required>
                                <InputLabel htmlFor="psw">Password</InputLabel>
                                <Input id="psw" type="password" onChange={this.registrationInputFieldChangeHandler} />
                                <FormHelperText className={this.state.pswformHelperTextClassname} style={{ color: '#f05945' }}>required</FormHelperText>
                            </FormControl>
                        </div>
                        <div className="form-control-container">
                            <FormControl className="form-control-registeration" required>
                                <InputLabel htmlFor="contact">Contact</InputLabel>
                                <Input id="contact" type="text" onChange={this.registrationInputFieldChangeHandler} />
                                <FormHelperText className={this.state.contactformHelperTextClassname} style={{ color: '#f05945' }}>required</FormHelperText>
                            </FormControl>
                        </div>
                        <div className="form-control-container">
                            <Button variant="contained" color="primary" onClick={this.registrationBtnClickHandler}>REGISTER</Button>
                        </div>
                    </div>}
                </TabContainer>
            </Modal>
            </div>
        )
    }
}

export default Details;