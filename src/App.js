import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup, ButtonToolbar, Glyphicon, Image, Nav, Navbar, NavItem, Grid, Col, Row } from 'react-bootstrap'
import Feature from './components/Feature'
import Package from './components/Package'

class App extends Component {
  render() {
    return (
      <Grid fluid>
        <Navbar collapseOnSelect bsStyle="none">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">
                <Image src="https://www.douply.com/images/logo-douply.svg" style={{ height: 75}}/>
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight bsClass="nav hidden-xs hidden-sm">
              <li className="hidden-xs hidden-sm" style={{float: 'right'}}>
                <a href="https://reports.douply.com/access/sign_up" id="btn-sign_up" className="btn shade-6-bg" target="_blank">Free trial</a>
              </li>
              <li className="hidden-xs hidden-sm" style={{float: 'right'}}>
                <a href="https://reports.douply.com/access/sign_in" id="btn-sign_in" className="btn btn-outline" target="_blank">Sign-in</a>
              </li>
            </Nav>
            <Nav pullRight>
              <NavItem href="https://www.douply.com" >Home</NavItem>
              <NavItem href="https://www.douply.com/#benefits" >Benefits</NavItem>
              <NavItem href="https://www.douply.com/#pricing" >Pricing</NavItem>
              <NavItem href="https://www.douply.com/#ourTeam" >Our Team</NavItem>
              <NavItem href="https://www.douply.com/contact" >Contact</NavItem>
            </Nav>
            <Nav pullRight bsClass="nav hidden-md hidden-lg" style={{ marginTop: 0 }}>
              <NavItem href="https://reports.douply.com/access/sign_in" bsClass="nav hidden-md hidden-lg">Sign-in</NavItem>
              <NavItem href="https://reports.douply.com/access/sign_up">Free Trial</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Row id="headerSlide">
          <Col xs={12}>
            <Grid>
              <Row id="topInfo">
                <Col md={7} mdOffset={1} mdPush={4} xs={12} xsOffset={0}>
                  <img className="imgCenter max-width-100" src="https://www.douply.com/images/header-chart.png"/> 
                </Col>
                <Col md={4} mdOffset={0} mdPull={8} xs={12} xsOffset={0}>
                  <Row>
                    <Col md={12}>
                      <div className="textElement">
                        <h1>Great reports, happy clients and more spare time!</h1>
                        <p>Create awesome reports from online advertising platforms. Surprise your clients with nice graphs in our client-side dashboard.  Your daily, weekly or monthly reporting has never been so easy and fun.</p>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12} xs={12} className="text-center" id="topTryButton">
                      <a href="https://reports.douply.com/access/sign_up" id="btn-try_douply_now" className="btn btn-signup btn-lg wrap" target="_blank">
                        TRY DOUPLY NOW
                      </a> 
                      <br/>
                      <span className="trial-text shade-8 text-center display-block m-t-8">6-month FREE trial period, no credit card required!</span>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Grid>
          </Col>
        </Row>
        <Row className="ribbon-white">
          <Col xs={12}>
            <Grid>
              <Row>
                <Col xs={12} className="textElement centerTitle title-padding">
                  How it works
                </Col>
                <Col xs={12} md={10} mdOffset={1} className="video-container centerTitle title-padding m-b-50">
                  <iframe id="ytplayer" type="text/html" width="640" height="390" src="https://www.youtube.com/embed/yDY54EDSovg?rel=0" frameborder="0"></iframe>
                </Col>
              </Row>
              <Row>
                <Col md={3} sm={6} xs={12}>
                  <Feature feature_image_alt="Client" feature_image="https://www.douply.com/images/icons/duo/client.png"
                      title="Client side dashboard"
                      content="No need to share or submit reporting yourself. Douply comes with a free built-in client dashboard"
                  />
                </Col>
                <Col md={3} sm={6} xs={12}>
                  <Feature feature_image_alt="Client" feature_image="https://www.douply.com/images/icons/duo/report.png"
                      title="Reporting tool"
                      content="Create reports in just minutes for all your online campaigns. Daily, weekly or monthly reporting has never been so easy and fun."
                  />
                </Col>
                <Col md={3} sm={6} xs={12}>
                  <Feature feature_image_alt="Graph" feature_image="https://www.douply.com/images/icons/duo/graph.png"
                      title="Graphs"
                      content="Surprise your clients with nice interactive graphs. Douply gives you several graph types for different KPIs."
                  />
                </Col>
                <Col md={3} sm={6} xs={12}>
                  <Feature feature_image_alt="Network" feature_image="https://www.douply.com/images/icons/duo/network.png"
                      title="Connect platforms"
                      content="Build reports on Google AdWords, Google Analytics, Bing Ads, Adform, Facebook and Instagram Ads and many others. One tool, endless results"
                  />
                </Col>
              </Row>
            </Grid>
          </Col>
        </Row>
      <div id="funandeasy" className="row ribbon">
        <div className="col-xs-12 centerTitle title-padding trial-text-ribbon"><span className="margin-right-15">Reporting is getting easy and fun with Douply</span><a href="https://reports.douply.com/access/sign_up" target="_blank" id="btn-14day-free" className="btn btn-darkblue"> Yes, I want a 6-month FREE trial!</a> </div>
      </div>
      <div className="row ribbon-white">
        <div className="col-xs-12">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div id="benefits" className="textElement centerTitle title-padding">Benefits</div>
              </div>
              <div className="col-xs-12">
                <div className="row inline-block-row">
                  <div id="invest" className="col-md-4 col-md-offset-0 col-xs-8 col-xs-offset-2 m-b-lg">
                    <div className="row ">
                      <div className="col-md-2 col-xs-2 shade-iconblue"><i className="fa fa-bar-chart fa-2x icon-m-adjust"></i></div>
                      <div className="col-sm-10 col-sm-offset-0 col-xs-offset-1 col-xs-9">
                        <h5>Simplest campaign reporting tool</h5>
                      </div>
                      <div className="col-md-10 col-md-offset-2 fixed6lines">
                        <p>Also bored of creating time consuming campaign reports where you are trying to recall what you have done, getting the right data from several platforms in an not so fancy looking dashboard?</p>
                      </div>
                      <div className="col-md-10 col-md-offset-2 m-t-md"> <a href="https://www.douply.com/campaign-reporting/" id="read-campaign-reporting" className="underLink">READ MORE</a> </div>
                    </div>
                  </div>
                  <div id="people" className="col-md-4 col-md-offset-0 col-xs-8 col-xs-offset-2 m-b-lg">
                    <div className="row">
                      <div className="col-md-2 col-xs-2 shade-iconblue"><i className="fa fa-road fa-2x icon-m-adjust"></i></div>
                      <div className="col-sm-10 col-sm-offset-0 col-xs-offset-1 col-xs-9">
                        <h5>Reports anywhere, anytime</h5>
                      </div>
                      <div className="col-md-10 col-md-offset-2 fixed6lines">
                        <p>Present and surprise your clients whenever wherever with outstanding campaign insights.</p>
                      </div>
                      <div className="col-md-10 col-md-offset-2 m-t-md"> <a href="https://www.douply.com/awesome-reports/" id="read-anywhere_anytime" className="underLink">READ MORE</a> </div>
                    </div>
                  </div>
                  <div id="requirements" className="col-md-4 col-md-offset-0 col-xs-8 col-xs-offset-2 m-b-lgg">
                    <div className="row">
                      <div className="col-md-2 col-xs-2 shade-iconblue"><i className="fa fa-thumbs-up fa-2x icon-m-adjust"></i></div>
                      <div className="col-sm-10 col-sm-offset-0 col-xs-offset-1 col-xs-9">
                        <h5>Happy clients</h5>
                      </div>
                      <div className="col-md-10 col-md-offset-2 fixed6lines">
                        <p>Your data visualised in a client side dashboard so your client easily sees that his KPI’s are on track!</p>
                      </div>
                      <div className="col-md-10 col-md-offset-2 m-t-md"> <a href="https://www.douply.com/happy-clients/" id="read-happy_clients" className="underLink">READ MORE</a> </div>
                    </div>
                  </div>
                  <div className="clearfix hidden-xs hidden-sm"></div>
                  <div id="picture" className="col-md-4 col-md-offset-0 col-xs-8 col-xs-offset-2 m-b-lg">
                    <div className="row">
                      <div className="col-md-2 col-xs-2 shade-iconblue"><i className="fa fa-sitemap fa-2x icon-m-adjust"></i></div>
                      <div className="col-sm-10 col-sm-offset-0 col-xs-offset-1 col-xs-9">
                        <h5>Never miss any data</h5>
                      </div>
                      <div className="col-md-10 col-md-offset-2 fixed6lines">
                        <p>You name it and we are connected or will connect it! We want you to have al data at your service</p>
                      </div>
                      <div className="col-md-10 col-md-offset-2"> <a href="https://www.douply.com/never-miss-data/" id="read-never_miss_data" className="underLink">READ MORE</a> </div>
                    </div>
                  </div>
                  <div id="installation" className="col-md-4 col-md-offset-0 col-xs-8 col-xs-offset-2 m-b-lg">
                    <div className="row">
                      <div className="col-md-2 col-xs-2 shade-iconblue"> <i className="fa fa-cogs fa-2x icon-m-adjust"></i> </div>
                      <div className="col-sm-10 col-sm-offset-0 col-xs-offset-1 col-xs-9">
                        <h5>You are safe with us.</h5>
                      </div>
                      <div className="col-md-10 col-md-offset-2 fixed6lines">
                        <p>No need to panic when you are connecting to our platform,
                          we encrypt all the data and work with HTTPS (HyperText Transfer Protocol Secure).</p>
                      </div>
                      <div className="col-md-10 col-md-offset-2 m-t-md"> <a href="https://www.douply.com/security/" id="read-security" className="underLink">READ MORE</a> </div>
                    </div>
                  </div>
                  <div id="styling" className="col-md-4 col-md-offset-0 col-xs-8 col-xs-offset-2 m-b-lg">
                    <div className="row">
                      <div className="col-md-2 col-xs-2 shade-iconblue"><i className="fa fa-exchange fa-2x icon-m-adjust"></i></div>
                      <div className="col-sm-10 col-sm-offset-0 col-xs-offset-1 col-xs-9">
                        <h5>Automatic synchronization </h5>
                      </div>
                      <div className="col-md-10 col-md-offset-2 fixed6lines">
                        <p>Never import or export campaign data again in your life! Douply automatic synchronizes platform data.</p>
                      </div>
                      <div className="col-md-10 col-md-offset-2 m-t-md"> <a href="https://www.douply.com/automatic-synchronisation/" id="read-synchronization" className="underLink">READ MORE</a> </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row ribbon-white">
        <div className="col-xs-12">
          <div className="container">
            <div id="textEverywhere" className="col-md-6 col-md-offset-3 col-xs-12">
              <div className="centerTitle ">You always stay in control.
                Anytime, anywhere.</div>
              <div className="underLink"><a id="btn-show-example" href="images/douply_report_example.pdf">SHOW ME AN EXAMPLE OF A REPORT</a></div>
            </div>
            <div id="benefitsIMG" className="col-md-12 col-xs-12 margin-top-50">
              <div className="centerTitle title-padding padding-bottom-0"><img src="https://www.douply.com/images/stay_in_control.png" className="max-width-100"/></div>
            </div>
          </div>
        </div>
      </div>
      <div id="pricing" className="row ribbon-white margin-top-0">
        <div className="col-xs-12">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="centerTitle title-padding"> Choose your package
                  <div className="subTitle">All packages come with a 6-month free FULL trial.<br />
                              No credit card required at sign-up!</div>
                </div>
              </div>
            </div>
            <Row>
              <Col md={3} mdOffset={0} sm={5} xs={10} smOffset={0} xsOffset={1}>
                <Package title="Bora Bora" title_shade="shade-4-bg" qty_banner={100}
                  qty_report="Unlimited" qty_users="Unlimited" qty_platforms="Unlimited" 
                  price={150} />
              </Col>
              <Col md={3} mdOffset={0} sm={5} xs={10} smOffset={1} xsOffset={1}>
                <Package title="Waikiki" title_shade="shade-3-bg" qty_banner={50}
                  qty_report="Unlimited" qty_users="Unlimited" qty_platforms="Unlimited" 
                  price={100} />
              </Col>
              <Col md={3} mdOffset={0} sm={5} xs={10} smOffset={0} xsOffset={1}>
                <Package title="Bondi" title_shade="shade-2-bg" qty_banner={20}
                  qty_report="Unlimited" qty_users="Unlimited" qty_platforms="Unlimited" 
                  price={50} />
              </Col>
              <Col md={3} mdOffset={0} sm={5} xs={10} smOffset={1} xsOffset={1}>
                <Package title="Miami" title_shade="shade-1-bg" qty_banner={10}
                  qty_report="Unlimited" qty_users="Unlimited" qty_platforms="Unlimited" 
                  price={25} />
              </Col>
            </Row>
            <div className="row">
              <div className="col-xs-12">
                <div id="needMore" className="container">
                  <div id="topInfo" className="row padding-top-50">
                    <div className="col-sm-5 col-sm-offset-1 col-xs-offset-0 col-xs-12">
                      <div className="textElement relative-top-20">
                        <div className="row">
                          <div className="col-md-12"> <span className="shade-5">
                            <h1>Do your clients need more capacity?</h1>
                            </span> </div>
                        </div>
                        <div className="row">
                          <div className="col-md-8">
                            <p>We have larger plans specifically for agency and enterprise users.</p>
                            <a href="contact/" className="btn shade-6-bg" id="btn-request_quote" target="_blank">REQUEST A QUOTE</a> </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 col-md-offset-0 col-xs-8 col-xs-offset-2"> <img className="imgCenter needMore-adjust max-width-100" src="https://www.douply.com/images/need_more.png"/> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row shade-7-bg">
        <div className="col-xs-12">
          <div className="container">
            <div id="ourTeam" className="row shade-8" >
              <div className="col-xs-12 textElement centerTitle title-padding">Our team</div>
            </div>
            <div className="row margin-bottom-100">
              <div id="textBlock1" className="col-md-5 col-sm-6 col-sm-offset-0 col-md-offset-0 col-xs-12 col-xs-offset-0">
                <div className="personalBlock">
                  <div id="topRowOfTextArea" className="col-md-12">
                    <div className="float-left">
                      <div className="smCircle" id="smCircleVincent"></div>
                    </div>
                    <div align="right">
                      <h5 className="text-align-right">Vincent van der Graaf</h5>
                    </div>
                  </div>
                  <div id="middleRowOfTextArea" className="col-md-12">
                    <h6 className="text-align-right">Founder</h6>
                  </div>
                  <div id="bottomRowOfTextArea" className="col-md-12">
                    <p className="text-justify">Vincent leads the team and makes sure all our software is a pleasure to use. His ability to connect with clients and understand their unique needs makes him the driving force behind Douply</p>
                  </div>
                </div>
              </div>
              <div id= "textBlock2" className="col-md-5 col-sm-6 col-sm-offset-0 col-md-offset-2 col-xs-12 col-xs-offset-0">
                <div className="personalBlock">
                  <div id="topRowOfTextArea" className="col-md-12">
                    <div className="float-right">
                      <div className="smCircle" id="smCircleArthur"></div>
                    </div>
                    <div align="left">
                      <h5 className="text-align-left">Arthur Duffels</h5>
                    </div>
                  </div>
                  <div id="middleRowOfTextArea" className="col-md-12">
                    <h6 className="text-align-left">Founder</h6>
                  </div>
                  <div id="bottomRowOfTextArea" className="col-md-12">
                    <p className="text-justify">Arthur is the brains behind the technology of Douply and responsible for making sure that everything runs as it should. His eagerness to learn and to test out new ideas is a great asset to the company.</p>
                  </div>
                </div>
              </div>
              <div id= "textBlock3" className="col-md-5 col-sm-6 col-sm-offset-0 col-md-offset-0 col-xs-12 col-xs-offset-">
                <div className="personalBlock">
                  <div id="topRowOfTextArea" className="col-md-12">
                    <div className="float-left">
                      <div className="smCircle" id="smCircleJordi"></div>
                    </div>
                    <div align="right">
                      <h5 className="text-align-right">Jordi Kuijer</h5>
                    </div>
                  </div>
                  <div id="middleRowOfTextArea" className="col-md-12">
                    <h6 className="text-align-right">Online Campaign specialist</h6>
                  </div>
                  <div id="bottomRowOfTextArea" className="col-md-12">
                    <p className="text-justify">Jordi organizes campaigns and can help you understand how much money to spend and where you should spend it. He proactively monitors and optimizes campaigns and is great in providing the support our clients need.</p>
                  </div>
                </div>
              </div>
                      <div id= "textBlock4" className="col-md-5 col-sm-6 col-sm-offset-0 col-md-offset-2 col-xs-12 col-xs-offset-0">
                <div className="personalBlock">
                  <div id="topRowOfTextArea" className="col-md-12">
                    <div className="float-right">
                      <div className="smCircle" id="smCircleBenny"></div>
                    </div>
                    <div align="left">
                      <h5 className="text-align-left">Benny van den Hoogen</h5>
                    </div>
                  </div>
                  <div id="middleRowOfTextArea" className="col-md-12">
                    <h6 className="text-align-left">Creative front-end developer</h6>
                  </div>
                  <div id="bottomRowOfTextArea" className="col-md-12">
                    <p className="text-justify">Benny is our creative front-end developer. With a degree in data visualization and a perfectionist in AngularJS & HTML5 he makes Douply an easy to use platform with great output.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row footer" style={{color: '#fff'}}>
        <div className="col-xs-12">
          <div className="container">
            <div className="row">
              <div className="col-sm-3 col-sm-offset-0 col-xs-12 col-xs-offset-0">
                <ul className="list-unstyled">
                  <li className="footerTitle">DOUPLY</li>
                  <li className="margin-bottom-2"><a href="https://www.douply.com/campaign-reporting/">Campaign reporting tool</a></li>
                  <li className="margin-bottom-2"><a href="https://www.douply.com/online-marketing-dashboard/">Online marketing dashboard</a></li>
                  <li className="margin-bottom-2"><a href="https://www.douply.com/awesome-reports/">Anytime anywhere</a></li>
                  <li className="margin-bottom-2"><a href="https://www.douply.com/happy-clients/">Client side dashboard</a></li>
                  <li className="margin-bottom-2"><a href="https://www.douply.com/never-miss-data/">Connected platforms</a></li>
                  <li className="margin-bottom-2"><a href="https://www.douply.com/security/">Security</a></li>
                  <li className="margin-bottom-2"><a href="https://www.douply.com/automatic-synchronisation/">Auto synchronization</a></li>
                </ul>
              </div>
              <div className="col-sm-3 col-sm-offset-0 col-xs-12 col-xs-offset-0">
                <ul className="list-unstyled">
                  <li className="footerTitle">PLATFORMS</li>
                  <li className="margin-bottom-2"><a href="https://www.douply.com/adform-reports/">Adform reports</a></li>
                  <li className="margin-bottom-2"><a href="https://www.douply.com/google-adwords-reports/">Google Adwords reports</a></li>
                  <li className="margin-bottom-2"><a href="https://www.douply.com/affiliate-reports/">Affiliate reports</a></li>
                  <li className="margin-bottom-2"><a href="https://www.douply.com/bing-ads-reports/">Bing Ads reports</a></li>
                  <li className="margin-bottom-2"><a href="https://www.douply.com/facebook-marketing-ads-reports/">Facebook Marketing Ads reports</a></li>
                  <li className="margin-bottom-2"><a href="https://www.douply.com/twitter-ads-reports/">Twitter Ads reports</a></li>
                  <li className="margin-bottom-2"><a href="https://www.douply.com/instagram-ads-reports/">Instagram Ads reports</a></li>
                </ul>
              </div>
              <div className="col-sm-3 col-sm-offset-0 col-xs-12 col-xs-offset-0">
                <ul className="list-unstyled">
                  <li className="footerTitle">GET IN TOUCH</li>
                  <li className="margin-bottom-2"><a href="https://www.douply.com/blog/easier-client-creation/">Our blog</a></li>
                  <li className="margin-bottom-2"><a href="https://www.douply.com/contact/">Contact us</a></li>
                  <li className="margin-bottom-2"><a href="https://twitter.com/douply" target="_blank">Twitter</a></li>
                  <li className="margin-bottom-2"><a href="https://facebook.com/douply" target="_blank">Facebook</a></li>
                  <li className="margin-bottom-2"><a href="https://www.linkedin.com/company/douply" target="_blank">LinkedIn</a></li>
                </ul>
                <br/>
              </div>
              <div className="col-sm-3 col-sm-offset-0 col-xs-12 col-xs-offset-0">
                <ul className="list-unstyled">
                  <li className="footerTitle">ABOUT US</li>
                  <li className="margin-bottom-2"><a href="https://www.douply.com/our-story/">Our story</a></li>
                              <li className="margin-bottom-2"><a href="https://www.douply.com/faq/">FAQ</a></li>
                              <li className="margin-bottom-2"><a href="https://www.douply.com/support/">Support</a></li>
                  <li className="margin-bottom-2"><a href="https://www.douply.com/terms-of-service/">Terms of service</a></li>
                  <li className="margin-bottom-2"><a href="https://www.douply.com/privacy-policy/">Privacy policy</a></li>
                  <li className="shade-2 margin-top-10">Douply © 2017</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Grid>
    );
  }
}

export default App;
