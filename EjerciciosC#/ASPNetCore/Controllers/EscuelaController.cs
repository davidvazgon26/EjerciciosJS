using System;
using Microsoft.AspNetCore.Mvc;
using AspNetCore;


namespace ASPNetCore
{
    public class EscuelaController : Controller
    {
        public IActionResult Index()
        {
            var escuela = new Escuela();
            escuela.Anio = 2020;
            escuela.EscuelaId = Guid.NewGuid().ToString();
            escuela.Nombre = "DavidSchool";

            ViewBag.CosasDinamicas = "Una prueba de bolsa dinamica";

            return View(escuela);
        }
    }
}
