const deleteProduct = (button) => {
  const prodId = button.parentNode.querySelector("[name=productId]").value;
  const csrf = button.parentNode.querySelector("[name=_csrf]").value;

  const productElement = button.closest("article");

  fetch("/admin/product/" + prodId, {
    method: "DELETE",
    headers: {
      "csrf-token": csrf,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      productElement.parentNode.removeChild(productElement);
    })
    .catch((err) => console.log(err));
};
