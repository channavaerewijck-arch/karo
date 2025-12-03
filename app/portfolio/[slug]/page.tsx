import { projects } from "@/data/projects";
import ProjectMetaBar from "@/components/portfolio/ProjectMetaBar";
import ProjectHero from "@/components/portfolio/ProjectHero";
import ProjectGallery from "@/components/portfolio/ProjectGallery";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="px-6 md:px-12 lg:px-20 py-32">
        <h1 className="text-3xl">Project not found.</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <ProjectMetaBar project={project} />
      <ProjectHero project={project} />
      <ProjectGallery images={project.images} />
    </div>
  );
}
