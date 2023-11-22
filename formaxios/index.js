


//   function axiosPost(event) {
    //     event.preventDefault(); // Prevent the default form submission
    
    
    //     axios.post("https://northwind.vercel.app/api/categories/", {
        //       name: nameinp.value,
        //       surname: surnameinp.value,
        //       age: ageinp.value,
        //       studentID: studentID.value
        //     })
        //     .then(response => {
            //       console.log(response.data); 
            
            //     })
            
            //   }
            
            //   myform.addEventListener('submit', axiosPost);


const nameinp = document.getElementById("nameinp");
const surnameinp = document.getElementById("surnameinp")
const ageinp = document.getElementById("ageinp")
const studentID = document.getElementById("idinp")
const myform = document.getElementById("formm")


function axiosPost(event) {
   event.preventDefault()
    axios.post("https://655c30caab37729791aa046b.mockapi.io/102/swpstudents", {
        name: nameinp.value,
        surname: surnameinp.value,
        age: ageinp.value,
        studentID: studentID.value
    })
}
myform.addEventListener('submit', axiosPost)