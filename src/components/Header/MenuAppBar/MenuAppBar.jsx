import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import TemporaryDrawer from "./TemporaryDrawer";
import {useState} from "react";
import ModeSwitcher from "../../ModeSwitcher/ModeSwitcher";
import SwitchThemes from "../../../Utils/materialUISwitch";

export default function MenuAppBar() {
	const [auth, setAuth] = useState(true);
	const [anchorEl, setAnchorEl] = useState(null);
	const [openDrawer,setOpenDrawer]=useState(false)


	const handleAccountMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleMenu=(isOpen)=>(event)=>
	{
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}
		setOpenDrawer(isOpen);
	}


	return (
		<>

			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Toolbar>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
							onClick={handleMenu(true)}
						>
							<MenuIcon />
						</IconButton>

						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							<span style={{color:"red"}}>Inter</span>preter
						</Typography>
							<div>
								<ModeSwitcher />
								<IconButton
									size="large"
									aria-label="account of current user"
									aria-controls="menu-appbar"
									aria-haspopup="true"
									onClick={handleAccountMenu}
									color="inherit"
								>
									<AccountCircle />
								</IconButton>
								<Menu
									id="menu-appbar"
									anchorEl={anchorEl}
									anchorOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									keepMounted
									transformOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									open={Boolean(anchorEl)}
									onClose={handleClose}
								>
									<MenuItem onClick={handleClose}>Profile</MenuItem>
									<MenuItem onClick={handleClose}>My account</MenuItem>
								</Menu>
							</div>

					</Toolbar>
				</AppBar>
			</Box>
			<TemporaryDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
		</>
	);
}