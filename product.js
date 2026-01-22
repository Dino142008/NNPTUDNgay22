// =====================
// Câu 1: Constructor Product
// =====================
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// =====================
// Câu 2: Khởi tạo mảng products
// =====================
const products = [
    new Product(1, "iPhone 15", 35000000, 10, "Electronics", true),
    new Product(2, "Laptop Dell", 28000000, 5, "Electronics", true),
    new Product(3, "Tai nghe AirPods", 5500000, 0, "Accessories", true),
    new Product(4, "Chuột Logitech", 1200000, 20, "Accessories", true),
    new Product(5, "Bàn phím cơ", 2500000, 15, "Accessories", false),
    new Product(6, "Màn hình LG", 7000000, 7, "Electronics", true)
];

// =====================
// Câu 3
// =====================
const namePriceList = products.map(p => ({
    name: p.name,
    price: p.price
}));

// =====================
// Câu 4
// =====================
const inStockProducts = products.filter(p => p.quantity > 0);

// =====================
// Câu 5
// =====================
const hasExpensiveProduct = products.some(p => p.price > 30000000);

// =====================
// Câu 6: Kiểm tra Accessories có đang được bán không
// =====================
const accessoriesProducts = products.filter(p => p.category === "Accessories");

// Chỉ cần CÓ ÍT NHẤT 1 sản phẩm đang bán
const hasAccessoriesAvailable = accessoriesProducts.some(p => p.isAvailable === true);


// =====================
// Câu 7
// =====================
const totalInventoryValue = products.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0
);

// =====================
// Câu 8
// =====================
let forOfResult = "";
for (const p of products) {
    forOfResult += `<li>${p.name} - ${p.category} - ${p.isAvailable ? "Đang bán" : "Ngừng bán"}</li>`;
}

// =====================
// Câu 9
// =====================
let forInResult = "";
for (const key in products[0]) {
    forInResult += `<li>${key}: ${products[0][key]}</li>`;
}

// =====================
// Câu 10
// =====================
const sellingAndInStockNames = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);

// =====================
// HIỂN THỊ HTML
// =====================
const output = document.getElementById("output");

output.innerHTML = `
<h2>Câu 1: Constructor Product</h2>
<p>Đã khai báo constructor Product.</p>

<h2>Câu 2: Danh sách sản phẩm (đầy đủ chi tiết)</h2>
<ul>
${products.map(p => `
    <li>
        ID: ${p.id} <br>
        Tên: ${p.name} <br>
        Giá: ${p.price.toLocaleString()} VNĐ <br>
        Số lượng: ${p.quantity} <br>
        Danh mục: ${p.category} <br>
        Trạng thái: ${p.isAvailable ? "Đang bán" : "Ngừng bán"}
    </li><br>
`).join("")}
</ul>

<h2>Câu 3: Name & Price</h2>
<ul>
${namePriceList.map(p => `<li>${p.name} - ${p.price.toLocaleString()} VNĐ</li>`).join("")}
</ul>

<h2>Câu 4: Sản phẩm còn hàng</h2>
<ul>
${inStockProducts.map(p => `<li>${p.name}</li>`).join("")}
</ul>

<h2>Câu 5: Có sản phẩm giá trên 30.000.000?</h2>
<p>${hasExpensiveProduct ? "CÓ" : "KHÔNG"}</p>

<h2>Câu 6: Danh mục Accessories có đang được bán không?</h2>
<p>Kết quả: ${hasAccessoriesAvailable ? "CÓ" : "KHÔNG"}</p>
<p>Danh sách sản phẩm Accessories:</p>
<ul>
${accessoriesProducts.map(p => `
    <li>${p.name} - ${p.isAvailable ? "Đang bán" : "Ngừng bán"}</li>
`).join("")}
</ul>


<h2>Câu 7: Tổng giá trị kho</h2>
<p>${totalInventoryValue.toLocaleString()} VNĐ</p>

<h2>Câu 8: for...of</h2>
<ul>${forOfResult}</ul>

<h2>Câu 9: for...in (Product đầu tiên)</h2>
<ul>${forInResult}</ul>

<h2>Câu 10: Sản phẩm đang bán và còn hàng</h2>
<ul>
${sellingAndInStockNames.map(name => `<li>${name}</li>`).join("")}
</ul>
`;
