import 'react-dates/initialize';
import React, { Component } from 'react';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment/moment';
import Utils from '../../utils/Utils';
import Calendar from '../icons/Calendar';
import Close from `'../icons/Close';`
import styled from 'styled-components';

// Date Picker styled component styling
const DatePickerWrapper = styled.div`
    width: 100%;
`;
export default class SingleDatePickerComponent extends Component {
    state = { };
    onFocusChange = ({ focused }) => {
        this.setState({ focused });
    };
    onDateChange = (a) => {
        if (this.props.onDateChange && a) {
            this.props.onDateChange(moment(a));
        }
    };
    onClearDate = () => {
        if (this.props.onClearDate) {
            this.props.onClearDate();
        }
    };
    render() {
        const { focused } = this.state;
        const { calKey, enableOutsideDays, isOutsideRange, value } = this.props;
        return (
            <DatePickerWrapper>
                <SingleDatePicker
                   /* props here */
                />
            </DatePickerWrapper>
        );
    }
}


// the react-dates css i want to override are these classes:

.SingleDatePicker {
  width: 100%;
}

.SingleDatePickerInput {
  width: 100%;
}

.DateInput_input__focused {
  width: 100%;
  border-bottom: none !important;
}

.DateInput {
  width: 100% !important;
}

.SingleDatePickerInput__withBorder {
  border: none;
}

.DateInput_input__focused {
  width: 100%;
  border-bottom: 1px solid #ccc !important;
}