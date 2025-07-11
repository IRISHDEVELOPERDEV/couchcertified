import { StreamingPlatform, Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'movies-shows',
    name: 'Movies & Shows',
    description: 'Free streaming platforms for movies and TV shows',
    icon: 'film'
  },
  {
    id: 'anime',
    name: 'Anime',
    description: 'Dedicated anime streaming platforms',
    icon: 'sparkles'
  },
  {
    id: 'manga',
    name: 'Manga',
    description: 'Online manga reading platforms',
    icon: 'book-open'
  },
  {
    id: 'live-tv',
    name: 'Live TV',
    description: 'Live television and sports streaming',
    icon: 'tv'
  },
  {
    id: 'paid-services',
    name: 'Paid Services',
    description: 'Premium subscription streaming services',
    icon: 'star'
  }
];

export const streamingPlatforms: StreamingPlatform[] = [
  // Movies & Shows
  {
    id: '1shows',
    name: '1Shows',
    url: 'https://www.1shows.ru/',
    category: 'movies-shows',
    description: 'Free movies and TV shows streaming'
  },
  {
    id: 'flickystream',
    name: 'FlickyStream',
    url: 'https://flickystream.com/',
    category: 'movies-shows',
    description: 'Stream movies and series online'
  },
  {
    id: 'rgshows',
    name: 'RgShows',
    url: 'https://www.rgshows.me/',
    category: 'movies-shows',
    description: 'Latest movies and TV shows'
  },
  {
    id: 'vidjoy',
    name: 'Vidjoy',
    url: 'https://vidjoy.pro/',
    category: 'movies-shows',
    description: 'Watch movies and shows for free'
  },
  {
    id: 'rivestream',
    name: 'RiveStream',
    url: 'https://rivestream.org/',
    category: 'movies-shows',
    description: 'Free streaming platform'
  },
  {
    id: 'spenflix',
    name: 'Spenflix',
    url: 'https://watch.spencerdevs.xyz/',
    category: 'movies-shows',
    description: 'Movies and TV series streaming'
  },
  {
    id: 'filmcave',
    name: 'FilmCave',
    url: 'https://filmcave.net/',
    category: 'movies-shows',
    description: 'Cave of free movies'
  },
  {
    id: 'pstream',
    name: 'P-Stream',
    url: 'https://pstream.org/',
    category: 'movies-shows',
    description: 'Premium streaming experience'
  },
  {
    id: 'catflix',
    name: 'CatFlix',
    url: 'https://catflix.su/home',
    category: 'movies-shows',
    description: 'Feline-friendly streaming'
  },
  {
    id: 'cinemadeck',
    name: 'CinemaDeck',
    url: 'https://cinemadeck.com/',
    category: 'movies-shows',
    description: 'Your cinema deck online'
  },
  {
    id: 'nepu',
    name: 'Nepu',
    url: 'https://nepu.to/',
    category: 'movies-shows',
    description: 'Stream movies and shows'
  },
  {
    id: 'broflix',
    name: 'BroFlix',
    url: 'https://broflix.cc/',
    category: 'movies-shows',
    description: 'Bro-approved streaming'
  },
  {
    id: 'freek',
    name: 'Freek',
    url: 'https://freek.to/',
    category: 'movies-shows',
    description: 'Free streaming platform'
  },
  {
    id: 'cineby',
    name: 'Cineby',
    url: 'https://www.cineby.ru/',
    category: 'movies-shows',
    description: 'Cinema by your side'
  },
  {
    id: 'fmovies',
    name: 'Fmovies',
    url: 'https://fmovies-hd.to/home/',
    category: 'movies-shows',
    description: 'HD movies and shows',
    featured: true
  },
  {
    id: 'xprime',
    name: 'Xprime',
    url: 'https://xprime.tv/',
    category: 'movies-shows',
    description: 'Prime streaming experience'
  },
  {
    id: 'bflix',
    name: 'Bflix',
    url: 'https://bflix.sh/home/',
    category: 'movies-shows',
    description: 'Stream movies and series'
  },

  // Anime
  {
    id: 'miruro',
    name: 'Miruro',
    url: 'https://www.miruro.tv/',
    category: 'anime',
    description: 'High-quality anime streaming',
    featured: true
  },
  {
    id: 'hianime',
    name: 'HiAnime',
    url: 'https://hianime.to/home',
    category: 'anime',
    description: 'Premium anime streaming experience'
  },
  {
    id: 'enma',
    name: 'Enma',
    url: 'https://www.enma.lol/',
    category: 'anime',
    description: 'Anime streaming platform'
  },
  {
    id: 'aniwatch',
    name: 'Aniwatch',
    url: 'https://aniwatchtv.to/home',
    category: 'anime',
    description: 'Watch anime online'
  },
  {
    id: 'animag',
    name: 'Animag',
    url: 'https://animag.to/',
    category: 'anime',
    description: 'Anime magazine streaming'
  },
  {
    id: 'kaido',
    name: 'Kaido',
    url: 'https://kaido.to/home',
    category: 'anime',
    description: 'Anime streaming service'
  },
  {
    id: 'anicrush',
    name: 'Anicrush',
    url: 'https://anicrush.to/home',
    category: 'anime',
    description: 'Crush on anime streaming'
  },
  {
    id: 'kickassanime',
    name: 'KickAssAnime',
    url: 'https://kaa.mx/',
    category: 'anime',
    description: 'Kick-ass anime collection'
  },
  {
    id: 'animekai',
    name: 'AnimeKai',
    url: 'https://animekai.to/home',
    category: 'anime',
    description: 'Anime streaming platform'
  },
  {
    id: 'animez',
    name: 'AnimeZ',
    url: 'https://animez.org/',
    category: 'anime',
    description: 'Z-level anime streaming'
  },

  // Manga
  {
    id: 'mangadex',
    name: 'MangaDex',
    url: 'https://mangadex.org/',
    category: 'manga',
    description: 'The ultimate manga reading platform',
    featured: true
  },
  {
    id: 'comick',
    name: 'Comick',
    url: 'https://comick.io/home2',
    category: 'manga',
    description: 'Comic and manga reader'
  },
  {
    id: 'mangareader',
    name: 'MangaReader',
    url: 'https://mangareader.to/home',
    category: 'manga',
    description: 'Read manga online'
  },
  {
    id: 'mangago',
    name: 'Mangago',
    url: 'https://mangago.me/',
    category: 'manga',
    description: 'Go read manga'
  },
  {
    id: 'mangafire',
    name: 'MangaFire',
    url: 'https://mangafire.to/home',
    category: 'manga',
    description: 'Fire up your manga reading'
  },
  {
    id: 'allmanga',
    name: 'AllManga',
    url: 'https://allmanga.to/manga?cty=ALL',
    category: 'manga',
    description: 'All manga in one place'
  },
  {
    id: 'mangakakalot',
    name: 'MangaKakalot',
    url: 'https://mangakakalot.com/',
    category: 'manga',
    description: 'Manga reading platform'
  },
  {
    id: 'asuracomic',
    name: 'Asuracomic',
    url: 'https://asuracomic.net/',
    category: 'manga',
    description: 'Comic and manga platform'
  },
  {
    id: 'mangahub',
    name: 'MangaHub',
    url: 'https://mangahub.io/',
    category: 'manga',
    description: 'Hub for manga readers'
  },
  {
    id: 'mangapark',
    name: 'MangaPark',
    url: 'https://mangapark.io/',
    category: 'manga',
    description: 'Park your manga reading here'
  },
  {
    id: 'weebcentral',
    name: 'WeebCentral',
    url: 'https://weebcentral.com/',
    category: 'manga',
    description: 'Central hub for weebs'
  },
  {
    id: 'mangakatana',
    name: 'MangaKatana',
    url: 'https://mangakatana.com/',
    category: 'manga',
    description: 'Sharp manga collection'
  },

  // Live TV
  {
    id: 'thetvapp',
    name: 'TheTvApp',
    url: 'https://thetvapp.to/',
    category: 'live-tv',
    description: 'Live TV streaming app'
  },
  {
    id: 'tv247',
    name: 'TV247',
    url: 'https://tv247.us/all-channels/',
    category: 'live-tv',
    description: '24/7 TV channels'
  },
  {
    id: 'publiciptv',
    name: 'PublicIPTV',
    url: 'https://publiciptv.com/',
    category: 'live-tv',
    description: 'Public IPTV channels'
  },
  {
    id: 'sportplus',
    name: 'Sport+',
    url: 'https://en12.sportplus.live/',
    category: 'live-tv',
    description: 'Sports streaming platform'
  },
  {
    id: 'streameast',
    name: 'StreamEast',
    url: 'https://the.streameast.app/v86',
    category: 'live-tv',
    description: 'Eastern sports streaming'
  },
  {
    id: 'sportsurge',
    name: 'Sportsurge',
    url: 'https://v2.sportsurge.net/',
    category: 'live-tv',
    description: 'Sports streaming surge',
    featured: true
  },
  {
    id: 'tvgarden',
    name: 'TV Garden',
    url: 'https://tv.garden/',
    category: 'live-tv',
    description: 'Garden of TV channels'
  },
  {
    id: 'totv',
    name: 'TOTV',
    url: 'http://totv.org/tv/usa/',
    category: 'live-tv',
    description: 'Total TV experience'
  },

  // Paid Services
  {
    id: 'disney-plus',
    name: 'Disney+',
    url: 'https://www.disneyplus.com/',
    category: 'paid-services',
    description: 'The official Disney streaming service',
    featured: true
  },
  {
    id: 'shudder',
    name: 'Shudder',
    url: 'https://www.shudder.com/',
    category: 'paid-services',
    description: 'Horror and thriller streaming'
  },
  {
    id: 'hulu',
    name: 'Hulu',
    url: 'https://www.hulu.com/',
    category: 'paid-services',
    description: 'Premium streaming service'
  },
  {
    id: 'netflix',
    name: 'Netflix',
    url: 'https://www.netflix.com/',
    category: 'paid-services',
    description: 'World\'s leading streaming platform',
    featured: true
  },
  {
    id: 'max',
    name: 'MAX',
    url: 'https://www.max.com/',
    category: 'paid-services',
    description: 'HBO Max premium content'
  },
  {
    id: 'apple-tv',
    name: 'Apple TV+',
    url: 'https://tv.apple.com/',
    category: 'paid-services',
    description: 'Apple\'s streaming service'
  },
  {
    id: 'amazon-prime',
    name: 'Amazon Prime',
    url: 'https://www.amazon.com/gp/video/',
    category: 'paid-services',
    description: 'Amazon\'s video streaming'
  },
  {
    id: 'paramount-plus',
    name: 'Paramount+',
    url: 'https://www.paramountplus.com/',
    category: 'paid-services',
    description: 'Paramount streaming service'
  },
  {
    id: 'crunchyroll',
    name: 'Crunchyroll',
    url: 'https://www.crunchyroll.com/',
    category: 'paid-services',
    description: 'Premium anime streaming'
  },
  {
    id: 'mgm-plus',
    name: 'MGM+',
    url: 'https://www.mgmplus.com/',
    category: 'paid-services',
    description: 'MGM premium content'
  },
  {
    id: 'peacock',
    name: 'Peacock',
    url: 'https://www.peacocktv.com/',
    category: 'paid-services',
    description: 'NBC\'s streaming platform'
  },
  {
    id: 'amc-plus',
    name: 'AMC+',
    url: 'https://www.amcplus.com/',
    category: 'paid-services',
    description: 'AMC premium streaming'
  }
];
