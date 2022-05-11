IF NOT EXISTS (select 1 from dbo.[Code])
BEGIN
	INSERT INTO dbo.[Code] ([Value], [Name])
	VALUES ('328', 'Код'), ('050', 'Водафон'),
		('852', 'SomeValue'), ('452', 'Coffee')
END
GO
