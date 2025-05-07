const thumbnails = document.querySelectorAll('.hover-container img');
const productName = document.querySelector('.product-name');

thumbnails.forEach(img => {
  img.addEventListener('mouseenter', () => {
    const newName = img.getAttribute('data-name');
    if (newName) {
      productName.textContent = newName;
    }
  });
});

// Đây là file JS của trang chi tiết sản phẩm

const allHoverImages = document.querySelectorAll(".hover-container div img");
const imgContainer = document.querySelector(".img-container");
const list = document.getElementById("list");
const reviewsList = document.querySelector(".reviews-list");
const btnDescription = document.querySelector(".btn-show-description");
const btnReviews = document.querySelector(".btn-show-reviews");
//mảng chứa thông tin sản phẩm
const desProduct = [
  "Cuốn sách 'Khi mọi điều không như ý' Sách truyền cảm hứng sống an yên, học cách buông bỏ, yêu thương bản thân khi cuộc sống không như mong muốn.",
  "Cuốn sách 'Yêu những điều không hoàn hảo' Sách dạy yêu thương bản thân, chấp nhận khuyết điểm, sống tử tế và thấu cảm trong thế giới đầy áp lực.",
  "Cuốn sách 'ChatGPT thực chiến' Hướng dẫn sử dụng ChatGPT hiệu quả trong công việc và học tập, giúp tăng năng suất, sáng tạo và giải quyết vấn đề thực tế nhanh chóng.",
  "Cuốn sách 'Thuật Thao túng' Khám phá cách con người bị điều khiển trong giao tiếp và tâm lý, giúp bạn nhận diện và phòng tránh thao túng trong cuộc sống hàng ngày.",
  "Cuốn sách 'Người đàn ông mang tên OVE' Câu chuyện cảm động về một người đàn ông cô độc dần thay đổi nhờ những mối quan hệ xung quanh, đầy nhân văn và hài hước.",
  "Cuốn sách 'Thiên tài bên trái|Kẻ điên bên phải' Tập hợp những cuộc trò chuyện với người bệnh tâm thần, hé lộ ranh giới mong manh giữa thiên tài và sự điên loạn.",
  "Cuốn sách 'Điềm tĩnh & nóng giận' Sách giúp hiểu và kiểm soát cảm xúc, rèn luyện sự điềm tĩnh để sống tích cực, tránh bùng nổ khi gặp tình huống căng thẳng.",
  "Cuốn sách 'Ghi chép pháp y' Những câu chuyện thực tế từ giám định pháp y, vừa rùng rợn vừa sâu sắc, hé lộ sự thật sau cái chết bằng góc nhìn khoa học.",
  "Cuốn sách 'Tâm lý học tội phạm' Phân tích tâm lý tội phạm qua các vụ án nổi tiếng, giúp bạn hiểu rõ động cơ, hành vi và suy nghĩ của những kẻ phạm tội.",
  "Cuốn sách 'Thao túng tâm lý' Khám phá các kỹ thuật điều khiển tâm lý, giúp nhận diện các chiêu trò thao túng tinh vi trong giao tiếp và các mối quan hệ.",
  "Cuốn sách 'Phải trái đúng sai' Khám phá các tình huống đạo đức phức tạp, giúp bạn hiểu rõ hơn về luân lý, đạo đức và lựa chọn đúng sai trong cuộc sống.",
  "Cuốn sách 'Lý thuyết trò chơi' Giới thiệu cách tư duy chiến lược trong kinh tế, chính trị và đời sống thông qua các tình huống “chơi” và “phản ứng” giữa cá nhân.",
];
//mảng chứa thông tin đánh giá sản phẩm
const reviewsProduct = [
  "Sản phẩm này tuyệt vời quá",
  "Tôi đã thành thạo AI hơn khi đọc được quyển ChatGPT này ",
  "Ở đây bán sách uy tín quá",
];

//truyền dữ liệu từ mảng desProduct chứa thông tin sản phẩm vào thẻ li
for (let i = 0; i < desProduct.length; i++) {
  const li = document.createElement("li");
  li.textContent = desProduct[i];
  list.appendChild(li);
}
// truyền dữ liệu từ mảng reviewsProduct chứa thông tin đánh giá sản phẩm vào thẻ li
for (let i = 0; i < reviewsProduct.length; i++) {
  const li = document.createElement("li");
  li.textContent = reviewsProduct[i];
  reviewsList.appendChild(li);
}

//hiển thị thông tin sản phẩm
function showDescription() {
  document.getElementById("description").style.display = "block";
  btnDescription.classList.add("active_btn");
  document.getElementById("reviews").style.display = "none";
  btnReviews.classList.remove("active_btn");
}

//hiển thị thông tin đánh giá sản phẩm
function showReviews() {
  btnReviews.classList.add("active_btn");
  document.getElementById("description").style.display = "none";
  btnDescription.classList.remove("active_btn");
  document.getElementById("reviews").style.display = "block";
}
//hiển thị thông tin sản phẩm khi load trang
window.addEventListener("DOMContentLoaded", () => {
  allHoverImages[0].parentElement.classList.add("active");
});
//hiển thị ảnh khi hover vào ảnh nhỏ
allHoverImages.forEach((image) => {
  image.addEventListener("mouseover", () => {
    imgContainer.querySelector("img").src = image.src;
    resetActiveImg();
    image.parentElement.classList.add("active");
  });
});
//reset lại ảnh khi hover ra khỏi ảnh nhỏ
function resetActiveImg() {
  allHoverImages.forEach((img) => {
    img.parentElement.classList.remove("active");
  });
}
