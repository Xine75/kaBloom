using kaBloom.Models;
using System.Collections.Generic;

namespace kaBloom.Repositories
{
    public interface IPlantRepository
    {
        List<Plant> GetAll();
    }
}