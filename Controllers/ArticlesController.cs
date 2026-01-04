using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LawFirmApi.Data;
using LawFirmApi.Models;
using Microsoft.AspNetCore.Authorization;

namespace LawFirmApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticlesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ArticlesController(AppDbContext context)
        {
            _context = context;
        }

        // 1. TÜM MAKALELERİ GETİR (Herkese Açık)
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Article>>> GetArticles()
        {
            // En yeniden en eskiye doğru sıralayıp gönderiyoruz
            return await _context.Articles.OrderByDescending(a => a.CreatedDate).ToListAsync();
        }

        // 2. TEK BİR MAKALE GETİR (Detay Sayfası İçin)
        [HttpGet("{id}")]
        public async Task<ActionResult<Article>> GetArticle(int id)
        {
            var article = await _context.Articles.FindAsync(id);
            if (article == null) return NotFound("Makale bulunamadı.");
            return article;
        }

        // 3. YENİ MAKALE EKLE (Sadece Giriş Yapmış Adminler)
        [Authorize]
        [HttpPost]
        public async Task<ActionResult<Article>> PostArticle(Article article)
        {
            // Basit bir Slug (URL) oluşturma mantığı
            if (string.IsNullOrEmpty(article.Slug))
            {
                article.Slug = article.Title.ToLower().Replace(" ", "-")
                    .Replace("ı", "i").Replace("ğ", "g").Replace("ü", "u")
                    .Replace("ş", "s").Replace("ö", "o").Replace("ç", "c");
            }

            article.CreatedDate = DateTime.Now;
            _context.Articles.Add(article);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetArticle), new { id = article.Id }, article);
        }

        // 4. MAKALE SİL (Sadece Adminler)
        [Authorize]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteArticle(int id)
        {
            var article = await _context.Articles.FindAsync(id);
            if (article == null) return NotFound("Silinecek makale bulunamadı.");

            _context.Articles.Remove(article);
            await _context.SaveChangesAsync();

            return Ok("Makale başarıyla silindi.");
        }

        // 5. MAKALE GÜNCELLE (Sadece Adminler)
        [Authorize]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutArticle(int id, Article article)
        {
            if (id != article.Id)
            {
                // Swagger bazen ID göndermezse, URL'den alıp nesneye ekleyelim
                article.Id = id;
            }

            var existingArticle = await _context.Articles.FindAsync(id);
            if (existingArticle == null) return NotFound("Makale bulunamadı.");

            // Mevcut veriyi yenisiyle değiştir
            existingArticle.Title = article.Title;
            existingArticle.Summary = article.Summary;
            existingArticle.Content = article.Content;
            existingArticle.ImageUrl = article.ImageUrl;

            // İstersen başlık değişince linki (Slug) de güncelleyebilirsin:
            existingArticle.Slug = article.Title.ToLower().Replace(" ", "-")
                .Replace("ı", "i").Replace("ğ", "g").Replace("ü", "u")
                .Replace("ş", "s").Replace("ö", "o").Replace("ç", "c");

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Articles.Any(e => e.Id == id)) return NotFound();
                else throw;
            }

            return NoContent(); // 204 No Content (Başarılı ama veri dönmüyorum)
        }
    }

}
