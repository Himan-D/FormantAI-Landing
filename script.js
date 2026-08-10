document.addEventListener("DOMContentLoaded", () => {
    // Parallax effect on grid background
    document.addEventListener("mousemove", (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        const grid = document.querySelector('.grid-bg');
        grid.style.transform = `translate(-${x * 20}px, -${y * 20}px)`;
    });

    // Terminal typing effect simulation
    const terminalText = document.getElementById("terminal-text");
    const originalHTML = terminalText.innerHTML;
    terminalText.innerHTML = "";
    
    let isTag = false;
    let text = originalHTML;
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            terminalText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, Math.random() * 20 + 10);
        }
    }

    // Start typing after a short delay
    setTimeout(typeWriter, 500);
});
