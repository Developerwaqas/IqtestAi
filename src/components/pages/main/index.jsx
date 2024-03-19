import React from "react";
import { Text, Input } from "../../sharedComponents"
import { experimentalStyled as styled } from "@mui/material/styles";
import { Box, Avatar, Grid, Divider } from "@mui/material";
import Logo from "../../asset/iq-img.png";
import IQLOGO from "../../asset/logo-iq-ai.svg";

const Card = styled(Box)`
border-radius: 40px;
background-color: rgb(9, 8, 8);
margin: 70px;
padding: 60px;
`;


const Footer = () => {
    return (
        <>
            <Card>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Avatar alt="Remy Sharp" src={Logo} sx={{ width: 88, height: 88 }} />
                        <Box mt={4} mb={4}>
                            <Text color="#fff" fontSize="3.75rem" fontWeight="400" variant="p" lineHeight="1.2">Keep up with the latest</Text>
                        </Box>
                        <Box>
                            <Text color="#fff" fontSize="1.25rem" fontWeight="400" variant="p">Join our newsletter to stay up to date on features and releases.</Text>
                        </Box>

                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Box textAlign="center" mb={4} mt={4}>
                            <Text color="#fff" fontSize="1.5rem" fontWeight="700" variant="p">Stay up to date</Text>
                        </Box>
                        <Box display="flex" alignItems="center" sx={{ width: "100%" }}>
                            <Box sx={{ width: "80%" }}>
                                <Input placeholder="Enter Your email" type="email" />
                            </Box>
                            <Box ml={2.5}>
                            <button type="button" class="chakra-button css-1p0teml">Subscribe</button>
                            </Box>
                        </Box>
                        <Box mt={5} textAlign="center">
                            <Text color="#fff" fontSize="1.25rem" fontWeight="400" variant="p">By subscribing you agree with our Privacy Policy</Text>
                        </Box>
                    </Grid>
                </Grid>
                <Box mt={8}>
                    <Divider style={{ backgroundColor: "White", width: "100%" }} />
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Box display="flex" alignItems="center" mt={12}>
                            <Avatar alt="Remy Sharp" src={IQLOGO} sx={{ width: "44px", height: "44px" }} />
                            <Box ml={2}>
                                <Text color="#fff" fontSize="1.875rem" fontWeight="400" variant="p">IQTEST.ai</Text>
                            </Box>
                        </Box>
                        <Box mt={3}>
                            <Text color="grey" fontSize="1.25rem" fontWeight="400" variant="p">Test your IQ in a very easy and <br /> simple step not complex.</Text>
                        </Box>



                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Grid container spacing={2} mt={11}>
                            <Grid item xs={12} sm={12} md={4} lg={4}>
                                <Box>
                                    <Text color="#fff" fontSize="1rem" fontWeight="400" variant="p">IQTEST </Text>
                                </Box>
                                <Box mt={2}>
                                    <Text color="grey" fontSize="1rem" fontWeight="400" variant="p" cursor="pointer">Quiz</Text>
                                </Box>
                                <Box mt={2}>
                                    <Text color="grey" fontSize="1rem" fontWeight="400" variant="p" cursor="pointer">Results</Text>
                                </Box>
                                <Box mt={2}>
                                    <Text color="grey" fontSize="1rem" fontWeight="400" variant="p" cursor="pointer">Pricing</Text>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4}>
                                <Box>
                                    <Text color="#fff" fontSize="1rem" fontWeight="400" variant="p">Support </Text>
                                </Box>
                                <Box mt={2}>
                                    <Text color="grey" fontSize="1rem" fontWeight="400" variant="p" cursor="pointer">Help</Text>
                                </Box>
                                <Box mt={2}>
                                    <Text color="grey" fontSize="1rem" fontWeight="400" variant="p" cursor="pointer">FAQ</Text>
                                </Box>
                                <Box mt={2}>
                                    <Text color="grey" fontSize="1rem" fontWeight="400" variant="p" cursor="pointer">Contact</Text>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4}>
                                <Box>
                                    <Text color="#fff" fontSize="1rem" fontWeight="400" variant="p">Legal </Text>
                                </Box>
                                <Box mt={2}>
                                    <Text color="grey" fontSize="1rem" fontWeight="400" variant="p" cursor="pointer">Privacy Policy</Text>
                                </Box>
                                <Box mt={2}>
                                    <Text color="grey" fontSize="1rem" fontWeight="400" variant="p" cursor="pointer">Terms of Service</Text>
                                </Box>
                                <Box mt={2}>
                                    <Text color="grey" fontSize="1rem" fontWeight="400" variant="p" cursor="pointer">Cookies Policy</Text>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Card>
        </>

    )
}

export default Footer;