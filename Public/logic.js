document.getElementById('binaryInput').addEventListener('keyup', function(event) {
   // Number 13 is the "Enter" key on the keyboard
   if (event.keyCode === 13) {
       // Cancel the default action, if needed
       event.preventDefault();
       // Trigger the button element with a click
       convertBinaryToDecimal();
   }
});

function convertBinaryToDecimal() {
   var binaryInput = document.getElementById('binaryInput').value;
   var decimalOutput = document.getElementById('decimalOutput');

   // Check if the input is a valid binary number
   var isBinary = /^[01]+$/.test(binaryInput);
   if (!isBinary) {
       decimalOutput.textContent = 'Please enter a valid binary number.';
       return;
   }

   // Convert binary to decimal
   var decimal = parseInt(binaryInput, 2);

   // Display the result
   decimalOutput.textContent = 'Decimal: ' + decimal;
}