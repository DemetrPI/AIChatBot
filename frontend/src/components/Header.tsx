import { AppBar, Box, Toolbar } from "@mui/material";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import NavigationLink from "./shared/NavigationLink";

const Header = () => {
  const auth = useAuth();

  return (
    <AppBar
      sx={{
        bgcolor: "transparent",
        position: "static",
        boxShadow: "lg",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
        }}
      >
        <Logo />
        <Box>
          {auth?.isLoggedIn ? (
            <>
              <NavigationLink
                bg="#00fffc"
                to="/chat"
                text="Go to Chat"
                textColor="black"
              />
              <NavigationLink
                bg="#51538F"
                to="/"
                text="Logout"
                textColor="white"
                onClick={auth.logout}
              />
            </>
          ) : (
            <>
            <NavigationLink
                bg="#00fffc"
                to="/login"
                text="Login"
                textColor="black"
                
              />
              <NavigationLink
                bg="#51538F"
                to="/signup"
                text="Signup"
                textColor="white"
              />

            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
