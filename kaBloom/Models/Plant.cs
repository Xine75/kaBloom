using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kaBloom.Models
{
    public class Plant
    {
        public int Id { get; set; }
        public string Type { get; set; }
        public string Name { get; set; }
        public DateTime DateAdopted { get; set; }
        public string WaterNeeds { get; set; }
        public string LightNeeds { get; set; }
        public string Fertilize { get; set; }
        public DateTime LastWatered { get; set; }
        public string ImageUrl { get; set; }

    }
}
