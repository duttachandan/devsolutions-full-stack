import Style from "../style/style.module.css"

const animateLinks = (text: string) => {
    return text.split("").map((elm, index) => {
        return (
            <span
                className={`
                            text-[24px] sm:text-[38px] text-nowrap 
                            md:text-[80px] ${Style.text_BaseNeuLight} 
                            font-bold uppercase ${Style.span_hover_effect}`
                }
                style={{
                    "--index": index,
                    "--content": `"${elm == ' ' ? '-' : elm}"`,
                } as React.CSSProperties}
                key={index}
            >
                <span
                    style={{
                        "--index": index,
                        "--content": `"${elm}"`,
                    } as React.CSSProperties}
                >
                    {elm == ' ' ? '-' : elm}
                </span>
            </span>
        )
    });
}

export default animateLinks;