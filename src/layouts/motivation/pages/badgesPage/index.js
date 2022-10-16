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

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Overview page components
import Header from "layouts/motivation/pages/profile/components/Header";

// Data

// Images
import MDAvatar from "../../../../components/MDAvatar";
import badges from './data/badges';

function BadgesPage() {
    const {id} = useParams();

    return (
        <DashboardLayout>
            <DashboardNavbar/>
            <MDBox mb={2}/>
            <Header>
                <MDBox mt={5} mb={3} xl={12}>
                    <MDBox pt={1} pb={2} px={2} lineHeight={1.25}>
                        <MDBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
                            <Grid container>
                                {
                                    badges.map(el => {
                                        return <Grid item xs={12} md={6} lg={4} mt={3}>
                                            <MDBox display="flex" alignItems="center"
                                                   mb={0.5} gap={2}>
                                                <MDAvatar src={el.image}
                                                          alt="badge"
                                                          size="l"
                                                          shadow="sm"
                                                />
                                                <MDBox display="flex"  flexDirection={'column'}>
                                                    <MDTypography
                                                        variant="caption" fontWeight='medium'color="text"
                                                        textTransform="uppercase">
                                                        {el.description}
                                                    </MDTypography>
                                                    <MDTypography
                                                        variant="caption" fontWeight='regular'color="text"
                                                        textTransform="uppercase">
                                                        {el.points} points
                                                    </MDTypography>
                                                </MDBox>

                                            </MDBox>
                                        </Grid>
                                    })
                                }

                            </Grid>
                        </MDBox>

                    </MDBox>
                </MDBox>

            </Header>
            <Footer/>
        </DashboardLayout>
    );
}

export default BadgesPage;
