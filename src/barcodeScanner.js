import React from 'react';
import BarcodeScannerComponent from 'react-webcam-barcode-scanner';
 
function BarcodeScanner(width, height) {
 
  const [ data, setData ] = React.useState('Not Found');
 
  return (
    <>
      <BarcodeScannerComponent
        width={width ? width : 100}
        height={height ? height : 100}
        onUpdate={(err, result) => {
          if (result) setData(result.text)
          else setData('Not Found')
        }}
      />
      <p>{data}</p>
    </>
  )
}
 
export default BarcodeScanner;