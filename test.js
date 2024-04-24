const { contribute } = require("./contractServices");

async function testContribute() {
  try {
    // Call the contribute function
    const txReceipt = await contribute();

    // Log the transaction receipt
    console.log("Contribution successful. Transaction receipt:", txReceipt);
  } catch (error) {
    console.error("Error contributing to the contract:", error);
  }
}

// Run the test
testContribute();
