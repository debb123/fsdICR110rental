using Microsoft.EntityFrameworkCore;

namespace Rental.Models{

    /*
    this class will handles the connection to DB and help to retrieve/store/update data
    
    if somehting changes on the models/tables, exec:
    - dotnet ef migrations add <someName>
    -dotnet ef database update*/



    public class DataContext : DbContext {

        public DataContext(DbContextOptions<DataContext> options) : base(options){

        }

        // specify which models need to be converted into DB tables
        public DbSet<Car> Cars {get; set;}

    }
    
        
    
}
