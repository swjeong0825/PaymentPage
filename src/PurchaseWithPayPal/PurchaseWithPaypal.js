import React from "react";
import "./test.css"

const PurchaseWithPaypal = (props) =>{
    return (
        <body>
            <div id = "main" className = "main" role = 'main'>
                <section id = "login" className = "login" data-role = "page" data-title = "Log in to your Paypal account">
                    <div className = "corral">
                        <header>
                            <p className = "paypal-logo paypal-logo-long">
                                <center><img src="https://www.paypalobjects.com/images/shared/paypal-logo-129x32.png"/></center>
                            </p>
                        </header>
                        <form action="#" method="post" className="proceed maskable" name="login" autoComplete="off" noValidate="">
                <div id="passwordSection" className="clearfix">
                  <div className="textInput" id="login_emaildiv">
                    <div className="fieldWrapper">
                      <label htmlFor="email" className="fieldLabel">Email</label>
                      <input id="email" name="login_email" type="text" className="hasHelp validateEmpty " required="required" aria-required="true" defaultValue="" autoComplete="off" placeholder="Email"/>
                    </div>
                  </div>
      
                  <div className="textInput lastInputField" id="login_passworddiv">
                    <div className="fieldWrapper"><label htmlFor="password" className="fieldLabel">Password</label>
                      <input id="password" name="login_password" type="password" className="hasHelp validateEmpty " required="required" aria-required="true" defaultValue="" placeholder="Password"/>
                    </div>
                  </div>
                </div>
                <div className="actions actionsSpaced"><button className="button actionContinue" type="submit" id="btnLogin" name="btnLogin" value="Login">Log In</button></div>
                <div className="forgotLink"><a href="#" id="forgotPasswordModal" className="scTrack:unifiedlogin-click-forgot-password">Having trouble logging in?</a></div><input type="hidden" id="bp_mid" name="bp_mid" value=""/>
                </form>

                    </div>

                </section>
            </div>
        </body>
    )
}

export default PurchaseWithPaypal