import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import styles from "../styles/Home.module.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';






export default function Home({ dir }) {
  const { locales } = useRouter();


  const intl = useIntl();



  const title = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({ id: "page.home.head.meta.description" });
  const textfieldtitle = intl.formatMessage({ id: "page.home.heading" });
  const buttonfields = intl.formatMessage({ id: "page.home.buttonfield" });
  const mapfield = intl.formatMessage({ id: "page.home.mapfield" });
  const bikefield = intl.formatMessage({ id: "page.home.bikefield" });
  const BikeRegistrationNumber = intl.formatMessage({ id: "page.home.BikeRegistrationNumber" });
  const BikeEngineNumber = intl.formatMessage({ id: "page.home.BikeEngineNumber" });
  const  KerbWeight = intl.formatMessage({ id: "page.home.KerbWeight" });
  const  Power = intl.formatMessage({ id: "page.home.power" });
  const  Torque = intl.formatMessage({ id: "page.home.Torque" });
  const  Wheelbase = intl.formatMessage({ id: "page.home.Wheelbase" });
  const  SeatHeight = intl.formatMessage({ id: "page.home.SeatHeight" });
  const  FuelTankCapacity = intl.formatMessage({ id: "page.home.FuelTankCapacity" });
  const  rake = intl.formatMessage({ id: "page.home.rake" });
  const  trail = intl.formatMessage({ id: "page.home.trail" });
  const  brakes = intl.formatMessage({ id: "page.home.brakes" });
  const  BikeEngineNumbers = intl.formatMessage({ id: "page.home.BikeEngineNumber" });
  
  
  
  

 


  return (
    <div className={styles.container}>
        {/* <img src="https://images.unsplash.com/photo-1496833649630-2d8435ff778d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" /> */}

    <nav className={styles.navbar}>
      <ul>
        <li>Home</li>
        <li>Setting</li>
        <li>Menu</li>
        <li>CAll US</li>
        <li><button className={styles.navbarbutton}>Login</button></li>
      </ul>
    </nav>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* <link rel="icon" href="/favicon.ico" /> */}

        {/* Add hreflang links */}

        <link rel="alternate" href="http://example.com" hrefLang="en" />

      </Head>

      <header>
      
        <div className={styles.languages}>
          {[...locales].sort().map((locale) => (
            <Link key={locale} href="/" locale={locale}>
              {locale}
            </Link>
          ))}
        </div>
      </header>


      <h1 style={{ display: 'flex', alignItem: 'center', justifyContent: 'center', color: 'red' }}> This is a sample project of i18n {textfieldtitle}
      </h1>
      <label style={{ fontSize: '40px' }} >{textfieldtitle}</label> <br /> <br />


      {/*------------ ALL    Textfiled  For Demo     ---------- */}


      <TextField id="outlined-basic" label={textfieldtitle} variant="outlined" />
      <Button variant="contained " style={{ backgroundColor: 'red', margin: '10px', width: '15%', color:'white' }}>{buttonfields}</Button>
      <TextField id="oNative select" label={textfieldtitle} variant="outlined" />


      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField label={textfieldtitle} color="secondary" focused />
        <TextField label={textfieldtitle} variant="filled" color="success" focused />
        <TextField
          label={textfieldtitle}
          variant="standard"
          color="warning"
          focused
        />
      </Box>

      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={mapfield}
        inputProps={{ 'aria-label': 'search google maps' }}
      />

      <TextField fullWidth label={textfieldtitle} id="fullWidth" />
      <br /> <br />

      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-controlled"
          label={textfieldtitle}
          value={TextField}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <TextField
          id="outlined-uncontrolled"
          label={textfieldtitle}
          defaultValue="foo"
        />
      </Box>

      {/* -----------all textfields------- */}
     
     
      <TextField
          className={styles.textField}
          sx={{ width: 250, margin: '10px' }} // Add margin property
          color="primary"
          variant="outlined"
          type="text"
          name="Bike-Title"
          label={bikefield}
          size="medium"
          margin="none"
          
        />
        <TextField
          className={styles.textField1}
          sx={{ width: 250, margin: '10px' }} // Add margin property
          color="primary"
          variant="outlined"
          type="text"
          name="t2"
          label={BikeRegistrationNumber}
          size="medium"
          margin="none"
        />
        <TextField
            className={styles.textField2}
            sx={{ width: 250, margin: '10px' }} // Add margin property
            color="primary"
            variant="outlined"
            type="text"
            name="t3"
            label={BikeEngineNumber}
            size="medium"
            margin="none"
          />
          <TextField
            className={styles.textField3}
            sx={{ width: 250, margin: '10px' }} // Add margin property
            color="primary"
            variant="outlined"
            type="text"
            label={KerbWeight}
            size="medium"
            margin="none"
          />
           <TextField
            className={styles.textField4}
            sx={{ width: 320, margin: '10px' }} // Add margin property
            color="primary"
            variant="outlined"
            type="text"
            label={Power}
           
            size="medium"
            margin="none"
          />
           <TextField
            className={styles.textField5}
            sx={{ width: 320, margin: '10px' }} // Add margin property
            color="primary"
            variant="outlined"
            type="text"
            label={Torque}
            size="medium"
            margin="none"
          />
          <TextField
            className={styles.textField6}
            sx={{ width: 320, margin: '10px' }} // Add margin property
            color="primary"
            variant="outlined"
            type="text"
            label={Wheelbase}
            size="medium"
            margin="none"
          />
          <TextField
            className={styles.textField7}
            sx={{ width: 320, margin: '10px' }} // Add margin property
            color="primary"
            variant="outlined"
            type="text"
            label={SeatHeight}
            size="medium"
            margin="none"
          />
          <TextField
            className={styles.textField8}
            sx={{ width: 320, margin: '10px' }} // Add margin property
            color="primary"
            variant="outlined"
            type="text"
            label={FuelTankCapacity}
            size="medium"
            margin="none"
          />
           <TextField
            className={styles.textField9}
            sx={{ width: 320, margin: '10px' }} // Add margin property
            color="primary"
            variant="outlined"
            type="text"
            label={rake}
            size="medium"
            margin="none"
          />
          <TextField
            className={styles.textField10}
            sx={{ width: 320, margin: '10px' }} // Add margin property
            color="primary"
            variant="outlined"
            type="text"
            label={trail}
            size="medium"
            margin="none"
          />
           <TextField
            className={styles.textField11}
            sx={{ width: 320, margin: '10px' }} // Add margin property
            color="primary"
            variant="outlined"
            type="text"
            label={brakes}
            size="medium"
            margin="none"
          />
           <TextField
            className={styles.textField12}
            sx={{ width: 320, margin: '10px' }} // Add margin property
            color="primary"
            variant="outlined"
            type="text"
            name="t4"
            label={BikeEngineNumber}
            size="medium"
            margin="none"
          />
          <TextField
            className={styles.textField10}
            sx={{ width: 320, margin: '10px' }} // Add margin property
            color="primary"
            variant="outlined"
            type="text"
            label={trail}
            
            size="medium"
            margin="none"
          />
           <TextField
            className={styles.textField11}
            sx={{ width: 320, margin: '10px' }} // Add margin property
            color="primary"
            variant="outlined"
            type="text"
            label={brakes}
           
            size="medium"
            margin="none"
          />
           <TextField
            className={styles.textField12}
            sx={{ width: 320, margin: '10px' }} // Add margin property
            color="primary"
            variant="outlined"
            type="text"
            name="t4"
            label={BikeEngineNumber}
            size="medium"
            margin="none"
          />
          
          









      {/* <input type="text"  name="username"  /> */}
      {/* <button type="button">{textfieldtitle}</button> */}

      <main dir={dir} className={styles.main}>
        <h1 className={styles.title}>
          <FormattedMessage id="page.home.title" values={{ b: (chunks) => <b>{chunks}</b> }} />
        </h1>

        <p className={styles.description}>
          <FormattedMessage id="page.home.description" />
        </p>
      </main>
    </div>


  );
}
