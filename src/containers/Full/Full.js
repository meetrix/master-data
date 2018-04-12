import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import { Widget } from 'react-chat-widget';


import UserListContainer from '../../containers/CardListContainer/UserlistContainer';
import CodeListContainer from '../../containers/CardListContainer/CodeListContainer';
import InspectionPlanListContainer from '../../containers/CardListContainer/InspectionPlanListContainer';
import CodeGroupListContainer from '../../containers/CardListContainer/CodeGroupListContainer';
import InspectionItemListContainer from '../../containers/CardListContainer/InspectionItemListContainer';
import InspectionItemProblemCodeListContainer from '../../containers/CardListContainer/InspectionItemProblemCodeListContainer/InspectionItemProblemCodeListContainer';
import InspectionItemReasonCodeListContainer from '../../containers/CardListContainer/InspectionItemReasonCodeListContainer/InspectionItemReasonCodeListContainer';
import DashBoardContainer from '../../containers/DashBoardContainer/DashBoardContainer';



const mapStateToProps=(state)=>{
    return {

    }

}
const mapDispatchToProps = (dispatch) => ({
    actions:{
    }
})

class Full extends Component {

    constructor(props){
        super(props)
    }
  render() {
    return (
      <div className="app">

        <Header {...this.props}/>
        <div className="app-body">

          <Sidebar {...this.props}/>
          <main className="main">
            {/*<Breadcrumb />*/}
            <Container fluid>
              <Switch>
                  
                  <Route path="/dashboard/user" name="UserListContainer" component={UserListContainer}/>
                  <Route path="/dashboard/code" name="CodeListContainer" component={CodeListContainer}/>
                  <Route path="/dashboard/codegroup" name="CodeGroupListContainer" component={CodeGroupListContainer}/>
                  <Route path="/dashboard/inspectionplan" name="InspectionPlanListContainer" component={InspectionPlanListContainer}/>
                  <Route exact path="/dashboard/inspectionitem/:inspectionPlan" name="InspectionItemListContainer" component={InspectionItemListContainer}/>
                  <Route exact path="/dashboard/inspectionitemcodes/p/:inspectionPlan/:inspectionSubItem" name="InspectionItemProblemCodeListContainer" component={InspectionItemProblemCodeListContainer}/>
                  <Route exact path="/dashboard/inspectionitemcodes/r/:inspectionPlan/:inspectionSubItem" name="InspectionItemProblemCodeListContainer" component={InspectionItemReasonCodeListContainer}/>
                  <Route path="/dashboard" name="DashBoardContainer" component={DashBoardContainer}/>

              </Switch>
            </Container>

          </main>
          {/*<Aside />*/}
        </div>
        {/*<Footer*/}
            {/*applicationName="Consult"*/}
            {/*organization="Meetrix"*/}
            {/*copyrightYear="2018"*/}
            {/*poweredByText="Meetrix"*/}
        {/*/>*/}
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Full);
