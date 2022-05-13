﻿using ManagementCodes.ManagementCodesApi.Model.Entities;

namespace ManagementCodes.ManagementCodesApi.Model.Data;

public interface ICodesData
{
    Task<IEnumerable<Code>> GetCodesAsync();
}