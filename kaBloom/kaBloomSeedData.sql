SET IDENTITY_INSERT [User] ON
INSERT INTO [User]
([id], [firebaseId], [username], [email])
VALUES
(1, 'zy6PRXY6SEQ9v3aktXN2NeQnBW42', 'xine', 'xine@kabloom.com'),
(2, 'Siv7MbHjkuUASu5rFhj8UucRCER2', 'Jeanette', 'jeanette@kabloom.com'),
(3, 'zN30IZHrwMRaxbm5MwMsPuUec6V2', 'Megan', 'megan@kabloom.com');
SET IDENTITY_INSERT [User] OFF


SET IDENTITY_INSERT [Plant] ON
INSERT INTO [Plant]
([id], [userId], [type], [name], [dateAdopted], [water], [light], [fertilize], [lastWatered], [imageUrl])
VALUES
(1, 1, 'Philodendron', 'Phil', SYSDATETIME(), 'Let soil dry between waterings', 'Medium', 'Monthly', SYSDATETIME(), 'https://res.cloudinary.com/kabloom/image/upload/c_scale,w_228/v1612888527/kabloom/l5mv4dpsp1nydfap6dac.png'),
(2, 1, 'Spider', 'Arachne', SYSDATETIME(), 'Let top of soild dry', 'Medium', 'Every 6 months', SYSDATETIME(), 'https://res.cloudinary.com/kabloom/image/upload/v1611935227/kabloom/Spider_tn0ljr.png'),
(3, 2, 'Croton', 'Rhonda', SYSDATETIME(), 'Let soil dry between waterings', 'Direct', 'Every 6 months', SYSDATETIME(), 'https://res.cloudinary.com/kabloom/image/upload/v1612305726/kabloom/gxckmc7vugnzty2q77tl.png');
SET IDENTITY_INSERT [Plant] OFF

SET IDENTITY_INSERT [Note] ON
INSERT INTO [Note]
([id], [plantId], [date], [text])
VALUES
(1, 1, SYSDATETIME(), 'Repotted'),
(2, 1, SYSDATETIME(), 'Bloomed'),
(3, 2, SYSDATETIME(), 'I played Mozart for her'),
(4, 2, SYSDATETIME(), 'Some leaves turned yellow'),
(5, 3, SYSDATETIME(), 'Lemon knocked her down the stairs');
SET IDENTITY_INSERT [Note] OFF

