using kaBloom.Models;
using kaBloom.Utils;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kaBloom.Repositories
{
    public class UserRepository : BaseRepository
    {
        public UserRepository(IConfiguration configuration) : base(configuration) { }
        public List<User>GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id, Username, Email FROM User ORDER BY Username";


                    using (var reader = cmd.ExecuteReader())
                    {
                        var users = new List<User>();
                        while (reader.Read())
                        {
                            users.Add(new User()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Email = DbUtils.GetString(reader, "Email"),
                                Username = DbUtils.GetString(reader, "Username")

                            });
                        }
                        reader.Close();
                        return users;
                    }
                }
            }
        }
        public User GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "SELECT Id, Email, Username FROM User WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    var reader = cmd.ExecuteReader();
                    User user = null;
                    while (reader.Read())
                    {
                        user = new User()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Email = DbUtils.GetString(reader, "Email"),
                            Username = DbUtils.GetString(reader, "Username")

                        };
                    }
                    reader.Close();
                    return user;
                }
            }
        }
    }
}
