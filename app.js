/**
 * AFAIK Knowledge Hub - Application Logic
 * State management, routing, and initialization
 */

// ===== TAB SWITCHING FOR PROJECT DETAIL =====
function switchDetailTab(btn, tabId) {
  // Deactivate all tabs and contents
  document
    .querySelectorAll(".detail-tab")
    .forEach((t) => t.classList.remove("active"));
  document
    .querySelectorAll(".detail-tab-content")
    .forEach((c) => c.classList.remove("active"));
  // Activate selected
  btn.classList.add("active");
  const target = document.getElementById("tab-" + tabId);
  if (target) target.classList.add("active");
}

// ===== STATE MANAGEMENT =====
const AppState = {
  currentPage: "home",
  activeCategory: "All",
  selectedProjectId: null,
  completedMissions: [],
  activeAccordion: null,
  chatOpen: false,

  // Toggle mission completion
  toggleMission: function (missionId) {
    const index = this.completedMissions.indexOf(missionId);
    if (index > -1) {
      this.completedMissions.splice(index, 1);
    } else {
      this.completedMissions.push(missionId);
    }
    AppRouter.render();
  },

  // Set active category for projects
  setCategory: function (category) {
    this.activeCategory = category;
    AppRouter.render();
  },

  // Select a project for detail view
  selectProject: function (projectId) {
    this.selectedProjectId = projectId;
    AppRouter.render();
  },

  // Toggle accordion in resources
  toggleAccordion: function (index) {
    this.activeAccordion = this.activeAccordion === index ? null : index;
    AppRouter.render(true); // Pass true to preserve scroll position
  },

  // Toggle chatbot
  toggleChat: function () {
    this.chatOpen = !this.chatOpen;
    const chatWindow = document.getElementById("chat-window");
    if (chatWindow) {
      chatWindow.style.display = this.chatOpen ? "flex" : "none";
    }
  },
};

// ===== ROUTER =====
const AppRouter = {
  // Navigate to a page (optional projectId for direct project detail)
  navigate: function (page, projectId) {
    if (page === "project-detail" && projectId) {
      AppState.currentPage = "projects";
      AppState.selectedProjectId = Number.parseInt(projectId) || projectId;
    } else {
      AppState.currentPage = page;
      AppState.selectedProjectId = null;
    }

    // Update active nav item
    const activePage = AppState.currentPage;
    document.querySelectorAll(".nav-item").forEach((item) => {
      item.classList.remove("active");
      if (item.dataset.page === activePage) {
        item.classList.add("active");
      }
    });

    // Toggle homepage class to hide/show nav search
    const root = document.getElementById("filinvest-dashboard-v2");
    if (root) {
      root.classList.toggle("page-home", activePage === "home");
    }

    // Collapse nav search when navigating (clear state)
    const navWrap = document.getElementById("nav-search-wrap");
    const navInput = document.getElementById("nav-search-input");
    if (navWrap) {
      navWrap.classList.remove("expanded");
      if (navInput) navInput.value = "";
      SearchHandler.closeDropdown("nav-search-results");
    }

    // Close mobile hamburger menu if open
    const navLinks = document.querySelector(".nav-links");
    const hamburger = document.querySelector(".nav-hamburger");
    if (navLinks) navLinks.classList.remove("open");
    if (hamburger) hamburger.classList.remove("active");

    this.render();
  },

  // Render the current page
  render: function (preserveScroll = false) {
    const appContent = document.getElementById("app-content");
    if (!appContent) return;

    // Save scroll position if needed
    const scrollPosition = preserveScroll ? window.scrollY : 0;

    let html = "";

    // Check if we're viewing a project detail
    if (AppState.currentPage === "projects" && AppState.selectedProjectId) {
      html = Components.renderProjectDetail(AppState.selectedProjectId);
    } else {
      // Render normal pages
      switch (AppState.currentPage) {
        case "home":
          html = Components.renderHomepage();
          break;
        case "dashboard":
          html = Components.renderDashboard();
          break;
        case "projects":
          html = Components.renderProjects();
          break;
        case "organization":
          html = Components.renderOrganization();
          break;
        case "resources":
          html = Components.renderResources();
          break;
        case "links":
          html = Components.renderLinks();
          break;
        case "map":
          html = Components.renderMapExplorer();
          break;
        default:
          html = '<div class="error">Page not found</div>';
      }
    }

    appContent.innerHTML = html;

    // Scroll to top only when navigating, preserve scroll when toggling
    if (preserveScroll) {
      window.scrollTo({ top: scrollPosition, behavior: "instant" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  },
};

// ===== SEARCH FUNCTIONALITY =====
const SearchHandler = {
  _activeDropdown: null,

  toggleNavSearch: function () {
    const wrap = document.getElementById("nav-search-wrap");
    const input = document.getElementById("nav-search-input");
    if (!wrap) return;
    const isExpanded = wrap.classList.contains("expanded");
    if (isExpanded) {
      wrap.classList.remove("expanded");
      this.closeDropdown("nav-search-results");
      if (input) input.value = "";
    } else {
      wrap.classList.add("expanded");
      if (input) setTimeout(() => input.focus(), 50);
    }
  },

  onFocus: function (dropdownId) {
    const input =
      dropdownId === "hero-search-results"
        ? document.getElementById("hero-search-input")
        : document.getElementById("nav-search-input");
    const query = input ? input.value.trim() : "";
    if (query) {
      this.liveSearch(query, dropdownId);
    }
    // Don't show dropdown when empty - just let them type
  },

  openSearch: function () {
    // Focus the hero search if on home, otherwise toggle nav search
    const heroInput = document.getElementById("hero-search-input");
    if (heroInput) {
      heroInput.focus();
    } else {
      this.toggleNavSearch();
    }
  },

  closeDropdown: function (dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    if (dropdown) dropdown.classList.remove("active");
  },

  closeAllDropdowns: function () {
    document
      .querySelectorAll(".search-dropdown")
      .forEach((d) => d.classList.remove("active"));
  },

  selectResult: function (action, dropdownId) {
    action();
    this.closeAllDropdowns();
    // Clear inputs
    const heroInput = document.getElementById("hero-search-input");
    const navInput = document.getElementById("nav-search-input");
    if (heroInput) heroInput.value = "";
    if (navInput) navInput.value = "";
    // Close mobile hamburger menu if open
    const navLinks = document.querySelector(".nav-links");
    const hamburger = document.querySelector(".nav-hamburger");
    if (navLinks) navLinks.classList.remove("open");
    if (hamburger) hamburger.classList.remove("active");
  },

  liveSearch: function (query, dropdownId) {
    const container = document.getElementById(dropdownId);
    if (!container) return;

    query = query.trim().toLowerCase();
    if (!query) {
      container.classList.remove("active");
      return;
    }

    let html = "";

    // Search projects
    const projectResults = AppData.projects.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.location.toLowerCase().includes(query) ||
        p.type.toLowerCase().includes(query) ||
        p.category?.toLowerCase().includes(query) ||
        p.status?.toLowerCase().includes(query),
    );
    if (projectResults.length > 0) {
      html += '<div class="search-category">Projects</div>';
      projectResults.slice(0, 4).forEach((p) => {
        const color = p.color.split(" ")[0];
        html += `
          <div class="search-result-item" onmousedown="SearchHandler.selectResult(() => AppRouter.navigate('project-detail', '${p.id}'), '${dropdownId}')">
            <div class="search-result-icon" style="background: ${color}15;">
              ${p.image ? `<img src="${p.image}" alt="${p.name}">` : `<span style="color: ${color}">🏗️</span>`}
            </div>
            <div class="search-result-info">
              <div class="search-result-name">${this._highlight(p.name, query)}</div>
              <div class="search-result-desc">${p.location}</div>
            </div>
          </div>`;
      });
    }

    // Search links
    const linkResults = AppData.links.filter(
      (l) =>
        l.name.toLowerCase().includes(query) ||
        l.description.toLowerCase().includes(query),
    );
    if (linkResults.length > 0) {
      html += '<div class="search-category">Links</div>';
      linkResults.slice(0, 4).forEach((l) => {
        const color = l.color.split(" ")[0];
        html += `
          <div class="search-result-item" onmousedown="SearchHandler.selectResult(() => window.open('${l.url}', '_blank'), '${dropdownId}')">
            <div class="search-result-icon" style="background: ${color}15; color: ${color};">🔗</div>
            <div class="search-result-info">
              <div class="search-result-name">${this._highlight(l.name, query)}</div>
              <div class="search-result-desc">${l.description}</div>
            </div>
          </div>`;
      });
    }

    // Search resources (permits, events, digitalTools)
    let resourceResults = [];
    ["permits", "events", "digitalTools"].forEach((cat) => {
      if (AppData.resources[cat]) {
        AppData.resources[cat].forEach((r) => {
          const label = r.title || r.name || "";
          if (label.toLowerCase().includes(query)) {
            resourceResults.push({ ...r, _label: label, _cat: cat });
          }
        });
      }
    });
    if (resourceResults.length > 0) {
      html += '<div class="search-category">Resources</div>';
      resourceResults.slice(0, 4).forEach((r) => {
        const color = r.color ? r.color.split(" ")[0] : "#0284c7";
        const catLabel =
          {
            permits: "Permit / Document",
            events: "Event",
            digitalTools: "Digital Tool",
          }[r._cat] || "Resource";
        html += `
          <div class="search-result-item" onmousedown="SearchHandler.selectResult(() => AppRouter.navigate('resources'), '${dropdownId}')">
            <div class="search-result-icon" style="background: ${color}15; color: ${color};">📄</div>
            <div class="search-result-info">
              <div class="search-result-name">${this._highlight(r._label, query)}</div>
              <div class="search-result-desc">${catLabel}</div>
            </div>
          </div>`;
      });
    }

    // Search organization members
    const orgResults = AppData.organization.filter(
      (m) =>
        m.name.toLowerCase().includes(query) ||
        m.position.toLowerCase().includes(query) ||
        m.email?.toLowerCase().includes(query),
    );
    if (orgResults.length > 0) {
      html += '<div class="search-category">Organization</div>';
      orgResults.slice(0, 4).forEach((m) => {
        html += `
          <div class="search-result-item" onmousedown="SearchHandler.selectResult(() => AppRouter.navigate('organization'), '${dropdownId}')">
            <div class="search-result-icon" style="background: #f0fdf4; color: #16a34a;">👤</div>
            <div class="search-result-info">
              <div class="search-result-name">${this._highlight(m.name, query)}</div>
              <div class="search-result-desc">${m.position.split("•")[0].trim()}</div>
            </div>
          </div>`;
      });
    }

    // Search lot projects comparison
    const lotResults = AppData.lotProjects.filter((l) =>
      l.title.toLowerCase().includes(query),
    );
    if (lotResults.length > 0) {
      html += '<div class="search-category">Lot Projects</div>';
      lotResults.slice(0, 4).forEach((l) => {
        const color = l.color ? l.color.split(" ")[0] : "#003d71";
        html += `
          <div class="search-result-item" onmousedown="SearchHandler.selectResult(() => AppRouter.navigate('resources'), '${dropdownId}')">
            <div class="search-result-icon" style="background: ${color}15; color: ${color};">🏡</div>
            <div class="search-result-info">
              <div class="search-result-name">${this._highlight(l.title, query)}</div>
              <div class="search-result-desc">Lot Comparison</div>
            </div>
          </div>`;
      });
    }

    // Search pages
    const pages = [
      { name: "Home", page: "home", icon: "🏠" },
      { name: "Analytics Dashboard", page: "dashboard", icon: "📊" },
      { name: "Projects", page: "projects", icon: "🏗️" },
      { name: "Map Explorer", page: "map", icon: "🗺️" },
      { name: "Resources & Documents", page: "resources", icon: "📄" },
      { name: "Quick Links", page: "links", icon: "🔗" },
      { name: "Organization Team", page: "organization", icon: "👥" },
    ];
    const pageResults = pages.filter((p) =>
      p.name.toLowerCase().includes(query),
    );
    if (pageResults.length > 0) {
      html += '<div class="search-category">Pages</div>';
      pageResults.forEach((p) => {
        html += `
          <div class="search-result-item" onmousedown="SearchHandler.selectResult(() => AppRouter.navigate('${p.page}'), '${dropdownId}')">
            <div class="search-result-icon" style="background: #f3f4f6; font-size: 16px;">${p.icon}</div>
            <div class="search-result-info">
              <div class="search-result-name">${this._highlight(p.name, query)}</div>
              <div class="search-result-desc">Go to page</div>
            </div>
          </div>`;
      });
    }

    if (!html) {
      html = `<div class="search-empty">No results for "<strong>${query}</strong>"</div>`;
    }

    container.innerHTML = html;
    container.classList.add("active");
  },

  _highlight: function (text, query) {
    const idx = text.toLowerCase().indexOf(query);
    if (idx === -1) return text;
    return (
      text.substring(0, idx) +
      "<strong>" +
      text.substring(idx, idx + query.length) +
      "</strong>" +
      text.substring(idx + query.length)
    );
  },

  performSearch: function () {
    this.openSearch();
  },

  handleSearchKeyPress: function (event) {
    if (event.key === "Enter") {
      this.performSearch();
    }
  },
};

// ===== CHATBOT FUNCTIONALITY =====
const ChatBot = {
  sendMessage: function () {
    const input = document.getElementById("chat-input");
    const messages = document.getElementById("chat-messages");

    if (!input || !messages) return;

    const message = input.value.trim();
    if (!message) return;

    // Add user message
    const userMsg = document.createElement("div");
    userMsg.className = "chat-message user-message";
    userMsg.textContent = message;
    messages.appendChild(userMsg);

    // Clear input
    input.value = "";

    // Scroll to bottom
    messages.scrollTop = messages.scrollHeight;

    // Simulate bot response
    setTimeout(() => {
      const botMsg = document.createElement("div");
      botMsg.className = "chat-message bot-message";
      botMsg.innerHTML = this.getBotResponse(message);
      messages.appendChild(botMsg);
      messages.scrollTop = messages.scrollHeight;
    }, 1000);
  },

  getBotResponse: function (message) {
    const lowerMsg = message.toLowerCase();

    if (lowerMsg.includes("project") || lowerMsg.includes("property")) {
      return "I can help you explore our projects! Check out the <strong>Projects</strong> page for detailed information about our developments.";
    } else if (
      lowerMsg.includes("contact") ||
      lowerMsg.includes("team") ||
      lowerMsg.includes("who")
    ) {
      return "Visit the <strong>Organization</strong> page to see our team structure and contact information.";
    } else if (
      lowerMsg.includes("permit") ||
      lowerMsg.includes("document") ||
      lowerMsg.includes("requirement")
    ) {
      return "For permit information and requirements, please visit the <strong>Resources</strong> page.";
    } else if (
      lowerMsg.includes("link") ||
      lowerMsg.includes("system") ||
      lowerMsg.includes("portal")
    ) {
      return "Quick access links are available on the <strong>Links</strong> page.";
    } else if (
      lowerMsg.includes("map") ||
      lowerMsg.includes("tour") ||
      lowerMsg.includes("virtual")
    ) {
      return "Explore our interactive virtual tour on the <strong>Map Explorer</strong> page!";
    } else {
      return "Hello! I'm the FAI Knowledge Hub assistant. I can help you navigate our projects, team, resources, and more. What would you like to know?";
    }
  },

  handleChatKeyPress: function (event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  },
};

// ===== INITIALIZATION =====
function initializeApp() {
  console.log("🚀 Initializing AFAIK Knowledge Hub...");

  // Set up navigation event listeners
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const page = this.dataset.page;
      AppRouter.navigate(page);
      // Close mobile hamburger menu if open
      const navLinks = document.querySelector(".nav-links");
      const hamburger = document.querySelector(".nav-hamburger");
      if (navLinks) navLinks.classList.remove("open");
      if (hamburger) hamburger.classList.remove("active");
    });
  });

  // Set up search functionality — click icon to toggle search bar
  const navSearchBtn = document.querySelector(".search-icon-btn");
  if (navSearchBtn) {
    navSearchBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      SearchHandler.toggleNavSearch();
    });
  }

  // Close dropdowns on outside click
  document.addEventListener("click", (e) => {
    // Hero search
    const heroWrap = document.querySelector(".hero-search-wrap");
    if (heroWrap && !heroWrap.contains(e.target)) {
      SearchHandler.closeDropdown("hero-search-results");
    }
    // Nav search — collapse when clicking outside
    const navWrap = document.getElementById("nav-search-wrap");
    if (navWrap && !navWrap.contains(e.target)) {
      navWrap.classList.remove("expanded");
      SearchHandler.closeDropdown("nav-search-results");
      const navInput = document.getElementById("nav-search-input");
      if (navInput) navInput.value = "";
    }
  });

  // Set up chatbot
  const chatToggle = document.getElementById("chat-toggle");
  const chatClose = document.getElementById("chat-close");
  const chatSend = document.getElementById("chat-send");
  const chatInput = document.getElementById("chat-input");

  if (chatToggle) {
    chatToggle.addEventListener("click", () => AppState.toggleChat());
  }

  if (chatClose) {
    chatClose.addEventListener("click", () => AppState.toggleChat());
  }

  if (chatSend) {
    chatSend.addEventListener("click", () => ChatBot.sendMessage());
  }

  if (chatInput) {
    chatInput.addEventListener("keypress", (e) =>
      ChatBot.handleChatKeyPress(e),
    );
  }

  // Initial render
  AppRouter.render();

  console.log("✅ App initialized successfully!");
}

// Wait for DOM to be ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}
