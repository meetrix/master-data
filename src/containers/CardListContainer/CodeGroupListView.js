/**
 * Created by supun on 15/03/18.
 */
import React,{Component} from 'react';
import {Col,Row} from 'reactstrap';
import PropTypes from 'prop-types';
import CodeGroupListComponent from '../../components/ListComponent/CodeGroupListComponent';
class CodeGroupListView extends Component{


    render(){
        return(
            <Col>
                <Row>
                    <CodeGroupListComponent codeGroupCardList={this.props.codeGroupCardList } actions={this.props.actions.codeGroupCardAction}/>
                </Row>
            </Col>
        );
    }
}

CodeGroupListView.propTypes = {
    codeGroupCardList:PropTypes.object.isRequired,
    actions:PropTypes.shape({
        codeGroupCardAction:PropTypes.object.isRequired,
    }),
}
export default CodeGroupListView