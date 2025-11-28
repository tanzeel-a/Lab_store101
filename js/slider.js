/* ============================================ */
/* SLIDER.JS - Automatic Image Slider          */
/* ============================================ */
/* 
 * This script creates a circular auto-scrolling
 * image slider with smooth transitions.
 * 
 * How it works:
 * 1. Waits for DOM to load
 * 2. Selects slider container and images
 * 3. Every 3.5 seconds, slides to next image
 * 4. Creates seamless circular loop effect
 */

document.addEventListener('DOMContentLoaded', () => {
    // Get slider elements
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');

    // Initialize variables
    let index = 0;
    const totalSlides = images.length;

    // Auto-slide interval (every 3.5 seconds)
    setInterval(() => {
        // Move to next slide
        index++;

        // Apply smooth transition
        slides.style.transition = 'transform 1s ease-in-out';
        slides.style.transform = `translateX(-${index * 100}%)`;

        // Reset to first image for circular loop
        // When reaching the clone (last image), jump back to start
        if (index === totalSlides - 1) {
            setTimeout(() => {
                // Remove transition for instant jump
                slides.style.transition = 'none';
                index = 0;
                slides.style.transform = `translateX(0)`;
            }, 1000); // Wait for transition to complete
        }
    }, 3500); // 3.5 second interval
});
