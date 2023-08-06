import { Grid, Typography } from "@mui/material";
import { motion } from "framer-motion"
import '../Components/css/paginaPrincipale.css'
import AboutMe from "./aboutMe";
import Resume from "./resume";
import Portfolio from "./portfolio";
import Profilo from "./profilo";
import Footer from "./footer";
import { useRef } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';



function PaginaPrincipale() {
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
                <Grid container>
                    <Grid item xs={8}>
                        <Grid container mt={35} pl={20}>
                            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}>
                                <Grid item xs={1}>
                                    <Typography style={{ color: 'white', fontSize: 60 }}>Hello!</Typography>
                                </Grid>
                                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 1, ease: [0, 0.71, 0.2, 1.01] }}>
                                    <Grid item xs={5} >
                                        <Typography style={{ color: 'white', fontSize: 25 }}>My name is Emanuele and I'm a full stack Web Developer from Naples (Italy). I work mainly in web development and in the creation of tailor-made websites.</Typography>
                                    </Grid>
                                </motion.div>
                            </motion.div>
                        </Grid>
                    </Grid>
                    <Grid item xs={1}>
                        <Grid container spacing={7} mt={18}>
                            <Grid item xs={12} >
                                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 1.5, }}>
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
                                            <motion.div
                                                className="box"
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                            >
                                                <button onClick={() => scollToAbout.current.scrollIntoView({ behavior: "smooth" })} class="btn-hover color" style={{ color: 'white', fontSize: 20, width:200 }}>ABOUT ME</button>
                                            </motion.div>
                                        </motion.div>
                                    </Grid>
                                </motion.div>
                            </Grid>
                            <Grid item xs={12} >
                                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 2, }}>
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
                                                <button onClick={() => scollToResume.current.scrollIntoView({ behavior: "smooth" })} class="btn-hover color-1" style={{ color: 'white', fontSize: 20, width:200 }}>RESUME</button>
                                            </motion.div>
                                        </motion.div>
                                    </Grid>
                                </motion.div>
                            </Grid>
                            <Grid item xs={12} >
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
                                                <button onClick={() => scollToPortfolio.current.scrollIntoView({ behavior: "smooth" })} class="btn-hover color-3" style={{ color: 'white', fontSize: 20, width:200 }}>PORTFOLIO</button>
                                            </motion.div>
                                        </motion.div>
                                    </Grid>
                                </motion.div>
                            </Grid>
                            <Grid item xs={12} >
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
                                                <button class="btn-hover color-4 " onClick={() => scollToProfilo.current.scrollIntoView({ behavior: "smooth" })} style={{ color: 'white', fontSize: 20, width:200 }}>PROFILE</button>
                                            </motion.div>
                                        </motion.div>
                                    </Grid>
                                </motion.div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid >
                <div style={{ marginTop: 300 }} ref={scollToAbout}>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeIn", duration: 2 }}>
                        <Grid padding={5} container>
                            <Grid item xs={12} >
                                <AboutMe />
                            </Grid>
                        </Grid>
                    </motion.div>
                </div>
                <div ref={scollToResume}>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeIn", duration: 2 }}>
                        <Grid padding={5} container>
                            <Grid item xs={12} >
                                <Resume />
                            </Grid>
                        </Grid>
                    </motion.div>
                </div>
                <div ref={scollToPortfolio}>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeIn", duration: 2 }}>
                        <Grid padding={1} container>
                            <Grid item xs={12} >
                                <Portfolio />
                            </Grid>
                        </Grid>
                    </motion.div>
                </div>
                <div ref={scollToProfilo}>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeIn", duration: 2 }}>
                        <Grid padding={1} container>
                            <Grid item xs={12} >
                                <Profilo />
                            </Grid>
                        </Grid>
                    </motion.div>
                </div>
            </div >
            <Footer />

            <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>
        </>
    );
}

export default PaginaPrincipale;