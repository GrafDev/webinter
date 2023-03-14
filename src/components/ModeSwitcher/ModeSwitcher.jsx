import React,{useEffect, useState} from 'react'
import {
	useColorScheme,
} from '@mui/material/styles';
import Button from "@mui/material/Button";
import SwitchThemes from "../../Utils/materialUISwitch";
import FormControlLabel from "@mui/material/FormControlLabel";
import MaterialUISwitch from "../../Utils/materialUISwitch";



// ModeSwitcher is an example interface for toggling between modes.
// Material UI does not provide the toggle interface—you have to build it yourself.
const ModeSwitcher = () => {
	const { mode, setMode } = useColorScheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		// for server-side rendering
		// learn more at https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
		return null;
	}

	return (
		<FormControlLabel
			control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}		
			onClick={() => {
				if (mode === 'light') {
					setMode('dark');
				} else {
					setMode('light');
				}
			}}
		 label={''}>
			{mode === 'light' ? 'Dark' : 'Light'}
		</FormControlLabel>
	);
};

export default ModeSwitcher;