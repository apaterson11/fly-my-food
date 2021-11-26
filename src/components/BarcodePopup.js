import React, { useState } from "react";
import { Button, List, ListItem, ListItemText, Divider, TextField } from "@material-ui/core";
import BarcodeReader from "react-barcode-reader";
import "./css/BarcodeScanner.css";
require("./css/BarcodePopup.css");

function BarcodePopup (props) {
  const [acceptingScanInternal, setAcceptingScanInternal] = useState(true);
  const [result, setResult] = useState("");
  const [barcodeList, setBarcodeList] = useState([]);
  const [count, setCount] = useState(0);
  const [coords, setCoords] = useState([]);

  const productNames = ["Golden Apples", "Large Free-Range Chicken", "Ready to Eat Avocado", "Baby Potatoes", "Carrots", "Walkers 24 Multipack", "Warburtons Medium White Bread", "Lurpak Spreadable"];
  const glasgow = { lat: 55.8642, lng: -4.2518 };
  const locations = [
    [{lat: 51.735851, lng: 0.469710}, glasgow], 
    [{lat: 55.739258, lng: -3.508655}, glasgow], 
    [{lat: 26.879818, lng: -103.348665}, glasgow],
    [{lat: 40.405572, lng: -4.129428}, glasgow], 
    [{lat: 51.735851, lng: 0.469710}, glasgow], 
    [{lat: 51.735851, lng: 0.469710}, glasgow], 
    [{lat: 51.735851, lng: 0.469710}, glasgow], 
    [{lat: 56.3615, lng: 8.6217}, glasgow],
  ];
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
    // let dup_coords = [...coords];
    // dup_coords.push(locations[count]);
    props.children[1](locations[count]);
    setCount(count + 1);
    // console.log(coords);
  }

  return (
    <div className="barcodePopup">
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
    </div>
  );
};

export default BarcodePopup;