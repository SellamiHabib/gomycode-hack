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
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/placeholder.png";
import team4 from "assets/images/placeholder.png";

export default function data(project, type) {
    const Author = ({image, name, profileUrl}) => (
        <MDBox display="flex" alignItems="center" lineHeight={1}>
            <MDAvatar src={image} name={name} size="sm"/>
            <MDBox component='a' href={'user/' + profileUrl} ml={2} lineHeight={1}>
                <MDTypography display="block" variant="button" fontWeight="medium">
                    {name}
                </MDTypography>
            </MDBox>
        </MDBox>
    );

    const LivePreview = ({url}) => (
        <MDBox ml={-1}>
            <MDBadge component="a" href={url} badgeContent="Live Preview" color="success" variant="gradient" size="sm"/>
        </MDBox>
    );
    const Code = ({url}) => (
        <MDBox ml={-1}>
            <MDBadge component="a" href={url} badgeContent="View code" color="dark" variant="gradient"
                     size="sm"></MDBadge>
        </MDBox>
    );

    return {
        columns: [
            {Header: "author", accessor: "author", width: "45%", align: "left"},
            {Header: "", accessor: "code", align: "center"},
            {Header: "", accessor: "livePreview", align: "left"},
            {Header: "note", accessor: "note", align: "center"},
        ],
        rows: type === 'top3' ? project.top3Projects.map(el => {
                // let img = require("../../../" + el.authorImg);
                return {
                    author: <Author image={team4} name={el.authorName} profileUrl={el.authorId}/>,
                    livePreview: <LivePreview url={el.deploymentLink}/>,
                    code: (<Code url={el.githubLink}/>
                    ),
                    note: (
                        <MDTypography variant="caption" color="text" fontWeight="medium">
                            {el.note}/10
                        </MDTypography>
                    ),
                }
            }) :
            [{
                author: <Author image={team1}
                                name={project.topMonthlyproject.authorName}
                                profileUrl={project.topMonthlyproject.authorId}/>,
                livePreview: <LivePreview url={project.topMonthlyproject.deploymentLink}/>,
                code: (<Code url={project.topMonthlyproject.githubLink}/>
                ),
                note: (
                    <MDTypography variant="caption" color="text" fontWeight="medium">
                        {project.topMonthlyproject.note}/10
                    </MDTypography>
                ),
            }]

    };
}
