using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace kaBloom.Models
{
    public class User
    {
        public int Id { get; set; }

        [StringLength(28, MinimumLength =28)]
        public string FirebaseId { get; set; }
        public string Username { get; set; }

        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
    }
}
