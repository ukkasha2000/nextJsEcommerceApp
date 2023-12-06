import AppHeader from "@/organisms/header";

export default function DashboardLayout({
  children, 
}) {
  return (
    <section>
      <AppHeader />

      {children}
    </section>
  );
}
