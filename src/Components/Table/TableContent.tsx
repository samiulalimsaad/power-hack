import { PencilIcon, TrashIcon } from "@heroicons/react/solid";
const TableContent = () => {
    return (
        <section className="p-10">
            <div className="overflow-x-auto">
                <table className="table w-full table-zebra">
                    <thead>
                        <tr className="text-center">
                            <th></th>
                            <th>Billing ID</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Paid Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[1, 2, 3, 4, 5]?.map((v, i) => (
                            <tr key={v?._id} className="text-center">
                                <th>{i + 1}</th>
                                <td>{v?.name}</td>
                                <td>{v?.price}</td>
                                <td>{v?.quantity || ""}</td>
                                <td>{v?.status || ""}</td>
                                <td>{v?.status || ""}</td>
                                <td>
                                    <div className="flex justify-center gap-2">
                                        <button
                                            className="p-2 rounded-full bg-opacity-60 hover:bg-opacity-100 btn btn-warning"
                                            // onClick={() => makeAdmin(v?._id)}
                                        >
                                            <PencilIcon className="w-full h-full" />
                                        </button>
                                        <label
                                            htmlFor="Cancel-Modal"
                                            className="p-2 rounded-full bg-opacity-60 hover:bg-opacity-100 btn btn-error"
                                            onClick={() =>
                                                // setProductId(v?._id)
                                                {}
                                            }
                                        >
                                            <TrashIcon className="w-full h-full" />
                                        </label>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* <CancelModal callback={cancelProduct} /> */}
        </section>
    );
};

export default TableContent;
