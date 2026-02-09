import Navigation from "./Navigation";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="row">
      <div className="col-2">
        <Navigation />
      </div>

      <div className="col-10">
        {children}
      </div>
    </div>
  );
}