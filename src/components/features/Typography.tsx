export const TextBoldCapitalize = (props: { children: string }) => {
    return (
        <span style={{ fontWeight: "bold", textTransform: "capitalize" }}>
            {props.children}
        </span>
    )
}