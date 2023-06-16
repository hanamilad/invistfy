import React from "react";

import { BrowserRouter as  Switch, Route } from "react-router-dom";
import Home from "../home/Home";

import About from "../about/About";
import Pricing from "../pricing/Pricing";
import Blog from "../blog/Blog";
import Services from "../services/Services";
import Add from "../addprop/Add";
import login from "../login/Loginbag";
import signup from "../login/Signup";
import Video from "../home/Video/Video";
import One from "../home/Video/One";
import Two from "../home/Video/Two";
import Three from "../home/Video/Three";
import Four from "../home/Video/Four";
import Five from "../home/Video/Five";
import Sex from "../home/Video/Sex";
import ProfilePage from "../dropdown/profilepage/ProfilePage";
import AgentProfile from "../home/team/Agent/Agent";
import Item from "../item/Item";
import Fillter from "../home/featured/bage/Fillter";
//dashboard
import LoginDash from "../dropdown/dashbord/Logintodash/Login";
import list from "../dropdown/List/List";
import Homedashboard from "../dropdown/dashbord/Logintodash/component/home/home";
import Inform from "../dropdown/dashbord/Logintodash/component/Inform/Inform";
import Body from "../dropdown/dashbord/Logintodash/component/BODY/BODY";
import Setting from "../dropdown/dashbord/Logintodash/component/setting/setting";
import Units from "../dropdown/dashbord/Logintodash/component/Units/Units";
import Addindash from "../dropdown/dashbord/Logintodash/component/Add/Add";

const Pages = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/Add" component={Add} />
        <Route exact path="/log" component={login} />
        <Route exact path="/signup" component={signup} />
        <Route exact path="/video" component={Video} />
        <Route exact path="/one" component={One} />
        <Route exact path="/two" component={Two} />
        <Route exact path="/three" component={Three} />
        <Route exact path="/four" component={Four} />
        <Route exact path="/five" component={Five} />
        <Route exact path="/sex" component={Sex} />
        <Route exact path="/ProfilePage" component={ProfilePage} />
        <Route exact path="/AgentProfile" component={AgentProfile} />
        <Route exact path="/Item" component={Item} />
        <Route exact path="/Fillter" component={Fillter} />
        {/* dashboard */}
        <Route exact path="/dash" component={LoginDash} />
        <Route exact path="/list" component={list} />
        <Route exact path="/Homedashboard" component={Homedashboard} />
        <Route exact path="/Inform" component={Inform} />
        <Route exact path="/Body" component={Body} />
        <Route exact path="/Setting" component={Setting} />
        <Route exact path="/Addindash" component={Addindash} />
        <Route exact path="/units" component={Units} />
      </Switch>
    </>
  );
};

export default Pages;
