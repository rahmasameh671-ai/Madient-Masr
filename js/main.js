/**
 * Madinet Masr (Exclusive Portfolio) - Main Script
 * By properties-z.com
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Country Selector Dropdown
  if (typeof initCountrySelector === 'function') {
    initCountrySelector();
  }

  // 2. Lead Capture Form Submission Handler
  const leadForm = document.getElementById('leadCaptureForm');
  const submitBtn = document.getElementById('leadSubmitBtn');
  const successModal = document.getElementById('successModal');
  const successModalClose = document.getElementById('successModalClose');
  const successNameDisplay = document.getElementById('successNameDisplay');
  const successWhatsAppBtn = document.getElementById('successWhatsAppBtn');

  if (leadForm) {
    leadForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const fullName = document.getElementById('fullName').value.trim();
      const countryCode = document.getElementById('countryCodeInput').value.trim();
      const phoneNumber = document.getElementById('phoneNumber').value.trim();

      if (!fullName) {
        alert('Please enter your full name.');
        document.getElementById('fullName').focus();
        return;
      }

      if (!phoneNumber || phoneNumber.length < 6) {
        alert('Please enter a valid phone number.');
        document.getElementById('phoneNumber').focus();
        return;
      }

      const fullPhoneNumber = `${countryCode} ${phoneNumber}`;

      // Set Loading State on Button
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>PROCESSING...</span>`;

      const leadData = {
        name: fullName,
        phone: fullPhoneNumber,
        timestamp: new Date().toISOString(),
        source: 'Madinet Masr Exclusive Portfolio Landing Page',
        broker: 'properties-z.com'
      };

      // Store locally as backup
      try {
        const storedLeads = JSON.parse(localStorage.getItem('madinet_masr_leads') || '[]');
        storedLeads.push(leadData);
        localStorage.setItem('madinet_masr_leads', JSON.stringify(storedLeads));
      } catch (err) {
        console.warn('LocalStorage error:', err);
      }

      // Route lead to required emails:
      // Rahma@irtkaz.com, Mostafa.a.ashmawy@gmail.com, Mostafa.ashmawy@irtkaz.com
      const payload = {
        name: fullName,
        phone: fullPhoneNumber,
        source: 'Madinet Masr Exclusive Portfolio (properties-z.com)',
        _replyto: 'Rahma@irtkaz.com',
        _cc: 'Mostafa.a.ashmawy@gmail.com,Mostafa.ashmawy@irtkaz.com',
        _subject: `New Lead: Madinet Masr - ${fullName} (${fullPhoneNumber})`,
        _template: 'table'
      };

      try {
        // Send asynchronously to formsubmit.co
        fetch('https://formsubmit.co/ajax/Rahma@irtkaz.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        }).catch(err => {
          console.warn('Background lead dispatch notice:', err);
        });
      } catch (err) {
        console.warn('Lead transmission notice:', err);
      }

      // Reset button state and show success modal
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;

        if (successNameDisplay) {
          successNameDisplay.textContent = fullName;
        }

        // WhatsApp direct link for immediate response
        if (successWhatsAppBtn) {
          const directMsg = encodeURIComponent(`Hello, I just registered my interest for Madinet Masr Exclusive Portfolio. My name is ${fullName} (${fullPhoneNumber}).`);
          successWhatsAppBtn.href = `https://wa.me/201033373331?text=${directMsg}`;
        }

        if (successModal) {
          successModal.classList.add('active');
          document.body.style.overflow = 'hidden';
        }

        leadForm.reset();
      }, 700);
    });
  }

  // Close Success Modal
  if (successModalClose) {
    successModalClose.addEventListener('click', () => {
      successModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
  if (successModal) {
    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) {
        successModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // 3. Visual Gallery Lightbox System
  const galleryData = {
    talala: [
      {
        src: 'assets/images/talala-official.png',
        title: 'TALALA — Official Signature Villa Design',
        caption: 'European-infused elegance with iconic arched architectural facades and private landscaped gardens'
      },
      {
        src: 'assets/images/talala-main.jpg',
        title: 'TALALA — Contemporary Architectural Landmark',
        caption: 'European-infused design with panoramic glass facades and expansive private lawns'
      },
      {
        src: 'assets/images/talala-1.jpg',
        title: 'TALALA — Private Luxury Residences',
        caption: 'Refined architectural symmetry blending indoor elegance with outdoor sanctuary'
      },
      {
        src: 'assets/images/talala-2.jpg',
        title: 'TALALA — Signature Living Spaces',
        caption: 'Uncompromising finishes with open-plan layouts bathed in natural light'
      },
      {
        src: 'assets/images/talala-3.jpg',
        title: 'TALALA — Clubhouse & Water Features',
        caption: 'World-class recreational amenities and pedestrian-only landscaped corridors'
      }
    ],
    sarai: [
      {
        src: 'assets/images/sarai-official.webp',
        title: 'SARAI — Official Crystal Lagoon & Waterfront Promenade',
        caption: 'Expansive swimmable lagoons and lakeside residential architecture in New Cairo'
      },
      {
        src: 'assets/images/sarai-main.jpg',
        title: 'SARAI — Waterfront Lagoon Sanctuary',
        caption: 'Sprawling crystal lagoons bringing coastal luxury to the heart of New Cairo'
      },
      {
        src: 'assets/images/sarai-1.jpg',
        title: 'SARAI — Prestigious Standalone Villas',
        caption: 'Direct private views across pristine waters and manicured greens'
      },
      {
        src: 'assets/images/sarai-2.jpg',
        title: 'SARAI — Resort-Inspired Atmosphere',
        caption: 'A 5.5M square-meter master-planned oasis featuring sandy beach perimeters'
      },
      {
        src: 'assets/images/sarai-3.jpg',
        title: 'SARAI — Athletic & Equestrian Excellence',
        caption: 'Championship-grade athletic clubs, equestrian tracks, and curated retail promenades'
      }
    ],
    butterfly: [
      {
        src: 'assets/images/butterfly-official.webp',
        title: 'THE BUTTERFLY — Official Townhouse & Garden Enclave',
        caption: 'Low-density sanctuary designed with central green spines and peaceful private gardens'
      },
      {
        src: 'assets/images/butterfly-main.jpg',
        title: 'THE BUTTERFLY — Sculptural Haven in Mostakbal City',
        caption: 'Architectural symmetry inspired by butterfly wings, harmonized with nature'
      },
      {
        src: 'assets/images/butterfly-1.jpg',
        title: 'THE BUTTERFLY — Botanical Green Spines',
        caption: '80% open nature with central gardens, walking paths, and wellness corridors'
      },
      {
        src: 'assets/images/butterfly-2.jpg',
        title: 'THE BUTTERFLY — Intimate Courtyard Villas',
        caption: 'Low-density gated community delivering pure privacy and timeless calm'
      },
      {
        src: 'assets/images/butterfly-3.jpg',
        title: 'THE BUTTERFLY — Holistic Wellness & Serenity',
        caption: 'Dedicated spa, fitness facilities, and peaceful shaded meditation enclaves'
      }
    ],
    etaje: [
      {
        src: 'assets/images/etaje-main.jpg',
        title: 'TAJ CITY – ETAJE — Park Residence Architecture',
        caption: 'Monolithic stone and glass design with lush rooftop terraces and private perimeter walls'
      },
      {
        src: 'assets/images/origami-main.jpg',
        title: 'TAJ CITY – ETAJE — Minimalist Precision',
        caption: 'Geometric precision and clean lines redefining luxury living in New Cairo'
      },
      {
        src: 'assets/images/origami-1.jpg',
        title: 'TAJ CITY – ETAJE — Zen Gardens & Water Mirrors',
        caption: 'Tranquil landscaping creating effortless mindfulness and open views'
      },
      {
        src: 'assets/images/origami-2.jpg',
        title: 'TAJ CITY – ETAJE — Masterfully Crafted Facades',
        caption: 'Contemporary monolithic stone and glass design overlooking the central park'
      },
      {
        src: 'assets/images/origami-3.jpg',
        title: 'TAJ CITY – ETAJE — Modern Architectural Interiors',
        caption: 'Floor-to-ceiling vistas connecting pure interior minimalism with organic nature'
      }
    ]
  };

  // Backwards compatibility alias
  galleryData.origami = galleryData.etaje;

  const galleryModal = document.getElementById('galleryModal');
  const galleryImage = document.getElementById('galleryImage');
  const galleryTitle = document.getElementById('galleryTitle');
  const galleryCaption = document.getElementById('galleryCaption');
  const galleryCounter = document.getElementById('galleryCounter');
  const galleryClose = document.getElementById('galleryClose');
  const galleryPrev = document.getElementById('galleryPrev');
  const galleryNext = document.getElementById('galleryNext');
  const galleryThumbnails = document.getElementById('galleryThumbnails');

  let currentProject = 'talala';
  let currentIndex = 0;

  function updateGallery() {
    const items = galleryData[currentProject];
    if (!items || !items[currentIndex]) return;

    const item = items[currentIndex];
    galleryImage.src = item.src;
    galleryImage.alt = item.title;
    galleryTitle.textContent = item.title;
    galleryCaption.textContent = item.caption;
    galleryCounter.textContent = `${currentIndex + 1} / ${items.length}`;

    // Update thumbnail highlights
    const thumbs = galleryThumbnails.querySelectorAll('.gallery-thumb');
    thumbs.forEach((th, idx) => {
      th.classList.toggle('active', idx === currentIndex);
    });
  }

  function renderThumbnails() {
    const items = galleryData[currentProject];
    galleryThumbnails.innerHTML = '';
    items.forEach((item, idx) => {
      const thumb = document.createElement('img');
      thumb.src = item.src;
      thumb.alt = item.title;
      thumb.className = `gallery-thumb ${idx === currentIndex ? 'active' : ''}`;
      thumb.addEventListener('click', () => {
        currentIndex = idx;
        updateGallery();
      });
      galleryThumbnails.appendChild(thumb);
    });
  }

  function openGallery(projectKey) {
    if (!galleryData[projectKey]) return;
    currentProject = projectKey;
    currentIndex = 0;
    renderThumbnails();
    updateGallery();
    galleryModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeGallery() {
    galleryModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function prevSlide() {
    const items = galleryData[currentProject];
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateGallery();
  }

  function nextSlide() {
    const items = galleryData[currentProject];
    currentIndex = (currentIndex + 1) % items.length;
    updateGallery();
  }

  // Gallery Open Triggers
  document.querySelectorAll('[data-gallery-target]').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const target = button.getAttribute('data-gallery-target');
      openGallery(target);
    });
  });

  if (galleryClose) galleryClose.addEventListener('click', closeGallery);
  if (galleryPrev) galleryPrev.addEventListener('click', prevSlide);
  if (galleryNext) galleryNext.addEventListener('click', nextSlide);

  if (galleryModal) {
    galleryModal.addEventListener('click', (e) => {
      if (e.target === galleryModal) closeGallery();
    });
  }

  // Keyboard navigation for gallery
  document.addEventListener('keydown', (e) => {
    if (galleryModal && galleryModal.classList.contains('active')) {
      if (e.key === 'Escape') closeGallery();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    }
    if (successModal && successModal.classList.contains('active')) {
      if (e.key === 'Escape') {
        successModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  });

  // 4. Subtle scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    revealObserver.observe(el);
  });
});
