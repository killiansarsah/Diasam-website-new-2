/**
 * DiaSam Portfolio / Our Works Section Logic
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // --- Configuration & State ---
    
    // Image Data
    const imageSets = [
        // Set 1 (6 Daytime)
        [
            { src: 'agency-hotspot/images/portfolio/Daytime1.jpg', alt: 'Daytime 1', id: 0 },
            { src: 'agency-hotspot/images/portfolio/Daytime2.jpg', alt: 'Daytime 2', id: 1 },
            { src: 'agency-hotspot/images/portfolio/Daytime3.jpg', alt: 'Daytime 3', id: 2 },
            { src: 'agency-hotspot/images/portfolio/Daytime4.jpg', alt: 'Daytime 4', id: 3 },
            { src: 'agency-hotspot/images/portfolio/Daytime5.jpg', alt: 'Daytime 5', id: 4 },
            { src: 'agency-hotspot/images/portfolio/Daytime6.jpg', alt: 'Daytime 6', id: 5 }
        ],
        // Set 2 (4 Daytime, 2 Nighttime)
        [
            { src: 'agency-hotspot/images/portfolio/Daytime7.jpg', alt: 'Daytime 7', id: 6 },
            { src: 'agency-hotspot/images/portfolio/Daytime8.jpg', alt: 'Daytime 8', id: 7 },
            { src: 'agency-hotspot/images/portfolio/Daytime9.jpg', alt: 'Daytime 9', id: 8 },
            { src: 'agency-hotspot/images/portfolio/Daytime10.jpg', alt: 'Daytime 10', id: 9 },
            { src: 'agency-hotspot/images/portfolio/Night1.jpg', alt: 'Night 1', id: 10 },
            { src: 'agency-hotspot/images/portfolio/Night2.jpg', alt: 'Night 2', id: 11 }
        ],
        // Set 3 (6 Nighttime)
        [
            { src: 'agency-hotspot/images/portfolio/Night3.jpg', alt: 'Night 3', id: 12 },
            { src: 'agency-hotspot/images/portfolio/Night4.jpg', alt: 'Night 4', id: 13 },
            { src: 'agency-hotspot/images/portfolio/Night5.jpg', alt: 'Night 5', id: 14 },
            { src: 'agency-hotspot/images/portfolio/Night6.jpg', alt: 'Night 6', id: 15 },
            { src: 'agency-hotspot/images/portfolio/Night7.jpg', alt: 'Night 7', id: 16 },
            { src: 'agency-hotspot/images/portfolio/Night8.jpg', alt: 'Night 8', id: 17 }
        ],
        // Set 4 (Nighttime 9 + 5 fillers to complete 3x2 grid)
        [
            { src: 'agency-hotspot/images/portfolio/Night9.jpg', alt: 'Night 9', id: 18 },
            { src: 'agency-hotspot/images/portfolio/Night1.jpg', alt: 'Project Highlight', id: 10 },
            { src: 'agency-hotspot/images/portfolio/Night2.jpg', alt: 'Project Highlight', id: 11 },
            { src: 'agency-hotspot/images/portfolio/Night3.jpg', alt: 'Project Highlight', id: 12 },
            { src: 'agency-hotspot/images/portfolio/Night4.jpg', alt: 'Project Highlight', id: 13 },
            { src: 'agency-hotspot/images/portfolio/Night5.jpg', alt: 'Project Highlight', id: 14 }
        ]
    ];

    // Flatten all unique images for modal navigation
    const allUniqueImages = [
        { src: 'agency-hotspot/images/portfolio/Daytime1.jpg', id: 0 },
        { src: 'agency-hotspot/images/portfolio/Daytime2.jpg', id: 1 },
        { src: 'agency-hotspot/images/portfolio/Daytime3.jpg', id: 2 },
        { src: 'agency-hotspot/images/portfolio/Daytime4.jpg', id: 3 },
        { src: 'agency-hotspot/images/portfolio/Daytime5.jpg', id: 4 },
        { src: 'agency-hotspot/images/portfolio/Daytime6.jpg', id: 5 },
        { src: 'agency-hotspot/images/portfolio/Daytime7.jpg', id: 6 },
        { src: 'agency-hotspot/images/portfolio/Daytime8.jpg', id: 7 },
        { src: 'agency-hotspot/images/portfolio/Daytime9.jpg', id: 8 },
        { src: 'agency-hotspot/images/portfolio/Daytime10.jpg', id: 9 },
        { src: 'agency-hotspot/images/portfolio/Night1.jpg', id: 10 },
        { src: 'agency-hotspot/images/portfolio/Night2.jpg', id: 11 },
        { src: 'agency-hotspot/images/portfolio/Night3.jpg', id: 12 },
        { src: 'agency-hotspot/images/portfolio/Night4.jpg', id: 13 },
        { src: 'agency-hotspot/images/portfolio/Night5.jpg', id: 14 },
        { src: 'agency-hotspot/images/portfolio/Night6.jpg', id: 15 },
        { src: 'agency-hotspot/images/portfolio/Night7.jpg', id: 16 },
        { src: 'agency-hotspot/images/portfolio/Night8.jpg', id: 17 },
        { src: 'agency-hotspot/images/portfolio/Night9.jpg', id: 18 }
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
            if (nextSet >= imageSets.length) nextSet = 0;
            if (nextSet < 0) nextSet = imageSets.length - 1;
            
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
