export default function Form({ content }: { content: string }) {
    return (
        <form className="flex items-center gap-[10px] h-[50px] mb-5 max-sm:h-10 max-sm:gap-2 max-[425px]:h-[35px]">
            <input type="text" placeholder="Your best email address" className="font-bodyFont font-medium text-sm text-black/50 bg-[#F7F7F7] rounded-lg h-full pl-5 w-[300px] max-sm:w-[200px] max-sm:text-sm max-sm:rounded-md max-[425px]:w-[175px] max-[425px]:text-[10px]" />
            <button className="text-white font-semiBold bg-[#314EE7] rounded-lg py-[15px] px-5 w-[150px] h-full flex items-center justify-center max-sm:w-[100px] max-sm:text-xs max-sm:rounded-md max-[425px]:w-[85px] max-[425px]:text-[10px]">{content}</button>
        </form>
    )
}
