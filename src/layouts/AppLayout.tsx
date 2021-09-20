import { ReactNode } from 'react';
import { Navbar } from '../components/Navbar';

import { Container } from './styles';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  );
}
