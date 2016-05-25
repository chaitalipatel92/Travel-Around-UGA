/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(
        function () {

            var landmarkArray = new Array();
            var directionArray = new Array();

            function landmarkClass(landmarkId, name) {
                this.name = name;
                this.landmarkId = landmarkId;
            }

            function eventData(eventName, description, startDateTime, landmarkname, landmarkId) {
                this.eventName = eventName;
                this.description = description;
                this.startDateTime = startDateTime;
//                this.landmarkId = landmarkId;
                this.name = landmarkname;
                this.landmarkId = landmarkId;

            }

            function DirectionPointClass(startLandmark, endLandmark, distance, travelTime, pathType, description) {
                this.startLandmark = startLandmark;
                this.endLandmark = endLandmark;
                this.distance = distance;
                this.travelTime = (travelTime/60).toFixed(1);
                this.pathType = pathType;
                this.description = description;
            }


            $('.sack').live('click', function (e) {
                e.preventDefault();
                var landmarkDataCollection = null;

                $.ajax({
                    type: "GET",
                    url: "getLandmark",
                    dataType: "json",
                    data: landmarkDataCollection,
                    cache: false,
                    success: function (fetchedData, textStatus, xhr) {
                        landmarkList(fetchedData);


                        $("#startpoint").html("");


                        var startPointListBody = $("#startpoint");
                        startPointListBody.empty();

                        var landmarkClass;
                        for (i = 0; i < landmarkArray.length; i++) {
                            landmarkClass = landmarkArray[i];

                            var startingPoint = $("<option value=\"" + landmarkClass.landmarkId + "\">"
                                    + landmarkClass.name + "</option>");


                            startingPoint.appendTo(startPointListBody);

                        }
                    },
                    error: function (fetchedData, textStatus, errorThrown) {
                        console.log(textStatus);
                    }
                });

                var temp = $(this).attr('dataVal');
                var arr = temp.split('&');
                var id = arr[0];
                var name = arr[1];
                $("#endpoint").html("");
                var endPointListBody = $("#endpoint");

                endPointListBody.empty();
                var endingPoint = $("<option value=\"" + id + "\">"
                        + name + "</option>");

                endingPoint.appendTo(endPointListBody);
                // $("#endPointListBody").selectmenu("disabled");

                $("#pathform").hide();
                $("#head").hide();
                $("#adminbuttons").hide();
                $("#signupmain").hide();
                $("#main").hide();
                $("#eventDiv").hide();
                $("#userEventDiv").hide();
                $("#landmarkDiv").hide();
                $("#userbuttons").hide();
                $("#allEvents").hide();
                $("#allAdminEvents").hide();
                $("#getdirections").show();
                $("#directionsresult").hide();
                
                        
            });


            $("#userCreateEventButton").click(function () {
                $("#pathform").hide();
                $("#head").hide();
                $("#adminbuttons").hide();
                $("#signupmain").hide();
                $("#main").hide();
                $("#eventDiv").hide();
                $("#userEventDiv").show();
                $("#landmarkDiv").hide();
                $("#userbuttons").hide();
                $("#allEvents").hide();
                $("#allAdminEvents").hide();
                $("#getdirections").hide();
                $("#directionsresult").hide();
                loadInitData1();
            });

            function loadInitData1() {
                var landmarkDataCollection = null;

                $.ajax({
                    type: "GET",
                    url: "getLandmark",
                    dataType: "json",
                    data: landmarkDataCollection,
                    cache: false,
                    success: function (fetchedData, textStatus, xhr) {
                        landmarkList(fetchedData);
                        //alert("Fetch " + fetchedData);
                        $("#usereventvenue").html("");
                        $("#startpoint").html("");
                        $("#endpoint").html("");

                        var eventVenueListBody = $("#usereventvenue");
                        var startPointListBody = $("#startpoint");
                        var endPointListBody = $("#endpoint");

                        eventVenueListBody.empty();
                        startPointListBody.empty();
                        endPointListBody.empty();


                        var landmarkClass;
                        for (i = 0; i < landmarkArray.length; i++) {
                            landmarkClass = landmarkArray[i];

                            var usereventVenue = $("<option value=\"" + landmarkClass.landmarkId + "\">"
                                    + landmarkClass.name + "</option>");
                            var startingPoint = $("<option value=\"" + landmarkClass.landmarkId + "\">"
                                    + landmarkClass.name + "</option>");
                            var endingPoint = $("<option value=\"" + landmarkClass.landmarkId + "\">"
                                    + landmarkClass.name + "</option>");

                            usereventVenue.appendTo(eventVenueListBody);
                            startingPoint.appendTo(startPointListBody);
                            endingPoint.appendTo(endPointListBody);
                        }
                    },
                    error: function (fetchedData, textStatus, errorThrown) {
                        console.log(textStatus);
                    }
                });
            }
            ;

            $("#createuserevent").click(function () {
                var eventname = $("input#usereventname").val();
                var eventdescription = $("textarea#usereventdescription").val();
                var datetime = $("input#userdatetime").val();
                var eventvenue = $("select#usereventvenue option").filter(":selected").val();
                var userId = $("input#userId").val();
                //alert(eventdescription + " " + datetime + " " + eventvenue + " " + userId);
                var eventElements = {
                    eventname: eventname,
                    eventdescription: eventdescription,
                    datetime: datetime,
                    eventvenue: eventvenue,
                    userId: userId
                };

                $.ajax({
                    type: "POST",
                    url: "InsertEventService",
                    dataType: 'json',
                    data: eventElements,
                    cache: false,
                    success: function (fetchedData, status, xhr) {
                        alert("Event Created !!!!");
                        console.log(fetchedData);
                        $("#pathform").hide();
                        $("#head").show();
                        $("#adminbuttons").hide();
                        $("#signupmain").hide();
                        $("#main").hide();
                        $("#eventDiv").hide();
                        $("#userEventDiv").hide();
                        $("#landmarkDiv").hide();
                        $("#userbuttons").show();
                        $("#allEvents").hide();
                        $("#allAdminEvents").hide();
                        $("#getdirections").hide();
                        $("#directionsresult").hide();
                    },
                    error: function (fetchedData, status, errorThrown)
                    {
                        console.log(status);
//                        alert(fetchedData);
                        alert("Please enter valid data in all fields");
                        $("#eventDiv").hide();
                        $("#userEventDiv").show();
                        $("#head").hide();
                        $("#adminbuttons").hide();
                        $("#signupmain").hide();
                        $("#main").hide();
                        $("#landmarkDiv").hide();
                        $("#userbuttons").hide();
                        $("#allEvents").hide();
                        $("#getdirections").hide();
                        $("#directionsresult").hide();
                    }

                });


            });

            function landmarkList(JsonObject) {
                landmarkArray.length = 0;
                $.each(JsonObject, function (key, object) {
                    var landMarkClass = new landmarkClass(object.landmarkId, object.name);
                    landmarkArray.push(landMarkClass);
                });
            }
            ;

            $("#canceluserevent").click(function () {
                $("#pathform").hide();
                $("#head").show();
                $("#adminbuttons").hide();
                $("#signupmain").hide();
                $("#main").hide();
                $("#eventDiv").hide();
                $("#userEventDiv").hide();
                $("#landmarkDiv").hide();
                $("#userbuttons").show();
                $("#allEvents").hide();
                $("#allAdminEvents").hide();
                $("#getdirections").hide();
                $("#directionsresult").hide();
            });

            $("#canceluserevent").click(function () {
                $("#pathform").hide();
                $("#head").show();
                $("#adminbuttons").hide();
                $("#signupmain").hide();
                $("#main").hide();
                $("#eventDiv").hide();
                $("#userEventDiv").hide();
                $("#landmarkDiv").hide();
                $("#userbuttons").show();
                $("#allEvents").hide();
                $("#getdirections").hide();
                $("#directionsresult").hide();
            });


            $("#directionbackbutton").click(function () {
                $("#pathform").hide();
                $("#head").show();
                $("#adminbuttons").hide();
                $("#signupmain").hide();
                $("#main").hide();
                $("#eventDiv").hide();
                $("#userEventDiv").hide();
                $("#landmarkDiv").hide();
                $("#userbuttons").show();
                $("#allEvents").hide();
                $("#getdirections").hide();
                $("#directionsresult").hide();
            });

            $("#userCheckEventsButton").click(function () {
                $("#pathform").hide();
                $("#head").hide();
                $("#adminbuttons").hide();
                $("#signupmain").hide();
                $("#main").hide();
                $("#eventDiv").hide();
                $("#userEventDiv").hide();
                $("#landmarkDiv").hide();
                $("#userbuttons").hide();
                $("#allEvents").show();
                $("#allAdminEvents").hide();
                $("#getdirections").hide();
                $("#directionsresult").hide();
                loadInitData2();
            });


            function loadInitData2() {
                var userId = $("input#userId").val();
                var dataString = {
                    userId: userId
                };
                $.ajax({
                    type: "POST",
                    url: "GetAllEventsService",
                    dataType: 'json',
                    data: dataString,
                    cache: false,
                    success: function (fetchedData, textStatus, xhr) {
                        createEventDataList(fetchedData);

                        $("#allEventData").html("");
                        var listEventBody = $("#allEventData");
                        listEventBody.empty();
                        for (i = 0; i < directionArray.length; i++) {
                            var eventA = directionArray[i];

                            var row = $("<tr align='center'></tr>");
                            var eventName = $("<td height='45'>" + eventA.eventName + "</td>");
                            var eventDescription = $("<td height='45'>" + eventA.description + "</td>");
                            var dateTime = $("<td height='45'>" + eventA.startDateTime + "</td>");
                            //var venue = $("<td height='45'><a>" + eventA.landmarkId + "</a></td>");

                            eventName.appendTo(row);
                            eventDescription.appendTo(row);
                            dateTime.appendTo(row);
                            //venue.appendTo(row);


                            i++;
                            var correspondingLandmark = directionArray[i];
                            var landmarkName = $("<td height='45'><a href='#' class='sack' dataVal='" + eventA.landmarkId + "&" + correspondingLandmark.name + "'>" + correspondingLandmark.name + "</a></td>");
                            landmarkName.appendTo(row);
                            row.appendTo(listEventBody);
                        }
                    },
                    error: function (fetchedData, textStatus, errorThrown) {
                        console.log(textStatus);
                    }
                });
            }

            function createEventDataList(JsonObject) {
                directionArray.length = 0;
                $.each(JsonObject, function (key, object) {
                    var event = new eventData(object.eventName, object.description, object.startDateTime, object.name, object.landmarkId);
                    directionArray.push(event);
                });

            }


            $("#checkeventbackbutton").click(function () {
                $("#pathform").hide();
                $("#head").show();
                $("#adminbuttons").hide();
                $("#signupmain").hide();
                $("#main").hide();
                $("#eventDiv").hide();
                $("#userEventDiv").hide();
                $("#landmarkDiv").hide();
                $("#userbuttons").show();
                $("#allEvents").hide();
                $("#allAdminEvents").hide();
                $("#getdirections").hide();
                $("#directionsresult").hide();
            });


            $("#userGetDirectionButton").click(function () {
                $("#pathform").hide();
                $("#head").hide();
                $("#adminbuttons").hide();
                $("#signupmain").hide();
                $("#main").hide();
                $("#eventDiv").hide();
                $("#userEventDiv").hide();
                $("#landmarkDiv").hide();
                $("#userbuttons").hide();
                $("#allEvents").hide();
                $("#allAdminEvents").hide();
                $("#getdirections").show();
                $("#directionsresult").hide();
                loadInitData1();

            });

            $("#getdirectionsbutton").click(function () {
//                show direction result page
                $("#pathform").hide();
                $("#head").hide();
                $("#adminbuttons").hide();
                $("#signupmain").hide();
                $("#main").hide();
                $("#eventDiv").hide();
                $("#userEventDiv").hide();
                $("#landmarkDiv").hide();
                $("#userbuttons").hide();
                $("#allEvents").hide();
                $("#getdirections").hide();
                $("#directionsresult").show();
                loadInitData3();
            });

            function loadInitData3() {
                var from = $("select#startpoint option").filter(":selected").val();
                var to = $("select#endpoint option").filter(":selected").val();
                var dataString = {
                    from: from,
                    to: to
                };
                $.ajax({
                    type: "POST",
                    url: "GetDirectionsService",
                    dataType: 'json',
                    data: dataString,
                    cache: false,
                    success: function (fetchedData, textStatus, xhr) {
                        createDirectionList(fetchedData);

                        $("#Directions").html("");
                        var directionsBody = $("#Directions");
                        directionsBody.empty();
                        for (i = 0; i < directionArray.length; i++) {
                            var paths = directionArray[i];

                            var row = $("<tr align='center'></tr>");
                            var startLandmark = $("<td height='45'>" + paths.startLandmark + "</td>");
                            var endLandmark = $("<td height='45'>" + paths.endLandmark + "</td>");
                            var distance = $("<td height='45'>" + paths.distance + "</td>");
                            var travelTime = $("<td height='45'>" + paths.travelTime + "</td>");
                            var pathType = $("<td height='45'>" + paths.pathType + "</td>");
                            var description = $("<td height='45' width='250'>" + paths.description + "</td>");
                            

                            startLandmark.appendTo(row);
                            endLandmark.appendTo(row);
                            distance.appendTo(row);
                            travelTime.appendTo(row);
                            pathType.appendTo(row);
                            description.appendTo(row);
                            row.appendTo(directionsBody);
                        }
                    },
                    error: function (fetchedData, textStatus, errorThrown) {
                        console.log(textStatus);
                    }
                });
            }

            function createDirectionList(JsonObject) {
                directionArray.length = 0;
                $.each(JsonObject, function (key, object) {
                    var directionPointClass = new DirectionPointClass(object.startLandmark, object.endLandmark, object.distance, object.travelTime, object.pathType, object.description);
                    directionArray.push(directionPointClass);
                });
            }
            ;


            $("#newsearchbutton").click(function () {
                $("#pathform").hide();
                $("#head").hide();
                $("#adminbuttons").hide();
                $("#signupmain").hide();
                $("#main").hide();
                $("#eventDiv").hide();
                $("#userEventDiv").hide();
                $("#landmarkDiv").hide();
                $("#userbuttons").hide();
                $("#allEvents").hide();
                $("#allAdminEvents").hide();
                $("#getdirections").show();
                $("#directionsresult").hide();
            });

            $("#directionresulthomebutton").click(function () {
                $("#pathform").hide();
                $("#head").show();
                $("#adminbuttons").hide();
                $("#signupmain").hide();
                $("#main").hide();
                $("#eventDiv").hide();
                $("#userEventDiv").hide();
                $("#landmarkDiv").hide();
                $("#userbuttons").show();
                $("#allEvents").hide();
                $("#allAdminEvents").hide();
                $("#getdirections").hide();
                $("#directionsresult").hide();
            });


        });