/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Dao;

import BusinessLogic.PathNetwork;
import Model.Bus;
import Model.BusPath;
import Model.Event;
import Model.Landmark;
import Model.Path;
import Model.User;
import Model.WalkPath;
import Util.Util;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Dao {

    Connection conn = null;

    public Dao() {
        try {
            Class.forName(Util.DRIVER);
            if (conn == null) {
                conn = DriverManager.getConnection(Util.URL, Util.username, Util.password);
            }
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    public List<User> login(String userId, String password) {

        User u = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        String query = "select * from user where userId = ?";

        List<User> userList = new ArrayList();
        try {
            ps = conn.prepareStatement(query);
            ps.setString(1, userId);
            //ps.setString(2, password);
            //System.out.println(query);
            rs = ps.executeQuery();
            if (rs.next()) {
                u = new User();
                u.setUserId(rs.getString("userId"));
                u.setPassword(rs.getString("password"));
                u.setName(rs.getString("name"));
                u.setEmailId(rs.getString("emailId"));
                u.setUserType(rs.getString("userType"));
                System.out.println(rs.getString("name"));
                userList.add(u);
            }
            ps.close();
        } catch (SQLException ex) {
            System.out.println(ex);
            u = null;
        }
        return userList;
    }

    public String signUpUser(User u) {
        PreparedStatement ps = null;
        ResultSet rs = null;

        String query = "insert into user (userId, password, name, emailId, userType)" + "values('" + u.getUserId() + "','" + u.getPassword() + "','" + u.getName() + "',  '" + u.getEmailId() + "', '" + u.getUserType() + "')";
        String message;
        try {
            ps = conn.prepareStatement(query);
            ps.execute();
            ps.close();
            message = "Success";
        } catch (Exception e) {
            System.out.println(e);
            message = "Failed";
        }
        return message;
    }

    public List<User> retriveAllUsers() {
        User u = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        String query = "select * from user";
        List<User> userList = new ArrayList();
        try {
            ps = conn.prepareStatement(query);
            rs = ps.executeQuery();
            while (rs.next()) {
                u = new User();
                u.setUserId(rs.getString("userId"));
                u.setPassword(rs.getString("password"));
                u.setName(rs.getString("name"));
                u.setEmailId(rs.getString("emailId"));
                u.setUserType(rs.getString("userType"));
                userList.add(u);
            }
            ps.close();
        } catch (Exception e) {
            System.out.println(e);
            u = null;
        }
        return userList;
    }

    public List<Bus> retrieveBusNames() {
        Bus bus = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        String query = "select * from bus";
        List<Bus> busList = new ArrayList();
        try {
            ps = conn.prepareStatement(query);
            rs = ps.executeQuery();
            while (rs.next()) {
                bus = new Bus();
                bus.setBusId(rs.getString("busId"));
                bus.setName(rs.getString("name"));
                busList.add(bus);
            }
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
            bus = null;
        }
        return busList;
    }

    public List<Landmark> retrieveLandmarks() {
        Landmark landmark = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        String query = "select * from landmark";
        List<Landmark> landmarkList = new ArrayList();
        try {
            ps = conn.prepareStatement(query);
            rs = ps.executeQuery();
            while (rs.next()) {
                landmark = new Landmark();
                landmark.setLandmarkId(rs.getString("landmarkId"));
                landmark.setName(rs.getString("name"));
                landmarkList.add(landmark);
            }
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
            landmark = null;
        }
        return landmarkList;
    }

    public String createBusPath(BusPath busP, Bus aBus) {
        PreparedStatement ps = null;
        ResultSet rsExistingRecords = null;

        String busPathExistence = "select pathId from buspath where name = ?";
        String message = "";
        try {
            ps = conn.prepareStatement(busPathExistence);
            ps.setString(1, busP.getName());
            rsExistingRecords = ps.executeQuery();
            if (!rsExistingRecords.next()) {
                //Current path does not exist in bus path table. Add it as well as make an entry to the bus travel table.
                insertBusPath(busP);
                insertBusTravelRoute(busP.getPathId(), aBus.getBusId());
                createExtraPaths(busP, aBus);
                message += "Added bus path " + busP.getName();
                ps.close();
            } else {
                //Current path exists. Check if route exists for bus in bustravel
                busP.setPathId(rsExistingRecords.getInt("pathId"));
                ps.close();

                String busTravelRouteExistence = "select * from bustravel where pathId = (select pathId from buspath where name = ?) and busId = ?";
                ps = conn.prepareStatement(busTravelRouteExistence);
                ps.setString(1, busP.getName());
                ps.setString(2, aBus.getBusId());
                rsExistingRecords = ps.executeQuery();
                if (!rsExistingRecords.next()) {
                    //Route does not exist in bus travel table
                    insertBusTravelRoute(busP.getPathId(), aBus.getBusId());
                    createExtraPaths(busP, aBus);
                }

            }

//            ps.close();
        } catch (Exception e) {
            System.out.println(e);
            message = "Failed to add bus path";
        }
        return message;
    }

    private void createExtraPaths(BusPath busP, Bus aBus) {
        PreparedStatement ps = null;
        ResultSet rsp = null;
        ResultSet rsq = null;
        //put results in BusPath objects
        List<BusPath> paths = new ArrayList<>();

        String query1 = "select * from buspath bp join bustravel bt where bp.pathId = bt.pathId and bp.startsAt = ? and bt.busId = ?";
        String query2 = "select * from buspath bp join bustravel bt where bp.pathId = bt.pathId and bp.endsAt = ? and bt.busId = ?";
        String query3 = "select * from buspath bp join bustravel bt where bp.pathId = bt.pathId and bp.startsAt = ? and bt.busId = ?";

        try {
            //Part 1: Add the new transitive paths via the endpoint of the new path
            ps = conn.prepareStatement(query1);
            ps.setString(1, busP.getEndsAt());
            ps.setString(2, aBus.getBusId());
            rsp = ps.executeQuery();

            while (rsp.next()) {
                BusPath path = new BusPath();
                path.setName(busP.getStartsAt() + "_" + rsp.getString("bp.endsAt"));
                path.setStartsAt(busP.getStartsAt());
                path.setEndsAt(rsp.getString("bp.endsAt"));
                path.setDistance(busP.getDistance() + Double.parseDouble(rsp.getString("bp.distance")));
                path.setTravelTime((short) (busP.getTravelTime() + Short.parseShort(rsp.getString("bp.travelTime"))));
                paths.add(path);
            }
            ps.close();

            for (BusPath path : paths) {
                insertBusPath(path);
                insertBusTravelRoute(path.getPathId(), aBus.getBusId());
            }
            paths.clear();

            //Part 2: Add the new transitive paths via the startpoint of the new path(includes new path as well)
            //For paths p
            ps = conn.prepareStatement(query2);
            ps.setString(1, busP.getStartsAt());
            ps.setString(2, aBus.getBusId());
            rsp = ps.executeQuery();

            //For paths q
            ps = conn.prepareStatement(query3);
            ps.setString(1, busP.getStartsAt());
            ps.setString(2, aBus.getBusId());
            rsq = ps.executeQuery();

            while (rsp.next()) {
                while (rsq.next()) {
                    BusPath path = new BusPath();
                    path.setName(rsp.getString("bp.startsAt") + "_" + rsq.getString("bp.endsAt"));
                    path.setStartsAt(rsp.getString("bp.startsAt"));
                    path.setEndsAt(rsq.getString("bp.endsAt"));
                    path.setDistance(Double.parseDouble(rsp.getString("bp.distance")) + Double.parseDouble(rsq.getString("bp.distance")));
                    path.setTravelTime((short) (Short.parseShort(rsp.getString("bp.travelTime")) + Short.parseShort(rsq.getString("bp.travelTime"))));
                    paths.add(path);
                }
                rsq.beforeFirst();
            }
            ps.close();

            for (BusPath path : paths) {
                insertBusPath(path);
                insertBusTravelRoute(path.getPathId(), aBus.getBusId());
            }

        } catch (SQLException ex) {
            System.out.println(ex);
        }
    }

    public String insertBusPath(BusPath busP) {
        PreparedStatement ps = null;
        ResultSet rs = null;

        String query = "insert into buspath (name, startsAt, endsAt, distance, travelTime)" + "values('" + busP.getName()
                + "','" + busP.getStartsAt() + "','" + busP.getEndsAt() + "',  '" + busP.getDistance() + "', '" + busP.getTravelTime() + "')";

        String pathIdRetrieval = "select pathId from buspath where name = ?";

        String message;
        try {
            ps = conn.prepareStatement(query);
            ps.execute();
            ps.close();

            ps = conn.prepareStatement(pathIdRetrieval);
            ps.setString(1, busP.getName());
            rs = ps.executeQuery();
            rs.next();
            busP.setPathId(rs.getInt("pathId"));
            ps.close();

            message = "Added bus path " + busP.getName();
        } catch (Exception e) {
            System.out.println(e);
            message = "Failed to add bus path";
        }
        return message;
    }

    public String insertBusTravelRoute(int pathId, String busId) {
        PreparedStatement ps = null;
        ResultSet rs = null;

        String query = "insert into bustravel values(0, " + pathId + ", '" + busId + "')";
        String message;
        try {
            ps = conn.prepareStatement(query);
            ps.execute();
            ps.close();
            message = "Added 1 bus travel route for bus: " + busId;
        } catch (Exception e) {
            System.out.println(e);
            message = "Failed to add bus route";
        }
        return message;
    }

    public String insertWalkPath(WalkPath walkP) {
        PreparedStatement ps = null;
//        ResultSet rs = null;

        String query = "insert into walkpath (name, startsAt, endsAt, distance, travelTime, compassDirection, description)" + "values('" + walkP.getName() + "','" + walkP.getStartsAt() + "','" + walkP.getEndsAt() + "', " + walkP.getDistance() + ", " + walkP.getTravelTime() + ", '" + walkP.getCompassDirection() + "', '" + walkP.getDescription() + "')";

        String message;
        try {
            ps = conn.prepareStatement(query);
            ps.execute();
            ps.close();
            message = "Success";
        } catch (Exception e) {
            System.out.println(e);
            message = "Failed";
        }
        return message;
    }

    public String insertEvent(Event e) {
        PreparedStatement ps;
//        ResultSet rs = null;

        String query = "insert into event (name, description, startDateTime, userId, landmarkId)" + "values('" + e.getEventName() + "','" + e.getDescription() + "','" + e.getStartDateTime() + "','" + e.getUserId() + "', '" + e.getLandmarkId() + "')";
        String message;

        try {
            ps = conn.prepareStatement(query);
            ps.execute();
            ps.close();
            message = "Success";
        } catch (Exception ex) {
            System.out.println(ex);
            message = "Failed";
        }
        return message;
    }

    public String insertLandmark(Landmark landM) {
        PreparedStatement ps;
//        ResultSet rs = null;

        String query = "insert into landmark (landmarkId, name, latitude, longitude)" + "values('" + landM.getLandmarkId() + "','" + landM.getName() + "'," + landM.getLatitude() + ", " + landM.getLongitude() + ")";
        String message;

        try {
            ps = conn.prepareStatement(query);
            ps.execute();
            ps.close();
            message = "Success";
        } catch (Exception ex) {
            System.out.println(ex);
            message = "Failed";
        }
        return message;
    }

    public ArrayList retrieveAllEvents(String userId) {
        Event evnt;
        Landmark landmark;
        PreparedStatement ps;
        ResultSet rs;

//        String qry = "select * from event where userId = '"+userId+"' or userId in (Select userId from user where userType = 'A')";
        String qry = "select e.eventId, e.name, e.description, e.startDateTime, e.userId, l.landmarkId, l.name "
                + "from event e, landmark l "
                + "where e.landmarkId=l.landmarkId "
                + "and (e.userId = '" + userId + "' or e.userId in (Select userId from user where userType = 'A'))"
                + "and e.startDateTime > CURRENT_TIMESTAMP ";
        ArrayList eventLandmarkList = new ArrayList();
        try {
            ps = conn.prepareStatement(qry);
            rs = ps.executeQuery();
            while (rs.next()) {
                evnt = new Event(rs.getInt("e.eventId"), rs.getString("e.name"),
                        rs.getString("e.description"), rs.getTimestamp("e.startDateTime"),
                        rs.getString("e.userId"), rs.getString("l.landmarkId"));
                eventLandmarkList.add(evnt);
                landmark = new Landmark(rs.getString("l.landmarkId"), rs.getString("l.name"), 0, 0);
                eventLandmarkList.add(landmark);
            }
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
            evnt = null;
        }
        return eventLandmarkList;
    }

    public List<Path> findShortestPath(String startPoint, String endPoint) {
        List<Landmark> landmarks = retrieveLandmarks();

        List<String> landmarkNames = new ArrayList<>();
        List<Path> paths = new ArrayList<>();

        String startPointName = "", endPointName = "";
        for (Landmark landmark : landmarks) {
            landmarkNames.add(landmark.getName());
            if (landmark.getLandmarkId().equals(startPoint)) {
                startPointName = landmark.getName();
            }
            if (landmark.getLandmarkId().equals(endPoint)) {
                endPointName = landmark.getName();
            }
        }

        String busPathQuery = "select ls.name, le.name, bp.distance, bp.travelTime, b.name, b.startTime, b.endTime, 60*(tan((rand() - b.dmShift)*b.dmCompress) + b.dmAvg) as pathDelay\n"
                + "from bustravel bt, buspath bp, bus b, landmark ls, landmark le\n"
                + "where bt.pathId = bp.pathId \n"
                + "and bt.busId = b.busId\n"
                + "and bp.startsAt = ls.landmarkId\n"
                + "and bp.endsAt = le.landmarkId;";
        String walkPathQuery = "select * from walkpath w, landmark ls, landmark le where w.startsAt = ls.landmarkId and w.endsAt = le.landmarkId;";

        PreparedStatement ps = null;
        try {
            //add bus paths to paths list
            ps = conn.prepareStatement(busPathQuery);
            ResultSet rsBusPaths = ps.executeQuery();
            while (rsBusPaths.next()) {
                LocalTime busStartTime = LocalTime.parse(rsBusPaths.getString("startTime"));
                LocalTime busEndTime = LocalTime.parse(rsBusPaths.getString("endTime"));
                if (LocalTime.now().isAfter(busStartTime) && LocalTime.now().isBefore(busEndTime)) {
                    Path p = new Path(rsBusPaths.getString("ls.name"), rsBusPaths.getString("le.name"), (short) (Short.parseShort(rsBusPaths.getString("travelTime"))+Double.parseDouble(rsBusPaths.getString("pathDelay"))),
                            Double.parseDouble(rsBusPaths.getString("distance")), "Bus Route", "Take bus route " + rsBusPaths.getString("b.name"));
                    paths.add(p);
                }
            }
            ps.close();

            //add walk paths to paths list
            ps = conn.prepareStatement(walkPathQuery);
            ResultSet rsWalkPaths = ps.executeQuery();
            while (rsWalkPaths.next()) {
                Path p = new Path(rsWalkPaths.getString("ls.name"), rsWalkPaths.getString("le.name"), Short.parseShort(rsWalkPaths.getString("travelTime")),
                        Double.parseDouble(rsWalkPaths.getString("distance")), "Walk Route",
                        rsWalkPaths.getString("description") + ". Your destination is towards the " + rsWalkPaths.getString("compassDirection"));
                paths.add(p);
            }

        } catch (SQLException ex) {
            System.out.println(ex);
        }

        PathNetwork ugaPN = new PathNetwork(landmarkNames, paths);
        List<Path> pathList = ugaPN.calculateFastestRoute(startPointName, endPointName);

        return pathList;
    }

    public ArrayList retrieveAllEventsToAdmin() {
        Event evnt;
        Landmark landmark;
        PreparedStatement ps;
        ResultSet rs;

//        String qry = "select * from event where userId = '"+userId+"' or userId in (Select userId from user where userType = 'A')";
        String qry = "select l.name, l.landmarkId, e.eventId, e.name, e.description, e.startDateTime, e.userId, e.landmarkId \n"
                + "from event e,landmark l \n"
                + " where e.landmarkId = l.landmarkId";
        ArrayList eventList = new ArrayList();
        try {
            ps = conn.prepareStatement(qry);
            rs = ps.executeQuery();
            while (rs.next()) {
                evnt = new Event(rs.getInt("e.eventId"), rs.getString("e.name"),
                        rs.getString("e.description"), rs.getTimestamp("e.startDateTime"),
                        rs.getString("e.userId"), rs.getString("e.landmarkId"));
                eventList.add(evnt);
                landmark = new Landmark(rs.getString("l.landmarkId"), rs.getString("l.name"), 0, 0);
                eventList.add(landmark);
            }
            ps.close();
        } catch (Exception e) {
            e.printStackTrace();
            evnt = null;
        }
        return eventList;
    }

    public ArrayList retrieveEventsDataToEdit(String eventId) {
        String eid = eventId;
        System.out.println(eid);
        int evntId = Integer.parseInt(eid);
        Event e1;
        PreparedStatement ps = null;
        ResultSet rs = null;
        String qry = "select * from event where eventId = '"+evntId+"'";
        ArrayList eventData = new ArrayList();
        try {
            ps = conn.prepareStatement(qry);
             rs = ps.executeQuery();
            if (rs.next()) {
                e1= new Event(rs.getInt("eventId"), rs.getString("name"), rs.getString("description"),rs.getTimestamp("startDateTime"), rs.getString("userId"), rs.getString("landmarkId"));
                eventData.add(e1);
            }

        } catch (SQLException ex) {
            System.out.println(ex);
        }
        return eventData;
    }

    public String insertEditedEvent(Event e) {
        PreparedStatement ps;
//        ResultSet rs = null;

        String query = "update event set name='"+e.getEventName()+"', description = '"+e.getDescription()+"', startDateTime = '"+e.getStartDateTime()+"' where eventId = "+e.getEventId();
        String message;

        try {
            ps = conn.prepareStatement(query);
            ps.executeUpdate();
            ps.close();
            message = "Success";
        } catch (Exception ex) {
            System.out.println(ex);
            message = "Failed";
        }
        return message;
    }

}
