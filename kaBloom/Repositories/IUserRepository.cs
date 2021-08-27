using kaBloom.Models;
using System.Collections.Generic;

namespace kaBloom.Repositories
{
    public interface IUserRepository
    {
        void Add(User user);
        void Delete(int id);
        List<User> GetAll();
        User GetByFirebaseId(string firebaseId);
        User GetById(int id);
        void Update(User user);
    }
}