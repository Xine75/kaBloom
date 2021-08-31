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
        public string Water { get; set; }
        public string Light { get; set; }
        public string Fertilize { get; set; }
        public DateTime LastWatered { get; set; }
        public string ImageUrl { get; set; }

        //computed property
        public string PlantNeeds
        {
            get
            {
                return $"{Water}, {Light}, {Fertilize}";
            }
        }

        //constructor to identify plant
        public Plant (string type, string name, string image)
        {
            Name = name;
            Type = type;
            ImageUrl = image;
        }

    }
}
