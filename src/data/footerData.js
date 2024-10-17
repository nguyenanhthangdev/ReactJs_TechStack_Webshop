import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export const footMenu = [
  {
    id: 1,
    title: "Trợ giúp",
    menu: [
      {
        id: 1,
        link: "Câu hỏi thường gặp",
        path: "/",
      },
      {
        id: 2,
        link: "Theo dõi đơn hàng",
        path: "/",
      },
      {
        id: 3,
        link: "Hủy đơn hàng",
        path: "/",
      },
      {
        id: 4,
        link: "Trả lại đơn hàng",
        path: "/",
      },
      {
        id: 5,
        link: "Thông tin bảo hành",
        path: "/",
      },
    ],
  },
  {
    id: 2,
    title: "Chính sách",
    menu: [
      {
        id: 1,
        link: "Chính sách trả hàng",
        path: "/",
      },
      {
        id: 2,
        link: "Bảo hành",
        path: "/",
      },
      {
        id: 3,
        link: "Sơ đồ trang web",
        path: "/",
      },
      {
        id: 4,
        link: "Chính sách bảo hành",
        path: "/",
      },
      {
        id: 5,
        link: "Chính sách và điều kiện",
        path: "/",
      },
    ],
  },
  {
    id: 3,
    title: "Công ty",
    menu: [
      {
        id: 1,
        link: "Về chúng tôi",
        path: "/",
      },
      {
        id: 2,
        link: "Liên hệ chúng tôi",
        path: "/",
      },
      {
        id: 3,
        link: "Trung tâm dịch vụ",
        path: "/",
      },
      {
        id: 4,
        link: "Điều khoản",
        path: "/",
      },
      {
        id: 5,
        link: "Liên kết",
        path: "/",
      },
    ],
  },
];

export const footSocial = [
  {
    id: 1,
    icon: <FaFacebookF />,
    path: "/",
  },
  {
    id: 2,
    icon: <FaTwitter />,
    path: "/",
  },
  {
    id: 3,
    icon: <FaInstagram />,
    path: "/",
  },
  {
    id: 4,
    icon: <FaLinkedinIn />,
    path: "/",
  },
];
