import React from "react";
import { Grid } from '@material-ui/core';
import PageCards from "../components/pageCards";

function MainMenu(props) {
    return (
        <Grid container spacing={4}>
            <PageCards name="About"
                image={require("../images/me.jpg")}
                handlePageChange={props.handlePageChange}
                time={500} />
            <PageCards name="Portfolio"
                image={require("../images/me.jpg")}
                handlePageChange={props.handlePageChange}
                time={1000} />
            <PageCards name="Contact"
                image={require("../images/me.jpg")}
                handlePageChange={props.handlePageChange}
                time={1500} />
        </Grid>
    )
}

export default MainMenu;