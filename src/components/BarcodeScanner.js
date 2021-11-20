import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import BarcodeReader from "react-barcode-reader";
import "./css/BarcodeScanner.css";

function BarcodeScanner ({
  name,
  showTextInput = true,
  acceptingScan = true,
  buttons = null,
}) {
  const [acceptingScanInternal, setAcceptingScanInternal] = useState(true);
  const [result, setResult] = useState("");

  const handleInput = (value) => {
    console.log(value)
    setResult(value)
    //if (acceptingScan && !showTextInput) onInput(value);
    //else if (acceptingScanInternal && showTextInput) {
      //setAcceptingScanInternal(false);
      //onInput(value);
    //}
  };
  const handleError = (error) => error && console.error(error);


  return (
    <div className="barcode-scanner">
      <BarcodeReader
        onScan={handleInput}
        onError={handleError}
        acceptingScan={acceptingScanInternal || acceptingScan}
      />
      {(result ? (
          <strong>Barcode: {result}</strong>
        ) : (
          <strong>Scan {name} Barcode</strong>
        ))}

      {showTextInput && (
        <div className="flex">
          <TextField
            label={name}
            variant="outlined"
            size="small"
            value={result}
            onChange={(e) => setResult(e.target.value)}
            InputLabelProps={{ shrink: true }}
            className="pr-2"
            onFocus={() => setAcceptingScanInternal(true)}
            onBlur={() => setAcceptingScanInternal(false)}
          />
          {buttons}
        </div>
      )}
    </div>
  );
};

export default BarcodeScanner;