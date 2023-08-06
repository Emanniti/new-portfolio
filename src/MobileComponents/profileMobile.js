import { Box, Grid, IconButton, Typography } from "@mui/material";
import { motion } from "framer-motion"
import FotoProfilo from '../Components/Assets/fotoProfilo.jpg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../MobileComponents/Css/profileMobile.css'
import Curriculum from '../Components/Assets/CV - Emanuele Manniti.pdf'

function ProfileMobile() {
    return ( 
        <>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeIn", duration: 1 }} viewport={{ once: true }}>
                <div>
                    <Typography textAlign='center' variant="h1" color='white' class='gradient-text-profiloMobile'>PROFILE</Typography>
                </div>
            </motion.div>
            <Grid container justifyContent='center' spacing={1}>
                <Grid item xs={12} textAlign='center'>
                    <Typography sx={{ fontSize: 40 }} color='white' gutterBottom>
                        <Box sx={{ width: '100%' }}>
                            <Box
                                style={{ borderRadius: '10rem' }}
                                component="img"
                                src={FotoProfilo}
                                sx={{
                                    height: 250,
                                    width: 250,
                                    maxHeight: { xs: 300, md: 300 },
                                    maxWidth: { xs: 440, md: 440 },
                                }}
                            />
                        </Box>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeIn", duration: 1 }} viewport={{ once: true }}>
                        <div>
                            <Typography textAlign='center' variant="h4" color='white' >EMANUELE MANNITI</Typography>
                        </div>
                    </motion.div>
                </Grid>
                <Grid item xs={6}>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeIn", duration: 1 }} viewport={{ once: true }}>
                        <Typography style={{ backgroundColor: '#212425', borderRadius: '2rem' }} textAlign='center' variant="h5" color='white' >Web Developer</Typography>
                    </motion.div>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={4} textAlign='right'>
                            <a style={{ textDecoration: 'inherit', color: 'inherit' }} rel="noreferrer" href={'https://github.com/Emanniti'} target="_blank">
                                <IconButton style={{width:100}} class='btn-hover color-8Mobile'>
                                    <GitHubIcon />
                                </IconButton>
                            </a>
                        </Grid>
                        <Grid item xs={4} textAlign='center'>
                            <a style={{ textDecoration: 'inherit', color: 'inherit' }} rel="noreferrer" href={'https://www.linkedin.com/in/emanuele-manniti-338360183/'} target="_blank">
                                <IconButton style={{width:100}} class='btn-hover color-9Mobile'>
                                    <LinkedInIcon />
                                </IconButton>
                            </a>
                        </Grid>
                        <Grid item xs={2}>
                            <IconButton style={{width:90}} class='btn-hover color-11Mobile'>
                                <a style={{ textDecoration: 'inherit', color: 'inherit', fontSize:11 }} href={Curriculum} download>Download Cv</a>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
     );
}

export default ProfileMobile;