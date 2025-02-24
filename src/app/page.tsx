"use client";
import { Box, Button, Typography, Link, Divider } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "4000px",
        backgroundColor: "#1b1b1b",
        overflow: "auto",
      }}
    >
      {/* Header Title */}
      <Typography
        variant="h1"
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

      {/* Get App Button */}
      <Link href="https://portfolius.ai/comingsoon" target="_blank">
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            position: "absolute",
            top: "2rem",
            right: "2rem",
            backgroundColor: "#d9d9d9",
            color: "black",
            fontFamily: "Quicksand",
            width: "5.5rem",
            borderRadius: "32px",
            height: "3rem",
          }}
        >
          Get App
        </Button>
      </Link>

      {/* Center Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "17.5rem",
        }}
      >
        {/* Logo */}
        <Image
          src="/portfolius.png"
          width={120}
          height={116}
          alt="Portfolius Logo"
        />

        {/* Tagline */}
        <Typography
          variant="h2"
          sx={{
            marginTop: "2rem",
            fontFamily: "Inter",
            color: "white",
            fontSize: "2.75rem",
            textAlign: "center",
          }}
        >
          Learn, Practice, Master
          <br />
          Investing.
        </Typography>

        {/* App Store & Google Play Buttons */}
        <Box sx={{ marginTop: "2rem" }}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Link href="https://portfolius.ai/comingsoon" target="_blank">
              <Image
                src="/app-store.svg"
                width={150}
                height={50}
                alt="App Store"
              />
            </Link>
          </Box>
          <Box>
            <Link href="https://portfolius.ai/comingsoon" target="_blank">
              <Image
                src="/google-play.png"
                width={150}
                height={50}
                alt="Google Play Store"
              />
            </Link>
          </Box>
        </Box>
      </Box>

      {/* "Used By Those At" Section */}
      <Typography
        variant="h2"
        sx={{
          position: "absolute",
          top: "50rem",
          fontFamily: "Inter",
          color: "white",
          fontSize: "1.5rem",
          fontWeight: "600",
          textAlign: "center",
          width: "100%",
        }}
      >
        Used By Those At:
      </Typography>

      {/* Scrolling Logos Section */}
      <Box
        sx={{
          position: "absolute",
          top: "54rem",
          width: "100%",
          overflow: "hidden",
          whiteSpace: "nowrap",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "200%",
            animation: "scroll 30s linear infinite",
          }}
        >
          {[...Array(10)].map((_, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "6rem",
                flexShrink: 0,
              }}
            >
              <Image
                src="/googleplaylogo.png"
                width={70}
                height={40}
                alt="Google Play"
                style={{ marginLeft: "7rem" }}
              />
              <Image
                src="/googlelogo.png"
                width={110}
                height={40}
                alt="Google"
              />
              <Image
                src="/yclogo.png"
                width={200}
                height={40}
                alt="Y Combinator"
              />
              <Image
                src="/berkeleylogo.png"
                width={160}
                height={50}
                alt="UC Berkeley"
              />
              <Image
                src="/appstorelogo.png"
                width={70}
                height={40}
                alt="App Store"
              />
              <Image
                src="/robinhoodlogo.png"
                width={200}
                height={40}
                alt="Robinhood"
              />
              <Image src="/mitlogo.png" width={80} height={40} alt="MIT" />
              <Image src="/tesla.png" width={80} height={40} alt="Tesla" />
              <Image src="/twitterlogo.png" width={60} height={40} alt="X" />
            </Box>
          ))}
        </Box>
      </Box>

      {/* "Demo" Section */}
      <Box
        sx={{
          position: "absolute",
          background: "#d9d9d9",
          top: "65rem",
          left: "10rem",
          width: "30rem",
          height: "19rem",
          overflow: "hidden",
          whiteSpace: "nowrap",
          display: "flex",
          justifyContent: "center",
          borderRadius: "1rem",
        }}
      >
        Photo
      </Box>

      <Box
        sx={{
          position: "absolute",
          background: "#d9d9d9",
          top: "90rem",
          right: "10rem",
          width: "30rem",
          height: "19rem",
          overflow: "hidden",
          whiteSpace: "nowrap",
          display: "flex",
          justifyContent: "center",
          borderRadius: "1rem",
        }}
      >
        Video
      </Box>

      <Box
        sx={{
          position: "absolute",
          background: "#d9d9d9",
          top: "115rem",
          left: "10rem",
          width: "30rem",
          height: "19rem",
          overflow: "hidden",
          whiteSpace: "nowrap",
          display: "flex",
          justifyContent: "center",
          borderRadius: "1rem",
        }}
      >
        Photo
      </Box>

      {/* Divider */}
      <Divider
        sx={{
          position: "absolute",
          top: "145rem",
          left: "calc(50% - 10rem)",
          width: "20rem",
          borderColor: "white",
        }}
      />

      {/* "FAQ" Section */}
      <Typography
        variant="h2"
        sx={{
          position: "absolute",
          top: "148rem",
          left: "calc(50% - 3rem)",
          fontFamily: "Inter",
          color: "white",
          fontSize: "3rem",
          fontWeight: "300",
          textAlign: "center",
        }}
      >
        FAQ
      </Typography>

































      {/* Smooth Infinite Scrolling */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-200%);
          }
        }
      `}</style>
    </Box>
  );
}
