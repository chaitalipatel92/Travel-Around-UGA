/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(
        function () {

            var busArray = new Array();
            var eventArray = new Array();

            function BusClass(busId, name) {
                this.busId = busId;
                this.name = name;
            }


            function eventData(eventId, eventName, description, startDateTime, userId, landmarkId, name) {
                this.eventId = eventId;
                this.eventName = eventName;
                this.description = description;
                this.startDateTime = startDateTime;
                this.userId = userId;
                this.landmarkId = landmarkId;
                this.name = name;
            }

            var startPointArray = new Array();

            function StartPointClass(landmarkId, name) {
                this.name = name;
                this.landmarkId = landmarkId;
            }


            $('.temp').live('click', function (e) {
                e.preventDefault();
                var dataV = $(this).attr('datavalue');
                var eventDataCollection = {
                    eventId: dataV
                };

                //alert(dataV);

                $.ajax({
                    type: "GET",
                    url: "EditEventDataService",
                    dataType: "json",
                    data: eventDataCollection,
                    cache: false,
                    success: function (fetchedData, textStatus, xhr) {
                        //alert(fetchedData);
                        createEventDataList(fetchedData);
                        $("#editeventname").html("");
                        var eventDataBody = $("#editeventname");
                        eventDataBody.empty();
                        var eventClass = eventArray[0];
                        //alert(eventClass.eventName);
                        $("#editeventname").val(eventClass.eventName);
                        $("#editeventdescription").val(eventClass.description);
                        $("#editdatetime").val(eventClass.startDateTime);
//                        $("#editeventvenue").val(eventClass.name);
                        $("#editeventid").val(eventClass.eventId);
//                        var eventId = eventClass.eventId;
//                        alert(eventId);

                    },
                    error: function (fetchedData, textStatus, errorThrown) {
                        console.log(textStatus);
                    }
                });
                loadInitData();
                $("#editEventDiv").show();
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
                $("#getdirections").hide();
                $("#directionsresult").hide();

            });

            $("#adminCreatePathButton").click(function () {
                $("#pathform").show();
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
                $("#getdirections").hide();
                $("#directionsresult").hide();
                $("#editEventDiv").hide();
                loadInitData();
                // alert("Hello");
            });

            function loadInitData() {
                var dataStr = null;
                var dataStr1 = null;
                $.ajax({
                    type: "GET",
                    url: "getBusList",
                    dataType: "json",
                    data: dataStr,
                    cache: false,
                    success: function (fetchedData, textStatus, xhr) {
                        createBusList(fetchedData);
                        //alert("Fetch " + fetchedData);
                        $("#busSelect").html("");

                        var busListBody = $("#busSelect");
                        var busClass;
                        busListBody.empty();

                        for (i = 0; i < busArray.length; i++) {
                            busClass = busArray[i];

                            var bus = $("<option value=\"" + busClass.busId + "\">"
                                    + busClass.name + "</option>");

                            bus.appendTo(busListBody);
                        }
                    },
                    error: function (fetchedData, textStatus, errorThrown) {
                        console.log(textStatus);
                    }
                });

                $.ajax({
                    type: "GET",
                    url: "getLandmark",
                    dataType: "json",
                    data: dataStr1,
                    cache: false,
                    success: function (fetchedData, textStatus, xhr) {
                        createStartPointList(fetchedData);
                        //alert("Fetch " + fetchedData);
                        $("#selectstartpoint").html("");
                        $("#selectendpoint").html("");
                        $("#eventvenue").html("");
                        $("#editeventvenue").html("");

                        var startPointListBody = $("#selectstartpoint");
                        startPointListBody.empty();

                        var endPointListBody = $("#selectendpoint");
                        endPointListBody.empty();

                        var eventVenueListBody = $("#eventvenue");
                        eventVenueListBody.empty();

                        var editEventVenueListBody = $("#editeventvenue");
                        editEventVenueListBody.empty();

                        var landmarkClass;
                        for (i = 0; i < startPointArray.length; i++) {
                            landmarkClass = startPointArray[i];

                            var startPoint = $("<option value=\"" + landmarkClass.landmarkId + "\">"
                                    + landmarkClass.name + "</option>");

                            var endPoint = $("<option value=\"" + landmarkClass.landmarkId + "\">"
                                    + landmarkClass.name + "</option>");

                            var eventVenue = $("<option value=\"" + landmarkClass.landmarkId + "\">"
                                    + landmarkClass.name + "</option>");

                            var editEventVenue = $("<option value=\"" + landmarkClass.landmarkId + "\">"
                                    + landmarkClass.name + "</option>");


                            startPoint.appendTo(startPointListBody);
                            endPoint.appendTo(endPointListBody);
                            eventVenue.appendTo(eventVenueListBody);
                            editEventVenue.appendTo(editEventVenueListBody);

                        }
                    },
                    error: function (fetchedData, textStatus, errorThrown) {
                        console.log(textStatus);
                    }
                });
            }
            ;

            function createBusList(JsonObject) {
                busArray.length = 0;
                $.each(JsonObject, function (key, object) {
                    var busClass = new BusClass(object.busId, object.name);
                    busArray.push(busClass);
                });
            }
            ;

            function createStartPointList(JsonObject) {
                startPointArray.length = 0;
                $.each(JsonObject, function (key, object) {
                    var startPointClass = new StartPointClass(object.landmarkId, object.name);
                    startPointArray.push(startPointClass);
                });
            }
            ;

            $("#walkpath").click(function () {
                $("#busDiv").hide();
                $("#walkDiv").show();

            });

            $("#buspath").click(function () {
                $("#busDiv").show();
                $("#walkDiv").hide();
            });

            $("#createpath").click(function () {

                var pathType = $("input[name=path]:checked").val();
                var distance = $("input#distance").val();
                var travelTime = $("input#traveltime").val();
                var startPoint = $("select#selectstartpoint option").filter(":selected").val();
                var endPoint = $("select#selectendpoint option").filter(":selected").val();
                var selectedBus = $("select#busSelect option").filter(":selected").val();
                var compassDirection = $("input#comDirection").val();
                var description = $("textarea#walkdescription").val();


                var dataStr3 = {
                    pathType: pathType,
                    distance: distance,
                    travelTime: travelTime,
                    startPoint: startPoint,
                    endPoint: endPoint,
                    selectedBus: selectedBus,
                    compassDirection: compassDirection,
                    description: description
                };
//                alert(distance + " " + travelTime + " " + startPoint + " " + endPoint + " " + selectedBus + " " + pathType + " " + compassDirection + " " + description);

                $.ajax({
                    type: "POST",
                    url: "InsertPathService",
                    dataType: 'json',
                    data: dataStr3,
                    cache: false,
                    success: function (fetchedData, status, xhr) {
                        if (fetchedData !== "Success" && fetchedData !== "Failed")
                            alert("Path Created !!!!");
                        console.log(fetchedData);
                        $("#pathform").hide();
                        $("#head").show();
                        $("#adminbuttons").show();
                        $("#signupmain").hide();
                        $("#main").hide();
                        $("#eventDiv").hide();
                        $("#userEventDiv").hide();
                        $("#landmarkDiv").hide();
                        $("#userbuttons").hide();
                        $("#allEvents").hide();
                        $("#allAdminEvents").hide();
                        $("#getdirections").hide();
                        $("#directionsresult").hide();
                        $("#editEventDiv").hide();
                    },
                    error: function (fetchedData, status, errorThrown)
                    {
                        console.log(status);
//                        alert(fetchedData);
                        alert("Please enter valid data in all fields");
                        $("#pathform").show();
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
                        $("#getdirections").hide();
                        $("#directionsresult").hide();
                        $("#editEventDiv").hide();
                    }

                });


            });


            $("#cancelcreatepath").click(function () {
                $("#pathform").hide();
                $("#head").show();
                $("#adminbuttons").show();
                $("#signupmain").hide();
                $("#main").hide();
                $("#eventDiv").hide();
                $("#userEventDiv").hide();
                $("#landmarkDiv").hide();
                $("#userbuttons").hide();
                $("#allEvents").hide();
                $("#allAdminEvents").hide();
                $("#getdirections").hide();
                $("#directionsresult").hide();
                $("#editEventDiv").hide();
            });

            $("#cancelevent").click(function () {
                $("#pathform").hide();
                $("#head").show();
                $("#adminbuttons").show();
                $("#signupmain").hide();
                $("#main").hide();
                $("#eventDiv").hide();
                $("#userEventDiv").hide();
                $("#landmarkDiv").hide();
                $("#userbuttons").hide();
                $("#allEvents").hide();
                $("#allAdminEvents").hide();
                $("#getdirections").hide();
                $("#directionsresult").hide();
                $("#editEventDiv").hide();
            });

            $("#canceleditevent").click(function () {
                $("#pathform").hide();
                $("#head").show();
                $("#adminbuttons").show();
                $("#signupmain").hide();
                $("#main").hide();
                $("#eventDiv").hide();
                $("#userEventDiv").hide();
                $("#landmarkDiv").hide();
                $("#userbuttons").hide();
                $("#allEvents").hide();
                $("#allAdminEvents").hide();
                $("#getdirections").hide();
                $("#directionsresult").hide();
                $("#editEventDiv").hide();
            });

            $("#adminCreateEventButton").click(function () {
                $("#pathform").hide();
                $("#head").hide();
                $("#adminbuttons").hide();
                $("#signupmain").hide();
                $("#main").hide();
                $("#eventDiv").show();
                $("#userEventDiv").hide();
                $("#landmarkDiv").hide();
                $("#userbuttons").hide();
                $("#allEvents").hide();
                $("#allAdminEvents").hide();
                $("#getdirections").hide();
                $("#directionsresult").hide();
                $("#editEventDiv").hide();
                loadInitData();
//                EventDataInsertion Left
            });

            $("#createevent").click(function () {
                var eventname = $("input#eventname").val();
                var eventdescription = $("textarea#eventdescription").val();
                var datetime = $("input#datetime").val();
                var eventvenue = $("select#eventvenue option").filter(":selected").val();
                var userId = $("input#userId").val();

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
                        $("#adminbuttons").show();
                        $("#signupmain").hide();
                        $("#main").hide();
                        $("#eventDiv").hide();
                        $("#userEventDiv").hide();
                        $("#landmarkDiv").hide();
                        $("#userbuttons").hide();
                        $("#allEvents").hide();
                        $("#allAdminEvents").hide();
                        $("#getdirections").hide();
                        $("#directionsresult").hide();
                        $("#editEventDiv").hide();
                    },
                    error: function (fetchedData, status, errorThrown)
                    {
                        console.log(status);
//                        alert(fetchedData);
                        alert("Please enter valid data in all fields");
                        $("#eventDiv").show();
                        $("#userEventDiv").hide();
                        $("#head").hide();
                        $("#adminbuttons").hide();
                        $("#signupmain").hide();
                        $("#main").hide();
                        $("#landmarkDiv").hide();
                        $("#userbuttons").hide();
                        $("#allEvents").hide();
                        $("#allAdminEvents").hide();
                        $("#getdirections").hide();
                        $("#directionsresult").hide();
                        $("#editEventDiv").hide();
                    }

                });


            });

            $("#adminCreateLandmarkButton").click(function () {
                $("#pathform").hide();
                $("#head").hide();
                $("#adminbuttons").hide();
                $("#signupmain").hide();
                $("#main").hide();
                $("#eventDiv").hide();
                $("#userEventDiv").hide();
                $("#landmarkDiv").show();
                $("#userbuttons").hide();
                $("#allEvents").hide();
                $("#allAdminEvents").hide();
                $("#getdirections").hide();
                $("#directionsresult").hide();
                $("#editEventDiv").hide();
            });

            $("#createlandmark").click(function () {

                var landmarkId = $("input#landmarkid").val();
                var landmarkName = $("input#landmarkname").val();
                var latitude = $("input#latitude").val();
                var longitude = $("input#longitude").val();

                var landmarkElements = {
                    landmarkId: landmarkId,
                    landmarkName: landmarkName,
                    latitude: latitude,
                    longitude: longitude
                };

                $.ajax({
                    type: "POST",
                    url: "InsertLandmarkServices",
                    dataType: 'json',
                    data: landmarkElements,
                    cache: false,
                    success: function (fetchedData, status, xhr) {
                        alert("Landmark Added !!!!");
                        console.log(fetchedData);
                        $("#pathform").hide();
                        $("#head").show();
                        $("#adminbuttons").show();
                        $("#signupmain").hide();
                        $("#main").hide();
                        $("#eventDiv").hide();
                        $("#userEventDiv").hide();
                        $("#landmarkDiv").hide();
                        $("#userbuttons").hide();
                        $("#allEvents").hide();
                        $("#allAdminEvents").hide();
                        $("#getdirections").hide();
                        $("#directionsresult").hide();
                        $("#editEventDiv").hide();
                    },
                    error: function (fetchedData, status, errorThrown)
                    {
                        console.log(status);
//                        alert(fetchedData);
                        alert("Please enter valid data in all fields");
                        $("#eventDiv").hide();
                        $("#userEventDiv").hide();
                        $("#head").hide();
                        $("#adminbuttons").hide();
                        $("#signupmain").hide();
                        $("#main").hide();
                        $("#landmarkDiv").show();
                        $("#userbuttons").hide();
                        $("#allEvents").hide();
                        $("#allAdminEvents").hide();
                        $("#getdirections").hide();
                        $("#directionsresult").hide();
                        $("#editEventDiv").hide();
                    }

                });
            });

            $("#cancellandmarkcreate").click(function () {
                $("#pathform").hide();
                $("#head").show();
                $("#adminbuttons").show();
                $("#signupmain").hide();
                $("#main").hide();
                $("#eventDiv").hide();
                $("#userEventDiv").hide();
                $("#landmarkDiv").hide();
                $("#userbuttons").hide();
                $("#allEvents").hide();
                $("#allAdminEvents").hide();
                $("#getdirections").hide();
                $("#directionsresult").hide();
                $("#editEventDiv").hide();
            });

            $("#adminCheckEventsButton").click(function () {
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
                $("#allAdminEvents").show();
                $("#getdirections").hide();
                $("#directionsresult").hide();
                $("#editEventDiv").hide();
                loadAdminEventsData();
            });


            function loadAdminEventsData() {
                var dataString = null;
                $.ajax({
                    type: "POST",
                    url: "GetAllAdminEventsService",
                    dataType: 'json',
                    data: dataString,
                    cache: false,
                    success: function (fetchedData, textStatus, xhr) {
                        createEventDataList(fetchedData);

                        $("#allAdminEventData").html("");
                        var listEventBody = $("#allAdminEventData");
                        listEventBody.empty();
                        for (i = 0; i < eventArray.length; i++) {
                            var eventA = eventArray[i];

                            var row = $("<tr align='center'></tr>");
                            var eventName = $("<td height='45'>" + eventA.eventName + "</td>");
                            var eventDescription = $("<td height='45'>" + eventA.description + "</td>");
                            var dateTime = $("<td height='45'>" + eventA.startDateTime + "</td>");
                            var userId = $("<td height='45'>" + eventA.userId + "</td>");
                            var update = $("<td height='45'><a href='#' class='temp' datavalue='" + eventA.eventId + "'>Edit</a></td>");

                            i++;
                            var correspondingLandmark = eventArray[i];
                            var landmarkName = $("<td height='45'>" + correspondingLandmark.name + "</td>");
//                            alert(eventA.eventName +" "+ eventA.description, +" "+ eventA.startDateTime +" "+eventA.userId +" "+eventA.landmarkId+" "+correspondingLandmark.name);

                            eventName.appendTo(row);
                            eventDescription.appendTo(row);
                            dateTime.appendTo(row);
                            landmarkName.appendTo(row);
                            userId.appendTo(row);
                            update.appendTo(row);

                            row.appendTo(listEventBody);
                        }
                    },
                    error: function (fetchedData, textStatus, errorThrown) {
                        console.log(textStatus);
                    }
                });
            }

            function createEventDataList(JsonObject) {
                eventArray.length = 0;
                $.each(JsonObject, function (key, object) {
                    var event = new eventData(object.eventId, object.eventName, object.description, object.startDateTime, object.userId, object.landmarkId, object.name);
                    eventArray.push(event);
                });

            }


            $("#editevent").click(function () {
                var eventid = $("input#editeventid").val();
                var eventname = $("input#editeventname").val();
                var eventdescription = $("textarea#editeventdescription").val();
                var datetime = $("input#editdatetime").val();
                var eventvenue = $("select#editeventvenue option").filter(":selected").val();

                var eventData = {
                    eventId: eventid,
                    eventName: eventname,
                    eventDescription: eventdescription,
                    eventDateTime: datetime,
                    eventVenue: eventvenue
                };

                $.ajax({
                    type: "POST",
                    url: "EditEventService",
                    dataType: 'json',
                    data: eventData,
                    cache: false,
                    success: function (fetchedData, textStatus, xhr) {
                        alert("Event Updated");
                        $("#pathform").hide();
                        $("#head").show();
                        $("#adminbuttons").show();
                        $("#signupmain").hide();
                        $("#main").hide();
                        $("#eventDiv").hide();
                        $("#userEventDiv").hide();
                        $("#landmarkDiv").hide();
                        $("#userbuttons").hide();
                        $("#allEvents").hide();
                        $("#allAdminEvents").hide();
                        $("#getdirections").hide();
                        $("#directionsresult").hide();
                        $("#editEventDiv").hide();

                    },
                    error: function (fetchedData, textStatus, errorThrown) {
                        console.log(textStatus);
                        alert("Please enter valid data in all fields !!!");
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
                        $("#getdirections").hide();
                        $("#directionsresult").hide();
                        $("#editEventDiv").show();
                    }
                });

            });
            
            $("#checkadmineventbackbutton").click(function () {
                $("#pathform").hide();
                $("#head").show();
                $("#adminbuttons").show();
                $("#signupmain").hide();
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
        });
        