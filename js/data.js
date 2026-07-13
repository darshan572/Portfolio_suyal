/*
 * ==============================================================
 *  DEVELOPED BY DARSHAN KUMAR
 *  Editorial Portfolio Dynamic Content Source
 *  All rights reserved © 2026 Darshan Kumar
 * ==============================================================
 */
const portfolioData = {
  profile: {
    name: "Priya Suyal",
    title: "News Anchor | Reporter | Podcast Host",
    summary: "Broadcast storyteller with newsroom discipline, confident delivery, and digital-first presence.",
    positioningStatement: "Investigating stories that shape public conversation.",
    location: "India",
    email: "priyasuyal414@gmail.com",
    phone: "+91 9258555024",
    resumeUrl: "assets/resume/Priya_Suyal_Resume.docx",
    photoUrl: "assets/images/priya-suyal-profile.jpeg",
    driveUrl: "https://drive.google.com/drive/folders/1NnG6JQJFUxW9fTj6L1aNx-yv3ZrH02JT",
    showreelUrl: "public/reels/p1.mp4",
    heroStats: [
      { value: "50", suffix: "+", label: "guests coordinated" },
      { value: "8", suffix: "", label: "podcast features" },
      { value: "4", suffix: "", label: "competition wins" },
      { value: "5", suffix: "", label: "media roles" }
    ],
    typewriter: [
      "Television Journalist",
      "News Anchor",
      "Reporter",
      "Podcast Host",
      "Media Professional"
    ]
  },
  featuredSpotlight: {
    title: "Truth Matters: The Jan Munch Ground Report",
    subtitle: "Featured Widescreen Coverage",
    description: "An investigative documentary series covering local community struggles, administrative accountability, and public-interest stories that define modern truth-seeking journalism.",
    videoUrl: "https://scontent-ccu2-2.xx.fbcdn.net/o1/v/t2/f2/m412/AQPxpI6Cxy_XQAf8Tw2aJ0gYe0CZvbyRKu8vZDchlEtvGOiMptMT6NcgHJYPpUOQtCsY1i7xY2p1hcqg5raOc5rHO7qX77sfE6UhCp3KZQ.mp4?_nc_cat=107&_nc_sid=8bf8fe&_nc_ht=scontent-ccu2-2.xx.fbcdn.net&_nc_ohc=Xqbafz8EGYQQ7kNvwH7vdLD&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzMuNjQwLnN2ZV9zZCIsInhwdl9hc3NldF9pZCI6MjU2Nzg2MzM0Mzg0MzU4MjUsImFzc2V0X2FnZV9kYXlzIjoyMDYsInZpX3VzZWNhc2VfaWQiOjEwMTIyLCJkdXJhdGlvbl9zIjoxMjksInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&_nc_gid=Bi1RLNpX4LNtRL3Y-YL5zQ&_nc_ss=7b2a8&_nc_zt=28&oh=00_AQA-xV1WTnxuT60045A-jmibGofmVohMz62PHzZEcdApvw&oe=6A599CA7&bitrate=295560&tag=sve_sd",
    thumbnail: "assets/images/priya_multimedia_story.png",
    duration: "2:09 Min",
    category: "Investigative"
  },
  aboutHighlights: [
    "News Anchoring",
    "Live Reporting",
    "Podcast Hosting",
    "Interview Moderation",
    "Voice Over",
    "Event Hosting",
    "Storytelling",
    "Public Speaking"
  ],
  education: [
    {
      institution: "Quantum University",
      detail: "Journalism & Mass Communication",
      meta: "Graduate"
    },
    {
      institution: "Skyward Senior Secondary School",
      detail: "Senior Secondary Education",
      meta: "Academic Foundation"
    }
  ],
  experience: [
    {
      role: "Podcast Coordinator",
      company: "Ilahi Travels",
      text: "Coordinated podcast concepts, guest flow, production planning, storytelling formats, and outreach to 50+ guests from different sectors for audience-ready episodes."
    },
    {
      role: "Freelancer",
      company: "Independent Media Work",
      text: "Handled script writing, hosting, and Instagram Reels script writing for digital-first media formats."
    },
    {
      role: "Broadcasting Intern",
      company: "Doordarshan Kendra",
      text: "Gained newsroom exposure across broadcast operations, production discipline, and professional television workflows."
    },
    {
      role: "Reporter",
      company: "Newswala Network",
      text: "Reported field stories with attention to clarity, accuracy, camera presence, and public-interest framing."
    },
    {
      role: "Content Creator",
      company: "College Tips.in",
      text: "Created social-first media content shaped for youth audiences, platform culture, and brand engagement."
    }
  ],
  skills: [
    {
      group: "Journalism & Broadcasting",
      items: [
        { name: "News Anchoring", value: 92 },
        { name: "Field Reporting", value: 88 },
        { name: "Interviewing", value: 86 }
      ]
    },
    {
      group: "Content Creation",
      items: [
        { name: "Podcast Production", value: 91 },
        { name: "Editorial Writing", value: 84 },
        { name: "Social Storytelling", value: 89 }
      ]
    },
    {
      group: "Technical Skills",
      items: [
        { name: "Script Writing", value: 87 },
        { name: "Camera Presentation", value: 90 },
        { name: "Video Productions", value: 80 }
      ]
    },
    {
      group: "Professional Skills",
      items: [
        { name: "Leadership", value: 88 },
        { name: "Public Speaking", value: 94 },
        { name: "Event Hosting", value: 91 }
      ]
    }
  ],
  services: [
    {
      title: "TV Anchoring",
      icon: "tv",
      description: "High-impact studio hosting for news bulletins, panel debates, and prime-time broadcast journalism."
    },
    {
      title: "Live Reporting",
      icon: "mic",
      description: "On-the-scene field journalism under tight deadlines, featuring sharp news judgment and strong camera-ready presence."
    },
    {
      title: "Podcast Hosting",
      icon: "podcast",
      description: "Engaging guest moderation, show architecture, conversational flow, and digital-first digital audio storytelling."
    },
    {
      title: "Event Hosting",
      icon: "award",
      description: "Stage presence, public coordination, and master of ceremonies leadership for large-scale panels and ceremonies."
    },
    {
      title: "Voice Over",
      icon: "volume",
      description: "Professional narration, voice modulation, and clear scripting delivery for documentaries, commercials, and digital features."
    },
    {
      title: "Script Writing",
      icon: "edit",
      description: "Creative and factual script writing tailored for short-form digital clips, news bulletins, and podcasts."
    },
    {
      title: "Media Production",
      icon: "film",
      description: "End-to-end production planning, guest outreach (50+ sectors), and editorial design for newsroom workflows."
    }
  ],
  featuredReels: [
    {
      title: "Podcast Showreel",
      role: "Host",
      platform: "Ilahi Travels",
      year: "2026",
      description: "Muted loop preview of the strongest podcast-hosting moments with a clean, cinematic cadence.",
      src: "public/reels/p1.mp4"
    },
    {
      title: "Interview Momentum",
      role: "Host",
      platform: "Ilahi Travels",
      year: "2026",
      description: "A tighter reel built for first-impression viewing and social sharing.",
      src: "public/reels/p2.mp4"
    },
    {
      title: "Public Interest Story",
      role: "Presenter",
      platform: "Podcast Clip",
      year: "2026",
      description: "A compact clip that keeps the focus on delivery, framing, and editorial confidence.",
      src: "public/reels/p3.mp4"
    }
  ],
  podcasts: [
    { title: "Podcast 1", url: "https://youtu.be/xcTEsxdpqnE", description: "A hosted conversation with a polished broadcast rhythm and engaging guest flow.", duration: "18:42 Min" },
    { title: "Podcast 2", url: "https://youtu.be/REda1Pc6XQs", description: "A personality-led episode focused on accessible storytelling and confident moderation.", duration: "24:15 Min" },
    { title: "Podcast 3", url: "https://youtu.be/cc8GPKnU3xE", description: "A dynamic discussion built around preparation, voice control, and audience connection.", duration: "15:30 Min" },
    { title: "Podcast 4", url: "https://youtu.be/mgBrJQ7bBpo", description: "A conversational format shaped for digital audiences and replayable moments.", duration: "22:10 Min" },
    { title: "Podcast 5", url: "https://youtu.be/erOCDvhMQhI", description: "A media episode demonstrating hosting presence, listening, and structured transitions.", duration: "31:05 Min" },
    { title: "Podcast 6", url: "https://youtu.be/1wn7S126Yig", description: "A show-format podcast segment with clear delivery and production awareness.", duration: "19:50 Min" },
  ],
  portfolio: [
    {
      category: "Reporting",
      title: "Jan Munch News Anchor",
      description: "A newsroom-ready reporting showcase for public-interest stories.",
      platform: "Facebook",
      url: "https://scontent-ccu2-2.xx.fbcdn.net/o1/v/t2/f2/m412/AQPxpI6Cxy_XQAf8Tw2aJ0gYe0CZvbyRKu8vZDchlEtvGOiMptMT6NcgHJYPpUOQtCsY1i7xY2p1hcqg5raOc5rHO7qX77sfE6UhCp3KZQ.mp4?_nc_cat=107&_nc_sid=8bf8fe&_nc_ht=scontent-ccu2-2.xx.fbcdn.net&_nc_ohc=Xqbafz8EGYQQ7kNvwH7vdLD&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzMuNjQwLnN2ZV9zZCIsInhwdl9hc3NldF9pZCI6MjU2Nzg2MzM0Mzg0MzU4MjUsImFzc2V0X2FnZV9kYXlzIjoyMDYsInZpX3VzZWNhc2VfaWQiOjEwMTIyLCJkdXJhdGlvbl9zIjoxMjksInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&_nc_gid=Bi1RLNpX4LNtRL3Y-YL5zQ&_nc_ss=7b2a8&_nc_zt=28&oh=00_AQA-xV1WTnxuT60045A-jmibGofmVohMz62PHzZEcdApvw&oe=6A599CA7&bitrate=295560&tag=sve_sd",
      thumb: "public/priya_janmunch_thumb.png",
      duration: "02:09 Min"
    },
  ],
  achievements: [
    {
      title: "Inter University Speech Competition",
      type: "Winner",
      description: "Recognized for persuasive speaking, stage control, and thought clarity.",
      url: "https://drive.google.com/drive/folders/1NnG6JQJFUxW9fTj6L1aNx-yv3ZrH02JT"
    },
    {
      title: "Intra University Speech Competition",
      type: "Winner",
      description: "Awarded for confident delivery and argument structure.",
      url: "https://drive.google.com/drive/folders/1NnG6JQJFUxW9fTj6L1aNx-yv3ZrH02JT"
    },
    {
      title: "On Spot Reporting Competition",
      type: "Winner",
      description: "Recognized for fast editorial judgment and camera-ready reporting.",
      url: "https://drive.google.com/drive/folders/1NnG6JQJFUxW9fTj6L1aNx-yv3ZrH02JT"
    },
    {
      title: "On Spot Anchoring Contest",
      type: "Winner",
      description: "Awarded for live anchoring presence and clear broadcast delivery.",
      url: "https://drive.google.com/drive/folders/1NnG6JQJFUxW9fTj6L1aNx-yv3ZrH02JT"
    }
  ],
  projects: [
    {
      title: "Official Podcast Production",
      role: "Producer & Host",
      description: "Spearheaded concepts, coordinated 50+ guests from various sectors, and managed production pipeline.",
      image: "assets/images/priya_podcast_prod.png"
    },
    {
      title: "Newsletter Editorial Desk",
      role: "Editor",
      description: "Managed weekly editorial writing and student journalism updates covering key university topics.",
      image: "assets/images/priya_editorial_desk.png"
    },
    {
      title: "Multimedia Storytelling",
      role: "Director / Anchor",
      description: "Produced and presented short features about local community affairs and interest topics.",
      image: "assets/images/priya_multimedia_story.png"
    },
    {
      title: "Youth Audience Content",
      role: "Digital Strategist",
      description: "Curated social-first news scripting and reels designed to appeal to platform algorithms.",
      image: "assets/images/priya_youth_strategy.png"
    }
  ],
  socialLinks: {
    instagram: {
      label: "Instagram",
      url: "https://www.instagram.com/ilahitravels_podcast/",
      metric: "Podcast reels"
    },
    youtube: {
      label: "YouTube",
      url: "https://youtu.be/xcTEsxdpqnE",
      metric: "Showreel"
    },
    facebook: {
      label: "Facebook",
      url: "https://www.facebook.com/share/v/182ckdhrFn/",
      metric: "Featured video"
    },
    linkedin: {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/priya-suyal-1aa496335?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      metric: "Professional profile"
    }
  }
};
