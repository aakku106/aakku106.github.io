<!-- @format -->

# Structured Data (JSON-LD) Implementation Guide

## 📋 Overview

This guide explains how to implement consistent structured data across all pages of your portfolio website using the `structuredData.js` file.

## 🚀 Quick Setup

### 1. Include the Script

Add this script tag to the bottom of your HTML pages (before closing `</body>` tag):

```html
<script src="../../js/structuredData.js"></script>
```

**Note:** Adjust the path based on your page location:

- Main page: `./js/structuredData.js`
- Pages folder: `../../js/structuredData.js`

### 2. Automatic Detection

The script automatically detects your page type based on the URL:

- `/about/` → AboutPage
- `/portfolio/` → CollectionPage (Portfolio)
- `/contact/` → ContactPage
- Default → ProfilePage (Home)

## 🎯 Page Types Supported

### 1. **Main/Home Page** (ProfilePage)

```javascript
// Automatically applied for main domain
// No additional setup needed
```

### 2. **About Page** (AboutPage)

```javascript
// Automatically applied for URLs containing '/about/'
// No additional setup needed
```

### 3. **Portfolio Page** (CollectionPage)

```javascript
// Automatically applied for URLs containing '/portfolio/'
// No additional setup needed
```

### 4. **Contact Page** (ContactPage)

```javascript
// Automatically applied for URLs containing '/contact/'
// No additional setup needed
```

### 5. **Custom Pages** (WebPage)

For custom pages, you can manually specify the type:

```html
<script>
  // After including structuredData.js
  document.addEventListener("DOMContentLoaded", function () {
    const generator = new StructuredDataGenerator();
    generator.insertStructuredData("custom", {
      name: "Your Custom Page Title",
      description: "Your custom page description",
      url: "https://www.adarashagaihre.com.np/your-custom-page/",
    });
  });
</script>
```

## 🔧 Manual Override (Advanced)

If you need to override the automatic detection:

```html
<script>
  document.addEventListener("DOMContentLoaded", function () {
    const generator = new StructuredDataGenerator();

    // Force a specific page type
    generator.insertStructuredData("about"); // or 'portfolio', 'contact', etc.

    // Or with custom data
    generator.insertStructuredData("portfolio", {
      name: "My Special Portfolio Section",
      description: "Custom description for this section",
    });
  });
</script>
```

## ✅ Implementation Checklist

### For Each Page:

- [ ] Remove old hardcoded `<script type="application/ld+json">` blocks
- [ ] Add `<script src="path/to/structuredData.js"></script>` before `</body>`
- [ ] Test the page to ensure structured data is inserted
- [ ] Validate with [Google's Rich Results Test](https://search.google.com/test/rich-results)

### Files Updated:

- [ ] `/index.html` ✅
- [ ] `/pages/about/index.html` ✅
- [ ] `/pages/portfolio/index.html` (needs update)
- [ ] `/pages/contact/index.html` (needs update)

## 🔍 Testing

1. Open your page in browser
2. Open DevTools → Console
3. Look for: `✅ Structured Data inserted: [page-type]`
4. Check DevTools → Elements → Head for the JSON-LD script
5. Test with Google Rich Results Test

## 🎨 Benefits

- ✅ **DRY Principle** - No code duplication
- ✅ **Consistency** - Same person data across all pages
- ✅ **Maintainability** - Update once, applies everywhere
- ✅ **SEO Optimized** - Proper Schema.org markup
- ✅ **Auto-Detection** - Smart page type detection
- ✅ **Flexible** - Easy to customize for specific pages

## 🚨 Important Notes

- Remove all old hardcoded JSON-LD scripts to avoid duplicates
- Test each page after implementation
- The script must be loaded after DOM is ready
- Check console for any errors during development

---

**Author:** Adarasha Gaihre  
**Updated:** June 27, 2025
