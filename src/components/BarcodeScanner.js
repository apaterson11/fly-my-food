import React, { useState } from "react";
import { Button, List, ListItem, ListItemText, Divider, TextField } from "@material-ui/core";
import BarcodeReader from "react-barcode-reader";
import "./css/BarcodeScanner.css";

function BarcodeScanner () {
  const [acceptingScanInternal, setAcceptingScanInternal] = useState(true);
  const [result, setResult] = useState("");
  const [barcodeList, setBarcodeList] = useState([]);

  const handleInput = (value) => {
    console.log(value)
    setResult(value)
  };
  const handleError = (error) => error && console.error(error);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBarcodeList(barcodeList => [...barcodeList, result])
    console.log(barcodeList)
    
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
            {barcodeList?.map((barcode) =>
              <div>
              <Divider />
              <ListItem>
                <ListItemText>{barcode}</ListItemText>
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