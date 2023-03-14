import {createTheme} from "@mui/material";
import {lightBlue} from "@mui/material/colors";

const gTheme = createTheme({
	components: {
		// Name of the component
		Box: {
			styleOverrides: {
				// Name of the slot
				root: {
					// Some CSS
					background: lightBlue,
				},
			},
		},
	},
});
export default gTheme;