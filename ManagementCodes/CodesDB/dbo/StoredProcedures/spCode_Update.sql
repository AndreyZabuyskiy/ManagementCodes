CREATE PROCEDURE [dbo].[spCode_Update]
	@Id INT,
	@Value NVARCHAR(3),
	@Name NVARCHAR(20)
AS
BEGIN
	UPDATE dbo.[Code]
	SET [Value] = @Value, [Name] = @Name
	WHERE Id = @Id
END