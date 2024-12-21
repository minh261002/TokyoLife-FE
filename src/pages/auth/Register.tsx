import { SubmitHandler, useForm } from "react-hook-form";
import type { Login, Register as RegisterType } from "@/types/Auth";
import { useState } from "react";
import useDocumentTitle from "@/hooks/DocumentTitle";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import { EyeIcon, EyeOffIcon, Loader2Icon } from "lucide-react";
import { setToast } from "@/redux/slice/toastSlice";
import { setAuthLogin } from "@/redux/slice/authSlice";
import { useDispatch } from "react-redux";
import { register as RegisterService } from "@/services/AuthServices";

const Login = () => {
  useDocumentTitle("Đăng Ký");
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState<boolean>(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterType>();

  const onSubmit: SubmitHandler<RegisterType> = async (payload) => {
    try {
      setLoading(true);

      const auth = await RegisterService(payload);

      if (!auth) {
        dispatch(
          setToast({
            message: "Đăng ký không thành công",
            type: "error",
          })
        );
        setLoading(false);
        return;
      }

      dispatch(setToast({ message: "Đăng nhập thành công", type: "success" }));
      dispatch(setAuthLogin(auth));

      auth && navigate("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center py-[40px]">
      <div className="w-full max-w-[580px] ">
        <div className="flex flex-col gap-10">
          <h2 className="text-center text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Đăng Ký
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="name" className="form-label d-block mb-2">
                Họ và Tên
              </label>
              <Input
                type="name"
                className="mt-1 block w-full"
                {...register("name", {
                  required: "Vui lòng nhập họ và tên",
                })}
              />

              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label d-block mb-2">
                Email
              </label>
              <Input
                type="email"
                className="mt-1 block w-full"
                {...register("email", {
                  required: "Vui lòng nhập email",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Email không hợp lệ",
                  },
                })}
              />

              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label d-block mb-2">
                Mật Khẩu
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  className="mt-1 block w-full"
                  {...register("password", {
                    required: "Vui lòng nhập mật khẩu",
                    minLength: {
                      value: 6,
                      message: "Mật khẩu phải có ít nhất 6 ký tự",
                    },
                  })}
                />

                {showPassword ? (
                  <EyeOffIcon
                    className="w-6 h-6 absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <EyeIcon
                    className="w-6 h-6 absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>

            <div className="form-group">
              <label
                htmlFor="password_confirmation"
                className="form-label d-block mb-2"
              >
                Xác Nhận Mật Khẩu
              </label>
              <div className="relative">
                <Input
                  type={showPasswordConfirmation ? "text" : "password"}
                  className="mt-1 block w-full"
                  {...register("password_confirmation", {
                    required: "Vui lòng xác nhận mật khẩu",
                    minLength: {
                      value: 6,
                      message: "Mật khẩu phải có ít nhất 6 ký tự",
                    },
                  })}
                />

                {showPasswordConfirmation ? (
                  <EyeOffIcon
                    className="w-6 h-6 absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowPasswordConfirmation(false)}
                  />
                ) : (
                  <EyeIcon
                    className="w-6 h-6 absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowPasswordConfirmation(true)}
                  />
                )}
              </div>
              {errors.password_confirmation && (
                <span className="text-red-500 text-sm">
                  {errors.password_confirmation.message}
                </span>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2"></div>

              <Link to="/forgot-password" className="text-sm text-blue-600">
                Quên mật khẩu?
              </Link>
            </div>

            <Button type="submit" className="w-full text-md font-medium">
              {loading ? (
                <Loader2Icon className="w-6 h-6 animate-spin" />
              ) : (
                "Đăng Ký"
              )}
            </Button>

            <p className="text-center text-sm text-gray-500">
              Bạn đã có tài khoản?{" "}
              <Link to="/dang-nhap" className="text-blue-600">
                Đăng nhập ngay
              </Link>
            </p>
          </form>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="h-px bg-gray-300 w-1/4"></span>
              <span className="text-gray-500 text-sm">Hoặc</span>
              <span className="h-px bg-gray-300 w-1/4"></span>
            </div>
            <FacebookLoginButton
              onClick={() => alert("Hello")}
              style={{
                height: "2.75rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span> Đăng nhập với Facebook</span>
            </FacebookLoginButton>
            <GoogleLoginButton
              onClick={() => alert("Hello")}
              style={{
                height: "2.75rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span> Đăng nhập với Google</span>
            </GoogleLoginButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
