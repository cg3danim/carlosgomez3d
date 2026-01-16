# Portfolio Website - Modular Structure

## 📁 Project Structure

```
portfolio-modular/
├── index.html                 # Main homepage
├── work.html                  # Work/Portfolio page
├── contact.html               # Contact page with form & FAQ
├── css/                       # All CSS modules
│   ├── styles.css            # Base styles & CSS variables
│   ├── navigation.css        # Navigation bar styles
│   ├── buttons.css           # CTA button component (UNIFIED)
│   ├── social-icons.css      # Social media icons component
│   ├── hero.css              # Hero section styles
│   ├── about.css             # About section styles
│   ├── stats.css             # Stats section styles
│   ├── work.css              # Work/portfolio section styles
│   ├── expertise.css         # Expertise section styles
│   ├── contact.css           # Contact section styles
│   ├── contact-form.css      # Contact form styles (NEW)
│   ├── faq.css               # FAQ section styles (NEW)
│   └── footer.css            # Footer styles
├── js/                        # All JavaScript modules
│   ├── main.js               # Main initialization file
│   ├── scroll.js             # Scroll animations & smooth scrolling
│   ├── stats.js              # Stats counter animations
│   ├── expertise.js          # Expertise toggle functionality
│   ├── faq.js                # FAQ toggle functionality (NEW)
│   └── about.js              # About section scroll reveal
└── components/                # Reusable HTML components
    ├── navigation.html       # Navigation template
    ├── social-icons.html     # Social icons template
    ├── cta-button.html       # CTA button template
    └── footer.html           # Footer template
```

## 📄 Pages Overview

### index.html - Homepage
- Hero section with title and social icons
- About section with scroll reveal animation
- Stats counter section
- Selected work grid (preview)
- Expertise accordion
- Contact CTA section
- Footer

### work.html - Portfolio Page
- Full portfolio grid with 6 projects
- Hover effects on work items
- Contact CTA section at bottom
- Footer

### contact.html - Contact Page
- **Contact form section**
  - Large "Get in Touch" heading
  - Social media icons
  - Contact info (email, phone)
  - Form with Name, Email, Subject, Message fields
  - "Send Message" button
- **FAQ section**
  - Large "FAQ" title (sticky on desktop)
  - 5 expandable questions
  - Toggle functionality
- Contact CTA section at bottom
- Footer

## 🎯 Key Improvements

### 1. **Fixed Button Inconsistency**
- **Problem**: Top "Get in touch" button used `<span class="arrow"></span>` while bottom one used `→` text
- **Solution**: Created unified `buttons.css` with consistent arrow styling
- **Result**: All buttons now use the same arrow component and animations

### 2. **Modular CSS**
- Separated styles into logical modules
- Easy to find and edit specific sections
- Can add new sections without touching existing code

### 3. **Modular JavaScript**
- Each feature has its own JS file
- Easy to debug and maintain
- Can be reused across pages

### 4. **Reusable Components**
The `/components/` folder contains HTML templates for:
- Navigation bar
- Social icons (used in hero AND contact sections)
- CTA button (can be used anywhere)
- Footer

## 🚀 How to Add New Pages

### Adding a New Sub-Page (e.g., "Services" page):

1. **Create the HTML file** (e.g., `services.html`)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Services - Carlos Gomez</title>
    
    <!-- Include CSS modules you need -->
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/navigation.css">
    <link rel="stylesheet" href="css/buttons.css">
    <link rel="stylesheet" href="css/footer.css">
    <!-- Add any custom CSS for this page -->
</head>
<body>
    <!-- Copy navigation from components/navigation.html -->
    <nav>...</nav>
    
    <!-- Your custom content here -->
    <section class="services-section">
        <h1>My Services</h1>
        <!-- Content -->
    </section>
    
    <!-- Copy footer from components/footer.html -->
    <footer>...</footer>
    
    <!-- Include JS modules -->
    <script type="module" src="js/main.js"></script>
</body>
</html>
```

2. **If you need custom styles**, create `css/services.css` and include it
3. **If you need custom JavaScript**, create `js/services.js` and include it

### Adding a New Section to Existing Page:

1. **Create CSS file** for the section (e.g., `css/testimonials.css`)
2. **Add section HTML** to `index.html`
3. **Include CSS** in the `<head>` of `index.html`
4. **If needed**, add JavaScript in `js/testimonials.js`

## 📝 Using Components

### CTA Button
Copy from `/components/cta-button.html` or use directly in HTML:
```html
<a href="#contact" class="cta-button">
    <span class="button-text">
        <span class="text-original">Get in touch</span>
        <span class="text-hover">Get in touch</span>
    </span>
    <span class="arrow-circle">
        <span class="arrow"></span>
    </span>
</a>
```

### Social Icons
Copy from `/components/social-icons.html` - includes all 4 social icons with hover animations

### Navigation
Copy from `/components/navigation.html` - complete navigation with all links

## 🔧 Customization

### Changing Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
    --bg-color: #e8e8e8;
    --text-color: #000000;
    --accent-color: #1a1a1a;
    --gray-text: #666666;
}
```

### Changing Animations
- Scroll animations: `js/scroll.js`
- Button animations: `css/buttons.css`
- Stats counter: `js/stats.js`
- About reveal: `js/about.js`

## ✨ All Animations Preserved

✅ Navigation hover effects (slide up/down)
✅ CTA button hover with background expansion
✅ Social icons hover animations
✅ Work items hover effects
✅ Stats counter animation
✅ About heading word-by-word reveal on scroll
✅ Fade-in on scroll for sections
✅ Expertise accordion toggle
✅ Smooth scrolling
✅ Back to top functionality
✅ Scroll progress bar

## 🎨 No Redundancy

- Single button component used throughout
- Single social icons component reused
- Unified arrow styling
- No duplicate CSS
- No duplicate JavaScript functions

## 📱 Responsive Design

All styles include mobile breakpoints at 768px. Responsive styles are in each CSS module.

## 🔄 Easy Maintenance

- Need to change button style? Edit `css/buttons.css` once
- Need to update navigation? Edit `components/navigation.html` then update pages
- Need to fix animation? Find the specific JS module
- Want to change colors? Edit CSS variables in one place

---

**Now you can easily add new pages and sections without touching the working code!**
