/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Model;
public class Landmark {
    private String landmarkId;
    private String name;
    private double latitude;
    private double longitude;

    public Landmark(String landmarkId, String name, double latitude, double longitude) {
        this.landmarkId = landmarkId;
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public Landmark() {
    }

    /**
     * @return the landmarkId
     */
    public String getLandmarkId() {
        return landmarkId;
    }

    /**
     * @param landmarkId the landmarkId to set
     */
    public void setLandmarkId(String landmarkId) {
        this.landmarkId = landmarkId;
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
     * @return the latitude
     */
    public double getLatitude() {
        return latitude;
    }

    /**
     * @param latitude the latitude to set
     */
    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    /**
     * @return the longitude
     */
    public double getLongitude() {
        return longitude;
    }

    /**
     * @param longitude the longitude to set
     */
    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }
}
