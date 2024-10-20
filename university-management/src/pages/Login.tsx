import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { TokenVerify } from "../utils/TokenVerify";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
// import { TokenVerify } from "../utils/TokenVerify";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [login, { data }] = useLoginMutation();
  const dispatch = useAppDispatch()
  const onSubmit = async (data) => {
    const res = await login(data).unwrap();
    const token = TokenVerify(res.data.accessToken);
    dispatch(setUser({user: token, token: res.data.accessToken}))
  };

  // console.log(data)

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
                backgroundColor: "#1890ff",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
