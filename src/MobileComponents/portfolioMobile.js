import '../MobileComponents/Css/portfolioMobile.css'
import React from "react";
import { Box, Card, CardContent, Dialog, DialogContent, DialogTitle, Grid, Slide, Typography } from "@mui/material";
import { motion } from "framer-motion"
import { portfolioWorks } from '../Components/costants/constants';
import Crowd from '../Components/Assets/sito1.png'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function PortfolioMobile() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeIn", duration: 1 }} viewport={{ once: true }}>
                <div>
                    <Typography textAlign='center' variant="h2" color='white' class='gradient-text-portfolioMobile'>PORTFOLIO</Typography>
                </div>
            </motion.div>
            <Grid container justifyContent='center' mt={5}>
                {portfolioWorks.map((card, index) => {
                    return (
                        <Grid key={'id' + index} item xs={10}>
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeIn", duration: 1, delay: 1 }} viewport={{ once: true }}>

                                <motion.div
                                    className="box"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "tween", stiffness: 400, damping: 10 }}
                                >
                                    <Card onClick={handleOpen} variant="outlined" class='cardStyle' >
                                        <CardContent>
                                            <Typography sx={{ fontSize: 25, textAlign: 'center' }} color='white' gutterBottom>
                                                {card.nome}
                                            </Typography>
                                            <Typography sx={{ fontSize: 25, textAlign: 'center' }} color='grey' gutterBottom>
                                                {card.azienda}
                                            </Typography>
                                            <Typography sx={{ fontSize: 40, textAlign: 'center' }} color='white' gutterBottom>
                                                <Box sx={{ width: '100%' }}>
                                                    <Box
                                                        component="img"
                                                        src={card.image}
                                                        sx={{
                                                            height: 150,
                                                            width: 200,
                                                            maxHeight: { xs: 300, md: 300 },
                                                            maxWidth: { xs: 440, md: 440 },
                                                        }}
                                                    />
                                                </Box>
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </motion.div>
                        </Grid>
                    )
                })}
            </Grid>
            <Dialog
                TransitionComponent={Transition}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth='xl'
            >
                <DialogTitle style={{ backgroundColor: '#0d0d0d', borderStyle: 'solid', borderWidth: '3px', borderColor: '#212425' }} textAlign='center' id="alert-dialog-title">
                    <Typography class='gradient-text-portfolioText' color='white' gutterBottom>
                        CrowdMoovi
                    </Typography>
                </DialogTitle>
                <DialogContent style={{ backgroundColor: '#0d0d0d', borderStyle: 'solid', borderWidth: '3px', borderColor: '#212425', marginTop: -25, borderTop: 'black' }} >
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography sx={{ fontSize: 20, textAlign: 'left' }} color='white' gutterBottom>
                                Project: Website
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography sx={{ fontSize: 20, textAlign: 'left' }} color='white' gutterBottom>
                                Client: CrowdMoovi
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography sx={{ fontSize: 20, textAlign: 'left' }} color='white' gutterBottom>
                                Languages: Java, Javascript
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography sx={{ fontSize: 20, textAlign: 'left' }} color='white' gutterBottom>
                                Preview: <a style={{ color: 'white' }} rel="noreferrer" href={"https://crowdmoovi.com/"} target="_blank">crowdmoovi.com</a>
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography sx={{ fontSize: 20, textAlign: 'left', marginTop: 5 }} color='white' gutterBottom>
                                CrowdMoovi ed il suo Marketplace NFT permettono agli artisti nel mondo del cinema come registi, sceneggiatori,
                                attori e molti altri di finanziare i propri prodotti cinematografici tramite la vendita di NFTs Cards che offrono vantaggi collegati al prodotto finale.
                                Oltre a questi vantaggi, ad ogni NFT venduto il team artistico associa una frazione dei diritti d'autore sull'opera.
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography sx={{ textAlign: 'center' }} color='white' gutterBottom>
                                <Box sx={{ width: '100%' }}>
                                    <Box
                                        style={{ borderRadius: '1rem' }}
                                        component="img"
                                        src={Crowd}
                                        sx={{
                                            height: 200,
                                            width: 250,
                                        }}
                                    />
                                </Box>
                            </Typography>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default PortfolioMobile;