using ManagementCodes.ManagementCodesApi.Model.Entities;

namespace ManagementCodes.ManagementCodesApi.Model.Data;

public interface ICodesData
{
    Task<IEnumerable<Code>> GetCodesAsync();
    Task InsertCode(Code code);
    Task UpdateCode(Code code);
}