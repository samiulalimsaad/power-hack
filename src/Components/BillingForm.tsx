import { ErrorMessage, Field, Form, Formik } from "formik";
import { BillingFormValidationSchema } from "./utils.valitationSchema";

interface loginInterface {
    name: string;
    phone: string;
    profession: string;
    email: string;
    password: string;
}

const initialValue = {
    name: "",
    phone: "",
    profession: "student",
    email: "",
    password: "",
};

const BillingForm = () => {
    const createUser = (values: loginInterface) => {};

    return (
        <div className="flex items-center justify-center w-full">
            <Formik
                onSubmit={createUser}
                validationSchema={BillingFormValidationSchema}
                initialValues={initialValue}
            >
                {({ isSubmitting }) => (
                    <Form className="w-full">
                        <div className="px-8 pt-6 pb-8 mb-4 bg-white rounded-md shadow-md ">
                            <div className="mb-4 form-control">
                                <label
                                    className="block mb-2 text-sm font-bold text-slate-700"
                                    htmlFor="fullName"
                                >
                                    Full Name
                                </label>
                                <Field
                                    className="w-full input input-bordered input-accent"
                                    id="fullName"
                                    type="text"
                                    name="fullName"
                                    required
                                />
                                <ErrorMessage
                                    className="text-error"
                                    name="fullName"
                                    component="div"
                                />
                            </div>
                            <div className="mb-4 form-control">
                                <label
                                    className="block mb-2 text-sm font-bold text-slate-700"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <Field
                                    className="w-full input input-bordered input-accent"
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                />
                                <ErrorMessage
                                    className="text-error"
                                    name="email"
                                    component="div"
                                />
                            </div>
                            <div className="mb-4 form-control">
                                <label
                                    className="block mb-2 text-sm font-bold text-slate-700"
                                    htmlFor="phone"
                                >
                                    Phone
                                </label>
                                <Field
                                    className="w-full input input-bordered input-accent"
                                    id="phone"
                                    name="phone"
                                    required
                                />
                                <ErrorMessage
                                    className="text-error"
                                    name="phone"
                                    component="div"
                                />
                            </div>
                            <div className="mb-6 form-control">
                                <label
                                    className="block mb-2 text-sm font-bold text-slate-700"
                                    htmlFor="paidAmount"
                                >
                                    Paid Amount
                                </label>
                                <Field
                                    className="w-full input input-bordered input-accent "
                                    id="paidAmount"
                                    type="paidAmount"
                                    name="paidAmount"
                                    required
                                />
                                <ErrorMessage
                                    className="text-error"
                                    name="paidAmount"
                                    component="div"
                                />
                            </div>
                            <div className="space-y-4 form-control">
                                <button className="w-full px-4 py-2 font-bold bg-teal-300 rounded hover:text-white text-slate-700 hover:bg-teal-700 focus:outline-none focus:shadow-outline">
                                    Add
                                </button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default BillingForm;
