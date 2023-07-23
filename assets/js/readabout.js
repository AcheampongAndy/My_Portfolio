const aboutRef = firebase.database().ref("About/");
  
// Retrieve data from Firebase
aboutRef.once("value")
  .then((snapshot) => {
    // Data is a JavaScript object containing all the data under the "About" node
    const data = snapshot.val();
    console.log(data);

    // Now you can do whatever you want with the retrieved data
    // For example, update your webpage with the data, or use it in some other way
  })
  .catch((error) => {
    console.error("Error retrieving data:", error);
  });