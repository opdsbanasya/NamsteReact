
import MenuItemList from "./MenuItemList";

const RestaurentInfoCategory = ({data, showItems, setShowItems, toggle, setToggle}) => {
    // console.log(data);

    const handleClick = () => {
        setShowItems();
        setToggle();
    }
    
    return (
        <section className="w-full bg-zinc-100 rounded-md shadow-md">
            <div onClick={handleClick} className="cursor-pointer w-full flex justify-between items-center gap-5 px-5 py-3 rounded-md mb-2">
                <h2 className="text-xl font-bold">{data?.title} ({data?.itemCards.length})</h2>
                <h4 className={`text-xl font-bold ${(showItems && toggle) && "rotate-180"}`}>⬇️</h4>
            </div>
            
            {(showItems && toggle) && <MenuItemList itemList={data.itemCards} btnType={"add"}/>}
        </section>
    );
}

export default RestaurentInfoCategory;
