package EjerciciosPOO.JavaCollections.src.mx.com.alura.model;

public class Alumno{
    private String nombre;
    private String codigo;
   
   
    public Alumno(String nombre, String codigo) {
        this.nombre = nombre;
        this.codigo = codigo;
    }

    
    public String getNombre() {
        return nombre;
    }


    public String getCodigo() {
        return codigo;
    }

    //Otro ejemplo de como y porque sobreescribir el metodo to string, si no lo hago solo veremos en consola la referencia al objeto.
    @Override
    public String toString(){ return this.nombre; }   
    
    @Override
    public boolean equals(Object obj){
        Alumno alumno = (Alumno) obj;
        return this.nombre.equals(alumno.getNombre());
    }

    //Como buena practica si sobreescribes equals tambien sobreescribe hashCode para evitar inconsistencias si cambias de ArrayList a HashCode y visceversa
    @Override
    public int hashCode(){
        return this.nombre.hashCode();
    } 
}
