const header = document.querySelector(".site-header");
const revealItems = document.querySelectorAll(".reveal");
const waitlistForms = document.querySelectorAll("[data-waitlist-form]");
const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-links a");
const WAITLIST_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwXIlB2nOoHm2CzTogNG_4cumPY-sB_AFN-9FnpmKWRD6FXU5aeE6t-d_n3NVN434Kb/exec";

const handleHeaderState = () => {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 18);
};

handleHeaderState();
window.addEventListener("scroll", handleHeaderState, { passive: true });

if (nav && navToggle) {
  const closeNav = () => {
    nav.classList.remove("nav-open");
    document.body.classList.remove("nav-menu-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("nav-open");
    document.body.classList.toggle("nav-menu-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("click", (event) => {
    if (!nav.classList.contains("nav-open")) return;
    if (nav.contains(event.target)) return;
    closeNav();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      closeNav();
    }
  });
}

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.18,
    rootMargin: "0px 0px -8% 0px",
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

waitlistForms.forEach((waitlistForm) => {
  waitlistForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const nameInput = waitlistForm.querySelector('input[name="full_name"]');
    const emailInput = waitlistForm.querySelector('input[type="email"]');
    const formStatus = waitlistForm.parentElement?.querySelector(".form-status");
    if (!nameInput || !emailInput) return;

    const nameValue = nameInput.value.trim();
    if (!nameValue) {
      nameInput.focus();
      return;
    }

    const emailValue = emailInput.value.trim();
    if (!emailValue) {
      emailInput.focus();
      return;
    }

    const button = waitlistForm.querySelector("button");
    const originalLabel = button ? button.textContent : "";

    if (formStatus) {
      formStatus.textContent = "";
      formStatus.className = "form-status";
    }

    if (WAITLIST_ENDPOINT === "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL") {
      if (formStatus) {
        formStatus.textContent =
          "Add your published Google Apps Script web app URL in script.js to enable submissions.";
        formStatus.classList.add("is-error");
      }
      return;
    }

    if (button) {
      button.textContent = "Submitting...";
      button.disabled = true;
    }

    const payload = new URLSearchParams({
      name: nameValue,
      email: emailValue,
      source: "website_waitlist",
      page: window.location.pathname,
      submitted_at: new Date().toISOString(),
    });

    try {
      await fetch(WAITLIST_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: payload.toString(),
      });

      waitlistForm.classList.add("is-submitted");
      nameInput.value = "";
      emailInput.value = "";

      if (formStatus) {
        formStatus.textContent = "Request received. You are on the waitlist.";
        formStatus.classList.add("is-success");
      }
    } catch (error) {
      if (formStatus) {
        formStatus.textContent =
          "Something went wrong while sending your request. Please try again.";
        formStatus.classList.add("is-error");
      }
    } finally {
      if (button) {
        button.textContent = originalLabel;
        button.disabled = false;
      }
    }
  });
});
