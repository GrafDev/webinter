import React, {useState} from "react";
import MenuAppBar from "./MenuAppBar/MenuAppBar";
import TemporaryDrawer from "./MenuAppBar/TemporaryDrawer";

function Header(){
	const [openDrawer,setOpenDrawer]=useState(false)

	return(
		<>
			<MenuAppBar setOpenDrawer={setOpenDrawer}/>
			<TemporaryDrawer setOpenDrawer={setOpenDrawer} open={openDrawer}/>
		</>
	)
}
export default Header;