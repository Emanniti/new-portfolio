import { Grid } from "@mui/material";
import PaginaPrincipale from "./Components/paginaPrincipale";
import PaginaPrincipaleMobile from "./MobileComponents/paginaPrincipaleMobile";

function RedirectForMobile() {
    return ( 
        <>
            <Grid item xs={12} sx={{ display: { xs: 'none', md: 'initial' } }}>
                <PaginaPrincipale />
            </Grid>
            <Grid item xs={12} md={1} lg={1} display={{ xs: 'initial', md: 'none' }}>
                <PaginaPrincipaleMobile/>
            </Grid>
        </>
     );
}

export default RedirectForMobile;