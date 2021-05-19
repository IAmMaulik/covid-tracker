import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

const Infobox = (props) => {
  const {title, cases, total} = props;

  return (
    <Card className="infoBox">
      <CardContent>
        {/* Title */}
        <Typography color="textSecondary" className="infoBox__title">
          {title}
        </Typography>

        {/* No. of cases */}
        <h2 className="infoBox__cases">{cases}</h2>

        {/* Total  */}
        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Infobox;
