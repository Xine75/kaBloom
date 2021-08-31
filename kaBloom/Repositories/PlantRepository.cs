using kaBloom.Models;
using kaBloom.Utils;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kaBloom.Repositories
{
    public class PlantRepository : BaseRepository, IPlantRepository
    {
        public PlantRepository(IConfiguration configuration) : base(configuration) { }

        public List<Plant> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id, Name, Type, DateAdopted, Water, Light, Fertilize, LastWatered, ImageUrl
                                        FROM Plant
                                        ORDER BY DateAdopted DESC";

                    using (var reader = cmd.ExecuteReader())
                    {
                        var plants = new List<Plant>();
                        while (reader.Read())
                        {
                            plants.Add(new Plant()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Name = DbUtils.GetString(reader, "Name"),
                                DateAdopted = DbUtils.GetDateTime(reader, "DateAdopted"),
                                Water = DbUtils.GetString(reader, "Water"),
                                Light = DbUtils.GetString(reader, "Light"),
                                Fertilize = DbUtils.GetString(reader, "Fertilize"),
                                LastWatered = DbUtils.GetDateTime(reader, "LastWatered"),
                                ImageUrl = DbUtils.GetString(reader, "ImageUrl")
                            });
                        }
                        reader.Close();
                        return plants;
                    }
                }
            }
        }
    }
}
