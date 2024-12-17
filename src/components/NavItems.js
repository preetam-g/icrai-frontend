import { useAuth0 } from '@auth0/auth0-react';

export const useNavItems = () => {
  const { isAuthenticated } = useAuth0();
  
  const navItems = isAuthenticated ? [
    { path: '/contests', label: 'Contests' },
    { path: '/createTeam', label: 'CreateTeam' },
    { path: '/contests/register', label: 'Hackathon' },
    { path: '/aboutUs', label: 'About Us' },
    { path: '/profile', label: 'soharsh' }
  ] : [
    { path: '/contests', label: 'Contests' },
    { path: '/createTeam', label: 'CreateTeam' },
    { path: '/contests/register', label: 'Hackathon' },
    { path: '/aboutUs', label: 'About Us' },
    { path: '/login', label: 'Login' }
  ];

  return navItems;
};
