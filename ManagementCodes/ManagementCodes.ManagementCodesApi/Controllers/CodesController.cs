using ManagementCodes.ManagementCodesApi.Model.Data;
using ManagementCodes.ManagementCodesApi.Model.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ManagementCodes.ManagementCodesApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CodesController : ControllerBase
{
    private readonly ICodesData _data;

    public CodesController(ICodesData data)
    {
        _data = data;
    }

    [HttpGet]
    public async Task<IActionResult> GetAllCodesAsync()
    {
        try
        {
            return Ok(await _data.GetCodesAsync());
        }
        catch(Exception ex)
        {
            return Problem(ex.Message);
        }
    }
}
