package EjerciciosPOO.JavaPilaEjecucion;

public class TestConexion {
    public static void main(String[] args) throws Exception {
        
      /*  Conexion con = null;
        try {
            con = new Conexion();
            con.leerDatos();
        } catch (IllegalStateException e) {
            System.out.println("Recibiendo la exception");
            e.printStackTrace();
        }finally{
            System.out.println("Ejecutando finally");
            if (con != null) con.cerrar();
        }*/
    
        try(Conexion con = new Conexion()){
            con.leerDatos();
        }catch(IllegalStateException ex){
            System.out.println("Ejecutando catch");
            ex.printStackTrace();
        }
    
    }
}
