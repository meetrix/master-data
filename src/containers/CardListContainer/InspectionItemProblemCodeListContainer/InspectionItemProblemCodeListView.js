/**
 * Created by supun on 15/03/18.
 */
import React,{Component} from 'react';
import {Col,Row} from 'reactstrap';
import PropTypes from 'prop-types';
import InspectionItemProblemCodeListComponent from '../../../components/ListComponent/InspectionItemProblemCodeListComponent/InspectionItemProblemCodeListComponent'
class InspectionItemProblemCodeListView extends Component{


    render(){
        return(
            <Col>
                <Row>
                    <InspectionItemProblemCodeListComponent inspectionPlan={this.props.match.params.inspectionPlan} inspectionSubItem={this.props.match.params.inspectionSubItem} inspectionItemProblemCodeCardList={this.props.inspectionItemProblemCodeCardList } actions={this.props.actions.inspectionItemProblemCodeCardAction} />
                </Row>
            </Col>
        );
    }
}

InspectionItemProblemCodeListView.propTypes = {
    inspectionItemProblemCodeCardList:PropTypes.object.isRequired,
    actions:PropTypes.shape({
        inspectionItemProblemCodeCardAction:PropTypes.object.isRequired,
    }),
}
export default InspectionItemProblemCodeListView