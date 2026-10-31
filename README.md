# Pradeepkumar Kothakota - Professional Resume Website

A modern, responsive portfolio website showcasing professional experience, skills, and certifications as a Senior Data Engineer.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Dark Mode Support**: Automatically adapts to system preferences
- **Easy Navigation**: Sticky navigation bar with smooth scrolling
- **Optimized Performance**: Fast loading, minimal dependencies

## Sections

1. **About** - Professional title, years of experience, and key statistics
2. **Skills** - Organized by category (Cloud Platforms, ETL, Languages, Databases, etc.)
3. **Experience** - Detailed timeline of professional roles and achievements
4. **Certifications** - Cloud and technical certifications
5. **Education** - Academic background
6. **Contact** - Email, phone, and LinkedIn information

## Technologies Used

- HTML5
- CSS3 (with CSS variables for theming)
- Vanilla JavaScript (no frameworks)
- Font Awesome Icons
- Responsive Grid Layout

## Local Testing

To view the website locally:

1. Open `index.html` in your web browser
2. Or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```
3. Navigate to `http://localhost:8000` in your browser

## Deployment to GitHub Pages

### Method 1: Using GitHub's Built-in Pages

1. **Create a GitHub repository** (if not already created)
   - Go to github.com and create a new public repository named `username.github.io`
   - Replace `username` with your actual GitHub username

2. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit: Add professional resume website"
   git push origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Scroll to "GitHub Pages" section
   - Select "main" as the source branch
   - GitHub will automatically publish your site at `https://username.github.io`

### Method 2: Using a Custom Domain

If you want to use a custom domain:

1. Add a `CNAME` file to your repository with your domain name:
   ```
   yourdomain.com
   ```

2. Configure your domain's DNS settings to point to GitHub Pages
   - A records: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - CNAME record (for www): username.github.io

## Customization

### Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #004499;
    --accent-color: #ff6b35;
    /* ... other variables ... */
}
```

### Content

Edit `index.html` to update:
- Personal information
- Skills and expertise
- Work experience and projects
- Education and certifications
- Contact details

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

- Minimal CSS and JavaScript
- Optimized animations using CSS transforms
- Lazy loading for images (if added)
- No external dependencies (except Font Awesome)

## License

This project is open source and available under the MIT License.

## Contact

**Email**: pradeep.kothakota@gmail.com  
**Phone**: +1 (940) 315-0446  
**LinkedIn**: https://www.linkedin.com/in/pradeepkothakota/

---

Created with ❤️ by Pradeepkumar Kothakota
