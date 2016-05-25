/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Model;

public class Path {
    private String startLandmark;
    private String endLandmark;
    private double distance;
    private short travelTime;
    private String pathType;
    private String description;

    public Path(String startLandmark, String endLandmark, short travelTime, double distance, String pathType, String description) {
        this.startLandmark = startLandmark;
        this.endLandmark = endLandmark;
        this.distance = distance;
        this.travelTime = travelTime;
        this.pathType = pathType;
        this.description = description;
    }

    /**
     * @return the startLandmark
     */
    public String getStartLandmark() {
        return startLandmark;
    }

    /**
     * @param startLandmark the startLandmark to set
     */
    public void setStartLandmark(String startLandmark) {
        this.startLandmark = startLandmark;
    }

    /**
     * @return the endLandmark
     */
    public String getEndLandmark() {
        return endLandmark;
    }

    /**
     * @param endLandmark the endLandmark to set
     */
    public void setEndLandmark(String endLandmark) {
        this.endLandmark = endLandmark;
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
     * @return the pathType
     */
    public String getPathType() {
        return pathType;
    }

    /**
     * @param pathType the pathType to set
     */
    public void setPathType(String pathType) {
        this.pathType = pathType;
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
