/*
 * ==============================================================
 *  DEVELOPED BY DARSHAN KUMAR
 *  Core React Rendering & Interaction Logic
 *  All rights reserved © 2026 Darshan Kumar
 * ==============================================================
 */
const { useEffect, useMemo, useState } = React;


const getYoutubeId = (url) => {
  const match = url.match(/(?:youtu\.be\/|v=|embed\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
};

const getSocialIcon = (platform) => {
  const norm = platform.toLowerCase();
  if (norm.includes("youtube")) {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
        <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.107C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.387.51A3.003 3.003 0 0 0 .502 6.164C0 8.07 0 12 0 12s0 3.93.502 5.837a3.003 3.003 0 0 0 2.11 2.107c1.882.51 9.388.51 9.388.51s7.505 0 9.388-.51a3.007 3.007 0 0 0 2.11-2.107C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    );
  }
  if (norm.includes("instagram")) {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    );
  }
  if (norm.includes("linkedin")) {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  }
  if (norm.includes("facebook")) {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    );
  }
  return <span>{platform[0]}</span>;
};

const getServiceIcon = (icon) => {
  const size = 22;
  switch (icon) {
    case "tv":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
          <line x1="17" y1="2" x2="12" y2="7" />
          <line x1="7" y1="2" x2="12" y2="7" />
        </svg>
      );
    case "mic":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
          <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
          <line x1="12" y1="19" x2="12" y2="22" />
        </svg>
      );
    case "podcast":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="2" />
          <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
        </svg>
      );
    case "award":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      );
    case "volume":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
        </svg>
      );
    case "edit":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4z" />
        </svg>
      );
    case "film":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
          <line x1="7" y1="2" x2="7" y2="22" />
          <line x1="17" y1="2" x2="17" y2="22" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <line x1="2" y1="7" x2="7" y2="7" />
          <line x1="2" y1="17" x2="7" y2="17" />
          <line x1="17" y1="17" x2="22" y2="17" />
          <line x1="17" y1="7" x2="22" y2="7" />
        </svg>
      );
    case "play":
      return (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style={{ display: "inline-block", verticalAlign: "middle" }}>
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      );
    case "download":
      return (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "middle" }}>
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "middle", marginRight: "8px" }}>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      );
    case "phone":
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "middle", marginRight: "8px" }}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );
    case "link":
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "middle", marginRight: "8px" }}>
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      );
    case "location":
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "middle", marginRight: "8px" }}>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "send":
      return (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "middle", marginLeft: "8px" }}>
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      );
    default:
      return null;
  }
};

const mediaFromData = () => {
  const podcasts = portfolioData.podcasts.map((item) => {
    const id = getYoutubeId(item.url);
    const isInstagram = item.url.includes("instagram.com/reel/");
    const isFacebook = item.url.includes("facebook.com");
    let embedUrl = item.url;
    if (id) {
      embedUrl = `https://www.youtube.com/embed/${id}`;
    } else if (isInstagram) {
      embedUrl = item.url;
    } else if (isFacebook) {
      embedUrl = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(item.url)}&show_text=0`;
    }
    return {
      ...item,
      category: "Podcasts",
      platform: isInstagram ? "Instagram Reel" : (isFacebook ? "Facebook Video" : "YouTube"),
      embed: embedUrl,
      thumb: item.thumb ? item.thumb : (isInstagram ? "assets/images/social-1.svg" : (id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : "assets/images/social-1.svg"))
    };
  });

  const other = portfolioData.portfolio.map((item, index) => {
    const id = getYoutubeId(item.url);
    const isFacebook = item.url.includes("facebook.com");
    let embedUrl = item.url;
    if (id) {
      embedUrl = `https://www.youtube.com/embed/${id}`;
    } else if (isFacebook) {
      embedUrl = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(item.url)}&show_text=0`;
    }
    return {
      ...item,
      embed: embedUrl,
      thumb: item.thumb ? item.thumb : (id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : "assets/images/social-1.svg")
    };
  });

  return [...podcasts, ...other];
};

function App() {
  const [modalMedia, setModalMedia] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [contactStatus, setContactStatus] = useState("");
  const [typed, setTyped] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const media = useMemo(mediaFromData, []);
  const categories = useMemo(() => ["All", ...new Set(media.map((item) => item.category))], [media]);
  const visibleMedia = activeCategory === "All" ? media : media.filter((item) => item.category === activeCategory);
  const featuredReels = portfolioData.featuredReels;

  const [timecode, setTimecode] = useState("00:00:00:00");
  const [flashActive, setFlashActive] = useState(true);

  useEffect(() => {
    const flashTimer = setTimeout(() => setFlashActive(false), 600);
    return () => clearTimeout(flashTimer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty("--cursor-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${e.clientY}px`);

      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const mx = (e.clientX - cx) / cx;
      const my = (e.clientY - cy) / cy;
      document.documentElement.style.setProperty("--mx", mx);
      document.documentElement.style.setProperty("--my", my);

      // 3D Card Tilt Parallax effect
      const card = document.querySelector('.hero-visual-card');
      const container = document.querySelector('.hero-visual');
      if (card && container) {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const tiltX = (y / (rect.height / 2)) * -10; // Max tilt 10 degrees
        const tiltY = (x / (rect.width / 2)) * 10;
        card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      }
    };

    const handleMouseOver = (e) => {
      const isHovered = e.target.closest("a, button, .reel-tile, .media-card, [role='button']");
      document.body.classList.toggle("cursor-hover", !!isHovered);
    };

    const handleMouseLeave = () => {
      const card = document.querySelector('.hero-visual-card');
      if (card) card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const d = new Date();
      const h = String(d.getHours()).padStart(2, "0");
      const m = String(d.getMinutes()).padStart(2, "0");
      const s = String(d.getSeconds()).padStart(2, "0");
      const f = String(Math.floor(d.getMilliseconds() / 40)).padStart(2, "0");
      setTimecode(`${h}:${m}:${s}:${f}`);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const submitInquiry = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const inquiry = form.get("inquiry");
    const message = form.get("message");
    const subject = encodeURIComponent(`${inquiry} | ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nInquiry: ${inquiry}\n\n${message}`);
    setContactStatus("Opening Gmail compose...");
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.profile.email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
  };

  useEffect(() => {
    const words = portfolioData.profile.typewriter;
    const current = words[wordIndex % words.length];
    const done = typed === current;
    const delay = done ? 1200 : 58;
    const timer = setTimeout(() => {
      if (done) {
        setTyped("");
        setWordIndex((value) => value + 1);
      } else {
        setTyped(current.slice(0, typed.length + 1));
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [typed, wordIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          if (entry.target.dataset.count) {
            animateCount(entry.target);
          }
        }
      });
    }, { threshold: 0.16 });

    document.querySelectorAll(".reveal, [data-count]").forEach((el) => observer.observe(el));

    const onScroll = () => {
      document.body.classList.toggle("scrolled", window.scrollY > 60);
      $(".back-top").toggleClass("show", window.scrollY > 500);
      const sections = $("section[id]");
      let current = "";
      sections.each(function () {
        if (window.scrollY >= $(this).offset().top - 170) current = this.id;
      });
      $(".nav-link").removeClass("active");
      $(`.nav-link[href="#${current}"]`).addClass("active");
    };
    $(window).on("scroll", onScroll);
    onScroll();

    return () => {
      observer.disconnect();
      $(window).off("scroll", onScroll);
    };
  }, []);

  const animateCount = (el) => {
    if (el.dataset.done) return;
    el.dataset.done = "true";
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    let start = 0;
    const step = () => {
      start += Math.max(1, Math.ceil(target / 42));
      el.textContent = `${start >= target ? target : start}${start >= target ? suffix : ""}`;
      if (start < target) requestAnimationFrame(step);
    };
    step();
  };

  return (
    <>
      <nav className="topnav">
        <a className="brand" href="#home">Priya Suyal</a>
        <a className="availability on-air-btn" href="#contact">
          <span className="on-air-lamp"><i className="neon-pulse-dot"></i> ON AIR</span>
          <span className="on-air-text">Available for assignments</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          <span></span><span></span>
        </button>
        <div className={`navlinks ${menuOpen ? "open" : ""}`}>
          {["about", "experience", "portfolio", "achievements", "contact"].map((id) => (
            <a className="nav-link" href={`#${id}`} onClick={() => setMenuOpen(false)} key={id}>{id}</a>
          ))}
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-grid">
          <div className="hero-copy reveal">
            <p className="kicker">Broadcast journalist / anchor / creator</p>
            <h1>Priya <span className="surname">Suyal</span></h1>
            <p className="profile-title">{portfolioData.profile.title}</p>
            <h2><span>{typed}</span><b>|</b></h2>
            {portfolioData.profile.positioningStatement && (
              <p className="hero-tagline">{portfolioData.profile.positioningStatement}</p>
            )}
            <p className="hero-text">{portfolioData.profile.summary}</p>
            <div className="hero-actions">
              <a href="#showreel" className="btn-primary">Watch Showreel <span className="action-icon">{getServiceIcon("play")}</span></a>
              <a href="#portfolio" className="btn-ghost">Selected Work</a>
              <a href={portfolioData.profile.resumeUrl} className="btn-ghost" download>Resume <span className="action-icon">{getServiceIcon("download")}</span></a>
              <a href="#contact" className="btn-ghost">Book Priya</a>
            </div>
            <div className="hero-metrics">
              {portfolioData.profile.heroStats.map((item) => (
                <article className="metric-card" key={item.label}>
                  <strong>
                    <span data-count={item.value} data-suffix={item.suffix}>0</span>
                  </strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>
          <div className="hero-visual reveal" aria-hidden="true">
            <div className="hero-orbit hero-orbit-outer"></div>
            <div className="hero-orbit hero-orbit-inner"></div>
            <div className="hero-visual-stack">
              <div className="hero-visual-card">
                <div className="scanline-overlay"></div>
                <div className="cam-bracket cam-tl"></div>
                <div className="cam-bracket cam-tr"></div>
                <div className="cam-bracket cam-bl"></div>
                <div className="cam-bracket cam-br"></div>
                <div className="feed-telemetry">
                  <span className="live-tag"><i className="live-dot"></i>LIVE FEED</span>
                  <span className="timecode">{timecode}</span>
                  <span className="signal-bar">REC 1080P</span>
                </div>
                <img className="hero-portrait" src={portfolioData.profile.photoUrl} alt={`${portfolioData.profile.name} profile portrait`} />
              </div>
            </div>
            <div className="hero-orbit-dot"></div>
          </div>
        </div>
      </section>

      {/* Netflix Widescreen Spotlight Section */}
      <section id="spotlight" className="featured-spotlight reveal">
        <div className="scanline-overlay"></div>
        <div className="cam-bracket cam-tl"></div>
        <div className="cam-bracket cam-tr"></div>
        <div className="cam-bracket cam-bl"></div>
        <div className="cam-bracket cam-br"></div>
        <div className="spotlight-split-container">
          <div className="spotlight-content">
            <div className="spotlight-header-meta">
              <span className="spotlight-badge">{portfolioData.featuredSpotlight.category} Spotlight</span>
              <span className="spotlight-duration">{portfolioData.featuredSpotlight.duration}</span>
            </div>
            <h2>{portfolioData.featuredSpotlight.title}</h2>
            <p>{portfolioData.featuredSpotlight.description}</p>
            <button
              className="btn-primary"
              onClick={() => setModalMedia({
                title: portfolioData.featuredSpotlight.title,
                embed: portfolioData.featuredSpotlight.videoUrl,
                url: portfolioData.featuredSpotlight.videoUrl
              })}
            >
              Watch Coverage {getServiceIcon("play")}
            </button>
          </div>
          <div className="spotlight-visual-side">
            <img src={portfolioData.featuredSpotlight.thumbnail} alt="Featured Spotlight" className="spotlight-side-img" />
            <div className="spotlight-side-fade"></div>
          </div>
        </div>
      </section>

      <Section id="showreel" title="Showreel & Highlights" eyebrow="On Air">
        <p className="section-note">A first look at Priya's voice, pacing, and presence across hosted conversations and camera-facing storytelling.</p>
        <div className="reel-scroll-wrapper">
          {featuredReels.map((item, index) => (
            <article
              className="reel-tile reveal"
              key={item.title}
              onClick={() => setModalMedia({ ...item, embed: item.src })}
              onKeyDown={(event) => event.key === "Enter" && setModalMedia({ ...item, embed: item.src })}
              onMouseEnter={(e) => {
                const video = e.currentTarget.querySelector('video');
                if (video) video.play().catch(() => { });
              }}
              onMouseLeave={(e) => {
                const video = e.currentTarget.querySelector('video');
                if (video) {
                  video.pause();
                  video.currentTime = 0;
                }
              }}
              role="button"
              tabIndex="0"
            >
              <div className="scanline-overlay"></div>
              <div className="cam-bracket cam-tl"></div>
              <div className="cam-bracket cam-tr"></div>
              <div className="cam-bracket cam-bl"></div>
              <div className="cam-bracket cam-br"></div>
              <video src={item.src} muted loop playsInline preload="metadata"></video>
              <div className="reel-info">
                <span>0{index + 1} / {item.role}</span>
                <h3>{item.title}</h3>
                <p>{item.platform} <b className="play-badge-icon">{getServiceIcon("play")}</b></p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="about" title="Editorial Presence" eyebrow="About Priya">
        <div className="about-layout">
          <div className="about-left">
            <p className="lead">Priya Suyal is an industry-ready journalism and mass communication graduate with a strong command of anchoring, field reporting, podcast hosting, voice work, event presentation, and public storytelling.</p>
            <div className="about-highlight-quote">
              “The truth is not just a collection of facts; it is the human story behind them.”
            </div>
          </div>
          <div className="about-right">
            <div className="about-info-group">
              <h4>Coverage Areas</h4>
              <p>Politics, Ground Realities, Community Stories, Public Accountability, Social Advocacy</p>
            </div>
            <div className="about-info-group">
              <h4>Featured Topics</h4>
              <p>Civic Issues, Youth Governance, Media Ethics, Investigative Journalism</p>
            </div>
            <div className="about-info-group">
              <h4>Expertise & Platforms</h4>
              <p>Television Broadcast, Digital News Channels, Podcast Audio Production, Event Anchoring</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="education" title="Education Timeline" eyebrow="Foundation">
        <Timeline items={portfolioData.education.map((item) => ({ title: item.institution, meta: item.meta, text: item.detail }))} />
      </Section>

      <Section id="experience" title="Newsroom Experience" eyebrow="Work">
        <Timeline items={portfolioData.experience.map((item) => ({ title: item.role, meta: item.company, text: item.text }))} />
      </Section>

      {/* Cinematic Visual Break with Signature Quote */}
      <section className="visual-break-quote reveal">
        <div className="quote-backdrop-filter"></div>
        <div className="visual-break-content">
          <blockquote>
            “Journalism isn't about being first. It's about being truthful.”
          </blockquote>
          <cite>— Priya Suyal</cite>
        </div>
      </section>

      <Section id="skills" title="Broadcast Skillset" eyebrow="Capabilities">
        <div className="skills-grid">
          {portfolioData.skills.map((group) => (
            <article className="skill-panel reveal" key={group.group}>
              <h3>{group.group}</h3>
              {group.items.map((skill) => <Progress skill={skill} key={skill.name} />)}
            </article>
          ))}
        </div>
      </Section>

      <Section id="services" title="Media Services" eyebrow="Available For">
        <div className="service-grid">
          {portfolioData.services.map((service, i) => (
            <article className="service-card reveal" key={service.title}>
              <div className="service-icon-row">
                <span>0{i + 1}</span>
                <i className="service-badge">{getServiceIcon(service.icon)}</i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="portfolio" title="Featured Media Portfolio" eyebrow="Streaming Gallery">
        <p className="section-note">A tighter view of the strongest broadcast clips, podcast conversations, and live appearances.</p>
        <div className="filter-bar">
          {categories.map((category) => (
            <button className={activeCategory === category ? "active" : ""} onClick={() => setActiveCategory(category)} key={category} type="button">
              {category}
            </button>
          ))}
        </div>
        <div className="media-grid">
          {visibleMedia.map((item, index) => <MediaCard item={item} onOpen={() => setModalMedia(item)} isFeatured={index === 0} key={`${item.category}-${item.title}`} />)}
        </div>
      </Section>

      <Section id="achievements" title="Awards & Recognition" eyebrow="Achievements">
        <div className="counter-strip">
          <Stat value="10" suffix=" +" label="Competition wins" />
          <Stat value="08" label="Podcast features" />
          <Stat value="05" label="Media roles" />
        </div>
        <div className="achievement-grid">
          {portfolioData.achievements.map((item) => (
            <a className="achievement-card reveal" href={item.url} target="_blank" rel="noreferrer" key={item.title}>
              <span>{item.type}</span><h3>{item.title}</h3><p>{item.description}</p>
            </a>
          ))}
        </div>
      </Section>

      <Section id="social" title="Social Media Showcase" eyebrow="Platforms">
        <div className="social-grid">
          {Object.values(portfolioData.socialLinks).map((item) => (
            <a href={item.url} className="social-card reveal" target="_blank" rel="noreferrer" key={item.label}>
              <span className="social-icon-wrapper">{getSocialIcon(item.label)}</span>
              <h3>{item.label}</h3>
              <p>{item.metric}</p>
            </a>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Signature Projects" eyebrow="Production Work">
        <div className="projects-layout-container">
          {/* Large Featured Project */}
          {portfolioData.projects.slice(0, 1).map((project) => (
            <article className="project-card project-card-featured reveal" key={project.title}>
              {project.image && (
                <div className="project-visual-wrapper">
                  <div className="scanline-overlay"></div>
                  <div className="cam-bracket cam-tl"></div>
                  <div className="cam-bracket cam-tr"></div>
                  <div className="cam-bracket cam-bl"></div>
                  <div className="cam-bracket cam-br"></div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </div>
              )}
              <div className="project-info-wrapper">
                <span className="project-badge-tag">Featured Project</span>
                <p className="project-role">{project.role}</p>
                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>
              </div>
            </article>
          ))}

          {/* Smaller Projects Subgrid */}
          <div className="projects-subgrid">
            {portfolioData.projects.slice(1).map((project) => (
              <article className="project-card reveal" key={project.title}>
                {project.image && (
                  <div className="project-visual-wrapper">
                    <div className="scanline-overlay"></div>
                    <div className="cam-bracket cam-tl"></div>
                    <div className="cam-bracket cam-tr"></div>
                    <div className="cam-bracket cam-bl"></div>
                    <div className="cam-bracket cam-br"></div>
                    <img src={project.image} alt={project.title} loading="lazy" />
                  </div>
                )}
                <div className="project-info-wrapper">
                  <p className="project-role">{project.role}</p>
                  <h3>{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <section id="contact" className="contact-section reveal">
        {/* Left Column: Let's Connect */}
        <div className="contact-info">
          <h2>Let's tell stories that matter.</h2>
          <p className="contact-subtitle">Open for key interviews, podcast hosting invitations, broadcast assignments, and speaking sessions.</p>

          <div className="contact-details">
            <div className="detail-item">
              <span className="detail-icon">{getServiceIcon("mail")}</span>
              <a href={`mailto:${portfolioData.profile.email}`}>{portfolioData.profile.email}</a>
            </div>
            <div className="detail-item">
              <span className="detail-icon">{getServiceIcon("phone")}</span>
              <a href={`tel:${portfolioData.profile.phone}`}>{portfolioData.profile.phone}</a>
            </div>
            <div className="detail-item">
              <span className="detail-icon">{getServiceIcon("location")}</span>
              <span>{portfolioData.profile.location || "Delhi, India"}</span>
            </div>
          </div>

          <div className="contact-socials">
            {Object.entries(portfolioData.socialLinks).map(([key, value]) => (
              <a
                key={key}
                href={value.url}
                target="_blank"
                rel="noreferrer"
                className="social-circle"
                aria-label={value.label}
              >
                {getSocialIcon(key)}
              </a>
            ))}
          </div>
        </div>

        {/* Middle Column: Contact Form */}
        <form className="contact-form" onSubmit={submitInquiry}>
          <input name="name" type="text" placeholder="Your Name" aria-label="Your Name" required />
          <input name="email" type="email" placeholder="Your Email" aria-label="Your Email" required />
          <select name="inquiry" aria-label="Inquiry type" defaultValue="">
            <option value="" disabled hidden>Purpose</option>
            <option>Anchoring inquiry</option>
            <option>Reporting opportunity</option>
            <option>Podcast collaboration</option>
            <option>Media production</option>
          </select>
          <textarea name="message" placeholder="Your Message" aria-label="Your Message" required></textarea>
          <button className="btn-primary" type="submit">
            Send Message {getServiceIcon("send")}
          </button>
          {contactStatus && <p className="form-status" role="status">{contactStatus}</p>}
        </form>

        {/* Right Column: Portrait Card with signature */}
        <div className="contact-portrait-card">
          <img src="assets/images/priya_studio_connect.png" alt="Priya Suyal Studio Portrait" className="portrait-img" />
          <div className="portrait-card-overlay">
            <p className="portrait-quote">Let's tell powerful stories together.</p>
            <div className="signature-container">
              <span className="signature-text">Priya</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-cta-block reveal">
          <h2>Every story deserves to be told.</h2>
          <h3>Let's tell yours.</h3>
          <a href="#contact" className="btn-primary">Book an Interview {getServiceIcon("send")}</a>
        </div>
        <div className="footer-bottom-bar">
          <div className="footer-left">
            <span className="footer-logo">Priya<i className="logo-dot">.</i></span>
            <span className="footer-copy">© 2026 Priya Anchor. All Rights Reserved. | Developed by Darshan Kumar followed by Abhiraj Chaubey.</span>
          </div>
          <div className="footer-right">
            <a href="#privacy" className="footer-link">Privacy Policy</a>
            <a href="#terms" className="footer-link">Terms of Use</a>
            <a href="#home" className="footer-back-top" aria-label="Back to top">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="19" x2="12" y2="5" />
                <polyline points="5 12 12 5 19 12" />
              </svg>
            </a>
          </div>
        </div>
      </footer>

      <button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top">{"\u2191"}</button>
      {modalMedia && <VideoModal media={modalMedia} onClose={() => setModalMedia(null)} />}

      {/* Dynamic Camera Focus REC Cursor */}
      <div className="custom-cursor" aria-hidden="true">
        <div className="cursor-bracket cursor-tl"></div>
        <div className="cursor-bracket cursor-tr"></div>
        <div className="cursor-bracket cursor-bl"></div>
        <div className="cursor-bracket cursor-br"></div>
        <div className="cursor-rec-dot"></div>
      </div>

      {/* Subtle Page Mount Camera Flash Overlay */}
      {flashActive && <div className="camera-flash-overlay"></div>}
    </>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="content-section reveal">
      <div className="section-divider-line"></div>
      <p className="kicker">{eyebrow}</p>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function Timeline({ items }) {
  return (
    <div className="vertical-timeline">
      <div className="timeline-spine"></div>
      {items.map((item, index) => (
        <div className={`timeline-node ${index % 2 === 0 ? "left-node" : "right-node"} reveal`} key={`${item.title}-${item.meta}`}>
          <div className="timeline-badge-node"></div>
          <div className="timeline-panel">
            <span className="timeline-meta">{item.meta}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function Progress({ skill }) {
  let level = "Advanced";
  if (skill.value >= 95) level = "Expert";
  else if (skill.value >= 85) level = "Professional";

  return (
    <div className="progress-row progress-row-editorial">
      <div className="progress-label-wrap">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-level">{level}</span>
        <span className="skill-value-percentage">{skill.value}%</span>
      </div>
      <div className="progress-editorial-track">
        <i style={{ width: `${skill.value}%` }}></i>
      </div>
    </div>
  );
}

function MediaCard({ item, onOpen, isFeatured = false }) {
  return (
    <article className={`media-card reveal ${isFeatured ? "media-card-featured" : ""}`} onClick={onOpen} style={{ cursor: "pointer" }}>
      <div className="media-thumb-container">
        <img src={item.thumb} alt={`${item.title} thumbnail`} loading="lazy" />
        <div className="media-play-overlay">
          <div className="overlay-details">
            <span className="overlay-category">{isFeatured ? "Flagship Broadcast" : item.category}</span>
            <span className="overlay-duration">{item.duration || "03:45 Min"}</span>
          </div>
          <span className="play-icon-svg">{getServiceIcon("play")}</span>
        </div>
      </div>
      <div>
        <span>{item.platform}</span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <button className="card-play-btn" onClick={(e) => { e.stopPropagation(); onOpen(); }}>
          <span>{getServiceIcon("play")}</span> Watch Preview
        </button>
      </div>
    </article>
  );
}

function Stat({ value, label, suffix = "" }) {
  return <div className="stat"><strong data-count={value} data-suffix={suffix}>0</strong><span>{label}</span></div>;
}

function VideoModal({ media, onClose }) {
  const isIframeEmbed = media.embed && (
    media.embed.includes("youtube.com/embed") ||
    media.embed.includes("facebook.com/plugins/video.php")
  );
  const isLocalVideo = media.embed && /\.(mp4|webm|mov|m4v)(\?|$)/i.test(media.embed);
  const isVertical = media.isVertical || (media.url && (
    media.url.includes("/reel/") ||
    media.url.includes("/reels/") ||
    media.url.includes("instagram.com") ||
    media.embed.includes("/reel/") ||
    media.embed.includes("/reels/")
  ));

  return (
    <div className="modal-shell" role="dialog" aria-modal="true" onClick={(e) => { if (e.target.classList.contains("modal-shell")) onClose(); }}>
      <button className="modal-close" onClick={onClose} aria-label="Close video">{"\u00D7"}</button>
      <div className={`modal-panel ${isVertical ? "vertical-reel" : ""}`}>
        <h3>{media.title}</h3>
        {isIframeEmbed ? (
          <iframe src={media.embed} title={media.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        ) : isLocalVideo ? (
          <video className="modal-video" src={media.embed} controls autoPlay muted playsInline loop></video>
        ) : (
          <a href={media.embed || media.url} target="_blank" rel="noreferrer" className="external-link">Open media in new tab</a>
        )}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
