import { Divider, Grid } from "@mui/material";
import '../Components/css/footer.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
function Footer() {
    return (
        <>
            <footer class="footer" style={{ marginTop: 150 }}>
                <div class="waves">
                    <div class="wave" id="wave1"></div>
                    <div class="wave" id="wave2"></div>
                    <div class="wave" id="wave3"></div>
                    <div class="wave" id="wave4"></div>
                </div>
                <Grid container>
                    <Grid item xs={1}>
                        Address
                    </Grid>
                    <Grid item xs={10} textAlign='left'>
                        <ul class="menu">
                        </ul>
                    </Grid>
                    <Grid item xs={12}>
                        <LocationOnIcon /> Italy Naples(NA)
                        <Divider style={{ width: 300 }}/>
                    </Grid>
                    <Grid item xs={1}>
                        Email
                    </Grid>
                    <Grid item xs={12} >
                        <EmailIcon /> mannitiemanuele@gmail.com
                        <Divider style={{ width: 300 }} />
                    </Grid>
                </Grid>
                <p>&copy;2023 Emanuele Manniti</p>
            </footer >
        </>
    );
}

export default Footer;