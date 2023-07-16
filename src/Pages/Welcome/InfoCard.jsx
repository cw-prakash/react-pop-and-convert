export default function InfoCard({ title, children }) {
  return (
    <div className="flex p-9 gap-4 flex-col shadow-md">
      <h4 className="text-lg font-semibold">{title}</h4>
      {children}
    </div>
  );
}
