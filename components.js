/**
 * AFAIK Knowledge Hub - Component Rendering Functions
 * Vanilla JS functions for rendering different page views
 */

const Components = {
  /**
   * Render the Welcome/Homepage
   */
  renderHomepage: () => {
    return `
      <div class="homepage-container">
        <!-- Hero Section -->
        <section class="hero-section">
          <div class="hero-overlay"></div>
          <div class="hero-content">
            <div class="hero-text">
              <div class="hero-logo-section">
                <div class="hero-logo">
                  <img src="https://logopond.com/logos/f6fef3fe879afd5a73159b90df0d65fa.png" alt="AFAIK Logo" />
                </div>
                <div>
                  <h3>Filinvest Alabang Incorporated</h3>
                  <p>Building Dreams, Creating Communities</p>
                </div>
              </div>
              <h1 class="hero-title">Welcome to<br>FAI Knowledge Base</h1>
              <p class="hero-subtitle">Your central resource for projects, insights, and organizational information</p>
              <p class="hero-description">Explore our comprehensive database of property developments, access vital resources, and connect with our team—all in one place.</p>
              
              <div class="hero-buttons">
                <button onclick="AppRouter.navigate('projects')" class="btn-primary">
                  ${Icons.building}
                  <span>Explore Projects</span>
                </button>
                <button onclick="AppRouter.navigate('organization')" class="btn-secondary">
                  <span>Our Team</span>
                  ${Icons.chevronRight}
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- Quick Stats -->
        <section class="quick-stats">
          <div class="stat-card">
            ${Icons.calendar}
            <div>
              <div class="stat-value">70</div>
              <div class="stat-label">Years of Excellence</div>
            </div>
          </div>
          <div class="stat-card">
            ${Icons.building}
            <div>
              <div class="stat-value">200+</div>
              <div class="stat-label">Projects Delivered</div>
            </div>
          </div>
          <div class="stat-card">
            ${Icons.users}
            <div>
              <div class="stat-value">100K+</div>
              <div class="stat-label">Families Served</div>
            </div>
          </div>
          <div class="stat-card">
            ${Icons.trophy}
            <div>
              <div class="stat-value">25+</div>
              <div class="stat-label">Awards Received</div>
            </div>
          </div>
        </section>

        <!-- Featured Projects Preview -->
        <section class="featured-preview">
          <h2 class="section-title">Featured Projects</h2>
          <div class="projects-preview-grid">
            ${AppData.projects
              .slice(0, 3)
              .map(
                (project) => `
              <div class="preview-card" onclick="AppRouter.navigate('projects')">
                <div class="preview-image" style="background: linear-gradient(135deg, ${project.color}, ${project.color}aa);">
                  <img src="${project.image}" alt="${project.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.parentElement.innerHTML='<span style=&quot;font-size: 48px;&quot;>🏢</span>';" />
                </div>
                <div class="preview-content">
                  <h3>${project.name}</h3>
                  <p>${project.description}</p>
                  <div class="preview-footer">
                    <span class="badge" style="background: ${project.color};">${project.type}</span>
                    <button class="btn-link">View Details ${Icons.chevronRight}</button>
                  </div>
                </div>
              </div>
            `,
              )
              .join("")}
          </div>
        </section>
      </div>
    `;
  },

  /**
   * Render the Dashboard page
   */
  renderDashboard: () => {
    const completedMissions = AppState.completedMissions || [];

    return `
      <div class="dashboard-page">
        <!-- Header -->
        <div class="dashboard-header">
          <div class="header-left">
            <div class="dashboard-icon">
              ${Icons.chart}
            </div>
            <div>
              <h1>Progress & Milestones</h1>
              <p>Learning & Capability Tracking</p>
            </div>
          </div>
          <div class="header-right">
            <div class="period-badge">
              <p>Active period</p>
              <div>Q1 2026</div>
              <small>Reporting summary</small>
            </div>
          </div>
        </div>

        <!-- XP Progress Bar -->
        <div class="progress-section glass">
          <div class="progress-header">
            <div class="progress-icon">
              ${Icons.trendingUp}
            </div>
            <div>
              <h2>Milestone Overview</h2>
              <p>Monitor progress across required tools and onboarding tasks</p>
            </div>
          </div>
          <div class="progress-bar-container">
            <div class="progress-labels">
              <span>Program completion</span>
              <span class="progress-percent">70%</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 70%"></div>
            </div>
          </div>
          <div class="action-buttons">
            <button class="btn-primary">
              ${Icons.brain}
              <span>Continue Training</span>
            </button>
            <button class="btn-secondary">
              ${Icons.chart}
              <span>View Checklist</span>
            </button>
          </div>
        </div>

        <!-- Stats Grid -->
        <div class="stats-grid">
          <div class="stat-box glass">
            ${Icons.trophy}
            <div class="stat-value">350</div>
            <div class="stat-label">Points earned</div>
          </div>
          <div class="stat-box glass">
            ${Icons.clock}
            <div class="stat-value">12h 30m</div>
            <div class="stat-label">This period</div>
          </div>
          <div class="stat-box glass">
            ${Icons.brain}
            <div class="stat-value">SQL</div>
            <div class="stat-label">Top competency</div>
          </div>
          <div class="stat-box glass">
            ${Icons.zap}
            <div class="stat-value">Power BI</div>
            <div class="stat-label">Focus area</div>
          </div>
        </div>

        <!-- Missions & Achievements -->
        <div class="missions-achievements">
          <!-- Current Missions -->
          <div class="missions-panel glass">
            <h3 class="panel-title">
              ${Icons.target}
              Key Tasks
            </h3>
            <div class="missions-list">
              ${AppData.missions
                .map((mission) => {
                  const isCompleted = completedMissions.includes(mission.id);
                  return `
                  <div class="mission-item ${isCompleted ? "completed" : ""}" onclick="AppState.toggleMission(${mission.id})">
                    <div class="mission-content">
                      ${isCompleted ? Icons.checkCircle : Icons.target}
                      <span>${mission.title}</span>
                    </div>
                    <span class="mission-xp">${mission.xp} pts</span>
                  </div>
                `;
                })
                .join("")}
            </div>
          </div>

          <!-- Achievements -->
          <div class="achievements-panel glass">
            <h3 class="panel-title">
              ${Icons.trophy}
              Badges & Milestones
            </h3>
            <div class="achievements-grid">
              <div class="achievement-badge">
                ${Icons.star}
                <p>Data Analytics Expertise</p>
              </div>
              <div class="achievement-badge">
                ${Icons.star}
                <p>Insight Generation</p>
              </div>
              <div class="achievement-badge">
                ${Icons.star}
                <p>Real Estate Intelligence</p>
              </div>
              <div class="achievement-badge">
                ${Icons.star}
                <p>Business Process Enablement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  /**
   * Render the Projects page
   */
  renderProjects: () => {
    const activeCategory = AppState.activeCategory || "All";
    const categories = ["All", "TOWNSHIPS", "ASPIRE", "PRESTIGE", "FILIGREE"];

    const filteredProjects =
      activeCategory === "All"
        ? AppData.projects
        : AppData.projects.filter((p) => p.category === activeCategory);

    return `
      <div class="projects-page">
        <!-- Category Tabs -->
        <div class="category-tabs glass">
          ${categories
            .map((category) => {
              const count =
                category === "All"
                  ? AppData.projects.length
                  : AppData.projects.filter((p) => p.category === category)
                      .length;
              return `
              <button 
                class="category-tab ${activeCategory === category ? "active" : ""}"
                onclick="AppState.setCategory('${category}')"
              >
                <span>${category}</span>
                ${category !== "All" ? `<span class="badge-count">${count}</span>` : ""}
              </button>
            `;
            })
            .join("")}
        </div>

        <!-- Projects Grid -->
        <div class="projects-grid">
          ${filteredProjects
            .map(
              (project) => `
            <div class="project-card glass" onclick="AppState.selectProject(${project.id})">
              <!-- Project Image -->
              <div class="project-image" style="background: linear-gradient(135deg, ${project.color}, ${project.color}aa);">
                <img src="${project.image}" alt="${project.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.parentElement.innerHTML='<span style=&quot;font-size: 48px;&quot;>🏢</span>';" />
              </div>

              <!-- Project Info -->
              <div class="project-info">
                <h3>${project.name}</h3>
                <p class="project-location">
                  ${Icons.mapPin}
                  <span>${project.location}</span>
                </p>
                
                <div class="project-meta">
                  <span class="project-type">${project.type}</span>
                  ${project.status ? `<span class="status-badge status-${project.status.toLowerCase()}">${project.status}</span>` : ""}
                </div>

                <p class="project-description">${project.description}</p>

                ${
                  project.units && project.name !== "Filinvest City"
                    ? `
                  <div class="project-stats">
                    <div class="stat-item">
                      ${Icons.homeSmall}
                      <div>
                        <small>${["Fortune Hill", "Golf Ridge", "The Glades"].includes(project.name) ? "Lots" : "Units"}</small>
                        <strong>${project.units}</strong>
                      </div>
                    </div>
                    <div class="stat-item">
                      ${Icons.calendar}
                      <div>
                        <small>Turnover</small>
                        <strong>${project.completion}</strong>
                      </div>
                    </div>
                  </div>
                `
                    : ""
                }

                <div class="project-features">
                  ${project.features
                    .slice(0, 2)
                    .map((f) => `<span class="feature-tag">${f}</span>`)
                    .join("")}
                  ${project.features.length > 2 ? `<span class="feature-tag">+${project.features.length - 2} more</span>` : ""}
                </div>

                <button class="btn-view-details">
                  ${Icons.externalLink}
                  <span>View Details</span>
                </button>
              </div>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>
    `;
  },

  /**
   * Render Project Detail View
   */
  renderProjectDetail: (projectId) => {
    const project = AppData.projects.find((p) => p.id === projectId);
    if (!project) return '<div class="error">Project not found</div>';

    const hasUnits = project.unitTypes && project.unitTypes.length > 0;
    const hasAmenities = project.amenities && project.amenities.length > 0;
    const hasAwards = project.awards && project.awards.length > 0;

    return `
      <div class="project-detail">
        <!-- Back Button -->
        <button class="btn-back" onclick="AppState.selectProject(null)">
          ${Icons.arrowLeft}
          <span>Back to Projects</span>
        </button>

        <!-- Compact Header -->
        <div class="detail-header glass">
          <div class="detail-image" style="background: linear-gradient(135deg, ${project.color}, ${project.color}aa);">
            <img src="${project.image}" alt="${project.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px;" onerror="this.style.display='none'; this.parentElement.innerHTML='<span style=&quot;font-size: 56px;&quot;>🏢</span>';" />
          </div>
          <div class="detail-info">
            <div class="detail-title-row">
              <h1>${project.name}</h1>
              <span class="type-badge" style="background: ${project.color};">${project.type}</span>
            </div>
            <p class="detail-desc">${project.fullDescription || project.description}</p>
            <div class="detail-meta-strip">
              <div class="meta-chip">
                ${Icons.mapPin}
                <span>${project.location}</span>
              </div>
              ${
                project.completion && project.name !== "Filinvest City"
                  ? `
              <div class="meta-chip">
                ${Icons.calendar}
                <span>Turnover: <strong>${project.completion}</strong></span>
              </div>`
                  : ""
              }
              ${
                project.units && project.name !== "Filinvest City"
                  ? `
              <div class="meta-chip">
                ${Icons.homeSmall}
                <span>${["Fortune Hill", "Golf Ridge", "The Glades"].includes(project.name) ? "Lots" : "Units"}: <strong>${project.units}</strong></span>
              </div>`
                  : ""
              }
              ${
                project.status
                  ? `
              <div class="meta-chip meta-chip-status">
                ${Icons.star}
                <span><strong class="status-${project.status.toLowerCase()}">${project.status}</strong></span>
              </div>`
                  : ""
              }
            </div>
            ${
              hasAwards
                ? `
            <div class="detail-awards-inline">
              ${project.awards
                .map(
                  (award) => `
              <div class="award-inline">
                ${Icons.trophy}
                <span>${award}</span>
              </div>`,
                )
                .join("")}
            </div>`
                : ""
            }
          </div>
        </div>

        <!-- Tab Navigation -->
        <div class="detail-tabs-container glass">
          <div class="detail-tabs">
            <button class="detail-tab active" onclick="switchDetailTab(this, 'overview')" data-tab="overview">Overview</button>
            ${hasUnits ? `<button class="detail-tab" onclick="switchDetailTab(this, 'units')" data-tab="units">Unit Types & Pricing</button>` : ""}
            ${hasAmenities ? `<button class="detail-tab" onclick="switchDetailTab(this, 'amenities')" data-tab="amenities">Amenities</button>` : ""}
          </div>

          <!-- Tab: Overview -->
          <div class="detail-tab-content active" id="tab-overview">
            <div class="overview-two-col">
              <div class="overview-col">
                <h3>Key Features</h3>
                <div class="features-compact">
                  ${project.features
                    .map(
                      (f) => `
                  <div class="feature-item-compact">
                    <div class="feature-dot"></div>
                    <span>${f}</span>
                  </div>`,
                    )
                    .join("")}
                </div>
              </div>
              ${
                hasAmenities
                  ? `
              <div class="overview-col">
                <h3>Highlights</h3>
                <div class="features-compact">
                  ${project.amenities
                    .slice(0, 6)
                    .map(
                      (a) => `
                  <div class="feature-item-compact">
                    ${Icons.checkCircle}
                    <span>${a}</span>
                  </div>`,
                    )
                    .join("")}
                  ${project.amenities.length > 6 ? `<span class="see-more-link" onclick="switchDetailTab(document.querySelector('[data-tab=amenities]'), 'amenities')">+${project.amenities.length - 6} more amenities →</span>` : ""}
                </div>
              </div>`
                  : ""
              }
            </div>
          </div>

          <!-- Tab: Unit Types -->
          ${
            hasUnits
              ? `
          <div class="detail-tab-content" id="tab-units">
            <div class="units-table-wrapper">
              <table class="units-table">
                <thead>
                  <tr>
                    <th>Unit Type</th>
                    <th>Size</th>
                    <th>Price Range</th>
                  </tr>
                </thead>
                <tbody>
                  ${project.unitTypes
                    .map(
                      (unit) => `
                  <tr>
                    <td class="unit-name-cell"><strong>${unit.name}</strong></td>
                    <td>${unit.size}</td>
                    <td class="unit-price-cell">${unit.priceRange}</td>
                  </tr>`,
                    )
                    .join("")}
                </tbody>
              </table>
            </div>
          </div>`
              : ""
          }

          <!-- Tab: Amenities -->
          ${
            hasAmenities
              ? `
          <div class="detail-tab-content" id="tab-amenities">
            <div class="amenities-grid-compact">
              ${project.amenities
                .map(
                  (amenity) => `
              <div class="amenity-item-compact">
                ${Icons.checkCircle}
                <span>${amenity}</span>
              </div>`,
                )
                .join("")}
            </div>
          </div>`
              : ""
          }
        </div>
      </div>
    `;
  },

  /**
   * Render Organization Chart
   */
  renderOrganization: () => {
    const getInitials = (name) => {
      const parts = name.trim().split(/\s+/);
      if (parts.length === 0) return "";
      if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
      return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    };

    const orgByLevel = {
      0: AppData.organization.filter((p) => p.level === 0),
      1: AppData.organization.filter((p) => p.level === 1),
      2: AppData.organization.filter((p) => p.level === 2),
      3: AppData.organization.filter((p) => p.level === 3),
    };

    return `
      <div class="organization-page">
        <div class="organization-container glass">
          <div class="org-header">
            <h2>Organization Chart</h2>
            <p>Business Intelligence organization structure</p>
            <div class="org-count">${AppData.organization.length} contacts</div>
          </div>

          <div class="org-chart">
            <!-- Level 0: Executive Sponsor -->
            <div class="org-level">
              ${orgByLevel[0]
                .map(
                  (person) => `
                <div class="org-card">
                  <div class="org-avatar">${getInitials(person.name)}</div>
                  <h3>${person.name}</h3>
                  <p class="org-position">${person.position}</p>
                  <a href="mailto:${person.email}" class="org-email">${person.email}</a>
                </div>
              `,
                )
                .join("")}
            </div>

            <!-- Connecting Line -->
            <div class="org-connector"></div>

            <!-- Level 1: Department Head -->
            <div class="org-level">
              ${orgByLevel[1]
                .map(
                  (person) => `
                <div class="org-card">
                  <div class="org-avatar">${getInitials(person.name)}</div>
                  <h3>${person.name}</h3>
                  <p class="org-position">${person.position}</p>
                  <a href="mailto:${person.email}" class="org-email">${person.email}</a>
                </div>
              `,
                )
                .join("")}
            </div>

            <!-- Connecting Lines to Managers -->
            <div class="org-connector-multi"></div>

            <!-- Level 2: Managers -->
            <div class="org-level org-level-managers">
              ${orgByLevel[2]
                .map(
                  (person) => `
                <div class="org-card">
                  <div class="org-avatar">${getInitials(person.name)}</div>
                  <h3>${person.name}</h3>
                  <p class="org-position">${person.position}</p>
                  <a href="mailto:${person.email}" class="org-email">${person.email}</a>
                </div>
              `,
                )
                .join("")}
            </div>

            <!-- Connecting Lines to Specialists -->
            <div class="org-connector-specialists"></div>

            <!-- Level 3: Specialists -->
            <div class="org-level org-level-specialists">
              ${orgByLevel[3]
                .map((person) => {
                  const reportsToNames = person.reportsTo
                    ? person.reportsTo
                        .map(
                          (id) =>
                            AppData.organization.find((p) => p.id === id)?.name,
                        )
                        .filter(Boolean)
                        .join(", ")
                    : "";
                  return `
                  <div class="org-card">
                    <div class="org-avatar">${getInitials(person.name)}</div>
                    <h3>${person.name}</h3>
                    <p class="org-position">${person.position}</p>
                    ${reportsToNames ? `<p class="reports-to">Reports to: ${reportsToNames}</p>` : ""}
                    <a href="mailto:${person.email}" class="org-email">${person.email}</a>
                  </div>
                `;
                })
                .join("")}
            </div>
          </div>
        </div>
      </div>
    `;
  },

  /**
   * Render Resources page
   */
  renderResources: () => {
    const activeAccordion = AppState.activeAccordion;

    // Map resource IDs to appropriate icons
    const getResourceIcon = (id) => {
      const iconMap = {
        1: Icons.clipboard, // Building Permit Process
        2: Icons.fileCheck, // Development Permit
        3: Icons.shield, // License to Sell
        4: Icons.route, // Road User Permit
        5: Icons.clipboardCheck, // Locator/Tenant Clearance
        6: Icons.partyPopper, // Event Permit Form
        7: Icons.megaphone, // Filinvest City Event Clearance
        8: Icons.building, // Open House Events
        9: Icons.calendar, // Event Forms (External)
        10: Icons.monitor, // ETC Plus
        101: Icons.home, // The Glades
        102: Icons.home, // Celestia
        103: Icons.home, // Arborage
        104: Icons.home, // Prom II - RFO
        105: Icons.home, // Prom II - Terrace Homes
      };
      return iconMap[id] || Icons.fileText;
    };

    const renderAccordion = (resource, index) => {
      const isActive = activeAccordion === index;
      const colors = resource.color.split(" ");
      return `
        <div class="accordion-item ${isActive ? "active" : ""}">
          <div class="accordion-header" onclick="AppState.toggleAccordion(${index})">
            <div class="accordion-title">
              <div class="accordion-icon" style="background: linear-gradient(135deg, ${colors[0]}, ${colors[1]});">
                ${getResourceIcon(resource.id)}
              </div>
              <span>${resource.title}</span>
            </div>
            <div class="accordion-chevron">
              ${Icons.chevronDown}
            </div>
          </div>
          <div class="accordion-content" style="display: ${isActive ? "block" : "none"};">
            ${resource.sections
              .map(
                (section) => `
              <div class="content-section">
                <h4>${section.title}</h4>
                ${section.content ? `<p>${section.content}</p>` : ""}
                ${
                  section.steps
                    ? `
                  <ol class="steps-list">
                    ${section.steps.map((step) => `<li>${step}</li>`).join("")}
                  </ol>
                `
                    : ""
                }
              </div>
            `,
              )
              .join("")}
          </div>
        </div>
      `;
    };

    // Offset for lot project accordion indices
    const lotOffset = 1000;

    const renderLotAccordion = (project, index) => {
      const isActive = activeAccordion === lotOffset + index;
      const colors = project.color.split(" ");
      return `
        <div class="accordion-item ${isActive ? "active" : ""}">
          <div class="accordion-header" onclick="AppState.toggleAccordion(${lotOffset + index})">
            <div class="accordion-title">
              <div class="accordion-icon" style="background: linear-gradient(135deg, ${colors[0]}, ${colors[1]});">
                ${getResourceIcon(project.id)}
              </div>
              <span>${project.title}</span>
            </div>
            <div class="accordion-chevron">
              ${Icons.chevronDown}
            </div>
          </div>
          <div class="accordion-content" style="display: ${isActive ? "block" : "none"};">
            <div class="content-section">
              <h4>Lot Details</h4>
              <div class="lot-details-grid">
                ${Object.entries(project.details)
                  .map(
                    ([label, value]) => `
                <div class="lot-detail-item">
                  <span class="lot-detail-label">${label}</span>
                  <span class="lot-detail-value">${value}</span>
                </div>`,
                  )
                  .join("")}
              </div>
            </div>
            <div class="content-section">
              <h4>Standard Payment Schemes</h4>
              <div class="lot-details-grid">
                ${Object.entries(project.paymentSchemes)
                  .map(
                    ([label, value]) => `
                <div class="lot-detail-item">
                  <span class="lot-detail-label">${label}</span>
                  <span class="lot-detail-value">${value.replace(/\n/g, "<br>")}</span>
                </div>`,
                  )
                  .join("")}
              </div>
            </div>
          </div>
        </div>
      `;
    };

    return `
      <div class="resources-page">
        <!-- Permits Section -->
        <div class="resources-section glass">
          <h2 class="section-header">Permits Applications</h2>
          <div class="accordion-container">
            ${AppData.resources.permits.map((resource, index) => renderAccordion(resource, index)).join("")}
          </div>
        </div>

        <!-- Events Section -->
        <div class="resources-section glass">
          <h2 class="section-header">Events</h2>
          <div class="accordion-container">
            ${AppData.resources.events
              .map((resource, index) =>
                renderAccordion(
                  resource,
                  index + AppData.resources.permits.length,
                ),
              )
              .join("")}
          </div>
        </div>

        <!-- Project Payment Schemes Section -->
        <div class="resources-section glass">
          <h2 class="section-header">Project Payment Schemes</h2>
          <div class="accordion-container">
            ${AppData.lotProjects.map((project, index) => renderLotAccordion(project, index)).join("")}
          </div>
        </div>

        <!-- Digital Tools Section -->
        <div class="resources-section glass">
          <h2 class="section-header">Digital Tools</h2>
          <div class="accordion-container">
            ${AppData.resources.digitalTools
              .map((resource, index) =>
                renderAccordion(
                  resource,
                  index +
                    AppData.resources.permits.length +
                    AppData.resources.events.length,
                ),
              )
              .join("")}
          </div>
        </div>
      </div>
    `;
  },

  /**
   * Render Links page
   */
  renderLinks: () => {
    // Map link IDs to appropriate icons
    const getLinkIcon = (id) => {
      const iconMap = {
        "etc-plus": Icons.calculator, // ETC Plus
        "sapphire-ims": Icons.database, // Sapphire IMS
        darwinbox: Icons.users, // Darwinbox HR
        ramco: Icons.briefcase, // Ramco
        ourlink: Icons.layers, // OurLink
        "smartsheet-form": Icons.formInput, // PR Form
        "rfp-form": Icons.shoppingCart, // RFP Form
      };
      return iconMap[id] || Icons.link;
    };

    return `
      <div class="links-page">
        <div class="links-container glass">
          <div class="links-header">
            <h2>Quick Links</h2>
            <p>Quick access to commonly used Filinvest systems and forms</p>
          </div>

          <div class="links-grid">
            ${AppData.links
              .map((link) => {
                const colors = link.color.split(" ");
                return `
              <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="link-card">
                <div class="link-icon" style="background: linear-gradient(135deg, ${colors[0]}, ${colors[1]});">
                  ${getLinkIcon(link.id)}
                </div>
                <div class="link-content">
                  <div class="link-title">
                    <h3>${link.name}</h3>
                    ${Icons.externalLink}
                  </div>
                  <p class="link-description">${link.description}</p>
                </div>
              </a>
              `;
              })
              .join("")}
          </div>
        </div>
      </div>
    `;
  },

  /**
   * Render Map Explorer page
   */
  renderMapExplorer: () => {
    return `
      <div class="map-explorer-page">
        <div class="map-header glass">
          <div>
            <h1>Filinvest City Virtual Tour</h1>
            <p>Map Explorer • Interactive view</p>
          </div>
          <button onclick="window.open('https://tours.exsight360.com/filinvest/city/index.html', '_blank')" class="btn-primary">
            ${Icons.externalLink}
            <span>Open External</span>
          </button>
        </div>
        <div class="map-container">
          <iframe 
            src="https://tours.exsight360.com/filinvest/city/index.html" 
            class="map-iframe"
            title="Filinvest City Virtual Tour"
            allow="fullscreen; gyroscope; accelerometer"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    `;
  },
};
