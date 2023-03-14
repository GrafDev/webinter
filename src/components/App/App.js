import React, {useState} from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ListContext from "@mui/material/List/ListContext";
import Context from "../../Utils/Context";
import {
	Experimental_CssVarsProvider as CssVarsProvider,
	useColorScheme,
} from '@mui/material/styles';

function App() {
	const {mode, setMode} = useColorScheme();
	const [mounted, setMounted] = useState(false);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		// for server-side rendering
		// learn more at https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
		return null;
	}
	const value = {
		mode,
		setMode
	}


	return (
		<Context.Provider className='App' value={value}>
			<CssVarsProvider>
				<Header/>
				<Main/>
			</CssVarsProvider>
		</Context.Provider>
	)
}

export default App;