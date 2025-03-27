import { 
  BarChart3, Database, Code, Globe, 
  Puzzle, TrendingUp, FileCode, LineChart,
  type LucideIcon
} from "lucide-react";

export type ToolCategory = 
  | 'Analytics Tools'
  | 'Datasets/APIs'
  | 'Open-Source Projects'
  | 'Websites/Dashboards'
  | 'Apps & Extensions';

export type Game = 
  | 'Valorant' 
  | 'CSGO/2'
  | 'Dota'
  | 'League Of Legends'
  | 'APEX Legends'
  | 'Overwatch'
  | 'Rainbow Six'
  | 'Deadlock'
  | 'Rocket League'
  | 'All';

export type PricingModel = 
  | 'Free'
  | 'Free Options'
  | 'One-Time Purchase'
  | 'Subscription-Based'
  | 'Open Source';

export interface Tool {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  images: string[]; // This is correct
  featured: boolean;
  category: ToolCategory;
  games: Game[];
  pricing: PricingModel;
  url: string;
  developer: {
    name: string;
    url: string;
  };
  features: string[];
}

export interface CategoryInfo {
  name: ToolCategory;
  icon: LucideIcon;
  description: string;
}

// Category information with icons and descriptions
export const categories: CategoryInfo[] = [
  {
    name: 'Analytics Tools',
    icon: BarChart3,
    description: 'Tools that analyze player or team performance metrics'
  },
  {
    name: 'Datasets/APIs',
    icon: Database,
    description: 'APIs and datasets for accessing esports data'
  },
  {
    name: 'Open-Source Projects',
    icon: FileCode,
    description: 'GitHub repositories and open-source tools for esports analysis'
  },
  {
    name: 'Websites/Dashboards',
    icon: Globe,
    description: 'Web platforms providing comprehensive esports information'
  },
  {
    name: 'Apps & Extensions',
    icon: Puzzle,
    description: 'Browser extensions and applications for enhanced gameplay'
  }
];

// Sample tools data
export const tools: Tool[] = [
  {
    id: 'oracle-elixir-valorant',
    name: 'Oracle Elixir VALORANT',
    description: "Oracle's Elixir VALORANT is a statistics and analytics platform providing in-depth data on professional VALORANT matches, teams, and players.",
    shortDescription: "Statistics and analytics platform for professional VALORANT esports",
    images: ['https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://val.oracleselixir.com&size=256'],
    featured: true,
    category: 'Websites/Dashboards',
    games: ['Valorant'],
    pricing: 'Free',
    url: 'https://val.oracleselixir.com/',
    developer: {
      name: 'Tim Sevenhuysen',
      url: 'https://oracleselixir.com/'
    },
    features: [
      'Professional match statistics',
      'Team performance data',
      'Player analytics',
      'Tournament tracking'
    ]
  },
  {
    id: 'oracle-elixir-lol',
    name: 'Oracle Elixir LoL',
    description: "Oracle's Elixir LoL is a statistics and analytics platform providing in-depth data on professional League of Legends matches, teams, and players.",
    shortDescription: "Statistics and analytics platform for professional League of Legends esports",
    images: ['https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://val.oracleselixir.com&size=256'],
    featured: true,
    category: 'Websites/Dashboards',
    games: ['League Of Legends'],
    pricing: 'Free',
    url: 'https://oracleselixir.com/',
    developer: {
      name: 'Tim Sevenhuysen',
      url: 'https://oracleselixir.com/'
    },
    features: [
      'Professional match statistics',
      'Team performance data',
      'Player analytics',
      'Tournament tracking'
    ]
  },
  {
    id: 'run-it-back',
    name: 'Run It Back',
    description: "A VALORANT analytics platform offering advanced data insights and performance tracking.",
    shortDescription: "VALORANT analytics platform with advanced performance tracking",
    images: ['https://www.google.com/s2/favicons?domain=rib.gg&sz=256'],
    featured: false,
    category: 'Websites/Dashboards',
    games: ['Valorant'],
    pricing: 'Free',
    url: 'https://rib.gg/',
    developer: {
      name: 'RIB.GG',
      url: 'https://rib.gg/'
    },
    features: [
      'Match data analysis',
      'Performance tracking',
      'Team statistics',
      'Player profiles'
    ]
  },
  {
    id: 'grid-data-portal',
    name: 'GRID Data Portal',
    description: "A data infrastructure company providing real-time esports and gaming analytics.",
    shortDescription: "Real-time esports data infrastructure and analytics",
    images: ['https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://grid.gg&size=256'],
    featured: false,
    category: 'Websites/Dashboards',
    games: ['Valorant', 'League Of Legends'],
    pricing: 'Free Options',
    url: 'https://grid.gg/',
    developer: {
      name: 'GRID.GG',
      url: 'https://grid.gg/'
    },
    features: [
      'Real-time analytics',
      'Esports data infrastructure',
      'Performance metrics',
      'Team insights'
    ]
  },
  {
    id: 'scoutli',
    name: 'Scoutli',
    description: "A scouting and analytics platform designed for esports professionals to track player performance.",
    shortDescription: "Scouting platform for esports professionals",
    images: ['https://www.google.com/s2/favicons?domain=scoutli.co&sz=256'],
    featured: false,
    category: 'Websites/Dashboards',
    games: ['Valorant', 'League Of Legends'],
    pricing: 'Free Options',
    url: 'https://scoutli.co/',
    developer: {
      name: 'Scoutli',
      url: 'https://scoutli.co/'
    },
    features: [
      'Player scouting',
      'Performance analytics',
      'Team building tools',
      'Talent identification'
    ]
  },
  {
    id: 'tracker-network',
      name: 'Tracker Network',
    description: "A leading stat-tracking platform covering multiple esports titles, including VALORANT and CS2.",
    shortDescription: "Multi-game stat tracking for competitive games",
    images: ['https://www.google.com/s2/favicons?domain=tracker.gg&sz=256'],
    featured: false,
    category: 'Websites/Dashboards',
    games: ['APEX Legends', 'Valorant', 'CSGO/2', 'Overwatch', 'Rainbow Six'],
    pricing: 'Free',
    url: 'https://tracker.gg/',
    developer: {
      name: 'Tracker Network, LLC',
      url: 'https://tracker.gg/'
    },
    features: [
      'Multi-game support',
      'Detailed stat tracking',
      'Performance history',
      'Leaderboards',
      'Match analysis'
    ]
  },
  {
    id: 'augment',
    name: 'Augment',
    description: "A Valorant and esports performance tracking platform focused on in-depth analytics.",
    shortDescription: "Deep analytics for CS2 and esports performance",
    images: ['https://www.google.com/s2/favicons?domain=augment.gg&sz=256'],
    featured: false,
    category: 'Websites/Dashboards',
    games: ['Valorant'],
    pricing: 'Subscription-Based',
    url: 'https://augment.gg/',
    developer: {
      name: 'Augment.GG',
      url: 'https://augment.gg/'
    },
    features: [
      'Performance analytics',
      'Detailed stats',
      'Training insights',
      'Progress tracking'
    ]
  },
  {
    id: 'cs2lens',
    name: 'CS2LENS',
    description: "A data visualization tool for Counter-Strike 2 demos and match analysis.",
    shortDescription: "CS2 demo visualization and analytics",
    images: ['https://www.google.com/s2/favicons?domain=cs2lens.com&sz=256'],
    featured: true,
    category: 'Websites/Dashboards',
    games: ['CSGO/2'],
    pricing: 'Free Options',
    url: 'https://cs2lens.com',
    developer: {
      name: 'Juha Kiili',
      url: 'https://cs2lens.com'
    },
    features: [
      'Demo analysis',
      'Data visualization',
      'Match insights',
      'Performance metrics'
    ]
  },
  {
    id: 'valolens',
    name: 'VALOLENS',
    description: "A VALORANT demo analysis tool providing performance insights and replay breakdowns.",
    shortDescription: "VALORANT demo analysis and performance insights",
    images: ['https://www.google.com/s2/favicons?domain=valolens.com&sz=256'],
    featured: true,
    category: 'Websites/Dashboards',
    games: ['Valorant'],
    pricing: 'Free',
    url: 'https://valolens.com',
    developer: {
      name: 'Juha Kiili',
      url: 'https://valolens.com'
    },
    features: [
      'Demo analysis',
      'Performance insights',
      'Replay breakdowns',
      'Statistical analysis'
    ]
  },
  {
    id: 'valorant-synergies',
    name: 'Valorant Synergies',
    description: "A VALORANT team composition synergy tool analyzing agent compatibility.",
    shortDescription: "Team composition and agent synergy analysis",
    images: ['https://www.google.com/s2/favicons?domain=github.com&sz=256'],
    featured: true,
    category: 'Websites/Dashboards',
    games: ['Valorant'],
    pricing: 'Free',
    url: 'https://val-synergies.pages.dev/',
    developer: {
      name: 'Flynn & Captaincow',
      url: 'https://val-synergies.pages.dev/'
    },
    features: [
      'Agent synergy analysis',
      'Team composition tools',
      'Strategy insights',
      'Map-specific recommendations'
    ]
  },
  {
    id: 'skybox-edge',
    name: 'Skybox Edge',
    description: "An esports coaching and analytics tool for Counter-Strike teams.",
    shortDescription: "Counter-Strike coaching and analytics platform",
    images: ['https://favicone.com/edge.skybox.gg?s=256'],
    featured: false,
    category: 'Analytics Tools',
    games: ['CSGO/2'],
    pricing: 'Subscription-Based',
    url: 'https://edge.skybox.gg/',
    developer: {
      name: 'Skybox Technologies ApSHQ Copenhagen',
      url: 'https://edge.skybox.gg/'
    },
    features: [
      'Team coaching tools',
      'Performance analytics',
      'Demo analysis',
      'Strategy development'
    ]
  },
  {
    id: 'noesis',
    name: 'Noesis',
    description: "An AI-powered analytics platform for competitive gaming.",
    shortDescription: "AI-driven competitive gaming analytics",
    images: ['https://www.google.com/s2/favicons?domain=www.noesis.gg&sz=256'],
    featured: false,
    category: 'Analytics Tools',
    games: ['CSGO/2'],
    pricing: 'Subscription-Based',
    url: 'https://www.noesis.gg/',
    developer: {
      name: 'Bang & Jensen ApS',
      url: 'https://www.noesis.gg/'
    },
    features: [
      'AI-powered analytics',
      'Performance insights',
      'Competitive gaming focus',
      'Advanced statistics'
    ]
  },
  {
    id: 'scl',
    name: 'SCL',
    description: "A Counter-Strike league and matchmaking platform.",
    shortDescription: "CS2 league and matchmaking service",
    images: ['https://www.google.com/s2/favicons?domain=scl.gg&sz=256'],
    featured: false,
    category: 'Analytics Tools',
    games: ['CSGO/2'],
    pricing: 'Free',
    url: 'https://scl.gg/',
    developer: {
      name: 'SCL AB',
      url: 'https://scl.gg/'
    },
    features: [
      'League organization',
      'Matchmaking services',
      'Player statistics',
      'Tournament management'
    ]
  },
  {
    id: 'shadow',
    name: 'Shadow',
    description: "A professional esports analytics tool specializing in tactical analysis and coaching.",
    shortDescription: "Pro esports tactical analysis and coaching",
    images: [''],
    featured: false,
    category: 'Analytics Tools',
    games: ['CSGO/2', 'Dota', 'League Of Legends'],
    pricing: 'Subscription-Based',
    url: 'https://shadow.gg/',
    developer: {
      name: 'Shadow Esports GmbH',
      url: 'https://shadow.gg/'
    },
    features: [
      'Tactical analysis',
      'Coaching tools',
      'Professional esports focus',
      'Team strategy development'
    ]
  },
  {
    id: 'pandascore',
    name: 'PandaScore',
    description: "An esports data provider offering real-time statistics and odds.",
    shortDescription: "Real-time esports data and odds provider",
    images: ['https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://pandascore.co&size=256'],
    featured: false,
    category: 'Datasets/APIs',
    games: ['Valorant', 'League Of Legends'],
    pricing: 'Free Options',
    url: 'https://pandascore.co/',
    developer: {
      name: 'PandaScore',
      url: 'https://pandascore.co/'
    },
    features: [
      'Real-time statistics',
      'Esports odds',
      'Data APIs',
      'Tournament coverage'
    ]
  },
  {
    id: 'leetify',
    name: 'Leetify',
    description: "A CS2 analytics platform that helps players improve by breaking down their performance.",
    shortDescription: "CS2 performance improvement analytics",
    images: ['https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://leetify.com&size=256'],
    featured: false,
    category: 'Websites/Dashboards',
    games: ['CSGO/2'],
    pricing: 'Free Options',
    url: 'https://leetify.com/home/',
    developer: {
      name: 'Leetify',
      url: 'https://leetify.com/home/'
    },
    features: [
      'Performance breakdown',
      'Improvement analytics',
      'Skill tracking',
      'Personalized insights'
    ]
  },
  {
    id: 'cs-demo-manager',
    name: 'CS Demo Manager',
    description: "A tool for managing and analyzing Counter-Strike demo files.",
    shortDescription: "Counter-Strike demo management tool",
    images: ['https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://cs-demo-manager.com&size=256'],
    featured: false,
    category: 'Apps & Extensions',
    games: ['CSGO/2'],
    pricing: 'Free',
    url: 'https://cs-demo-manager.com/',
    developer: {
      name: 'AkiVer',
      url: 'https://cs-demo-manager.com/'
    },
    features: [
      'Demo management',
      'Analysis tools',
      'Performance metrics',
      'Match insights'
    ]
  },
  {
    id: 'scope-gg',
    name: 'Scope GG',
    description: "A CS2 analytics tool offering heatmaps, stats, and performance insights.",
    shortDescription: "CS2 heatmaps and performance analytics",
    images: ['https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://scope.gg&size=256'],
    featured: false,
    category: 'Analytics Tools',
    games: ['CSGO/2'],
    pricing: 'Free Options',
    url: 'https://scope.gg/',
    developer: {
      name: 'Scope',
      url: 'https://scope.gg/'
    },
    features: [
      'Heatmaps',
      'Performance statistics',
      'Analytical insights',
      'Gameplay tracking'
    ]
  },
  {
    id: 'demoinfocs-golang',
    name: 'Demoinfocs-golang',
    description: "A Go library for parsing Counter-Strike demo files.",
    shortDescription: "Go library for CS demo parsing",
    images: ['https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://github.com&size=256'],
    featured: false,
    category: 'Open-Source Projects',
    games: ['CSGO/2'],
    pricing: 'Open Source',
    url: 'https://github.com/markus-wa/demoinfocs-golang',
    developer: {
      name: 'Markus-Wa',
      url: 'https://github.com/markus-wa/demoinfocs-golang'
    },
    features: [
      'Demo parsing',
      'CS2 data extraction',
      'Developer tools',
      'Open-source library'
    ]
  },
  {
    id: 'clarity',
    name: 'Clarity',
    description: "A Java library for parsing and analyzing Dota 2 replay files.",
    shortDescription: "Java library for Dota 2 replay parsing",
    images: ['https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://github.com&size=256'],
    featured: false,
    category: 'Open-Source Projects',
    games: ['Dota', 'Deadlock'],
    pricing: 'Open Source',
    url: 'https://github.com/skadistats/clarity',
    developer: {
      name: 'Skadistats',
      url: 'https://github.com/skadistats/clarity'
    },
    features: [
      'Replay parsing',
      'Data extraction',
      'Analysis tools',
      'Developer APIs'
    ]
  },
  {
    id: 'csgoscouting',
    name: 'CSGOScouting',
    description: "A scouting database and analytics tool for Counter-Strike players.",
    shortDescription: "Counter-Strike player scouting database",
    images: ['https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://csgoscouting.com&size=256'],
    featured: false,
    category: 'Apps & Extensions',
    games: ['CSGO/2'],
    pricing: 'Free',
    url: 'https://csgoscouting.com/',
    developer: {
      name: 'David Balderston',
      url: 'https://csgoscouting.com/'
    },
    features: [
      'Player scouting',
      'Analytics database',
      'Performance tracking',
      'Talent identification'
    ]
  },
  {
    id: 'cs-demo-downloader',
    name: 'CS Demo Downloader',
    description: "A tool for downloading CS2 match demos from FACEIT and other platforms.",
    shortDescription: "CS2 demo download utility",
    images: ['https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://c9win.com&size=256'],
    featured: false,
    category: 'Apps & Extensions',
    games: ['CSGO/2'],
    pricing: 'Free',
    url: 'https://c9win.com/demo-downloader/',
    developer: {
      name: 'David Balderston',
      url: 'https://c9win.com/demo-downloader/'
    },
    features: [
      'Demo downloading',
      'FACEIT integration',
      'Match history',
      'Replay management'
    ]
  },
  {
    id: 'cs-task-bar',
    name: 'CS Task Bar',
    description: "A utility that provides quick access to CS2 stats and demo management tools.",
    shortDescription: "Quick access toolbar for CS2 utilities",
    images: ['https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://c9win.com&size=256'],
    featured: false,
    category: 'Apps & Extensions',
    games: ['CSGO/2'],
    pricing: 'Free',
    url: 'https://c9win.com/taskbar/',
    developer: {
      name: 'David Balderston',
      url: 'https://c9win.com/taskbar/'
    },
    features: [
      'Quick access toolbar',
      'Stats integration',
      'Demo management',
      'Workflow optimization'
    ]
  },
  {
    id: 'vlr-map-veto-scraper',
    name: 'VLR Map Veto Scraper',
    description: "A script that scrapes map veto data from VLR.gg for match analysis.",
    shortDescription: "VALORANT map veto data scraper",
    images: ['https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://github.com&size=256'],
    featured: false,
    category: 'Open-Source Projects',
    games: ['Valorant'],
    pricing: 'Open Source',
    url: 'https://github.com/FlynV/vlr-map-veto-scraper',
    developer: {
      name: 'Flynn',
      url: 'https://github.com/FlynV/vlr-map-veto-scraper'
    },
    features: [
      'Map veto scraping',
      'Match data collection',
      'VLR.gg integration',
      'Analysis tools'
    ]
  },
  {
    id: 'r6-analyst',
    name: 'R6 Analyst',
    description: "A Rainbow Six Siege analytics platform that provides match data and insights.",
    shortDescription: "Rainbow Six match analytics platform",
    images: ['https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://r6analyst.com&size=256'],
    featured: false,
    category: 'Apps & Extensions',
    games: ['Rainbow Six'],
    pricing: 'Free',
    url: 'https://r6analyst.com/',
    developer: {
      name: 'R6ANALYST',
      url: 'https://r6analyst.com/'
    },
    features: [
      'Match analytics',
      'Performance insights',
      'Operator statistics',
      'Map strategy data'
    ]
  },
  {
    id: 'thespikegg',
    name: 'THESPIKEGG',
    description: "A news and stats platform dedicated to VALORANT esports.",
    shortDescription: "VALORANT esports news and statistics",
    images: ['https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://www.thespike.gg&size=256'],
    featured: false,
    category: 'Websites/Dashboards',
    games: ['League Of Legends', 'Valorant'],
    pricing: 'Free',
    url: 'https://www.thespike.gg/',
    developer: {
      name: 'THESPIKEGG',
      url: 'https://www.thespike.gg/'
    },
    features: [
      'Esports news',
      'Match statistics',
      'Player profiles',
      'Tournament coverage'
    ]
  },
  {
    id: 'blitzgg',
    name: 'BlitzGG',
    description: "A gaming assistant and performance tracker for games like VALORANT, League of Legends, and CS2.",
    shortDescription: "Multi-game performance assistant",
    images: ['https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://blitz.gg&size=256'],
    featured: false,
    category: 'Websites/Dashboards',
    games: ['CSGO/2', 'Valorant'],
    pricing: 'Free',
    url: 'https://blitz.gg/',
    developer: {
      name: 'Swift Media Entertainment, Inc.',
      url: 'https://blitz.gg/'
    },
    features: [
      'Performance tracking',
      'Game assistant',
      'Stat analysis',
      'Improvement suggestions'
    ]
  },
  {
    id: 'mobalytics',
    name: 'Mobalytics',
    description: "A gaming performance platform providing in-depth analytics for competitive games.",
    shortDescription: "Competitive gaming performance analytics",
    images: ['https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://mobalytics.gg&size=256'],
    featured: false,
    category: 'Analytics Tools',
    games: ['Valorant', 'League Of Legends'],
    pricing: 'Free',
    url: 'https://mobalytics.gg/',
    developer: {
      name: 'Gamers Net, Inc',
      url: 'https://mobalytics.gg/'
    },
    features: [
      'Performance analytics',
      'Skill assessment',
      'Game insights',
      'Improvement tracking'
    ]
  },
  {
    id: 'gol-gg',
    name: 'GOL GG',
    description: "An esports statistics website covering multiple competitive titles.",
    shortDescription: "Multi-game esports statistics platform",
    images: ['https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://gol.gg&size=256'],
    featured: false,
    category: 'Analytics Tools',
    games: ['League Of Legends'],
    pricing: 'Free',
    url: 'https://gol.gg/esports/home/',
    developer: {
      name: 'Bynjee',
      url: 'https://gol.gg/esports/home/'
    },
    features: [
      'Esports statistics',
      'Match data',
      'Player profiles',
      'Tournament tracking'
    ]
  },
  {
    id: 'stratz',
    name: 'Stratz',
    description: "A Dota 2 analytics platform offering match insights and drafting tools.",
    shortDescription: "Dota 2 analytics and drafting platform",
    images: ['https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://www.dotabuff.com&size=256'],
    featured: false,
    category: 'Analytics Tools',
    games: ['Dota'],
    pricing: 'Free',
    url: 'https://stratz.com/',
    developer: {
      name: 'STRATZ, LLC',
      url: 'https://stratz.com/'
    },
    features: [
      'Match insights',
      'Drafting tools',
      'Player analytics',
      'Game statistics'
    ]
  },
  {
    id: 'dotabuff',
    name: 'DOTABuff',
    description: "A leading Dota 2 stats and tracking website.",
    shortDescription: "Comprehensive Dota 2 statistics tracking",
    images: ['https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://stratz.com&size=256'],
    featured: false,
    category: 'Analytics Tools',
    games: ['Dota'],
    pricing: 'Free',
    url: 'https://www.dotabuff.com/',
    developer: {
      name: 'Elo Entertainment, Inc',
      url: 'https://www.dotabuff.com/'
    },
    features: [
      'Statistics tracking',
      'Hero performance',
      'Match analysis',
      'Player profiles'
    ]
  },
  {
    id: 'dpm-lol',
    name: 'DPM LOL',
    description: "A League of Legends data visualization and drafting tool.",
    shortDescription: "LoL data visualization and drafting",
    images: ['https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://dpm.lol&size=256'],
    featured: false,
    category: 'Websites/Dashboards',
    games: ['League Of Legends'],
    pricing: 'Free',
    url: 'https://dpm.lol/',
    developer: {
      name: 'DPM.LOL',
      url: 'https://dpm.lol/'
    },
    features: [
      'Data visualization',
      'Drafting assistance',
      'Match insights',
      'Player statistics'
    ]
  },
  {
    id: 'henrik-api',
    name: 'HenrikAPI',
    description: "An API providing VALORANT stats and player tracking data.",
    shortDescription: "VALORANT stats and tracking API",
    images: ['https://henrikdev.xyz/assets/ServerYellowTransparent-BLZvgTNS.png'],
    featured: false,
    category: 'Datasets/APIs',
    games: ['Valorant'],
    pricing: 'Free Options',
    url: 'https://docs.henrikdev.xyz/',
    developer: {
      name: 'Henrik Mertens',
      url: 'https://docs.henrikdev.xyz/'
    },
    features: [
      'VALORANT stats API',
      'Player tracking',
      'Match data',
      'Developer tools'
    ]
  },
  {
    id: 'op-gg',
    name: 'OP.GG',
    description: "OP.GG is a widely recognized data platform tailored for League of Legends, Valorant, and Overwatch players, providing comprehensive statistics and insights.",
    shortDescription: "Widely recognized data platform for multiple esports games",
    images: ['https://www.google.com/s2/favicons?domain=op.gg&sz=256'],
    featured: false,
    category: 'Analytics Tools',
    games: ['League Of Legends', 'Valorant', 'Overwatch'],
    pricing: 'Free',
    url: 'https://www.op.gg/',
    developer: {
      name: 'OP.GG',
      url: 'https://www.op.gg/'
    },
    features: [
      'Player statistics tracking',
      'Champion builds and tier lists',
      'Match history analysis',
      'Professional player tracking',
      'Multi-game support'
    ]
  },
  {
    id: 'hltv',
    name: 'HLTV',
    description: "HLTV is a news website and forum which covers professional Counter-Strike 2 esports news, tournaments and statistics, serving as the primary hub for CS2 competitive scene.",
    shortDescription: "Premier Counter-Strike news and statistics platform",
    images: ['https://www.google.com/s2/favicons?domain=hltv.org&sz=256'],
    featured: false,
    category: 'Websites/Dashboards',
    games: ['CSGO/2'],
    pricing: 'Free',
    url: 'https://www.hltv.org/',
    developer: {
      name: 'Better Collective',
      url: 'https://www.hltv.org/'
    },
    features: [
      'Tournament coverage',
      'Team and player statistics',
      'Match results and schedules',
      'CS2 news and updates',
      'Demo database'
    ]
  },
  {
    id: 'liquipedia',
    name: 'Liquipedia',
    description: "Your esports companion: track results, get notified & never miss a match across multiple games including Valorant, CSGO/2, Dota, and more.",
    shortDescription: "Comprehensive esports wiki covering all major games",
    images: ['https://www.google.com/s2/favicons?domain=liquipedia.net&sz=256'],
    featured: false,
    category: 'Websites/Dashboards',
    games: ['Valorant', 'CSGO/2', 'Overwatch', 'Dota', 'League Of Legends', 'Deadlock', 'APEX Legends', 'Rainbow Six'],
    pricing: 'Free',
    url: 'https://liquipedia.net/',
    developer: {
      name: 'Team Liquid',
      url: 'https://liquipedia.net/'
    },
    features: [
      'Tournament information',
      'Team and player profiles',
      'Match schedules and results',
      'Transfer news',
      'Game-specific wikis'
    ]
  },
  {
    id: 'vlr',
    name: 'VLR.GG',
    description: "Valorant esports coverage - schedule, match results, team rankings, and comprehensive statistics for the competitive Valorant scene.",
    shortDescription: "Complete Valorant esports coverage platform",
    images: ['https://www.google.com/s2/favicons?domain=vlr.gg&sz=256'],
    featured: false,
    category: 'Websites/Dashboards',
    games: ['Valorant'],
    pricing: 'Free',
    url: 'https://vlr.gg',
    developer: {
      name: 'VLR',
      url: 'https://vlr.gg'
    },
    features: [
      'Match schedules and results',
      'Team rankings',
      'Player statistics',
      'Tournament coverage',
      'News updates'
    ]
  },
  {
    id: 'awpy',
    name: 'AWPY',
    description: "Python library to parse, analyze and visualize Counter-Strike 2 data, designed for researchers and analysts working with CS2 match data.",
    shortDescription: "Python library for CS2 data analysis",
    images: ['https://www.google.com/s2/favicons?domain=github.com&sz=256'],
    featured: true,
    category: 'Open-Source Projects',
    games: ['CSGO/2'],
    pricing: 'Free',
    url: 'https://github.com/pnxenopoulos/awpy',
    developer: {
      name: 'Peter Xenopoulos',
      url: 'https://github.com/pnxenopoulos/awpy'
    },
    features: [
      'CS2 demo parsing',
      'Data visualization',
      'Statistical analysis',
      'Match replay insights',
      'Research-oriented tools'
    ]
  },
  {
    id: 'boxcars',
    name: 'Boxcars',
    description: "Boxcars is a Rocket League replay parser library written in Rust, offering high-performance analysis of game replays.",
    shortDescription: "Rust-based Rocket League replay parser",
    images: ['https://www.google.com/s2/favicons?domain=github.com&sz=256'],
    featured: false,
    category: 'Open-Source Projects',
    games: ['Rocket League'],
    pricing: 'Free',
    url: 'https://github.com/nickbabcock/boxcars',
    developer: {
      name: 'Nick Babcock',
      url: 'https://github.com/nickbabcock/boxcars'
    },
    features: [
      'High-performance replay parsing',
      'Rust implementation',
      'Detailed match statistics',
      'Player positioning data',
      'Game event extraction'
    ]
  },
  {
    id: 'cassiopeia',
    name: 'Cassiopeia',
    description: "A Python adaptation of the Riot Games League of Legends API, making it easier to access and analyze LoL game data.",
    shortDescription: "Python wrapper for League of Legends API",
    images: ['https://www.google.com/s2/favicons?domain=github.com&sz=256'],
    featured: false,
    category: 'Open-Source Projects',
    games: ['League Of Legends'],
    pricing: 'Free',
    url: 'https://github.com/meraki-analytics/cassiopeia',
    developer: {
      name: 'Meraki Analytics',
      url: 'https://github.com/meraki-analytics/cassiopeia'
    },
    features: [
      'LoL API integration',
      'Match history retrieval',
      'Champion and summoner data',
      'League and tournament info',
      'Data caching capabilities'
    ]
  },
  {
    id: 'rattletrap',
    name: 'Rattletrap',
    description: "Rattletrap parses and generates Rocket League replays.",
    shortDescription: "Rocket League replay parser and generator",
    images: ['https://www.google.com/s2/favicons?domain=github.com&sz=256'],
    featured: false,
    category: 'Apps & Extensions',
    games: ['Rocket League'],
    pricing: 'Open Source',
    url: 'https://github.com/tfausak/rattletrap',
    developer: {
      name: 'Taylor Fausak',
      url: 'https://github.com/tfausak/rattletrap'
    },
    features: [
      'Replay parsing and generation',
      'Match data extraction',
      'Player statistics',
      'Game events tracking',
      'Analysis capabilities'
    ]
  },
  {
    id: 'hltv-api',
    name: 'HLTV API',
    description: "The unofficial HLTV Node.js API.",
    shortDescription: "Unofficial Node.js API for HLTV data",
    images: ['https://www.google.com/s2/favicons?domain=github.com&sz=256'],
    featured: false,
    category: 'Datasets/APIs',
    games: ['CSGO/2'],
    pricing: 'Open Source',
    url: 'https://github.com/gigobyte/HLTV',
    developer: {
      name: 'Stanislav Iliev',
      url: 'https://github.com/gigobyte/HLTV'
    },
    features: [
      'Match data retrieval',
      'Team and player stats',
      'Tournament information',
      'News and results',
      'CS2 event coverage'
    ]
  },
  {
    id: 'liquipediapy',
    name: 'Liquipediapy',
    description: "Unofficial Liquipedia Python API.",
    shortDescription: "Python API for Liquipedia data access",
    images: ['https://www.google.com/s2/favicons?domain=github.com&sz=256'],
    featured: false,
    category: 'Datasets/APIs',
    games: ['Dota', 'CSGO/2'],
    pricing: 'Open Source',
    url: 'https://github.com/c00kie17/liquipediapy',
    developer: {
      name: 'C00kie17',
      url: 'https://github.com/c00kie17/liquipediapy'
    },
    features: [
      'Liquipedia data scraping',
      'Tournament information',
      'Team and player profiles',
      'Match details',
      'Transfer news'
    ]
  },
  {
    id: 'valorantjs',
    name: 'ValorantJS',
    description: "This is an unofficial NodeJS library for interacting with the VALORANT API used in game.",
    shortDescription: "Unofficial NodeJS library for VALORANT API",
    images: ['https://www.google.com/s2/favicons?domain=github.com&sz=256'],
    featured: false,
    category: 'Datasets/APIs',
    games: ['Valorant'],
    pricing: 'Open Source',
    url: 'https://github.com/liamcottle/valorant.js',
    developer: {
      name: 'Liam Cottle',
      url: 'https://github.com/liamcottle/valorant.js'
    },
    features: [
      'VALORANT API integration',
      'Game data access',
      'Match history retrieval',
      'Player statistics',
      'Authentication handling'
    ]
  },
  {
    id: 'faceit-enhancer',
    name: 'Faceit Enhancer',
    description: "The browser extension that boosts you to the next level on FACEIT.",
    shortDescription: "Browser extension for enhanced FACEIT experience",
    images: ['https://www.google.com/s2/favicons?domain=repeek.gg&sz=256'],
    featured: false,
    category: 'Apps & Extensions',
    games: ['CSGO/2'],
    pricing: 'Free',
    url: 'https://repeek.gg/',
    developer: {
      name: 'Tim Cheung',
      url: 'https://repeek.gg/'
    },
    features: [
      'FACEIT enhancement',
      'Statistics overlay',
      'Player information',
      'Match insights'
    ]
  },
  {
    id: 'lol-teleport',
    name: 'LoL Teleport',
    description: "Chrome extension to easily jump between the same player on different League of Legends stats websites. Supports OP.GG, U.GG, Deeplol, and more.",
    shortDescription: "Jump between LoL stats websites for the same player",
    images: ['https://www.google.com/s2/favicons?domain=github.com&sz=256'],
    featured: false,
    category: 'Apps & Extensions',
    games: ['League Of Legends'],
    pricing: 'Open Source',
    url: 'https://github.com/isak102/lol-teleport',
    developer: {
      name: 'Isak102',
      url: 'https://github.com/isak102/lol-teleport'
    },
    features: [
      'Cross-site navigation',
      'Player profile linking',
      'Multiple website support',
      'Browser integration'
    ]
  },
  {
    id: 'leagueofreplay',
    name: 'Leagueofreplay',
    description: "Record & Replay league of legends games.",
    shortDescription: "Record and replay League of Legends matches",
    images: ['https://www.google.com/s2/favicons?domain=leagueofreplays.co&sz=256'],
    featured: false,
    category: 'Apps & Extensions',
    games: ['League Of Legends'],
    pricing: 'Open Source',
    url: 'https://leagueofreplays.co/',
    developer: {
      name: 'Baptiste Chaleil',
      url: 'https://leagueofreplays.co/'
    },
    features: [
      'Match recording',
      'Replay functionality',
      'Game analysis',
      'Performance tracking'
    ]
  }
];

// Helper function to get a tool by ID
export function getToolById(id: string): Tool | undefined {
  return tools.find(tool => tool.id === id);
}

// Helper function to get related tools
export function getRelatedTools(tool: Tool, limit: number = 3): Tool[] {
  // Find tools with same game or category, excluding the current tool
  return tools
    .filter(t => 
      t.id !== tool.id && 
      (t.category === tool.category || t.games.some(game => tool.games.includes(game)))
    )
    .slice(0, limit);
}

// Helper function to get featured tools
export function getFeaturedTools(): Tool[] {
  return tools.filter(tool => tool.featured);
}

// Helper function to get tools by game
export function getToolsByGame(game: Game): Tool[] {
  if (game === 'All') return tools;
  return tools.filter(tool => tool.games.includes(game));
}

// Helper function to get tools by category
export function getToolsByCategory(category: ToolCategory): Tool[] {
  return tools.filter(tool => tool.category === category);
}
