import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function PokeCard({ name, image }) {
  return (
    <Card sx={{ maxWidth: 345, borderColor: "#292a2d" }}>
      <CardMedia
        component="img"
        sx={{ height: 200, border: "none" }}
        image={image}
        title="green iguana"
      />
      <CardContent sx={{
        color: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Typography gutterBottom variant="h5" component="div">
          {name[0].toUpperCase() + name.substring(1)}
        </Typography>
      </CardContent>
    </Card>
  );
}
