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
  // Navigate to a page
  navigate: function (page) {
    AppState.currentPage = page;
    AppState.selectedProjectId = null; // Reset project selection

    // Update active nav item
    document.querySelectorAll(".nav-item").forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("data-page") === page) {
        item.classList.add("active");
      }
    });

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
  performSearch: function () {
    const searchInput = document.getElementById("search-input");
    const query = searchInput ? searchInput.value.trim().toLowerCase() : "";

    if (!query) return;

    // Search through projects
    const results = AppData.projects.filter(
      (project) =>
        project.name.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.location.toLowerCase().includes(query) ||
        project.type.toLowerCase().includes(query),
    );

    // Show results (for now, navigate to projects)
    if (results.length > 0) {
      AppState.activeCategory = "All";
      AppRouter.navigate("projects");
    }

    // Clear search
    if (searchInput) searchInput.value = "";
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
      return "Hello! I'm the Filinvest Knowledge Hub assistant. I can help you navigate our projects, team, resources, and more. What would you like to know?";
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
      const page = this.getAttribute("data-page");
      AppRouter.navigate(page);
    });
  });

  // Set up search functionality
  const searchBtn = document.getElementById("search-btn");
  const searchInput = document.getElementById("search-input");

  if (searchBtn) {
    searchBtn.addEventListener("click", () => SearchHandler.performSearch());
  }

  if (searchInput) {
    searchInput.addEventListener("keypress", (e) =>
      SearchHandler.handleSearchKeyPress(e),
    );
  }

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
