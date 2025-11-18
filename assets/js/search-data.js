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
  },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-i-gave-a-talk-at-the-geumetric-deep-learning-workshop-in-umeå-sweden",
          title: 'I gave a talk at the GeUmetric Deep Learning Workshop in Umeå, Sweden...',
          description: "",
          section: "News",},{id: "news-i-presented-a-poster-at-the-conference-on-mathematics-in-machine-learning-in-hamburg-de",
          title: 'I presented a poster at the Conference on Mathematics in Machine Learning in...',
          description: "",
          section: "News",},{id: "news-i-was-one-of-the-organisers-of-the-learning-on-graphs-and-geometry-sweden-workshop-in-uppsala-which-was-also-the-offical-swedish-meetup-of-the-virtual-log-conference-earth-americas",
          title: 'I was one of the organisers of the Learning on Graphs and Geometry...',
          description: "",
          section: "News",},{id: "news-i-gave-a-lightning-talk-at-the-workshop-on-geometry-topology-and-machine-learning-workshop-at-the-max-planck-institute-for-mathematics-in-the-sciences-in-leipzig-de",
          title: 'I gave a lightning talk at the Workshop on Geometry, Topology and Machine...',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-at-the-applied-cats-seminar-at-kth-royal-institute-of-technology-in-stockholm-crown",
          title: 'I gave a talk at the Applied CATS seminar at KTH Royal Institute...',
          description: "",
          section: "News",},{id: "news-from-january-to-july-2026-i-will-be-visiting-boston-to-work-with-maurice-weiler-at-mit-and-robin-walters-at-northeastern-us-if-you-are-working-on-mathematics-of-geometric-deep-learning-in-boston-ny-area-reach-out",
          title: 'From January to July 2026 I will be visiting Boston to work with...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },];
