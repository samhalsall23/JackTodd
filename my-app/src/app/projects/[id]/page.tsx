// import { useRouter } from "next/router";

import { useParams } from "next/navigation";

import ProjectPageContent from "../../components/ProjectPageContent"; // Import your Server Component
export default function ProjectPage({
  params: { id },
}: {
  params: { id: string };
}) {
  // Pass the id as a prop to the Server Component
  return (
    <>
      <ProjectPageContent id={id} />
    </>
  );
}
