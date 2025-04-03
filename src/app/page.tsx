"use client";
import {
  Box,
  Button,
  Typography,
  Link,
  Divider,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useTheme, useMediaQuery } from "@mui/material";

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  // FAQs
  const faqs = [
    {
      question: "What is Portfolius?",
      answer:
        "Portfolius is a social trading simulation platform where you can practice investing with virtual money, track market trends, and see what your friends are trading.",
    },
    {
      question: "Is real money used on Portfolius?",
      answer:
        "No, all trades on Portfolius are made with simulated money. It’s a risk-free environment to learn, experiment, and compete with friends.",
    },
    {
      question: "When will the app be available?",
      answer:
        "Portfolius is currently in development. Join our waitlist to be notified when it launches!",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#1b1b1b",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Header Section */}
      <Container
        maxWidth="xl"
        sx={{ pt: { xs: 2, md: 4 }, pb: { xs: 2, md: 4 } }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "white",
              fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2.25rem" },
              fontFamily: "Quicksand",
            }}
          >
            Portfolius
          </Typography>

          <Link
            href="https://tally.so/r/nWqloa"
            target="_blank"
            sx={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                background: "linear-gradient(135deg, #f0f0f0, #d9d9d9)",
                color: "black",
                fontFamily: "Quicksand",
                borderRadius: "32px",
                px: { xs: 2, md: 3 },
                py: { xs: 1, md: 1.5 },
                fontSize: { xs: "0.8rem", md: "1rem" },
                "&:hover": {
                  background: "linear-gradient(135deg, #ffffff, #e0e0e0)",
                  boxShadow: "0px 6px 14px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              Get App
            </Button>
          </Link>
        </Box>
      </Container>

      {/* Hero Section */}
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          py: { xs: 4, sm: 6, md: 10 },
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: { xs: 80, sm: 100, md: 120 },
            height: { xs: 80, sm: 100, md: 120 },
          }}
        >
          <Image
            src="/portfolius.png"
            fill
            style={{ objectFit: "contain" }}
            alt="Portfolius Logo"
            priority
          />
        </Box>

        <Typography
          variant="h2"
          sx={{
            mt: { xs: 3, md: 4 },
            fontFamily: "Inter",
            color: "white",
            fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem" },
            lineHeight: 1.2,
          }}
        >
          Simulate. Trade. Connect.
          <br />
          Experience the market with friends.
        </Typography>

        <Box sx={{ width: "100%", mt: { xs: 4, md: 6 } }}>
          <Button
            variant="contained"
            href="https://tally.so/r/nWqloa"
            target="_blank"
            sx={{
              textTransform: "none",
              background: "linear-gradient(135deg, #f0f0f0, #d9d9d9)",
              color: "black",
              fontFamily: "Inter",
              width: { xs: "90%", sm: "80%", md: "60%" },
              maxWidth: "20rem",
              py: { xs: 1.5, md: 2 },
              fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
              borderRadius: "32px",
              fontWeight: "600",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
              mx: "auto",
              display: "block",
              "&:hover": {
                background: "linear-gradient(135deg, #ffffff, #e0e0e0)",
                boxShadow: "0px 6px 14px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            Join the Waitlist 🚀
          </Button>
        </Box>
      </Container>

      {/* Partners Section */}
      <Box sx={{ width: "100%", py: { xs: 4, md: 6 } }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Inter",
            color: "white",
            fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
            fontWeight: "600",
            textAlign: "center",
            mb: { xs: 3, md: 6 },
          }}
        >
          Used By Those At:
        </Typography>

        <Marquee gradient={false} speed={60}>
          {[...Array(2)].map((_, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: "3rem", md: "5rem" },
                marginRight: { xs: "3rem", md: "3rem" },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: { xs: 70, md: 100 },
                  height: { xs: 40, md: 50 },
                }}
              >
                <Image
                  src="/googleplaylogo.png"
                  fill
                  style={{ objectFit: "contain" }}
                  alt="Google Play"
                />
              </Box>
              <Box
                sx={{
                  position: "relative",
                  width: { xs: 100, md: 140 },
                  height: { xs: 40, md: 50 },
                }}
              >
                <Image
                  src="/googlelogo.png"
                  fill
                  style={{ objectFit: "contain" }}
                  alt="Google"
                />
              </Box>
              <Box
                sx={{
                  position: "relative",
                  width: { xs: 160, md: 220 },
                  height: { xs: 40, md: 50 },
                }}
              >
                <Image
                  src="/yclogo.png"
                  fill
                  style={{ objectFit: "contain" }}
                  alt="Y Combinator"
                />
              </Box>
              <Box
                sx={{
                  position: "relative",
                  width: { xs: 140, md: 190 },
                  height: { xs: 50, md: 60 },
                }}
              >
                <Image
                  src="/berkeleylogo.png"
                  fill
                  style={{ objectFit: "contain" }}
                  alt="UC Berkeley"
                />
              </Box>
              <Box
                sx={{
                  position: "relative",
                  width: { xs: 70, md: 100 },
                  height: { xs: 40, md: 50 },
                }}
              >
                <Image
                  src="/appstorelogo.png"
                  fill
                  style={{ objectFit: "contain" }}
                  alt="App Store"
                />
              </Box>
              <Box
                sx={{
                  position: "relative",
                  width: { xs: 160, md: 220 },
                  height: { xs: 40, md: 50 },
                }}
              >
                <Image
                  src="/robinhoodlogo.png"
                  fill
                  style={{ objectFit: "contain" }}
                  alt="Robinhood"
                />
              </Box>
              <Box
                sx={{
                  position: "relative",
                  width: { xs: 80, md: 110 },
                  height: { xs: 40, md: 50 },
                }}
              >
                <Image
                  src="/mitlogo.png"
                  fill
                  style={{ objectFit: "contain" }}
                  alt="MIT"
                />
              </Box>
              <Box
                sx={{
                  position: "relative",
                  width: { xs: 80, md: 110 },
                  height: { xs: 40, md: 50 },
                }}
              >
                <Image
                  src="/tesla.png"
                  fill
                  style={{ objectFit: "contain" }}
                  alt="Tesla"
                />
              </Box>
              <Box
                sx={{
                  position: "relative",
                  width: { xs: 60, md: 90 },
                  height: { xs: 40, md: 50 },
                }}
              >
                <Image
                  src="/twitterlogo.png"
                  fill
                  style={{ objectFit: "contain" }}
                  alt="X"
                />
              </Box>
            </Box>
          ))}
        </Marquee>
      </Box>

      {/* Feature Sections */}
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 8 } }}>
        {/* First Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            mb: { xs: 4, md: 10 },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "80%", md: "45%" },
              mb: { xs: 3, md: 0 },
              px: 2,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "white",
                fontSize: { xs: "1.5rem", md: "2rem" },
                mb: 2,
                fontFamily: "Inter",
                textAlign: "center",
              }}
            >
              Learn Market Fundamentals
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "white",
                fontSize: { xs: "1rem", md: "1.1rem" },
                fontFamily: "Inter",
                textAlign: "center",
              }}
            >
              Master the basics of investing through our interactive learning
              modules and real-world market simulations.
            </Typography>
          </Box>
          <Box
            sx={{
              background: "transparent",
              width: { xs: "90%", sm: "80%", md: "45%" },
              height: { xs: "200px", sm: "250px", md: "300px" },
              borderRadius: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Image
              src="/frontpage/simulation.png"
              fill
              style={{ objectFit: "contain" }}
              alt="Stock Simulation"
              priority
            />
          </Box>
        </Box>

        {/* Second Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row-reverse" },
            alignItems: "center",
            justifyContent: "space-between",
            mb: { xs: 4, md: 10 },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "45%" },
              mb: { xs: 3, md: 0 },
              px: 2,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "white",
                fontSize: { xs: "1.5rem", md: "2rem" },
                mb: 2,
                fontFamily: "Inter",
                textAlign: "center",
              }}
            >
              Practice Risk-Free Trading
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "white",
                fontSize: { xs: "1rem", md: "1.1rem" },
                fontFamily: "Inter",
                textAlign: "center",
              }}
            >
              Build your investment confidence with our realistic market
              simulator that lets you practice without risking real money.
            </Typography>
          </Box>
          <Box
            sx={{
              background: "transparent",
              width: { xs: "90%", sm: "80%", md: "45%" },
              height: { xs: "200px", sm: "250px", md: "300px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              borderRadius: "1rem",
            }}
          >
            <Image
              src="/frontpage/market.gif"
              fill
              unoptimized
              style={{ objectFit: "contain", borderRadius: "1rem" }}
              alt="Stock Market"
              priority
            />
          </Box>
        </Box>

        {/* Third Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "80%", md: "45%" },
              mb: { xs: 3, md: 0 },
              px: 2,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "white",
                fontSize: { xs: "1.5rem", md: "2rem" },
                mb: 2,
                fontFamily: "Inter",
                textAlign: "center",
              }}
            >
              Trade, Compete, and Grow Together
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "white",
                fontSize: { xs: "1rem", md: "1.1rem" },
                fontFamily: "Inter",
                textAlign: "center",
              }}
            >
              Follow your friends' trades, compete in leaderboards, and discuss
              market trends in a fun, risk-free environment. Portfolius makes
              investing social, interactive, and engaging—without real financial
              risks.
            </Typography>
          </Box>
          <Box
            sx={{
              background: "transparent",
              width: { xs: "90%", sm: "80%", md: "45%" },
              height: { xs: "200px", sm: "250px", md: "300px" },
              borderRadius: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Image
              src="/frontpage/social.png"
              fill
              style={{ objectFit: "contain" }}
              alt="Example Social"
              priority
            />
          </Box>
        </Box>
      </Container>

      {/* Divider */}
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
        <Divider sx={{ borderColor: "white" }} />
      </Container>

      {/* FAQs Section */}
      <Container
        maxWidth="lg"
        sx={{ py: { xs: 4, md: 6 }, overflow: "visible", height: "auto" }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Inter",
            color: "white",
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: "300",
            textAlign: "center",
            mb: { xs: 4, md: 6 },
          }}
        >
          Frequently Asked Questions
        </Typography>

        <Box
          sx={{
            width: "100%",
            overflow: "visible",
            height: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              sx={{
                background: "#2a2a2a",
                color: "white",
                mb: 2,
                borderRadius: "1rem !important",
                "& .MuiAccordionDetails-root": {
                  borderBottomLeftRadius: "1rem",
                  borderBottomRightRadius: "1rem",
                },
                "&.Mui-expanded": {
                  borderRadius: "1rem !important",
                },
                "&:before": {
                  display: "none !important",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                sx={{
                  px: { xs: 2, md: 3 },
                  py: { xs: 2, md: 1 },
                  "&.Mui-expanded": {
                    borderBottom: "1px solid #444",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: "500",
                    fontSize: { xs: "1rem", md: "1.1rem" },
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{ px: { xs: 2, md: 3 }, py: { xs: 2, md: 3 } }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: { xs: "0.9rem", md: "1rem" },
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>

      {/* Disclaimer Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Box
          sx={{
            color: "white",
            textAlign: "justify",
            fontSize: { xs: "0.75rem", md: "0.875rem" },
            fontFamily: "Inter",
            lineHeight: "1.6",
            mb: { md: "2rem" },
          }}
        >
          <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
            <strong>Important Information</strong> <br />
            The information provided on this website and the Portfolius app is
            for informational, educational, and entertainment purposes only.
            Portfolius Inc. is not a registered investment adviser,
            broker-dealer, or financial services provider. The platform is a
            **social trading simulation** designed to help users engage with
            market trends, explore investment concepts, and share simulated
            trades with friends. All transactions on Portfolius are conducted
            using **virtual money** and do not involve real financial assets.
            Users should not interpret any information, discussions, or shared
            trades as professional financial advice or investment
            recommendations.
            <br />
            <br />
            <strong>Social Trading and Simulation-Based Learning</strong> <br />
            Portfolius is a **community-driven trading simulation platform**,
            where users can track virtual stock market movements, engage in
            simulated trading, and see how their friends navigate market
            conditions. The platform enables users to follow, discuss, and
            compare trading strategies in a **risk-free, virtual environment**.
            While users may exchange insights, ideas, and strategies, all
            interactions should be considered **educational and for
            entertainment purposes only**.
            <br />
            <br />
            **No real financial transactions take place on Portfolius.** Users
            cannot deposit or withdraw real money, nor can they purchase actual
            stocks or securities through the platform. Any trades, portfolio
            performance, or rankings on Portfolius **do not reflect real-world
            market conditions, brokerage fees, or actual investment
            performance**.
            <br />
            <br />
            <strong>Investment Risks and Limitations</strong> <br />
            Investing in real-world securities involves significant risk,
            including the potential loss of capital. While Portfolius offers
            simulated trading based on real market data, **past performance in
            the simulation does not guarantee success in real-world investing**.
            Users should not base any actual investment decisions on their
            simulated trades, social insights, or leaderboard rankings.
            <br />
            <br />
            The platform does not provide personalized financial guidance, and
            users should conduct their own due diligence before making real
            investments. Market conditions are **unpredictable and subject to
            change**, and information available on Portfolius may not be up to
            date, complete, or accurate at all times.
            <br />
            <br />
            <strong>User-Generated Content and Social Interactions</strong>{" "}
            <br />
            Portfolius fosters a **social trading environment**, where users can
            share simulated trades, strategies, and financial insights. However,
            all opinions, discussions, and trade-sharing within the platform
            reflect the perspectives of individual users and should not be
            considered professional financial advice. Portfolius does not
            verify, endorse, or take responsibility for the accuracy of any
            user-generated content, including **trade strategies, market
            predictions, stock picks, or investment opinions** shared within the
            platform.
            <br />
            <br />
            Users are encouraged to engage respectfully and critically evaluate
            any insights or trade ideas posted by others. Portfolius reserves
            the right to remove content that is misleading, harmful, or violates
            community guidelines.
            <br />
            <br />
            <strong>Consult with Financial Professionals</strong> <br />
            If you are considering making real-world investments, you should
            consult with a **licensed financial advisor, tax professional, or
            legal expert**. Portfolius does not provide personalized investment
            strategies, financial planning, or legal/tax advice. Decisions
            regarding real-world investing should be made based on professional
            guidance and thorough personal research.
            <br />
            <br />
            <strong>Limitation of Liability</strong> <br />
            Portfolius, its affiliates, employees, and partners disclaim any and
            all liability for losses or damages resulting from reliance on the
            information provided through the platform. This includes, but is not
            limited to, any losses related to simulated trades, investment
            decisions influenced by social interactions, or changes in market
            conditions. Portfolius does not guarantee the accuracy,
            completeness, or timeliness of the data and insights shared within
            the app.
            <br />
            <br />
            <strong>No Guarantees of Success</strong> <br />
            No representation is made that any trading strategy, simulated
            portfolio, or shared investment insights within Portfolius will
            yield successful outcomes in the real world. The stock market is
            highly volatile, and investment success depends on numerous factors
            beyond the scope of Portfolius’ educational and social platform.
            <br />
            <br />
            By using Portfolius, you acknowledge and agree that the platform is
            strictly for **simulated investing and educational engagement**.
            Always make financial decisions based on independent research and
            professional advice.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
