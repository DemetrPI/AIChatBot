import { Avatar, Box, Button, Typography } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { red } from "@mui/material/colors";

const Chat = () => {
  const chatMessage = [
    { role: 'user', content: 'Hello, how can I help?' },
    { role: 'assistant', content: "Hi! I'm here to assist you." },
    { role: 'user', content: "What's the weather like today?" },
    { role: 'assistant', content: 'The weather is sunny with a high of 25°C.' },
    { role: 'user', content: 'Thanks for the information!' },
    { role: 'assistant', content: "You're welcome. Is there anything else I can assist you with?" },
  ];
  const auth = useAuth();
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        mt: 3,
        gap: 3,
      }}
    >
      <Box
        sx={{
          display: { md: "flex", sm: "none", xs: "none" },
          flex: 0.2,
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "60vh",
            bgcolor: "teal",
            borderRadius: 5,
            flexDirection: "column",
            mx: 3,
          }}
        >
          <Avatar
            sx={{
              mx: "auto",
              my: 2,
              bgcolor: "white",
              color: "black",
              fontWeight: 700,
            }}
          >
            {auth?.user?.name && auth?.user?.name.trim().split(" ").length > 1
              ? `${auth.user.name.trim().split(" ")[0][0]}${
                  auth.user.name.trim().split(" ")[1][0]
                }`
              : auth?.user?.name.trim()[0]}
          </Avatar>
          <Typography
            sx={{
              mx: "auto",
              fontFamily: "work sans",
            }}
          >
            You are talking to ChatBot
          </Typography>
          <Typography
            sx={{
              mx: "auto",
              fontFamily: "work sans",
              my: 4,
              p: 3,
            }}
          >
            You can ask different questions, but avoid sharing personal data!
          </Typography>
          <Button
            sx={{
              width: "200px",
              my: "auto",
              color: "white",
              fontWeight: "700",
              borderRadius: 3,
              mx: "auto",
              bgcolor: red[500],
              ":hover": { bgcolor: red.A400 },
            }}
          >
            CLEAR CONVERSATION
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flex: { md: 0.8, xs: 1, sm: 1 },
          flexDirection: "column",
          px: 3,
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "40px",
            color: "white",
            mb: 2,
            mx: "auto",
          }}
        >
          Model - GPT-3.5 Turbo
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "60vh",
            borderRadius: 3,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            overflow: "scroll",
            overflowX: "hidden",
            overflowY:"auto",
            scrollBehavior: "smooth",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Chat;
