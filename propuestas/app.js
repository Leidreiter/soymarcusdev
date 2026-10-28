// Propuesta Zipler Digital - Interactividad y animaciones (fix)
(function () {
  const header = document.querySelector(".topbar");
  const navLinks = document.querySelectorAll(".nav a");
  const sections = document.querySelectorAll("main section[id], .stats");
  const mockup = document.querySelector(".mockup");
  const progressBar = document.querySelector(".progress span");
  const tasks = document.querySelectorAll(".mockup .task");
  let revealItems = Array.from(document.querySelectorAll(".reveal"));

  // Header scroll shadow
  const handleHeaderScroll = () => {
    if (!header) return;
    if (window.scrollY > 10) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // Smooth scroll with header offset
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const headerHeight = header ? header.offsetHeight : 76;
      const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 14;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    });
  });

  // Active nav on scroll
  const activateNav = () => {
    if (!header) return;
    const headerHeight = header.offsetHeight || 76;
    let current = "";
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= headerHeight + 180 && rect.bottom >= headerHeight + 180) {
        current = section.getAttribute("id") || "";
      }
    });
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      link.classList.toggle("active", href === "#" + current);
    });
  };

  window.addEventListener("scroll", activateNav, { passive: true });
  activateNav();

  // Stagger: add reveal to cards if not present
  const staggerGroups = [
    { selector: ".features .feature", delay: 80 },
    { selector: ".phase-list .phase", delay: 70 },
    { selector: ".stat-grid .stat", delay: 90 },
    { selector: ".scope-grid .scope-card", delay: 90 },
  ];

  staggerGroups.forEach((group) => {
    const items = document.querySelectorAll(group.selector);
    items.forEach((item, index) => {
      if (!item.classList.contains("reveal")) {
        item.classList.add("reveal");
      }
      item.style.setProperty("--reveal-delay", index * group.delay + "ms");
    });
  });

  // Refresh list after adding stagger
  revealItems = Array.from(document.querySelectorAll(".reveal"));

  // Reveal logic: show if already in viewport, else observe
  const showInViewNow = () => {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    revealItems.forEach((el) => {
      if (el.classList.contains("in-view")) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < viewportHeight - 40 && rect.bottom > 0) {
        el.classList.add("in-view");
      }
    });
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    revealItems.forEach((el) => {
      if (!el.classList.contains("in-view")) {
        observer.observe(el);
      }
    });
  }

  // Run immediately and on load
  showInViewNow();
  window.addEventListener("load", showInViewNow, { once: true });
  // Also run after small delay in case of layout shifts
  setTimeout(showInViewNow, 150);
  setTimeout(showInViewNow, 400);

  // Mockup animations on load
  window.addEventListener("load", () => {
    if (progressBar) {
      requestAnimationFrame(() => {
        progressBar.style.transition = "width 1.2s cubic-bezier(.25,.8,.25,1)";
        progressBar.style.width = "44%";
      });
    }

    tasks.forEach((task, index) => {
      if (task.dataset.animated) return;
      task.dataset.animated = "true";
      task.style.opacity = "0";
      task.style.transform = "translateY(10px)";
      task.style.transition = "opacity .6s ease, transform .6s ease";
      setTimeout(() => {
        task.style.opacity = "1";
        task.style.transform = "translateY(0)";
      }, 200 + index * 80);
    });

    if (mockup) {
      mockup.style.transition = "transform .4s ease, box-shadow .4s ease";
    }
  });

  // Subtle tilt on mockup
  if (mockup && window.matchMedia("(pointer: fine)").matches) {
    let rect = null;

    const updateRect = () => {
      rect = mockup.getBoundingClientRect();
    };

    updateRect();
    window.addEventListener("resize", updateRect, { passive: true });
    window.addEventListener("scroll", updateRect, { passive: true });

    mockup.addEventListener("mousemove", (e) => {
      if (!rect) updateRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const px = x / rect.width - 0.5;
      const py = y / rect.height - 0.5;
      const rotateY = px * 5;
      const rotateX = py * -5;
      mockup.style.transform = `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      mockup.style.boxShadow = "0 28px 56px rgba(26, 115, 232, 0.14)";
    });

    mockup.addEventListener("mouseleave", () => {
      mockup.style.transform = "perspective(1100px) rotateX(0deg) rotateY(0deg) translateY(0px)";
      mockup.style.boxShadow = "var(--shadow)";
    });
  }

  // Float card subtle animation
  const floatCard = document.querySelector(".float-card");
  if (floatCard && !floatCard.dataset.floated) {
    floatCard.dataset.floated = "true";
    floatCard.style.animation = "floatCard 4s ease-in-out infinite";
  }

  // Inject keyframes/styles
  const style = document.createElement("style");
  style.textContent = `
    @keyframes floatCard {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-6px); }
    }
    .topbar.scrolled {
      box-shadow: 0 10px 40px rgba(15, 23, 42, 0.06);
      background: rgba(255, 255, 255, 0.98);
    }
    .nav a {
      position: relative;
      transition: color .25s ease;
    }
    .nav a::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -10px;
      width: 100%;
      height: 2px;
      border-radius: 999px;
      background: linear-gradient(90deg, var(--blue) 0%, var(--blue-dark) 100%);
      transform: scaleX(0);
      transform-origin: right;
      transition: transform .25s ease;
      opacity: .9;
    }
    .nav a:hover::after,
    .nav a.active::after {
      transform: scaleX(1);
      transform-origin: left;
    }
    .nav a.active {
      color: var(--blue);
    }
    .reveal {
      opacity: 0;
      transform: translateY(22px);
      transition: opacity .8s cubic-bezier(.25,.8,.25,1), transform .8s cubic-bezier(.25,.8,.25,1);
      transition-delay: var(--reveal-delay, 0ms);
      will-change: opacity, transform;
    }
    .reveal.in-view {
      opacity: 1;
      transform: translateY(0);
    }
    .feature,
    .phase,
    .stat,
    .scope-card {
      transition: transform .28s ease, box-shadow .28s ease, border-color .28s ease;
    }
    .feature:hover,
    .scope-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 20px 50px rgba(26, 115, 232, 0.1);
    }
    .phase:hover {
      transform: translateY(-4px);
      box-shadow: 0 18px 44px rgba(15, 23, 42, 0.08);
    }
    .stat:hover {
      transform: translateY(-4px);
      box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06);
    }
    .button {
      position: relative;
      overflow: hidden;
    }
    .button::before {
      content: "";
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at center, rgba(255,255,255,.16) 0, transparent 60%);
      transform: translateX(-100%);
      transition: transform .6s ease;
    }
    .button:hover::before {
      transform: translateX(100%);
    }
    .button > * {
      position: relative;
      z-index: 1;
    }
  `;
  document.head.appendChild(style);
})();
