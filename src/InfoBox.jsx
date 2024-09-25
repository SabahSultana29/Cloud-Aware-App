import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import "./InfoBox.css";
export default function InfoBox({ info }) {
  const Init_URL =
    "https://images.unsplash.com/photo-1723667516037-8a7d96c627ea?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const Rain_URL =
    "https://img.freepik.com/free-photo/cloud-forest-landscape_23-2151794661.jpg?t=st=1727260160~exp=1727263760~hmac=ff12253f27be8c1320f0c9d5a37d2fdda25c4bdf87332a5617e2e65236eb5a78&w=1060";
  const Summer_URL =
    "https://www.shutterstock.com/shutterstock/videos/20920294/thumb/1.jpg?ip=x480";
  const Snow_URl =
    "https://plus.unsplash.com/premium_photo-1675063428991-a66727d7a8dc?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="InfoBox">
      <div className="card-Container">
        <Card sx={{ maxWidth: 1000 }}>
          <CardMedia
            sx={{ height: 500 }}
            image={
              info.humidity > 85
                ? Rain_URL
                : info.temp > 20
                ? Summer_URL
                : info.temp < 20
                ? Snow_URl
                : Init_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 85 ? (
                <ThunderstormIcon />
              ) : info.temp > 20 ? (
                <WbSunnyIcon />
              ) : info.temp < 20 ? (
                <AcUnitIcon />
              ) : (
                Init_URL
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component="span"
            >
              <p>Temparature = {info.temp}&deg;C</p>
              <p> humidity = {info.humidity}</p>
              <p> Minimum Temparature = {info.temp_min}&deg;C</p>
              <p> Maximum Temparature = {info.temp_max}&deg;C</p>
              <p> Weather = {info.weather}</p>
              <p>
                {" "}
                The weather can described as <i>{info.weather}</i> and feels
                like {info.feels_like}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
