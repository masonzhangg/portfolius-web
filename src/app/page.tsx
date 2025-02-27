"use client";
import { Box, Button, Typography, Link, Divider } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "3650px",
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
          marginTop: "12.5rem",
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
          top: "42.5rem",
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
          top: "47.5rem",
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
          top: "62.5rem",
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
          top: "87.5rem",
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
          top: "112.5rem",
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
          top: "142.5rem",
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
          top: "145.5rem",
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

      <Box 
        sx={{
          position: "absolute",
          background: "#d9d9d9",
          top: "152.5rem",
          left: "7.5rem",
          width: "75rem",
          height: "4rem",
          overflow: "hidden",
          whiteSpace: "nowrap",
          display: "flex",
          justifyContent: "center",
          borderRadius: "1rem",
        }}
      >
        Q1
      </Box>

      <Box 
        sx={{
          position: "absolute",
          background: "#d9d9d9",
          top: "162.5rem",
          left: "7.5rem",
          width: "75rem",
          height: "4rem",
          overflow: "hidden",
          whiteSpace: "nowrap",
          display: "flex",
          justifyContent: "center",
          borderRadius: "1rem",
        }}
      >
        Q2
      </Box>

      <Box 
        sx={{
          position: "absolute",
          background: "#d9d9d9",
          top: "172.5rem",
          left: "7.5rem",
          width: "75rem",
          height: "4rem",
          overflow: "hidden",
          whiteSpace: "nowrap",
          display: "flex",
          justifyContent: "center",
          borderRadius: "1rem",
        }}
      >
        Q3
      </Box>

      {/* Disclaimer Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          color: "white",
          textAlign: "justify",
          fontSize: "0.875rem",
          fontFamily: "Inter",
          lineHeight: "1.6",
          maxWidth: "90rem",
          margin: "auto",
          marginBottom: "5rem",
        }}
      >
        <Typography variant="body2" sx={{ mx: "2rem", whiteSpace: "pre-line" }}>
          <strong>Important Information</strong> <br />
          The information provided on this website and the Portfolius app is for
          informational and research purposes only. Portfolius Inc. is not an
          investment adviser and does not provide investment advice. Portfolius
          is an education tool designed to assist users in gathering and
          analyzing financial information. The app does not generate or manage
          investment advice. Users are solely responsible for their investment
          decisions based on the information provided through the Portfolius
          app.
          <br />
          <br />
          <strong>Education and Investing Tool</strong> <br />
          Portfolius is designed to provide users with financial data, market
          research, and automated analysis tools. However, any information or
          analysis presented through the Portfolius app should not be considered
          as personalized investment advice or recommendations. Users should
          conduct their own due diligence and consult with qualified financial
          professionals before making any investment decisions.
          <br />
          <br />
          <strong>Investment Risks</strong> <br />
          Investing in securities involves significant risk, including the risk
          of loss of principal. Past performance does not guarantee future
          results, and there can be no assurance that any investment strategy or
          security will meet its objectives or achieve any specific financial
          outcome. You should only invest risk capital that you can afford to
          lose without impacting your financial stability. Carefully consider
          your individual financial situation, investment goals, and risk
          tolerance before making any investment decisions.
          <br />
          <br />
          <strong>Consult with Professionals</strong> <br />
          You should consult with a qualified financial advisor, attorney, or
          tax professional regarding your personal financial situation,
          investment objectives, and any potential legal or tax implications
          before making any investment decisions. Portfolius does not provide
          legal, tax, or investment advice.
          <br />
          <br />
          <strong>Limitation of Liability</strong> <br />
          Portfolius, its affiliates, and employees disclaim any and all
          liability for any losses or damages arising from actions taken or
          reliance placed on the information provided on this website or through
          the Portfolius app. This includes, but is not limited to, losses
          related to the purchase or sale of securities or other financial
          instruments, changes in market conditions, or any other investment
          outcomes.
          <br />
          <br />
          <strong>No Guarantees</strong> <br />
          No representation is made that any investment strategy, security, or
          financial product discussed on this website or through the Portfolius
          app will be profitable or suitable for any particular individual. The
          content provided is based on sources believed to be reliable but is
          not guaranteed to be accurate, complete, or timely.
        </Typography>
      </Box>

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
