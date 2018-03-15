/**
 * Created by supun on 07/02/18.
 */
import React,{Component} from 'react';
import Spinner from 'react-spinkit'
import {connect} from 'react-redux'

function mapStateToProps(state){
    return {
        spinner:state.spinner,
    }

}

class SpinnerComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            spinner:this.props.spinner
        }
    }

    render(){
        if(this.state.spinner){
            return(
                <div>spinner</div>

            );
        }


    }


}