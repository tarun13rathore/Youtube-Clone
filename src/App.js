import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./_app.scss";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./screen/homeScreen/HomeScreen";
import LoginScreen from "./screen/loginScreen/LoginScreen";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import WatchScreen from "./screen/watchScreen/WatchScreen";
import SearchScreen from "./screen/SearchScreen";
import SubscriptionsScreen from "./screen/subscriptionsScreen/SubscriptionsScreen";
import ChannelScreen from "./screen/channelScreen/ChannelScreen";

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((value) => !value);
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container ">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main ">
          {children}
        </Container>
      </div>
    </>
  );
};

const App = () => {
  const { accessToken, loading } = useSelector((state) => state.auth);

  const history = useHistory();

  useEffect(() => {
    if (!loading && !accessToken) {
      history.push("/auth");
    }
  }, [accessToken, loading, history]);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Layout>
            <HomeScreen />
          </Layout>
        </Route>
        <Route exact path="/auth">
          <Layout>
            <LoginScreen />
          </Layout>
        </Route>
        <Route path="/search/:query">
          <Layout>
            <SearchScreen />
          </Layout>
        </Route>
        <Route exact path="/watch/:id">
          <Layout>
            <WatchScreen />
          </Layout>
        </Route>
        <Route path="/feed/subscriptions">
          <Layout>
            <SubscriptionsScreen />
          </Layout>
        </Route>
        <Route path="/channel/:channelId">
          <Layout>
            <ChannelScreen />
          </Layout>
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
};

export default App;
