import React, {Suspense, lazy} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {routes} from './routes';

import LoadingSpinner from './components/atoms/LoadingSpinner';
import MainTemplate from './components/templates/MainTemplate';

const Account = lazy(() => import('./components/pages/AccountPage'));
const History = lazy(() => import('./components/pages/MeetingHistoryPage'));
const Home = lazy(() => import('./components/pages/HomePage'));
const LoginPage = lazy(() => import('./components/pages/LoginPage'));
const Timetable = lazy(() => import('./components/pages/SchedulesPage'));
const TopicDatabase = lazy(() => import('./components/pages/TopicDatabasePage'));

const Root = () => {
    let pending = false;
    let meetings = true

    if (pending) {
      return <div>Loading...</div>;
    } else if (meetings) {
      return (
        <BrowserRouter>
          <MainTemplate>
            {/* <MenuSidebar />
            <NextMeet /> */}
            <Suspense fallback={<LoadingSpinner />}>
              <Switch>
                <Route exact path={routes.home} component={Home} />
                <Route exact strict path={routes.timetable} component={Timetable} />
                <Route exact strict path={routes.topicDatabase} component={TopicDatabase} />
                <Route exact strict path={routes.history} component={History} />
                <Route exact strict path={routes.account} component={Account} />
                <Redirect to="/" />
              </Switch>
            </Suspense>
          </MainTemplate>
        </BrowserRouter>
      );
    } else {
      return (
        <BrowserRouter>
          <Suspense fallback={<LoadingSpinner />}>
            <Switch>
              <Route strict exact path="/login" component={LoginPage} />
              <Redirect to="/login" />
            </Switch>
          </Suspense>
        </BrowserRouter>
      );
    }
  };
  
  export default Root;