USE [master]
GO
IF db_id('kaBloom') IS NULL
CREATE DATABASE [kaBloom]

GO
USE [kaBloom]
GO

DROP TABLE IF EXISTS[User];
DROP TABLE IF EXISTS[Plant];
DROP TABLE IF EXISTS[Note];

CREATE TABLE [User] (
  [id] int PRIMARY KEY IDENTITY NOT NULL,
  [firebaseId] nvarchar NOT NULL,
  [username] nvarchar(255),
  [email] nvarchar(255)
)
GO

CREATE TABLE [Plant] (
  [id] int PRIMARY KEY NOT NULL,
  [userId] int,
  [type] nvarchar(255),
  [name] nvarchar(255),
  [dateAdopted] date,
  [water] nvarchar(255),
  [light] nvarchar(255),
  [fertilize] nvarchar(255),
  [lastWatered] date,
  [imageUrl] nvarchar(MAX)
)
GO

CREATE TABLE [Note] (
  [id] int PRIMARY KEY,
  [plantId] int,
  [date] date,
  [text] nvarchar(255)
)
GO

ALTER TABLE [Plant] ADD FOREIGN KEY ([userId]) REFERENCES [User] ([id])
GO

ALTER TABLE [Note] ADD FOREIGN KEY ([plantId]) REFERENCES [Plant] ([id])
GO
