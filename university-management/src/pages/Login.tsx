import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { TokenVerify } from "../utils/TokenVerify";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";
import { toast, Toaster } from "sonner";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [login, { isLoading, error }] = useLoginMutation();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: FieldValues) => {
    const res = await login(data).unwrap();
    const token = TokenVerify(res.data.accessToken) as TUser;
    dispatch(setUser({ user: token, token: res.data.accessToken }));
    toast.success(`You have successfully logged in! Welcome back!`);
    navigate("/admin/dashboard");
  };

  if (error) {
    toast.warning(`${error?.data?.message}`);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f2f5",
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          width: "100%",
          padding: "20px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          borderRadius: "8px",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ marginBottom: "16px" }}>
            <label
              htmlFor="id"
              style={{ display: "block", marginBottom: "8px" }}
            >
              User Id
            </label>
            <input
              id="id"
              placeholder="User Id"
              {...register("id", { required: true })}
              style={{
                width: "100%",
                padding: "8px",
                border: errors.id ? "1px solid red" : "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
            {errors.id && (
              <span style={{ color: "red", fontSize: "12px" }}>
                Please input your User ID!
              </span>
            )}
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label
              htmlFor="password"
              style={{ display: "block", marginBottom: "8px" }}
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="*********"
              {...register("password", { required: true })}
              style={{
                width: "100%",
                padding: "8px",
                border: errors.password ? "1px solid red" : "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
            {errors.password && (
              <span style={{ color: "red", fontSize: "12px" }}>
                Please input your Password!
              </span>
            )}
          </div>

          <div>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              {isLoading ? <Spin /> : "Login"}
            </button>
          </div>
          <Toaster richColors position="top-right" />
        </form>
      </div>
    </div>
  );
};

export default Login;
