export default function Form({ content }: { content: string }) {
    return (
        <form className="flex items-center gap-[10px] h-[50px] mb-5">
            <input type="text" placeholder="Your best email address" className="font-bodyFont font-medium text-sm text-black/50 bg-[#F7F7F7] rounded-lg py-[15px] pl-5 w-[300px]" />
            <button className="text-white font-semiBold bg-[#314EE7] rounded-lg py-[15px] px-5 w-[150px] h-full flex items-center justify-center">{content}</button>
        </form>
    )
}
