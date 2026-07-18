/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { HiOutlineEye, HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { HiOutlineEyeOff, HiOutlineMail } from "react-icons/hi";
import Register from "../register/register";
import { Button, Form } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginThunk } from "../../redux/app/authThunk/thunk";
import { Input, Checkbox } from "antd";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const handleLogin = async () => {
    const result = await dispatch(LoginThunk({ email, password }) as any);
    if (LoginThunk.fulfilled.match(result)) {
      const role = result.payload.user.role;
      if (role === "admin") {
        navigate("/DASHBOARD");
      }
      navigate("/DASHBOARD");
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
              <Form
                form={form}
                layout="vertical"
                className="mt-8 space-y-2"
                onFinish={handleLogin}
              >
                {/* Email */}
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập email",
                    },
                    {
                      type: "email",
                      message: "Email không hợp lệ",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="Nhập email của bạn"
                    prefix={<HiOutlineMail className="text-gray-400" />}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Item>

                {/* Password */}
                <div className="flex justify-between items-center mb-2">
                  <label className="font-semibold text-gray-700">
                    Mật khẩu
                  </label>

                  <Button type="link" className="!p-0">
                    Quên mật khẩu?
                  </Button>
                </div>

                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập mật khẩu",
                    },
                  ]}
                >
                  <Input.Password
                    onChange={(e) => setPassword(e.target.value)}
                    size="large"
                    placeholder="Nhập mật khẩu của bạn"
                    visibilityToggle={{
                      visible: showPassword,
                      onVisibleChange: setShowPassword,
                    }}
                    iconRender={(visible) =>
                      visible ? <HiOutlineEyeOff /> : <HiOutlineEye />
                    }
                  />
                </Form.Item>

                {/* Remember */}
                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox>Ghi nhớ đăng nhập</Checkbox>
                </Form.Item>

                {/* Button */}
                <Form.Item>
                  <Button
                    htmlType="submit"
                    size="large"
                    className="
        w-full
        h-14
        rounded-xl
        text-blue-500!
        border-none!
       bg-linear-to-r
        from-violet-600
        to-indigo-500
        hover:scale-[1.01]
        active:scale-[0.99]
        transition
      "
                  >
                    Đăng nhập
                  </Button>
                </Form.Item>
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
