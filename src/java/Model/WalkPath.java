/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Model;
public class WalkPath {
    private int pathId;
    private String name;
    private String startsAt;
    private String endsAt;
    private double distance;
    private short travelTime;
    private String compassDirection;
    private String description;

    public WalkPath(int pathId, String name, String startsAt, String endsAt, double distance, short travelTime, String compassDirection, String description) {
        this.pathId = pathId;
        this.name = name;
        this.startsAt = startsAt;
        this.endsAt = endsAt;
        this.distance = distance;
        this.travelTime = travelTime;
        this.compassDirection = compassDirection;
        this.description = description;
    }
    
    /**
     * @return the pathId
     */
    public int getPathId() {
        return pathId;
    }

    /**
     * @param pathId the pathId to set
     */
    public void setPathId(int pathId) {
        this.pathId = pathId;
    }

    /**
     * @return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return the startsAt
     */
    public String getStartsAt() {
        return startsAt;
    }

    /**
     * @param startsAt the startsAt to set
     */
    public void setStartsAt(String startsAt) {
        this.startsAt = startsAt;
    }

    /**
     * @return the endsAt
     */
    public String getEndsAt() {
        return endsAt;
    }

    /**
     * @param endsAt the endsAt to set
     */
    public void setEndsAt(String endsAt) {
        this.endsAt = endsAt;
    }

    /**
     * @return the distance
     */
    public double getDistance() {
        return distance;
    }

    /**
     * @param distance the distance to set
     */
    public void setDistance(double distance) {
        this.distance = distance;
    }

    /**
     * @return the travelTime
     */
    public short getTravelTime() {
        return travelTime;
    }

    /**
     * @param travelTime the travelTime to set
     */
    public void setTravelTime(short travelTime) {
        this.travelTime = travelTime;
    }

    /**
     * @return the compassDirection
     */
    public String getCompassDirection() {
        return compassDirection;
    }

    /**
     * @param compassDirection the compassDirection to set
     */
    public void setCompassDirection(String compassDirection) {
        this.compassDirection = compassDirection;
    }

    /**
     * @return the description
     */
    public String getDescription() {
        return description;
    }

    /**
     * @param description the description to set
     */
    public void setDescription(String description) {
        this.description = description;
    }
}
