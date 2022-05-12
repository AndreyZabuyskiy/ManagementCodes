using ManagementCodes.ManagementCodesApi.Model.DataAccess;
using ManagementCodes.ManagementCodesApi.Model.Entities;

namespace ManagementCodes.ManagementCodesApi.Model.Data;

public class CodesData
{
    public readonly ISqlDataAccess _db;

    public CodesData(ISqlDataAccess db)
    {
        _db = db;
    }

    public async Task<IEnumerable<Code>> GetCodesAsync() =>
        await _db.LoadData<Code, dynamic>("spCode_GetAll", new { });
}