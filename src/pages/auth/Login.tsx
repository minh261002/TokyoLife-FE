import { useForm } from "react-hook-form";
import type { Login } from "@/types/Auth";
import { useState } from "react";
import useDocumentTitle from "@/hooks/DocumentTitle";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import { Loader2Icon } from "lucide-react";

const Login = () => {
  useDocumentTitle("Đăng Nhập");
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>();

  const onSubmit = (data: Login) => {};

  return (
    <div className="flex items-center justify-center py-[40px]">
      <div className="w-full max-w-[580px] ">
        <div className="flex flex-col gap-10">
          <h2 className="text-center text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Đăng Nhập
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
              <Input
                type="password"
                className="mt-1 block w-full"
                {...register("password", {
                  required: "Vui lòng nhập mật khẩu",
                  minLength: {
                    value: 6,
                    message: "Mật khẩu phải có ít nhất 6 ký tự",
                  },
                })}
              />

              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Lưu mật khẩu
                </label>
              </div>

              <Link to="/forgot-password" className="text-sm text-blue-600">
                Quên mật khẩu?
              </Link>
            </div>

            <Button type="submit" className="w-full text-md font-medium">
              {loading ? (
                <Loader2Icon className="w-6 h-6 animate-spin" />
              ) : (
                "Đăng Nhập"
              )}
            </Button>

            <p className="text-center text-sm text-gray-500">
              Bạn chưa có tài khoản?{" "}
              <Link to="/dang-ky" className="text-blue-600">
                Đăng ký ngay
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
              className="h-10"
            >
              <span> Đăng nhập với Facebook</span>
            </FacebookLoginButton>{" "}
            <GoogleLoginButton
              onClick={() => alert("Hello")}
              style={{
                height: "2.75rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="h-10"
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
