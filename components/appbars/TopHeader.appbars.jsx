import React, { useState } from "react";
// Mui
import {
  AppBar,
  Container,
  Menu,
  Typography,
  IconButton,
  Toolbar,
  Box,
  MenuItem,
  Tooltip,
  Avatar,
  Button,
  alpha,
  Drawer,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
// Icons
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
// Next
import { useRouter } from "next/router";
import Link from "next/link";

const pages = [
  { id: 1, name: "Home", route: "/" },
  { id: 2, name: "Category", route: "/category" },
  { id: 3, name: "Live", route: "/live" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function TopHeaderAppBar() {
  // Hooks
  const router = useRouter();
  // states for menus
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // handlers for user menu open and close
  const handleOpenUserMenu = () => {
    setUserMenuOpen(true);
  };
  const handleCloseUserMenu = () => {
    setUserMenuOpen(false);
  };
  // handlers for sidebar menu open and close
  const handleCloseMenu = () => {
    setOpen(false);
  };
  const handleOpenMenu = () => {
    setOpen(true);
  };

  return (
    <AppBar position="sticky" top={0} p={4}>
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "secondary.main",
              textDecoration: "none",
            }}
          >
            MOVLIX
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenMenu}
              sx={{ color: "secondary.main" }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={handleCloseMenu}>
              <List sx={{ bgcolor: "primary.main" }}>
                {pages.map((page) => (
                  <ListItem key={page.id} disablePadding>
                    <Link href={page.route}>
                      <ListItemText
                        primary={page.name}
                        sx={{ color: "common.white" }}
                      />
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </Box>

          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "secondary.main",
              textDecoration: "none",
            }}
          >
            MOVLIX
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, mx: 1 }}>
            {pages.map((page) => (
              <Link key={page.name} href={page.route}>
                <Button
                  onClick={handleCloseMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontSize: 13,
                    mx: 1,
                  }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {user ? (
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
            ) : (
              <Box
                display="flex"
                alignItems="center"
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    color: "secondary.main",
                    transition: "all 0.3s linear",
                  },
                }}
                onClick={() => router.push("signin")}
              >
                <Typography variant="h5" fontWeight="bold" fontSize={17}>
                  Sign in
                </Typography>
                <LoginIcon
                  sx={{ fontSize: 28, mx: 1, color: "secondary.main" }}
                />
              </Box>
            )}

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={userMenuOpen}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={userMenuOpen}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default TopHeaderAppBar;
