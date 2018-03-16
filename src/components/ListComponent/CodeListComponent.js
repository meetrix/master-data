/**
 * Created by supun on 14/03/18.
 */
import React,{Component} from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames';
import {
    Col,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    InputGroup,Input
} from 'reactstrap';

import CodeCardComponent from './CodeCardComponent'


class CodeListComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            collapseAddCard:false
        }
        this.inputs = {};
    }
    componentDidMount(){

        this.props.actions.getAllCodes();
    }
    toggleCollapseAddCard(e){
        e.preventDefault();
        this.setState((prevState, props) => ({
            collapseAddCard: ! prevState.collapseAddCard
        }));
    }
    handlerInput(e){
        this.inputs = this.inputs || {};
        this.inputs[e.target.name] = e.target.value
    }
    createCode(){
        this.props.actions.createCode(this.inputs)
        this.inputs={}
    }
    getCardsElement(){
        let codeCards = this.props.codeCardList.codes;
        return (
            codeCards.map((codeCard, index) =>

                <CodeCardComponent  key={index}
                                    code={codeCard}
                                    actions={this.props.actions}
                />

            )
        )
    }
    render(){
        return(

            <Col >
                <Card>
                    <CardHeader>
                        <strong>{this.props.codeCardList.title}</strong>
                    </CardHeader>
                    <CardBody>
                        {this.getCardsElement()}
                    </CardBody>
                    <CardFooter>
                        <Card>
                            <CardHeader>
                                <strong>List Group</strong>
                                <div className="card-actions">
                                    <a  onClick={this.toggleCollapseAddCard.bind(this)} className={classnames({ collapsed: this.state.collapseAddCard==true,"btn-minimize":true })}  data-toggle="collapse" data-target="#collapseExample" aria-expanded={!this.state.collapseAddCard}><i className="icon-arrow-up"></i></a>
                                    <a  onClick={this.createCode.bind(this)} className="btn-close" ><i className="fa fa-check-circle"></i></a>
                                </div>
                            </CardHeader>
                            <CardBody className={classnames({ "show" : this.state.collapseAddCard==false,collapse:true })}>
                                <InputGroup>
                                    <Input placeholder="Code" name="code"  onChange={this.handlerInput.bind(this)}/>
                                </InputGroup>
                                <InputGroup>
                                    <Input placeholder="CodeType" name="codeType" onChange={this.handlerInput.bind(this)}/>
                                </InputGroup>
                                <InputGroup>
                                    <Input placeholder="CodeGroup" name="codeGroup" onChange={this.handlerInput.bind(this)} />
                                </InputGroup>
                                <InputGroup>
                                    <Input placeholder="Description" name="description" onChange={this.handlerInput.bind(this)}/>
                                </InputGroup>

                            </CardBody>
                        </Card>

                    </CardFooter>
                </Card>
            </Col>
        );
    }
}
CodeListComponent.propTypes={
    codeCardList:PropTypes.shape({
        title: PropTypes.string.isRequired,
        codes:PropTypes.array.isRequired
    }),

    actions: PropTypes.shape({
        getAllCodes: PropTypes.func.isRequired,
        createCode:PropTypes.func.isRequired,
        deleteCode:PropTypes.func.isRequired,
        updateCode:PropTypes.func.isRequired,
    })


}
export default CodeListComponent/**
 * Created by supun on 14/03/18.
 */
