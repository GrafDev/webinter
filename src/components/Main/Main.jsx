import React, {useState} from "react";
import TemporaryDrawer from "../Header/MenuAppBar/TemporaryDrawer";
import {Container, Paper, ThemeProvider} from "@mui/material";
import styles from "./main.module.css"
import Box from "@mui/material/Box";
import gTheme from '../../Utils/themes'

function Main() {

	return (
		<ThemeProvider theme={gTheme}>
			<Box sx={{
				'height': 'calc(100vh - 80px)',
				background: 'lightBlue',
			}}>
			</Box>
		</ThemeProvider>


	)
}

export default Main;