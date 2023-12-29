import React from 'react';
import Image from 'next/image';

export const renderers = {
    a: link => {
        const { node } = link;
        const url = node.properties.href;
        const value = node.children[0].value;
        const isExternal = url.includes('https://')

        return <a href={url} target={isExternal ? '_blank' : "_self"}>{value}</a>
    },
    p: paragraph => {
        const { node } = paragraph
        if (node.children[0].tagName === "img") {
            const image = node.children[0]
            const metastring = image?.properties?.alt
            // const alt = metastring?.replace(/ *\{[^)]*\} */g, "")
            const metaWidth = metastring?.match(/{([^}]+)x/)
            const metaHeight = metastring?.match(/x([^}]+)}/)
            const width = metaWidth ? metaWidth[1] : "768"
            const height = metaHeight ? metaHeight[1] : "432"
            const isPriority = metastring?.toLowerCase().match('{priority}')
            const hasCaption = metastring?.toLowerCase().includes('{caption:')
            const caption = metastring?.match(/{caption: (.*?)}/)?.pop()

            return (
                <>
                    <Image
                        src={image.properties.src}
                        width={width}
                        height={height}
                        alt={image.properties.alt}
                        priority={isPriority}
                    />
                    {hasCaption ? <div className="caption" aria-label={caption}>{caption}</div> : null}
                </>
            )
        }

        return <p>{paragraph.children}</p>
    },
    img: image => {
        return <Image src={image.src} alt={image.alt} width="100" height="100" />
    },
    // pre: pre => {

    //     return (
    //         <pre
    //             tabIndex={0}
    //             className={pre.node.children[0].properties.className?.[0]}
    //         >

    //             <div>
    //                 {pre.children}
    //             </div>

    //         </pre>
    //     )
    // }




    // pre: pre => {
    //     const handleCopyCode = (e) => {
    //         const htmlDecode = (input) => {
    //             const doc = new DOMParser().parseFromString(input, "text/html");
    //             return doc.documentElement.textContent;
    //         }

    //         const codeToCopy = document.getElementById(pre.children[0].key).nextElementSibling.innerHTML
    //         navigator.clipboard.writeText(htmlDecode(codeToCopy))
    //     }

    //     return (
    //         <pre
    //             tabIndex={0}
    //             className={pre.node.children[0].properties.className?.[0]}
    //             style={{ position: 'relative', paddingBottom: 0, paddingTop: 14 }}
    //         >
    //             <div style={{ overflowX: 'auto' }}>
    //                 <div
    //                     id={pre.children[0].key}
    //                     onClick={handleCopyCode}
    //                     style={{ width: 'auto', position: 'absolute', top: '50%', right: '0px' }}
    //                     className="code-copy-button"
    //                 >
    //                     <Image src="/icons/copy-icon.svg" alt="Copy code" width={18} height={18} />
    //                 </div>

    //                 <div
    //                 style={{ 
    //                     // border: '1px solid #f1f1f1', 
    //                     padding: '.5rem 1rem', 
    //                     // borderRadius: 3
    //                 }}
    //                     // style={{ paddingBottom: 10, paddingTop: 4, border: '1px solid lightgrey'}}
    //                 >
    //                     {pre.children}
    //                 </div>
    //             </div>


    //         </pre>
    //     )
    // }
}