import {Home} from '../home';
import {Detail} from '../detail';
import Movie from '../home/movie/Movie';
import Video from '../home/video/Video';
import Mine from '../home/mine/Mine';
import Hot from '../home/movie/hot/Hot';


const routes = [
  {
    path: '/home',
    component: Home,
    // children: [
    //   {
    //     path: '/home/movie',
    //     component: Movie,
    //     children: [
    //       {
    //         path: '/home/movie/hot',
    //         component: Hot
    //       }
    //     ]
    //   },
    //   {
    //     path: '/home/video',
    //     component: Video
    //   },
    //   {
    //     path: '/home/mine',
    //     component: Mine
    //   }
    // ]
  },
  {
    path: '/detail/:id',
    component: Detail
  }
]

export default routes;