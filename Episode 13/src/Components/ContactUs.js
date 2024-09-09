const ContactUs = () => {
    return <div className="w-full px-10 py-5 flex">
        <div className="w-5/12 space-y-2 px-5">
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <h2 className="text-lg font-semibold">Mail us for queries</h2>
            <h2 className="text-lg font-semibold">abc@gmail.com</h2>
        </div>
        <form className="w-5/12 h-96 flex flex-col gap-5 items-center justify-center shadow-xl bg-slate-200 rounded-lg">
            <input type="text" placeholder="Enter name" className="px-1 py-3 w-9/12 border-2 text-sm border-solid border-slate-600 rounded-md outline-none" />
            <input type="email" placeholder="Enter email" className="px-1 py-3 w-9/12 border-2 text-sm border-solid border-slate-600 rounded-md outline-none" />
            <textarea placeholder="Enter your message..." className="px-1 py-3 w-9/12 border-2 text-sm border-solid border-slate-600 rounded-md outline-none resize-y" />
            <input type="submit" className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg" />
        </form>
    </div>
}

export default ContactUs;