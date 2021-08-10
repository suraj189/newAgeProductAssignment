import React, { useState } from 'react'
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";


const DataTable = (props) => {
    return (
        <div>
            
            <BootstrapTable
                keyField="id"
                data={props.products}
                columns={props.columns}
            />
        </div>
    )
}

export default DataTable
