/**
 * Created by supun on 15/03/18.
 */
import React,{Component} from 'react'
import {Col,Row} from 'reactstrap'
import PropTypes from 'prop-types'
import CodeListComponent from '../../components/ListComponent/CodeListComponent'
class CodeListView extends Component{


    render(){
        return(
            <Col>
                <Row>
                    <CodeListComponent codeCardList={this.props.codeCardList} actions={this.props.actions.codeCardAction}/>
                </Row>
            </Col>
        );
    }
}

CodeListView.propTypes = {
    codeCardList:PropTypes.object.isRequired,
    actions:PropTypes.shape({
        codeCardAction:PropTypes.object.isRequired,
    }),
}
export default CodeListView