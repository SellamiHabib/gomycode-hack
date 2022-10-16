/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
// Images

import team2 from "assets/images/team-1.jpg";
import team3 from "assets/images/team-1.jpg";
import team4 from "assets/images/team-1.jpg";

export default function data() {
    const Author = ({image, name, email}) => (
        <MDBox display="flex" alignItems="center" lineHeight={1}>
            <MDAvatar src={image} name={name} size="sm"/>
            <MDBox ml={2} lineHeight={1}>
                <MDTypography display="block" variant="button" fontWeight="medium">
                    {name}
                </MDTypography>
                <MDTypography variant="caption">{email}</MDTypography>
            </MDBox>
        </MDBox>
    );

    const LivePreview = ({url}) => (
        <MDBox ml={-1}>
            <a href={url}>
                <MDBadge badgeContent="Live Preview" color="success" variant="gradient" size="sm"/>
            </a>
        </MDBox>
    );
    const Code = ({url}) => (
        <MDBox ml={-1}>
            <a href={url}>
                <MDBadge badgeContent="View code" color="dark" variant="gradient" size="sm"></MDBadge>
            </a>

        </MDBox>
    );

    return {
        columns: [
            {Header: "author", accessor: "author", width: "45%", align: "left"},
            {Header: "", accessor: "code", align: "center"},
            {Header: "", accessor: "livePreview", align: "left"},
            {Header: "note", accessor: "note", align: "center"},
        ],

        rows: [
            {
                author: <Author image={team2} name="John Michael" email="john@creative-tim.com"/>,
                livePreview: <LivePreview title="Manager" description="Organization"/>,
                code: (<Code url='https://github.com/Jason-B-Jiang/Recipes-Website'/>
                ),
                note: (
                    <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                        9.9/10
                    </MDTypography>
                ),
            },
            {
                author: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com"/>,
                livePreview: <LivePreview title="Programator" description="Developer"/>,
                code: (
                    <MDBox ml={-1}>
                        <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm"/>
                    </MDBox>
                ),
                note: (
                    <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                        9.9/10
                    </MDTypography>
                ),
            },
            {
                author: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com"/>,
                livePreview: <LivePreview title="Executive" description="Projects"/>,
                code: (
                    <MDBox ml={-1}>
                        <MDBadge badgeContent="online" color="success" variant="gradient" size="sm"/>
                    </MDBox>
                ),
                note: (
                    <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                        9.9/10
                    </MDTypography>
                ),
            },
        ],
    };
}
