/**
 =========================================================
 * Material Dashboard 2 React - v2.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-dashboard-react
 * Copyright 2022 Creative Tim (https://www.creative-tim.com)

 Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

import {useParams} from "react-router-dom";
// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";


// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Overview page components
import Header from "layouts/motivation/pages/profile/components/Header";
// Data

// Images
import MDAvatar from "../../../../components/MDAvatar";

function Shop() {
    const {id} = useParams();

    return (
        <DashboardLayout>
            <DashboardNavbar/>
            <MDBox mb={2}/>
            <Header>
                <MDBox mt={5} mb={3} xl={12}>
                    <MDBox pt={1} pb={2} px={2} lineHeight={1.25}>
                        <Grid container xm={12}>

                            <Grid item xm={12} xl={4} display='flex' flexDirection='column'>
                                <DefaultInfoCard
                                    icon="apartment"
                                    title="Hackerspace access"
                                    description="Get unlimited access to hackerspace for a month"
                                    value="10000 points"
                                />
                                <MDButton>Redeem</MDButton>
                            </Grid>
                            <Grid item xm={12} xl={4} display='flex' flexDirection='column'>
                                <DefaultInfoCard
                                    icon="exposure_plus_1"
                                    title="Extra assessment try "
                                    description="Receive another try to submit an assesment after failing it twice"
                                    value="500 points"
                                />
                                <MDButton>Redeem</MDButton>
                            </Grid>
                            <Grid item xm={12} xl={4} display='flex' flexDirection='column'>
                                <DefaultInfoCard
                                    icon="local_offer"
                                    title="-10% reduction Coupon"
                                    description="Get a 10% discount on your next certificate"
                                    value="10000 points"
                                />
                                <MDButton>Redeem</MDButton>
                            </Grid>
                            <Grid item xm={12} xl={4} display='flex' flexDirection='column'>
                                <DefaultInfoCard
                                    icon="local_offer"
                                    title="-20% reduction Coupon"
                                    description="Get a 20% discount on your next certificate"
                                    value="19000 points"
                                />
                                <MDButton>Redeem</MDButton>
                            </Grid>
                        </Grid>

                    </MDBox>
                </MDBox>

            </Header>
            <Footer/>
        </DashboardLayout>
    );
}

export default Shop;
