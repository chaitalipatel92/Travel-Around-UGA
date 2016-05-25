<%-- 
    Document   : index
    Created on : Jul 21, 2015, 4:02:02 PM
    Author     : Chaitali Patel
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Travel Around UGA</title>
        <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
        <link rel="stylesheet" href="css/style.css" type="text/css" media="all" />
        <link rel="stylesheet" href="css/formcss.css" type="text/css" media="all" />
        <script src="js/jquery-1.4.2.min.js" type="text/javascript" charset="utf-8"></script>
        <script src="js/jquery.jcarousel.pack.js" type="text/javascript" charset="utf-8"></script>
        <script src="js/func.js" type="text/javascript" charset="utf-8"></script>
        <script src="js/login.js" type="text/javascript" charset="utf-8"></script>
        <script src="js/signup.js" type="text/javascript" charset="utf-8"></script>
        <script src="js/adminfunctions.js" type="text/javascript" charset="utf-8"></script>
        <script src="js/userfunctions.js" type="text/javascript" charset="utf-8"></script>
        <style type="text/css">
            <!--
            .style1 {
                font-size: 18px;
                font-weight: bold;
            }
            .style2 {color: #FFFFFF}
            .style3 {color: #CC0000}
            .style4 {font-size: 9em}
            .style5 {
                font-size: 1.7em
            }
            .style7 {
                font-size: 3.5em;
            }
            .style8 {color: #000000}
            .style9 {font-weight: bold}
            .style11 {font-weight: bold}
            .style12 {font-weight: bold}
            .style13 {
                color: #000000;
                font-size: 0.8em;
            }
            -->
        </style>
    </head>
    <body>
        <!-- START PAGE SOURCE -->
        <div id="wrapper">

            <!--Head Part-->
            <div id="head">
                <div class="shell">
                    <div class="sign">
                        <p class="style1">Travel <br />
                            Around<br />
                            UGA!!!!</p>
                    </div>
                    <div class="slider-holder">
                        <div class="caption"> <a href="#" class="btn prev"></a> <a href="#" class="btn next"></a>        </div>
                        <div class="slider1">
                            <ul>
                                <li width="446" height="196"><img src="css/images/souleHall.jpg" alt="" width="446" /></li>
                                <li width="453" height="196"><img src="css/images/gaCenter.jpg" alt="" width="453" height="196" /></li>
                                <li width="452" height="293"><img src="css/images/physics.jpg" alt="" width="452" height="293" /></li>
                                <li width="450" height="298"><img src="css/images/aderholdHall.jpg" alt="" width="450" height="298" /></li>
                                <li width="448" height="305"><img src="css/images/plantScience.jpg" alt="" width="448" height="305" /></li>
                            </ul>
                        </div>
                    </div>
                    <div class="slider2">
                        <ul>
                            <li>
                                <div class="item">
                                    <h3>Family Housing</h3>
                                    <p>Route operates from 6:15 a.m. until 1:00 a.m.<br>Daytime service continues to depart every 15 minutes until 6:30 p.m.</p>
                                    <p class="learn"><a href="http://www.transit.uga.edu/sites/transit.uga.edu/files/FH0910.pdf" target="_blank">Learn More</a></p>
                                </div>
                            </li>
                            <li>
                                <div class="item">
                                    <h3>East West</h3>
                                    <p>Buses first depart from Russell Hall, the Hull Street Parking Deck and the East Campus Parking Deck at 6:30 a.m.<br>They depart every 14 minutes starting at 6:30 a.m.</p>
                                    <p class="learn"><a href="http://www.transit.uga.edu/sites/transit.uga.edu/files/EW_Fall_12.pdf" target="_blank">Learn More</a></p>
                                </div>
                            </li>
                            <li>
                                <div class="item">
                                    <h3>North South</h3>
                                    <p>This route runs from 7:00 a.m. until 6:30 p.m.<br>Buses depart every 10 minutes, with service starting at 7:00 a.m. at the intersection of Ag Drive and College Station Road and 7:05 at Human Resources.</p>
                                    <p class="learn"><a href="http://www.transit.uga.edu/sites/transit.uga.edu/files/NSspr06.pdf" target="_blank">Learn More</a></p>
                                </div>
                            </li>
                            <li>
                                <div class="item">
                                    <h3>Orbit</h3>
                                    <p>This route operates from 6:00 a.m. to 7:00 p.m.<br>
Bus departure schedules are as follows:<br>
Every 20 minutes from 6:00 a.m.-7:00 a.m. <br>
Every 10 minutes from 7:00 a.m.- 8:20 a.m.</p>
                                    <p class="learn"><a href="http://www.transit.uga.edu/sites/transit.uga.edu/files/Orbit_12.pdf" target="_blank">Learn More</a></p>
                                </div>
                            </li>
                            <li>
                                <div class="item">
                                    <h3>Milledge Avenue</h3>
                                    <p>This route operates from 7:00 a.m. to 10:00 p.m.<br>
Buses depart every 6 minutes, beginning at 7:00 a.m. from Five Points and the Main Library.</p>
                                    <p class="learn"><a href="http://www.transit.uga.edu/sites/transit.uga.edu/files/Milledge_12.pdf" target="_blank">Learn More</a></p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="nav">
                        <ul>
                            <li><a href="#" rel="1"></a></li>
                            <li><a href="#" rel="2"></a></li>
                            <li><a href="#" rel="3"></a></li>
                            <li><a href="#" rel="4"></a></li>
                            <li><a href="#" rel="5"></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <!--Login Part-->
            <div id="main" align="center">
                <div class="shell">
                    <form id="loginform">
                        <table width="283" height="252" border="0" cellpadding="5" bgcolor="#000000">
                            <tr></tr>
                            <tr></tr>
                            <tr align="center">
                                <td width="68" height="37"><span class="style20 style2"><strong>&nbsp;&nbsp;USERNAME</strong></span></td>
                                <td width="-6">:</td>
                                <td width="183"><label>
                                        <input type="text" name="userId" id="userId">
                                    </label></td>
                            </tr>
                            <tr align="center">
                                <td height="45"><span class="style19 style2"><strong>&nbsp;&nbsp;PASSWORD</strong></span></td>
                                <td>:</td>
                                <td><label>
                                        <input type="password" name="password" id="password">
                                    </label></td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td height="62" colspan="3"><div align="center">
                                        <input name="loginbutton" type="button" class="style1" id="loginbutton" value="Login">
                                        <label></label>
                                        <br><br>
                                    </div></td>
                            </tr>
                                    <tr>
                                        <td height="57" colspan="3" align="center"><label><strong><a href="#" class="style1 style21 style3" id="signuplink"> Sign Up </a></strong><br>
                                                </td>
                                                </tr>
                                                <tr>

                                                </tr>
                                                </table>
                                                </form>
                                                </div>


                                                </div>

                                                <!--Admin Buttons-->
                                                <div class="shell" align="center" id="adminbuttons" hidden="true">
                                                    <table align="center">
                                                        <tr>
                                                            <td>
                                                                <div id="menu" class="form-style-3">

                                                                    <ul>
                                                                        <li id="path"><input type="button" id="adminCreatePathButton" value="Create Path"/></li>
                                                                        <li id="event"><input type="button" id="adminCreateEventButton" value="Create Event" /></li>
                                                                        <li id="landmark"><input type="button" id="adminCreateLandmarkButton" value="Create Landmark"/></li>
                                                                        <li id="getevent"><input type="button" id="adminCheckEventsButton" value="Show All Events"/></li>
                                                                        <li id="adminLogout"><input type="button" id="adminlogout" value="Logout"/></li>
                                                                    </ul>
                                                                </div>
                                                            </td></tr></table>
                                                </div>

                                                <!--Regular User Buttons-->
                                                <div class="shell" align="center" id="userbuttons" hidden="true">
                                                    <table align="center">
                                                        <tr>
                                                            <td>
                                                                <div id="menu" class="form-style-3">

                                                                    <ul>
                                                                        <li id="userpath"><input type="button" id="userGetDirectionButton" value="Get Directions"/></li>
                                                                        <li id="userevent"><input type="button" id="userCreateEventButton" value="Create Event" /></li>
                                                                        <li id="userlandmark"><input type="button" id="userCheckEventsButton" value="Check Events"/></li>
                                                                        <li id="userLogout"><input type="button" id="userlogout" value="Logout"/></li>
                                                                    </ul>
                                                                </div>
                                                            </td></tr></table>
                                                </div>

                                                <!--Sign-Up Form-->
                                                <div id="signupmain" align="center" hidden="true">
                                                    <div class="shell">
                                                        <form id="signupform">
                                                            <table width="290" height="238" border="0" cellpadding="5" bgcolor="#000000">
                                                                <tr>
                                                                    <td height="30" colspan="3"><div align="center">
                                                                            <label><h3 class="style3 style4 style5">Enter Your Details Here</h3>
                                                                                <span class="style3">
                                                                            </label>
                                                                            </span></div>                              </td>
                                                                </tr>
                                                                <tr></tr>
                                                                <tr align="center">
                                                                    <td width="68" height="37"><div align="left"><span class="style20 style2"><strong>&nbsp;&nbsp;Name</strong></span></div></td>
                                                                    <td width="-6">:</td>
                                                                    <td width="190"><label>
                                                                            <input type="text" name="name" id="name">
                                                                        </label></td>
                                                                </tr>
                                                                <tr align="center">
                                                                    <td width="68" height="37"><div align="left"><span class="style20 style2"><strong>&nbsp;&nbsp;User ID</strong></span></div></td>
                                                                    <td width="-6">:</td>
                                                                    <td width="190"><label>
                                                                            <input type="text" name="uid" id="uid">
                                                                        </label></td>
                                                                </tr>
                                                                <tr align="center">
                                                                    <td height="45"><div align="left"><span class="style19 style2"><strong>&nbsp;&nbsp;Password</strong></span></div></td>
                                                                    <td>:</td>
                                                                    <td width="190"><label>
                                                                            <input type="password" name="pass" id="pass">
                                                                        </label></td>
                                                                </tr>
                                                                <tr align="center">
                                                                    <td width="68" height="34"><div align="left"><span class="style20 style2"><strong>&nbsp;&nbsp;Email ID</strong></span></div></td>
                                                                    <td width="-6">:</td>
                                                                    <td width="190"><label>
                                                                            <input type="text" name="eid" id="eid">
                                                                        </label></td>
                                                                </tr>
                                                                <tr></tr>
                                                                <tr>
                                                                    <td height="39" colspan="3"><div align="center">
                                                                            <input name="signupbutton" type="button" class="style1" id="signupbutton" value="Sign Up">
                                                                            <label></label>
                                                                        </div></td>
                                                                </tr>
                                                            </table> 
                                                            <input class="button" type="button" name="backbutton" value="Back" id="backbutton"/>
                                                        </form>

                                                        <p>&nbsp;</p>
                                                    </div>
                                                </div>

                                                <!--Path Creation by Admin-->
                                                <div id="pathform" align="center" hidden="true">
                                                    <br><br><br>
                                                    <h4 align="center" class="style7 style8">Travel Around UGA</h4>
                                                    <form action="" method="post">
                                                        <fieldset>
                                                            <legend><span class="style9">Select Path Type :</span></legend>

                                                            <table width="200" border="0">
                                                                <tr>
                                                                    <td height="32"><p align="center">   
                                                                            <input type="radio" name="path" value="buspath" id="buspath">
                                                                            <span class="style11 style8">Bus Path</span> </p></td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="30"><p align="center">   
                                                                            <input type="radio" name="path" value="walkpath" id="walkpath">
                                                                            <span class="style11 style8">Walk Path</span> </p></td>
                                                                </tr>
                                                            </table>


                                                        </fieldset>

                                                        <fieldset>
                                                            <legend><span class="style9">Select End Points :</span></legend>

                                                            <table height="103">
                                                                <tr>
                                                                    <td width="94" height="34" style="margin-top:auto">
                                                                        <span class="style8 style12"><strong>Start Point :</strong></span>               </td>

                                                                    <td width="131">
                                                                        <p>
                                                                            <select id="selectstartpoint" name="selectstartpoint">
                                                                                <!--Get Landmarks-->
                                                                            </select>
                                                                        </p>     			</td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="29"><span class="style8"><strong>End Point :</strong></span>                </td>

                                                                    <td>
                                                                        <p>
                                                                            <select id="selectendpoint" name="selectendpoint">
                                                                                <!--Get Landmarks-->
                                                                            </select>
                                                                        </p>     			</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <span class="style8"><strong>Distance :</strong></span>                </td>
                                                                    <td><input type="text" name="distance" id="distance">                </td>
                                                                </tr>


                                                            </table>
                                                            <br>
                                                            </span>

                                                        </fieldset>

                                                        <div id="busDiv" hidden="true">
                                                            <fieldset style="top:-25px; position:relative; width:415px;">
                                                                <table width="288" border="0">
                                                                    <tr>
                                                                        <td width="108" height="32"><span class="style8 style12"><strong>Select Bus :</strong></span></td>
                                                                        <td width="170"><select id="busSelect" name="busSelect">
                                                                                <!--Get bus list-->
                                                                            </select></td>
                                                                    </tr> 
                                                                    <tr>
                                                                        <td height="32"><span class="style12 style8">Travel Time (seconds) :</span></td>
                                                                        <td><input type="text" name="traveltime" id="traveltime"></td>
                                                                    </tr>
                                                                </table>
                                                            </fieldset>
                                                        </div>
                                                        <div id="walkDiv" align="center" hidden="true">
                                                            <fieldset style="top:-25px; position:relative; width:415px;">
                                                                <table width="412" height="44" border="0">

                                                                    <tr>
                                                                        <td width="93">
                                                                            <span class="style8"><strong>Compass Direction :</strong></span></td>
                                                                        <td width="309"><input type="text" name="comDirection" id="comDirection"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <span class="style8"><strong>Description :</strong></span></td>
                                                                        <td><textarea name="walkdescription" id="walkdescription" rows="4" style="width:300px"></textarea></td>
                                                                    </tr>
                                                                </table>
                                                            </fieldset>
                                                        </div>

                                                        <p><input class="button" type="button" name="createpath" value="Create" id="createpath" />
                                                            <input class="button" type="button" name="cancelcreatepath" value="Cancel" id="cancelcreatepath" /></p>
                                                    </form>
                                                </div>

                                                <!--Event Creation by Admin-->
                                                <div id="eventDiv" hidden="true" align="center">
                                                    <br><br><br>
                                                    <h4 align="center" class="style7 style8">Travel Around UGA</h4>
                                                    <form action="" method="post">
                                                        <fieldset>
                                                            <legend><span class="style9">Enter Event Details :</span></legend>

                                                            <table width="519" height="256">
                                                                <tr>
                                                                    <td height="29"><p class="style6 style8"><strong>Event Name :</strong><strong> </strong></p>
                                                                    </td>

                                                                    <td><input type="text" name="eventname" id="eventname" width="350">                </td>
                                                                </tr>
                                                                <tr>
                                                                    <td width="201">
                                                                        <span class="style8 style6"><strong>Description :</strong></span></td>
                                                                    <td><textarea name="eventdescription" id="eventdescription" rows="4" style="width:300px"></textarea></td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="29"><p class="style6 style8"><strong>Date-Time </strong></p>
                                                                        <p class="style6 style8"><strong>(YYYY-MM-DD HH:MM:SS) : </strong></p></td>

                                                                    <td><input type="text" name="datetime" id="datetime" width="350">                </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>                <span class="style8"><strong>Venue :                </strong></span></td>
                                                                    <td width="306">
                                                                        <p>
                                                                            <select id="eventvenue" name="eventvenue">
                                                                                <!--Get Landmarks-->
                                                                            </select>
                                                                        </p>     			</td>
                                                                </tr>
                                                            </table>
                                                            <br>
                                                            </span>

                                                        </fieldset>	
                                                        <p><input class="button" type="button" name="createevent" value="Create" id="createevent" />
                                                            <input class="button" type="button" name="cancelevent" value="Cancel" id="cancelevent" /></p>                                                        
                                                    </form>
                                                </div>

                                                <!--Event Creation by Regular User-->
                                                <div id="userEventDiv" hidden="true" align="center">
                                                    <br><br><br>
                                                    <h4 align="center" class="style7 style8">Travel Around UGA</h4>
                                                    <form action="" method="post">
                                                        <fieldset>
                                                            <legend><span class="style9">Enter Event Details :</span></legend>

                                                            <table width="519" height="256">
                                                                <tr>
                                                                    <td height="29"><p class="style6 style8"><strong>Event Name :</strong><strong> </strong></p>
                                                                    </td>

                                                                    <td><input type="text" name="usereventname" id="usereventname" width="350">                </td>
                                                                </tr>
                                                                <tr>
                                                                    <td width="201">
                                                                        <span class="style8 style6"><strong>Description :</strong></span></td>
                                                                    <td><textarea name="usereventdescription" id="usereventdescription" rows="4" style="width:300px"></textarea></td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="29"><p class="style6 style8"><strong>Date-Time </strong></p>
                                                                        <p class="style6 style8"><strong>(YYYY-MM-DD HH:MM:SS) : </strong></p></td>

                                                                    <td><input type="text" name="userdatetime" id="userdatetime" width="350">                </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>                <span class="style8"><strong>Venue :                </strong></span></td>
                                                                    <td width="306">
                                                                        <p>
                                                                            <select id="usereventvenue" name="usereventvenue">
                                                                                <!--Get Landmarks-->
                                                                            </select>
                                                                        </p>     			</td>
                                                                </tr>
                                                            </table>
                                                            <br>
                                                            </span>

                                                        </fieldset>	
                                                        <p><input class="button" type="button" name="createuserevent" value="Create" id="createuserevent" />
                                                            <input class="button" type="button" name="canceluserevent" value="Cancel" id="canceluserevent" /></p>                                                        
                                                    </form>
                                                </div>
                                                <!--Edit Event by Admin-->
                                                <div id="editEventDiv" hidden="true" align="center">
                                                    <br><br><br>
                                                    <h4 align="center" class="style7 style8">Travel Around UGA</h4>
                                                    <form action="" method="post">
                                                        <fieldset>
                                                            <legend><span class="style9">Edit Event Details :</span></legend>
                                                            <input type="text" name="editeventid" id="editeventid" hidden="true">
                                                            <p class="style6 style8"><strong>Event Name :</strong><strong> </strong></p>
                                                            <p>
                                                                <input type="text" name="editeventname" id="editeventname" width="350">     
                                                            </p>
                                                            <p>                                                                          <span class="style8 style6"><strong>Description :</strong></span>
                                                                <textarea name="editeventdescription" id="editeventdescription" rows="4" style="width:300px"></textarea>
                                                            </p>
                                                            <p class="style6 style8"><strong>Date-Time </strong></p>
                                                            <p class="style6 style8"><strong>(YYYY-MM-DD HH:MM:SS) : </strong></p>

                                                            
                                                                <input type="text" name="editdatetime" id="editdatetime" width="300" >     
                                                                <br>
                                                            
                                                            <p><span class="style8"><strong>Venue :</strong></span></p>
                                                            <p>
                                                                <br>
                                                                <select id="editeventvenue" name="editeventvenue">
                                                                    <!--Get Landmarks-->
                                                                </select>
                                                            </p>
                                                            <br>
                                                            </span>

                                                        </fieldset>	
                                                        <p><input class="button" type="button" name="editevent" value="Update" id="editevent" />
                                                            <input class="button" type="button" name="canceleditevent" value="Cancel" id="canceleditevent" /></p>                                                        
                                                    </form>
                                                </div>

                                                <!--Landmark creation by Admin-->
                                                <div id="landmarkDiv" hidden="true" align="center">
                                                    <br><br><br>
                                                    <h4 align="center" class="style7 style8">Travel Around UGA</h4>
                                                    <form action="" method="post">
                                                        <fieldset>
                                                            <legend><span class="style9">Enter Landmark Details :</span></legend>

                                                            <table width="423" height="151">
                                                                <tr>
                                                                    <td width="206" height="34"><p class="style6 style8"><strong>Landmark Id (XXX) </strong><strong> : </strong></p>
                                                                    </td>

                                                                    <td width="193"><input type="text" name="landmarkid" id="landmarkid">                </td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="33"><p class="style6 style8"><strong>Landmark Name : </strong></p>
                                                                    </td>

                                                                    <td><input type="text" name="landmarkname" id="landmarkname">                </td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="37"><p class="style6 style8"><strong>Latitude (NNN.NNNN) : </strong></p>
                                                                    </td>

                                                                    <td><input type="text" name="latitude" id="latitude">                </td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="29"><p class="style6 style8"><strong>Longitude (NNN.NNNN) : </strong></p>
                                                                    </td>

                                                                    <td><input type="text" name="longitude" id="longitude">                </td>
                                                                </tr>
                                                            </table>
                                                            <br>
                                                            </span>

                                                        </fieldset>	
                                                        <p><input class="button" type="button" name="createlandmark" value="Create" id="createlandmark" />
                                                            <input class="button" type="button" name="cancellandmarkcreate" value="Cancel" id="cancellandmarkcreate" /></p>                                                        
                                                    </form>
                                                </div>


                                                <!--Get all Events to the Admin-->
                                                <div id ="allAdminEvents" align="center" hidden="true">
                                                    <br><br><br>
                                                    <h4 align="center" class="style7 style8">Travel Around UGA</h4>
                                                    <form action="" method="post">
                                                        <fieldset>
                                                            <legend><span class="style9">All Events Details :</span></legend>
                                                            <table width="600" border="1" align="center">
                                                                <thead>
                                                                    <tr>
                                                                        <td width="118" height="47"><div align="center"><span class="style8"><b>Event Name</b></span></div></td>
                                                                        <td width="158" height="47"><div align="center"><span class="style8"><b>Description</b></span></div></td>
                                                                        <td width="171" height="47"><div align="center"><span class="style8"><b>Date-Time</b></span></div></td>
                                                                        <td width="108" height="47"><p align="center" class="style8"><b>Venue</b></p></td>
                                                                        <td width="140" height="47"><div align="center"><span class="style8"><b>Event Creator</b></span></div></td>
                                                                        <td width="108" height="47"><div align="center"><span class="style8"><b>Click on Link to Edit Event</b></span></div></td>
                                                                    </tr>
                                                                </thead>

                                                                <tbody id="allAdminEventData" style="color:#000000">                                                                    
                                                                </tbody>
                                                            </table>
                                                            <br>
                                                        </fieldset>	
                                                        <p>
                                                            <input class="button" type="button" name="checkadmineventbackbutton" value="Back" id="checkadmineventbackbutton" /></p>                                                        
                                                    </form>
                                                </div>


                                                <!--Get all Events to the user-->
                                                <div id ="allEvents" align="center" hidden="true">
                                                    <br><br><br>
                                                    <h4 align="center" class="style7 style8">Travel Around UGA</h4>
                                                    <form action="" method="post">
                                                        <fieldset>
                                                            <legend><span class="style9">All Events Details :</span></legend>
                                                            <table width="600" border="1" align="center">
                                                                <thead>
                                                                    <tr>
                                                                        <td width="118" height="47"><div align="center"><span class="style8"><b>Event Name</b></span></div></td>
                                                                        <td width="158" height="47"><div align="center"><span class="style8"><b>Description</b></span></div></td>
                                                                        <td width="171" height="47"><div align="center"><span class="style8"><b>Date-Time</b></span></div></td>
                                                                        <td width="108" height="47">
                                                                            <p align="center" class="style8"><b>Venue</b></p> 
                                                                            <p align="center" class="style13">(Click for Directions)</p></td>

                                                                    </tr>
                                                                </thead>

                                                                <tbody id="allEventData" style="color:#000000">                                                                    
                                                                </tbody>
                                                            </table>
                                                            <br>
                                                        </fieldset>	
                                                        <p>
                                                            <input class="button" type="button" name="checkeventbackbutton" value="Back" id="checkeventbackbutton" /></p>                                                        
                                                    </form>
                                                </div>

                                                <!--User Get Directions-->
                                                <div id="getdirections" align="center" hidden="true">
                                                    <br><br><br>
                                                    <h4 align="center" class="style7 style8">Travel Around UGA</h4>
                                                    <form action="" method="post">
                                                        <fieldset>
                                                            <legend><span class="style9">Select End Points :</span></legend>

                                                            <table height="103">
                                                                <tr>
                                                                    <td width="184" height="34" style="margin-top:auto">
                                                                        <span class="style8 style12"><strong>Where you at ? </strong></span>               </td>

                                                                    <td width="124">
                                                                        <p>
                                                                            <select id="startpoint" name="startpoint">
                                                                                <!--Get Landmarks-->
                                                                            </select>
                                                                        </p>     			</td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="29"><span class="style8"><strong>Where do you want to go ? </strong></span>                </td>

                                                                    <td>
                                                                        <p>
                                                                            <select id="endpoint" name="endpoint">
                                                                                <!--Get Landmarks-->
                                                                            </select>
                                                                        </p>     			</td>
                                                                </tr>

                                                            </table>
                                                            <br>

                                                        </fieldset>

                                                        <p><input class="button" type="button" name="getdirectionsbutton" value="Get Directions" id="getdirectionsbutton" />
                                                            <input class="button" type="button" name="directionbackbutton" value="Home" id="directionbackbutton" /></p>
                                                    </form>
                                                </div>

                                                <div id="directionsresult" align="left" hidden="true" style="margin-left: 100px">
                                                    <br><br><br>
                                                    <h4 align="center" class="style7 style8">Travel Around UGA</h4>
                                                    <form action="" method="post">
                                                        <fieldset>
                                                            <legend align="center"><span class="style9" >Here You Go !!!!!</span></legend>

                                                            <table align="center" width="900" border="1">
                                                                <thead align="center">
                                                                    <tr>
                                                                        <td width="110" height="45"><div align="center"><span class="style8"><b>From  </b></span></div></td>
                                                                        <td width="110" height="45"><div align="center"><span class="style8"><b>To </b></span></div></td>
                                                                        <td width="100" height="45"><div align="center"><span class="style8"><b>Distance (miles)</b></span></div></td>
                                                                        <td width="110" height="45"><div align="center"><span class="style8"><b>Travel Time (minutes)</b></span></div></td>
                                                                        <td width="110" height="45"><div align="center"><span class="style8"><b>Path Type </b></span></div></td>
                                                                        <td width="300" height="45"><div align="center"><span class="style8"><b>Description </b></span></div></td>
                                                                    </tr>
                                                                </thead>

                                                                <tbody id="Directions" style="color:#000000" align="center">                                                                    
                                                                </tbody>

                                                            </table>
                                                            <br>                                                            
                                                        </fieldset>

                                                        <p><input class="button" type="button" name="newsearchbutton" value="New Search" id="newsearchbutton" />
                                                            <input class="button" type="button" name="directionresulthomebutton" value="Home" id="directionresulthomebutton" /></p>
                                                    </form>
                                                </div>

                                                </div>
                                                <!-- END PAGE SOURCE -->
                                                </body>
                                                </html>
