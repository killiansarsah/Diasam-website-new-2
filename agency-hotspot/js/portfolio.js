/**
 * DiaSam Portfolio / Our Works Section Logic
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // --- Configuration & State ---
    
    // Image Data - Using placeholder URLs since local files are missing
    // In production, replace src with: 'pic/Daytime.jpg', etc.
    const imageSets = [
        // Set 1
        [
            { src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80', alt: 'Daytime Project 1', id: 0 },
            { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', alt: 'Daytime Project 2', id: 1 },
            { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', alt: 'Daytime Project 3', id: 2 },
            { src: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&q=80', alt: 'Daytime Project 4', id: 3 },
            { src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80', alt: 'Daytime Project 5', id: 4 },
            { src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80', alt: 'Daytime Project 6', id: 5 }
        ],
        // Set 2
        [
            { src: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80', alt: 'Daytime Project 7', id: 6 },
            { src: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&q=80', alt: 'Daytime Project 8', id: 7 },
            { src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80', alt: 'Daytime Project 9', id: 8 },
            { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', alt: 'Daytime Project 10', id: 9 },
            { src: 'https://images.unsplash.com/photo-1470219556762-1771e7c9458d?w=800&q=80', alt: 'Night Project 1', id: 10 },
            { src: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&q=80', alt: 'Night Project 2', id: 11 }
        ],
        // Set 3
        [
            { src: 'https://images.unsplash.com/photo-1516245834210-c4c14278733f?w=800&q=80', alt: 'Night Project 3', id: 12 },
            { src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&q=80', alt: 'Night Project 4', id: 13 },
            { src: 'https://images.unsplash.com/photo-1481487163916-2ea84e55e376?w=800&q=80', alt: 'Night Project 5', id: 14 },
            { src: 'https://images.unsplash.com/photo-1461301214746-1e790926d323?w=800&q=80', alt: 'Night Project 6', id: 15 },
            { src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80', alt: 'Night Project 7', id: 16 },
            { src: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&q=80', alt: 'Night Project 8', id: 17 }
        ],
        // Set 4 (Repeats as per instructions for 19 images total in sets of 6)
        [
            { src: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&q=80', alt: 'Night Project 9', id: 18 },
            { src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80', alt: 'Daytime Project 1 (Rep)', id: 0 },
            { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', alt: 'Daytime Project 2 (Rep)', id: 1 },
            { src: 'https://images.unsplash.com/photo-1470219556762-1771e7c9458d?w=800&q=80', alt: 'Night Project 1 (Rep)', id: 10 },
            { src: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&q=80', alt: 'Night Project 2 (Rep)', id: 11 },
            { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', alt: 'Daytime Project 3 (Rep)', id: 2 }
        ]
    ];

    // Flatten all unique images for modal navigation (Total 19 unique images)
    // We filter based on unique IDs to avoid duplicate navigation in modal
    // Actually, distinct array of 19 images
    const allUniqueImages = [
        // Daytime 10
        { src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=90', id: 0 },
        { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=90', id: 1 },
        { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=90', id: 2 },
        { src: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=1600&q=90', id: 3 },
        { src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&q=90', id: 4 },
        { src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&q=90', id: 5 },
        { src: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1600&q=90', id: 6 },
        { src: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=1600&q=90', id: 7 },
        { src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=90', id: 8 },
        { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=90', id: 9 },
        // Night 9
        { src: 'https://images.unsplash.com/photo-1470219556762-1771e7c9458d?w=1600&q=90', id: 10 },
        { src: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=1600&q=90', id: 11 },
        { src: 'https://images.unsplash.com/photo-1516245834210-c4c14278733f?w=1600&q=90', id: 12 },
        { src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=1600&q=90', id: 13 },
        { src: 'https://images.unsplash.com/photo-1481487163916-2ea84e55e376?w=1600&q=90', id: 14 },
        { src: 'https://images.unsplash.com/photo-1461301214746-1e790926d323?w=1600&q=90', id: 15 },
        { src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=90', id: 16 },
        { src: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1600&q=90', id: 17 },
        { src: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1600&q=90', id: 18 }
    ];

    let currentSet = 0;
    let isTransitioning = false;
    let modalInfo = { isOpen: false, currentIndex: 0 };

    // DOM Elements
    const gridContainer = document.querySelector('.works-grid');
    const dots = document.querySelectorAll('.nav-dots .dot');
    const prevSetBtn = document.getElementById('prev-set-btn');
    const nextSetBtn = document.getElementById('next-set-btn');
    const modalOverlay = document.getElementById('portfolio-modal');
    const modalImage = document.getElementById('modal-image');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalPrevBtn = document.getElementById('modal-prev-btn');
    const modalNextBtn = document.getElementById('modal-next-btn');


    // --- Functions ---

    function renderGrid(setIndex) {
        if (!gridContainer) return;
        
        const images = imageSets[setIndex];
        gridContainer.innerHTML = ''; // Clear current

        images.forEach(img => {
            const item = document.createElement('div');
            item.className = 'grid-item';
            item.onclick = () => openModal(img.id);
            
            const imageEl = document.createElement('img');
            imageEl.src = img.src;
            imageEl.alt = img.alt;
            
            item.appendChild(imageEl);
            gridContainer.appendChild(item);
        });

        // Update active dot
        dots.forEach((dot, idx) => {
            if (idx === setIndex) dot.classList.add('active');
            else dot.classList.remove('active');
        });
    }

    function changeImageSet(direction) {
        if (isTransitioning) return;
        isTransitioning = true;

        // Fade out
        gridContainer.style.opacity = '0.5';

        setTimeout(() => {
            let nextSet = currentSet + direction;
            if (nextSet >= 4) nextSet = 0;
            if (nextSet < 0) nextSet = 3;
            
            currentSet = nextSet;
            renderGrid(currentSet);
            
            // Fade in
            gridContainer.style.opacity = '1';
            isTransitioning = false;
        }, 300);
    }

    function goToSet(index) {
        if (index === currentSet || isTransitioning) return;
        isTransitioning = true;

        gridContainer.style.opacity = '0.5';

        setTimeout(() => {
            currentSet = index;
            renderGrid(currentSet);
            gridContainer.style.opacity = '1';
            isTransitioning = false;
        }, 300);
    }

    // Modal Logic
    function openModal(imageId) {
        // Find index in unique array
        const foundIndex = allUniqueImages.findIndex(img => img.id === imageId);
        if (foundIndex === -1) return;

        modalInfo.currentIndex = foundIndex;
        modalInfo.isOpen = true;
        
        updateModalImage();
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Add keyboard listener
        window.addEventListener('keydown', handleKeyDown);
    }

    function closeModal() {
        modalInfo.isOpen = false;
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
    }

    function updateModalImage() {
        if (!modalImage) return;
        const imgData = allUniqueImages[modalInfo.currentIndex];
        modalImage.src = imgData.src;
    }

    function navigateModal(direction) {
        let newIndex = modalInfo.currentIndex + direction;
        if (newIndex < 0) newIndex = allUniqueImages.length - 1;
        if (newIndex >= allUniqueImages.length) newIndex = 0;
        
        modalInfo.currentIndex = newIndex;
        updateModalImage();
    }

    function handleKeyDown(e) {
        if (!modalInfo.isOpen) return;
        
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') navigateModal(-1);
        if (e.key === 'ArrowRight') navigateModal(1);
    }

    // --- Init & Event Listeners ---

    // Initial render
    // Use setTimeout to ensure DOM is fully ready if script isn't deferred (safe guard)
    setTimeout(() => renderGrid(0), 100);

    // Set Navigation Listeners
    if(prevSetBtn) prevSetBtn.addEventListener('click', () => changeImageSet(-1));
    if(nextSetBtn) nextSetBtn.addEventListener('click', () => changeImageSet(1));

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => goToSet(idx));
    });

    // Modal Listeners
    if(modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if(modalOverlay) modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
    if(modalPrevBtn) modalPrevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateModal(-1);
    });
    if(modalNextBtn) modalNextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateModal(1);
    });

});
