using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kaBloom.Models
{
    public class Note
    {
        public int Id { get; set; }
        public int PlantId { get; set; }
        public DateTime Date { get; set; }
        public string Text { get; set; }
    }
}
