import React, {Component} from "react";
import PropTypes from 'prop-types';
import FieldWrapper from "./FieldWrapper";

class TextInput extends Component {

    static propsTypes = {
        name: PropTypes.string,
        className: PropTypes.string,
        type: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.func,
            PropTypes.object,
            PropTypes.array,
        ]),
        label: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element
        ]),
        placeholder: PropTypes.string,
        required: PropTypes.bool,
        change: PropTypes.func,
        value: PropTypes.string
    }

    static defaultProps = {
        className: 'forms-text-input',
        placeholder: '',
        required: false,
        value: ''
    }

    render() {
        const {className, required, placeholder, label, name, type, change, value} = this.props;

        return (
          <FieldWrapper className={className} required={required} label={label}>
              <input type={type} name={name} placeholder={placeholder} onChange={change} value={value}/>
          </FieldWrapper>
        );
    }
}

export default TextInput;