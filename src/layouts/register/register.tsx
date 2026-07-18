import { useState } from "react";
import { HiOutlineEyeOff, HiOutlineMail } from "react-icons/hi";
import {
  HiOutlineEye,
  HiOutlinePhone,
  HiOutlineUser,
  HiOutlineUserPlus,
} from "react-icons/hi2";
import Login from "../loginForm/login";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [register, setRegister] = useState(true);
  // const [formData, setFormData] = useState({
  //   username: "",
  //   email: "",
  //   phone: "",
  //   password: "",
  //   role: "customer", // mặc định
  // });
  return (
    <>
      {register ? (
        <div className="min-h-screen bg-[#f6f7fc] flex items-center justify-center px-5">
          <div className="w-full max-w-md rounded-3xl bg-white shadow-xl border border-gray-100 px-8 py-10">
            {/* Icon */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-violet-100 flex items-center justify-center shadow-md">
                  <HiOutlineUserPlus className="text-violet-600" size={34} />
                </div>

                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-violet-600 text-white flex items-center justify-center text-sm font-bold">
                  +
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="text-center mt-7">
              <h1 className="text-3xl font-bold text-gray-900">
                Tạo tài khoản mới 🎉
              </h1>

              <p className="mt-2 text-gray-500 text-sm">
                Đăng ký để bắt đầu sử dụng ứng dụng ghi chú
              </p>
            </div>

            {/* Form */}
            <form className="mt-8 space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Họ và tên
                </label>

                <div className="relative">
                  <HiOutlineUser
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={20}
                  />

                  <input
                    type="text"
                    placeholder="Nhập họ và tên"
                    className="w-full h-14 rounded-xl border border-gray-200 bg-white pl-12 pr-4 outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100 transition"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>

                <div className="relative">
                  <HiOutlineMail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={20}
                  />

                  <input
                    type="email"
                    placeholder="Nhập email"
                    className="w-full h-14 rounded-xl border border-gray-200 bg-white pl-12 pr-4 outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100 transition"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Số điện thoại
                </label>

                <div className="relative">
                  <HiOutlinePhone
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={20}
                  />

                  <input
                    type="tel"
                    placeholder="Nhập số điện thoại"
                    className="w-full h-14 rounded-xl border border-gray-200 bg-white pl-12 pr-4 outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100 transition"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Mật khẩu
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Nhập mật khẩu"
                    className="w-full h-14 rounded-xl border border-gray-200 bg-white px-4 pr-12 outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100 transition"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-violet-600"
                  >
                    {showPassword ? (
                      <HiOutlineEyeOff size={20} />
                    ) : (
                      <HiOutlineEye size={20} />
                    )}
                  </button>
                </div>
              </div>

              {/* Agree */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500"
                />

                <span className="ml-3 text-sm text-gray-600">
                  Tôi đồng ý với{" "}
                  <button
                    type="button"
                    className="font-medium text-violet-600 hover:text-violet-700"
                  >
                    Điều khoản sử dụng
                  </button>
                </span>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                className="
            w-full
            h-14
            rounded-xl
            bg-gradient-to-r
            from-violet-600
            to-indigo-500
            text-white
            font-semibold
            shadow-lg
            hover:scale-[1.01]
            active:scale-[0.99]
            transition
          "
              >
                Đăng ký
              </button>
            </form>

            {/* Login */}
            <p
              className="text-center mt-8 text-sm text-gray-500"
              onClick={() => setRegister(!register)}
            >
              Đã có tài khoản?
              <button
                type="button"
                className="ml-1 font-semibold text-violet-600 hover:text-violet-700"
              >
                Đăng nhập
              </button>
            </p>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};
export default Register;
