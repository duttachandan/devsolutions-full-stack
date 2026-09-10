export default function splitAnimateText(text: string) {
    const splitText = text.split("");
    return (
        <>
            {splitText.map((elm, index) => {
                return (
                    <span key={index}>
                        {elm}
                    </span>
                )
            })}
        </>
    )
}