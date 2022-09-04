import * as React from "react";

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./index.sass";

interface IFilterProductProps {
  categories: string[];
  toggleCheckbox: string[];
  handleToggle: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
}

const FilterProduct: React.FC<IFilterProductProps> = ({
  categories,
  toggleCheckbox,
  handleToggle,
}) => (
  <div className="categoryWrapper">
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Categories</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormControl>
          <FormGroup>
            {categories.map((title: string, id: number) => (
              <FormControlLabel
                key={id}
                label={title}
                value={title}
                control={
                  <Checkbox
                    checked={toggleCheckbox.includes(`${title}`)}
                    onChange={handleToggle}
                    name={title}
                  />
                }
              />
            ))}
          </FormGroup>
        </FormControl>
      </AccordionDetails>
    </Accordion>
  </div>
);

export default FilterProduct;
