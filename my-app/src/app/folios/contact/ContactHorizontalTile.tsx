import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export const ContactDetailHorizontalTile = () => {
  return [
    { heading: "EMAIL", icon: <EmailIcon />, details: "JackTodd@gmail.com" },
    { heading: "LINKEDIN", icon: <LinkedInIcon />, details: "/JackTodd" },
    {
      heading: "INSTAGRAM",
      icon: <InstagramIcon />,
      details: "@JackToddDesigns",
    },
  ].map((contactDetail, index) => {
    return (
      <div key={index} className="contact-info-tile">
        <div className="contact-info-tile-header">
          {contactDetail.icon}
          <h2>{contactDetail.heading}</h2>
        </div>
        <div className="contact-info-tile-details">
          <p>{contactDetail.details}</p>
          <hr />
        </div>
      </div>
    );
  });
};
