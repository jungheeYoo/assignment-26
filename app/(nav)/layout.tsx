import NavBar from '@/components/nav-bar';

export default function TabLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <NavBar />
    </div>
  );
}
