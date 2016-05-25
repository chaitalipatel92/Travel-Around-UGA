/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(
        function () {

            $("#signupbutton").click(function () {
                signup();
            });

            function signup() {
                //var fetchedData = $("#loginform").serialize();
                var name = $("input#name").val();
                var userId = $("input#uid").val();
                var password = $("input#pass").val();
                var emailId = $("input#eid").val();
                var dataStr = {
                    name: name,
                    userId: userId,
                    password: password,
                    emailId: emailId
                };

                $.ajax({
                    type: "POST",
                    url: "SignUpService",
                    dataType: 'json',
                    data: dataStr,
                    cache: false,
                    success: function (fetchedData, status, xhr) {
                        console.log(fetchedData);
                        if (fetchedData === 'Failed')
                        {
                            alert("Sorry !!! That user Id is not available");
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
                        }
                        else
                        {
                            alert("Congratulations!!! You can use TAU now :)");
                            $("#head").show();
                            $("#main").show();
                            $("#pathform").hide();
                            $("#adminbuttons").hide();
                            $("#signupmain").hide();
                            $("#eventDiv").hide();
                            $("#userEventDiv").hide();
                            $("#landmarkDiv").hide();
                            $("#userbuttons").hide();
                            $("#allEvents").hide();
                            $("#allAdminEvents").hide();
                            $("#getdirections").hide();
                            $("#directionsresult").hide();
                        }

                    },
                    error: function (fetchedData, status, errorThrown)
                    {
                        console.log(status)
                        alert("Please enter valid data in all fields");
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
                    }

                });
            }

            $("#backbutton").click(function () {
                $("#head").show();
                $("#main").show();
                $("#signupmain").hide();
                $("#pathform").hide();
                $("#adminbuttons").hide();
                $("#eventDiv").hide();
                $("#userEventDiv").hide();
                $("#landmarkDiv").hide();
                $("#userbuttons").hide();
                $("#allEvents").hide();
                $("#allAdminEvents").hide();
                $("#getdirections").hide();
                $("#directionsresult").hide();
            });

        });