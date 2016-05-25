package BusinessLogic;

import Model.Path;
import java.util.*;

import org.jgrapht.graph.*;
import org.jgrapht.alg.*;

public class PathNetwork {

    List<String> landmarks;
    List<Path> paths;
    DirectedWeightedMultigraph<String, DefaultWeightedEdge> g;
//    DirectedWeightedMultigraph<String, DefaultWeightedEdge> fp;

    public PathNetwork(List<String> landmarks, List<Path> paths) {

        this.landmarks = landmarks;
        this.paths = paths;
        g = new DirectedWeightedMultigraph<>(new ClassBasedEdgeFactory<String, DefaultWeightedEdge>(DefaultWeightedEdge.class));

//        fp = new DirectedWeightedMultigraph<String, DefaultWeightedEdge>(new ClassBasedEdgeFactory<String, DefaultWeightedEdge>(DefaultWeightedEdge.class));

        //Add all the vertices to the graph
        for (String landmark : landmarks) {
            g.addVertex(landmark);
        }

        //Add all the edges to the graph
        for (Path path : paths) {
            g.setEdgeWeight(g.addEdge(path.getStartLandmark(), path.getEndLandmark()), path.getTravelTime());
        }

    }

    public List<Path> calculateFastestRoute(String start, String end) {

        List<Path> fastestPath = new ArrayList<Path>();

        DijkstraShortestPath<String, DefaultWeightedEdge> sp
                = new DijkstraShortestPath<String, DefaultWeightedEdge>(g, start, end);

        List<DefaultWeightedEdge> fpath = sp.getPathEdgeList();
        for (int i = 0; i < fpath.size(); i++) {

            String value = fpath.get(i).toString();
            String source = (value.substring(value.indexOf("(") + 1, value.indexOf(":"))).trim();
            String target = (value.substring(value.indexOf(":") + 1, value.indexOf(")"))).trim();
            
            short travelTime = (short) g.getEdgeWeight(fpath.get(i));
            double distance = 0;
            String pathType = "";
            String description="";
            
            for (Path pathway : paths) {
                if (pathway.getStartLandmark().equalsIgnoreCase(source)
                        && pathway.getEndLandmark().equalsIgnoreCase(target)
                        && pathway.getTravelTime() == travelTime) {
                    description = pathway.getDescription();
                    pathType = pathway.getPathType();
                    distance = pathway.getDistance();
                    break;
                }//end if
            }//end for    
            Path routePiece = new Path(source, target, travelTime, distance, pathType, description);
            fastestPath.add(routePiece);

        }
        return fastestPath;
    }

}
