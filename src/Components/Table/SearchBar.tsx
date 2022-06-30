const SearchBar = () => {
    return (
        <div className="py-4 my-10 bg-slate-400 sm:px-20">
            <div className="flex justify-between">
                <div className="flex">
                    <a className="text-xl normal-case btn btn-ghost">Bolling</a>
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Search"
                            className="input input-bordered"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="add-new-bill" className="btn btn-primary">
                        Add New Bill
                    </label>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
