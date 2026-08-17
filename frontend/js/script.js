// ============================================================
//  StyleHub – Main Script
//  Handles: Hero Slider, Categories Nav, Cart, Wishlist, Auth, 
//           Live Search, Countdown, UI Notifications & Shared Logic
// ============================================================

// ─── LocalStorage Keys ──────────────────────────────────────
const STORAGE_KEYS = {
  CART: "stylehub_cart",
  WISHLIST: "stylehub_wishlist",
  USERS: "stylehubUsers",
  CURRENT_USER: "stylehubCurrentUser",
  ORDERS: "stylehub_orders",
  COUPON: "stylehub_applied_coupon"
};

// ─── LocalStorage Helpers ────────────────────────────────────
function getCart() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.CART)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
  updateCartCounter();
}

function getWishlist() {
  try {
    const list1 = JSON.parse(localStorage.getItem(STORAGE_KEYS.WISHLIST)) || [];
    const list2 = JSON.parse(localStorage.getItem("stylehubWishlist")) || [];
    return Array.from(new Set([...list1, ...list2]));
  } catch (e) {
    return [];
  }
}

function saveWishlist(wishlist) {
  localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(wishlist));
  localStorage.setItem("stylehubWishlist", JSON.stringify(wishlist));
  updateWishlistCounter();
}

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS)) || [];
  } catch (e) {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
}

function getUser() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.CURRENT_USER)) || null;
  } catch (e) {
    return null;
  }
}

function loginUser(name, email, password, phone = "") {
  const user = { name, email, phone, password };
  localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
  updateAuthUI();
  return user;
}

function logoutUser() {
  localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
  updateAuthUI();
  showToast("Logged out successfully.");
  setTimeout(() => window.location.href = "login.html", 800);
}

// ─── Cart Logic ─────────────────────────────────────────────
function addToCart(productId, size = null, color = null, qty = 1) {
  const product = getProductById(productId);
  if (!product) return;

  const itemSize = size || (product.sizes && product.sizes[0]) || "M";
  const itemColor = color || (product.colors && product.colors[0]) || "Default";
  const itemKey = `${productId}-${itemSize}-${itemColor}`;

  const cart = getCart();
  const existingIndex = cart.findIndex(item => item.key === itemKey);

  if (existingIndex > -1) {
    cart[existingIndex].qty += qty;
  } else {
    cart.push({
      key: itemKey,
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: itemSize,
      color: itemColor,
      qty: qty
    });
  }

  saveCart(cart);
  showToast("🛒 Product added to cart successfully!");
}

function removeFromCart(key) {
  let cart = getCart();
  cart = cart.filter(item => item.key !== key);
  saveCart(cart);
}

function updateCartQty(key, newQty) {
  const cart = getCart();
  const item = cart.find(i => i.key === key);
  if (item) {
    if (newQty <= 0) {
      removeFromCart(key);
    } else {
      item.qty = newQty;
      saveCart(cart);
    }
  }
}

function getCartTotal() {
  const cart = getCart();
  return cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
}

function getCartCount() {
  const cart = getCart();
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

// ─── Wishlist Logic ──────────────────────────────────────────
function toggleWishlist(productId) {
  const wishlist = getWishlist();
  const index = wishlist.indexOf(productId);
  let added = false;

  if (index > -1) {
    wishlist.splice(index, 1);
    showToast("Removed from wishlist.");
  } else {
    wishlist.push(productId);
    showToast("Added to wishlist! ❤️");
    added = true;
  }

  saveWishlist(wishlist);

  // Update heart icon states on page
  document.querySelectorAll(`.wishlist-btn[data-id="${productId}"]`).forEach(btn => {
    btn.classList.toggle("active", added);
    btn.textContent = added ? "❤️" : "🤍";
  });

  return added;
}

function isInWishlist(productId) {
  return getWishlist().includes(productId);
}

// ─── UI Counters & Nav ───────────────────────────────────────
function updateCartCounter() {
  const count = getCartCount();
  document.querySelectorAll(".cart-count").forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? "inline-flex" : "none";
  });
}

function updateWishlistCounter() {
  const count = getWishlist().length;
  document.querySelectorAll(".wishlist-count").forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? "inline-flex" : "none";
  });
}

function updateAuthUI() {
  const user = getUser();
  document.querySelectorAll(".nav-login-link").forEach(el => {
    el.style.display = user ? "none" : "inline-flex";
  });
  document.querySelectorAll(".nav-account-link").forEach(el => {
    el.style.display = user ? "inline-flex" : "none";
    const nameEl = el.querySelector(".user-name");
    if (nameEl && user) {
      nameEl.textContent = user.name.split(" ")[0];
    }
  });
}

// ─── Toast Notification System ───────────────────────────────
function showToast(message, type = "success") {
  let toastContainer = document.getElementById("sh-toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "sh-toast-container";
    toastContainer.style.cssText = "position: fixed; bottom: 24px; right: 24px; z-index: 10000; display: flex; flex-direction: column; gap: 10px; pointer-events: none;";
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  toast.className = `sh-toast sh-toast--${type}`;
  toast.style.pointerEvents = "auto";
  toast.innerHTML = `
    <span class="sh-toast__icon">${type === "error" ? "❌" : type === "warning" ? "⚠️" : "✨"}</span>
    <span class="sh-toast__message">${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("sh-toast--hiding");
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// ─── Shared Product Card Renderer ────────────────────────────
function renderProductCard(product) {
  const inWishlist = isInWishlist(product.id);
  const discount = getDiscount(product.price, product.originalPrice);

  return `
    <div class="product-card" data-id="${product.id}">
      <a href="product-detail.html?id=${product.id}" class="product-card__image-wrapper">
        <img
          src="${product.image}"
          alt="${product.name}"
          class="product-card__image"
          loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=80'"
        >
        ${discount > 0 ? `<span class="product-card__badge" style="background:#EF4444;">SALE</span>` : (product.badge ? `<span class="product-card__badge">${product.badge}</span>` : "")}
        ${discount > 0 ? `<span class="product-card__discount">-${discount}% OFF</span>` : ""}
        <div class="product-card__overlay">
          <span class="product-card__quick-add">👁️ Quick View</span>
        </div>
      </a>
      <div class="product-card__body">
        <div class="product-card__meta">
          <span class="product-card__category">${product.category.toUpperCase()} · ${product.type.toUpperCase()}</span>
          <button
            class="wishlist-btn ${inWishlist ? "active" : ""}"
            data-id="${product.id}"
            onclick="toggleWishlist(${product.id})"
            aria-label="${inWishlist ? "Remove from wishlist" : "Add to wishlist"}"
            title="${inWishlist ? "In Wishlist" : "Add to Wishlist"}"
          >
            ${inWishlist ? "❤️" : "🤍"}
          </button>
        </div>
        
        <h3 class="product-card__name">
          <a href="product-detail.html?id=${product.id}">${product.name}</a>
        </h3>

        <div class="product-card__rating">
          ${renderStars(product.rating)}
          <span class="product-card__reviews">(${product.reviews})</span>
        </div>

        <div class="product-card__pricing">
          <span class="product-card__price">${formatPrice(product.price)}</span>
          ${product.originalPrice > product.price
            ? `<span class="product-card__original">${formatPrice(product.originalPrice)}</span>`
            : ""}
        </div>

        <div class="product-card__actions">
          <button
            class="btn btn--primary btn--sm product-card__add-btn"
            onclick="addToCart(${product.id})"
            id="add-to-cart-${product.id}"
          >
            🛒 Add to Cart
          </button>
          <a
            href="product-detail.html?id=${product.id}"
            class="btn btn--outline btn--sm product-card__details-btn"
          >
            View Details ➔
          </a>
        </div>
      </div>
    </div>
  `;
}

// ─── Hero Carousel Slider Controller ──────────────────────────
function initHeroCarousel() {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dot");
  const prevBtn = document.getElementById("hero-prev");
  const nextBtn = document.getElementById("hero-next");
  const heroSection = document.querySelector(".hero");

  if (!slides.length) return;

  let currentSlide = 0;
  let slideInterval = null;
  const slideDuration = 5000; // 5 seconds per slide

  function goToSlide(index) {
    // Wrap around index
    if (index < 0) {
      currentSlide = slides.length - 1;
    } else if (index >= slides.length) {
      currentSlide = 0;
    } else {
      currentSlide = index;
    }

    // Update slides classes
    slides.forEach((slide, idx) => {
      slide.classList.toggle("active", idx === currentSlide);
    });

    // Update dots classes
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === currentSlide);
    });
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  function startAutoPlay() {
    stopAutoPlay();
    slideInterval = setInterval(nextSlide, slideDuration);
  }

  function stopAutoPlay() {
    if (slideInterval) {
      clearInterval(slideInterval);
      slideInterval = null;
    }
  }

  // Arrow button click listeners
  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.preventDefault();
      prevSlide();
      startAutoPlay(); // reset timer
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.preventDefault();
      nextSlide();
      startAutoPlay(); // reset timer
    });
  }

  // Dot button click listeners
  dots.forEach((dot, idx) => {
    dot.addEventListener("click", (e) => {
      e.preventDefault();
      goToSlide(idx);
      startAutoPlay(); // reset timer
    });
  });

  // Pause on hover
  if (heroSection) {
    heroSection.addEventListener("mouseenter", stopAutoPlay);
    heroSection.addEventListener("mouseleave", startAutoPlay);

    // Touch swipe navigation for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    heroSection.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    heroSection.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const swipeDistance = touchStartX - touchEndX;
      if (Math.abs(swipeDistance) > 45) {
        if (swipeDistance > 0) {
          nextSlide(); // swipe left -> next slide
        } else {
          prevSlide(); // swipe right -> previous slide
        }
        startAutoPlay();
      }
    }, { passive: true });
  }

  // Keyboard navigation when user presses Left/Right arrows
  document.addEventListener("keydown", (e) => {
    if (heroSection && window.scrollY < 600) {
      if (e.key === "ArrowLeft") {
        prevSlide();
        startAutoPlay();
      } else if (e.key === "ArrowRight") {
        nextSlide();
        startAutoPlay();
      }
    }
  });

  // Start auto play initially
  startAutoPlay();
}

// ─── Explore Categories Smooth Navigation ─────────────────────
function initExploreCategories() {
  document.querySelectorAll('a[href*="#categories"], .explore-categories-btn, #explore-categories-btn').forEach(link => {
    link.addEventListener("click", (e) => {
      const target = document.getElementById("categories");
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        target.classList.add("categories-highlight");
        setTimeout(() => target.classList.remove("categories-highlight"), 1600);
      } else {
        window.location.href = "index.html#categories";
      }
    });
  });
}

// ─── Homepage Dynamic Products & Countdown ────────────────────
function initHomePage() {
  // Render Featured Products Grid
  const featuredGrid = document.getElementById("featured-products-grid");
  if (featuredGrid && typeof getFeaturedProducts === "function") {
    const featuredItems = getFeaturedProducts(8);
    featuredGrid.innerHTML = featuredItems.map(renderProductCard).join("");
  }

  // Render New Arrivals Grid
  const newArrivalsGrid = document.getElementById("new-arrivals-grid");
  if (newArrivalsGrid && typeof getNewArrivals === "function") {
    const newItems = getNewArrivals(8);
    newArrivalsGrid.innerHTML = newItems.map(renderProductCard).join("");
  }

  // Special Offer Countdown Timer
  const countdownEl = document.getElementById("offer-countdown");
  if (countdownEl) {
    let hours = 18;
    let mins = 45;
    let secs = 30;
    let days = 2;

    const daysEl = countdownEl.querySelector(".countdown-days");
    const hrsEl = countdownEl.querySelector(".countdown-hrs");
    const minsEl = countdownEl.querySelector(".countdown-mins");
    const secsEl = countdownEl.querySelector(".countdown-secs");

    setInterval(() => {
      secs--;
      if (secs < 0) {
        secs = 59;
        mins--;
        if (mins < 0) {
          mins = 59;
          hours--;
          if (hours < 0) {
            hours = 23;
            days = Math.max(0, days - 1);
          }
        }
      }

      if (daysEl) daysEl.textContent = String(days).padStart(2, "0");
      if (hrsEl) hrsEl.textContent = String(hours).padStart(2, "0");
      if (minsEl) minsEl.textContent = String(mins).padStart(2, "0");
      if (secsEl) secsEl.textContent = String(secs).padStart(2, "0");
    }, 1000);
  }

  // Newsletter Form Handler
  const newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input[type="email"]');
      if (input && input.value) {
        showToast(`🎉 Thank you for subscribing! Your 10% coupon code: STYLE10 has been sent to ${input.value}`);
        input.value = "";
      }
    });
  }
}

// ─── Header Search Modal & Mobile Navigation Initialization ──
function initNavigation() {
  const hamburger = document.getElementById("hamburger-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileOverlay = document.getElementById("mobile-overlay");
  const mobileClose = document.getElementById("mobile-close");

  function closeMenu() {
    if (hamburger) hamburger.classList.remove("open");
    if (mobileMenu) mobileMenu.classList.remove("open");
    if (mobileOverlay) mobileOverlay.classList.remove("active");
    document.body.classList.remove("menu-open");
  }

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.contains("open");
      if (isOpen) {
        closeMenu();
      } else {
        hamburger.classList.add("open");
        mobileMenu.classList.add("open");
        if (mobileOverlay) mobileOverlay.classList.add("active");
        document.body.classList.add("menu-open");
      }
    });
  }

  if (mobileClose) mobileClose.addEventListener("click", closeMenu);
  if (mobileOverlay) mobileOverlay.addEventListener("click", closeMenu);

  document.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  // Search Modal Toggle & Live Preview
  const searchToggle = document.getElementById("search-toggle");
  const searchOverlay = document.getElementById("search-overlay");
  const searchClose = document.getElementById("search-close");
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");

  if (searchToggle && searchOverlay) {
    searchToggle.addEventListener("click", () => {
      searchOverlay.classList.add("active");
      if (searchInput) searchInput.focus();
    });
  }

  if (searchClose && searchOverlay) {
    searchClose.addEventListener("click", () => {
      searchOverlay.classList.remove("active");
    });
  }

  if (searchInput && searchResults) {
    searchInput.addEventListener("input", (e) => {
      const q = e.target.value.trim();
      if (!q) {
        searchResults.innerHTML = "";
        return;
      }
      if (typeof searchProducts === "function") {
        const matches = searchProducts(q).slice(0, 5);
        if (matches.length === 0) {
          searchResults.innerHTML = `<div class="search-no-results">No matches found for "<strong>${q}</strong>"</div>`;
        } else {
          searchResults.innerHTML = matches.map(p => `
            <a href="product-detail.html?id=${p.id}" class="search-result-item">
              <img src="${p.image}" alt="${p.name}">
              <div class="search-result-info">
                <span class="search-result-name">${p.name}</span>
                <span class="search-result-price">${formatPrice(p.price)} · <span style="text-transform:uppercase;font-size:11px;color:var(--text-light);">${p.category}</span></span>
              </div>
            </a>
          `).join("");
        }
      }
    });
  }

  if (searchForm && searchInput) {
    searchForm.addEventListener("submit", e => {
      e.preventDefault();
      const q = searchInput.value.trim();
      if (q) {
        window.location.href = `products.html?search=${encodeURIComponent(q)}`;
      }
    });
  }

  // Escape Key Handler to close open drawers/modals
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      closeMenu();
      if (searchOverlay) searchOverlay.classList.remove("active");
    }
  });

  // Active Link Highlight
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });

  // Sticky Navbar shadow on scroll
  const mainNav = document.getElementById("main-nav");
  if (mainNav) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        mainNav.classList.add("scrolled");
      } else {
        mainNav.classList.remove("scrolled");
      }
    });
  }

}

// Global Document Initialization
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initHeroCarousel();
  initExploreCategories();
  initHomePage();
  updateCartCounter();
  updateWishlistCounter();
  updateAuthUI();
});
