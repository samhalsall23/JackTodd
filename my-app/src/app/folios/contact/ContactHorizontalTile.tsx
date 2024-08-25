import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export const ContactDetailHorizontalTile = () => {
  return [
    {
      heading: "EMAIL",
      icon: <EmailIcon />,
      details: "designtodd1@gmail.com",
      href: "mailto:designtodd1@gmail.com",
    },
    {
      heading: "LINKEDIN",
      icon: <LinkedInIcon />,
      details: "/jacktodd648",
      href: "https://www.linkedin.com/in/jacktodd648/",
    },
    // {
    //   heading: "INSTAGRAM",
    //   icon: <InstagramIcon />,
    //   details: "@JackToddDesigns",
    // },
  ].map((contactDetail, index) => {
    return (
      <div key={index} className="contact-info-tile">
        <div className="contact-info-tile-header">
          {contactDetail.icon}
          <h2>{contactDetail.heading}</h2>
        </div>
        <div className="contact-info-tile-details">
          <a href={contactDetail.href}>{contactDetail.details}</a>
          <hr />
        </div>
      </div>
    );
  });
};
