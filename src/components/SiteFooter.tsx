import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          {profile.name}, {profile.location}
        </p>
        <p className="font-mono">
          Built with Next.js and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
