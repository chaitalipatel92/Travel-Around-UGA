/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(
        function () {

            var userArray = new Array();
            var globalUser;

            function User(userId, password, name, emailId, userType) {
                this.userId = userId;
                this.password = password;
                this.name = name;
                this.emailId = emailId;
                this.userType = userType;
            }

            $("#loginbutton").click(function () {
                login();
            });

            function login() {
                //var fetchedData = $("#loginform").serialize();
                var userId = $("input#userId").val();
                var password = $("input#password").val();
//                alert("Hello " + userId);
                var dataStr = {
                    userId: userId,
                    password: password
                };

                $.ajax({
                    type: "POST",
                    url: "LoginService",
                    dataType: 'json',
                    data: dataStr,
                    cache: false,
                    success: function (fetchedData, status, xhr) {
                        createLoginDataList(fetchedData);
                        //alert("FetchedData "+fetchedData);
                        if (userArray[0] !== null)
                        {
                            user = userArray[0];
                            if (userId === user.userId && password === user.password) {
                                globalUser = {
                                    userId: user.userId,
                                    userType: user.userType
                                };

                                if (globalUser.userType === "A")
                                {
                                    //alert("success Admin");
                                    $("#head").show();
                                    $("#adminbuttons").show();
                                    $("#main").hide();
                                    $("#signupmain").hide();
                                    $("#pathform").hide();
                                    $("#eventDiv").hide();
                                    $("#userEventDiv").hide();
                                    $("#landmarkDiv").hide();
                                    $("#userbuttons").hide();
                                    $("#allEvents").hide();
                                    $("#allAdminEvents").hide();
                                    $("#getdirections").hide();
                                    $("#directionsresult").hide();
                                }
                                else if (globalUser.userType === "R")
                                {
                                    //alert("success Regular User");
                                    $("#head").show();
                                    $("#userbuttons").show();
                                    $("#main").hide();
                                    $("#signupmain").hide();
                                    $("#pathform").hide();
                                    $("#adminbuttons").hide();
                                    $("#eventDiv").hide();
                                    $("#userEventDiv").hide();
                                    $("#landmarkDiv").hide();
                                    $("#allEvents").hide();
                                    $("#getdirections").hide();
                                    $("#directionsresult").hide();
                                }
                            }
                            else {
                                alert("Sorry, we could not validate your credentials. Please check your password!");
                            }
                        }
                        else {
                            alert("Sorry, we could not identify you!");
                        }

                    },
                    error: function (fetchedData, status, errorThrown)
                    {
                        console.log(status)
                        alert("Please check your connection!");
                    }

                });
            }

            function createLoginDataList(JsonObject) {
                userArray.length = 0;
                $.each(JsonObject, function (key, object) {
                    var user = new User(object.userId, object.password, object.name, object.emailId, object.userType);
                    userArray.push(user);
                });
            }

            $("#signuplink").click(function () {
                $("#pathform").hide();
                $("#head").show();
                $("#adminbuttons").hide();
                $("#signupmain").show();
                $("#main").hide();
                $("#eventDiv").hide();
                $("#userEventDiv").hide();
                $("#landmarkDiv").hide();
                $("#userbuttons").hide();
                $("#allEvents").hide();
                $("#allAdminEvents").hide();
                $("#getdirections").hide();
                $("#directionsresult").hide();
            });

            $("#adminlogout").click(function () {

                if (confirm("Are you sure?")) {
                    logout();
                }
            });

            $("#userlogout").click(function () {
                if (confirm("Are you sure?")) {
                    logout();
                }
            });

            function logout() {
                globalUser = "";
                $("#head").show();
                $("#adminbuttons").hide();
                $("#main").show();
                $("#signupmain").hide();
                $("#pathform").hide();
                $("#eventDiv").hide();
                $("#userEventDiv").hide();
                $("#landmarkDiv").hide();
                $("#userbuttons").hide();
                $("#allEvents").hide();
                $("#allAdminEvents").hide();
                $("#getdirections").hide();
                $("#directionsresult").hide();
            }
        }
);


