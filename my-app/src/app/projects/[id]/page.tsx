import ProjectPageContent from "../../components/ProjectPageContent";

export default function ProjectPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <>
      <div className="hero-image">
        <img
          src="/assets/projects/2-imagemaker/IMAGEMAKER-WIDE.png"
          alt="Hero Image"
          style={{
            position: "absolute",
            top: "0",
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <ProjectPageContent id={id} />
      </div>
    </>
  );
}
