import React from "react";
// Next
import { useRouter } from "next/router";
// Mui
import { Box, Button, Checkbox, Input, Typography } from "@mui/material";

const SignInPage = () => {
  // Hooks
  const router = useRouter();
  
  return (
    <Box
      sx={{
        background:
          "url(http://flixtv.volkovdesign.com/main/img/bg.jpg) center center",
        height: "100vh",
        width: "100wv",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        height="90%"
        width={400}
        borderRadius={2}
        bgcolor="primary.main"
        p={6}
        sx={{
          border: "1px solid",
          borderColor: "primary.light",
        }}
      >
        <Box textAlign="center">
          <Typography variant="h5" fontWeight="bold" color="common.white">
            MOVLIX TV
          </Typography>
        </Box>
        <Box sx={{ marginY: 5 }}>
          <Box width="100%" mt={2}>
            <Typography variant="subtitle2" color="common.white" my={0.5}>
              Email
            </Typography>
            <Input
              sx={{ bgcolor: "primary.light", p: 1, borderRadius: 2 }}
              fullWidth
            />
          </Box>
          <Box width="100%" mt={2}>
            <Typography variant="subtitle2" color="common.white" my={0.5}>
              Password
            </Typography>
            <Input
              sx={{ bgcolor: "primary.light", p: 1, borderRadius: 2 }}
              fullWidth
            />
          </Box>
          <Box width="100%" mt={2} display="flex" alignItems="center">
            <Checkbox sx={{ color: "secondary.main", borderRadius: "50%" }} />
            <Typography variant="subtitle2" color="common.white" my={0.5}>
              Remember Me
            </Typography>
          </Box>
          <Box width="100%" mt={2}>
            <Button
              sx={{
                bgcolor: "secondary.light",
                px: 1.5,
                py: 0.8,
                borderRadius: 2,
                color: "common.white",
                fontSize: 18,
                fontWeight: "bold",
                transition: "all 0.5s linear",
                "&:hover": {
                  bgcolor: "common.white",
                  color: "secondary.light",
                },
              }}
              fullWidth
            >
              Sign In
            </Button>
          </Box>
          <Box width="100%" mt={2} textAlign="center">
            <Typography
              variant="subtitle1"
              color="common.white"
              fontSize={16}
              my={0.5}
            >
              or
            </Typography>
          </Box>
          <Box
            width="100%"
            mt={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Button
              sx={{
                bgcolor: "#3b5999",
                px: 1.5,
                py: 0.8,
                borderRadius: 2,
                color: "common.white",
                width: 95,
                fontWeight: "bold",
                fontSize: 18,
                transition: "all 0.5s linear",
                "&:hover": {
                  bgcolor: "common.white",
                  color: "#3b5999",
                },
              }}
            >
              F
            </Button>
            <Button
              sx={{
                bgcolor: "#1da1f2",
                px: 1.5,
                py: 0.8,
                borderRadius: 2,
                color: "common.white",
                width: 95,
                fontWeight: "bold",
                fontSize: 18,
                transition: "all 0.5s linear",
                "&:hover": {
                  bgcolor: "common.white",
                  color: "#1da1f2",
                },
              }}
            >
              T
            </Button>
            <Button
              sx={{
                bgcolor: "#df4a32",
                px: 1.5,
                py: 0.8,
                borderRadius: 2,
                color: "common.white",
                width: 95,
                fontWeight: "bold",
                fontSize: 18,
                transition: "all 0.5s linear",
                "&:hover": {
                  bgcolor: "common.white",
                  color: "#df4a32",
                },
              }}
            >
              G
            </Button>
          </Box>
          <Box width="100%" mt={2} textAlign="center">
            <Typography
              variant="subtitle1"
              color="common.white"
              fontSize={16}
              my={0.5}
            >
              Don't have an account?{" "}
              <Typography
                variant="subtitle1"
                color="secondary.main"
                fontSize={16}
                component="span"
                sx={{ cursor: "pointer" }}
                onClick={() => router.push("/signup")}
              >
                Sign up!
              </Typography>
            </Typography>
            <Typography
              variant="subtitle1"
              color="secondary.main"
              fontSize={16}
              my={0.5}
              sx={{ cursor: "pointer" }}
            >
              Forgot password?
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignInPage;
