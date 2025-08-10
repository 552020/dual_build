export default function About() {
  return (
    <main className="mx-auto max-w-(--breakpoint-2xl) px-8 py-16 md:px-24">
      <h1 className="text-5xl font-extrabold md:text-6xl dark:text-white">
        About
      </h1>
      <p className="mt-6 text-lg text-muted-foreground">
        This is a second static page to demonstrate multi-page static export. It
        will be emitted as <code>out/about/index.html</code> when you run the
        build.
      </p>
    </main>
  );
}
