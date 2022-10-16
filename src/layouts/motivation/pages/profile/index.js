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
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Overview page components
import Header from "layouts/motivation/pages/profile/components/Header";
import BadgesSection from "layouts/motivation/pages/profile/components/BadgesSection";

// Data
import profilesListData from "layouts/motivation/pages/profile/data/profilesListData";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import homeDecor4 from "assets/images/home-decor-4.jpeg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Overview() {
    const {id} = useParams();

    return (
        <DashboardLayout>
            <DashboardNavbar/>
            <MDBox mb={2}/>
            <Header>
                <MDBox mt={5} mb={3}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={6} xl={4}>
                            <BadgesSection/>
                        </Grid>
                        <Divider orientation="vertical" sx={{ml: -2, mr: 1}}/>
                        <Grid item xs={12} md={6} xl={4} sx={{display: "flex"}}>
                            <Divider orientation="vertical" sx={{ml: -2, mr: 1}}/>
                            <MDBox>
                                <MDBox pt={2} px={2} lineHeight={1.25}>
                                    <MDTypography variant="h6" fontWeight="medium">
                                        Portfolio
                                    </MDTypography>
                                </MDBox>
                                <MDBox p={2}>
                                    <Grid container spacing={6}>
                                        <Grid item xs={12}>
                                            <DefaultProjectCard
                                                image={homeDecor1}
                                                label="project #1"
                                                title="modern"
                                                description="As Uber works through a huge amount of internal management turmoil."
                                                action={{
                                                    type: "internal",
                                                    route: "/pages/profile/profile-overview",
                                                    color: "info",
                                                    label: "view project",
                                                }}
                                                authors={[
                                                    {image: team1, name: "Elena Morison"},
                                                    {image: team2, name: "Ryan Milly"},
                                                ]}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <DefaultProjectCard
                                                image={homeDecor2}
                                                label="project #2"
                                                title="scandinavian"
                                                description="Music is something that everyone has their own specific opinion about."
                                                action={{
                                                    type: "internal",
                                                    route: "/pages/profile/profile-overview",
                                                    color: "info",
                                                    label: "view project",
                                                }}
                                                authors={[
                                                    {image: team3, name: "Nick Daniel"},
                                                    {image: team4, name: "Peterson"},
                                                ]}
                                            />
                                        </Grid>
                                    </Grid>
                                </MDBox>
                            </MDBox>

                            <Divider orientation="vertical" sx={{mx: 0}}/>
                        </Grid>
                        <Divider orientation="vertical" sx={{ml: -2, mr: 1}}/>
                        <Grid item xs={12} md={6} xl={4} sx={{display: "flex"}}>
                            <Divider orientation="vertical" sx={{ml: -2, mr: 1}}/>
                            <MDBox>
                                <MDBox pt={2} px={2} lineHeight={1.25}>
                                    <MDTypography variant="h6" fontWeight="medium">
                                        Certificates
                                    </MDTypography>
                                </MDBox>

                            </MDBox>

                            <Divider orientation="vertical" sx={{mx: 0}}/>
                        </Grid>
                    </Grid>
                </MDBox>


            </Header>
            <Footer/>
        </DashboardLayout>
    );
}

export default Overview;
