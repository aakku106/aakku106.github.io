# 🚀 Adarasha Gaihre - Professional Portfolio Website

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fwww.adarashagaihre.com.np)](https://www.adarashagaihre.com.np)
[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-brightgreen)](https://aakku106.github.io)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=flat&logo=sass&logoColor=white)](https://sass-lang.com/)

A modern, responsive portfolio website showcasing my journey as a Computer Science student and web developer. Built with vanilla HTML, CSS/SCSS, and JavaScript, featuring an anime-inspired design with smooth animations and interactive elements.

## 🌐 Live Demo

**🔗 [Visit My Portfolio](https://www.adarashagaihre.com.np)**

Alternative URL: [GitHub Pages](https://aakku106.github.io)

## 📖 About

This portfolio website represents my passion for web development, combining clean code with creative design. As a Computer Science student from Nepal, I've crafted this site to showcase my skills, projects, and personality through a unique anime-inspired theme.

### 🎯 Key Highlights

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Performance Focused**: Fast loading times and optimized assets
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Accessibility**: WCAG compliant with proper ARIA labels

## ✨ Features

### 🏠 **Landing Page**

- Dynamic animated hero section
- Interactive navigation with hover effects
- Professional terminal-style loader
- Smooth scroll navigation

### 👨‍💻 **About Me**

- Personal introduction and background
- Skills and experience showcase
- Educational journey
- Interactive image gallery with hover effects
- Responsive grid layout

### 💼 **Portfolio**

- Projects showcase (coming soon)
- Technology stack highlights
- Achievement gallery
- Interactive project cards

### 📧 **Contact**

- Anime-themed contact form
- Multiple contact methods
- Social media integration
- Interactive 3D card effects
- Form validation and submission

### 📱 **Mobile Experience**

- Hamburger menu navigation
- Touch-friendly interactions
- Optimized typography and spacing
- Swipe gestures support

## 🛠️ Technologies Used

### Frontend

- **HTML5**: Semantic markup and structure
- **CSS3/SCSS**: Modern styling with Sass preprocessing
- **JavaScript (ES6+)**: Interactive functionality and animations
- **Google Fonts**: Typography (Reenie Beanie, Amatic SC, Ninja Naruto)

### Design & UI

- **Responsive Design**: Mobile-first approach
- **CSS Grid & Flexbox**: Modern layout techniques
- **CSS Animations**: Smooth transitions and hover effects
- **Backdrop Filters**: Modern glass-morphism effects

### Performance & SEO

- **Google Analytics**: Traffic monitoring and insights
- **Structured Data**: Schema.org markup for better SEO
- **Meta Tags**: Complete social media and search optimization
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Search engine crawling guidelines

## 📁 Project Structure

```text
aakku106.github.io/
├── index.html                 # Landing page
├── pages/
│   ├── about/
│   │   ├── index.html        # About me page
│   │   └── blink.css         # Special animations
│   ├── contact/
│   │   └── index.html        # Contact page
│   └── portfolio/
│       └── index.html        # Portfolio page
├── js/
│   ├── script.js             # Main JavaScript functionality
│   ├── Archive.js            # Additional utilities
│   └── navBar.js/            # Navigation components
│       ├── NavBar.js
│       ├── NavBarLanding.js
│       └── NavBarPages.js
├── style/
│   ├── style.scss            # Main SCSS file
│   ├── style.css             # Compiled CSS
│   ├── _variables.scss       # SCSS variables
│   ├── _mixins.scss          # SCSS mixins
│   ├── _contactMePage.scss   # Contact page styles
│   ├── _desktopAboutMeBody.scss # About page styles
│   └── [other SCSS partials]
├── pictures/                 # Image assets
│   ├── contactPage/
│   ├── desktop/
│   ├── mobile/
│   └── Webicon/
├── CNAME                     # Custom domain configuration
├── sitemap.xml              # SEO sitemap
├── robots.txt               # Search engine instructions
└── README.md                # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- Basic understanding of HTML, CSS, and JavaScript
- Text editor or IDE (VS Code recommended)

### Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/aakku106/aakku106.github.io.git
   cd aakku106.github.io
   ```

2. **Serve locally**

   ```bash
   # Using Python (if installed)
   python -m http.server 8000

   # Using Node.js live-server (if installed)
   npx live-server

   # Or simply open index.html in your browser
   ```

3. **Development with SCSS**

   ```bash
   # Install Sass (if needed)
   npm install -g sass

   # Watch for SCSS changes
   sass --watch style/style.scss:style/style.css
   ```

### Deployment

The website is automatically deployed via GitHub Pages when changes are pushed to the main branch.

## 🎨 Design Philosophy

### Color Palette

- **Primary**: `#c77d27` (Warm Orange)
- **Secondary**: `#060310` (Deep Navy)
- **Accent**: Naruto-inspired orange and blue tones

### Typography

- **Headings**: Ninja Naruto, Amatic SC
- **Body**: Reenie Beanie
- **UI Elements**: System fonts for readability

### Animation Principles

- **Smooth Transitions**: All interactions have fluid animations
- **Performance First**: GPU-accelerated transforms
- **Accessibility**: Respects user's motion preferences

## 📱 Responsive Breakpoints

```scss
// Mobile First Approach
@media (max-width: 480px) // Mobile devices @media (max-width: 768px) // Tablets @media (max-width: 1024px) // Small desktops @media (min-width: 1025px); // Large desktops
```

## 🔧 Performance Optimizations

- **Image Optimization**: Compressed images and modern formats
- **CSS Minification**: Production-ready compiled CSS
- **Lazy Loading**: Images load as needed
- **Caching**: Proper cache headers for static assets
- **CDN**: Google Fonts and external resources via CDN

## 📊 SEO Features

- **Meta Tags**: Complete Open Graph and Twitter Card support
- **Structured Data**: Schema.org Person and ProfilePage markup
- **Canonical URLs**: Proper canonical tag implementation
- **Multilingual Support**: hreflang tags for international SEO
- **Google Analytics**: Integrated tracking and insights

## 🤝 Contributing

While this is a personal portfolio, I welcome feedback and suggestions!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

### Adarasha Gaihre

- 🌐 Website: [www.adarashagaihre.com.np](https://www.adarashagaihre.com.np)
- 💼 LinkedIn: [Connect with me](https://linkedin.com/in/adarashagaihre)
- 🐙 GitHub: [@aakku106](https://github.com/aakku106)
- 📧 Email: Contact via website form

## 🙏 Acknowledgments

- **Inspiration**: Naruto anime series for the creative theme
- **Fonts**: Google Fonts for beautiful typography
- **Icons**: Font Awesome for UI icons
- **Hosting**: GitHub Pages for reliable hosting
- **Community**: The web development community for continuous learning

---

## ⭐ Star this repository if you found it helpful! ⭐

Made with ❤️ by Adarasha Gaihre

![Visitor Count](https://visitor-badge.laobi.icu/badge?page_id=aakku106.aakku106.github.io)
