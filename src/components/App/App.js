import React,{useEffect, useState} from 'react'
import {
	Experimental_CssVarsProvider as CssVarsProvider,
} from '@mui/material/styles';
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModeSwitcher from "../ModeSwitcher/ModeSwitcher";




function App() {
	return (
		<CssVarsProvider>
				<Header/>
				<Main/>
		</CssVarsProvider>
	);
}

export default App;