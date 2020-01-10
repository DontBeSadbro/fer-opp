import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from "./components/Header";
import Login from "./components/Login/Login";
import './App.css';
import Home from './components/Home/Home';
import Cookies from 'js-cookie'
import ErrorComponent from './components/ErrorComponent';
import RegisterClass from './components/Register/register';
import createBandForm from './components/createBandForm'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ProfileClass from './components/Profile/Profile';
import {DisplayBands} from "./components/Display/DisplayBands";
import {DisplayGigs} from "./components/Display/DisplayGigs";
import CreateGig from './components/CreateGig'
import InviteToGig from './components/InviteToGig'
import AcceptGigInvite from './components/AcceptGigInvite'
import ChangeProfileType from './components/Profile/ChangeProfileType';
import BandCreate from './components/Band/BandCreate';
import BandView from './components/Band/BandView';
import InviteToBand from './components/Band/InviteToBand'
import AcceptBandInvite from './components/Band/AcceptBandInvite'
import EditGig from './components/EditGig'

import WelcomePage from "./components/WelcomePage/WelcomePage";

function App() {

  const isLoggedIn = Cookies.get('Bearer')? true : false;
  return (
    <BrowserRouter>
      <Header
      isLoggedIn={isLoggedIn}/>
      <div className="App">
        <Switch>
          <Route path='/home'
            render={() => (
              isLoggedIn?
              <Home/> : 
              <Modal show={true} animation={false}>
              <Modal.Footer>
                <p  style={{color:"red"}}> You are not logged in! </p>
                  <Button
                      variant="danger"
                      href="/login"
                  >
                      Go to login...
                  </Button>
              </Modal.Footer>
              </Modal>
            )}/>
          <Route path='/AcceptGigInvite'
            render={() => (
              isLoggedIn?
                <AcceptGigInvite/> : 
                <Modal show={true} animation={false}>
                <Modal.Footer>
                  <p  style={{color:"red"}}> You are not logged in! </p>
                    <Button
                        variant="danger"
                        href="/login"
                    >
                        Go to login...
                    </Button>
                </Modal.Footer>
                </Modal>
          )}/>
          <Route path='/CreateGig'
          render={() => (
            isLoggedIn?
              <CreateGig/> : 
              <Modal show={true} animation={false}>
              <Modal.Footer>
                <p  style={{color:"red"}}> You are not logged in! </p>
                  <Button
                      variant="danger"
                      href="/login"
                  >
                      Go to login...
                  </Button>
              </Modal.Footer>
              </Modal>
          )}/>
          <Route path='/InviteToGig'
          render={() => (
            isLoggedIn?
              <InviteToGig/> : 
              <Modal show={true} animation={false}>
              <Modal.Footer>
                <p  style={{color:"red"}}> You are not logged in! </p>
                  <Button
                      variant="danger"
                      href="/login"
                  >
                      Go to login...
                  </Button>
              </Modal.Footer>
              </Modal>
          )}/>
          <Route path='/Logout' exact component={Login}/>
          <Route path='/Login' exact component={Login}/>
          <Route path='/register' exact component={RegisterClass}/>
          <Route path='/error' exact component={ErrorComponent} />
          <Route path='/create_band' exact component = {createBandForm} />
          <Route path='/profile' exact component = {ProfileClass} />
          <Route path='/displaybands' exact component = {DisplayBands} />
          <Route path='/CreateGig' exact component={CreateGig} />
          <Route path='/profile/change_type' exact component = {ChangeProfileType}/>
          <Route path='/createBand' exact component = {BandCreate} />
          <Route path ='/viewBand' exact component = {BandView} />
          <Route path ='/InviteToBand' exact component = {InviteToBand} />
          <Route path ='/AcceptBandInvite' exact component = {AcceptBandInvite} />
          <Route path='/displayGigs' exact component = {DisplayGigs}/>
          <Route path='/EditGig' exact component = {EditGig}/>
          <Route path='/WelcomePage' exact component = {WelcomePage}/>
        </Switch>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
