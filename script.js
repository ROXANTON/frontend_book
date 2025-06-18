document.addEventListener('DOMContentLoaded', () => {
    // --------------------------------------------------------
    // Homepage Book Block Hover and Click Functionality
    // --------------------------------------------------------
    const bookSubBlocks = document.querySelectorAll('.book-sub-block');

    bookSubBlocks.forEach(block => {
        const primaryDesc = block.dataset.primaryDesc;
        const fullDesc = block.dataset.fullDesc;
        const bookTitle = block.dataset.bookTitle; // Get book title for redirection

        let hoverTimeout;
        let isHovering = false;

        // Create the full description hover element
        const fullDescriptionHover = document.createElement('div');
        fullDescriptionHover.classList.add('full-description-hover');
        fullDescriptionHover.innerHTML = `<p>${fullDesc.substring(0, fullDesc.indexOf('Read more...'))}</p><span class="read-more">Read more...</span>`;
        block.appendChild(fullDescriptionHover);

        // Mouse Enter (Hover)
        block.addEventListener('mouseenter', () => {
            isHovering = true;
            // Delay showing the full description slightly
            hoverTimeout = setTimeout(() => {
                if (isHovering) {
                    block.querySelector('p').style.opacity = '0'; // Hide primary description
                    fullDescriptionHover.style.opacity = '1';
                    fullDescriptionHover.style.visibility = 'visible';
                    fullDescriptionHover.style.transform = 'scale(1)';
                }
            }, 200); // Short delay
        });

        // Mouse Leave (Hover out)
        block.addEventListener('mouseleave', () => {
            isHovering = false;
            clearTimeout(hoverTimeout); // Clear timeout if mouse leaves before it triggers
            block.querySelector('p').style.opacity = '1'; // Show primary description
            fullDescriptionHover.style.opacity = '0';
            fullDescriptionHover.style.visibility = 'hidden';
            fullDescriptionHover.style.transform = 'scale(0.9)';
        });

        // Click to redirect to book detail page
        block.addEventListener('click', () => {
            // In a real application, you'd fetch more data from the backend
            // For this example, we'll pass some data via URL parameters
            const author = "Unknown Author"; // Placeholder, would come from database
            const genre = "Various"; // Placeholder, would come from database
            const review = "This is a placeholder review for " + bookTitle + ". It is an amazing book that captivates you from the very first page. Highly recommended!"; // Placeholder
            const ebookLink = "https://example.com/ebook-" + bookTitle.replace(/\s/g, '').toLowerCase(); // Placeholder

            window.location.href = `book-detail.html?title=${encodeURIComponent(bookTitle)}&primaryDesc=${encodeURIComponent(primaryDesc)}&author=${encodeURIComponent(author)}&genre=${encodeURIComponent(genre)}&review=${encodeURIComponent(review)}&ebookLink=${encodeURIComponent(ebookLink)}`;
        });
    });

    // --------------------------------------------------------
    // Search Button Functionality (Basic)
    // --------------------------------------------------------
    const searchButton = document.getElementById('search-button');
    const searchBox = document.getElementById('search-box');

    searchButton.addEventListener('click', () => {
        const searchTerm = searchBox.value.trim();
        if (searchTerm) {
            alert(`Searching for: "${searchTerm}"`);
            // In a real application, this would trigger an AJAX call to your backend
            // and display search results dynamically on the page or redirect to a search results page.
        } else {
            alert('Please enter a book name to search.');
        }
    });

    // Allow pressing Enter in search box
    searchBox.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            searchButton.click();
        }
    });

    // --------------------------------------------------------
    // Dynamic content for Special Picks (Conceptual)
    // --------------------------------------------------------
    // In a real application, when 'Special Picks' is clicked,
    // the backend would return a random book from the database.
    // The `special-pick.html` page has static content for demonstration.
    // If we were using more advanced JS (e.g., React), we'd fetch data here.
});
