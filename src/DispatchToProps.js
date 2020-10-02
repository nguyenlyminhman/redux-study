import React, { Component } from 'react';
import { connect } from 'react-redux';

class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            edit: null
        }
    }

    render() {
        console.log(this.props.edit);

        return (
            <div>
                <button onClick={() => this.props.clickYub()} > Dispatch To Props</button>
                {this.props.edit}
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        edit: state.edit
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        clickYub: () => {
            dispatch({ type: 'CHANGE_EDIT_STATUS' })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);
