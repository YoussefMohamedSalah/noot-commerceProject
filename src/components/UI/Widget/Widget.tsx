import { Box, Button, Stack, useTheme } from "@mui/material";
import example from "@images/example.png";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

interface Props {
  title: string;
  btnContent: any;
  description: any;
}

const Widget: React.FC<Props> = ({ title, btnContent, description }) => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          width: "100%",
          alignSelf: "center",
          height: "62vh",
          background: "transparent",
          borderRadius: "140px",
          padding: 1,
          border: "1px solid gray"
        }}
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            width: "100%",
            height: "100%",
            background: "#0d9353",
            // hsl(152.16deg 86.21% 28.43%)
            borderRadius: "140px"
          }}
        >
          <Stack
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: "100%", height: "83%", color: "white" }}
          >
            <Box sx={{ fontSize: "1.3rem" }}>{title}</Box>
            <Box
              sx={{
                backgroundColor: "hsl(195.48deg 53.76% 66.08%)",
                width: "19rem",
                height: "19rem",
                borderRadius: "50%",
                outline: "dashed",
                position: "relative"
              }}
            >
              <Box
                component="img"
                src={example.src}
                alt="noot"
                sx={{ display: "block", width: "95%", height: "100%" }}
              />
            </Box>

            <Box>
              <Button
                sx={{
                  backgroundColor: "hsl(181.92deg 76.47% 40%)",
                  color: "white",
                  width: "10rem",
                  height: "2rem",
                  borderRadius: "50px",
                  "&:hover": {
                    backgroundColor: "hsl(181.92deg 76.47% 40%)",
                    color: "white"
                  },
                  alignItems: "center"
                }}
                startIcon={<ArrowDropDownOutlinedIcon fontSize="small" />}
              >
                <p>{btnContent}</p>
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Box>
      <Box pt={4}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
        nesciunt vitae quod quidem corrupti itaque obcaecati, quo libero
        quisquam hic consequuntur enim iste tempore incidunt harum, ullam cum
        nostrum in.
      </Box>
    </>
  );
};

export default Widget;
