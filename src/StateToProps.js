import React, { Component } from 'react';
import { connect } from 'react-redux';

class StateToProps extends Component {

    constructor(props) {
        super(props);
    }


    clickYub = () => {
        var { dispatch } = this.props
        dispatch({ type: 'CHANGE_EDIT_STATUS' })
    }

    render() {
        console.log(this.props.edit);
        return (
            <div>
                <button onClick={() => this.clickYub()} > State To Props </button>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        edit: state.edit
    }
}

export default connect(mapStateToProps)(StateToProps);
