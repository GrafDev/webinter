import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PropTypes from 'prop-types';

export default function TemporaryDrawer(props) {
	const {openDrawer, setOpenDrawer} = props;


	const handleClose=(open)=>(event)=>{
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}
		setOpenDrawer(false)
	}
	const list = () => (
		<Box
			sx={{width: 250}}
			role="presentation"
			onClick={handleClose(false)}
			onKeyDown={handleClose(false)}
		>
			<List>
				{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
							</ListItemIcon>
							<ListItemText primary={text}/>
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider/>
			<List>
				{['All mail', 'Trash', 'Spam'].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
							</ListItemIcon>
							<ListItemText primary={text}/>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<div>
			<React.Fragment>
				<Drawer
					open={openDrawer}
					onClose={handleClose(false)}
				>
					{list()}
				</Drawer>
			</React.Fragment>
		</div>
	);
}


//it is check props
TemporaryDrawer.propTypes={
	openDrawer:PropTypes.bool,
	setOpenDrawer:PropTypes.func
}