import React, {Component} from 'react'
import PropTypes from 'prop-types'

class FieldWrapper extends Component {

    static propTypes = {
        error: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element
        ]),
        required: PropTypes.bool,
        label: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element
        ]),
        className: PropTypes.string.isRequired,
        children: PropTypes.node,
    }

    static defaultProps = {
        children: null
    }

    render() {
        const {required, label, className, ...props} = this.props;
        return (
            <div className={`form-fields ${className}`} {...props}>
                {required || label ?
                    <div className="forms-required-label-wrapper">
                        {label ? <label className="forms-label">{label}</label> : null}
                        {required ? <span className="forms-required-star">* </span> : null}
                    </div> :
                    null
                }
                {React.Children.toArray(this.props.children)}
            </div>
        );
    }
}

export default FieldWrapper
