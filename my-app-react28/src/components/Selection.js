import React from "react";
import {useSelector} from "react-redux/es/exports";
import Select from "react-select";

const Selection = ({ ...props }) => {
    const options = useSelector((state) => state.dropDownReducer);
    return (
        <Select 
            placeholder="Select user"
            fluid
            selection
            options={options}
            {...props}
        />
    );
};
export default Selection;