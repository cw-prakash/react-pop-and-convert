export default function Link({ className, href, children }) {
  return (
    <a href={href} className={`flex text-blue-500 ${className}`}>
      {children}
    </a>
  );
}
