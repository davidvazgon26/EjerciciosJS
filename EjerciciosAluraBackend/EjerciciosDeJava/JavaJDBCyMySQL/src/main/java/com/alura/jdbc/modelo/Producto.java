package com.alura.jdbc.modelo;


//Este es el modelo o la representacion de la tabla producto en la base de datos aqui en el backend.
public class Producto {
   
    private Integer id;
    private String nombre;
    private String descripcion;
    private Integer cantidad;
    private Integer categoriaId;

    public Producto(String nombre, String descripcion, Integer cantidad) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
    }

    public Producto(int id, String nombre, String descripcion, int cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
    }

    public String getNombre() {
        return nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public Integer getCantidad() {
        return cantidad;
    }

    public Integer getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setCategoriaId(Integer categoriaId){
        this.categoriaId = categoriaId;
    }

    public int getCategoriaId(){
        return this.categoriaId;
    }

    @Override
    public String toString(){
        return String.format("{id: %s, nombre: %s, descripcion: %s, cantidad: %d}",
        this.id,
        this.nombre,
        this.descripcion,
        this.cantidad);
    }

  
}
