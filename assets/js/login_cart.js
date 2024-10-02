document.addEventListener('DOMContentLoaded', function () {
    // Lấy tất cả các nút xóa
    const removeButtons = document.querySelectorAll('.remove-btn');
  
    // Lặp qua từng nút xóa để thêm sự kiện click
    removeButtons.forEach(button => {
      button.addEventListener('click', function (event) {
        const item = this.closest('.cart-item'); // Lấy phần tử cha chứa sản phẩm
        console.log(item)
        if (item) {
          item.remove(); // Xóa sản phẩm khỏi DOM
  
          // Hiển thị Toast
          const toastElement = document.getElementById('toast-success');
          const toast = new bootstrap.Toast(toastElement);
          toast.show();
        }
      });
    });
  });
  