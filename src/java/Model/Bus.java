/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Model;

import java.sql.Time;
public class Bus {
    private String busId;
    private String name;
    private Time startTime;
    private Time endTime;
    private float delayModel[];

    /**
     * @return the busId
     */
    public String getBusId() {
        return busId;
    }

    /**
     * @param busId the busId to set
     */
    public void setBusId(String busId) {
        this.busId = busId;
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
     * @return the startTime
     */
    public Time getStartTime() {
        return startTime;
    }

    /**
     * @param startTime the startTime to set
     */
    public void setStartTime(Time startTime) {
        this.startTime = startTime;
    }

    /**
     * @return the endTime
     */
    public Time getEndTime() {
        return endTime;
    }

    /**
     * @param endTime the endTime to set
     */
    public void setEndTime(Time endTime) {
        this.endTime = endTime;
    }

    /**
     * @return the delayModel
     */
    public float[] getDelayModel() {
        return delayModel;
    }

    /**
     * @param dmShift The shift factor of the delay model
     * @param dmCompress The compress factor of the delay model
     * @param dmAvg The average factor of the delay model
     */
    public void setDelayModel(float dmShift, float dmCompress, float dmAvg) {
        this.delayModel = new float[3];
        delayModel[0] = dmShift;
        delayModel[1] = dmCompress;
        delayModel[2] = dmAvg;
    }
}
