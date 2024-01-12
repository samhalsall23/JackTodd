import ProjectPageContent from "../../components/ProjectPageContent";
import Image from "next/image";

export default function ProjectPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <>
      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1615003162333-d3ff3ce1f0f4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWx0cmElMjB3aWRlfGVufDB8fDB8fHww"
          alt="Hero Image"
          style={{ position: "relative", width: "100%", height: "auto" }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <ProjectPageContent id={id} />
      </div>
    </>
  );
}
