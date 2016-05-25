/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlet;

import Dao.Dao;
import Model.Bus;
import Model.BusPath;
import Model.WalkPath;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "InsertPathService", urlPatterns = {"/InsertPathService"})
public class InsertPathService extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet InsertPathService</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet InsertPathService at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        doPost(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        String res = "";
        String distance = request.getParameter("distance");
        String busId = request.getParameter("selectedBus");
        String startPoint = request.getParameter("startPoint");
        String endPoint = request.getParameter("endPoint");
        String busTravelTime = request.getParameter("travelTime");
        String pathType = request.getParameter("pathType");
        String comDirection = request.getParameter("compassDirection");
        String description = request.getParameter("description");
        
        short walkTravelTime = (short) ((Double.parseDouble(distance)) / 0.000861);

        if (pathType.compareTo("buspath") == 0) {
            BusPath busP = new BusPath();
            busP.setName(startPoint+"_"+endPoint);
            busP.setStartsAt(startPoint);
            busP.setEndsAt(endPoint);
            busP.setDistance(Double.parseDouble(distance));
            busP.setTravelTime(Short.parseShort(busTravelTime));
            Bus aBus = new Bus();
            aBus.setBusId(busId);

            Dao d=new Dao();
            String msg = d.createBusPath(busP, aBus);
            res = toJSONString(msg);
        } else if (pathType.compareTo("walkpath") == 0) {
            WalkPath walkP = new WalkPath(0, startPoint + "_" + endPoint, startPoint,
                    endPoint, Double.parseDouble(distance), walkTravelTime, comDirection, description);
            Dao d = new Dao();
            String msg = d.insertWalkPath(walkP);
            res = toJSONString(msg);
        }
        else
            res = "Please select a path type!";
        out.println(res);
        out.close();
    }

    public String toJSONString(Object object) {
        GsonBuilder gsonBuilder = new GsonBuilder();
        gsonBuilder.setDateFormat("yyyy-MM-dd HH:mm:ss"); 								// UTC
        Gson gson = gsonBuilder.create();
        return gson.toJson(object);
    }

    public BusPath fromJSON(String string) {
        GsonBuilder gsonBuilder = new GsonBuilder();
        gsonBuilder.setDateFormat("yyyy-MM-dd HH:mm:ss"); 								// UTC
        Gson gson = gsonBuilder.create();

        return gson.fromJson(string, BusPath.class);

    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
