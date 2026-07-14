/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { HiOutlineEye, HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { HiOutlineEyeOff, HiOutlineMail } from "react-icons/hi";
import Register from "../register/register";
import { Form } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginThunk } from "../../redux/app/authThunk/thunk";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async () => {
    const result = await dispatch(LoginThunk({ email, password }) as any);
    if (LoginThunk.fulfilled.match(result)) {
      const role = result.payload.user.role;
      if (role === "admin") {
        navigate("/DASHBOARD");
      }
    }
  };
  return (
    <>
      {isLogin ? (
        <>
          <div className="min-h-screen bg-[#f6f7fc] flex items-center justify-center px-5">
            <div className="w-full max-w-md rounded-3xl bg-white shadow-xl border border-gray-100 px-8 py-10">
              {/* Icon */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-violet-100 flex items-center justify-center shadow-md">
                    <HiOutlineClipboardDocumentList
                      className="text-violet-600"
                      size={34}
                    />
                  </div>

                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-violet-600 text-white flex items-center justify-center text-sm font-bold">
                    +
                  </div>
                </div>
              </div>
              <div className="text-center mt-7">
                <h1 className="text-3xl font-bold text-gray-900">
                  Chào mừng bạn quay trở lại 👋
                </h1>

                <p className="mt-2 text-gray-500 text-sm">
                  Đăng nhập để tiếp tục sử dụng ứng dụng ghi chú
                </p>
              </div>

              <Form className="mt-8 space-y-5">
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
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Nhập email của bạn"
                      className="w-full h-14 rounded-xl border border-gray-200 bg-white pl-12 pr-4 outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100 transition"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Mật khẩu
                    </label>

                    <button
                      type="button"
                      className="text-sm text-violet-600 hover:text-violet-700"
                    >
                      Quên mật khẩu?
                    </button>
                  </div>

                  <div className="relative">
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      type={showPassword ? "text" : "password"}
                      placeholder="Nhập mật khẩu của bạn"
                      className="w-full h-14 rounded-xl border border-gray-200 bg-white px-4 pr-12 outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100 transition"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                    >
                      {showPassword ? (
                        <HiOutlineEyeOff size={20} />
                      ) : (
                        <HiOutlineEye size={20} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500"
                  />

                  <span className="ml-3 text-sm text-gray-600">
                    Ghi nhớ đăng nhập
                  </span>
                </div>

                {/* Button */}
                <button
                  onClick={handleLogin}
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
                  Đăng nhập
                </button>
              </Form>

              <p className="text-center mt-8 text-sm text-gray-500">
                Chưa có tài khoản?
                <button
                  type="button"
                  onClick={() => setIsLogin(false)}
                  className="ml-1 font-semibold text-violet-600 hover:text-violet-700"
                >
                  Đăng ký ngay
                </button>
              </p>
            </div>
          </div>
        </>
      ) : (
        <Register />
      )}
    </>
  );
}
