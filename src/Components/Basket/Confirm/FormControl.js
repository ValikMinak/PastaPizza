import React from "react";
import Input from "./Input";


const FormControl = (props) => {
    const { control, ...rest } = props;
    switch (control) {
        case'input':
            return <Input {...rest}/>;
        case'textarea':
        case'select':
        case'radio':
        case'checkbox':
        case'date':
    }
};

export default FormControl
