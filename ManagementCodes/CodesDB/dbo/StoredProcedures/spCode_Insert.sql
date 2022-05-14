CREATE PROCEDURE [dbo].[spCode_Insert]
	@Value NVARCHAR(3),
	@Name NVARCHAR(20)
AS
BEGIN
	INSERT INTO dbo.[Code] ([Value], [Name])
	VALUES (@Value, @Name);
END