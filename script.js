(() => {
  'use strict';
  const d = window.PORTFOLIO;
  if (!d) return;
  const $ = (id) => document.getElementById(id);
  const el = (tag, className, content) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (content !== undefined) node.textContent = content;
    return node;
  };
  const append = (parent, ...children) => children.forEach(child => parent.append(child));
  const tags = (items, className = 'tag') => {
    const wrap = el('div', 'tags');
    items.forEach(s => wrap.append(el('span', className, s)));
    return wrap;
  };

  $('heroEyebrow').textContent = d.heroEyebrow;
  $('heroDescription').textContent = d.heroDescription;
  $('availability').textContent = d.availability;
  $('location').textContent = d.location;
  $('copyrightYear').textContent = new Date().getFullYear();
  $('footerEmail').href = `mailto:${d.email}`;
  $('footerLinkedin').href = d.linkedin;

  d.about.forEach(p => $('aboutParagraphs').append(el('p', '', p)));
  d.focus.forEach(item => {
    const wrap = el('div', 'focus-item');
    append(wrap, el('strong', '', item.title), el('p', '', item.text));
    $('focusItems').append(wrap);
  });

  d.experience.forEach(job => {
    const section = el('article', 'experience-entry');
    const info = el('div', 'experience-info');
    append(info, el('h3', 'experience-title', job.role), el('div', 'experience-company', job.company), el('div', 'experience-place', job.place));
    const ul = el('ul', 'experience-points');
    job.points.forEach(p => ul.append(el('li', '', p)));
    append(info, ul, tags(job.tags));
    append(section, el('div', 'experience-date', job.date), info);
    $('experienceList').append(section);
  });

  function openDetails(project) {
    const dlg = $('projectDialog');
    const content = $('dialogContent');
    content.replaceChildren();
    append(content, el('div', 'dialog-kicker', `${project.number} / ${project.category}`), el('h3', '', project.title), el('p', '', project.summary), el('h4', '', `Role: ${project.role}`));
    const ul = el('ul');
    project.details.forEach(point => ul.append(el('li', '', point)));
    append(content, ul, tags(project.tech));
    dlg.showModal();
  }
  const artworkSymbol = { map:'⌖', leaf:'✳', search:'⌕' };
  function renderProjects(filter='All') {
    const grid = $('projectsGrid');
    grid.replaceChildren();
    const selected = d.projects.filter(p => filter === 'All' || p.category === filter);
    selected.forEach(project => {
      const card = el('article', 'project-card');
      const visual = el('div', `project-visual ${project.accent}`);
      visual.setAttribute('aria-hidden', 'true');
      append(visual, el('div', 'visual-top', 'SELECTED PROJECT'), el('span', `visual-symbol ${project.visual}`, artworkSymbol[project.visual] || '✳'), el('div', 'visual-bottom', `${project.number} / 2022 — 2023`));
      const body = el('div', 'project-copy');
      append(body, el('span', 'project-category', project.category.toUpperCase()), el('h3', '', project.title), el('p', '', project.summary), el('div', 'project-tech', project.tech.slice(0, 4).join(' · ')));
      const button = el('button', 'project-detail-button');
      button.type='button';
      button.setAttribute('aria-label', `Read details about ${project.title}`);
      append(button, document.createTextNode('VIEW CASE STUDY'), el('span', '', '↗'));
      button.addEventListener('click', () => openDetails(project));
      body.append(button);
      append(card, visual, body);
      grid.append(card);
    });
    if (!selected.length) grid.append(el('p', '', 'No projects in this category yet.'));
  }
  renderProjects();
  document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.filter-button').forEach(b => {b.classList.toggle('active', b === button);b.setAttribute('aria-pressed', b === button ? 'true':'false');});
      renderProjects(button.dataset.filter);
    });
  });
  $('dialogClose').addEventListener('click', () => $('projectDialog').close());
  $('projectDialog').addEventListener('click', (event) => {
    if (event.target === $('projectDialog')) $('projectDialog').close();
  });

  d.skills.forEach(group => {
    const row = el('div', 'skill-group');
    const pills = el('div', 'skill-pills');
    group.items.forEach(skill => pills.append(el('span', 'skill-pill', skill)));
    append(row, el('h4', '', group.category), pills);
    $('skillsGroups').append(row);
  });
  d.education.forEach(item => {
    const row = el('article', 'edu-entry');
    const info = el('div');
    append(info, el('h4', '', item.degree), el('p', '', item.institution), el('p', '', item.location));
    append(row, info, el('span', 'edu-date', item.date));
    $('educationItems').append(row);
  });
  d.certifications.forEach(item => {
    const row = el('article', 'edu-entry');
    const info = el('div');
    append(info, el('h4', '', item.title), el('p', '', item.issuer));
    append(row, info, el('span', 'edu-date', 'CERT.'));
    $('certificationItems').append(row);
  });


  const nav = $('navLinks');
  const menu = $('menuToggle');
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open menu');
  }));
  let toastTimeout;
  function toast(message) {
    const node = $('toast');node.textContent=message;node.classList.add('show');
    clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>node.classList.remove('show'),2200);
  }
  $('copyEmail').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(d.email);
      toast('Email copied to clipboard');
    } catch {
      const temp=document.createElement('textarea');temp.value=d.email;temp.style.position='fixed';temp.style.opacity='0';document.body.append(temp);temp.select();
      try { if (!document.execCommand('copy')) throw new Error('Copy unavailable'); toast('Email copied to clipboard'); }
      catch { toast(`Email: ${d.email}`); }
      finally { temp.remove(); }
    }
  });
})();
