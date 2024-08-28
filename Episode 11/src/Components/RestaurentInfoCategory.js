import MenuItemList from "./MenuItemList";

const RestaurentInfoCategory = ({data}) => {
    // console.log(data);
    
    return (
        <section className="w-full ">
            <div className="w-full flex justify-between items-center gap-5 px-5 py-3 rounded-md bg-zinc-200 mb-2">
                <h2 className="text-xl font-bold">{data?.title} ({data?.itemCards.length})</h2>
                <h4 className="text-xl font-bold">⬇️</h4>
            </div>
            
            <MenuItemList itemList={data.itemCards}/>
        </section>
    );
}

export default RestaurentInfoCategory;
