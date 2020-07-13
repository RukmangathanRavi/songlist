import React, { Component } from 'react';
import { connect } from 'react-redux'


class Selectedsong extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                {this.props.state.map(a => <div key={a.id}>{a.Name}</div>)}
            </div>
        )
    }
}


const mapdispatchtoprops = (state) => {
    return {
        state: state.selectedsong
    }
}

export default connect(mapdispatchtoprops)(Selectedsong)