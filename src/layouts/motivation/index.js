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

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import projects from './data/mini-projects.json';
import projectShowcaseTable from "layouts/motivation/data/authorsTableData";


function Tables() {
    const top3Projects = projectShowcaseTable(projects[0], 'top3');
    const topMonthlyProject= projectShowcaseTable(projects[0], 'monthly');

    return (
        <DashboardLayout>
            <DashboardNavbar/>
            <MDBox pt={6} pb={3}>

                <Grid container spacing={6}>
                    <Grid item xs={12} >
                        <Card>
                            <MDBox
                                mx={2}
                                mt={-3}
                                py={3}
                                px={2}
                                variant="gradient"
                                bgColor="error"
                                borderRadius="lg"
                                coloredShadow="info"
                            >
                                <MDTypography variant="h4" color="white">
                                    [Checkpoint]: Build a recipes website
                                </MDTypography>
                            </MDBox>
                            <MDBox p={5} lineHeight={0}>

                                <MDTypography variant="button" color="text" fontWeight="regular">
                                    It’s time to practice all of the HTML knowledge you have acquired. In this project, you are going to build a basic recipe website.
                                    <br />
                                    <br />
                                    The website will consist of a main index page which will have links to a few recipes. The website won’t look very pretty by the time you’ve finished. Not unless you’re into brutalist web design, that is.
                                </MDTypography>
                            </MDBox>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card>
                            <MDBox
                                mx={2}
                                mt={-3}
                                py={3}
                                px={2}
                                variant="gradient"
                                bgColor="error"
                                borderRadius="lg"
                                coloredShadow="info"
                            >
                                <MDTypography variant="h6" color="white">
                                    Top 3 projects
                                </MDTypography>
                            </MDBox>
                            <MDBox pt={3}>
                                <DataTable
                                    table={top3Projects}
                                    isSorted={false}
                                    entriesPerPage={false}
                                    showTotalEntries={false}
                                    noEndBorder
                                />
                            </MDBox>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card>
                            <MDBox
                                mx={2}
                                mt={-3}
                                py={3}
                                px={2}
                                variant="gradient"
                                bgColor="error"
                                borderRadius="lg"
                                coloredShadow="info"
                            >
                                <MDTypography variant="h6" color="white">
                                    Top rated project this month
                                </MDTypography>
                            </MDBox>
                            <MDBox pt={3}>
                                <DataTable
                                    table={topMonthlyProject}
                                    isSorted={false}
                                    entriesPerPage={false}
                                    showTotalEntries={false}
                                    noEndBorder
                                />
                            </MDBox>
                        </Card>
                    </Grid>
                </Grid>
            </MDBox>
            <Footer/>
        </DashboardLayout>
    );
}

export default Tables;
