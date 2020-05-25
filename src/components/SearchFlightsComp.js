import React, { useState, useEffect } from 'react';
import 'react-dates/initialize';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import '../styles/Searchcomp.css';


const FlightSearch = (props) => {

    const [startDate, setStartDate] = useState(new moment())
    const [returnDate, setReturnDate] = useState(new moment())
    const [focused, setFocused] = useState(false)
    const [retfocused, setretFocused] = useState(false)

    const[cities,setCities] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    useEffect(()=>{
        fetch('http://localhost:3001/cities').then(res => res.json()).then(cities => setCities([...cities]))
    },[])

    return (
        <div className='search'>
            <div className='container'>
                <h1 id=''><span className='text-primary'>Plan</span> Your Travel</h1>
                <div>
                    <form id='search-form' onSubmit={handleSubmit}>
                        <div className='box'>
                            <div id='form-control'>
                                <label for='source' >Source City</label>
                                <select id='source' className='select-css' placeholder='Enter your source city'>
                                    {
                                        cities.map((city)=><option value={city}>{city}</option>)
                                    }
                                </select>
                                
                            </div>
                            <div id='form-control'>
                                <label for='destination' >Destination City</label>
                                <select id='destination' className='select-css' placeholder='Enter your source city'>
                                    {
                                        cities.map((city)=><option value={city}><li>{city}</li></option>)
                                    }
                                </select>
                            </div>
                        </div>
                        <div className='box'>
                            <div id='form-control'>
                                <label for='traveldate'>Starting on</label>
                                <SingleDatePicker id='traveldate'
                                    date={startDate}
                                    onDateChange={(date) => { setStartDate(moment(date)) }}
                                    focused={focused}
                                    onFocusChange={() => { setFocused(!focused) }}
                                    numberOfMonths={1}
                                    isOutsideRange={() => false}
                                    showDefaultInputIcon
                                    inputIconPosition='before'
                                    withPortal={true}
                                />
                            </div>
                            <div id='form-control'>
                                <label for='returndate'>Returning on</label>
                                <SingleDatePicker id='returndate'
                                    date={returnDate}
                                    onDateChange={(date) => { console.log(date); console.log(date.valueOf()); setReturnDate(moment(date)) }}
                                    focused={retfocused}
                                    onFocusChange={() => { setretFocused(!retfocused) }}
                                    numberOfMonths={1}
                                    isOutsideRange={() => false}
                                    showDefaultInputIcon
                                    inputIconPosition='before'
                                    withPortal={true}
                                />
                                { /*<input type='date' id='returndate' placeholder='Return On' />*/}
                            </div>
                        </div>
                        <button type='submit' className='btn'>Find availablity</button>

                    </form>
                </div>
            </div>
        </div>

    )
}

export default FlightSearch;