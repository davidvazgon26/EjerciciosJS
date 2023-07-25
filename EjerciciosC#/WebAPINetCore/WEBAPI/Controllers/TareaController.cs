using System;
using Microsoft.AspNetCore.Mvc;
using WEBAPI.Services;
using WEBAPI.Models;


[Route("api/[controller]")]
public class TareaController : ControllerBase
{
    ITareasService tareasService;

    public TareaController(ITareasService service)
    {
        tareasService = service;
    }

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(tareasService.Get());
    }

    [HttpPost]
    public IActionResult Post([FromBody] Tarea tareas)
    {
        tareasService.Save(tareas);
        return Ok();
    }

    [HttpPut("{id}")]
    public IActionResult Put(Guid id, [FromBody] Tarea tareas)
    {
        tareasService.Update(id, tareas);
        return Ok();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(Guid id)
    {
        tareasService.Delete(id);
        return Ok();
    }
}