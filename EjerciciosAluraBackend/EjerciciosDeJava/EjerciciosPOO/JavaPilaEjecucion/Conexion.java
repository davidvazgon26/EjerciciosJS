package EjerciciosPOO.JavaPilaEjecucion;

/**
 * Ejemplo de java doc
 * @author David
 * en Conexion estamos simulando una conexion a base de datos.
 * 
 * `@param` esto no se que es
 */

public class Conexion implements AutoCloseable{
    public Conexion(){
        System.out.println("Abriendo Conexion");
        // throw new IllegalStateException();
    }

    public void leerDatos(){
        System.out.println("Recibiendo datos");
        throw new IllegalStateException();
    }

    public void cerrar(){
        System.out.println("Cerrando conexion");
    }

    
    /** 
     * @throws Exception
     */
    @Override
    public void close() throws Exception {
        System.out.println("Entre a close");
        cerrar();
    }
}
