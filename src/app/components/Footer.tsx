export function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-gray-400 text-xs">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <p className="text-gray-400 text-xs">
          Built with React &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
