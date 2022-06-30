import BillingForm from "./BillingForm";

const Modal = () => {
    return (
        <div>
            <input type="checkbox" id="add-new-bill" className="modal-toggle" />
            <div className="modal">
                <div className="relative modal-box">
                    <label
                        htmlFor="add-new-bill"
                        className="absolute btn btn-sm btn-circle right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className="text-lg font-bold">
                        Congratulations random Internet user!
                    </h3>
                    <div className="">
                        <BillingForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
