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


// Material Dashboard 2 React components
import MDBox from "components/MDBox";
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

import {db} from '../../../../firebase'
import {collection, doc, getDocs, query, updateDoc, where} from "firebase/firestore";
import {useEffect, useState} from "react";

const handleRedeem = async (id, currPoints, setPoints) => {

    const userDocRef = doc(db, 'users', id)
    try {
        await updateDoc(userDocRef, {
            points: currPoints - 1234,
        })
        setPoints(currPoints - 1234);
    } catch (err) {
        alert(err)
    }
}

function Shop() {
    //points retrevial
    const [points, setPoints] = useState(0)
    let {id} = useParams();
    useEffect(() => {
        id = parseInt(id);
        const q = query(collection(db, 'users'), where("id", "==", id))
        const fetchPoints = async (q) => {
            const querySnapshot = await getDocs(q);
            setPoints(querySnapshot.docs[0].data().points);
        }
        fetchPoints(q)
            .catch(err => {
                console.log(err)
            })

    }, [])
    return (
        <DashboardLayout>

            <MDBox mb={2}/>
            <Header points={points}>
                <MDBox mt={5} mb={3} xl={12}>
                    <MDBox pt={1} pb={2} px={2} lineHeight={1.25}>
                        <Grid container xm={12}>

                            <Grid item xm={12} xl={4} display='flex' flexDirection='column'>
                                <DefaultInfoCard
                                    icon="apartment"
                                    title="Hackerspace access"
                                    description="Get unlimited access to hackerspace for a month"
                                    value="1234 points"
                                />
                                <MDButton onClick={() => {
                                    handleRedeem(id, points, setPoints)
                                }}>Redeem</MDButton>
                            </Grid>
                            <Grid item xm={12} xl={4} display='flex' flexDirection='column'>
                                <DefaultInfoCard
                                    icon="exposure_plus_1"
                                    title="Extra assessment try "
                                    description="Receive another try to submit an assesment after failing it twice"
                                    value="1234 points"
                                />
                                <MDButton onClick={() => {
                                    handleRedeem(id, points, setPoints)
                                }}>Redeem</MDButton>
                            </Grid>
                            <Grid item xm={12} xl={4} display='flex' flexDirection='column'>
                                <DefaultInfoCard
                                    icon="access_time"
                                    title="One to one meeting extension"
                                    description="Get extra time in the next one to one meeting"
                                    value="1234 points"
                                />
                                <MDButton onClick={() => {
                                    handleRedeem(id, points, setPoints)
                                }}>Redeem</MDButton>
                            </Grid>
                            <Grid item xm={12} xl={4} display='flex' flexDirection='column'>
                                <DefaultInfoCard
                                    icon="local_offer"
                                    title="-10% reduction Coupon"
                                    description="Get a 10% discount on your next certificate"
                                    value="1234 points"
                                />
                                <MDButton onClick={() => {
                                    handleRedeem(id, points, setPoints)
                                }}>Redeem</MDButton>
                            </Grid>
                            <Grid item xm={12} xl={4} display='flex' flexDirection='column'>
                                <DefaultInfoCard
                                    icon="local_offer"
                                    title="-20% reduction Coupon"
                                    description="Get a 20% discount on your next certificate"
                                    value="1234 points"
                                />
                                <MDButton onClick={() => {
                                    handleRedeem(id, points, setPoints)
                                }}>Redeem</MDButton>
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
