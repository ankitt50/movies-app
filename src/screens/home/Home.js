import React, { Component } from 'react';
import './Home.css';
import Header from '../../common/header/Header';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import moviesData from '../../common/movieData.js';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import genres from '../../common/genres';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Checkbox, ListItemText } from '@material-ui/core';


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

class Home extends Component {

    constructor() {
        super();
        this.state = {
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
            movieName: '',
            genres: []
        };
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

    userNameInputFieldChangeHandler = (e) => {
        this.setState({ userName: e.target.value });
    }
    passwordInputFieldChangeHandler = (e) => {
        this.setState({ password: e.target.value });
    }

    movieNameChangeHandler = (e) => {
        this.setState({ movieName: e.target.value });
    }

    genresSelectHandler = (e) => {
        this.setState({genres: e.target.value});
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

    render() {

        const { classes } = this.props;

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
            <Header openModalHandler={this.openModalHandler} />
            <div className="sub-heading-in-pink">
                <h5 id="upcoming-movies-title">Upcoming Movies</h5>
            </div>
            <GridList className={classes.gridListUpcomingMovies} cols={5}>
                {moviesData.map(movie => (
                    <GridListTile key={movie.id}>
                        <img src={movie.poster_url} alt={movie.title} className="movie-poster" />
                        <GridListTileBar title={movie.title} />
                    </GridListTile>
                ))}
            </GridList>
            <div className="bottom-container">
                <GridList className={classes.gridListReleasedMovies} cols={4}>
                    {moviesData.map(movie => (
                        <GridListTile key={movie.id} className={classes.gridListTileReleasedMovies}>
                            <img src={movie.poster_url} alt={movie.title} className="movie-poster" />
                            <GridListTileBar title={movie.title} subtitle={<span>Release Date: {new Date(movie.release_date).toDateString()}</span>} />
                        </GridListTile>
                    ))}
                </GridList>
                <Card className="movie-filter-card">
                    <CardContent>
                        <FormControl className={classes.formControl}>
                            <Typography className={classes.title} color="textSecondary">
                                Find Movies:
                    </Typography>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="movieName">Movie Name</InputLabel>
                            <Input id="movieName" onChange={this.movieNameChangeHandler} />
                        </FormControl>
                        <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="select-multiple-checkbox">Genres</InputLabel>
                            <Select
                            multiple
                            input={<Input id="select-multiple-checkbox"/>}
                            renderValue={selected => selected.join(',')}
                            value={this.state.genres}
                            onChange={this.genresSelectHandler}
                            >
                                <MenuItem value="0">None</MenuItem>
                                {
                                    genres.map(genre => (
                                        <MenuItem key={genre.id} value={genre.name}>
                                            <Checkbox checked={this.state.genres.indexOf(genre.name) > -1} />
                                            <ListItemText primary={genre.name} />
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </CardContent>
                </Card>
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
    }
}

export default withStyles(styles)(Home);