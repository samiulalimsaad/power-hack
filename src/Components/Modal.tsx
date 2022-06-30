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
                    <p className="py-4">
                        You've been selected for a chance to get one year of
                        subscription to use Wikipedia for free!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Modal;
