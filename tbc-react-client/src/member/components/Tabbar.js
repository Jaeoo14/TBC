import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Profile from "./setting/Profile2";
import Account from "./setting/Account";
import Address from "./setting/Address";
import Notification from "./setting/Notification";
import Payment from "./setting/Payment";

const AntTabs = withStyles({
  root: {
    borderBottom: "1px solid #e8e8e8",
  },
  indicator: {
    backgroundColor: "#000000",
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    minWidth: 40,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(18),
    marginRight: theme.spacing(1),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      fontWeight: theme.typography.fontWeightBold,
      color: "#000000",
      opacity: 1,
    },
    "&$selected": {
      color: "#000000",
      fontWeight: theme.typography.fontWeightBold,
    },
    "&:focus": {
      color: "#000000",
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="프로필" />
          <AntTab label="계정" />
          <AntTab label="결제수단" />
          <AntTab label="배송지" />
          <AntTab label="알림" />
        </AntTabs>

        <TabPanel value={value} index={0}>
          <Profile />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Account />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Payment />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Address />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Notification />
        </TabPanel>
      </div>
    </div>
  );
}
