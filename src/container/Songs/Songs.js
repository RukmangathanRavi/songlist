import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickedsong } from '../../Action/index';
import Selectedsong from './Selectedsong';
import classes from './selectedsong.css'

class Songs extends Component {
    render() {
        console.log(this.props);
        const { st, clic } = this.props;
        console.log(typeof clic);
        console.log(st);
        const songlist = st.songs.map((d, index) =>
            <div key={d.id} className={classes.dsplvertical}>
                <h1>Label:{d.id}</h1>
                <h1>Name: {d.Name}</h1>
                <button onClick={clic.bind(this, d.id)}>Info</button>
            </div>
        )

        return (
            <div className={classes.dspl}>
                {/* <table>
                    <thead>
                        <tr>Number</tr>
                        <tr>Name of Song</tr>
                        <tr>Select</tr>
                    </thead>
                </table> */}
                {songlist}
                {/* {this.props.st.songs.map((data, index) =>
                    (<div key={data.id} className={classes.dsplvertical}>
                        <h1>Label:{data.id}</h1>
                        <h1>Name: {data.Name}</h1>
                        <button onClick={clic.bind(this, data.Name)}>Info</button>
                    </div>)} */}

                < Selectedsong />
            </div>
        )
    }
}


const mapstatetoprops = (state) => {
    return { st: state.Listsong }
}

const mapdispatchprops = (dispatch) => {
    // return bindActionCreators(clickedsong, dispatch)
    return {
        clic: (a) => dispatch(clickedsong(a))
    }
}

export default connect(mapstatetoprops, mapdispatchprops)(Songs)