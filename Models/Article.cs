namespace LawFirmApi.Models
{
	public class Article
	{
		public int Id { get; set; }
		public string Title { get; set; } = string.Empty;
		public string Slug { get; set; } = string.Empty; // URL dostu baþlýk
		public string Content { get; set; } = string.Empty;
		public string Summary { get; set; } = string.Empty;
		public string ImageUrl { get; set; } = string.Empty;
		public bool IsActive { get; set; } = true;
		public DateTime CreatedDate { get; set; } = DateTime.Now;

		// Ýliþkiler (Foreign Key)
		public int AuthorId { get; set; }
		// User nesnesine gerek yok þimdilik, sonsuz döngüden kaçýnmak için basit tutuyoruz.
	}
}