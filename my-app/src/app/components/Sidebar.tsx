import React, { useState } from "react";

import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Collapse,
  IconButton,
} from "@mui/material";
import { useRouter } from "next/navigation";

import projects from "../data/projects.json";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import ArticleIcon from "@mui/icons-material/Article";
import EmailIcon from "@mui/icons-material/Email";

import ExpandLess from "@mui/icons-material/ExpandLess";

import ExpandMore from "@mui/icons-material/ExpandMore";

type Anchor = "top" | "left" | "bottom" | "right";

const Sidebar = ({
  anchor,
  open,
  onClose,
  onOpen,
}: {
  anchor: Anchor;
  open: boolean;
  onClose: React.ReactEventHandler<{}>;
  onOpen: React.ReactEventHandler<{}>;
}) => {
  const [expand, setExpand] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setExpand(!expand);
  };

  const onProjectClick = (
    { id }: { id: string },
    event: React.SyntheticEvent<{}, Event>
  ) => {
    router.push(`/projects/${id}`);
    onClose(event);
    setExpand(false);
  };

  const handleLevelOneClick = (
    path: string,
    event: React.SyntheticEvent<{}, Event>
  ) => {
    router.push(path);
    onClose(event);
    setExpand(false);
  };

  const fontSizeSidebar: string = "20px";

  const projectDropDown = () => {
    return (
      <Collapse in={expand} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {projects.map((project) => (
            <ListItemButton
              onClick={(event) => onProjectClick({ id: project.id }, event)}
            >
              <ListItemText
                primary={project.title}
                primaryTypographyProps={{
                  style: { color: "white", fontSize: "16px" },
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    );
  };

  const list = (anchor: Anchor) => (
    <div>
      <div style={{ height: "40px" }}>
        <IconButton
          style={{
            position: "absolute",
            top: "4px",
            right: "0",
            zIndex: 1000,
            color: "white",
          }}
          onClick={onClose}
        >
          <CloseIcon fontSize="large" />
        </IconButton>
      </div>

      <Box sx={{ width: 250 }} role="presentation">
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={(event) => handleLevelOneClick("/", event)}
            >
              <ListItemIcon>
                <HomeIcon
                  style={{ color: "white", fontSize: fontSizeSidebar }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Home"
                primaryTypographyProps={{
                  style: { color: "white", fontSize: fontSizeSidebar },
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={(event) => handleLevelOneClick("/", event)}
            >
              <ListItemIcon>
                <PersonIcon
                  style={{ color: "white", fontSize: fontSizeSidebar }}
                />
              </ListItemIcon>
              <ListItemText
                primary="About"
                primaryTypographyProps={{
                  style: { color: "white", fontSize: fontSizeSidebar },
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <ArticleIcon
                style={{ color: "white", fontSize: fontSizeSidebar }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Project"
              primaryTypographyProps={{
                style: { color: "white", fontSize: fontSizeSidebar },
              }}
            />
            {expand ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          {projectDropDown()}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <EmailIcon
                  style={{ color: "white", fontSize: fontSizeSidebar }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Contact"
                primaryTypographyProps={{
                  style: { color: "white", fontSize: fontSizeSidebar },
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </div>
  );

  return (
    <>
      <SwipeableDrawer
        anchor={anchor}
        open={open}
        onClose={onClose}
        onOpen={onOpen}
      >
        {list(anchor)}
      </SwipeableDrawer>
    </>
  );
};

export default Sidebar;
