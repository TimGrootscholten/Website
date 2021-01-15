//Import Images
import vierOpEenRij from "./img/vierOpEenRij.PNG";
import vierOpEenRij2 from "./img/vierOpEenRij2.PNG";
import healthone from "./img/healthone.PNG";
import healthone2 from "./img/healthone2.PNG";
import healthone20 from "./img/healthone20.PNG";
import healthone21 from "./img/healthone21.png";
import MusicPlayer from "./img/MusicPlayer.PNG";
import MusicPlayer2 from "./img/MusicPlayer2.PNG";
import platform from "./img/platform.PNG";
import platform2 from "./img/platform2.PNG";
import website from "./img/website.PNG";
import website2 from "./img/website2.PNG";

export const ProjectState = () => {
  return [
    {
      title: "Vier op een rij",
      mainImg: vierOpEenRij,
      secondaryImg: vierOpEenRij2,
      url: "/work/vier-op-een-rij",
      awards: [
        {
          title: "Project info",
          description:
            "Dit project had ik in me 2de jaar van me opleiding. Dit project was bedoeld om in 3 weken te laten zien wat je in javscript kan.",
        },
        {
          title: "Wat heb ik gebruikt?",
          description:
            "Ik heb es6 vanilla javaschript gebruikt met een model view controller structuur gebruikt.",
        },
        {
          title: "GitHub",
          description: "https://github.com/TimGrootscholten/vier-op-een-rij",
        },
      ],
    },
    {
      title: "Platform game",
      mainImg: platform,
      secondaryImg: platform2,
      url: "/work/platform-game",
      awards: [
        {
          title: "Project info",
          description:
            "Dit was mijn eerste project. Ik heb dit project gemaakt met 2 andere klas genoten met behulp van scrum hebben we deze game gemaakt.",
        },
        {
          title: "Wat heb ik gebruikt?",
          description:
            "Met Java en behulp van de Greenfood engine hebben we dit voor elkaar gekregen.",
        },
      ],
    },
    {
      title: "Music Player",
      mainImg: MusicPlayer,
      secondaryImg: MusicPlayer2,
      url: "/work/music-player",
      awards: [
        {
          title: "Project info",
          description:
            "Dit was mijn eerste React project. Ik heb hier veel geleerd over de basics React.",
        },
        {
          title: "Wat heb ik gebruikt?",
          description: "React",
        },
        {
          title: "GitHub",
          description: "https://github.com/TimGrootscholten/Music-player",
        },
      ],
    },
    {
      title: "Website",
      mainImg: website,
      secondaryImg: website2,
      url: "/work/website",
      awards: [
        {
          title: "Project info",
          description:
            "Dit project is de website waar u nu bent. Ik heb hier veel geleerd over React.",
        },
        {
          title: "Wat heb ik gebruikt?",
          description: "React",
        },
        {
          title: "GitHub",
          description: "https://github.com/TimGrootscholten/Website",
        },
      ],
    },
    {
      title: "HealthOne 2.0",
      mainImg: healthone20,
      secondaryImg: healthone21,
      url: "/work/healthone20",
      awards: [
        {
          title: "Project info",
          description:
            "Dit is het eerste project weer ik met Symfony werkt. Ik heb mijn oude PHP project in Symfony gemaakt",
        },
        {
          title: "Wat heb ik gebruikt?",
          description: "Symfony en MySQL",
        },
        {
          title: "GitHub",
          description: "https://github.com/TimGrootscholten/HealthOne2.0",
        },
      ],
    },
    {
      title: "HealthOne",
      mainImg: healthone,
      secondaryImg: healthone2,
      url: "/work/healthone",
      awards: [
        {
          title: "Project info",
          description:
            "Hier heb is voor het eerst met PHP gewerkt en met MySQL",
        },
        {
          title: "Wat heb ik gebruikt?",
          description: "Hier heb ik PHP met model view controller en MySQL",
        },
        {
          title: "GitHub",
          description: "https://github.com/TimGrootscholten/healthone",
        },
      ],
    },
  ];
};
