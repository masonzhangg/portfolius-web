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
        "Portfolius is an educational platform designed to help you learn, practice, and master investing through interactive tools and resources.",
    },
    {
      question: "Is Portfolius an investment adviser?",
      answer:
        "No, Portfolius is not an investment adviser. It's an educational tool designed to assist users in gathering and analyzing financial information.",
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
          Learn, Practice, Master
          <br />
          Investing.
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
              Master Portfolio Management
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
              Learn advanced portfolio strategies and track your progress with
              detailed analytics and personalized feedback.
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
              src="/frontpage/portfolio.png"
              fill
              style={{ objectFit: "contain" }}
              alt="Example Portfolio"
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
            for informational and research purposes only. Portfolius Inc. is not
            an investment adviser and does not provide investment advice.
            Portfolius is an education tool designed to assist users in
            gathering and analyzing financial information. The app does not
            generate or manage investment advice. Users are solely responsible
            for their investment decisions based on the information provided
            through the Portfolius app.
            <br />
            <br />
            <strong>Education and Investing Tool</strong> <br />
            Portfolius is designed to provide users with financial data, market
            research, and automated analysis tools. However, any information or
            analysis presented through the Portfolius app should not be
            considered as personalized investment advice or recommendations.
            Users should conduct their own due diligence and consult with
            qualified financial professionals before making any investment
            decisions.
            <br />
            <br />
            <strong>Investment Risks</strong> <br />
            Investing in securities involves significant risk, including the
            risk of loss of principal. Past performance does not guarantee
            future results, and there can be no assurance that any investment
            strategy or security will meet its objectives or achieve any
            specific financial outcome. You should only invest risk capital that
            you can afford to lose without impacting your financial stability.
            Carefully consider your individual financial situation, investment
            goals, and risk tolerance before making any investment decisions.
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
            reliance placed on the information provided on this website or
            through the Portfolius app. This includes, but is not limited to,
            losses related to the purchase or sale of securities or other
            financial instruments, changes in market conditions, or any other
            investment outcomes.
            <br />
            <br />
            <strong>No Guarantees</strong> <br />
            No representation is made that any investment strategy, security, or
            financial product discussed on this website or through the
            Portfolius app will be profitable or suitable for any particular
            individual. The content provided is based on sources believed to be
            reliable but is not guaranteed to be accurate, complete, or timely.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
