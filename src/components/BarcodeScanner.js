import React, { useState } from "react";
import { Button, List, ListItem, ListItemText, Divider, TextField } from "@material-ui/core";
import BarcodeReader from "react-barcode-reader";
import "./css/BarcodeScanner.css";

function BarcodeScanner () {
  const [acceptingScanInternal, setAcceptingScanInternal] = useState(true);
  const [result, setResult] = useState("");
  const [barcodeList, setBarcodeList] = useState([]);
  const [count, setCount] = useState(0);

  const productNames = ["Golden Apples", "Large Free-Range Chicken", "Ready to Eat Avocado", "Baby Potatoes", "Carrots", "Walkers 24 Multipack", "Warburtons Medium White Bread", "Lurpak Spreadable"];
  const locations = [[51.735851, 0.469710], [55.739258, -3.508655],[26.879818, -103.348665], [40.405572, -4.129428], [51.735851, 0.469710], [51.735851, 0.469710], [51.735851, 0.469710], [56.3615, 8.6217]];
  const countriesList = ["England, UK", "Scotland, UK", "Mexico", "Spain", "England, UK", "England, UK", "England, UK", "Denmark"]

  const handleInput = (e, value) => {
    e.preventDefault();
    console.log(value)
    setResult(value)
  };
  const handleError = (error) => error && console.error(error);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBarcodeList(barcodeList => [...barcodeList, [productNames[count], countriesList[count], result]])
    console.log(barcodeList)
    setCount(count + 1)
  }

  return (
    <div className="barcode-scanner">
      <div className="inline-container">
        <div className="left-side">
          <div className="heading">Scan or Enter your Barcode</div>
          <BarcodeReader
            onScan={handleInput}
            onError={handleError}
            acceptingScan={acceptingScanInternal}
          />
          <div className="flex">
            <TextField
              variant="outlined"
              size="small"
              value={result}
              onChange={(e) => setResult(e.target.value)}
              InputLabelProps={{ shrink: true }}
              className="pr-2"
              onFocus={() => setAcceptingScanInternal(true)}
              onBlur={() => setAcceptingScanInternal(false)}
            />
            <Button variant="contained" onClick={(e) => handleSubmit(e)}>Submit</Button>
          </div>
        </div>
        <div className="right-side">
          <div className="heading">Your Shopping List</div>
          <div className="barcodes-list">
            <List dense={true}>
            {barcodeList?.map((line) =>
              <div>
              <Divider />
              <ListItem>
                <ListItemText className="list-item" primary={`${line[0]}, ${line[1]}`} secondary={`Barcode: ${line[2]}`}/>
              </ListItem>
              </div>
            )}
            </List>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarcodeScanner;