import Link from "next/link";

export default function Contact() {
  const contacts = [
    {
      label: "Email",
      value: "nicmocard@gmail.com",
      href: "mailto:nicmocard@gmail.com",
      icon: "✉️",
    },
    {
      label: "Instagram",
      value: "@nicolemorcar",
      href: "https://www.instagram.com/nicolemorcar/",
      icon: "📸",
    },
    {
      label: "GitHub",
      value: "NicoleMCardenas",
      href: "https://github.com/NicoleMCardenas",
      icon: "💻",
    },
    {
      label: "LinkedIn",
      value: "nicolemorcar",
      href: "https://www.linkedin.com/in/nicolemorcar",
      icon: "💼",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-zinc-200 px-6">
      {/* Botón de regreso */}
      <Link
        href="/"
        className="absolute top-6 left-6 text-zinc-400 hover:text-white transition text-sm flex items-center gap-2"
      >
        ← Back to Home
      </Link>

      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-white animate-fade-in">
        Let’s Connect 🚀
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl w-full">
        {contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center justify-center p-8 bg-zinc-800/40 rounded-xl border border-zinc-700 hover:border-zinc-400 transition-all hover:scale-[1.02]"
          >
            <div className="text-3xl mb-4">{contact.icon}</div>
            <p className="font-semibold text-lg">{contact.value}</p>
            <span className="text-sm text-zinc-400 mt-1">{contact.label}</span>
          </a>
        ))}
      </div>
    </main>
  );
}
