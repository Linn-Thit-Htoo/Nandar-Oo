var _tableName = "Blog";
var _editId = null;

readData();

function btnSave() {
    _editId === null ? createData() : updateData();
}

function createData() {
    var form = document.forms["frm"];
    var BlogTitle = form["BlogTitle"].value;
    var BlogAuthor = form['BlogAuthor'].value;
    var BlogContent = form["BlogContent"].value;

    if (BlogTitle === "" || BlogTitle === null || BlogAuthor === "" || BlogAuthor === null || BlogContent === "" || BlogContent === null) {
        return;
    }

    var lst = [];

    if (JSON.parse(localStorage.getItem(_tableName)) !== null) {
        lst = JSON.parse(localStorage.getItem(_tableName));
    }

    var postBody = {
        BlogId: uuidv4(),
        BlogTitle: BlogTitle,
        BlogAuthor: BlogAuthor,
        BlogContent: BlogContent
    }

    lst.push(postBody);
    localStorage.setItem(_tableName, JSON.stringify(lst));
    clear();
    readData();
}

function readData() {
    var lst = JSON.parse(localStorage.getItem(_tableName));
    let rows = "";
    var tbody = document.getElementById("tbody");

    if (lst === null)
        return;

    lst.forEach(item => {
        rows += `<tr>
        <td>${item.BlogId}</td>
        <td>${item.BlogTitle}</td>
        <td>${item.BlogAuthor}</td>
        <td>${item.BlogContent}</td>
        <td>
        <button type="button" class="btn btn-warning" onclick="editData('${item.BlogId}')">
            <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button type="button" class="btn btn-danger" style="margin-left:2%" onclick="deleteData('${item.BlogId}')">
            <i class="fa-solid fa-trash"></i>
        </button></td>
      </tr>`;
    });

    tbody.innerHTML = rows;
}

function deleteData(id) {
    if (id === "" || id === null)
        return;

    var lst = JSON.parse(localStorage.getItem(_tableName));

    if (window.confirm("Are you sure you want to delete?")) {
        if (lst === null)
            return;

        var filteredLst = lst.filter(x => x.BlogId !== id);
        localStorage.setItem(_tableName, JSON.stringify(filteredLst));
        readData();
    }
}

function editData(id) {
    if (id === "" || id === null)
        return;

    var lst = JSON.parse(localStorage.getItem(_tableName));
    var results = lst.filter(x => x.BlogId === id);
    if (results.length === 0) {
        alert("No data found.");
        return;
    }

    var item = results[0];
    _editId = item.BlogId;
    document.getElementById("BlogTitle").value = item.BlogTitle;
    document.getElementById("BlogAuthor").value = item.BlogAuthor;
    document.getElementById("BlogContent").value = item.BlogContent;
}

function updateData() {
    var form = document.forms["frm"];
    var BlogTitle = form["BlogTitle"].value;
    var BlogAuthor = form['BlogAuthor'].value;
    var BlogContent = form["BlogContent"].value;

    var lst = JSON.parse(localStorage.getItem(_tableName));
    var index = lst.findIndex(x => x.BlogId === _editId);
    lst[index].BlogTitle = BlogTitle;
    lst[index].BlogAuthor = BlogAuthor;
    lst[index].BlogContent = BlogContent;
    localStorage.setItem(_tableName, JSON.stringify(lst));
    clear();
    readData();
}

function uuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
        (
            c ^
            (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
        ).toString(16)
    );
}

function clear() {
    document.getElementById("BlogTitle").value = "";
    document.getElementById("BlogAuthor").value = "";
    document.getElementById("BlogContent").value = "";
}