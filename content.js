// Example content.js
document.addEventListener("DOMContentLoaded", function() {
    // Replace or modify elements to match the old interface
    const newHeader = document.querySelector('.new-header');
    if (newHeader) {
        newHeader.remove();
        const classicHeader = document.createElement('div');
        classicHeader.innerHTML = '<div class="classic-header">Classic Header</div>';
        document.body.prepend(classicHeader);
    }
});
