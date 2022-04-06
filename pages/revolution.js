import React from 'react';
import Lottie from "lottie-react";
import { makeStyles, useTheme } from '@mui/styles';
import { Grid, Button, Typography } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import technologyAnimation from '../src/animations/technologyAnimation/data.json';
import Head from 'next/head';

const useStyles = makeStyles(theme => ({
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down('sm')]: {
            paddingLeft: "1.5em",
            paddingRight: "1.5em"
        }
    },
}));

export default function Revolution(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

    const sections =
        [
            {
                icon: "/assets/consultationIcon.svg",
                iconAlt: "handshake",
                iconMaxWidth: 700,
                backgroundColor: "#B3B3B3",
                title: "Consultation",
                paragraphs: [
                    `Our process begins the moment you realize you need a piece of technology for your business. Whether you already have an idea for
      where to start and what to do, or if you just know you want to
      step things up, our initial consultation will help you examine
      your business holistically to find the best solutions.`,
                    `Detailed notes will be taken on your requirements and constraints,
      while taking care to identify other potential areas for
      consideration.`,
                    `Cutting-edge advancements in machine learning like object detection and natural language processing allow computers to do things previously unimaginable, and our expertise and intuition will help usher you into this new future of possibilities.`
                ]
            },
            {
                icon: "/assets/mockupIcon.svg",
                iconAlt: "basic website design outline",
                iconMaxWidth: 1000,
                backgroundColor: "#FF7373",
                title: "Mockup",
                paragraphs: [
                    `After we settle on the best path forward and decide on a solution to pursue, details like the cost and timeline will be finalized.`,
                    `Then it’s time for us to start on your minimum viable product. That’s just a fancy term for a mockup, which doesn’t include colors, images, or any other polished design elements, but captures the essential layout structure and functionality.`,
                    `This helps us understand and refine the solution itself before getting distracted by specifics and looks.`
                ]
            },
            {
                icon: "/assets/reviewIcon.svg",
                iconAlt: "magnifying glass",
                iconMaxWidth: "50em",
                backgroundColor: "#39B54A",
                title: "Review",
                paragraphs: [
                    `Before moving any farther we come back to you with our progress. This gives you the freedom to discuss any changes you may want or any ideas you may have come up with before any heavy lifting has been done.`,
                    `We give you an interactive demonstration of the mockups, thoroughly explaining the thought process that went into each screen and every anticipated feature.`,
                    `Once you’re completely satisfied with the vision for our solution we get down to the nitty gritty, fine-details of design.`
                ]
            },
            {
                icon: "/assets/designIcon.svg",
                iconAlt: "paintbrush leaving stroke of paint",
                iconMaxWidth: 1000,
                backgroundColor: "#A67C52",
                title: "Design",
                paragraphs: [
                    `Using the mockups and notes taken during the consultation as guides, we will start ironing out what the final product will look like. This also involves using any brand material like fonts, colors, and logos to extend the experience you’re already familiar with.`,
                    `No aspect is superfluous, and care will be taken with every decision.`
                ]
            },
            {
                icon: "/assets/reviewIcon.svg",
                iconAlt: "magnifying glass",
                iconMaxWidth: "50em",
                backgroundColor: "#39B54A",
                title: "Review",
                paragraphs: [
                    `A second round of review is essential to our goal of creating exactly what you want, exactly how you want it.`,
                    `This time we’ll be going over the finalized designs in another fully interactive demonstration. Again this gives you an opportunity to tweak things and make sure we get everything right the first time.`
                ]
            },
            {
                icon: "/assets/buildIcon.svg",
                iconAlt: "building construction site",
                iconMaxWidth: { maxWidth: matchesMd ? 700 : 1000 },
                backgroundColor: "#FBB03B",
                title: "Build",
                paragraphs: [
                    `Here’s where we get down to business.`,
                    `Engineering begins after your approval on the final designs. We start by scaffolding out the project on a high level, prioritizing some areas over others.', 'Each area is then developed in order of importance until ready to be connected to the next piece.`,
                    `Typically the backend, behind the scenes operations are completed first. Once all the services are in place we can then create the front end, user side of things.`,
                    `Finishing the application doesn’t mean we’re done though, because we use extensive testing to guarantee compatibility with all intended devices.`,
                    `Only after our rigorous examinations will we accept a product as finished, then pushing it through the production pipeline. This produces an optimized, compressed, consumer version of the code and assets ready for deployment.`
                ]
            },
            {
                icon: "/assets/launchIcon.svg",
                iconAlt: "rocket",
                iconMaxWidth: 200,
                backgroundColor: "#C1272D",
                title: "Launch",
                paragraphs: [
                    `The moment we’ve all been waiting for.`,
                    `When construction comes to a close you’re the first one to know. We’ll give our final demonstration to show off your shiny new software in the wild so you know exactly how it will look to your users.`,
                    `When you say the word, we press the button and launch your project out to the public. We’re there to ensure everything goes to plan so you can start reaping the rewards of your technological investment immediately.`
                ]
            },
            {
                icon: "/assets/maintainIcon.svg",
                iconAlt: "wrench tightening bolts",
                iconMaxWidth: 500,
                backgroundColor: "#8E45CE",
                title: "Maintain",
                paragraphs: [
                    `Our work doesn’t end there.`,
                    `After a successful launch we keep in close contact to listen to feedback and hear how the project is being received.`,
                    `From there on out we make sure your application is kept up to date and taking advantage of the best features and practices available. When new developments arise or new techniques are discovered in future projects, we will implement those advancements in your project as part of our routine maintenance.`
                ]
            },
            {
                icon: "/assets/iterateIcon.svg",
                iconAlt: "falling dominoes",
                backgroundColor: "#29ABE2",
                title: "Iterate",
                paragraphs: [
                    `The cycle repeats whenever you come up with a new idea for extending your current project, or come up with a brand new system entirely.`,
                    `By planning for future features and changes we can build and evolve your application over time. As new use cases and customer needs develop we can respond with continuous integration of new content.`,
                    `Our iterative process will keep you current and competitive, allowing you to quickly implement changes instead of waiting months for a single update.`
                ]
            }
        ];

    return (
        <Grid container direction="column">
            <Head>
                <title key="title">The revolution - cutting edge software | Arc Development</title>
                <meta name="description" key="description" content="We provide the best services in the world. Get a free online estimate now!" />
                <meta key="og:title" property="og:title" content="Bringing West Coasts Technology to the Midwest | Revolution" />
                <meta key="og:url" property="og:url" content="arc.com/revolution" />
                <link rel="canonical" key="canonical" href="https://www.arc.com/revolution" />
            </Head>
            <Grid item className={classes.rowContainer} sx={{ marginTop: "2em" }}>
                <Typography variant="h1"
                    sx={{
                        fontFamily: "Pacifico",
                    }} gutterBottom>
                    Revolution
                </Typography>
            </Grid>
            <Grid item container direction="row" alignItems="center" className={classes.rowContainer}>
                <Grid item lg>
                    <img src="/assets/vision.svg" alt="vision" style={{ maxWidth: matchesSm ? "300px" : "40em", marginRight: "5em", }} />
                </Grid>
                <Grid item container direction="column" lg sx={{
                    maxWidth: "40em"
                }}>
                    <Grid item>
                        <Typography align="right" variant="h4" gutterBottom>
                            Vision
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align="right" variant="body1" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                        <Typography align="right" variant="body1" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                        <Typography align="right" variant="body1" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                        <Typography align="right" variant="body1" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                        <Typography align="right" variant="body1" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container direction="row" alignItems="center" className={classes.rowContainer}>

                <Grid item container direction="column" lg sx={{
                    maxWidth: "40em"
                }}>
                    <Grid item>
                        <Typography variant="h4" gutterBottom>
                            Technology
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container justifyContent="flex-end" lg>
                    <Lottie animationData={technologyAnimation} height={"100%"} widht={"100%"}
                        sx={{
                            maxWidth: "40em",
                        }} />
                </Grid>
            </Grid>
            <Grid item container direction="row" justifyContent="center" className={classes.rowContainer}>
                <Grid item>
                    <Typography variant="h4" gutterBottom sx={{ color: "#000" }}>
                        Proccess
                    </Typography>
                </Grid>
            </Grid>
            {sections.map((section) => (
                < Grid item container direction="row" className={classes.rowContainer}
                    sx={{ backgroundColor: section.backgroundColor, height: "90em" }
                    }>
                    <Grid item container direction="column" lg>
                        <Grid item>
                            <Typography variant="h4" gutterBottom sx={{ color: "#000", marginTop: "5em" }}>
                                {section.title}
                            </Typography>
                            {section.paragraphs.map(paragraph => (
                                <Typography variant="body1" paragraph sx={{ color: "#fff", maxWidth: "20em" }}>
                                    {paragraph}
                                </Typography>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid item lg sx={{ alignSelf: "center" }}>
                        <img src={section.icon} alt={section.iconAlt} sx={{ maxWidth: section.iconMaxWidth }} />
                    </Grid>
                </Grid >
            ))}

        </Grid>
    )
}