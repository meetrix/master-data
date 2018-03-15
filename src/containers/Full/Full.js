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


import CardListContainer from '../../containers/CardListContainer/CardListContainer'
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
    componentDidMount(){
        console.log("Full")
        console.log(this.props)
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
                  <Route path="/dashboard/list" name="CardListContainer" component={CardListContainer}/>

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
