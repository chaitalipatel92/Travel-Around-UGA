/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Model;

import java.sql.Timestamp;
public class Event {
    private String eventName;
    private int eventId;
    private String description;
    private Timestamp startDateTime;
    private String userId;
    private String landmarkId;

    public Event(int eventId, String eventName, String description, Timestamp startDateTime, String userId, String landmarkId) {
        this.eventId = eventId;
        this.eventName = eventName;
        this.description = description;
        this.startDateTime = startDateTime;
        this.userId = userId;
        this.landmarkId = landmarkId;
    }

    public Event() {        
    }
    
    
    /**
     * @return the eventId
     */
    public int getEventId() {
        return eventId;
    }

    /**
     * @param eventId the eventId to set
     */
    public void setEventId(int eventId) {
        this.eventId = eventId;
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

    /**
     * @return the startDateTime
     */
    public Timestamp getStartDateTime() {
        return startDateTime;
    }

    /**
     * @param startDateTime the startDateTime to set
     */
    public void setStartDateTime(Timestamp startDateTime) {
        this.startDateTime = startDateTime;
    }

    /**
     * @return the userId
     */
    public String getUserId() {
        return userId;
    }

    /**
     * @param userId the userId to set
     */
    public void setUserId(String userId) {
        this.userId = userId;
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
     * @return the eventName
     */
    public String getEventName() {
        return eventName;
    }

    /**
     * @param eventName the eventName to set
     */
    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

}
