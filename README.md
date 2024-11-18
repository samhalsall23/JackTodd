# Jack Todd Designs Project

[jacktodd.au](jacktodd.au)

## Features

This project is a portfolio website for a graphic designer to showcase their work. Built using React and Next.js, it features a homepage with a scrollable list of 12 projects, individual project pages with detailed information, and a contact form integrated with a REST API to handle email requests. This project allowed me to explore front-end web development from the ground up, while incorporating responsive design and optimized performance features.

## Features

- **Four Responsive Pages**:

  - Includes a homepage, project-specific pages, about me page, and a contact form, all designed to adapt seamlessly to various screen sizes.

- **Showcase of 12 Projects**:

  - A visually engaging homepage featuring 12 graphic design projects, with layouts optimized for both desktop and mobile views.

- **Detailed Project Pages**:

  - Each project has its own dedicated page, providing high-quality visuals and relevant information to highlight the designer's work.

- **Optimized Image Loading**:

  - Utilized Next.js images and features such as lazy loading, blur placeholders, and responsive sizes to enhance performance and reduce loading times.

- **"Contact Me" Form with REST API**:

  - A functional form integrated with a REST API to send email requests directly to the designer.

- **Advanced CSS Effects**:
  - Implemented hover animations, smooth transitions, and custom styling to create a polished and professional user experience.

## Technologies Used

- **Frontend:** React, Next.js
- **Styling:** Sass
- **Image Optimization:** Next.js Image Component

## Challenges and Lessons Learned

### 1. Image Optimization

- **Challenge:** Managing high-resolution images without compromising performance.
- **Solution:** Learned fundamentals of web image loading, including lazy loading, responsive sizes, and using Next.js features like `Image`. Implemented media queries for responsive image sizes -
  `sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1920px) 33vw, 25vw"`
- **Lesson Learned:** Understanding the underlying problem is crucial before jumping into solutions. Basics like lazy loading, image dimensions and performance metrics the lighthouse tab helped me significantly to find a solution.

### 2. Project Architecture

- **Challenge:** Structuring the project for maintainability and scalability. Initially, poor structuring made the final stages of development time-consuming.
- **Solution:** Simplified `page.tsx` files and moved most logic into the `folio` folder. This separation helped centralize state management.
- **Lesson Learned:** Spend extra time planning project architecture upfront to save time and extra work later.

### 3. Carousel Implementation

- **Challenge:** Finding and customizing a React carousel library to fit the design and functionality requirements.
- **Solution:** Experimented with various libraries before choosing `react-multi-carousel`. Resolved layout issues and contributed to community discussions via GitHub.
- **Lesson Learned:** Libraries often have limitations. Community forums and issues can be invaluable resources for troubleshooting. Engaging with the developer community is both rewarding and educational.

## Future Improvements

- **Dynamic Project Management:** Integrate a back-end to allow clients to update project data independently.
- **Advanced SEO Features:** Add dynamic metadata, a sitemap, and improved Core Web Vitals scores to boost search engine performance.
- **Enhanced Accessibility:** Further align with WCAG standards, including ARIA attributes and optimized keyboard navigation.
- **Expanded User Options:** Introduce a light/dark mode toggle for improved user experience and accessibility.
