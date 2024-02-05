export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="flex flex-col p-24 items-center">
        <h1 className="text-lg">Layout General</h1>
        {children}
      </main>
    </>
  );
}
