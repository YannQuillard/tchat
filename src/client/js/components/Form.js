import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Form extends Component {

    static PropsTypes = {
        submit: PropTypes.func,
        children: PropTypes.node
    }

    static defaultProps = {
        children: null,
    }

    render() {
        const {submit} = this.props;

        return (
            <form className='forms-form' onSubmit={submit}>
                {React.Children.toArray(this.props.children)}
            </form>
        );
    }
}

export default Form