const RestaurentInfoCategory = ({data}) => {
    return (
        <section className="w-full ">
            <div className="w-full flex justify-between items-center gap-5 px-5 py-3 rounded-md bg-zinc-200">
                <h2>{data?.title} ({data?.itemCards.length})</h2>
                <h4>⬇️</h4>
            </div>
        </section>
    );
}

export default RestaurentInfoCategory;
