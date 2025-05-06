import ProjectsFolioPage from "@/app/folios/projects/ProjectsFolioPage";

export default function Page({ params: { id } }: { params: { id: string } }) {
    return <ProjectsFolioPage id={id} />;
}
