import { Grid, Typography } from "@mui/material";
import { motion } from "framer-motion"
import { useRef } from "react";
import '../MobileComponents/Css/paginaPrincipaleMobile.css'
import AboutMeMobile from "./aboutMeMobile";
import ResumeMobile from "./resumeMobile";
import PortfolioMobile from "./portfolioMobile";
import ProfileMobile from "./profileMobile";
import FooterMobile from "./footerMobile";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function PaginaPrincipaleMobile() {
    const scollToTop = useRef();
    const scollToAbout = useRef();
    const scollToResume = useRef();
    const scollToPortfolio = useRef();
    const scollToProfilo = useRef();
    return (
        <>
        <div color='primary' class='buttonGoTop' >
                <div class="parent">
                    <button onClick={() => scollToTop.current.scrollIntoView({ behavior: "smooth" })} class="round-6"><KeyboardArrowUpIcon/></button>
                </div>
            </div>
            <div ref={scollToTop}>
                <Grid container padding={5}>
                    <Grid item xs={12} textAlign='left'>
                        <Typography style={{ color: 'white', fontSize: 60 }}>Hello!</Typography>
                    </Grid>
                    <Grid item xs={12} textAlign='left'>
                        <Typography style={{ color: 'white', fontSize: 20 }}>My name is Emanuele and I'm a full stack Web Developer from Naples (Italy). I work mainly in web development and in the creation of tailor-made websites.</Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={5} >
                        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 1.5, }}>
                            <Grid item xs={12} >
                                <motion.div
                                    drag
                                    dragConstraints={{
                                        top: -5,
                                        left: -5,
                                        right: 5,
                                        bottom: 5,
                                    }}
                                    style={{ width: 50, height: 50 }}
                                >
                                    <motion.div
                                        className="box"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <button onClick={() => scollToAbout.current.scrollIntoView({ behavior: "smooth" })} class="btn-hover colorMobile" style={{ color: 'white', fontSize: 17 }}>ABOUT ME</button>
                                    </motion.div>
                                </motion.div>
                            </Grid>
                        </motion.div>
                    </Grid>
                    <Grid item xs={6} >
                        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 2, }}>
                            <Grid item xs={12} >
                                <motion.div
                                    drag
                                    dragConstraints={{
                                        top: -5,
                                        left: -5,
                                        right: 5,
                                        bottom: 5,
                                    }}
                                    style={{ width: 50, height: 50 }}
                                >
                                    <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                        <button onClick={() => scollToResume.current.scrollIntoView({ behavior: "smooth" })} class="btn-hover color-1Mobile" style={{ color: 'white', fontSize: 17 }}>RESUME</button>
                                    </motion.div>
                                </motion.div>
                            </Grid>
                        </motion.div>
                    </Grid>
                    <Grid item xs={5} mt={5}>
                        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 2.5, }}>
                            <Grid item xs={12} >
                                <motion.div
                                    drag
                                    dragConstraints={{
                                        top: -10,
                                        left: -10,
                                        right: 10,
                                        bottom: 10,
                                    }}
                                    style={{ width: 50, height: 50 }}
                                >
                                    <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                        <button onClick={() => scollToPortfolio.current.scrollIntoView({ behavior: "smooth" })} class="btn-hover color-3" style={{ color: 'white', fontSize: 17 }}>PORTFOLIO</button>
                                    </motion.div>
                                </motion.div>
                            </Grid>
                        </motion.div>
                    </Grid>
                    <Grid item xs={6} mt={5}>
                        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 3, }}>
                            <Grid item xs={12} >
                                <motion.div
                                    drag
                                    dragConstraints={{
                                        top: -10,
                                        left: -10,
                                        right: 10,
                                        bottom: 10,
                                    }}
                                    style={{ width: 50, height: 50 }}
                                >
                                    <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                        <button class="btn-hover color-4 " onClick={() => scollToProfilo.current.scrollIntoView({ behavior: "smooth" })} style={{ color: 'white', fontSize: 17 }}>PROFILE</button>
                                    </motion.div>
                                </motion.div>
                            </Grid>
                        </motion.div>
                    </Grid>

                </Grid>
                <div style={{ marginTop: 100 }} ref={scollToAbout}>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeIn", duration: 2 }}>
                        <Grid padding={5} container>
                            <Grid item xs={12} >
                                <AboutMeMobile />
                            </Grid>
                        </Grid>
                    </motion.div>
                </div>
                <div ref={scollToResume}>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeIn", duration: 2 }}>
                        <Grid padding={5} container>
                            <Grid item xs={12} >
                                <ResumeMobile />
                            </Grid>
                        </Grid>
                    </motion.div>
                </div>
                <div ref={scollToPortfolio}>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeIn", duration: 2 }}>
                        <Grid padding={1} container>
                            <Grid item xs={12} >
                                <PortfolioMobile />
                            </Grid>
                        </Grid>
                    </motion.div>
                </div>
                <div ref={scollToProfilo}>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeIn", duration: 2 }}>
                        <Grid padding={1} container>
                            <Grid item xs={12} >
                                <ProfileMobile />
                            </Grid>
                        </Grid>
                    </motion.div>
                </div>
                <FooterMobile />
                <div class="bg"></div>
                <div class="bg bg2"></div>
                <div class="bg bg3"></div>
            </div >
        </>
    );
}

export default PaginaPrincipaleMobile;