import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../common/header/Header';
import Typography from '@material-ui/core/Typography';
import './BookShow.css';
import Home from '../home/Home';
import language from '../../common/language';
import location from '../../common/location';
import showDate from '../../common/showDate';
import showTime from '../../common/showTime';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

class BookShow extends Component {

    constructor() {
        super();
        this.state = {
            location: "",
            language: "",
            time: "",
            date: "",
            tickets: 0,
            unitPrice: 500,
            availableTickets: 20
        }
    }

    backToDetailsHandler = () => {
        ReactDOM.render(<Home />, document.getElementById('root'));
    }

    ticketsChangeHandler = (event) => {
        this.setState({ tickets: event.target.value })
    }

    locationChangeHandler = event => {
        this.setState({ location: event.target.value });
    }
    languageChangeHandler = event => {
        this.setState({ language: event.target.value });
    }
    timeChangeHandler = event => {
        this.setState({ time: event.target.value });
    }
    dateChangeHandler = event => {
        this.setState({ date: event.target.value });
    }

    render() {
        return (
            <div>
                <Header />
                <div className="bookShow">
                    <Typography className="back" onClick={this.backToDetailsHandler}>
                        &#60; Back to Movie Details
                    </Typography>

                    <Card className="cardStyle">
                        <CardContent>
                            <Typography variant="headline" component="h2">
                                BOOK SHOW
                            </Typography><br />

                            <FormControl required className="formControl">
                                <InputLabel htmlFor="location">Choose Location:</InputLabel>
                                <Select
                                    value={this.state.location}
                                    onChange={this.locationChangeHandler}
                                >
                                    {location.map(loc => (
                                        <MenuItem key={"loc" + loc.id} value={loc.location}>
                                            {loc.location}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl required className="formControl">
                                <InputLabel htmlFor="language">Choose Language:</InputLabel>
                                <Select
                                    value={this.state.language}
                                    onChange={this.languageChangeHandler}
                                >
                                    {language.map(lan => (
                                        <MenuItem key={"lan" + lan.id} value={lan.language}>
                                            {lan.language}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl required className="formControl">
                                <InputLabel htmlFor="date">Show Date:</InputLabel>
                                <Select
                                    value={this.state.date}
                                    onChange={this.dateChangeHandler}
                                >
                                    {showDate.map(date => (
                                        <MenuItem key={"date" + date.id} value={date.showDate}>
                                            {date.showDate}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl required className="formControl">
                                <InputLabel htmlFor="time">Show Time:</InputLabel>
                                <Select
                                    value={this.state.time}
                                    onChange={this.timeChangeHandler}
                                >
                                    {showTime.map(time => (
                                        <MenuItem key={"time" + time.id} value={time.showTime}>
                                            {time.showTime}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <br /><br />
                            <FormControl required className="formControl">
                                <InputLabel htmlFor="tickets">Tickets: ( {this.state.availableTickets} available )</InputLabel>
                                <Input id="tickets" value={this.state.tickets !== 0 ? this.state.tickets : ""} onChange={this.ticketsChangeHandler} />
                            </FormControl>
                            <br /><br />
                            <Typography>
                                Unit Price: Rs. {this.state.unitPrice}
                            </Typography>
                            <br />
                            <Typography>
                                Total Price: Rs. {this.state.unitPrice * this.state.tickets}
                            </Typography>
                            <br /><br />
                            <Button variant="contained" onClick={this.bookShowButtonHandler} color="primary">
                                BOOK SHOW
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}
export default BookShow;