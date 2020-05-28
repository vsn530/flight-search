import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import {columnDef} from '../data/data';
import { connect } from 'react-redux';
import getFilteredData from '../data/FilterData'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import '../styles/Gridcomp.css';



const Grid = (props) => {
    
    const[columnDefs,setColumnDefs]= useState([...columnDef]);
    const gridOptions = {
        pagination:true,
        paginationPageSize :5,   
    }
    if(!props.isAuthenticated){
        return (
            <div></div>
        )
    }

    return (    

        <div id='griddiv'>
            {
                props.flightData.length > 0 ? (
                    
                    <div className='container'>
                        <p id="msg">{`Found ${props.flightData.length} flights information` }</p>
                        <div
                            className="ag-theme-balham"
                            style={{
                                height: '350px',
                                width: '100%'
                            }}
                        >
                            <AgGridReact
                                columnDefs={columnDefs}
                                rowData={props.flightData}
                                gridOptions = {gridOptions}>                                                           
                            </AgGridReact>
                        </div>
                    </div>
                ):undefined
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        flightData:getFilteredData(state.flightsData,state.searchData),
        isAuthenticated:state.userData.isAuthenticated
    }
    
}

export default connect(mapStateToProps)(Grid);