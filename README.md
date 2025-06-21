# Unlock the GPU

**Campaign Materials and Documents**

This repository contains all materials for the [**Unlock the GPU**](https://unlockgpu.com/) campaign—a developer-investor alliance working to break NVIDIA's CUDA monopoly by pressuring AMD to fix their software ecosystem.

## 🌐 Website

This repository is set up as a **GitHub Pages site** using Jekyll. The website is automatically built and deployed when you push to the main branch.

### Local Development

To run the site locally:

1. **Install Ruby and Bundler** (if not already installed):
   ```bash
   # On Ubuntu/Debian
   sudo apt-get install ruby-full build-essential
   sudo gem install bundler
   
   # On macOS (using Homebrew)
   brew install ruby
   gem install bundler
   ```

2. **Install dependencies**:
   ```bash
   bundle install
   ```

3. **Run the development server**:
   ```bash
   bundle exec jekyll serve
   ```

4. **View the site** at `http://localhost:4000`

### GitHub Pages Setup

1. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)

2. **The site will be available at**: `https://yourusername.github.io/UnlockGPU/`

### Site Structure

- **Homepage**: `index.md` (Manifesto)
- **Pages**: Located in `_pages/` directory
  - FAQ: `/faq/`
  - Priorities: `/priorities/`
  - Activism Guide: `/activism/`
  - Why $220M?: `/why220m/`

---

## 📖 Campaign Documents

| Document | Description |
|----------|-------------|
| **[📋 Manifesto](Manifesto.md)** | Complete campaign strategy, problem analysis, and demands |
| **[❓ FAQ](FAQ.md)** | Frequently asked questions and detailed explanations |
| **[🎯 Priorities](Priorities.md)** | Technical requirements from the developer community |
| **[📢 Activism Guide](Activism.md)** | Explanation of shareholder activism for developers |

---

## 🎯 How to Get Involved

### 👩‍💻 Developers
- Add your technical requirements to [Priorities.md](Priorities.md)
- Share #UnlockGPU and help build our coalition
- Use GitHub Issues for technical discussions

### 💰 Investors & Shareholders
- Review our [shareholder activism strategy](Activism.md)
- Help us connect with activist investors and AMD shareholders
- Support upcoming shareholder resolutions

### 🌐 Everyone
- **Star this repo** to show support
- **Share campaign materials** in your networks
- **Watch this repo** for updates and new documents

---

## 🚀 Campaign Status

**Current Phase**: Building developer coalition and shareholder base  
**Next Milestone**: Developer priorities document completion  
**Target**: AMD shareholder resolution for 2026 annual meeting

---

## 🤝 Contributing

1. **Fork and improve**: Suggest edits to campaign documents
2. **Add technical input**: Contribute to [Priorities.md](Priorities.md)
3. **Share expertise**: Open issues with insights or resources
4. **Connect networks**: Help us reach developers, investors, and activists
5. **Improve the website**: Submit PRs for better design, content, or functionality

---

## 📞 Updates & Contact

- **Campaign updates**: Watch this repository
- **Social media**: Follow #UnlockGPU
- **Website**: UnlockGPU.com

---

*Start with the [Manifesto](Manifesto.md) to understand our complete strategy.* 