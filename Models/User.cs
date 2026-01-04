namespace LawFirmApi.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public byte[] PasswordHash { get; set; } = new byte[0]; // Þifrenin kendisi deðil, özeti
        public byte[] PasswordSalt { get; set; } = new byte[0]; // Güvenlik tuzu
        public string Role { get; set; } = "Admin";
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}