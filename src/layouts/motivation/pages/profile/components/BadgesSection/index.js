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

import {useState} from "react";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Grid from "@mui/material/Grid";
import MDAvatar from "../../../../../../components/MDAvatar";
import burceMars from "../../../../../../assets/images/bruce-mars.jpg";
import b1 from "../../../../../../assets/images/badges/b1.png";
import b2 from "../../../../../../assets/images/badges/b2.png";
import b3 from "../../../../../../assets/images/badges/b3.png";
import b4 from "../../../../../../assets/images/badges/b4.png";
import b5 from "../../../../../../assets/images/badges/b5.png";
import b6 from "../../../../../../assets/images/badges/b6.png";
import {useParams} from "react-router-dom";

function BadgesSection() {
    const {id} = useParams();
    return (
        <Card sx={{boxShadow: "none"}}>
            <MDBox p={2}>
                <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                    Badges
                </MDTypography>
            </MDBox>
            <MDBox pt={1} pb={2} px={2} lineHeight={1.25}>
                <MDBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
                    <Grid container>

                        <Grid item xs={12} md={6} lg={4}>
                            <MDAvatar src={b1}
                                      alt="profile-image"
                                      size="l"
                                      shadow="sm"/>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <MDAvatar src={b2}
                                      alt="profile-image"
                                      size="l"
                                      shadow="sm"/>

                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <MDAvatar src={b3}
                                      alt="profile-image"
                                      size="l"
                                      shadow="sm"/>
                        </Grid> <Grid item xs={12} md={6} lg={4} mt={2}>
                        <MDAvatar src={b4}
                                  alt="profile-image"
                                  size="l"
                                  shadow="sm"/>
                    </Grid> <Grid item xs={12} md={6} lg={4} mt={2}>
                        <MDAvatar src={b5}
                                  alt="profile-image"
                                  size="l"
                                  shadow="sm"/>
                    </Grid>
                        <Grid item xs={12} md={6} lg={4} mt={2}>
                            <MDAvatar src={b6}
                                      alt="profile-image"
                                      size="l"
                                      shadow="sm"/>
                        </Grid>
                    </Grid>
                </MDBox>
                <MDBox mt={3}>
                    <MDTypography component='a' href={'/user/'+id+'/badges'}
                                  variant="caption" fontWeight="bold" color="text"
                                  textTransform="uppercase">
                        Show all badges
                    </MDTypography>
                </MDBox>

            </MDBox>
        </Card>
    );
}

export default BadgesSection;
