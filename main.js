(function () {
  var cfg = window.SITE_CONFIG || {};
  var projects = window.PORTFOLIO_PROJECTS || [];

  // --- header + hero text from config ---
  var brandLink = document.getElementById("brandLink");
  if (brandLink && cfg.brandInitials) brandLink.textContent = cfg.brandInitials;

  var heroSub = document.getElementById("heroSub");
  if (heroSub && cfg.heroSubtext) heroSub.textContent = cfg.heroSubtext;

  // --- footer from config ---
  var footerName = document.getElementById("footerName");
  if (footerName && cfg.name) footerName.textContent = cfg.name;

  var footerTag = document.getElementById("footerTag");
  if (footerTag && cfg.tagline) footerTag.textContent = cfg.tagline;

  var footerYear = document.getElementById("footerYear");
  if (footerYear) footerYear.textContent = "© " + (cfg.year || new Date().getFullYear());

  var footerLinks = document.getElementById("footerLinks");
  if (footerLinks) {
    var linksHtml = "";
    if (cfg.email) {
      linksHtml += '<a href="mailto:' + cfg.email + '">' + cfg.email + "</a>";
    }
    (cfg.socials || []).forEach(function (social) {
      linksHtml += '<a href="' + social.url + '" target="_blank" rel="noopener">' + social.label + "</a>";
    });
    footerLinks.innerHTML = linksHtml;
  }

  // --- project cards ---
  var grid = document.getElementById("workGrid");
  if (grid) {
    var html = "";
    projects.forEach(function (project) {
      var initial = (project.name || "?").trim().charAt(0).toUpperCase();
      html +=
        '<article class="window-card project-card">' +
          '<div class="window-chrome">' +
            '<span class="dot" style="background:var(--' + project.accent + ')"></span>' +
            '<span class="dot" style="background:var(--line)"></span>' +
            '<span class="dot" style="background:var(--line)"></span>' +
          "</div>" +
          '<div class="window-body project-body" style="--accent: var(--' + project.accent + ')">' +
            '<span class="project-badge"><span class="project-monogram">' + initial + "</span></span>" +
          "</div>" +
          '<div class="project-meta">' +
            '<span class="project-tag" style="--accent: var(--' + project.accent + ')">' + project.category + "</span>" +
            '<h3 class="project-name">' + project.name + "</h3>" +
            '<p class="project-desc">' + project.description + "</p>" +
          "</div>" +
        "</article>";
    });
    grid.innerHTML = html;
  }
})();
