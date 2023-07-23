function AddAbout() {
    let about = document.getElementById('about').value

    let add_about = firebase.database().ref(`About/`)

    let data = {
        about: about,
    };

     // Push the product to the sub-node
    add_about.push(data);
    new swal("Added");
    document.getElementById('about').value=""
}