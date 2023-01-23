package EjerciciosPOO.JavaCollections.src.mx.com.alura.model;

import java.util.ArrayList;
import java.util.List;

public class Curso implements Comparable<Curso> {
    private String nombre;
    private int tiempo;
    private List<Aula> aulaList = new ArrayList<>();
   
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

    public void addAula(Aula clase){
        this.aulaList.add(clase);    
    }
    

    //Otro ejemplo de como y porque sobreescribir el metodo to string, si no lo hago solo veremos en consola la referencia al objeto.
    @Override
    public String toString(){
        return this.nombre;
    }


    @Override
    public int compareTo(Curso o) {

        return this.nombre.compareTo(o.getNombre());
    }
    
}
