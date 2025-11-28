# 🧪 Shippy - Lab Equipment E-Commerce Website

A modern, responsive e-commerce website for laboratory equipment and supplies, built with HTML, CSS, and vanilla JavaScript.

![Project Banner](img/logo2.png)

## 📋 Project Overview

Shippy is a clean and user-friendly online store focused on selling laboratory equipment, reagents, and kits. The website features a modern design with smooth animations, an intuitive product browsing experience, and a professional layout suitable for scientific supply businesses.

## ✨ Features

### 🎨 Design & UI
- **Modern Color Scheme**: Black header/footer with green accents and a subtle pink background
- **Responsive Layout**: Works seamlessly across different screen sizes
- **Smooth Animations**: Hover effects on cards, buttons, and navigation elements
- **Professional Typography**: Uses Google's Saira font family for a clean, modern look

### 🛍️ Product Showcase
- **Three Product Categories**:
  - Lab Essentials & Kits
  - Lab Reagents
  - Lab Equipment
- **Horizontal Scrolling**: Product cards scroll horizontally for easy browsing
- **Product Cards**: Each featuring:
  - Product image
  - Product name
  - Discount percentage (highlighted in red)
  - Green "Buy now" button
- **Hover Effects**: Cards scale up with shadow effect on hover

### 🔍 Navigation & Search
- **Clean Navigation Bar**: Home, About, and Login/Signup links
- **Integrated Search Bar**: Styled with green accent colors
- **Sticky Header**: Easy access to navigation from anywhere on the page

### 📱 User Experience
- **Smooth Scrolling**: Hidden scrollbars for cleaner look
- **Interactive Elements**: All buttons and links have hover states
- **Category Separators**: Clear visual separation between product categories

## 🛠️ Technologies Used

- **HTML5**: Semantic markup for better accessibility
- **CSS3**: Modern styling with:
  - Flexbox for layouts
  - CSS Variables for theme colors
  - Transitions and transforms for animations
  - Custom scrollbar styling
- **JavaScript (ES6)**: For interactive slider functionality
- **Google Fonts**: Saira font family

## 📁 Project Structure

```
Flipkart Clone/
├── index.html              # Main HTML file
├── README.md              # Project documentation
├── css/
│   ├── style.css          # Main stylesheet
│   └── utils.css          # Utility classes
├── js/
│   └── slider.js          # Slider functionality
└── img/                   # Image assets
    ├── logo2.png          # Site logo
    ├── package.png        # Banner/slider images
    ├── book.png           # Product images
    └── ...                # Other product images
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for avoiding CORS issues)

### Installation

1. **Clone or Download the Repository**
   ```bash
   git clone <repository-url>
   cd "Flipkart Clone"
   ```

2. **Open the Project**
   - Simply open `index.html` in your web browser, or
   - Use a local server (recommended):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx http-server
     ```

3. **View the Website**
   - Navigate to `http://localhost:8000` (or open `index.html` directly)

## 🎨 Customization Guide

### Changing Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --main-bg-color: black;      /* Header/footer background */
    --accent-color: #4CAF50;     /* Green accent color */
    --pink-bg: #fff0f5;          /* Page background */
}
```

### Adding Products
Add new product cards in `index.html`:
```html
<div class="carditems">
    <img class="img2" src="img/your-image.png" alt="Product Name">
    <div class="lines">
        <p class="textcenter linesformat my-1">Product Name</p>
        <p class="textcenter linesformat my-1">XX% off</p>
        <p class="textcenter linesformat my-1">Buy now</p>
    </div>
</div>
```

### Modifying Layout
- **Card Width**: Adjust `.carditems` width in `style.css`
- **Image Size**: Modify `.img2` dimensions
- **Spacing**: Update padding/margin values in respective classes

## 📝 Code Organization

All files are well-commented for easy understanding:
- **HTML**: Semantic structure with section comments
- **CSS**: Organized by sections (Header, Cards, Footer, etc.)
- **JavaScript**: Step-by-step comments explaining functionality

## 🌟 Key CSS Classes

| Class | Purpose |
|-------|---------|
| `.carditems` | Individual product card container |
| `.carditemspack` | Horizontal scrolling container for cards |
| `.my-2` | Category heading styling (black bg, green text) |
| `.lines` | Product information container |
| `.btn` | Green styled buttons |
| `.footer-container` | Footer layout wrapper |

## 🔧 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 📄 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

**Tanzeel Ahmad**
- Email: ahmadtanzeel303@gmail.com
- Location: Mumbai, India

## 🙏 Acknowledgments

- Inspired by Flipkart's e-commerce design
- Font: Google Fonts (Saira)
- Built with ❤️ for Science

## 📞 Support

For questions or support, please contact: ahmadtanzeel303@gmail.com

---

**Made for the ❤️ of Science || Copyright © Shippy.com**
