import { useForm } from "react-hook-form";

const ProfileForm = () => {
    const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>
                    firstname:{" "}
                    <input type="text"
                    {...register("firstname", { required: "Field is required",
                    minLength: {
                            value: 3,
                            message: "Min length is 3",
                        },
                     })}/>
                    {errors.firstname && (
                    <div>{errors.firstname.message}</div>
                    )}
                </label>
            </div>
            <div>
                <label>
                    lastname:{" "}
                    <input type="text"
                    {...register("lastname",
                    { required: "Field is required",
                    minLength: {
                        value: 3,
                        message: "Min length is 3",
                    }, 
                    })}/>
                    {errors.lastname && (
                    <div>{errors.lastname.message}</div>
                    )}
                </label>
            </div>
            <div>
                <label>
                    country:
                    <select {...register("country", { required: "Field is required" })}>
                        <option value=""></option>
                        <option value="ua">Ukraine</option>
                        <option value="uk">United Kingdom</option>
                    </select>
                    {errors.country && (
                    <div>{errors.country.message}</div>
                    )}
                </label>
            </div>
          <button type="submit">Send</button>
        </form>
        )
}

export default ProfileForm;