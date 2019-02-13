import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
    return (
        <div className="tr-profile section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-3">
              <div className="tr-sidebar">
                <ul className="nav nav-tabs profile-tabs section" role="tablist">
                  <li role="presentation"><a className="active" href="employee-profile.html#account-info" aria-controls="account-info" role="tab" data-toggle="tab"><i className="fa fa-life-ring" aria-hidden="true" /> Account Info</a></li>
                  <li role="presentation"><a href="employee-profile.html#resume" aria-controls="resume" role="tab" data-toggle="tab"><span><i className="fa fa-user-o" aria-hidden="true" /></span> My Resume</a></li>
                  <li role="presentation"><a href="employee-profile.html#edit-resume" aria-controls="edit-resume" role="tab" data-toggle="tab"><span><i className="fa fa-pencil-square-o" aria-hidden="true" /></span> Edit Resume</a></li>
                  <li role="presentation"><a href="employee-profile.html#bookmark" aria-controls="bookmark" role="tab" data-toggle="tab"><span><i className="fa fa-bookmark-o" aria-hidden="true" /></span> Bookmark</a></li>
                  <li role="presentation"><a href="employee-profile.html#archived" aria-controls="archived" role="tab" data-toggle="tab"><span><i className="fa fa-clone" aria-hidden="true" /></span> Archived Apply Job</a></li>
                  <li role="presentation"><a href="employee-profile.html#close-account" aria-controls="close-account" role="tab" data-toggle="tab"><span><i className="fa fa-scissors" aria-hidden="true" /></span> Close Account</a></li>
                </ul>	
                <a href="employee-profile.html#" className="btn btn-primary"><i className="fa fa-cloud-download" aria-hidden="true" /> <span>Download Resume as doc</span></a>		        			
              </div>{/* /.tr-sidebar */}        		
            </div>
            <div className="col-md-8 col-lg-9">
              <div className="tab-content">
                <div role="tabpanel" className="tab-pane fade in show active account-info" id="account-info">	
                  <div className="tr-fun-fact">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="fun-fact">
                          <div className="fun-fact-icon">
                            <img src="images/icons/fun-fact4.png" alt="images" className="img-fluid" />
                          </div>
                          <div className="media-body">
                            <h1 className="counter">329</h1>
                            <span>Viewed my resume</span>
                          </div>
                        </div>{/* /.fun-fact */}
                      </div>
                      <div className="col-sm-4">
                        <div className="fun-fact">
                          <div className="fun-fact-icon">
                            <img src="images/icons/fun-fact5.png" alt="images" className="img-fluid" />
                          </div>
                          <div className="media-body">
                            <h1 className="counter">32</h1>
                            <span>Application submit</span>
                          </div>
                        </div>{/* /.fun-fact */}									
                      </div>
                      <div className="col-sm-4">
                        <div className="fun-fact">
                          <div className="fun-fact-icon">
                            <img src="images/icons/fun-fact6.png" alt="images" className="img-fluid" />
                          </div>
                          <div className="media-body">
                            <h1 className="counter">27</h1>
                            <span>Call for interview</span>
                          </div>
                        </div>{/* /.fun-fact */}
                      </div>
                    </div>{/* ./row */}							
                  </div>{/* /.tr-fun-fact */}
                  <div className="section resume-last-updated">
                    <span className="icon pull-left"><img src="images/icons/1.png" alt="Icon" className="img-fluid" /></span>
                    <div className="updated-info">
                      <span className="pull-left">Resume last updated on</span>
                      <span className="pull-right">24/4/2017</span>
                    </div>
                  </div>{/* /.resume-last-updated */}
                  <div className="section display-information">
                    <div className="title title-after">
                      <div className="icon"><img src="images/icons/2.png" alt="Icon" className="img-fluid" /></div> 
                      <span>Your display Information</span>
                    </div>
                    <div className="change-photo">
                      <div className="user-image">
                        <img src="images/others/author.png" alt="Image" className="img-fluid" />
                      </div>
                      <div className="upload-photo">
                        <label className="btn btn-primary" htmlFor="upload-photo">
                          <input type="file" id="upload-photo" />
                          Change Photo
                        </label>
                        <span className="max-size">Max 20 MB</span>
                      </div>
                    </div>
                    <ul className="tr-list account-details">
                      <li>Display Name<span>Jhon Doe</span></li>
                      <li>Address<span>San Francisco, CA, US</span></li>
                      <li>Phone Number<span>+0123456789</span></li>
                      <li>Email Id<span><a href="employee-profile.html#"><span className="__cf_email__" data-cfemail="f59f9d9a9b919a90b59298949c99db969a98">[email&nbsp;protected]</span></a></span></li>
                      <li>Industry Expertise<span>UI &amp; UX Designer</span></li>
                    </ul>								
                  </div>{/* /.display-information */}
                  <div className="section">
                    <div className="title title-after">
                      <div className="icon"><img src="images/icons/3.png" alt="Icon" className="img-fluid" /></div> 
                      <span>Social Link</span>
                    </div>
                    <ul className="social social-icon-bg tr-list">
                      <li><i className="fa fa-facebook" /><span className="media-body"><a href="employee-profile.html#">https://www.facebook.com/jhondoe</a></span></li>
                      <li><i className="fa fa-twitter" /><span className="media-body"><a href="employee-profile.html#">https://www.twitter.com/jhondoe</a></span></li>
                      <li><i className="fa fa-google-plus" /><span className="media-body"><a href="employee-profile.html#">https://www.googleplus.com/jhondoe</a></span></li>
                      <li><i className="fa fa-linkedin" /><span className="media-body"><a href="employee-profile.html#">https://www.linkedin.com/jhondoe</a></span></li>
                      <li><i className="fa fa-dribbble" /><span className="media-body"><a href="employee-profile.html#">https://www.dribbble.com/jhondoe</a></span></li>
                      <li><i className="fa fa-behance" /><span className="media-body"><a href="employee-profile.html#">https://www.behance.com/jhondoe</a></span></li>
                      <li><i className="fa fa-globe" /><span className="media-body"><a href="employee-profile.html#">https://www.globe.com/jhondoe</a></span></li>
                    </ul>						
                  </div>
                </div>{/* /.tab-pane */}
                <div role="tabpanel" className="tab-pane section" id="resume">
                  <ul className="tr-list resume-info">
                    <li className="career-objective media">
                      <div className="icon">
                        <i className="fa fa-black-tie" aria-hidden="true" />
                      </div>  
                      <div className="media-body">
                        <span className="tr-title">Career Objective</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <br />
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni।</p>
                      </div>
                    </li>{/* /.career-objective */}
                    <li className="work-history media">
                      <div className="icon">
                        <i className="fa fa-briefcase" aria-hidden="true" />
                      </div>
                      <div className="media-body">
                        <span className="tr-title">Work History</span>
                        <ul className="tr-list">
                          <li>
                            <span>Senior Graphic Designer @ Buildomo</span>
                            <span className="present">2016 - Present</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </li>
                          <li>
                            <span>Former Graphic Designer @ Ideame</span>
                            <span className="present">2015 - 2016</span>
                            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </li>
                          <li>
                            <span>Head of Design @ Titan Compnay</span>
                            <span className="present">2007 - 2015</span>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                          </li>
                          <li>
                            <span>Graphic Designer @ Precision</span>
                            <span className="present">2005 - 2007</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </li>
                          <li>
                            <span>Graphic Designer (Intern) @ Costa Rica Fruit Compnay</span>
                            <span className="present">2003 - 2005</span>
                            <p>Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </li>
                        </ul>
                      </div>
                    </li>{/* /.work-history */}	
                    <li className="education-background media">
                      <div className="icon">
                        <i className="fa fa-briefcase" aria-hidden="true" />
                      </div>
                      <div className="media-body">
                        <span className="tr-title">Education Background</span>
                        <ul className="tr-list">
                          <li>
                            <span>Senior Graphic Designer @ Buildomo</span>
                            <ul className="tr-list">
                              <li>Year: 1999 - 2001</li>
                              <li>Major: Major in Accounting</li>
                              <li>Course Duration: 2 Years</li>
                              <li>Result: 4.00</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </li>
                          <li>
                            <span>Bachalor of Arts @ Universty of Bristol</span>
                            <ul className="tr-list">
                              <li>Year: 1999 - 2001</li>
                              <li>Major: Major in Accounting</li>
                              <li>Course Duration: 2 Years</li>
                              <li>Result: 4.00</li>
                            </ul>
                            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </li>
                          <li>
                            <span>Diploma in Graphics Design @ Cincinnati Christian University</span>
                            <ul className="tr-list">
                              <li>Year: 1999 - 2001</li>
                              <li>Major: Major in Accounting</li>
                              <li>Course Duration: 2 Years</li>
                              <li>Result: 4.00</li>
                            </ul>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                          </li>
                        </ul>
                      </div>
                    </li>{/* /.education-background */}
                    <li className="qualification media">
                      <div className="icon">
                        <i className="fa fa-thumbs-o-up" aria-hidden="true" />
                      </div>
                      <div className="media-body">
                        <span className="tr-title">Special Qualification:</span>
                        <ol>
                          <li>5 years+ experience designing and building products In the Design &amp; IT industry.</li>
                          <li>Passion for people-centered design, solid intuition.</li>
                          <li>Skilled at any Kind Design Tools. </li>
                          <li>Hard Worker &amp; Quick Lerner.</li>
                        </ol>
                      </div>
                    </li>{/* /.qualification */}
                    <li className="language-proficiency media">
                      <div className="icon">
                        <i className="fa fa-language" aria-hidden="true" />
                      </div>
                      <div className="media-body">
                        <span className="tr-title">Language Proficiency:</span>
                        <ul className="tr-list">
                          <li>
                            <span>English</span>
                            <ul className="tr-list rating">
                              <li><i className="fa fa-star" aria-hidden="true" /></li>
                              <li><i className="fa fa-star" aria-hidden="true" /></li>
                              <li><i className="fa fa-star" aria-hidden="true" /></li>
                              <li><i className="fa fa-star" aria-hidden="true" /></li>
                              <li><i className="fa fa-star-o" aria-hidden="true" /></li>
                            </ul>
                          </li>
                          <li>
                            <span>German</span>
                            <ul className="tr-list rating">
                              <li><i className="fa fa-star" aria-hidden="true" /></li>
                              <li><i className="fa fa-star" aria-hidden="true" /></li>
                              <li><i className="fa fa-star" aria-hidden="true" /></li>
                              <li><i className="fa fa-star-o" aria-hidden="true" /></li>
                              <li><i className="fa fa-star-o" aria-hidden="true" /></li>
                            </ul>
                          </li>
                          <li>
                            <span>Spanish</span>
                            <ul className="tr-list rating">
                              <li><i className="fa fa-star" aria-hidden="true" /></li>
                              <li><i className="fa fa-star" aria-hidden="true" /></li>
                              <li><i className="fa fa-star" aria-hidden="true" /></li>
                              <li><i className="fa fa-star" aria-hidden="true" /></li>
                              <li><i className="fa fa-star" aria-hidden="true" /></li>
                            </ul>
                          </li>
                          <li>
                            <span>Latin</span>
                            <ul className="tr-list rating">
                              <li><i className="fa fa-star" aria-hidden="true" /></li>
                              <li><i className="fa fa-star" aria-hidden="true" /></li>
                              <li><i className="fa fa-star-o" aria-hidden="true" /></li>
                              <li><i className="fa fa-star-o" aria-hidden="true" /></li>
                              <li><i className="fa fa-star-o" aria-hidden="true" /></li>
                            </ul>
                          </li>
                        </ul>							    	
                      </div>
                    </li>{/* /.language-proficiency */}	
                    <li className="personal-deatils media">
                      <div className="icon">
                        <i className="fa fa-user-secret" aria-hidden="true" />
                      </div>
                      <div className="media-body">
                        <span className="tr-title">Personal Deatils</span>
                        <ul className="tr-list">
                          <li><span className="left">Full Name</span><span className="middle">:</span> <span className="right">Jhon Doe</span></li>
                          <li><span className="left">Father's Name </span><span className="middle">:</span> <span className="right">Robert Doe</span></li>
                          <li><span className="left">Mother's Name</span><span className="middle">:</span> <span className="right">Ismatic Roderos Doe</span></li>
                          <li><span className="left">Date of Birth</span><span className="middle">:</span> <span className="right">26/01/1982</span></li>
                          <li><span className="left">Birth Place</span><span className="middle">:</span> <span className="right">United State of America</span></li>
                          <li><span className="left">Nationality</span><span className="middle">:</span> <span className="right">Canadian</span></li>
                          <li><span className="left">Sex</span><span className="middle">:</span> <span className="right">Male</span> </li>
                          <li><span className="left">Address</span><span className="middle">:</span> <span className="right">121 King Street, Melbourne Victoria, 1200 USA</span></li>
                        </ul>							    	
                      </div>
                    </li>{/* /.personal-deatils */}
                    <li className="personal-deatils media">
                      <div className="icon">
                        <i className="fa fa-hand-peace-o" aria-hidden="true" />
                      </div>
                      <div className="media-body">
                        <span className="tr-title">Declaration</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <br />
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni। dolores eos qui ratione voluptatem sequi nesciunt. </p>
                      </div>
                    </li>{/* /.personal-deatils */}							
                  </ul>
                  <div className="buttons pull-right">
                    <a href="employee-profile.html#" className="btn button-cancle">Cancle</a>
                    <a href="employee-profile.html#" className="btn btn-primary">Update Your Resume</a>
                  </div>								
                </div>{/* /.tab-pane */}
                <div role="tabpanel" className="tab-pane edit-resume section" id="edit-resume">
                  <ul className="tr-list resume-info">
                    <li className="career-objective">
                      <div className="icon">
                        <i className="fa fa-black-tie" aria-hidden="true" />
                      </div>  
                      <div className="media-body">
                        <span className="tr-title">Career Objective</span>
                        <div className="code-edit">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <br />
                          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni।</p>		
                        </div>
                      </div>
                    </li>{/* /.career-objective */}
                    <li className="work-history">
                      <div className="icon">
                        <i className="fa fa-briefcase" aria-hidden="true" />
                      </div>
                      <div className="media-body additem-work">
                        <span className="tr-title">Work History</span>
                        <div id="addhistory" className="additem">
                          <span id="clone" className="icon clone"><i className="fa fa-plus" aria-hidden="true" /></span>
                          <span className="icon remove"><i className="fa fa-times" aria-hidden="true" /></span>
                          <div className="code-edit-small">
                            <label>Job Title</label>
                            <div className="code-edit"><span>Senior Graphic Designer</span></div>
                            <label>Compnay Name</label>
                            <div className="code-edit"><span>Buildomo LLC</span></div>
                            <div className="row">
                              <div className="col-sm-6 col-md-4">
                                <label>From</label>
                                <div className="calendar">
                                  <input type="date" className="form-control" defaultValue="2015-01-15" />
                                </div>{/* calendar */}
                              </div>
                              <div className="col-sm-6 col-md-4">
                                <label>To</label>
                                <div className="calendar">
                                  <input type="date" className="form-control" defaultValue="2016-01-13" />
                                </div>{/* calendar */}
                              </div>
                              <div className="col-md-4">
                                <div className="checkbox">
                                  <label htmlFor="logged-1"><input type="checkbox" name="logged-1" id="logged-1" />I currently work here</label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>						    	
                      </div>
                    </li>{/* /.work-history */}
                    <li className="education-background">
                      <div className="icon">
                        <i className="fa fa-briefcase" aria-hidden="true" />
                      </div>
                      <div className="media-body additem-edu">
                        <span className="tr-title">Education Background</span>
                        <div id="add-edu" className="additem">
                          <span id="edu-clone" className="icon clone"><i className="fa fa-plus" aria-hidden="true" /></span>
                          <span className="icon remove"><i className="fa fa-times" aria-hidden="true" /></span>
                          <div className="code-edit-small">
                            <label>Degree</label>
                            <div className="code-edit"><span>Diploma in Graphic Designer</span></div>
                            <label>Institute Name</label>
                            <div className="code-edit"><span>Cincinnati Christian University</span></div>
                            <div className="row">
                              <div className="col-sm-6 col-md-4">
                                <label>From Year</label>
                                <div className="calendar">
                                  <input type="date" className="form-control" defaultValue="2012-01-01" />
                                </div>{/* calendar */}
                              </div>
                              <div className="col-sm-6 col-md-4">
                                <label>To Year (or expected)</label>
                                <div className="calendar">
                                  <input type="date" className="form-control" defaultValue="2017-01-13" />
                                </div>{/* calendar */}
                              </div>
                              <div className="col-sm-6 col-md-4">
                                <label>Result (GPA)</label>
                                <div className="code-edit"><span>4.00/5.00</span></div>
                              </div>
                            </div>
                          </div>
                          <div className="code-edit">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </div>		
                        </div>{/* /.additem */}
                      </div>
                    </li>{/* /.education-background */}	
                    <li className="qualification">
                      <div className="icon">
                        <i className="fa fa-thumbs-o-up" aria-hidden="true" />
                      </div>
                      <div className="media-body">
                        <span className="tr-title">Special Qualification:</span>
                        <div className="code-edit">
                          <ol>
                            <li>5 years+ experience designing and building products In the Design &amp; IT industry.</li>
                            <li>Passion for people-centered design, solid intuition.</li>
                            <li>Skilled at any Kind Design Tools. </li>
                            <li>Hard Worker &amp; Quick Lerner.</li>
                          </ol>								    		
                        </div>
                      </div>
                    </li>{/* /.qualification */}	
                    <li className="language-proficiency code-edit-small">
                      <div className="icon">
                        <i className="fa fa-language" aria-hidden="true" />
                      </div>
                      <div className="media-body">
                        <span className="tr-title">Language Proficiency:</span>
                        <div className="rating-star">
                          <span className="pull-left code-edit">English</span>
                          <div className="rating">
                            <input type="radio" id="star1" name="rating" /><label className="full" htmlFor="star1" />
                            <input type="radio" id="star2" name="rating" /><label className="half" htmlFor="star2" />
                            <input type="radio" id="star3" name="rating" /><label className="full" htmlFor="star3" />
                            <input type="radio" id="star4" name="rating" /><label className="half" htmlFor="star4" />
                            <input type="radio" id="star5" name="rating" /><label className="full" htmlFor="star5" />
                            <input type="radio" id="star6" name="rating" /><label className="half" htmlFor="star6" />
                            <input type="radio" id="star7" name="rating" /><label className="full" htmlFor="star7" />
                            <input type="radio" id="star8" name="rating" /><label className="half" htmlFor="star8" />
                            <input type="radio" id="star9" name="rating" /><label className="full" htmlFor="star9" />
                            <input type="radio" id="star10" name="rating" /><label className="half" htmlFor="star10" />
                          </div>							    		
                        </div>
                        <div className="rating-star">
                          <span className="pull-left code-edit">German</span>
                          <div className="rating">
                            <input type="radio" id="star11" name="rating1" /><label className="full" htmlFor="star11" />
                            <input type="radio" id="star12" name="rating1" /><label className="half" htmlFor="star12" />
                            <input type="radio" id="star13" name="rating1" /><label className="full" htmlFor="star13" />
                            <input type="radio" id="star14" name="rating1" /><label className="half" htmlFor="star14" />
                            <input type="radio" id="star15" name="rating1" /><label className="full" htmlFor="star15" />
                            <input type="radio" id="star16" name="rating1" /><label className="half" htmlFor="star16" />
                            <input type="radio" id="star17" name="rating1" /><label className="full" htmlFor="star17" />
                            <input type="radio" id="star18" name="rating1" /><label className="half" htmlFor="star18" />
                            <input type="radio" id="star19" name="rating1" /><label className="full" htmlFor="star19" />
                            <input type="radio" id="star20" name="rating1" /><label className="half" htmlFor="star20" />
                          </div>							    		
                        </div>	
                        <div className="rating-star">
                          <span className="pull-left code-edit">Spanish</span>
                          <div className="rating">
                            <input type="radio" id="star21" name="rating2" /><label className="full" htmlFor="star21" />
                            <input type="radio" id="star22" name="rating2" /><label className="half" htmlFor="star22" />
                            <input type="radio" id="star23" name="rating2" /><label className="full" htmlFor="star23" />
                            <input type="radio" id="star24" name="rating2" /><label className="half" htmlFor="star24" />
                            <input type="radio" id="star25" name="rating2" /><label className="full" htmlFor="star25" />
                            <input type="radio" id="star26" name="rating2" /><label className="half" htmlFor="star26" />
                            <input type="radio" id="star27" name="rating2" /><label className="full" htmlFor="star27" />
                            <input type="radio" id="star28" name="rating2" /><label className="half" htmlFor="star28" />
                            <input type="radio" id="star29" name="rating2" /><label className="full" htmlFor="star29" />
                            <input type="radio" id="star30" name="rating2" /><label className="half" htmlFor="star30" />
                          </div>							    		
                        </div>		
                        <div className="rating-star">
                          <span className="pull-left code-edit">Latin</span>
                          <div className="rating">
                            <input type="radio" id="star31" name="rating3" /><label className="full" htmlFor="star31" />
                            <input type="radio" id="star32" name="rating3" /><label className="half" htmlFor="star32" />
                            <input type="radio" id="star33" name="rating3" /><label className="full" htmlFor="star33" />
                            <input type="radio" id="star34" name="rating3" /><label className="half" htmlFor="star34" />
                            <input type="radio" id="star35" name="rating3" /><label className="full" htmlFor="star35" />
                            <input type="radio" id="star36" name="rating3" /><label className="half" htmlFor="star36" />
                            <input type="radio" id="star37" name="rating3" /><label className="full" htmlFor="star37" />
                            <input type="radio" id="star38" name="rating3" /><label className="half" htmlFor="star38" />
                            <input type="radio" id="star39" name="rating3" /><label className="full" htmlFor="star39" />
                            <input type="radio" id="star40" name="rating3" /><label className="half" htmlFor="star40" />
                          </div>							    		
                        </div>								    		    	
                      </div>
                    </li>{/* /.language-proficiency */}
                    <li className="personal-deatils code-edit-small">
                      <div className="icon">
                        <i className="fa fa-user-secret" aria-hidden="true" />
                      </div>
                      <div className="media-body">
                        <span className="tr-title">Personal Deatils</span>
                        <div className="row">
                          <div className="col-sm-4">
                            <label>Full Name<span className="pull-right">:</span> </label>
                          </div>
                          <div className="col-sm-8">
                            <span className="code-edit">Jhon Doe</span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-4">
                            <label>Father's Name<span className="pull-right">:</span> </label>
                          </div>
                          <div className="col-sm-8">
                            <span className="code-edit">Robert Doe</span>
                          </div>
                        </div>	
                        <div className="row">
                          <div className="col-sm-4">
                            <label>Date of Birth<span className="pull-right">:</span> </label>
                          </div>
                          <div className="col-sm-8">
                            <div className="calendar">
                              <input type="date" className="form-control" defaultValue="1982-01-26" />
                            </div>{/* calendar */}
                          </div>
                        </div>	
                        <div className="row">
                          <div className="col-sm-4">
                            <label>Birth Place<span className="pull-right">:</span> </label>
                          </div>
                          <div className="col-sm-8">
                            <span className="code-edit">United State of America</span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-4">
                            <label>Nationality<span className="pull-right">:</span> </label>
                          </div>
                          <div className="col-sm-8">
                            <span className="code-edit">Canadian</span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-4">
                            <label>Sex<span className="pull-right">:</span> </label>
                          </div>
                          <div className="col-sm-8">
                            <span className="code-edit">Male</span>
                          </div>
                        </div>	
                        <div className="row">
                          <div className="col-sm-4">
                            <label>Address<span className="pull-right">:</span> </label>
                          </div>
                          <div className="col-sm-8">
                            <span className="code-edit">121 King Street, Melbourne Victoria, 1200 USA</span>
                          </div>
                        </div>   	
                      </div>
                    </li>{/* /.personal-deatils */}
                    <li className="personal-deatils">
                      <div className="icon">
                        <i className="fa fa-hand-peace-o" aria-hidden="true" />
                      </div>
                      <div className="media-body">
                        <span className="tr-title">Declaration</span>
                        <div className="code-edit">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <br />
                          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni। dolores eos qui ratione voluptatem sequi nesciunt. </p>
                        </div>
                      </div>
                    </li>{/* /.personal-deatils */}				
                  </ul>
                  <div className="buttons pull-right">
                    <a href="employee-profile.html#" className="btn button-cancle">Cancle</a>
                    <a href="employee-profile.html#" className="btn btn-primary">Update Your Resume</a>
                  </div>								
                </div>{/* /.tab-pane */}
                <div role="tabpanel" className="tab-pane bookmark" id="bookmark">
                  <div className="row">
                    <div className="col-md-4 remove-item">
                      <div className="job-item">
                        <span className="remove-icon"><i className="fa fa-times" aria-hidden="true" /></span>
                        <div className="item-overlay">
                          <div className="job-info">
                            <a href="employee-profile.html#" className="btn btn-primary">Full Time</a>
                            <span className="tr-title">
                              <a href="job-details.html">Project Manager</a>
                              <span><a href="employee-profile.html#">Dig File</a></span>
                            </span>
                            <ul className="tr-list job-meta">
                              <li><i className="fa fa-map-signs" aria-hidden="true" />San Francisco, CA, US</li>
                              <li><i className="fa fa-briefcase" aria-hidden="true" />Mid Level</li>
                              <li><i className="fa fa-money" aria-hidden="true" />$5,000 - $6,000</li>
                            </ul>
                            <ul className="job-social tr-list">
                              <li><a href="employee-profile.html#"><i className="fa fa-heart-o" aria-hidden="true" /></a></li>
                              <li><a href="employee-profile.html#"><i className="fa fa-expand" aria-hidden="true" /></a></li>
                              <li><a href="employee-profile.html#"><i className="fa fa-bookmark-o" aria-hidden="true" /></a></li>
                              <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a></li>
                            </ul>
                          </div>										
                        </div>
                        <div className="job-info">
                          <div className="company-logo">
                            <img src="images/job/1.png" alt="images" className="img-fluid" />
                          </div>
                          <span className="tr-title">
                            <a href="employee-profile.html#">Project Manager</a>
                            <span><a href="employee-profile.html#">Dig File</a></span>
                          </span>
                          <ul className="tr-list job-meta">
                            <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                            <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                            <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                          </ul>
                          <div className="time">
                            <a href="employee-profile.html#"><span>Full Time</span></a>
                            <span className="pull-right">Posted 23 hours ago</span>
                          </div>							
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 remove-item">
                      <div className="job-item">
                        <span className="remove-icon"><i className="fa fa-times" aria-hidden="true" /></span>
                        <div className="item-overlay">
                          <div className="job-info">
                            <a href="job-details.html" className="btn btn-primary">Part Time</a>
                            <span className="tr-title">
                              <a href="job-details.html">Design Associate</a>
                              <span><a href="employee-profile.html#">Loop</a></span>
                            </span>
                            <ul className="tr-list job-meta">
                              <li><i className="fa fa-map-signs" aria-hidden="true" />San Francisco, CA, US</li>
                              <li><i className="fa fa-briefcase" aria-hidden="true" />Mid Level</li>
                              <li><i className="fa fa-money" aria-hidden="true" />$5,000 - $6,000</li>
                            </ul>
                            <ul className="job-social tr-list">
                              <li><a href="employee-profile.html#"><i className="fa fa-heart-o" aria-hidden="true" /></a></li>
                              <li><a href="employee-profile.html#"><i className="fa fa-expand" aria-hidden="true" /></a></li>
                              <li><a href="employee-profile.html#"><i className="fa fa-bookmark-o" aria-hidden="true" /></a></li>
                              <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a></li>
                            </ul>
                          </div>										
                        </div>								
                        <div className="job-info">
                          <div className="company-logo">
                            <img src="images/job/2.png" alt="images" className="img-fluid" />
                          </div>
                          <span className="tr-title">
                            <a href="employee-profile.html#">Design Associate</a>
                            <span><a href="employee-profile.html#">Loop</a></span>
                          </span>
                          <ul className="tr-list job-meta">
                            <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                            <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                            <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                          </ul>
                          <div className="time">
                            <a href="employee-profile.html#"><span className="part-time">Part Time</span></a>
                            <span className="pull-right">Posted 1 day ago</span>
                          </div>			
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 remove-item">
                      <div className="job-item">
                        <span className="remove-icon"><i className="fa fa-times" aria-hidden="true" /></span>
                        <div className="item-overlay">
                          <div className="job-info">
                            <a href="employee-profile.html#" className="btn btn-primary">Freelance</a>
                            <span className="tr-title">
                              <a href="job-details.html">Graphic Designer</a>
                              <span><a href="employee-profile.html#">Humanity Creative</a></span>
                            </span>
                            <ul className="tr-list job-meta">
                              <li><i className="fa fa-map-signs" aria-hidden="true" />San Francisco, CA, US</li>
                              <li><i className="fa fa-briefcase" aria-hidden="true" />Mid Level</li>
                              <li><i className="fa fa-money" aria-hidden="true" />$5,000 - $6,000</li>
                            </ul>
                            <ul className="job-social tr-list">
                              <li><a href="employee-profile.html#"><i className="fa fa-heart-o" aria-hidden="true" /></a></li>
                              <li><a href="employee-profile.html#"><i className="fa fa-expand" aria-hidden="true" /></a></li>
                              <li><a href="employee-profile.html#"><i className="fa fa-bookmark-o" aria-hidden="true" /></a></li>
                              <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a></li>
                            </ul>
                          </div>										
                        </div>								
                        <div className="job-info">
                          <div className="company-logo">
                            <img src="images/job/3.png" alt="images" className="img-fluid" />
                          </div>
                          <span className="tr-title">
                            <a href="employee-profile.html#">Graphic Designer</a>
                            <span><a href="employee-profile.html#">Humanity Creative</a></span>
                          </span>
                          <ul className="tr-list job-meta">
                            <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                            <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                            <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                          </ul>
                          <div className="time">
                            <a href="employee-profile.html#"><span className="freelance">Freelance</span></a>
                            <span className="pull-right">Posted 10 day ago</span>
                          </div>			
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 remove-item">
                      <div className="job-item">
                        <span className="remove-icon"><i className="fa fa-times" aria-hidden="true" /></span>
                        <div className="item-overlay">
                          <div className="job-info">
                            <a href="employee-profile.html#" className="btn btn-primary">Full Time</a>
                            <span className="tr-title">
                              <a href="job-details.html">Design Consultant</a>
                              <span><a href="employee-profile.html#">Families</a></span>
                            </span>
                            <ul className="tr-list job-meta">
                              <li><i className="fa fa-map-signs" aria-hidden="true" />San Francisco, CA, US</li>
                              <li><i className="fa fa-briefcase" aria-hidden="true" />Mid Level</li>
                              <li><i className="fa fa-money" aria-hidden="true" />$5,000 - $6,000</li>
                            </ul>
                            <ul className="job-social tr-list">
                              <li><a href="employee-profile.html#"><i className="fa fa-heart-o" aria-hidden="true" /></a></li>
                              <li><a href="employee-profile.html#"><i className="fa fa-expand" aria-hidden="true" /></a></li>
                              <li><a href="employee-profile.html#"><i className="fa fa-bookmark-o" aria-hidden="true" /></a></li>
                              <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a></li>
                            </ul>
                          </div>										
                        </div>								
                        <div className="job-info">
                          <div className="company-logo">
                            <img src="images/job/4.png" alt="images" className="img-fluid" />
                          </div>
                          <span className="tr-title">
                            <a href="employee-profile.html#">Design Consultant</a>
                            <span><a href="employee-profile.html#">Families</a></span>
                          </span>
                          <ul className="tr-list job-meta">
                            <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                            <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                            <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                          </ul>
                          <div className="time">
                            <a href="employee-profile.html#"><span>Full Time</span></a>
                            <span className="pull-right">Posted Oct 09, 2017</span>
                          </div>				
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 remove-item">
                      <div className="job-item">
                        <span className="remove-icon"><i className="fa fa-times" aria-hidden="true" /></span>
                        <div className="item-overlay">
                          <div className="job-info">
                            <a href="employee-profile.html#" className="btn btn-primary">Part Time</a>
                            <span className="tr-title">
                              <a href="job-details.html">Project Manager</a>
                              <span><a href="employee-profile.html#">Sky Creative</a></span>
                            </span>
                            <ul className="tr-list job-meta">
                              <li><i className="fa fa-map-signs" aria-hidden="true" />San Francisco, CA, US</li>
                              <li><i className="fa fa-briefcase" aria-hidden="true" />Mid Level</li>
                              <li><i className="fa fa-money" aria-hidden="true" />$5,000 - $6,000</li>
                            </ul>
                            <ul className="job-social tr-list">
                              <li><a href="employee-profile.html#"><i className="fa fa-heart-o" aria-hidden="true" /></a></li>
                              <li><a href="employee-profile.html#"><i className="fa fa-expand" aria-hidden="true" /></a></li>
                              <li><a href="employee-profile.html#"><i className="fa fa-bookmark-o" aria-hidden="true" /></a></li>
                              <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a></li>
                            </ul>
                          </div>										
                        </div>								
                        <div className="job-info">
                          <div className="company-logo">
                            <img src="images/job/5.png" alt="images" className="img-fluid" />
                          </div>
                          <span className="tr-title">
                            <a href="employee-profile.html#">Project Manager</a>
                            <span><a href="employee-profile.html#">Sky Creative</a></span>
                          </span>
                          <ul className="tr-list job-meta">
                            <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                            <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                            <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                          </ul>	
                          <div className="time">
                            <a href="employee-profile.html#"><span className="part-time">Part Time</span></a>
                            <span className="pull-right">Posted 1 day ago</span>
                          </div>			
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 remove-item">
                      <div className="job-item">
                        <span className="remove-icon"><i className="fa fa-times" aria-hidden="true" /></span>
                        <div className="item-overlay">
                          <div className="job-info">
                            <a href="employee-profile.html#" className="btn btn-primary">Freelance</a>
                            <span className="tr-title">
                              <a href="job-details.html">Design Associate</a>
                              <span><a href="employee-profile.html#">Pencil</a></span>
                            </span>
                            <ul className="tr-list job-meta">
                              <li><i className="fa fa-map-signs" aria-hidden="true" />San Francisco, CA, US</li>
                              <li><i className="fa fa-briefcase" aria-hidden="true" />Mid Level</li>
                              <li><i className="fa fa-money" aria-hidden="true" />$5,000 - $6,000</li>
                            </ul>
                            <ul className="job-social tr-list">
                              <li><a href="employee-profile.html#"><i className="fa fa-heart-o" aria-hidden="true" /></a></li>
                              <li><a href="employee-profile.html#"><i className="fa fa-expand" aria-hidden="true" /></a></li>
                              <li><a href="employee-profile.html#"><i className="fa fa-bookmark-o" aria-hidden="true" /></a></li>
                              <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a></li>
                            </ul>
                          </div>										
                        </div>								
                        <div className="job-info">
                          <div className="company-logo">
                            <img src="images/job/6.png" alt="images" className="img-fluid" />
                          </div>
                          <span className="tr-title">
                            <a href="employee-profile.html#">Design Associate</a>
                            <span><a href="employee-profile.html#">Pencil</a></span>
                          </span>
                          <ul className="tr-list job-meta">
                            <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                            <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                            <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                          </ul>
                          <div className="time">
                            <a href="employee-profile.html#"><span className="freelance">Freelance</span></a>
                            <span className="pull-right">Posted 23 hours ago</span>
                          </div>				
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 remove-item">
                      <div className="job-item">
                        <span className="remove-icon"><i className="fa fa-times" aria-hidden="true" /></span>
                        <div className="item-overlay">
                          <div className="job-info">
                            <a href="employee-profile.html#" className="btn btn-primary">Full Time</a>
                            <span className="tr-title">
                              <a href="job-details.html">Graphic Designer</a>
                              <span><a href="employee-profile.html#">Fox</a></span>
                            </span>
                            <ul className="tr-list job-meta">
                              <li><i className="fa fa-map-signs" aria-hidden="true" />San Francisco, CA, US</li>
                              <li><i className="fa fa-briefcase" aria-hidden="true" />Mid Level</li>
                              <li><i className="fa fa-money" aria-hidden="true" />$5,000 - $6,000</li>
                            </ul>
                            <ul className="job-social tr-list">
                              <li><a href="employee-profile.html#"><i className="fa fa-heart-o" aria-hidden="true" /></a></li>
                              <li><a href="employee-profile.html#"><i className="fa fa-expand" aria-hidden="true" /></a></li>
                              <li><a href="employee-profile.html#"><i className="fa fa-bookmark-o" aria-hidden="true" /></a></li>
                              <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a></li>
                            </ul>
                          </div>										
                        </div>								
                        <div className="job-info">
                          <div className="company-logo">
                            <img src="images/job/7.png" alt="images" className="img-fluid" />
                          </div>
                          <span className="tr-title">
                            <a href="employee-profile.html#">Graphic Designer</a>
                            <span><a href="employee-profile.html#">Fox</a></span>
                          </span>
                          <ul className="tr-list job-meta">
                            <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                            <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                            <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                          </ul>
                          <div className="time">
                            <a href="employee-profile.html#"><span>Full Time</span></a>
                            <span className="pull-right">Posted Oct 09, 2017</span>
                          </div>				
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 remove-item">
                      <div className="job-item">
                        <span className="remove-icon"><i className="fa fa-times" aria-hidden="true" /></span>
                        <div className="item-overlay">
                          <div className="job-info">
                            <a href="employee-profile.html#"><span className="btn btn-primary">Part Time</span></a>
                            <span className="tr-title">
                              <a href="job-details.html">Design Consultant</a>
                              <span><a href="employee-profile.html#">Owl</a></span>
                            </span>
                            <ul className="tr-list job-meta">
                              <li><i className="fa fa-map-signs" aria-hidden="true" />San Francisco, CA, US</li>
                              <li><i className="fa fa-briefcase" aria-hidden="true" />Mid Level</li>
                              <li><i className="fa fa-money" aria-hidden="true" />$5,000 - $6,000</li>
                            </ul>
                            <ul className="job-social tr-list">
                              <li><a href="employee-profile.html#"><i className="fa fa-heart-o" aria-hidden="true" /></a></li>
                              <li><a href="employee-profile.html#"><i className="fa fa-expand" aria-hidden="true" /></a></li>
                              <li><a href="employee-profile.html#"><i className="fa fa-bookmark-o" aria-hidden="true" /></a></li>
                              <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a></li>
                            </ul>
                          </div>										
                        </div>								
                        <div className="job-info">
                          <div className="company-logo">
                            <img src="images/job/8.png" alt="images" className="img-fluid" />
                          </div>
                          <span className="tr-title">
                            <a href="employee-profile.html#">Design Consultant</a>
                            <span><a href="employee-profile.html#">Owl</a></span>
                          </span>
                          <ul className="tr-list job-meta">
                            <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                            <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                            <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                          </ul>
                          <div className="time">
                            <a href="employee-profile.html#"><span className="part-time">Part Time</span></a>
                            <span className="pull-right">Posted 10 day ago</span>
                          </div>			
                        </div>
                      </div>
                    </div>
                  </div>{/* /.row */}							
                </div>{/* /.tab-pane */}
                <div role="tabpanel" className="tab-pane apply-job" id="archived">
                  <div className="job-item">
                    <div className="job-info">
                      <div className="left-content">
                        <div className="clearfix">
                          <div className="company-logo">
                            <img src="images/job/1.png" alt="images" className="img-fluid" />
                          </div>
                          <span className="tr-title">
                            <a href="job-details.html">Design Associate</a><span><a href="employee-profile.html#">Loop</a></span>
                          </span>
                          <span><a href="employee-profile.html#" className="btn btn-primary">Part Time</a></span>
                        </div>
                        <ul className="tr-list job-meta">
                          <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                          <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                          <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                        </ul>										
                      </div>
                      <div className="right-content">
                        <a href="employee-profile.html#" className="btn button-cancle">Delete application</a>
                        <span className="applied">Applied: 3 weeks ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="job-item remove-item">
                    <div className="job-info">
                      <div className="left-content">
                        <div className="clearfix">
                          <div className="company-logo">
                            <img src="images/job/2.png" alt="images" className="img-fluid" />
                          </div>
                          <span className="tr-title">
                            <a href="job-details.html">Design Associate</a><span><a href="employee-profile.html#">Loop</a></span>
                          </span>
                          <span><a href="employee-profile.html#" className="btn btn-primary">Part Time</a></span>
                        </div>
                        <ul className="tr-list job-meta">
                          <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                          <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                          <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                        </ul>										
                      </div>
                      <div className="right-content">
                        <a href="employee-profile.html#" className="btn button-cancle">Delete application</a>
                        <span className="applied">Applied: 3 weeks ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="job-item remove-item">
                    <div className="job-info">
                      <div className="left-content">
                        <div className="clearfix">
                          <div className="company-logo">
                            <img src="images/job/3.png" alt="images" className="img-fluid" />
                          </div>
                          <span className="tr-title">
                            <a href="job-details.html">Design Associate</a><span><a href="employee-profile.html#">Loop</a></span>
                          </span>
                          <span><a href="employee-profile.html#" className="btn btn-primary">Part Time</a></span>
                        </div>
                        <ul className="tr-list job-meta">
                          <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                          <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                          <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                        </ul>										
                      </div>
                      <div className="right-content">
                        <a href="employee-profile.html#" className="btn button-cancle">Delete application</a>
                        <span className="applied">Applied: 3 weeks ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="job-item remove-item">
                    <div className="job-info">
                      <div className="left-content">
                        <div className="clearfix">
                          <div className="company-logo">
                            <img src="images/job/4.png" alt="images" className="img-fluid" />
                          </div>
                          <span className="tr-title">
                            <a href="job-details.html">Design Associate</a><span><a href="employee-profile.html#">Loop</a></span>
                          </span>
                          <span><a href="employee-profile.html#" className="btn btn-primary">Part Time</a></span>
                        </div>
                        <ul className="tr-list job-meta">
                          <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                          <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                          <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                        </ul>										
                      </div>
                      <div className="right-content">
                        <a href="employee-profile.html#" className="btn button-cancle">Delete application</a>
                        <span className="applied">Applied: 3 weeks ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="job-item remove-item">
                    <div className="job-info">
                      <div className="left-content">
                        <div className="clearfix">
                          <div className="company-logo">
                            <img src="images/job/5.png" alt="images" className="img-fluid" />
                          </div>
                          <span className="tr-title">
                            <a href="job-details.html">Design Associate</a><span><a href="employee-profile.html#">Loop</a></span>
                          </span>
                          <span><a href="employee-profile.html#" className="btn btn-primary">Part Time</a></span>
                        </div>
                        <ul className="tr-list job-meta">
                          <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                          <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                          <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                        </ul>										
                      </div>
                      <div className="right-content">
                        <a href="employee-profile.html#" className="btn button-cancle">Delete application</a>
                        <span className="applied">Applied: 3 weeks ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="job-item remove-item">
                    <div className="job-info">
                      <div className="left-content">
                        <div className="clearfix">
                          <div className="company-logo">
                            <img src="images/job/6.png" alt="images" className="img-fluid" />
                          </div>
                          <span className="tr-title">
                            <a href="job-details.html">Design Associate</a><span><a href="employee-profile.html#">Loop</a></span>
                          </span>
                          <span><a href="employee-profile.html#" className="btn btn-primary">Part Time</a></span>
                        </div>
                        <ul className="tr-list job-meta">
                          <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                          <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                          <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                        </ul>										
                      </div>
                      <div className="right-content">
                        <a href="employee-profile.html#" className="btn button-cancle">Delete application</a>
                        <span className="applied">Applied: 3 weeks ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="job-item remove-item">
                    <div className="job-info">
                      <div className="left-content">
                        <div className="clearfix">
                          <div className="company-logo">
                            <img src="images/job/7.png" alt="images" className="img-fluid" />
                          </div>
                          <span className="tr-title">
                            <a href="job-details.html">Design Associate</a><span><a href="employee-profile.html#">Loop</a></span>
                          </span>
                          <span><a href="employee-profile.html#" className="btn btn-primary">Part Time</a></span>
                        </div>
                        <ul className="tr-list job-meta">
                          <li><span><i className="fa fa-map-signs" aria-hidden="true" /></span>San Francisco, CA, US</li>
                          <li><span><i className="fa fa-briefcase" aria-hidden="true" /></span>Mid Level</li>
                          <li><span><i className="fa fa-money" aria-hidden="true" /></span>$5,000 - $6,000</li>
                        </ul>										
                      </div>
                      <div className="right-content">
                        <a href="employee-profile.html#" className="btn button-cancle">Delete application</a>
                        <span className="applied">Applied: 3 weeks ago</span>
                      </div>
                    </div>
                  </div>						
                </div>{/* /.tab-pane */}
                <div role="tabpanel" className="tab-pane section close-account" id="close-account">
                  <h1>Delete Your Account</h1>
                  <span>Are you sure, you want to delete your account?</span>
                  <div className="buttons">
                    <a href="employee-profile.html#" className="btn btn-primary">Delete Account</a>
                    <a href="employee-profile.html#" className="btn button-cancle">Cancle</a>
                  </div>
                </div>{/* /.tab-pane */}
              </div>
            </div>
          </div>{/* /.row */}
        </div>{/* /.container */}
      </div>
      
    )
  }
}
