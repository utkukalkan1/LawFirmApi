using Microsoft.EntityFrameworkCore;
using LawFirmApi.Models; // Models klasörünü oluþturunca burasý çalýþacak

namespace LawFirmApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        // Tablolarýmýzýn C# tarafýndaki temsilleri
        // Henüz Model sýnýflarýný yazmadýk, hata verirse endiþelenme, bir sonraki adýmda yazacaðýz.
        public DbSet<User> Users { get; set; }
        public DbSet<Article> Articles { get; set; }
        public DbSet<Contact> Contacts { get; set; }
    }
}