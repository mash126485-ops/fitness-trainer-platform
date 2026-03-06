document.addEventListener('DOMContentLoaded', () => {
    
    // 1. SELECT ELEMENTS
    const heroContent = document.querySelector('.hero-content');
    const commitments = document.querySelectorAll('.c-item');
    const applyButtons = document.querySelectorAll('.apply-btn, .glass-button');

    // 2. ENTRANCE ANIMATIONS (EDGE-TO-EDGE VIBE)
    // Setup initial state for the hero text
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateX(-80px)';
    heroContent.style.transition = 'all 1.4s cubic-bezier(0.16, 1, 0.3, 1)';

    // Setup initial state for bottom commitments
    commitments.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `all 0.8s ease-out ${0.6 + index * 0.15}s`;
    });

    // Trigger animations after a split second
    setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateX(0)';
        
        commitments.forEach(item => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        });
    }, 150);

    // 3. DIRECT NAVIGATION (REPLACED POP-UP)
    applyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Check if the link is to the intake page
            const targetPath = button.getAttribute('href');
            
            if (targetPath === 'intake.html') {
                e.preventDefault();
                
                // Professional Fade-Out Transition
                document.body.style.opacity = '0';
                document.body.style.transition = 'opacity 0.4s ease-in-out';
                
                // Move to the next page after the fade finishes
                setTimeout(() => {
                    window.location.href = targetPath;
                }, 400);
            }
        });
    });

    // 4. MICRO-INTERACTIONS FOR COMMITMENTS
    commitments.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const icon = item.querySelector('.c-icon');
            if (icon) {
                icon.style.filter = 'drop-shadow(0 0 8px #00ff88)';
                icon.style.transform = 'scale(1.1)';
                icon.style.transition = '0.3s ease';
            }
        });

        item.addEventListener('mouseleave', () => {
            const icon = item.querySelector('.c-icon');
            if (icon) {
                icon.style.filter = 'none';
                icon.style.transform = 'scale(1)';
            }
        });
    });
});
            
