import { useForm, SubmitHandler } from "react-hook-form";
import {
  academicName,
  generateYearOptions,
  months,
} from "../../../utils/dateTime";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCreateAcademicSemesterMutation } from "../../../redux/features/academicSemester/academicSemesterApi";

type FormValues = {
  name: string;
  year: string;
  code: string;
  startMonth: string;
  endMonth: string;
};

const schema = z.object({
  name: z.string({
    required_error: "Please Insert Name",
  }),
  year: z.string({
    required_error: "Please Insert Name",
  }),
  startMonth: z.string({
    required_error: "Please Insert Name",
  }),
  endMonth: z.string({
    required_error: "Please Insert Name",
  }),
});

const CreateAcademicSemester = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });
const [createAcademicSemester] = useCreateAcademicSemesterMutation()
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const academicData = {
      name: academicName[parseInt(data.name) - 1]?.name,
      year: data.year,
      code: data.name,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    createAcademicSemester(academicData);
  };

  return (
    <div className="flex min-w-full flex-col w-full max-w-md">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center p-6 rounded-lg"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Create Academic Semester
        </h2>

        {/* Input Name */}
        <div className="w-full max-w-md mb-4">
          <label className="flex items-center mb-1 text-lg font-medium text-gray-700">
            Name
          </label>
          <select
            {...register("name", { required: true })}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          >
            {academicName.map((term) => (
              <option key={term.value} value={term.value}>
                {term.name}
              </option>
            ))}
          </select>
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        {/* Input Year */}
        <div className="w-full max-w-md mb-4">
          <label className="flex items-center mb-1 text-lg font-medium text-gray-700">
            Year
          </label>
          
          <select
            {...register("year")}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          >
            {generateYearOptions(10).map((item) => (
              <option key={item.year} value={item.year}>
                {item.year}
              </option>
            ))}
          </select>
          {errors.year && <p className="text-red-500">{errors.year.message}</p>}
        </div>
        {/* Input Start Month */}
        <div className="w-full max-w-md mb-4">
          <label className="flex items-center mb-1 text-lg font-medium text-gray-700">
            Start Month
          </label>
          <select
            {...register("startMonth")}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          >
            {months.map((month) => (
              <option value={`${month}`} key={month}>
                {month}
              </option>
            ))}
          </select>
          {errors.startMonth && <p className="text-red-500">{errors.startMonth.message}</p>}
        </div>
        {/* Input End Month */}
        <div className="w-full max-w-md mb-4">
          <label className="flex items-center mb-1 text-lg font-medium text-gray-700">
            End Month
          </label>
          <select
            {...register("endMonth")}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          >
            {months.map((month) => (
              <option value={`${month}`} key={month}>
                {month}
              </option>
            ))}
          </select>
          {errors.endMonth && <p className="text-red-500">{errors.endMonth.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full max-w-md bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300 mt-4 font-semibold shadow-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateAcademicSemester;
