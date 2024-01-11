import ProjectPageContent from "../../components/ProjectPageContent";

export default function ProjectPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <>
      <ProjectPageContent id={id} />
    </>
  );
}
