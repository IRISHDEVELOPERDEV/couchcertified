export interface StreamingPlatform {
  id: string;
  name: string;
  url: string;
  description?: string;
  category: 'movies-shows' | 'anime' | 'manga' | 'live-tv' | 'paid-services';
  logo?: string;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}
