/**
 * Created by supun on 15/03/18.
 */
import React,{Component} from 'react';
import {Col,Row} from 'reactstrap';
import PropTypes from 'prop-types';
import InspectionItemListComponent from '../../components/ListComponent/InspectionItemListComponent'
class InspectionItemListView extends Component{

    constructor(props){
        super(props)
    }
    render(){

        return(
            <Col>
                <Row>
                    <InspectionItemListComponent inspectionPlan={this.props.match.params.inspectionPlan} inspectionItemCardList={this.props.inspectionItemCardList} actions={this.props.actions.inspectionItemCardAction}/>
                </Row>
            </Col>
        );
    }
}

InspectionItemListView.propTypes = {
    inspectionItemCardList:PropTypes.object.isRequired,
    actions:PropTypes.shape({
        inspectionItemCardAction:PropTypes.object.isRequired,
    }),
}
export default InspectionItemListView