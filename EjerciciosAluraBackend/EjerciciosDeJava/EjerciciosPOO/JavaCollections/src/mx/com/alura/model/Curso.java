package EjerciciosPOO.JavaCollections.src.mx.com.alura.model;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet; 
// import java.util.LinkedHashSet; // // clase 16
import java.util.List;
import java.util.Map;

public class Curso implements Comparable<Curso> {
    private String nombre;
    private int tiempo;
    private List<Aula> aulaList = new ArrayList<>();
    private Collection<Alumno> alumnos = new HashSet<>(); 
    // private Collection<Alumno> alumnos = new LinkedHashSet<>();// Cambio a LinkedHashSet en la clase 16
    private Map<String, Alumno> alumnoMap = new HashMap<>();  // clase 18
   
    //Constructor 1
    public Curso(String nombre, int tiempo) {
        this.nombre = nombre;
        this.tiempo = tiempo;

    }

    //Constructor 2
    public Curso(String nombre, int tiempo, List<Aula> aulaList) {
        this.nombre = nombre;
        this.tiempo = tiempo;
        this.aulaList = aulaList;
    }



    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public int getTiempo() {
        return tiempo;
    }
    public void setTiempo(int tiempo) {
        this.tiempo = tiempo;
    }
    public List<Aula> getAulaList() {
        return aulaList;
    }
    public void setAulaList(List<Aula> aulaList) {
        this.aulaList = aulaList;
    }

    public Collection<Alumno> getAlumnos() {  //Se agrego en la clase 15
        return alumnos;
    }

    public void addAula(Aula clase){
        this.aulaList.add(clase);    
    }

    public void addAlumno(Alumno alumno){
        this.alumnos.add(alumno);
        this.alumnoMap.put(alumno.getCodigo(), alumno); // Clase 18
    }

    

    public boolean verificaAlumno(Alumno alumno){ return this.alumnos.contains(alumno);}  //Se agrego en la clase 15
    

    //Otro ejemplo de como y porque sobreescribir el metodo to string, si no lo hago solo veremos en consola la referencia al objeto.
    @Override
    public String toString(){
        return this.nombre;
    }


    @Override
    public int compareTo(Curso o) {

        return this.nombre.compareTo(o.getNombre());
    }

    public Map<String, Alumno> getAlumnoMap() {  // Clase 18
        return alumnoMap;
    }
    
}
