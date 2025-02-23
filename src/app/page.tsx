import { useState, useEffect } from "react";
import { Box, Button, TextField, Typography, Link } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#1b1b1b",
        overflow: "auto",
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{
          position: "absolute",
          color: "white",
          fontSize: "2.25rem",
          fontFamily: "Quicksand",
          marginTop: "2rem",
          marginLeft: "2rem",
        }}
      >
        Portfolius
      </Typography>
      <Link href="https://portfolius.ai/comingsoon" target="_blank">
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            position: "absolute",
            top: "2rem",
            right: "2rem",
            backgroundColor: "#1b1b1b",
            color: "black",
            fontFamily: "Quicksand",
            width: "5.5rem",
            background: "#d9d9d9",
            borderRadius: "32px",
            height: "3rem",
          }}
        >
          Get App
        </Button>
      </Link>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10rem",
          }}
        >
          <Image
            src="/portfolius.png"
            width={120}
            height={116}
            alt="Portfolius Logo"
          />
        </Box>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            position: "absolute",
            top: "20.5rem",
            fontFamily: "Inter",
            color: "white",
            fontSize: "2.75rem",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          Learn, Practice, Master
          <br />
          Investing.
        </Typography>
      </Box>
    </Box>
  );
}
