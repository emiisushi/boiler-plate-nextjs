import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50">
      {/* HEADER */}
      <header className="border-b border-zinc-200 bg-white/60 px-6 py-4 backdrop-blur dark:border-zinc-800 dark:bg-black/50">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <h1 className="text-lg font-semibold">
            Rexie Margarette A. Vargas
          </h1>

          <nav className="flex gap-4 text-sm">
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#skills" className="hover:text-blue-500">Skills</a>
            <a href="#education" className="hover:text-blue-500">Education</a>
            <a href="#contact" className="hover:text-blue-500">Socials</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center">
        <div className="relative h-32 w-32 overflow-hidden rounded-full border border-zinc-300 dark:border-zinc-700">
          <Image
            src="c:\Users\ACER\Downloads\profile.jpg"
            alt="Profile"
            fill
            className="object-cover"
            priority
          />
        </div>

        <h2 className="text-4xl font-bold">
          Full-Stack Developer
        </h2>

        <p className="max-w-2xl text-zinc-600 dark:text-zinc-300">
          Hi, I’m <span className="font-semibold">Rexie Margarette A. Vargas</span>.
          I build modern web applications using both front-end and back-end
          technologies. I enjoy creating responsive interfaces, scalable APIs,
          and clean user experiences.
        </p>

        <div className="flex gap-4">
          <a
            href="#contact"
            className="rounded-lg bg-black px-5 py-2 text-white hover:bg-zinc-800 dark:bg-white dark:text-black"
          >
            Contact Me
          </a>

          <a
            href="https://github.com/emiisushi"
            target="_blank"
            className="rounded-lg border px-5 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-800"
          >
            View GitHub
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto w-full max-w-6xl px-6 py-12">
        <h3 className="text-2xl font-semibold">About Me</h3>

        <p className="mt-4 max-w-3xl text-zinc-600 dark:text-zinc-300">
          I am an aspiring Full-Stack Developer with a strong interest in
          building dynamic web applications. I enjoy working with both the
          front-end and back-end to create efficient, scalable, and
          user-friendly systems. My focus is on writing clean code, learning
          modern technologies, and continuously improving my development
          skills.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto w-full max-w-6xl px-6 py-12">
        <h3 className="text-2xl font-semibold">Skills</h3>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "PHP",
            "Laravel",
            "MySQL",
            "Tailwind CSS",
            "Git",
            "REST APIs",
            "Responsive Design"
          ].map((skill) => (
            <div
              key={skill}
              className="rounded-lg border border-zinc-200 p-3 text-center text-sm dark:border-zinc-800"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="mx-auto w-full max-w-6xl px-6 py-12">
        <h3 className="text-2xl font-semibold">Education</h3>

        <div className="mt-6 space-y-6 text-zinc-600 dark:text-zinc-300">
          <div>
            <p className="font-medium">
              Bachelor of Science in Information Technology
            </p>
            <p className="text-sm">
              Saint Paul University Philippines • 2025 – 2026
            </p>
          </div>

          <div>
            <p className="font-medium">Front-End Development Bootcamp</p>
            <p className="text-sm">
              Course Provider • 2023
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT / SOCIALS */}
      <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-12 text-center">
        <h3 className="text-2xl font-semibold">Connect With Me</h3>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href="https://github.com/emiisushi"
            target="_blank"
            className="rounded-lg border px-4 py-2 hover:bg-zinc-200 dark:border-zinc-800 dark:hover:bg-zinc-800"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourhandle"
            target="_blank"
            className="rounded-lg border px-4 py-2 hover:bg-zinc-200 dark:border-zinc-800 dark:hover:bg-zinc-800"
          >
            LinkedIn
          </a>

          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            className="rounded-lg border px-4 py-2 hover:bg-zinc-200 dark:border-zinc-800 dark:hover:bg-zinc-800"
          >
            Twitter
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200 px-6 py-6 text-center text-sm text-zinc-500 dark:border-zinc-800">
        © {new Date().getFullYear()} Rexie Margarette A. Vargas • Built with Next.js
      </footer>
    </div>
  );
}