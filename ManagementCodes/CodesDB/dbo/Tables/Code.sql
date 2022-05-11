﻿CREATE TABLE [dbo].[Code]
(
	Id INT PRIMARY KEY IDENTITY,
	[Value] NVARCHAR(3) NOT NULL CHECK([Value] != ''),
	[Name] NVARCHAR(20) NOT NULL CHECK([Name] != '')
)