// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-media",
          title: "media",
          description: "Videos featuring my research and projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/media/";
          },
        },{id: "news-i-successfully-defended-my-phd-thesis-at-ku-leuven",
          title: 'I successfully defended my PhD thesis at KU Leuven. 🎓',
          description: "",
          section: "News",},{id: "news-i-started-as-a-postdoctoral-researcher-at-ku-leuven-meco-research-group",
          title: 'I started as a Postdoctoral Researcher at KU Leuven, MECO Research Group.',
          description: "",
          section: "News",},{id: "news-i-started-as-project-manager-of-the-learnoptra-sbo-project-a-collaboration-between-flanders-make-and-ku-leuven",
          title: 'I started as Project Manager of the LearnOpTra SBO project, a collaboration between...',
          description: "",
          section: "News",},{id: "news-i-started-a-2-month-research-visit-at-imt-lucca-dysco-group",
          title: 'I started a 2-month research visit at IMT Lucca – DYSCO group.',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%66%6C%61%76%69%61%73%6F%66%69%61.%61%63%65%72%62%6F@%6B%75%6C%65%75%76%65%6E.%62%65", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=cGgoHBUAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-7880-2447", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
