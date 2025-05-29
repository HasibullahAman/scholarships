const page = () => {
    return (
        <div className="flex flex-col items-center h-[50%]">
            {/* Left Side - Image */}
            <div className="grid grid-cols-1 sm:grid-cols-2 w-[80%] lg:grid-cols-3 gap-4 p-4">

                {/* Name Card */}
                <div className="bg-blue-100 rounded-xl shadow p-4 mx-2! my-10!">
                    <div className="card bg-base-100 w-86! shadow-sm">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body!">
                            <h2 className="card-title!">Card Title</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions! justify-end!">
                                <button className="btn! btn-primary!">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Father's Name Card */}
                <div className="bg-green-100 rounded-xl shadow p-4 my-10!">
                    <div className="card bg-base-100 w-96 shadow-sm px-2">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Card Title</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Last Name Card */}
                <div className="bg-yellow-100 rounded-xl shadow p-4 mx-2! my-10!">
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Card Title</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div style={{ height: '150px', overflow: 'hidden', width: '100%' }}>
                <svg
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                    style={{ height: '100%', width: '100%' }}
                >
                    <path
                        d="M0.00,49.99 C150.00,150.00 349.20,-49.99 500.00,49.99 L500.00,150.00 L0.00,150.00 Z"
                        style={{ stroke: 'none', fill: '#f8f9fa' }}
                    ></path>
                </svg>
            </div>
        </div>
    )
}

export default page





// Card
//     < div className = "card bg-base-100 w-96 shadow-sm" >
//   <figure className="px-10 pt-10">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//       alt="Shoes"
//       className="rounded-xl" />
//   </figure>
//   <div className="card-body items-center text-center">
//     <h2 className="card-title">Card Title</h2>
//     <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
//     <div className="card-actions">
//       <button className="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </div >