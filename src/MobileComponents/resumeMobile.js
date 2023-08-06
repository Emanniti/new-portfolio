import { Box, Card, CardContent, Grid, Tooltip, Typography } from "@mui/material";
import { motion } from "framer-motion"
import '../MobileComponents/Css/resumeMobile.css'
import { resumeEducation, resumeExperience, resumeSkills } from "../Components/costants/constants";
import SkillIcon from '../Components/Assets/icons8-skill-64.png'
import WorkIcon from '../Components/Assets/icons8-work-100.png'
import EducationIcon from '../Components/Assets/icons8-education-96.png'

function ResumeMobile() {
    return (
        <>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeIn", duration: 1 }} viewport={{ once: true }}>
                <Typography textAlign='center' variant="h2" color='white' class='gradient-text-resumeMobile'>RESUME</Typography>
            </motion.div>
            <Grid container spacing={5} mt={3}>
                <Grid item xs={12} >
                    <Grid container>
                        <Grid item xs={3}>
                            <Box sx={{ width: '100%' }}>
                                <Box
                                    component="img"
                                    src={EducationIcon}
                                    sx={{
                                        height: 64,
                                        width: 64,
                                        maxHeight: { xs: 300, md: 300 },
                                        maxWidth: { xs: 440, md: 440 },
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={9}>
                            <Typography variant="h8" color='white' style={{ fontSize: 13 }}> <span class='gradient-text-resumeText'>Education</span></Typography>
                        </Grid>
                        <Grid item xs={12}>
                            {resumeEducation.map((card, index) => {
                                return (
                                    <motion.div key={'id' + index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "backIn", duration: 1, delay: card.delay }} viewport={{ once: true }}>
                                        <motion.div
                                            className="box"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: "tween", stiffness: 400, damping: 10 }}
                                        >
                                            <Card variant="outlined" class='cardStyle' style={{ marginTop: 10 }}>
                                                <CardContent>
                                                    <Typography sx={{ fontSize: 20 }} color='grey' gutterBottom>
                                                        {card.data}
                                                    </Typography>
                                                    <Typography sx={{ fontSize: 17 }} color='white' gutterBottom>
                                                        {card.zona}
                                                    </Typography>
                                                    <Typography sx={{ fontSize: 20 }} color='grey' gutterBottom>
                                                        {card.ente}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    </motion.div>
                                )
                            })}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={3}>
                            <Box sx={{ width: '100%' }}>
                                <Box
                                    component="img"
                                    src={WorkIcon}
                                    sx={{
                                        height: 64,
                                        width: 64,
                                        maxHeight: { xs: 300, md: 300 },
                                        maxWidth: { xs: 440, md: 440 },
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={9}>
                            <Typography variant="h8" style={{ fontSize: 13 }} color='white'><span class='gradient-text-resumeText'>Experience</span></Typography>
                        </Grid>
                        <Grid item xs={12}>
                            {resumeExperience.map((card, index) => {
                                return (
                                    <motion.div key={'id' + index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "backIn", duration: 1, delay: card.delay }} viewport={{ once: true }}>
                                        <motion.div
                                            className="box"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: "tween", stiffness: 400, damping: 10 }}
                                        >
                                            <Card variant="outlined" class='cardStyle' style={{ marginTop: 10 }}>
                                                <CardContent>
                                                    <Typography sx={{ fontSize: 25 }} color='grey' gutterBottom>
                                                        {card.data}
                                                    </Typography>
                                                    <Typography sx={{ fontSize: 25 }} color='white' gutterBottom>
                                                        {card.ruolo}
                                                    </Typography>
                                                    <Typography sx={{ fontSize: 25 }} color='grey' gutterBottom>
                                                        {card.azienda}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    </motion.div>
                                )
                            })}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={3}>
                            <Box sx={{ width: '100%' }}>
                                <Box
                                    component="img"
                                    src={SkillIcon}
                                    sx={{
                                        height: 64,
                                        width: 64,
                                        maxHeight: { xs: 300, md: 300 },
                                        maxWidth: { xs: 440, md: 440 },
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={9}>
                            <Typography variant="h8" color='white'><span class='gradient-text-resumeText'>Skills</span></Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                {resumeSkills.map((card, index) => {
                                    return (
                                        <Tooltip key={'id' + index} title={card.nome} TransitionProps={{ timeout: 600 }} >
                                            <Grid item xs={4}>
                                                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "backIn", duration: 1, delay: card.delay }} viewport={{ once: true }}>
                                                    <motion.div
                                                        className="box"
                                                        whileHover={{ scale: 1.1 }}
                                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                                    >
                                                        <Box sx={{ width: '100%' }} style={{ marginTop: 20, borderRadius: '4rem' }}>
                                                            <Box
                                                                style={{ borderRadius: '2rem' }}
                                                                component="img"
                                                                src={card.foto}
                                                                sx={{
                                                                    height: 90,
                                                                    width: 90,
                                                                    maxHeight: { xs: 300, md: 300 },
                                                                    maxWidth: { xs: 440, md: 440 },
                                                                }}
                                                            />
                                                        </Box>
                                                    </motion.div>
                                                </motion.div>
                                            </Grid>
                                        </Tooltip>
                                    )
                                })}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default ResumeMobile;