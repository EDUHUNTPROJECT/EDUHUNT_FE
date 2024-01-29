import Link from 'next/link'


const Footer = () => {

    const component = [
        {
            name: "Contact details",
            content: {
                type: "text",
                tel: '+(504) 2276-0010',
                mov: '+(504) 2276-0010',
                Email: 'infozolutto@zolutto.com'
            }
        },
        {
            name: "Menu",
            content: {
                type: "button",
                home: '/',
                news: '/',
                contacts: '/'
            }
        }
    ]

    return (
        <footer className="bg-black h-[40vh] mt-[10vh]" style={{background: 'black', color: 'white'}}>
                <div className="h-[100%] flex items-center">
                    <div className="flex ml-[8vw]">
                        {
                            component.map((item) => {   
                                if(item.content.type == "text") {
                                    return (
                                        <div className='mr-16 w-[21vw] '>
                                            <h2 className="mb-1 text-base font-medium text-gray-900 uppercase ">{item.name}</h2>
                                            <hr className="mb-6 sm:mx-auto border-gray-700 border-1" />
                                            {Object.keys(item.content).map((key) => {
                                                if(key != "type") {
                                                    return (
                                                        <div><span className="mr-2 font-bold">{key}:</span><span className="font-thin">{item.content[key]}</span></div>
                                                    )
                                                }
                                            })}
                                        </div>
                                    )
                                } else if (item.content.type == "button") {
                                    return (
                                        <div className='mr-16 w-[21vw]'>
                                            <h2 className="mb-1 text-base font-medium text-gray-900 uppercase">{item.name}</h2>
                                            <hr className="mb-6 border-1" />
                                            {Object.keys(item.content).map((key) => {
                                                if(key != "type") {
                                                    return (
                                                        <div>
                                                            <Link href={item.content[key]} className='font-medium capitalize'>{key}</Link>
                                                        </div>
                                                    )
                                                }
                                            })}
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
        </footer>
    )
}

export default Footer;