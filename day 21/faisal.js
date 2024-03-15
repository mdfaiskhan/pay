let data = [];

function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;

    const newData = {
        name: name,
        email: email,
        phone: phone,
        address: address,
        pincode: pincode
    };

    data.push(newData);

    renderTable();
}

function renderTable() {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    data.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.phone}</td>
            <td>${item.address}</td>
            <td>${item.pincode}</td>
            <td><button onclick="editData('${item.email}')">Edit</button><button onclick="deleteData('${item.email}')">Delete</button></td>
        `;
        tableBody.appendChild(row);
    });
}

function editData(email) {
    const newData = prompt("Enter new data (name, email, phone, address, pincode) separated by commas:");
    if (newData) {
        const newDataArr = newData.split(",");
        const index = data.findIndex(item => item.email === email);
        if (index !== -1) {
            data[index] = {
                name: newDataArr[0],
                email: newDataArr[1],
                phone: newDataArr[2],
                address: newDataArr[3],
                pincode: newDataArr[4]
            };
            renderTable();
        } else {
            alert("Data not found!");
        }
    }
}

function deleteData(email) {
    const confirmed = confirm("Are you sure you want to delete this data?");
    if (confirmed) {
        data = data.filter(item => item.email !== email);
        renderTable();
    }
}
