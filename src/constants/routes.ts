import { Cog, Home, PieChart, ScrollText } from 'lucide-react';

interface AppRoute {
  path: string;
  label: string;
  icon: any;
}
export const appRoutes: Array<AppRoute> = [
  {
    path: '/home',
    label: 'Home',
    icon: Home,
  },
  {
    path: '/',
    label: 'Pennyslips',
    icon: ScrollText,
  },
  {
    path: '/',
    label: 'Budgeting',
    icon: PieChart,
  },
  {
    path: '/',
    label: 'Preferences',
    icon: Cog,
  },
];

export interface RouteState {
  [key: string]: boolean;
}

export const initialRouteState = (): RouteState => {
  let _routeState = {};
  appRoutes.map(({ label }) => {
    _routeState = {
      ..._routeState,
      [label]: label === 'Home' ? true : false,
    };
  });
  return _routeState;
};
