import React, { useState, useEffect } from 'react';
import 'react-dates/initialize';
import moment from 'moment';
import { connect } from 'react-redux';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import '../styles/Searchcomp.css';


const FlightSearch = (props) => {

    const [sourceCity, setSourceCity] = useState(props.sourceCity)
    const [destCity, setDestCity] = useState(props.destCity)
    const [startDate, setStartDate] = useState(props.startDate)
    const [returnDate, setReturnDate] = useState(props.returnDate)
    const [focused, setFocused] = useState(false)
    const [retfocused, setretFocused] = useState(false)
    const[errorMsg,setErrorMsg] = useState('');

    const [cities, setCities] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(sourceCity == destCity){
            setErrorMsg('Source and Destination cannot be Same, Please Modify')
            return
        }
        setErrorMsg('');
        props.dispatch({type:'SET_FILTERS',
                payload:{
                    sourceCity,
                    destCity,
                    startDate,
                    returnDate
                }
            })
    }

    useEffect(() => {
        fetch('http://localhost:3001/cities',{})
        .then(res => res.json())
        .then(cities => setCities([...cities]))
        .catch(err => console.log(err))
    }, [])

    const onDateChange = (date)=>{
        // console.log(date);
        setReturnDate(moment(date.format('YYYY-MM-DD')).valueOf())
    }
    if(props.isAuthenticated){
        return (
            <div className='search'>
                <div className='container'>
                    <h1 id=''><span className='text-primary'>Plan</span> Your Travel</h1>                    
                    <div>
                        <form id='search-form' onSubmit={handleSubmit}>
                            <div className='box'>
                                <div id='form-control'>
                                    <label htmlFor='source' >Source City <small style={{"color":"red"}}>*</small></label>
                                    <select id='source' className='select-css' value={sourceCity} onChange={(e) => setSourceCity(e.target.value)}>
                                        <option value={undefined}>Select City</option>
                                        {
                                            cities.map((city) => <option key={city} value={city}>{city}</option>)
                                        }
                                    </select>
                                    
    
                                </div>
                                <div id='form-control'>
                                    <label htmlFor='destination' >Destination City <small style={{"color":"red"}}>*</small></label>
                                    <select id='destination' className='select-css' value={destCity} onChange={(e) => setDestCity(e.target.value)}>
                                        <option value={undefined}>Select City</option>
                                        {
                                            cities.map((city) => <option key={city} value={city}>{city}</option>)
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className='box'>
                                <div id='form-control'>
                                    <label htmlFor='traveldate'>Starting on <small style={{"color":"red"}}>*</small></label>
                                    <SingleDatePicker id='traveldate'
                                        date={startDate && moment(startDate)}
                                        onDateChange={(date) => { setStartDate(moment(date.format('YYYY-MM-DD')).valueOf()) }}
                                        focused={focused}
                                        onFocusChange={() => { setFocused(!focused) }}
                                        numberOfMonths={1}                                    
                                        showDefaultInputIcon
                                        inputIconPosition='before'
                                        withPortal={true}
                                        placeholder='Starting on'
                                        displayFormat='YYYY-MM-DD'                                                                        
                                    />
                                </div>
                                <div id='form-control'>
                                    <label htmlFor='returndate'>Returning on</label>
                                    <SingleDatePicker id='returndate'
                                        date={returnDate && moment(returnDate)}
                                        onDateChange={(date) => {onDateChange(date)}}
                                        focused={retfocused}
                                        onFocusChange={() => { setretFocused(!retfocused) }}
                                        numberOfMonths={1}
                                        showDefaultInputIcon
                                        inputIconPosition='before'
                                        withPortal={true}
                                        placeholder='Return on'
                                        displayFormat='YYYY-MM-DD'
                                        isOutsideRange={day => moment(startDate).diff(day)>0} 
                                    />
                                </div>
                            </div>
                            <div className='actions'>
                                <button type='submit' disabled={!(sourceCity && destCity && startDate)} className='btn'>Find availablity</button>
                                {errorMsg && <p id='error'><small style={{color:"red",marginRight:'5px'}}>*</small>{errorMsg}</p>}
                                
                            </div>
                            
    
                        </form>
                    </div>
                </div>
            </div>
    
        )
    }else{
        return (
            <div className='search'>
                <div className='container'>
                <h1 id=''><span className='text-primary'>Please </span>Login To Plan Your Travel</h1>
                </div>
            </div>
        )
        
    }

    
}

const mapStateToProps = (state) => {
    return {
        sourceCity: state.searchData.sourceCity,
        destCity: state.searchData.destCity,
        startDate: state.searchData.startDate,
        returnDate: state.searchData.returnDate,
        isAuthenticated:state.userData.isAuthenticated
    }
}

export default connect(mapStateToProps)(FlightSearch);