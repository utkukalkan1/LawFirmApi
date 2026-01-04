using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LawFirmApi.Data;
using LawFirmApi.Models;
using Microsoft.AspNetCore.Authorization;

namespace LawFirmApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ContactsController(AppDbContext context)
        {
            _context = context;
        }

        // 1. MESAJ GÖNDER (Herkese Açık)
        [HttpPost]
        public async Task<ActionResult<Contact>> SendMessage(Contact contact)
        {
            contact.SentDate = DateTime.Now;
            contact.IsRead = false; // Yeni mesaj okunmadı olarak gelir

            _context.Contacts.Add(contact);
            await _context.SaveChangesAsync();

            return Ok("Mesajınız başarıyla iletildi.");
        }

        // 2. MESAJLARI OKU (Sadece Adminler)
        [Authorize]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Contact>>> GetMessages()
        {
            // En yeniden en eskiye sırala
            return await _context.Contacts.OrderByDescending(c => c.SentDate).ToListAsync();
        }

        // 3. MESAJ SİL (Sadece Adminler)
        [Authorize]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMessage(int id)
        {
            var contact = await _context.Contacts.FindAsync(id);
            if (contact == null) return NotFound();

            _context.Contacts.Remove(contact);
            await _context.SaveChangesAsync();
            return Ok("Mesaj silindi.");
        }
    }
}