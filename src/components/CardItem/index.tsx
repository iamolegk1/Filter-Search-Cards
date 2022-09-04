import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { ICard } from "../../types";
import "./index.sass";

interface ICardProps {
  content: ICard;
}

const CardItem: React.FC<ICardProps> = ({ content }) => (
  <Card className="cardCustom">
    <CardMedia component="img" image={content.coverSrc} alt={content.title} />
    <CardContent>
      <Typography gutterBottom variant="h6">
        {content.title}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        {content.price}$
      </Typography>
    </CardContent>
  </Card>
);

export default CardItem;
