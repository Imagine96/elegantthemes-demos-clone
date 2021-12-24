

interface props {
    children?: React.ReactNode
    byLink: string,
    onLink: string,
    text: string
}

const ImgLink = (props: props) => {
    return(
        <p className='text-white p-2 absolute top-0 left-0 z-50' > 
            {` Photo by `}
            <a href={props.byLink} >
            {props.text}
            </a>
            {` on `}
            <a href={props.onLink} >
                Unsplash
            </a>
        </p>
    )
}

export default ImgLink