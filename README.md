# Odes & Codes // Infrastructure Dossier

## 🛠 System Architecture
- **Framework:** Astro (Static Output)
- **Primary Host:** AWS EC2 (Ubuntu 24.04)
- **Web Server:** Caddy (Reverse Proxy & Static File Server)
- **Secondary Host:** Cloudflare Pages (Global Edge)
- **CI/CD:** GitHub Actions (Dual-Deploy Workflow)

## 📡 Access Points
- **Production:** `odesandcodes.com` (Cloudflare)
- **Admin Tier:** `18.208.126.241/odes/` (AWS/Caddy)

## 🖋 How to Add a New Card
1. Navigate to `src/content/posts/`
2. Create a new file: `any-name.md`
3. Add the required Frontmatter:
   ```markdown
   ---
   caption: "TIMESTAMP // TOPIC"
   ---
   Your text goes here.