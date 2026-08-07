import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { Quality } from './pages/quality/quality';
import { Gallery } from './pages/gallery/gallery';
import { News } from './pages/news/news';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'services', component: Services },
  { path: 'quality', component: Quality },
  { path: 'gallery', component: Gallery },
  { path: 'news', component: News },
  { path: 'contact', component: Contact },
];
