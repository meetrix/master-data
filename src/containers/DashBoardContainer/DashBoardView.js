/**
 * Created by supun on 15/03/18.
 */
import React,{Component} from 'react'
import {Col,Row,CardBody,Card,CardLink,CardTitle,CardSubtitle,CardGroup,CardImg,CardText,CardDeck} from 'reactstrap'
import PropTypes from 'prop-types'
import Widget02 from '../../components/Widgets/Widget02';
class DashBoardView extends Component{


    render(){
        return(
            <Col>
				<Row>
					<Col>
						<Row>
							<Col xs="12" sm="6" lg="3">
								<Widget02  mainText="User" link="/#/dashboard/user" icon="fa fa-user-o" color="primary" />
							</Col>
							<Col xs="12" sm="6" lg="3">
								<Widget02  mainText="Code" link="/#/dashboard/code" icon="fa fa-cube" color="info"/>
							</Col>
							<Col xs="12" sm="6" lg="3">
								<Widget02  mainText="CodeGroup" link="/#/dashboard/codegroup" icon="fa fa-cubes" color="warning"/>
							</Col>
							<Col xs="12" sm="6" lg="3">
								<Widget02  mainText="InspectionPlan" link="/#/dashboard/inspectionplan" icon="fa fa-vcard" color="danger"/>
							</Col>
						</Row>
					</Col>
        		</Row>
                
                {/* <Row>
                	<Col>
	                	<CardGroup tag="a" href="/#/dashboard/user">
		                	<Card>
		                		<CardBody>
		          					<CardText className="text-center">User</CardText>
		        				</CardBody>
		        			</Card>
		        			<Card>
		        				<CardBody>
		          					<CardImg top width="100%" src="/img/avatars/1.jpg" alt="Card image cap" />
		        				</CardBody>
		        			</Card>
	                	</CardGroup>
                	</Col>
                	<Col >
                		<CardGroup tag="a" href="/#/dashboard/code">
		                	<Card>
		                		<CardBody>
		          					<CardText className="text-center">Code</CardText>
		        				</CardBody>
		        			</Card>
		        			<Card>
		        				<CardBody>
		          					<CardImg top width="100%" src="/img/avatars/1.jpg" alt="Card image cap" />
		        				</CardBody>
		        			</Card>
	                	</CardGroup>
                	</Col>
                	<Col >
                		<CardGroup tag="a" href="/#/dashboard/codegroup">
		                	<Card>
		                		<CardBody>
		          					<CardText className="text-center">CodeGroup</CardText>
		        				</CardBody>
		        			</Card>
		        			<Card>
		        				<CardBody>
		          					<CardImg top width="100%" src="/img/avatars/1.jpg" alt="Card image cap" />
		        				</CardBody>
		        			</Card>
	                	</CardGroup>
                	</Col>

                </Row>
				<Row>
                    <Col >
                        <CardGroup tag="a" href="/#/dashboard/inspectionplan">
                            <Card>
                                <CardBody>
                                    <CardText className="text-center">InspectionPlan</CardText>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                    <CardImg top width="100%" src="/img/avatars/1.jpg" alt="Card image cap" />
                                </CardBody>
                            </Card>
                        </CardGroup>
                    </Col>
					<Col></Col>
                    <Col></Col>
				</Row> */}
                
            </Col>
        );
    }
}

DashBoardView.propTypes = {
    
}
export default DashBoardView