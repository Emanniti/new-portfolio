import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion"
import { whatIDo } from "./costants/constants";
import '../Components/css/aboutMe.css'
import LogoAccenture from '../Components/Assets/accenture-transparent.png'
import MatrixLogo from '../Components/Assets/logo.png'

function AboutMe() {

    return (
        <>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeIn", duration: 1 }} viewport={{ once: true }}>
                <div>
                    <Typography textAlign='center' variant="h2" color='white' class='gradient-text-aboutMe'>ABOUT ME</Typography>
                </div>
            </motion.div>
            <Grid container>
                <Grid item xs={12} mt={0.5}>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeIn", duration: 1 }} viewport={{ once: true }}>
                        <Typography textAlign='center' variant="h5" color='white'>
                            <p>Hi, I'm a full stack Web Developer from Naples (Italy). I work mainly in web development and in the creation of tailor-made websites. At the moment I work for
                                <a style={{ color: 'orange', textDecoration: 'inherit' }} rel="noreferrer" href="https://matrixconsulting.it/" target="_blank"> Matrix Consulting Group s.r.l. </a>
                                as a consultant for <a style={{ color: '#a200fc', textDecoration: 'inherit' }} rel="noreferrer" href="https://www.accenture.com" target="_blank">Accenture Technology Solutions</a>.</p>
                        </Typography>
                    </motion.div>
                </Grid>
                <Grid item xs={12} mt={1}>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeIn", duration: 1 }} viewport={{ once: true }}>
                        <Typography variant="h2" color='white' class='gradient-text-aboutSection'>What I do! </Typography>
                    </motion.div>
                    <Grid container spacing={2} mt={3}>
                        {whatIDo.map((card, index) => {
                            return (
                                <Grid item xs={6} key={'id' + index}>
                                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeIn", duration: 1.5, delay: card.delay }} viewport={{ once: true }}>
                                        <Card variant="outlined" style={{ backgroundColor: '#0d0d0d', borderWidth: 3, borderColor: '#212425' }}>
                                            <CardContent>
                                                <Typography sx={{ fontSize: 40 }} color='white' gutterBottom>
                                                    <Box sx={{ width: '100%' }}>
                                                        <Box
                                                            component="img"
                                                            src={card.icona}
                                                            sx={{
                                                                height: 40,
                                                                width: 40,
                                                                maxHeight: { xs: 300, md: 300 },
                                                                maxWidth: { xs: 440, md: 440 },
                                                            }}
                                                        />
                                                        <span style={{ marginLeft: 5 }}>{card.titolo}</span>
                                                    </Box>
                                                </Typography>
                                                <Typography sx={{ fontSize: 25 }} color='white' gutterBottom>
                                                    {card.descrizione}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
                <Grid item xs={12} mt={5}>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeIn", duration: 1, delay: 1 }} viewport={{ once: true }}>
                        <Typography variant="h2" color='white' class='gradient-text-aboutSection'></Typography>
                        <Typography variant="h2" color='white' class='gradient-text-aboutSection'>Who I work for: </Typography>
                    </motion.div>
                </Grid>
                <Grid item xs={12} mt={20}>
                    <Grid container>
                        <Grid item xs={6} textAlign='center'>
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeIn", duration: 1, delay: 1 }} viewport={{ once: true }}>
                                <a href="https://www.accenture.com" rel="noreferrer" target="_blank">
                                    <Box
                                        component="img"
                                        style={{ marginTop: -120 }}
                                        src={LogoAccenture}
                                        sx={{
                                            height: 200,
                                            width: 330,
                                            maxHeight: { xs: 300, md: 300 },
                                            maxWidth: { xs: 440, md: 440 },
                                        }}
                                    />
                                </a>
                            </motion.div>
                        </Grid>
                        <Grid item xs={6} textAlign='center'>
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeIn", duration: 1, delay: 1 }} viewport={{ once: true }}>
                                <a href="https://www.accenture.com" rel="noreferrer" target="_blank">
                                    <Box
                                        component="img"
                                        style={{ marginTop: -120 }}
                                        src={MatrixLogo}
                                        sx={{
                                            height: 150,
                                            width: 330,
                                            maxHeight: { xs: 300, md: 300 },
                                            maxWidth: { xs: 440, md: 440 },
                                        }}
                                    />
                                </a>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default AboutMe;