// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Reveal Animation on Load
    const heroContent = document.querySelector('.hero-content');
    const commitmentBar = document.querySelector('.bottom-commitment-bar');
    
    // Set initial styles for animation
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateX(-50px)';
    heroContent.style.transition = 'all 1s ease-out';
    
    commitmentBar.style.opacity = '0';
    commitmentBar.style.transform = 'translateY(20px)';
    commitmentBar.style.transition = 'all 1s ease-out 0.5s'; // Delayed start

    // Trigger the animation
    setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateX(0)';
        commitmentBar.style.opacity = '1';
        commitmentBar.style.transform = 'translateY(0)';
    }, 100);

    // 2. Interactive "Apply Now" Logic
    const applyButtons = document.querySelectorAll('.apply-btn, .glass-button');
    
    applyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            // This pulls up a native alert for now, but can be linked to your Intake MD file
            const confirmEntry = confirm("Ready to bridge the gap? We are now opening the Client Intake Portal.");
            if (confirmEntry) {
                // Change 'intake.md' to the actual URL of your published intake page
                window.location.href = 'intake.html'; 
            }
        });
    });

    // 3. Simple Hover Effect for Commitments
    const items = document.querySelectorAll('.c-item');
    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.color = '#00ff88';
            item.style.transition = '0.3s';
        });
        item.addEventListener('mouseleave', () => {
            item.style.color = '#fff';
        });
    });
});
      
