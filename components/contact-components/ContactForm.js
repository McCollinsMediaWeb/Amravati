import React from "react";
import { DatePicker, TimePicker, MobileTimePicker } from "@mui/x-date-pickers";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { useState, useEffect } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

const ContactForm = (props) => {
  console.log();
  const color = "#000";
  const [age, setAge] = React.useState("");
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const [inputSize, SetInputSize] = useState("medium");
  
  useEffect(() => {
    if (isDesktop) {
      SetInputSize("medium");
      return;
    }
    if (!isDesktop) {
      SetInputSize("small");
      return;
    }
  }, [isDesktop]);

  const theme = createTheme({
    palette: {
      primary: { main: "#9F1917" },
      secondary: { main: "#000" },
    },
    typography: {
      fontFamily: ["GE SS Two", "sans-serif"],
    },
  });
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="pd-common ContactRow2 CatSeForm bg3">
      <div className="container">
        <div className="text-center">
          <div className="Ct11 hfont" data-aos="fade-up"
                  data-aos-duration="800">Make an Enquiry</div>
          <div className="Ct22" data-aos="fade-up"
                  data-aos-duration="800">
            Please complete the following details and we will respond to your
            enquiry within 24 hours. <br />
            For urgent requests, please contact via WhatsApp for immediate
            assistance.
          </div>
          <div className="contactFormR1" data-aos="fade-up"
                  data-aos-duration="800">
            <ThemeProvider theme={theme}>
              <form>
                <div className="row">
                  <div className="col-md-12">
                    <TextField
                      label="Name *"
                      fullWidth
                      size={inputSize}
                      name="Name"
                      sx={{
                        svg: { color },
                        input: { color },
                        label: { color },
                        borderColor: { color },
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <TextField
                      label="Phone Number *"
                      fullWidth
                      size={inputSize}
                      name="Phone"
                      sx={{
                        svg: { color },
                        input: { color },
                        label: { color },
                        borderColor: { color },
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <TextField
                      label="Email *"
                      fullWidth
                      size={inputSize}
                      name="Email"
                      sx={{
                        svg: { color },
                        input: { color },
                        label: { color },
                        borderColor: { color },
                      }}
                    />
                  </div>
                  <div className="col-md-12">
                    <TextField
                      label="Aditional Comments , if you have"
                      fullWidth
                      size={inputSize}
                      name="Address"
                      sx={{
                        svg: { color },
                        input: { color },
                        label: { color },
                        borderColor: { color },
                      }}
                    />
                  </div>
                </div>
                
                <div className="text-center">
                  <button className="T7" type="submit">
                    Submit Form
                  </button>
                </div>
              </form>
            </ThemeProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
