import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import {columnDef, rowDatainitial} from '../data/data';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import '../styles/Gridcomp.css';



const Grid = (props) => {
    
    const[columnDefs,setColumnDefs]= useState([...columnDef]);
    const[rowData,setRowData]= useState([...rowDatainitial]);


    return (

        <div id='griddiv'>
            <div className='container'>
                <p>Available Flights...</p>
                <div
                    className="ag-theme-balham"
                    style={{
                        height: '350px',
                        width: '100%'
                    }}
                >
                    <AgGridReact
                        columnDefs={columnDefs}
                        rowData={rowData}>                        
                    </AgGridReact>
                </div>
            </div>

        </div>
    )
}

export default Grid;